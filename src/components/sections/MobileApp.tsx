'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MobileApp() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mobile-app" className="py-20 px-4 bg-muted/30">
      <div ref={ref} className={`container mx-auto transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 place-items-center">
            <div className={isRTL ? 'md:order-2' : ''}>
              <h2 className={`text-4xl md:text-5xl font-bold text-foreground ${isRTL ? 'text-right' : 'text-center'}`}>
                {t.mobileApp.title}
              </h2>
              <div className={`${isRTL ? 'ml-auto' : 'mx-auto'} h-1 w-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full my-4`} />
              
              <p className={`text-xl text-foreground/80 font-medium mb-4 ${isRTL ? 'text-right' : 'text-center'}`}>
                {t.mobileApp.subtitle}
              </p>
              
              <p className={`text-muted-foreground leading-relaxed md:text-lg mb-8 ${isRTL ? 'text-right' : 'text-center'}`}>
                {t.mobileApp.description}
              </p>

              <div className={`space-y-4 mb-8 ${isRTL ? 'text-right' : ''}`}>
                {[t.mobileApp.feature1, t.mobileApp.feature2, t.mobileApp.feature3, t.mobileApp.feature4].map((feat, idx) => {
                  const parts = feat.split(' ');
                  const text = parts.slice(1).join(' ');
                  const words = text.split(' ');
                  const lead = words.slice(0, 2).join(' ');
                  const rest = words.slice(2).join(' ');
                  return (
                    <div key={idx} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {/* Sophisticated glow bullet */}
                      <span className="relative inline-flex items-center justify-center w-9 h-9">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-md opacity-70" />
                        <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-emerald-400/50 bg-white/60 dark:bg-neutral-900/40">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                        </span>
                      </span>
                      <p className="text-base">
                        <span className="font-semibold text-foreground">{lead}</span>
                        {rest ? <span className="text-muted-foreground"> {rest}</span> : null}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t.mobileApp.downloadButton}
                </Button>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground italic">{t.mobileApp.comingSoon}</span>
                </div>
              </div>
            </div>

            <div className={`${isRTL ? 'md:order-1' : ''} `}>
              <div className="relative flex items-center justify-center">
                {/* soft emerald glow behind the phone */}
                <div className="pointer-events-none absolute -inset-8 -z-10">
                  <div
                    className="w-full h-full rounded-3xl blur-2xl"
                    style={{
                      background:
                        'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(16,185,129,0.25), transparent 70%)',
                    }}
                  />
                </div>

                <div className="relative">
                  <Iphone16Pro
                    src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                    width={300}
                    height={600}
                    className="mx-auto"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
