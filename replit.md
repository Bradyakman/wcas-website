# WCAS Website

## Overview
WCAS (Welsh, Carson, Anderson & Stowe) corporate website — a full-stack React + Express application showcasing the firm's technology and healthcare investment portfolio.

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Radix UI, Framer Motion, Wouter (routing)
- **Backend**: Express 5, TypeScript, tsx
- **Build**: Vite for client, esbuild for server
- **Styling**: Tailwind CSS with shadcn/ui components
- **Typography**: Bilo (Adobe Typekit, kit `mny3qsl`) — matches WCAS.com; loaded globally for all text

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

## Home Page Design Notes
- **Stats bar**: Slim `#ededed` bar with WCAS blue numbers, `py-6 md:py-7` padding
- **Sector cards**: Two-column grid (32px gap), 420px min-height, content bottom-aligned (flex, justify-end), 48px padding, 4px border-radius
  - Healthcare gradient: `linear-gradient(135deg, #0f2847 → #1a3a5c → #0d1f38 → #091425)`
  - Technology gradient: `linear-gradient(135deg, #091425 → #0f2847 → #162d50 → #0a1628)`
  - Blue radial accents (`rgba(59,130,246,0.08)`) + dark overlay on top
  - Hover: card scale 1.02 (0.4s), background scale 1.08 (0.6s), blue underline on "Explore" via CSS `::after`
  - Typography: headings `clamp(34px, 5vw, 44px)`, body 17px/300wt, explore 14px/600wt uppercase
  - Responsive: single column below 768px
- **Logo ticker**: Removed
- **Section order**: dark hero → light stats → dark sector cards → dark mission

## Deployment
- Target: Static
- Build command: `npm run build`
- Public directory: `dist/public`
