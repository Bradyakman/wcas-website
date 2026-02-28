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
- Sections: Hero with photo overlay → Stats (blue top borders) → Sectors → Value Creation → Video Slider → Quote block → News
- Fonts: Libre Baskerville for serif headings, Outfit for sans-serif body text
- All inline styles for the dark theme (no Tailwind dark mode needed)
- Video carousel with drag-to-scroll and Vimeo lightbox modal
- CSS classes: `.sector-card-blue`, `.video-card-blue`, `.news-row-blue` in index.css

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
