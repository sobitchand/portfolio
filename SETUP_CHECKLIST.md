# 🚀 SETUP CHECKLIST - STEP BY STEP

## Phase 1: Project Initialization (10 minutes)

- [ ] **Step 1.1**: Ensure Node.js v18+ installed
  ```bash
  node --version  # Should show v18.0.0 or higher
  ```

- [ ] **Step 1.2**: Create new Next.js project
  ```bash
  npx create-next-app@latest my-portfolio --typescript --tailwind
  # Select: Yes for TypeScript, Yes for Tailwind
  ```

- [ ] **Step 1.3**: Navigate to project
  ```bash
  cd my-portfolio
  ```

- [ ] **Step 1.4**: Install Framer Motion
  ```bash
  npm install framer-motion
  ```

---

## Phase 2: File Configuration (15 minutes)

### Copy Core Configuration Files

- [ ] **Step 2.1**: Copy `tailwind.config.js`
  - Provided file → Replace project's `tailwind.config.js`
  - Contains: Custom colors, animations, gradients

- [ ] **Step 2.2**: Copy `globals.css`
  - Provided file → Replace `src/app/globals.css`
  - Contains: Global styles, animations, accessibility

- [ ] **Step 2.3**: Copy `layout.tsx`
  - Provided file → Replace `src/app/layout.tsx`
  - Contains: Metadata, font imports, root structure

---

## Phase 3: Component Setup (10 minutes)

- [ ] **Step 3.1**: Create components folder (if not exists)
  ```bash
  mkdir -p src/components
  ```

- [ ] **Step 3.2**: Copy `Portfolio.jsx`
  - Provided file → Create `src/components/Portfolio.jsx`
  - This is the main component with all 5 sections

- [ ] **Step 3.3**: Copy `page.jsx`
  - Provided file → Replace `src/app/page.tsx`
  - Simple wrapper that imports Portfolio component

---

## Phase 4: Image Setup (5 minutes)

- [ ] **Step 4.1**: Prepare portrait image
  - Size: 1000x1000px (square)
  - Format: JPG or WebP
  - Size: < 200KB (compress if needed)
  - Color: B&W or color (supports both)

- [ ] **Step 4.2**: Place image in public folder
  ```bash
  cp your-portrait.jpg public/portrait.jpg
  ```

- [ ] **Step 4.3**: Update image source in Portfolio.jsx
  - Find line with: `src="/api/placeholder?width=320&height=320"`
  - Replace with: `src="/portrait.jpg"`

---

## Phase 5: Content Customization (20 minutes)

### Update Hero Section
- [ ] **Step 5.1**: Change name
  - Find: `Er. Purushottam Chand Bohora`
  - Replace: Your name

- [ ] **Step 5.2**: Change role
  - Find: `FOUNDER & TECH ARCHITECT`
  - Replace: Your role/title

- [ ] **Step 5.3**: Change tagline
  - Find: `Securing the Web. Building the Future of SaaS.`
  - Replace: Your tagline

- [ ] **Step 5.4**: Update intro text
  - Find long paragraph starting with "I am an Engineer..."
  - Replace with your bio

### Update Identity Cards
- [ ] **Step 5.5**: Update Card 1 (Security)
  - Title, description, icon
  - Based on your expertise

- [ ] **Step 5.6**: Update Card 2 (Full-Stack)
  - Title, description, icon
  - Based on your expertise

- [ ] **Step 5.7**: Update Card 3 (Leadership)
  - Title, description, icon
  - Based on your expertise

### Update Projects Section
- [ ] **Step 5.8**: Update ventures
  - Replace project names and descriptions
  - Add/remove ventures as needed

- [ ] **Step 5.9**: Update client work
  - Replace client categories
  - Add your actual client projects

### Update Technical Arsenal
- [ ] **Step 5.10**: Update cybersecurity skills
  - Replace with your actual tools/skills

- [ ] **Step 5.11**: Update full-stack technologies
  - Replace with your tech stack

- [ ] **Step 5.12**: Update hosting/cloud tools
  - Replace with your infrastructure expertise

### Update Footer
- [ ] **Step 5.13**: Update year in footer
  - Find: `© 2024`
  - Replace: Current year

---

## Phase 6: Testing (10 minutes)

- [ ] **Step 6.1**: Start development server
  ```bash
  npm run dev
  ```

- [ ] **Step 6.2**: Open in browser
  - Navigate to: `http://localhost:3000`

- [ ] **Step 6.3**: Test desktop layout
  - Check hero section (portrait visible)
  - Scroll through all sections
  - Hover over cards (should glow)
  - Click buttons (should respond)

- [ ] **Step 6.4**: Test mobile layout
  - Open DevTools (F12)
  - Resize to 375px width
  - Check text readability
  - Check spacing/padding
  - Test touch interactions

- [ ] **Step 6.5**: Test animations
  - Scroll slowly (cards should animate in)
  - Portrait should have pulsing glow
  - Activity widget should blink
  - Button hovers should glow

- [ ] **Step 6.6**: Test responsiveness
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1024px, 1440px
  - Check at each breakpoint

- [ ] **Step 6.7**: Test cross-browser
  - Chrome/Edge ✓
  - Firefox ✓
  - Safari ✓
  - (Only on desktop needed)

---

## Phase 7: Optimization (5 minutes)

- [ ] **Step 7.1**: Optimize image
  ```bash
  # Optional: Compress further
  # Use TinyJPG or imagemin locally
  # Goal: < 150KB file size
  ```

- [ ] **Step 7.2**: Check for console errors
  - Open DevTools Console (F12 → Console)
  - No red errors should appear
  - Warnings are okay (usually related to Next.js)

- [ ] **Step 7.3**: Verify all colors are custom
  - Dark obsidian background: #0a0e27 ✓
  - Neon cyan accents: #00ffcc ✓
  - Neon green secondary: #00ff88 ✓
  - All other colors match design ✓

---

## Phase 8: Production Build (5 minutes)

- [ ] **Step 8.1**: Create production build
  ```bash
  npm run build
  ```

- [ ] **Step 8.2**: Check for build errors
  - Should show: "✓ Ready for production"
  - No red error messages

- [ ] **Step 8.3**: Test production build locally
  ```bash
  npm start
  ```

- [ ] **Step 8.4**: Verify production looks identical
  - Navigate to: `http://localhost:3000`
  - Visual check against development version

---

## Phase 9: Deployment (varies by platform)

### Option A: Vercel (Recommended)

- [ ] **Step 9A.1**: Push to GitHub
  ```bash
  git init
  git add .
  git commit -m "Initial portfolio commit"
  git remote add origin https://github.com/YOUR_USERNAME/portfolio
  git push -u origin main
  ```

- [ ] **Step 9A.2**: Connect to Vercel
  - Go to: https://vercel.com
  - Sign in with GitHub
  - Click "Import Project"
  - Select your portfolio repo
  - Click "Deploy"

- [ ] **Step 9A.3**: Wait for deployment
  - Should complete in < 2 minutes
  - Gets automatic URL: `https://yourproject.vercel.app`

- [ ] **Step 9A.4**: Add custom domain (optional)
  - In Vercel dashboard → Settings → Domains
  - Add your custom domain
  - Update DNS records (Vercel provides instructions)

### Option B: Netlify

- [ ] **Step 9B.1**: Connect GitHub to Netlify
  - Go to: https://netlify.com
  - Click "Add new site" → "Import an existing project"
  - Authorize GitHub
  - Select your portfolio repo

- [ ] **Step 9B.2**: Configure build settings
  - Build command: `npm run build`
  - Publish directory: `.next`

- [ ] **Step 9B.3**: Deploy
  - Click "Deploy site"
  - Gets automatic URL: `https://yoursite.netlify.app`

---

## Phase 10: Final Checks (5 minutes)

- [ ] **Step 10.1**: Test live website
  - Visit your deployed URL
  - All sections visible
  - Images loading
  - Animations smooth

- [ ] **Step 10.2**: Check mobile on actual device
  - Portrait visible
  - Text readable
  - Buttons clickable
  - Glow effects working

- [ ] **Step 10.3**: Verify SEO basics
  - Page title appears in browser tab
  - Meta description shows in preview
  - All images have alt text

- [ ] **Step 10.4**: Share and celebrate! 🎉
  - Portfolio is live
  - Ready to share with network

---

## ✨ OPTIONAL ENHANCEMENTS (Phase 11)

Once basic setup is done, consider these additions:

- [ ] **Add contact form**
  - Use EmailJS, Formspree, or Resend
  - Add "Contact" button in hero

- [ ] **Add social links**
  - LinkedIn, GitHub, Twitter
  - Add footer with icon links

- [ ] **Add analytics**
  - Google Analytics
  - Vercel Analytics (if using Vercel)

- [ ] **Add blog section**
  - Use MDX for markdown content
  - Add blog page

- [ ] **Add dark/light theme toggle**
  - Use next-themes
  - Allow user preference

- [ ] **Add projects carousel**
  - Swiper or Embla carousel
  - Interactive project showcase

---

## 🆘 TROUBLESHOOTING QUICK FIXES

### Issue: "Cannot find module 'framer-motion'"
**Fix**: Run `npm install framer-motion` again

### Issue: Styles not applying (buttons look wrong)
**Fix**: 
```bash
rm -rf .next
npm run build
npm run dev
```

### Issue: Image not showing
**Fix**: 
1. Verify file at: `public/portrait.jpg`
2. Check image path in Portfolio.jsx matches filename
3. Restart dev server

### Issue: Animations not smooth
**Fix**: Close browser tabs, disable extensions, restart `npm run dev`

### Issue: Build fails with error
**Fix**: 
```bash
npm install
npm run build
# Check error message, usually missing dependency
```

---

## 📞 STILL STUCK?

Refer to detailed guides:
1. **IMPLEMENTATION_GUIDE.md** - Full setup walkthrough
2. **DESIGN_SYSTEM.md** - Design decision documentation
3. **QUICK_REFERENCE.md** - Component reference and snippets

---

## ✅ SETUP COMPLETE!

You're done! Your cyberpunk portfolio is:
- ✅ Fully customized
- ✅ Thoroughly tested
- ✅ Production-ready
- ✅ Live on the web

**Next step**: Share it with your network and start getting opportunities! 🚀

---

**Estimated Total Time**: 60-90 minutes
**Difficulty Level**: Beginner-friendly (no coding required)
**Final Result**: Professional, production-grade portfolio

*Good luck! 🎯*
