'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${isRTL ? 'text-right' : ''}`}>
            {t.cta.title}
          </h2>
          
          <p className={`text-xl text-white/90 mb-10 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t.cta.description}
          </p>
          
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            {t.cta.button}
            <ArrowRight className="ml-2" />
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/80">contact@aquagrow.com</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-white/80">+1 (555) 123-4567</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-white/80">Innovation Hub, Tech Valley</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
