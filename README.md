# Kundan Proposal Website 💕

A beautiful, romantic proposal website built with Next.js, TypeScript, and Tailwind CSS. This interactive web experience captures the essence of love and creates memorable moments for a special proposal.

## ✨ Features

- **Romantic Design**: Elegant pink and red gradient theme with floating hearts animation
- **Interactive Sections**:
  - **Home**: Heartfelt introduction with animated elements
  - **Proposal**: The main proposal page with special messaging
  - **Message**: Personal love letter and memories
  - **Memories**: Gallery of cherished moments
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: CSS animations and transitions for a magical experience
- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MANYA-SHUKLA/proposal-website-for-client.git
cd kundan-proposal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── FloatingHearts.tsx
│   │   └── Header.tsx
│   ├── memories/            # Memories page
│   ├── message/             # Love message page
│   ├── proposal/            # Main proposal page
│   ├── types/               # TypeScript type definitions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
└── public/                  # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Custom SVG icons
- **Fonts**: Geist font family (optimized by Next.js)

## 🎨 Customization

### Colors and Theme
The website uses a romantic pink/red color scheme. To customize:
- Update gradient colors in `globals.css`
- Modify Tailwind classes in component files
- Adjust animation timings in CSS

### Content
- Edit text content in respective page files (`src/app/*/page.tsx`)
- Update images in the `public/` directory
- Modify personal messages and memories

### Animations
- Heart animations are defined in component files
- CSS transitions are used throughout for smooth interactions
- Customize timing and effects in the respective component files

## 📱 Deployment

### Vercel (Recommended)
The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This is a standard Next.js app that can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js

## 🤝 Contributing

This is a personal project, but feel free to:
- Report bugs or issues
- Suggest improvements
- Share your own romantic website ideas

## 📄 License

This project is private and intended for personal use.

---

Made with ❤️ by MANYA SHUKLA
