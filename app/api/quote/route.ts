// app/api/quote/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";
export const dynamic = "force-dynamic";

// --- spam / hygiene ----------------------------------------------------------
function normalizeTs(ts: any) {
  let n = Number(ts || 0);
  // accept seconds or milliseconds
  if (n && n < 1e12) n *= 1000;
  return n;
}
function isSpam(body: any) {
  if (body.company && String(body.company).trim() !== "")
    return "honeypot filled";
  const ts = normalizeTs(body.ts);
  if (!ts || Date.now() - ts < 3000) return "too fast";
  const msg = String(body.message || "");
  const linkCount = (msg.match(/https?:\/\//gi) || []).length;
  if (linkCount > 1) return "too many links";
  const banned = ["viagra", "casino", "loan", "crypto", "porn", "sex"];
  if (banned.some((w) => msg.toLowerCase().includes(w)))
    return "banned keyword";
  return null;
}
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// --- providers (Edge-safe: use fetch, not SDKs) ------------------------------
async function sendViaResend(
  env: Record<string, string>,
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) {
  const key = env.RESEND_API_KEY;
  if (!key) return { ok: false, error: "RESEND_API_KEY missing" };
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: [to], from, subject, text, html }),
  });
  return resp.ok ? { ok: true } : { ok: false, error: await resp.text() };
}
async function sendViaSendGrid(
  env: Record<string, string>,
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) {
  const key = env.SENDGRID_API_KEY;
  if (!key) return { ok: false, error: "SENDGRID_API_KEY missing" };
  const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from },
      subject,
      content: [
        { type: "text/plain", value: text },
        { type: "text/html", value: html },
      ],
    }),
  });
  return resp.ok ? { ok: true } : { ok: false, error: await resp.text() };
}
async function sendViaMailgun(
  env: Record<string, string>,
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) {
  const key = env.MAILGUN_API_KEY;
  const domain = env.MAILGUN_DOMAIN;
  if (!key || !domain)
    return { ok: false, error: "MAILGUN_API_KEY or MAILGUN_DOMAIN missing" };

  const form = new FormData();
  form.append("from", from);
  form.append("to", to);
  form.append("subject", subject);
  form.append("text", text);
  form.append("html", html);

  const resp = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: "POST",
    headers: { Authorization: "Basic " + btoa("api:" + key) },
    body: form,
  });
  return resp.ok ? { ok: true } : { ok: false, error: await resp.text() };
}

// --- handlers ----------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    // Cloudflare Pages env at runtime:
    const { env } = getRequestContext(); // use env bindings, not process.env on Edge
    // (Set these in Pages → Settings → Environment variables)

    const body = await req.json();
    const { name, phone, email, neighborhood, service, sqft, message } =
      body || {};

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }
    const spam = isSpam(body);
    if (spam) {
      // Pretend success to not train bots
      return NextResponse.json({ ok: true });
    }

    const lines = [
      "New Quote Request",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      neighborhood ? `Neighborhood: ${neighborhood}` : null,
      service ? `Service: ${service}` : null,
      sqft ? `Approx SqFt: ${sqft}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean) as string[];

    const text = lines.join("\n");
    const html = lines.map(esc).join("<br />");

    const to = env.MAIL_TO || "";
    const from = env.MAIL_FROM || "quotes@example.com";
    const subject = "New Quote Request - Calgary";

    // Try providers in order; fall through on failure
    const attempts: Array<() => Promise<{ ok: boolean; error?: string }>> = [];
    if (env.RESEND_API_KEY)
      attempts.push(() =>
        sendViaResend(env as any, to, from, subject, text, html)
      );
    if (env.SENDGRID_API_KEY)
      attempts.push(() =>
        sendViaSendGrid(env as any, to, from, subject, text, html)
      );
    if (env.MAILGUN_API_KEY && env.MAILGUN_DOMAIN)
      attempts.push(() =>
        sendViaMailgun(env as any, to, from, subject, text, html)
      );

    let sent = { ok: false, error: "no provider configured" };
    for (const run of attempts) {
      sent = await run();
      if (sent.ok) break;
    }
    if (!sent.ok) {
      console.error("QUOTE_EMAIL_FAILED", { to, from, error: sent.error });
      // Still return ok to the client; you can flip this to 500 if you prefer
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
