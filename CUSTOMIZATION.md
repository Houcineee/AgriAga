# AquaGrow - Water in Agriculture Landing Page

A modern, multi-language landing page for a water in agriculture hackathon project. Built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- 🌍 **Multi-language Support**: English, French, and Arabic
- 🎨 **Modern Design**: Clean, professional UI with Tailwind CSS
- 🧩 **Modular Components**: Easy to customize and extend
- 📱 **Responsive**: Works seamlessly on all devices
- ⚡ **Fast**: Built with Next.js 16 and optimized for performance

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles with Tailwind CSS
│   ├── layout.tsx         # Root layout with LanguageProvider
│   └── page.tsx           # Main page component
├── components/
│   ├── sections/          # Modular page sections
│   │   ├── Header.tsx     # Navigation and language switcher
│   │   ├── Hero.tsx       # Hero section with main message
│   │   ├── About.tsx      # About the project section
│   │   ├── Features.tsx   # Key features section
│   │   ├── CTA.tsx        # Call-to-action section
│   │   └── Footer.tsx     # Footer with links
│   └── ui/                # Reusable UI components
│       └── button.tsx     # Button component
├── i18n/
│   ├── translations.ts    # All translations (EN, FR, AR)
│   └── LanguageContext.tsx # Language context provider
└── lib/
    └── utils.ts           # Utility functions
```

## Customization Guide

### 1. Update Project Name and Branding

**File**: All sections use "AquaGrow" - replace as needed

```tsx
// In Header.tsx, Footer.tsx
<span className="font-bold text-xl text-foreground">YourProjectName</span>
```

### 2. Modify Translations

**File**: `src/i18n/translations.ts`

Update the translations object to match your project:

```typescript
export const translations = {
  en: {
    hero: {
      title: "Your Project Title",
      subtitle: "Your project description",
      // ... more translations
    },
    // ... other sections
  },
  fr: { /* French translations */ },
  ar: { /* Arabic translations */ }
};
```

### 3. Customize Colors

**File**: `src/app/globals.css`

Modify the color scheme by updating CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Main brand color */
  --secondary: 210 40% 96.1%;    /* Secondary color */
  /* ... other colors */
}
```

### 4. Update Sections

Each section is a standalone component in `src/components/sections/`:

- **Header.tsx**: Navigation links, language switcher
- **Hero.tsx**: Main headline, CTAs, statistics
- **About.tsx**: Project description
- **Features.tsx**: Feature cards with icons
- **CTA.tsx**: Contact information and final call-to-action
- **Footer.tsx**: Links and copyright

### 5. Add/Remove Features

**File**: `src/components/sections/Features.tsx`

Add or modify feature items in the features array:

```tsx
const features = [
  {
    icon: YourIcon,           // Import from 'lucide-react'
    title: t.features.feature1.title,
    description: t.features.feature1.description,
    color: 'text-blue-500',   // Icon color
    bgColor: 'bg-blue-500/10', // Background color
  },
  // Add more features...
];
```

### 6. Modify Statistics

**File**: `src/components/sections/Hero.tsx`

Update the statistics shown in the hero section:

```tsx
<div className="text-4xl font-bold text-primary mb-2">50%</div>
<div className="text-sm text-muted-foreground">Water Savings</div>
```

### 7. Update Contact Information

**File**: `src/components/sections/CTA.tsx`

Replace placeholder contact details:

```tsx
<p className="text-white/80">your-email@example.com</p>
<p className="text-white/80">+1 (555) 123-4567</p>
<p className="text-white/80">Your Location</p>
```

### 8. Add More Languages

**File**: `src/i18n/translations.ts`

Add a new language:

```typescript
export const translations = {
  en: { /* ... */ },
  fr: { /* ... */ },
  ar: { /* ... */ },
  es: {  // Spanish example
    nav: {
      home: "Inicio",
      about: "Acerca de",
      // ... more translations
    },
    // ... other sections
  }
};
```

**File**: `src/components/sections/Header.tsx`

Add the language to the switcher:

```tsx
const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
  { code: 'es', label: 'ES' },  // Add new language
];
```

### 9. Add More Sections

Create a new component in `src/components/sections/`:

```tsx
// src/components/sections/NewSection.tsx
'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function NewSection() {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 px-4">
      {/* Your content */}
    </section>
  );
}
```

Then add it to `src/app/page.tsx`:

```tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <NewSection />  {/* Add here */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
```

### 10. Add shadcn/ui Components

Due to network restrictions during setup, components need to be added manually. Here's how to add a new component:

1. Find the component code on [ui.shadcn.com](https://ui.shadcn.com)
2. Create the file in `src/components/ui/`
3. Copy the component code
4. Import and use it in your sections

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: Reusable component library
- **TypeScript**: Type-safe development
- **Lucide React**: Icon library

## Styling

The project uses Tailwind CSS with a custom color scheme. All colors are defined using CSS variables in `globals.css`, making it easy to create dark mode or custom themes.

### Adding Custom Styles

You can add custom Tailwind classes directly in components or extend the theme in `globals.css`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build the project
npm run build

# The output will be in .next folder
# Deploy the .next folder with package.json
```

## Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Explore [shadcn/ui components](https://ui.shadcn.com)

## License

This project is open source and available for hackathon use.
