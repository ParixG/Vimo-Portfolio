
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServicesSection } from '@/components/services-section';
import { SoftwareSection } from '@/components/software-section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlatformsSection } from '@/components/platforms-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-20 md:py-32 hero-banner">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              {t('heroTitle')}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              {t('heroSubtitle')}
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t('viewOurWork')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        <ServicesSection />
        <SoftwareSection />
        <PlatformsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
