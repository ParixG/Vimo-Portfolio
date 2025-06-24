
'use client';

import { LanguageProvider } from '@/context/language-context';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
