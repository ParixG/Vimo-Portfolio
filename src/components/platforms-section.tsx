
'use client';

import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const platforms = [
  {
    name: "Instagram",
    icon: <Instagram className="h-16 w-16 text-primary" />,
  },
  {
    name: "Meta",
    icon: <Facebook className="h-16 w-16 text-primary" />,
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-16 w-16 text-primary" />,
  },
  {
    name: "TikTok",
    icon: (
      <svg
        className="h-16 w-16 text-primary"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>TikTok</title>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.01-1.58-.01-3.16 0-4.75-.05-1.9-.9-3.6-2.19-4.84-1.28-1.26-3.01-1.85-4.74-1.85v4.86c.88.06 1.75.22 2.6.45v4.5c-1.9.01-3.8-.02-5.7.01-.02 1.95-1.04 3.84-2.61 4.96-1.58 1.12-3.63 1.5-5.46 1.16v-4.11c1.18.23 2.38.33 3.57.29.01-1.88.01-3.76 0-5.65-1.18-.28-2.35-.61-3.48-1.03V8.68c1.78.63 3.63.9 5.44.81v4.46c.86.08 1.71.24 2.56.49V.02z" />
      </svg>
    ),
  },
];

export function PlatformsSection() {
  const { t } = useLanguage();
  return (
    <section id="platforms" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('platformsTitle')}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t('platformsSubtitle')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-4 text-center w-24">
              {platform.icon}
              <span className="font-semibold text-lg">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
