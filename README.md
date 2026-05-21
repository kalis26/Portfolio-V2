# Portfolio V2

A bilingual, interactive portfolio for **Amine M. Rachid**, a second-year Computer Science student at ESI and junior full-stack web developer.

The site is designed as a playful software/media archive: CD cases, SD cards, tickets, disk labels, pink identity accents, dark/light modes, and scroll-driven motion. It is not just a CV download page; the portfolio presents projects, experience, education, skills, and contact links in a complete visual system.

## Highlights

- Bilingual content with English and French switching.
- Light and dark theme support with persisted preference.
- GSAP-powered scroll interactions, including a horizontal project archive.
- Animated CD hero with separated disk and case layers.
- Project cards with SD card and MiniDisc artwork, GitHub links, live demos, stack chips, and highlights.
- Detailed experience, education, certifications, and current toolchain sections.
- Public CV download from `/cv.pdf`.
- Responsive layout for desktop, tablet, and mobile.

## Featured Projects

- **ESICodeHub**: academic full-stack platform for code submissions, reviews, assignment workflows, and plagiarism analysis.
- **iTuneUp**: Windows desktop app for building Apple Music-style local `.m4a` libraries using YouTube sources and Apple Music metadata.
- **Senza**: full-stack perfume e-commerce project with accounts, authentication, cart, and order flow.
- **Atlix Media**: freelance web project for a communication company, focused on responsive presentation and client-facing delivery.

## Tech Stack

- **Framework**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, custom CSS variables, local font setup
- **Motion**: GSAP, ScrollTrigger, `@gsap/react`
- **Icons**: Lucide React
- **Deployment target**: Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

## Project Structure

```text
src/app/
  page.tsx       Main portfolio route, content, theme/language logic, GSAP setup
  globals.css   Visual system, responsive layout, animation styling
  layout.tsx    App metadata and local font wiring

public/
  assets/       Portfolio artwork: CD case, disk, SD cards, ticket pass, identity mark
  cv.pdf        Public downloadable CV
```

## Design Direction

The visual identity is built around a retro-digital archive concept:

- CD jewel cases and spinning disks for the hero.
- SD cards and MiniDisc artwork for projects.
- Ticket-pass visuals for the contact section.
- Pink archive labels, clean dark surfaces, and tactile media objects.

The goal is to feel personal, artsy, and memorable while staying professional enough for internships, junior web work, and academic opportunities.

## Notes

- Some project links may be placeholders while repositories are private or not ready to publish.
- The CV is intentionally served from `public/cv.pdf`.
- The site respects reduced-motion preferences by disabling or calming distracting motion.
