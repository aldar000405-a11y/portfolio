# Frontend Developer Portfolio

A **production-ready**, high-performance portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed to showcase projects, skills, and contact information with a modern, responsive interface.

## ✨ Key Features

- **⚡ Next.js 16 with App Router** - Latest React Server Components and streaming
- **🎨 Responsive Design** - Mobile-first approach, works on all devices
- **🌓 Dark Mode Support** - Automatic theme switching with `next-themes`
- **📧 Contact Form** - Server-side email handling with Resend API
- **🎭 Smooth Animations** - Framer Motion animations with reduced motion support
- **📱 SEO Optimized** - Metadata, OpenGraph, structured data
- **🚀 Performance First** - Image optimization, font loading, code splitting
- **🔒 Type Safe** - Full TypeScript support throughout
- **♿ Accessible** - WCAG 2.1 compliant components
- **🌐 Vercel Ready** - Zero-config deployment to Vercel

##  Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **next-themes** | Dark mode management |
| **Lucide React** | Icons |
| **Recharts** | Data visualization |
| **Resend** | Email delivery API |

##  Project Structure

```
├── app/                          # Next.js 16 App Router
│   ├── api/contact/              # Contact form endpoint
│   ├── projects/[slug]/          # Dynamic project pages
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── fonts.ts                  # Font configuration
├── components/
│   ├── ui/                       # Base components (Button, Card, Input, etc.)
│   ├── layout/                   # Layout components (Navbar, Footer)
│   ├── sections/                 # Page sections (Hero, Featured, CTA)
│   ├── motion/                   # Framer Motion wrappers
│   ├── providers/                # Context providers
│   └── dashboard/                # Dashboard components
├── config/
│   └── site.config.ts            # Site configuration
├── data/
│   ├── projects.ts               # Project data
│   ├── skills.ts                 # Skills data
│   └── dashboard/mock-data.ts    # Dashboard data
├── utils/
│   └── cn.ts                     # Utility functions
├── types/                        # TypeScript types
├── public/                       # Static assets
└── .env.example                  # Environment variables template
```

<<<<<<< HEAD
## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your-email@example.com
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📋 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Configuration (Resend)
# Get your API key from https://resend.com
RESEND_API_KEY=re_1234567890abcdef

# Contact Form Email
CONTACT_EMAIL=your-email@example.com
```

**Important:** Never commit `.env.local` to version control. Keep sensitive keys secure.

## 🏗 Building for Production

### Build the project:
```bash
npm run build
```

### Run production server:
```bash
npm start
```

### Production checklist:
- ✅ All environment variables configured
- ✅ Build completes without errors
- ✅ No console errors in production
- ✅ Images optimized
- ✅ SEO metadata complete
- ✅ Contact form tested

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Other Platforms

The project is compatible with any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Railway

## 📝 Customization

### Update Site Config
Edit `config/site.config.ts` to change:
- Site name and description
- Social links
- Contact information

### Add Projects
Edit `data/projects.ts`:
```typescript
{
  id: "4",
  slug: "my-project",
  title: "Project Title",
  description: "Project description",
  tech: ["React", "TypeScript", "Tailwind"],
  github: "https://github.com/...",
  demo: "https://...",
  image: "https://...",
  featured: true
}
```

### Update Skills
Edit `data/skills.ts` to add/modify your skills and experience.

## 📧 Contact Form Setup

The contact form uses **Resend** for email delivery (production-ready):

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`
4. Test the form locally

### Email Template
The email template is located in `app/api/contact/route.ts` and can be customized.

## 🔧 Commands

```bash
# Development
npm run dev                 # Start dev server

# Production
npm run build              # Build for production
npm start                  # Start production server

# Code Quality
npm run lint               # Run ESLint

# Other
npm run format             # Format code with Prettier (if configured)
```

## 🎨 Customizing Theme

Edit `app/globals.css` to modify:
- Color variables
- Font families
- Breakpoints
- Other design tokens

Uses CSS variables for easy theming:
```css
:root {
  --primary: 240 5.9% 10%;
  --secondary: 240 4.8% 95.9%;
  /* ... more variables */
}
```

## ♿ Accessibility

This project follows **WCAG 2.1 Level AA** standards:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus management

## 📊 Performance

- **Lighthouse Score**: Aim for 90+
- **Image Optimization**: Next.js Image component with responsive sizes
- **Font Loading**: Google Fonts with `swap` display
- **Code Splitting**: Automatic route-based code splitting
- **Minification**: Automatic in production builds

## 🔐 Security

- ✅ No sensitive keys in frontend code
- ✅ Server-side email handling
- ✅ CSRF protection (Next.js built-in)
- ✅ XSS protection with proper escaping
- ✅ Environment variable validation

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Contact via email from portfolio contact form

## 🎯 Future Enhancements

- [ ] Blog section with MDX
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Image gallery with lightbox
- [ ] Performance monitoring
- [ ] A/B testing support
- [ ] CMS integration
- [ ] Multiple language support

---

**Built with ❤️ for Frontend Excellence**

Last updated: December 2025 | Next.js 16 | React 19
"# my-portfolio" 
=======

>>>>>>> 7eb08b2301e800b5aa44c5a22edebb553dee8c93
"# my-portfolio" 
