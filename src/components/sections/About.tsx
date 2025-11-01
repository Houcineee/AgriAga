'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div ref={ref} className={`container mx-auto transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            {t.about.title}
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              {t.about.description}
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">Advanced computer vision</p>
              </div>
              
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-lg mb-2">Fast & Accurate</h3>
                <p className="text-sm text-muted-foreground">Results in seconds</p>
              </div>
              
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-semibold text-lg mb-2">Detailed Analytics</h3>
                <p className="text-sm text-muted-foreground">Comprehensive reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
