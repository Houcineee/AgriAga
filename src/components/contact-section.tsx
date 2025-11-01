'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, UserPlus } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4 text-gray-900 dark:text-white">
                {t('title')}
              </CardTitle>
              <CardDescription className="text-lg">
                {t('description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <UserPlus className="mr-2 h-5 w-5" />
                  {t('register')}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('contactUs')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
