'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { IconMail, IconPhone } from '@tabler/icons-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div ref={ref} className={`container mx-auto transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center">
            {t.contact.title}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${t.contact.emailValue}`}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <IconMail className="w-7 h-7 text-emerald-600" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{t.contact.email}</h3>
              <p className="text-emerald-600 font-medium break-all">
                {t.contact.emailValue}
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${t.contact.phoneValue.replace(/\s/g, '')}`}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <IconPhone className="w-7 h-7 text-emerald-600" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{t.contact.phone}</h3>
              <p className={`text-emerald-600 font-medium ${isRTL ? 'direction-ltr' : ''}`}>
                {t.contact.phoneValue}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
