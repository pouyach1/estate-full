# FIND-style luxury real estate foundation

A Next.js marketing site inspired by [findrealestate.com](https://findrealestate.com/). It is a white-label starting point: cinematic homepage, searchable listings, agent directory, and inquiry forms. All copy and listings live in `src/config/siteConfig.js`.

## How the original FIND site is built

From the live site’s HTML and headers:

| Layer | What they used |
| --- | --- |
| Framework | **Next.js App Router** (`/_next`, `x-powered-by: Next.js`, route groups like `(home)`) |
| Hosting | **Vercel** (`server: Vercel`, ISR/`x-nextjs-prerender`) |
| Styling | **CSS Modules** (`hero_root__N0Loz`, `header_nav-item__Wn05d`) |
| UI primitives | **Radix UI** for nav dropdowns |
| Motion | Scroll-driven hero (house / clouds / wordmark) plus **Lenis** smooth scroll |
| Images | `next/image` with hashed static media |
| Product split | Marketing site on `findrealestate.com`; agent login on `app.findrealestate.com` |

Pages on the original: `/`, `/search`, `/agents`, `/about`, `/join`, `/services`, `/blog`, plus legal pages.

This repo follows the same architecture with a simpler stack so you can own the code:

- Next.js 15 App Router + React 19
- Tailwind CSS 4 instead of CSS Modules
- Framer Motion for the hero and reveals
- Lenis for smooth scrolling
- Content as a config file instead of a CMS (easy to swap later)

## Customize

1. Edit `src/config/siteConfig.js` — brand, nav, Iranian listings, consultants, blog.
2. Swap photos in `src/config/photos.js` (local paths under `public/images/`).
3. Default locale is Persian RTL (`fa` / `rtl`) with Iranian product copy and تومان pricing. Brand mark FIND stays Latin.

```bash
npm install
npm run dev
```
