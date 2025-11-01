'use client';

import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import { Sprout, Droplets, Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-3">
            <Sprout className="h-8 w-8 text-green-400" />
            <Droplets className="h-8 w-8 text-blue-400" />
          </div>
          <Separator className="w-full max-w-md" />
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Heart className="h-4 w-4 text-red-400" />
            <span>{t('organizedBy')}</span>
          </div>
          <p className="text-sm text-gray-400">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
