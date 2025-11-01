'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GlowCard } from '@/components/ui/spotlight-card';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Features() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { ref, isVisible } = useScrollAnimation();

  // Map your existing i18n copy into the new hover grid format.
  const features: FeatureItem[] = [
    {
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      icon: <IconTerminal2 />,
    },
    {
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      icon: <IconEaseInOut />,
    },
    {
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      icon: <IconCurrencyDollar />,
    },
    {
      title: t.features.feature4.title,
      description: t.features.feature4.description,
      icon: <IconCloud />,
    },
    // Optional extras (uncomment if you want 8 tiles)
    // {
    //   title: 'Multi-tenant Architecture',
    //   description: 'You can simply share passwords instead of buying new seats',
    //   icon: <IconRouteAltLeft />,
    // },
    // {
    //   title: '24/7 Customer Support',
    //   description: 'We are available 100% of the time. At least our AI Agents are.',
    //   icon: <IconHelp />,
    // },
    // {
    //   title: 'Money back guarantee',
    //   description: 'If you don’t like AgriYaga, we will convince you to like us.',
    //   icon: <IconAdjustmentsBolt />,
    // },
    // {
    //   title: 'And everything else',
    //   description: 'We just ran out of copy ideas. Accept our sincere apologies',
    //   icon: <IconHeart />,
    // },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div ref={ref} className={`container mx-auto transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={cn(
              'text-4xl md:text-5xl font-bold mb-4 text-center text-foreground',
              isRTL && 'text-right',
            )}
          >
            {t.features.title}
          </h2>

          <p
            className={cn(
              'text-center text-muted-foreground mb-16 max-w-2xl mx-auto',
              isRTL && 'text-right',
            )}
          >
            {t.features.subtitle}
          </p>

          <FeaturesGrid features={features} />
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid({ features }: { features: FeatureItem[] }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-8 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature) => (
        <GlowCard
          key={feature.title}
          glowColor="green"
          customSize
          className={cn(
            'group p-0 hover:-translate-y-1 transition-transform duration-300',
            'w-full sm:w-[360px] md:w-[420px] lg:w-[460px] min-h-[300px]'
          )}
        >
          <div className="flex h-full flex-col items-center text-center rounded-xl p-8 bg-white/85 dark:bg-neutral-900/60 ring-1 ring-emerald-300/25 dark:ring-emerald-500/20 shadow-md">
            <div className="mb-5 flex items-center justify-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 ring-1 ring-emerald-400/40">
                <div className="[&>svg]:w-7 [&>svg]:h-7 text-emerald-600 dark:text-emerald-400">
                  {feature.icon}
                </div>
              </div>
            </div>
            <div className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              {feature.title}
            </div>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 min-h-[56px]">
              {feature.description}
            </p>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-emerald-400/50 to-teal-500/50 rounded-full" />
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
