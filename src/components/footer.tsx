
'use client';

import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t mt-16">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {t('footerText')}</p>
      </div>
    </footer>
  );
}
