import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { useReveal } from '@/hooks/useSection';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, icon: Icon, children, className = '' }: SectionProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={`relative px-6 md:px-12 lg:px-20 ${className}`}>
      <div ref={ref} className="mx-auto max-w-6xl py-16 md:py-20 lg:py-24">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={shown ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-14"
          >
            {eyebrow && (
              <div className="eyebrow mb-3 flex items-center gap-2">
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="display text-4xl md:text-6xl lg:text-7xl text-balance">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
