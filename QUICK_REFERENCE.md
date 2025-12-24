# 🚀 Quick Reference Guide

## Production Deployment in 5 Steps

### 1️⃣ **Setup Environment Variables**
```bash
cp .env.example .env.local
# Edit .env.local with your values:
# RESEND_API_KEY=your_key
# CONTACT_EMAIL=your@email.com
```

### 2️⃣ **Test Locally**
```bash
npm install    # One-time setup
npm run dev    # http://localhost:3000
# Test contact form
# Verify emails work
```

### 3️⃣ **Build Production**
```bash
npm run build  # Creates optimized build
npm start      # Test production server
```

### 4️⃣ **Push to GitHub**
```bash
git add .
git commit -m "Production ready"
git push origin main
# .env.local is auto-excluded ✓
```

### 5️⃣ **Deploy**

**Option A: Vercel (Recommended)**
- Go to vercel.com
- Import GitHub repo
- Add env variables in dashboard
- Deploy! ✓

**Option B: Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

---

## Important Files

### Configuration
- `.env.example` - Environment template
- `next.config.ts` - Next.js config
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies

### Core Application
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Homepage
- `app/api/contact/route.ts` - Email endpoint
- `config/site.config.ts` - Site settings

### Data
- `data/projects.ts` - Your projects (with images)
- `data/skills.ts` - Your skills

### Components
- `components/ui/` - UI components
- `components/sections/` - Page sections
- `components/layout/` - Layout parts

---

## Common Tasks

### Add a New Project
Edit `data/projects.ts`:
```typescript
{
  id: "4",
  slug: "my-new-project",
  title: "Project Name",
  description: "Description here",
  tech: ["React", "TypeScript"],
  github: "https://github.com/...",
  demo: "https://...",
  image: "https://images.unsplash.com/...",
  featured: true
}
```

### Change Your Email
Edit `.env.local`:
```env
CONTACT_EMAIL=newemail@example.com
```

### Update Site Info
Edit `config/site.config.ts`:
```typescript
{
  name: "Your Name",
  description: "Your description",
  url: "https://yoursite.com",
  // ... other settings
}
```

### Customize Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 240 5.9% 10%;      /* Change these */
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

---

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Email Not Sending
1. Check RESEND_API_KEY is valid
2. Verify CONTACT_EMAIL is set
3. Check spam folder
4. Review Resend dashboard for errors

### Images Not Loading
1. Verify image URLs are valid
2. Check domains in next.config.ts
3. Test URLs in browser directly

### Environment Variables Not Working
1. Verify .env.local exists
2. Check variable names match exactly
3. Restart development server
4. On Vercel: redeploy after adding variables

---

## Command Reference

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build           # Build for production
npm start               # Start production server

# Linting
npm run lint            # Run ESLint

# Utilities
rm -rf .next            # Clear build cache
npm clean-install       # Fresh install (CI-safe)
```

---

## Environment Variables

### Required
```env
# From Resend (https://resend.com)
RESEND_API_KEY=re_your_key

# Your email address
CONTACT_EMAIL=your@email.com
```

### Optional
```env
# Analytics, API keys, etc.
# Add as needed
```

**Location**: Create `.env.local` (not in Git)
**Template**: Copy from `.env.example`

---

## Deployment Checklist

Before deploying:
- [ ] .env.local created locally
- [ ] Tested `npm run build`
- [ ] Tested `npm start`
- [ ] Contact form tested
- [ ] All images visible
- [ ] No console errors
- [ ] Pushed to GitHub
- [ ] Environment variables added to host

---

## File Structure at a Glance

```
port/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Email endpoint
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Generic UI
│   ├── sections/         # Page sections
│   └── layout/           # Layout parts
├── data/                 # Data files
│   ├── projects.ts       # Projects (edit to add)
│   └── skills.ts         # Skills
├── config/               # Configuration
│   └── site.config.ts    # Site settings (edit)
├── public/               # Static files
├── .env.example          # Env template
├── .gitignore            # Git exclusions
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
├── README.md             # Full documentation
├── DEPLOYMENT_GUIDE.md   # Deployment steps
└── PRODUCTION_SUMMARY.md # Implementation details
```

---

## Key Technologies

| Tech | Purpose |
|------|---------|
| Next.js 16 | React framework |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Resend | Email delivery |

---

## Support Resources

### Documentation
- [README.md](README.md) - Full project guide
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Detailed deployment
- [PRODUCTION_SUMMARY.md](PRODUCTION_SUMMARY.md) - What was fixed
- [EMAIL_TEMPLATE_GUIDE.md](EMAIL_TEMPLATE_GUIDE.md) - Email customization

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## Quick Links

- **Deploy**: https://vercel.com
- **Email Service**: https://resend.com
- **Images**: https://unsplash.com (free stock)
- **Icons**: https://lucide.dev
- **Fonts**: https://fonts.google.com

---

## Status

✅ **Ready for Production**

Your portfolio is:
- Fully functional
- Secure
- Optimized
- Well-documented
- Ready to deploy

**Next Step**: Choose a deployment platform and go live!

---

**Last Updated**: December 2025
**Status**: Production Ready v1.0
