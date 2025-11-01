'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, Upload, Eye, Download, MapPin } from 'lucide-react';

export default function Demo() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const handleDemoClick = () => {
    // Redirect to demo website - you can change this URL
    window.open('https://demo.treecount-ai.example.com', '_blank');
  };

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
              {t.demo.title}
            </h2>
            
            <p className={`text-xl text-muted-foreground mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.demo.subtitle}
            </p>
            
            <p className={`text-muted-foreground mb-8 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {t.demo.description}
            </p>

            <Button 
              size="lg" 
              onClick={handleDemoClick}
              className="text-lg px-8 py-6"
            >
              {t.demo.button}
              <ExternalLink className="ml-2" />
            </Button>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12">
            <h3 className={`text-2xl font-bold mb-8 text-center text-foreground ${isRTL ? 'text-right' : ''}`}>
              {t.demo.features}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-semibold text-foreground mb-1">{t.demo.demoFeature1}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-semibold text-foreground mb-1">{t.demo.demoFeature2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-semibold text-foreground mb-1">{t.demo.demoFeature3}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-semibold text-foreground mb-1">{t.demo.demoFeature4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
