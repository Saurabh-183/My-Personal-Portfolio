# Saurabh Agnihotri — Portfolio

A modern, dark-themed portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- Dark tech aesthetic with cyan accents
- Smooth scroll-triggered reveal animations
- Custom cursor with trail effect
- Fully responsive (mobile, tablet, desktop)
- Next.js App Router architecture
- Type-safe with TypeScript throughout
- Optimized for Vercel deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Cursor.tsx         # Custom cursor
│   ├── Navbar.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── Skills.tsx         # Technical skills
│   ├── Experience.tsx     # Work experience + education
│   ├── Projects.tsx       # GitHub projects
│   ├── Certifications.tsx # Certifications + hobbies
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   ├── Reveal.tsx         # Scroll reveal wrapper
│   └── SectionHeader.tsx  # Reusable section header
├── lib/
│   ├── data.ts            # All portfolio content (edit this!)
│   ├── useReveal.ts       # Intersection Observer hook
│   └── utils.ts           # Utility functions
└── ...config files
```

## ✏️ Customization

All portfolio content is in **`lib/data.ts`** — edit this file to update:
- Personal info, summary, links
- Skills
- Work experience
- Projects
- Certifications
- Education

## 🌐 Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → Select your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `your-project.vercel.app` 🎉

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Class utilities
