'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Droplets, Sprout } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-950 dark:via-green-950 dark:to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-4 mb-6">
            <Sprout className="h-16 w-16 text-green-600 dark:text-green-400" />
            <Droplets className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
            {t('subtitle')}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6">
              {t('cta')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
