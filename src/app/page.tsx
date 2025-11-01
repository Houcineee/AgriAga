'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import MobileApp from '@/components/sections/MobileApp';
import Demo from '@/components/sections/Demo';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay (Top) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <MobileApp />
  <Demo />
      </main>
      <Footer />
</div>
  );
}


