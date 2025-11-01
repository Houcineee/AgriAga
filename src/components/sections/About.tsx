'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center text-foreground ${isRTL ? 'text-right' : ''}`}>
            {t.about.title}
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : ''}`}>
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
