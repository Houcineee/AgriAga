'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, Trophy } from 'lucide-react';

export function FeaturesSection() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Lightbulb,
      title: t('innovation.title'),
      description: t('innovation.description'),
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: Users,
      title: t('collaboration.title'),
      description: t('collaboration.description'),
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Target,
      title: t('impact.title'),
      description: t('impact.description'),
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Trophy,
      title: t('prizes.title'),
      description: t('prizes.description'),
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
