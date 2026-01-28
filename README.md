# Portfolio Website

Modern, professional portfolio website for Khoa Xuan Dang - Software Engineer

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive (mobile-first)
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with Framer Motion
- 🔗 GitHub API integration for dynamic project showcase
- 🎯 Optimized for recruiters and hiring managers
- 🔍 SEO optimized with meta tags
- 🚀 Easy deployment to GitHub Pages

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KhoaXuanDang/KhoaXuanDang.github.io.git
cd KhoaXuanDang.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. Make sure you have committed all your changes:
```bash
git add .
git commit -m "Update portfolio"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build your project and push it to the `gh-pages` branch automatically.

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder. You can deploy this folder to any static hosting service.

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the `gh-pages` branch
4. Click "Save"
5. Your site will be published at `https://khoaxuandang.github.io/`

**Note**: If you're deploying to a repository that's NOT `username.github.io`, you need to update the `base` in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Change this
})
```

## Customization Checklist

### Personal Information
- [ ] Update name in [Hero.tsx](src/components/Hero.tsx)
- [ ] Update email in [Hero.tsx](src/components/Hero.tsx) and [Contact.tsx](src/components/Contact.tsx)
- [ ] Update GitHub username in [Hero.tsx](src/components/Hero.tsx) and [Projects.tsx](src/components/Projects.tsx)
- [ ] Update LinkedIn URL in [Hero.tsx](src/components/Hero.tsx) and [Contact.tsx](src/components/Contact.tsx)
- [ ] Update phone number in contact information (if needed)

### Content
- [ ] Update About Me section in [About.tsx](src/components/About.tsx)
- [ ] Update skills in [Skills.tsx](src/components/Skills.tsx)
- [ ] Update work experience in [Experience.tsx](src/components/Experience.tsx)
- [ ] Update education in [Education.tsx](src/components/Education.tsx)
- [ ] Update featured projects list in [Projects.tsx](src/components/Projects.tsx)

### Assets
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Add a favicon to `public/favicon.svg`
- [ ] Add an Open Graph image to `public/og-image.png` (1200x630px recommended)

### SEO & Meta Tags
- [ ] Update meta tags in [index.html](index.html)
- [ ] Update site title in [index.html](index.html)
- [ ] Update Open Graph URL in [index.html](index.html)

### Colors & Branding (Optional)
- [ ] Customize color scheme in [tailwind.config.js](tailwind.config.js)
- [ ] Adjust animations in [tailwind.config.js](tailwind.config.js)

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Add your favicon here
│   ├── resume.pdf           # Add your resume here
│   └── og-image.png         # Add your Open Graph image here
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with dark mode toggle
│   │   ├── Hero.tsx         # Hero section with intro
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Technical skills showcase
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # GitHub projects with live API
│   │   ├── Education.tsx    # Education and coursework
│   │   ├── Contact.tsx      # Contact form and info
│   │   └── Footer.tsx       # Footer
│   ├── types/
│   │   └── react-intersection-observer.d.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template with SEO
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Features Breakdown

### GitHub Integration
The portfolio automatically fetches your latest repositories from GitHub and displays them with:
- Star count and fork count
- Primary language
- Topics/tags
- Last updated date
- Search and filter functionality
- Smart prioritization (featured projects appear first)

### Dark Mode
- Automatically saves user preference to localStorage
- Smooth transitions between light and dark themes
- Tailwind CSS dark mode classes

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation on mobile

### Performance
- Code splitting with React
- Lazy loading of images
- Optimized bundle size with Vite
- Fast refresh during development

## Troubleshooting

### GitHub Pages not updating
1. Clear the cache: `npm run build` and redeploy
2. Check that the `gh-pages` branch exists
3. Verify GitHub Pages settings in repository settings

### Dark mode not working
1. Clear browser localStorage
2. Check that the dark mode toggle button is working
3. Verify Tailwind dark mode configuration

### Projects not loading
1. Check GitHub API rate limits (60 requests/hour for unauthenticated)
2. Verify your GitHub username in Projects.tsx
3. Check browser console for errors

## License

This project is open source and available under the MIT License.

## Contact

Khoa Xuan Dang
- Email: dxkhoa02@gmail.com
- GitHub: [@KhoaXuanDang](https://github.com/KhoaXuanDang)
- LinkedIn: [khoa-dang-ba97b922b](https://linkedin.com/in/khoa-dang-ba97b922b)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
