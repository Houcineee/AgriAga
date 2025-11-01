'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { IconArrowRight, IconRocket } from '@tabler/icons-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Demo() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { ref, isVisible } = useScrollAnimation();

  const handleDemoClick = () => {
    // Redirect to demo website - you can change this URL
    window.open('https://v5youth.vercel.app', '_blank', 'noopener,noreferrer');
  };

  const handleGetStartedClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="demo" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className={`container mx-auto transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Call to action label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-700">
                {t.cta.title}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-center">
              {t.demo.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 text-center">
              {t.demo.subtitle}
            </p>
            
            <p className="text-muted-foreground leading-relaxed md:text-lg mb-10 max-w-2xl mx-auto text-center">
              {t.demo.description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {/* Primary CTA: Get Started */}
              <Button 
                size="lg" 
                onClick={handleGetStartedClick}
                className="group text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.cta.button}
                <IconArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>

              {/* Secondary CTA: Launch Demo */}
              <Button 
                size="lg"
                variant="outline"
                onClick={handleDemoClick}
                className="group text-base md:text-lg px-8 md:px-10 py-6 md:py-7 border-2 border-emerald-600/30 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                <IconRocket className="w-5 h-5" />
                {t.demo.button}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
