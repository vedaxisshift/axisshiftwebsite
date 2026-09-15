# Axis Shift Data Systems — Website

Marketing site for Axis Shift Data Systems. Next.js (App Router) + TypeScript +
Tailwind CSS, exported as static HTML for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Section copy lives in one place: [`src/content/copy.ts`](src/content/copy.ts).
Site-wide settings (email, nav links, tagline) are in
[`src/lib/site-config.ts`](src/lib/site-config.ts). Editing copy or CTAs almost
never requires touching component files.

## Build

```bash
npm run build
```

This produces a fully static export in `out/` (`next.config.ts` sets
`output: "export"`). No Node server is required to serve the site.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project connected to the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (or wherever this `site/` folder lives in the repo)
4. Add the custom domain `axisshiftdatasystems.com` in Cloudflare Pages once
   the first deploy succeeds. Only add the DNS records Cloudflare Pages asks
   for — leave existing Google Workspace MX/TXT/CNAME records untouched.

## Notes

- All "Request a Private Demo" CTAs currently link to
  `mailto:ved@axisshiftdatasystems.com`. Update `demoMailto` in
  `src/lib/site-config.ts` if this should become a form later.
- No database, auth, or backend services — this is a static marketing site by
  design.
