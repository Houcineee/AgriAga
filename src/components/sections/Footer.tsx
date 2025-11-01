'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <footer id="contact" className="relative border-t border-border/40 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main footer content */}
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              
              {/* Brand column */}
              <div className={`md:col-span-4 ${isRTL ? 'md:text-right' : ''}`}>
                <div className={`flex items-center gap-2.5 mb-5 ${isRTL ? 'justify-end md:justify-start' : 'justify-center md:justify-start'}`}>
                  <img 
                    src="/tom (1).png" 
                    alt="AgriAga Logo" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className={`text-[15px] leading-relaxed text-foreground/60 max-w-xs ${isRTL ? 'text-right md:text-right mx-auto md:mx-0 md:ml-auto' : 'text-center md:text-left mx-auto md:mx-0'}`}>
                  {t.footer.slogan}
                </p>
              </div>

              {/* Navigation columns */}
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
                  
                  {/* Product */}
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-foreground/40 mb-4">{t.footer.product}</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#features" className="text-[15px] text-foreground/70 hover:text-foreground transition-colors">
                          {t.nav.features}
                        </a>
                      </li>
                      <li>
                        <a href="#mobile-app" className="text-[15px] text-foreground/70 hover:text-foreground transition-colors">
                          {t.nav.mobileApp}
                        </a>
                      </li>
                      <li>
                        <a href="#demo" className="text-[15px] text-foreground/70 hover:text-foreground transition-colors">
                          {t.nav.demo}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-foreground/40 mb-4">{t.footer.company}</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#about" className="text-[15px] text-foreground/70 hover:text-foreground transition-colors">
                          {t.nav.about}
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="text-[15px] text-foreground/70 hover:text-foreground transition-colors">
                          {t.footer.contact}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Connect */}
                  <div className={`col-span-2 md:col-span-1 ${isRTL ? 'text-right' : ''}`}>
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-foreground/40 mb-4">{t.footer.connect}</h3>
                    <div className={`flex gap-3 ${isRTL ? 'justify-end md:justify-start' : 'justify-center md:justify-start'}`}>
                      <a
                        aria-label="X (Twitter)"
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all"
                      >
                        <IconBrandX className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
                      </a>
                      <a
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all"
                      >
                        <IconBrandLinkedin className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
                      </a>
                      <a
                        aria-label="GitHub"
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all"
                      >
                        <IconBrandGithub className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border/40 py-6">
            <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <p>
                © {new Date().getFullYear()} AgriAga. {t.footer.copyright}
              </p>
              <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="#" className="hover:text-foreground/70 transition-colors">{t.footer.privacy}</a>
                <a href="#" className="hover:text-foreground/70 transition-colors">{t.footer.terms}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
