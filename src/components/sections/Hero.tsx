'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Smart Orchard Management
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
            {t.hero.title}
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              {t.hero.cta}
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Faster</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Trees Counted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
