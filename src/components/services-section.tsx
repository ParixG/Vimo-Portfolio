import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clapperboard, Camera, PenTool, Globe } from 'lucide-react';

const services = [
  {
    icon: <Clapperboard className="h-10 w-10 text-primary" />,
    title: "Video Production",
    description: "High-quality video content that tells your story and engages your audience.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Photography",
    description: "Professional photoshoots for products, events, and brand marketing.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Graphic Design",
    description: "Creative logos, branding, and marketing materials that make an impact.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Website Development",
    description: "Modern, responsive websites built to perform and convert.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We offer a complete suite of digital creative services to help your brand stand out and connect with your audience.</p>
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
