import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    comment: "Working with Vimo was a game-changer. Their creativity and professionalism exceeded all our expectations.",
  },
  {
    name: "John Smith",
    title: "Marketing Director, BizCorp",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    comment: "The video they produced for us went viral! The ROI was incredible. Highly recommend their services.",
  },
  {
    name: "Samantha Lee",
    title: "Founder, Creative Co.",
    image: "https://placehold.co/100x100.png",
    hint: "person portrait",
    comment: "Incredible attention to detail and a fantastic team to collaborate with. They truly understood our vision.",
  },
  {
    name: "Mike Chen",
    title: "Product Manager, Tech Solutions",
    image: "https://placehold.co/100x100.png",
    hint: "professional headshot",
    comment: "The final website is not only beautiful but also highly functional. Our user engagement has skyrocketed.",
  },
  {
    name: "Emily White",
    title: "Artist & Designer",
    image: "https://placehold.co/100x100.png",
    hint: "designer headshot",
    comment: "They brought my portfolio to life. I couldn't be happier with the stunning visuals and smooth experience.",
  },
];

const FiveStars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
    ))}
  </div>
);

export function TestimonialsSection() {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Real stories from satisfied partners who trusted us with their vision.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {extendedTestimonials.map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-80 md:w-96 mx-4 p-6">
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={56}
                    height={56}
                    data-ai-hint={testimonial.hint}
                    className="rounded-full h-14 w-14 object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-foreground italic border-l-4 border-border pl-4">
                  "{testimonial.comment}"
                </blockquote>
                <FiveStars />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 10%, transparent 90%, hsl(var(--background)) 100%)' }}></div>
      </div>
    </section>
  );
}
