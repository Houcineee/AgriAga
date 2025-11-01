'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

export default function MobileApp() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="mobile-app" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'md:order-2' : ''}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
                {t.mobileApp.title}
              </h2>
              
              <p className={`text-lg text-muted-foreground mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t.mobileApp.subtitle}
              </p>
              
              <p className={`text-muted-foreground mb-8 ${isRTL ? 'text-right' : ''}`}>
                {t.mobileApp.description}
              </p>

              <div className={`space-y-4 mb-8 ${isRTL ? 'text-right' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{t.mobileApp.feature1.split(' ')[0]}</div>
                  <p className="text-muted-foreground">{t.mobileApp.feature1.substring(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{t.mobileApp.feature2.split(' ')[0]}</div>
                  <p className="text-muted-foreground">{t.mobileApp.feature2.substring(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{t.mobileApp.feature3.split(' ')[0]}</div>
                  <p className="text-muted-foreground">{t.mobileApp.feature3.substring(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{t.mobileApp.feature4.split(' ')[0]}</div>
                  <p className="text-muted-foreground">{t.mobileApp.feature4.substring(2)}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Smartphone className="mr-2" />
                  {t.mobileApp.downloadButton}
                </Button>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground italic">{t.mobileApp.comingSoon}</span>
                </div>
              </div>
            </div>

            <div className={`${isRTL ? 'md:order-1' : ''}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-32 h-32 mx-auto mb-6 text-primary" />
                    <p className="text-lg font-semibold text-foreground">AgriYaga Mobile</p>
                    <p className="text-sm text-muted-foreground mt-2">Coming to iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
