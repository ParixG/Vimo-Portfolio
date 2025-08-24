'use client';

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function FadeInSection({ children, direction = 'up', delay = 0 }: FadeInSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getTransformClass = () => {
    if (inView) {
      return 'translate-x-0 translate-y-0';
    }
    switch (direction) {
      case 'up':
        return 'translate-y-5';
      case 'down':
        return '-translate-y-5';
      case 'left':
        return 'translate-x-5';
      case 'right':
        return '-translate-x-5';
      default:
        return 'translate-y-5';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        inView ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}