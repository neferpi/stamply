# Deploy Stamply on Cloudflare Pages (custom domain)

Canonical site: **https://stamply.darthcassan.com**  
Repo: [neferpi/stamply](https://github.com/neferpi/stamply)

`SITE_URL` in `src/lib/site.ts` is already set to the custom domain (sitemap, robots, Open Graph).

## 1. Create the Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub if needed
3. Select repository **`neferpi/stamply`**
4. Production branch: **`main`**

## 2. Build settings

| Setting | Value |
|--------|--------|
| Framework preset | Next.js (Static HTML Export) or None |
| Build command | `npm ci && npm run build` |
| Build output directory | **`out`** |

Confirmed in `next.config.ts`: `output: "export"` (static export → `out/`).

## 3. Custom domain

1. Pages project → **Custom domains** → **Set up a domain**
2. Enter **`stamply.darthcassan.com`**
3. Follow Cloudflare’s DNS instructions

## 4. DNS (if manual)

In the **darthcassan.com** zone:

| Type | Name | Target |
|------|------|--------|
| CNAME | `stamply` | `<your-pages-project>.pages.dev` |

Use the exact target Cloudflare shows. Proxied (orange cloud) is fine. `*.pages.dev` may remain as preview.

## 5. After go-live

- [ ] https://stamply.darthcassan.com loads
- [ ] https://stamply.darthcassan.com/sitemap.xml exists
- [ ] HTTPS certificate active

## Notes

- Pushing to `main` triggers a Pages deploy when Git is connected.
- Production belongs on Daniel’s Cloudflare for `darthcassan.com` — not another account.
