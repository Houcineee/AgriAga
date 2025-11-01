'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  useScroll as useFramerScroll,
  useTransform,
  motion,
  MotionValue,
} from 'framer-motion';

export default function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const titleComponent = (
    <>
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium shadow-lg shadow-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t.hero.badge}
        </span>
      </div>

      <h1
        className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground ${
          isRTL ? 'text-right' : ''
        }`}
      >
        {t.hero.title}
      </h1>

      <p
        className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto ${
          isRTL ? 'text-right' : ''
        }`}
      >
        {t.hero.subtitle}
      </p>

  
    </>
  );

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <ContainerScroll titleComponent={titleComponent}>
        {/* Graph area inside the Card - simple SVG graphs */}
        <div className="h-full w-full flex flex-col md:flex-row items-stretch gap-4 p-6">
          <div className="flex-1 flex items-center justify-center">
            <svg
              viewBox="0 0 400 260"
              className="max-w-full h-72 md:h-96"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="transparent" />
              {/* Axes */}
              <path d="M40 20 L40 220 L380 220" stroke="#9ca3af" strokeWidth="1" fill="none" />
              {/* Area chart */}
              <path
                d="M40 180 C100 140 140 80 200 100 C260 120 300 60 360 80 L360 220 L40 220 Z"
                fill="url(#g1)"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              {/* Line chart overlay */}
              <path
                d="M40 180 C100 140 140 80 200 100 C260 120 300 60 360 80"
                stroke="#2563eb"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Simple bars */}
              <g fill="#10b981">
                <rect x="60" y="140" width="12" height="80" rx="2" />
                <rect x="90" y="110" width="12" height="110" rx="2" />
                <rect x="120" y="90" width="12" height="130" rx="2" />
                <rect x="150" y="120" width="12" height="100" rx="2" />
              </g>
            </svg>
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">{t.hero.analytics}</div>
              <div className="text-sm text-muted-foreground">{t.hero.analyticsSubtitle}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{t.hero.stats.trees}</div>
                <div className="text-2xl font-bold">12,430</div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{t.hero.stats.health}</div>
                <div className="text-2xl font-bold">87%</div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{t.hero.stats.forecast}</div>
                <div className="text-2xl font-bold">+8%</div>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <div className="text-lg font-semibold">{t.hero.stats.reports}</div>
                <div className="text-2xl font-bold">120</div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="text-lg px-8 py-6">
          {t.hero.cta}
          <ArrowRight className="ml-2" />
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-6">
          {t.hero.ctaSecondary}
        </Button>
      </div>
    </section>
  );
}

/* ----------------- ContainerScroll + subcomponents ----------------- */

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useFramerScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
