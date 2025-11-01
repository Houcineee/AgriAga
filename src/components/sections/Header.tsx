'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">💧</span>
            </div>
            <span className="font-bold text-xl text-foreground">AquaGrow</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              {t.nav.features}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-muted rounded-md p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
