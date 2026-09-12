# Stamply

Free SEO-friendly Unix timestamp converter. Convert epoch seconds and milliseconds ↔ human-readable dates (UTC, local, ISO 8601) entirely in the browser. No auth, no billing, no ads.

## Features

- Epoch **seconds** and **milliseconds** ↔ date/time
- UTC + local display, timezone presets, **Now** button, copy buttons
- SEO landing pages with unique meta and OG tags:
  - `/unix-timestamp-converter`
  - `/epoch-to-date`
  - `/milliseconds-to-date`
  - `/utc-to-local-time`
  - `/timestamp-to-iso`
- `sitemap.xml` and `robots.txt`

## Traffic goal

Rank for long-tail queries like “unix timestamp converter”, “epoch to date”, and “milliseconds to date”, then convert organic search into bookmark-worthy utility usage. Target: steady organic visits from developer and ops search traffic without paid acquisition.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Client-side conversion only (no backend required for the tool)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
npm start
```

## License

MIT
