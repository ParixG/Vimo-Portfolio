import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServicesSection } from '@/components/services-section';
import { SoftwareSection } from '@/components/software-section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              Creative Digital Services
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              From captivating videos to stunning websites, we bring your vision to life with passion and precision.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        <ServicesSection />
        <SoftwareSection />
      </main>
      <Footer />
    </div>
  );
}
