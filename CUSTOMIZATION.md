# Customizing the Landing Page

This guide explains how to customize the Agriculture & Water Hackathon landing page to fit your specific needs.

## Adding or Modifying Languages

### 1. Add a New Language

To add a new language (e.g., Spanish):

1. Create a new translation file in `src/messages/`:
   ```bash
   cp src/messages/en.json src/messages/es.json
   ```

2. Translate the content in `src/messages/es.json`

3. Update the locale configuration in `src/i18n/config.ts`:
   ```typescript
   export const locales = ["en", "fr", "ar", "es"] as const;
   
   export const localeNames: Record<Locale, string> = {
     en: "English",
     fr: "Français",
     ar: "العربية",
     es: "Español",
   };
   ```

### 2. Modify Existing Translations

Edit the respective JSON files in `src/messages/`:
- `en.json` - English
- `fr.json` - French
- `ar.json` - Arabic

## Customizing Content

### Hero Section

Edit `src/components/hero-section.tsx`:
- Change icons by replacing `<Sprout>` and `<Droplets>` with other Lucide icons
- Modify gradient colors in the className

### Features Section

Edit `src/components/features-section.tsx`:
- Add/remove features in the `features` array
- Change icons from Lucide React
- Modify colors for each feature

### About Section

Edit `src/components/about-section.tsx`:
- Customize the card layout and styling
- Add more information sections

### Contact Section

Edit `src/components/contact-section.tsx`:
- Add form integration
- Link buttons to registration pages or contact forms

## Styling

### Colors

Modify the color scheme in `src/app/globals.css`:
- Update CSS variables in `:root` for light mode
- Update `.dark` for dark mode

### Add New Components

1. Create component in `src/components/`
2. Import in `src/app/[locale]/page.tsx`
3. Add translations to all language files in `src/messages/`

### shadcn/ui Components

To add more shadcn/ui components:

```bash
# This won't work in restricted environments, so manually add components
# by copying from https://ui.shadcn.com/docs/components/

# Example: Adding a Dialog component
# 1. Create src/components/ui/dialog.tsx
# 2. Copy the code from shadcn/ui docs
# 3. Use it in your components
```

## Theme Customization

### Fonts

To change fonts, edit `src/app/[locale]/layout.tsx` and add Google Fonts or custom fonts.

### Dark Mode

The theme automatically supports dark mode. Customize dark mode colors in `src/app/globals.css` under the `.dark` class.

## Making It Production Ready

1. **Add Analytics**: Integrate Google Analytics or Plausible
2. **Add Forms**: Connect contact/registration forms to a backend
3. **SEO**: Add meta tags, Open Graph images, and structured data
4. **Performance**: Optimize images, add lazy loading
5. **Accessibility**: Test with screen readers and keyboard navigation

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## File Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Layout with i18n provider
│   │   └── page.tsx        # Main page assembling all sections
│   ├── globals.css         # Global styles and theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Root redirect to default locale
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── about-section.tsx   # About section
│   ├── contact-section.tsx # Contact section
│   ├── features-section.tsx# Features section
│   ├── footer.tsx          # Footer
│   ├── hero-section.tsx    # Hero section
│   └── language-switcher.tsx # Language switcher
├── i18n/
│   ├── config.ts           # i18n configuration
│   ├── request.ts          # i18n request handler
│   └── routing.ts          # i18n routing
├── lib/
│   └── utils.ts            # Utility functions
├── messages/
│   ├── en.json             # English translations
│   ├── fr.json             # French translations
│   └── ar.json             # Arabic translations
├── i18n.ts                 # i18n setup
└── middleware.ts           # Middleware for locale detection
```

## Support

For issues or questions, please open an issue in the repository.
