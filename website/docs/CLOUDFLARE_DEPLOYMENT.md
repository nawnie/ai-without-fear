# Safe Cloudflare Pages deployment for ai-wf.org

This site is intentionally isolated from the `aiembeddedsystems.com` deployment.

## Project boundary

- Repository: `nawnie/ai-without-fear`
- App directory: `website/` if copied into the existing repo
- Cloudflare Pages project name: `ai-wf-org`
- Production domain: `ai-wf.org`
- Do not reuse the existing `aiembeddedsystems` Pages/Workers project, route, or deployment command.

## Dashboard setup

1. Open **Workers & Pages** and create a new Pages application from the `nawnie/ai-without-fear` GitHub repository.
2. Set the project name to `ai-wf-org`.
3. Set the production branch to the landing-page branch for preview. Change to `main` after review and merge.
4. If the app lives in the monorepo under `website/`, set **Root directory** to `website`.
5. Set **Build command** to `npm run build`.
6. Set **Build output directory** to `dist`.
7. Deploy and review the generated `*.pages.dev` preview before attaching a domain.
8. In the new `ai-wf-org` Pages project, open **Custom domains**, choose **Set up a domain**, and enter `ai-wf.org`.
9. Confirm that Cloudflare attaches the domain to `ai-wf-org`, not to any project serving `aiembeddedsystems.com`.

## Recommended environment variable

- `VITE_CONTACT_EMAIL=hello@ai-wf.org`

The app defaults to that address, but the variable makes the contact destination explicit.

## Smoke test

- `ai-wf.org` loads the AI Without Fear page.
- `www.ai-wf.org` either redirects to the apex or is separately attached.
- `aiembeddedsystems.com` remains unchanged.
- The GitHub link opens `nawnie/ai-without-fear`.
- The partnership email links open the configured mailbox.
- Mobile navigation, keyboard focus, and reduced-motion behavior work.
