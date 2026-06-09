# Selinyx — Company Website

A modern, SaaS-style marketing website for **Selinyx**, a technology company focused on AI solutions, software development, cloud services, automation, and digital transformation.

> _We Build Digital Solutions That Drive Real Growth_

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3** (with `class`-based dark mode)
- **Framer Motion** for animations
- **Lucide** icons
- **next-themes** for dark mode persistence
- **Inter** font via `next/font`

## Features

- Premium startup aesthetic — glassmorphism, soft shadows, purple/blue/white palette
- Fully responsive (desktop / tablet / mobile)
- Light **and** dark mode with a toggle
- Smooth scroll + on-scroll reveal animations
- Animated stat counters, testimonial carousel, FAQ accordion
- Floating **Selinyx Assistant** chat widget
- WhatsApp contact button, back-to-top button, scroll-progress bar
- Newsletter signup and a full contact form
- SEO-friendly: metadata, Open Graph, `sitemap.xml`, `robots.txt`, file-based favicon

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services, stats, process, testimonials, FAQ, newsletter, CTA |
| `/about` | Vision, mission, why Selinyx, core values, founder |
| `/services` | All nine service offerings with features |
| `/portfolio` | Featured projects with metrics and case-study links |
| `/pricing` | Three engagement tiers + FAQ |
| `/contact` | Contact form and contact details |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

## Project structure

```
.
├── app/                    # App Router pages, layout, globals, SEO routes
│   ├── about/ services/ portfolio/ pricing/ contact/
│   ├── layout.tsx          # Root layout: fonts, theme, nav, footer, widgets
│   ├── page.tsx            # Home page
│   ├── sitemap.ts robots.ts icon.svg not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Services, Stats, Testimonials, FAQ, ...
│   ├── ui/                 # Button, Card, Badge, Logo, ServiceCard, Reveal, AnimatedCounter
│   ├── widgets/            # ChatWidget, WhatsAppButton, BackToTop, ScrollProgress
│   └── providers/          # ThemeProvider, ThemeToggle
├── lib/                    # data.ts (content) + animations.ts (motion variants)
├── tailwind.config.ts
└── next.config.mjs
```

## Customizing

- **Content** lives in `lib/data.ts` — services, projects, testimonials, FAQs, pricing, nav, and company details (email, WhatsApp number, social links).
- **Brand colors** are defined in `tailwind.config.ts` under `colors.brand` / `colors.accent`.
- The contact form, newsletter, and chat widget use client-side mock handlers — wire them to your backend, an email service, or a form provider to go live.

---

© Selinyx. Built with Next.js.
