# Shrey Sharma — UI/UX Design Portfolio

> **"Thoughtful systems. Clear experiences."**  
> A personal portfolio and case study archive designed and engineered with an editorial aesthetic, fluid micro-interactions, and a structured design system.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## ✦ Overview

This repository contains the source code for the digital design portfolio of **Shrey Sharma** (also *Gluon*), a product-minded UI/UX designer based in Lucknow, India, currently designing at **SRDT Pvt. Ltd.**

The portfolio highlights end-to-end UX problem-solving, information architecture, design systems, and complex enterprise & institutional applications.

---

## ✦ Key Features

- **Editorial Design System**: Typography-driven layout pairing classic serif display typography (*Fraunces*) with clean geometric sans (*Inter*) and technical monospaces (*IBM Plex Mono*).
- **Interactive Micro-Interactions**:
  - Pointer-tracking radial glow lighting on project cards.
  - Perspective 3D card tilt (`Tilt`) responsive to cursor movements.
  - Staggered scroll-aware entry reveals using `IntersectionObserver` and `MutationObserver`.
  - Accessible prefers-reduced-motion (`calm()`) overrides for animation safety.
- **Project Archive & Case Studies**:
  - Structured, deep-dive case studies detailing challenges, research, architecture, and outcomes.
  - Dynamic searchable and category-filtered project library.
  - Interactive UNIF ecosystem horizontal scroller featuring 12 connected university modules.
- **Dual Resume Viewer**:
  - Fast, responsive **Web Resume** with interactive capability tags and education timeline.
  - In-browser **PDF Viewer** utilizing native, hardware-accelerated vector PDF rendering with automated fallback and download actions.
- **Theme Switcher**:
  - Built-in Dark and Light mode with smooth CSS transition tokens and `localStorage` persistence.
- **Accessibility & Performance**:
  - Zero heavy third-party runtime viewer dependencies (~280 KB total production bundle).
  - Keyboard accessible skip links, semantic landmarks, and tab panel navigation.

---

## ✦ Featured Work

| Project | Type | Focus |
| :--- | :--- | :--- |
| **UNIF Ecosystem** | Product System | 12 connected modules unifying university workflows, student services, and administration. |
| **SRMU Website** | Web Experience | Clearer program discovery, responsive layouts, and cohesive brand experience. |
| **SP Jain CRM** | CRM / Applications | Streamlining high-volume admissions, multi-stage application processing, and review queues. |
| **SRDT Training Website** | Web Design | Institutional partner presentation, learning pathways, and conversion-focused enquiry flows. |
| **Expense Management** | Personal Concept | Calmer personal finance dashboard exploring financial clarity and data visualization. |

---

## ✦ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Formatting**: [oxfmt](https://oxc.rs/)

---

## ✦ Project Structure

```
├── public/
│   ├── favicon.svg          # Portfolio favicon
│   ├── resume.pdf           # Print & downloadable PDF resume
│   └── robots.txt           # SEO crawler rules
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI primitives (Button, Link, Tag, Label, Tilt, Arrow)
│   │   ├── layout/          # Layout shell (Header, Footer, SkipLink)
│   │   └── portfolio/       # Domain components (ProductPreview, ProjectCard, Experience, PdfViewer, etc.)
│   ├── data/
│   │   └── projects.ts      # Project directory & navigation data
│   ├── hooks/
│   │   └── useScrollReveal.ts # Staggered intersection observer entry animations
│   ├── pages/               # Top-level view routes (Home, Library, About, Resume, Contact, CaseStudy, Unif)
│   ├── types/               # TypeScript interfaces & types
│   ├── utils/               # Motion & accessibility helpers (calm, glow, scrollToTop)
│   ├── caseStudies.ts       # Full-text structured case study dataset
│   ├── index.css            # Global CSS, theme variables & Tailwind v4 setup
│   ├── App.tsx              # Application root & hash routing
│   └── main.tsx             # React DOM entry point
├── index.html               # Vite HTML entry point
├── package.json             # Scripts & dependencies
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build & plugin configuration
```

---

## ✦ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd "Shrey Sharma’s Portfolio"
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the URL displayed in your terminal) to view the app in your browser.

### Production Build

To compile a production-ready, minified bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Formatting

To format files according to the project's standards:

```bash
npm run format
```

---

## ✦ Contact & Connect

- **Designer**: Shrey Sharma (*Gluon*)
- **Email**: [ssshrey007@gmail.com](mailto:ssshrey007@gmail.com)
- **Phone**: [+91 9536727157](tel:+919536727157)
- **LinkedIn**: [shrey-sharma007](https://www.linkedin.com/in/shrey-sharma007/?isSelfProfile=true)
- **GitHub**: [@gluon007](https://github.com/gluon007)
- **Figma Community**: [@gluon007](https://www.figma.com/@gluon007)
- **Role**: UI/UX Designer @ [SRDT Pvt. Ltd.](https://www.srdt.co.in)

---

## ✦ License

This project is created for personal portfolio display. All case studies, project descriptions, and brand assets are copyright © Shrey Sharma.

