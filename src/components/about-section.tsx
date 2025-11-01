'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <Card className="border-2">
            <CardHeader>
              <CardDescription className="text-lg leading-relaxed">
                {t('description')}
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <CardTitle className="text-2xl mb-4 text-blue-600 dark:text-blue-400">
                {t('mission')}
              </CardTitle>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('missionText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
