# Portfolio

A high-performance, responsive frontend portfolio built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

##  Features

- **Next.js 16 App Router**: Leveraging Server Components and the new routing paradigm.
- **Frontend Architecture**: Clean separation of concerns with a centralized data layer and reusable components.
- **Strict TypeScript**: Type-safe codebase for better maintainability and developer experience.
- **Tailwind CSS**: Utility-first CSS for rapid and consistent UI development.
- **Dark Mode**: Fully supported dark mode using `next-themes` and CSS variables.
- **Responsive Design**: Mobile-first approach ensuring a great experience on all devices.
- **Performance**: Optimized fonts (`next/font`), accessible components, and code splitting.
- **Framer Motion**: Subtle animations for enhanced user experience (with reduced motion support).
- **SEO Ready**: configured metadata, OpenGraph tags, and semantic HTML.

##  Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

##  Project Structure

```
/app              # App Router pages and layouts
/components       # Reusable UI components and sections
  /ui             # Generic UI components (Button, Card, etc.)
  /layout         # Layout components (Navbar, Footer)
  /sections       # Page-specific sections (Hero, Featured)
  /providers      # Context providers (ThemeProvider)
  /motion         # Framer motion wrappers
/config           # Site configuration
/data             # Static data (projects, skills)
/utils            # Utility functions
/styles           # Global styles
```


