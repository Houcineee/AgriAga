'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Droplet, Leaf, BarChart3, DollarSign } from 'lucide-react';

export default function Features() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const features = [
    {
      icon: Droplet,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Leaf,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: BarChart3,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: DollarSign,
      title: t.features.feature4.title,
      description: t.features.feature4.description,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center text-foreground ${isRTL ? 'text-right' : ''}`}>
            {t.features.title}
          </h2>
          
          <p className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t.features.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
                >
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 text-foreground ${isRTL ? 'text-right' : ''}`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
