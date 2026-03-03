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
- Accent color: `#6BA3D6` (light blue), Teal: `#4db8c7`, Gold: `#c8985e`
- Font constants: `SERIF = "'Cormorant Garamond', Georgia, serif"`, `SANS = "'DM Sans', sans-serif"`
- Sections: Hero (with stats) → Our Focus Sectors (split-screen) → Portfolio (logo marquee) → Spotlight+Sidebar → Transition strip → News & Perspectives
- All inline styles for the dark theme (no Tailwind dark mode needed)
- Video spotlight with filter tabs (All/Technology/Healthcare), alphabetical sorting, Vimeo lightbox modal
- Portfolio marquee: auto-scrolling company logo cards with hover reveal (original brand colors)
- News section: light (#f4f3f0) background, accordion design with expandable rows, white logo containers
- Transition strip: 4px teal-to-gold gradient between portfolio and news
- Most nav links disabled (preventDefault) — only home and /ai are active routes

## AI Page (`/ai`)
- Route: `/ai`, component: `AIPage.tsx`
- Dark theme matching homepage design system
- Sections: Hero (particle canvas + anchor nav) → About → AI Landscape → Outlook → Playbook (interactive split-panel) → Case Studies (6 companies with sector filter) → Team (auto-scrolling marquee) → Quote → Stats → CTA
- Breadcrumb navigation: Home (links to /) / About / WCAS on AI
- Navbar link: "AI at WCAS" replaces "Our Firm"
- Self-contained styles (no external CSS dependencies beyond Google Fonts)

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
