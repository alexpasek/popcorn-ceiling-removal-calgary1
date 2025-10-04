import { NextRequest, NextResponse } from 'next/server';

function isSpam(body:any){
  if (body.company && String(body.company).trim() !== '') return 'honeypot filled';
  const ts = Number(body.ts || 0);
  if (!ts || Date.now() - ts < 3000) return 'too fast';
  const msg = (body.message || '') as string;
  const linkCount = (msg.match(/https?:\/\//gi) || []).length;
  if (linkCount > 1) return 'too many links';
  const banned = ['viagra','casino','loan','crypto','porn','sex'];
  if (banned.some(w => msg.toLowerCase().includes(w))) return 'banned keyword';
  return null;
}
async function sendViaResend(to:string, from:string, subject:string, text:string, html:string){
  const key = process.env.RESEND_API_KEY; if(!key) return { ok:false, error:'RESEND_API_KEY missing' };
  const resp = await fetch('https://api.resend.com/emails', { method:'POST', headers:{ 'Authorization': `Bearer ${key}`, 'Content-Type':'application/json' }, body: JSON.stringify({ to:[to], from, subject, text, html }) });
  if(!resp.ok){ return { ok:false, error: await resp.text() }; } return { ok:true };
}
async function sendViaSendGrid(to:string, from:string, subject:string, text:string, html:string){
  const key = process.env.SENDGRID_API_KEY; if(!key) return { ok:false, error:'SENDGRID_API_KEY missing' };
  const resp = await fetch('https://api.sendgrid.com/v3/mail/send', { method:'POST', headers:{ 'Authorization': `Bearer ${key}`, 'Content-Type':'application/json' }, body: JSON.stringify({ personalizations:[{ to:[{ email: to }] }], from:{ email: from }, subject, content:[{ type:'text/plain', value:text }, { type:'text/html', value:html }] }) });
  if(!resp.ok){ return { ok:false, error: await resp.text() }; } return { ok:true };
}
async function sendViaMailgun(to:string, from:string, subject:string, text:string, html:string){
  const key = process.env.MAILGUN_API_KEY; const domain = process.env.MAILGUN_DOMAIN; if(!key || !domain) return { ok:false, error:'MAILGUN_API_KEY or MAILGUN_DOMAIN missing' };
  const form = new FormData(); form.append('from', from); form.append('to', to); form.append('subject', subject); form.append('text', text); form.append('html', html);
  const resp = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, { method:'POST', headers:{ 'Authorization': 'Basic ' + btoa('api:'+key) }, body: form });
  if(!resp.ok){ return { ok:false, error: await resp.text() }; } return { ok:true };
}
export async function POST(req: NextRequest){
  try{
    const body = await req.json();
    const { name, phone, email, neighborhood, service, sqft, message } = body || {};
    if(!name || !phone){ return NextResponse.json({ error:'Name and phone are required.' }, { status:400 }); }
    const spam = isSpam(body); if (spam){ return NextResponse.json({ ok:true }); }
    const parts = ['New Quote Request',`Name: ${name}`,`Phone: ${phone}`, email?`Email: ${email}`:null, neighborhood?`Neighborhood: ${neighborhood}`:null, service?`Service: ${service}`:null, sqft?`Approx SqFt: ${sqft}`:null, message?`Message: ${message}`:null].filter(Boolean) as string[];
    const text = parts.join('\n'); const html = parts.map(l=>l.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')).join('<br />');
    const to = process.env.MAIL_TO || ''; const from = process.env.MAIL_FROM || 'quotes@example.com';
    let sent = { ok:false, error:'no provider configured' } as { ok:boolean; error?:string };
    if (process.env.RESEND_API_KEY) sent = await sendViaResend(to, from, 'New Quote Request - Calgary', text, html);
    else if (process.env.SENDGRID_API_KEY) sent = await sendViaSendGrid(to, from, 'New Quote Request - Calgary', text, html);
    else if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) sent = await sendViaMailgun(to, from, 'New Quote Request - Calgary', text, html);
    if (!sent.ok) console.log('QUOTE_FALLBACK', { to, from, text, error: sent.error });
    return NextResponse.json({ ok:true });
  }catch(err:any){ return NextResponse.json({ error: err?.message || 'Server error' }, { status:500 }); }
}
