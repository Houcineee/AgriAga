'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🌳</span>
                </div>
                <span className="font-bold text-xl text-foreground">AgriYaga</span>
              </div>
              <p className={`text-muted-foreground mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t.footer.slogan}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.features}
                  </a>
                </li>
                <li>
                  <a href="#mobile-app" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.mobileApp}
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.demo}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className={`text-center text-muted-foreground text-sm ${isRTL ? 'text-right' : ''}`}>
              © {new Date().getFullYear()} AgriYaga. {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
