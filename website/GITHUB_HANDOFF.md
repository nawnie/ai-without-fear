# GitHub handoff

## Repository and branch

- Repository: `nawnie/ai-without-fear`
- Branch: `agent/community-ai-readiness-lab-v0.1`
- Pull request: update the existing Community AI Readiness Lab draft PR
- Destination: `website/`

The repository contains the machine-facing Atlas and the human training layer. The site remains a separate React application under `website/` and links into the public training materials instead of mixing site code into the Atlas tree.

## Visual and information-architecture pass

- preserves the dark navy, orange, cyan, paper, and Torchie design system
- shortens the home page to a focused public overview
- moves program, audience, partner, formation, and mission detail into dedicated pages
- keeps the primary navigation limited to four sections plus one pilot CTA
- uses contextual hyperlinks for deeper material rather than adding every destination to navigation
- gives Sessions 1 and 2 dedicated demonstration pages with local interactive exercises
- links the site to the versioned curriculum source, workbook, safety kit, and GitHub evidence

## Cloudflare Pages

```text
Project name: ai-wf-org
Production branch: main after review
Root directory: website
Build command: npm run build
Build output directory: dist
Domain: ai-wf.org
```

This configuration is separate from the project serving `aiembeddedsystems.com`. Review the generated `*.pages.dev` preview before attaching the apex domain.
