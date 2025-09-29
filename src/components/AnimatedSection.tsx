import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold, freezeOnceVisible: true });

  return (
    <div
      ref={ref as any}
      className={cn(
        className,
        !isVisible && animation === 'fade-in-up' && 'opacity-0 translate-y-8',
        !isVisible && animation === 'fade-in-left' && 'opacity-0 -translate-x-8',
        !isVisible && animation === 'fade-in-right' && 'opacity-0 translate-x-8',
        !isVisible && animation === 'scale-in' && 'opacity-0 scale-95',
        isVisible && 'opacity-100 translate-y-0 translate-x-0 scale-100',
        'transition-all duration-700 ease-out'
      )}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;