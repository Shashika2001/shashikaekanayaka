# Shashika Ekanayaka - Portfolio Website

A modern, futuristic one-page portfolio website built with Next.js 15, Tailwind CSS 4, and Framer Motion. Features a stunning "AI World" design theme with glassmorphism, neon accents, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)

## ✨ Features

### Design
- 🌙 Dark futuristic theme with sci-fi aesthetic
- 🎨 Glassmorphism cards with blur effects
- ✨ Neon glow effects (blue/purple/cyan)
- 🌊 Animated gradient backgrounds
- 🔲 Grid overlay patterns
- 💫 Smooth scroll animations
- 📱 Fully responsive design

### Functionality
- 🧭 Sticky navbar with active section highlighting
- 📊 Scroll progress indicator
- ⌨️ Typewriter text effect in hero
- 🃏 Interactive project cards with filters
- 📈 Animated skill bars
- 💬 AI Assistant floating widget
- 📧 Contact form UI
- 🔝 Back-to-top button

### Sections
1. **Hero** - Animated introduction with CTA buttons
2. **About** - Professional summary with profile card
3. **Experience** - Timeline layout with achievements
4. **Projects** - Filterable project cards
5. **Skills** - Categorized skill bars + tech cloud
6. **Leadership & Certifications** - Achievement cards
7. **Contact** - Form + contact info
8. **Footer** - Links and social media

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd my-next-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
my-next-app/
├── app/
│   ├── globals.css          # Global styles & theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Projects.tsx     # Projects grid
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Leadership.tsx   # Leadership & certs
│   │   └── Contact.tsx      # Contact form
│   └── ui/
│       ├── AnimatedBackground.tsx
│       ├── AIAssistant.tsx
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── ScrollProgress.tsx
│       ├── SectionWrapper.tsx
│       ├── SkillBar.tsx
│       ├── TechBadge.tsx
│       └── Typewriter.tsx
├── lib/
│   └── data.ts              # Portfolio content data
└── public/
    └── ...                  # Static assets
```

## 🎨 Customization

### Update Portfolio Content
Edit `lib/data.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Certifications
- Social links

### Modify Theme Colors
Update CSS variables in `app/globals.css`:

```css
:root {
  --primary: #6366f1;        /* Primary color */
  --secondary: #8b5cf6;      /* Secondary color */
  --accent: #06b6d4;         /* Accent color */
  --neon-blue: #00f0ff;      /* Neon effects */
  --neon-purple: #bf00ff;
}
```

### Add New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add nav link in `lib/data.ts`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter, JetBrains Mono

## 📦 Dependencies

```json
{
  "next": "^16.1.6",
  "react": "^19.2.3",
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "tailwindcss": "^4"
}
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Shashika Ekanayaka**
- Email: ekanayakespm@gmail.com
- GitHub: [github.com/shashika](https://github.com/shashika)
- LinkedIn: [linkedin.com/in/shashika-ekanayaka](https://linkedin.com/in/shashika-ekanayaka)

---

Built with 💜 using Next.js, Tailwind CSS & Framer Motion

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
