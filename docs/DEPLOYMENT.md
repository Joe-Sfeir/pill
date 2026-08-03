# Deployment

Run `npm ci`, `npm run lint`, `npm run test`, and `npm run build`. Configure HTTPS, canonical `NEXT_PUBLIC_SITE_URL`, approved contacts, and only the provider secrets actually used. On Vercel, import and set project environment variables; elsewhere use Node 20+ and `npm start`. Recheck robots, sitemap, forms, consent, CSP/security headers, image optimization, and policy copy after deployment.
