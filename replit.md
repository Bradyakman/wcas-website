# WCAS Website

## Overview
WCAS (Welsh, Carson, Anderson & Stowe) corporate website — a full-stack React + Express application showcasing the firm's technology and healthcare investment portfolio.

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Radix UI, Framer Motion, Wouter (routing)
- **Backend**: Express 5, TypeScript, tsx
- **Build**: Vite for client, esbuild for server
- **Styling**: Tailwind CSS with shadcn/ui components
- **Typography**: Bilo (Adobe Typekit, kit `mny3qsl`) as base; Homepage uses Libre Baskerville (serif headings) + Outfit (sans-serif body) for dark blue design. Playfair Display for stat numbers on legacy pages.

## Home Page Design
- Dark blue theme (`#0C1A2E` background) inspired by KKR/Thoma Bravo/General Atlantic
- Accent color: `#6BA3D6` (light blue)
- Sections: Hero (with stats) → Sectors (split-screen) → Video Slider → Quote → Portfolio (logo marquee) → News (light background)
- Fonts: Libre Baskerville for serif headings, Outfit for sans-serif body; Cormorant Garamond + DM Sans for portfolio/news/sector sections
- All inline styles for the dark theme (no Tailwind dark mode needed)
- Video carousel with drag-to-scroll and Vimeo lightbox modal
- Portfolio marquee: auto-scrolling company name cards, pauses on hover, 30s loop, reduced-motion fallback
- News section: light (#f4f3f0) background, 2-column grid with featured dark card + 3 stacked white cards
- Transition strip: 4px teal-to-gold gradient between portfolio and news
- CSS classes: `.video-card-blue`, `.news-row-blue`, `.port-marquee-*`, `.news-card` in Home.tsx inline styles

## Project Structure
```
client/           - React frontend (Vite root)
  src/
    components/   - UI components (shadcn/ui + custom)
    pages/        - Page components
    hooks/        - Custom React hooks
    lib/          - Utilities
    assets/       - Static assets
server/           - Express backend
  index.ts        - Server entry point
  routes.ts       - API routes
  vite.ts         - Vite dev middleware
  static.ts       - Static file serving (production)
shared/           - Shared types/schemas (Drizzle + Zod)
attached_assets/  - Images and media assets
script/           - Build scripts
dist/             - Production build output
```

## Commands
- `npm run dev` — Start dev server (Express + Vite HMR) on port 5000
- `npm run dev:client` — Start Vite client only
- `npm run build` — Production build
- `npm run start` — Start production server

## Deployment
- Target: Static
- Build command: `npm run build`
- Public directory: `dist/public`
