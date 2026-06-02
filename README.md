# Naveen C Gundapalli — Portfolio

Live site: https://naveen2002-ncg.github.io/Portfolio/
GitHub Repo: https://github.com/naveen2002-ncg/Portfolio

## Overview

A modern, animated personal portfolio website built with React 19 + Vite 8. Features a dark glassmorphism theme, colorful animated backgrounds, 3D wireframe sphere, and smooth scroll animations.

## Tech Stack

- **React 19** + **Vite 8** — fast dev/build
- **Framer Motion** — scroll-triggered animations, hover effects, transitions
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D wireframe sphere background in Skills section
- **Geist font** — modern clean typography
- **Custom CSS** — glassmorphism, gradients, glow effects

## Sections

- **Navbar** — fixed top nav with blur backdrop, scrollable mobile menu
- **Hero** — full-screen intro with animated gradient orbs, profile image, resume CTA, social links
- **About** — bio with floating orbs, particles, animated gradient avatar, right-side illustration
- **Experience** — 3 timeline cards with left-side decorations and right-side illustrations
- **Education** — Jain College of Engineering and Technology, B.E. CSE (2021–2025), CGPA 7.23
- **Skills** — 5 glassmorphism category cards + 28 devicon logos with 3D wireframe sphere background
- **Certifications** — 5 credential cards
- **Achievements** — 5 milestone cards
- **Projects** — 6 GitHub project cards with tech badges
- **Contact** — email, LinkedIn, GitHub cards with CTA

## Key Features

- Dark theme with purple/lavender accents (`#7c5cfc`, `#a855f7`, `#c2a4ff`)
- Glassmorphism cards with `backdrop-blur`, alpha transparency, and purple hover glow
- Animated gradient orbs and particle sparkles in every section
- Right-side animated SVG illustrations per section (About, Experience, Education, Certifications)
- 3D auto-rotating wireframe sphere in Skills section
- Profile image with animated conic-gradient ring and status indicator
- Resume download button (Google Drive PDF)
- Fully responsive — mobile hamburger menu with scrollable links
- Smooth scroll navigation

## Run Locally

```powershell
cd portfolio
npm install
npm run dev
```

Opens at `http://localhost:5174`

## Build for Production

```powershell
npm run build
npm run preview
```

## Deploy to GitHub Pages

```powershell
npm run deploy
```

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── RightSideDecoration.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- **Profile image**: replace `public/profile.jpg`
- **Resume**: update Google Drive link in `src/components/Hero.jsx`
- **Colors**: edit CSS variables in `src/index.css` under `:root`
- **Sections**: edit content in `src/components/` files
- **Tech stack**: update `techList` array in `src/components/Skills.jsx`

## Author

**Naveen C Gundapalli**
- GitHub: https://github.com/naveen2002-ncg
- LinkedIn: https://www.linkedin.com/in/naveen-c-gundapalli-bb56b824b
- Email: naveen2002.ncg@gmail.com
