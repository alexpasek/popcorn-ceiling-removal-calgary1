
# popcorn-ceiling-removal-calgary-21.7.7-pro-cloudflare-quote-fix

- Guaranteed `/quote` page (+ `/get-quote` alias) and `/services` index
- Edge email API (Resend/SendGrid/Mailgun) for Cloudflare Pages
- Local SEO neighborhood pages at `/calgary/[neighborhood]`
- Smaller Before/After + clickable galleries + natural-aspect logo
- Central phone: update once in `data/site.ts`

## Local dev
```bash
npm install
cp .env.example .env   # set provider keys + MAIL_TO/MAIL_FROM
npm run dev
```

## Cloudflare Pages
- Build command: `npx @cloudflare/next-on-pages`
- Output dir: `.vercel/output/static`
- Env vars: `RESEND_API_KEY` (or SendGrid/Mailgun), `MAIL_TO`, `MAIL_FROM`

Open `/debug` to confirm routes.
