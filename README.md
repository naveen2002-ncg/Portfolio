# My Portfolio

A modern, animated personal portfolio website built with React, Vite, and Framer Motion. Features a dark theme, gradient accents, tech stack showcase, project highlights, and smooth scroll animations.

## Live Demo

**GitHub Repo:** https://github.com/naveen2002-ncg/Portfolio

## Tech Stack

- React 19 + Vite 8
- Framer Motion (animations)
- Lucide React (icons)
- Custom CSS (dark theme, gradients, glass effects)

## Step-by-Step Build Process

### Step 1: Initial Project Setup

```powershell
npm create vite@latest
```

Selected **React** as the framework. This created a base Vite + React project with:
- `src/App.jsx` and `src/main.jsx` entry points
- `src/index.css` for global styles
- Vite dev server and build scripts in `package.json`

### Step 2: Dependency Installation

```powershell
npm install
npm install lucide-react framer-motion
```

Added:
- `lucide-react` — for social icons (GitHub, LinkedIn, Email)
- `framer-motion` — for scroll-triggered animations, hover effects, and smooth transitions

### Step 3: Global Styles & Theme

Replaced `src/index.css` with a custom dark theme:

- **Color palette:** Deep dark backgrounds (#0a0a0f, #111118, #16161f), purple accent (#7c5cfc), blue gradient (#4f8ef7), pink accent (#f75590)
- **Typography:** Inter for body text, Fira Code for monospace/code elements
- **Shared components:** `.card`, `.btn`, `.btn-primary`, `.btn-outline`, `.tag` — all with hover effects and transitions
- **Smooth scrolling:** `scroll-behavior: smooth` on html

### Step 4: Component Architecture

Built 7 components in `src/components/`:

#### 4.1 Navbar (`Navbar.jsx`)
- Fixed top navigation with blur backdrop on scroll
- Links: About, Skills, Projects, Contact
- Mobile hamburger menu with slide-down animation
- "Hire Me" CTA button linking to email

#### 4.2 Hero (`Hero.jsx`)
- Full-screen hero with radial gradient glows
- Left side: Name, tagline, description, 3 CTA buttons (View Projects, Resume, Contact), social links
- Right side: Circular profile image with animated gradient border ring and green "online" indicator
- Availability badge with pulsing green dot
- Scroll indicator with animated mouse icon
- All elements animate in with staggered delays using Framer Motion

#### 4.3 About (`About.jsx`)
- Centered layout with animated section title
- Profile badge with initials "NCG" in gradient circle
- Name + "AI/ML Developer" pill tag
- 3-paragraph bio text with staggered fade-in
- Fully centered text alignment

#### 4.4 Skills (`Skills.jsx`)
- 6 category cards: Languages, Frontend, ML & Data, Tools & DevOps, Platforms, Currently Learning
- Each category has a gradient top-border accent
- Skill rows with: colored square indicator, skill name, animated progress bar (fills on scroll), percentage
- 18 technology logo badges in brand colors (Python blue, TypeScript blue, React cyan, etc.)
- Badges lift and glow on hover with Framer Motion

#### 4.5 Projects (`Projects.jsx`)
- 6 project cards in responsive grid
- Each card: title with "#" prefix, star count, description, color-coded tech badges, "Code" button with GitHub icon
- Cards lift on hover with glowing top gradient line
- Projects sourced from GitHub profile repos

#### 4.6 Contact (`Contact.jsx`)
- 3 contact method cards: Email, LinkedIn, GitHub
- Each with icon, label, description, and handle/link
- Centered CTA card: "Let's build something together" with "Send Message" button

#### 4.7 Footer (`Footer.jsx`)
- Gradient name text, tagline, social icon buttons
- Copyright line

### Step 5: App Assembly (`App.jsx`)

All components composed in order:
```
Navbar → Hero → About → Skills → Projects → Contact → Footer
```

### Step 6: Profile Image

Added `public/profile.jpg` — circular avatar in Hero section with:
- Conic-gradient spinning glow ring behind the image
- `objectFit: 'cover'` with `objectPosition: 'center 25%'` to zoom into head/face/upper chest
- Green status indicator dot at bottom-right

### Step 7: Resume Integration

Added Google Drive resume link as direct download:
```jsx
href="https://drive.google.com/uc?export=download&id=1033TnDWnze8emo7-mnzufKj7uT58OUy8"
```
Buttons placed in Hero (primary CTA) and original plan was About section (later removed per request).

### Step 8: Git & GitHub Deployment

```powershell
git init
git config user.name "naveen2002-ncg"
git config user.email "naveen2002.ncg@gmail.com"
git add .
git commit -m "Initial portfolio build"
git branch -M master
git remote add origin https://github.com/naveen2002-ncg/Portfolio.git
git push -u origin master
```

Pushed to **https://github.com/naveen2002-ncg/Portfolio**

### Step 9: Build Verification

```powershell
npm run build
```

Production build outputs to `/dist` with optimized chunks. Verified zero build errors.

## How to Run Locally

```powershell
cd portfolio
npm install
npm run dev
```

Opens at `http://localhost:5173`

## How to Build for Production

```powershell
npm run build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Features

- **Dark Theme** — deep dark backgrounds with purple/blue/pink gradient accents
- **Framer Motion Animations** — scroll-triggered fade-ins, hover lifts, progress bar fills
- **Responsive Design** — mobile hamburger menu, flexible grids, CSS media queries
- **Profile Image** — circular avatar with animated gradient ring and crop-to-face positioning
- **Tech Stack Badges** — 18 technologies in real brand colors with hover glow effects
- **Resume Download** — direct Google Drive PDF download link
- **Project Showcase** — 6 GitHub repos with descriptions, tech badges, and source links
- **Contact Section** — email, LinkedIn, GitHub cards with CTA

## Customization Tips

- Edit bio text in `src/components/About.jsx`
- Update skills/percentages in `src/components/Skills.jsx` (colorMap and techStack arrays)
- Modify project cards in `src/components/Projects.jsx`
- Change colors in `src/index.css` CSS variables under `:root`
- Replace `public/profile.jpg` with your own photo
