
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clapperboard, Camera, PenTool, Globe } from 'lucide-react';
import { useLanguage } from "@/context/language-context";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Clapperboard className="h-10 w-10 text-primary" />,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t('service4Title'),
      description: t('service4Desc'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('servicesTitle')}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4">
                {service.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
