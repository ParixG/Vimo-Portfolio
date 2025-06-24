import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const software = [
  {
    name: "Adobe Premiere Pro",
    logoUrl: "https://placehold.co/100x100.png",
    hint: "Adobe PremierePro"
  },
  {
    name: "Adobe Photoshop",
    logoUrl: "https://placehold.co/100x100.png",
    hint: "Adobe Photoshop"
  },
  {
    name: "Adobe Illustrator",
    logoUrl: "https://placehold.co/100x100.png",
    hint: "Adobe Illustrator"
  },
  {
    name: "Adobe After Effects",
    logoUrl: "https://placehold.co/100x100.png",
    hint: "Adobe AfterEffects"
  }
];

export function SoftwareSection() {
  return (
    <section id="software" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Tools of Our Trade</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We use industry-standard software to deliver professional results with precision and creativity.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {software.map((tool) => (
            <Card key={tool.name} className="p-4 w-40 h-40 flex flex-col justify-center items-center bg-card transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardContent className="p-0 flex flex-col items-center justify-center text-center gap-2">
                <Image 
                  src={tool.logoUrl} 
                  alt={`${tool.name} logo`} 
                  width={64} 
                  height={64}
                  data-ai-hint={tool.hint}
                  className="h-16 w-16 object-contain"
                />
                <span className="font-semibold text-sm mt-2">{tool.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
