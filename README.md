# Cyberpunk Portfolio

A single-page developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**, with a dark cyberpunk aesthetic — neon-cyan accents, a glowing portrait with a subtle 3D tilt, and scroll-triggered animations.

Originally built as a personal portfolio, it's structured so anyone can fork it and use it as a template. Swap the content, drop in your own photo, and deploy.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff44cc)

## Features

- **Hero** — circular portrait with a pulsing neon glow and a cursor-driven 3D tilt (clamped so it stays subtle)
- **Identity cards** — three glassmorphic cards for your core strengths
- **Project matrix** — sections for ventures and client work
- **Technical arsenal** — a grid of skill categories
- **Live activity widget** — a fixed status indicator that cycles through messages
- Responsive (mobile → desktop), accessible (reduced-motion + keyboard support), and SEO metadata out of the box

## Tech stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) (App Router) | Framework, routing, image optimization |
| [React 18](https://react.dev) | UI |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling |
| [Framer Motion 10](https://www.framer.com/motion/) | Animations |
| TypeScript | Config/layout typing (components are JSX) |

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org) 18.17 or newer and npm.

```bash
# clone
git clone https://github.com/sobitchand/portfolio.git
cd portfolio

# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edits hot-reload.

### Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Customizing it for yourself

All the page content lives in one file: [`components/Portfolio.jsx`](components/Portfolio.jsx). Each section is its own component.

| What to change | Where |
|----------------|-------|
| Name, role, tagline, bio | `HeroSection` in `components/Portfolio.jsx` |
| Your photo | Replace `public/portrait.jpg` (keep the name, or update the `src` in the `<Image>`) |
| Cards / strengths | `IdentityCards` |
| Ventures & client work | `ProjectMatrix` |
| Skills | `TechnicalArsenal` |
| Status messages | `LiveActivityWidget` |
| Page title & SEO | `app/layout.tsx` (`metadata`) |
| Colors & theme | `tailwind.config.js` + the hex values in `globals.css` |

**Theme colors** (cyberpunk obsidian + neon):

- Background: `#0a0e27`
- Accent cyan: `#00ffcc`
- Accent green: `#00ff88`

**Tuning the 3D tilt:** the portrait's tilt is controlled by the `MAX_TILT` constant at the top of `HeroSection` (degrees). Lower it for a flatter look, raise it for more drama — it's clamped so it never over-rotates.

## Project structure

```
.
├── app/
│   ├── layout.tsx          # Root layout + metadata/SEO
│   └── page.jsx            # Renders <Portfolio />
├── components/
│   └── Portfolio.jsx       # All page sections live here
├── public/
│   └── portrait.jpg        # Your photo
├── globals.css             # Base styles, fonts, animations
├── tailwind.config.js      # Theme (colors, fonts, animations)
└── postcss.config.js       # Tailwind + autoprefixer
```

## Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push your fork to GitHub.
2. Import the repo on Vercel.
3. Accept the defaults (it auto-detects Next.js) and deploy.

Every push to `main` redeploys automatically. It also runs on any host that supports Next.js (Netlify, a Node server via `npm run build && npm start`, etc.).

## License

[MIT](LICENSE) — free to use, modify, and learn from. If you ship your own version, swap out the personal content and photo.
