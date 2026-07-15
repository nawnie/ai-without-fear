# AI Without Fear community site

Multi-page React + Vite site for `ai-wf.org`.

## Pages

- `/` - concise public landing page
- `/programs/` - Community AI Readiness Lab overview
- `/programs/session-1/` - AI Without the Fog Machine demo
- `/programs/session-2/` - Data Traffic Light demo
- `/who-we-serve/` - audience-specific training paths
- `/partners/` - funder, host, and formation partnerships
- `/about/` - mission, formation status, project layers, and resources

The site is built as a Vite multi-page application. Each route has its own HTML entry and metadata while sharing one React component system.

## Local development

```bash
npm install
npm run check
npm run dev
```

## Production build

```bash
npm run build
```

Cloudflare Pages configuration:

```text
Root directory: website
Build command: npm run build
Output directory: dist
Pages project: ai-wf-org
```

Do not connect this site to the separate `aiembeddedsystems.com` Cloudflare project.
