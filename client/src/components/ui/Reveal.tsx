// client/src/components/ui/Reveal.tsx

import { useEffect, useRef, ReactNode, ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Direção da entrada. Default: 'up' */
  direction?: 'up' | 'left' | 'right' | 'none';
  /** Atraso em ms — útil para stagger entre cards irmãos */
  delay?: number;
  /** Elemento HTML a renderizar. Default: 'div' */
  as?: ElementType;
  className?: string;
}

/**
 * Scroll-reveal com IntersectionObserver.
 *
 * - Anima uma única vez (unobserve após revelar) — sem custo contínuo.
 * - `prefers-reduced-motion` é tratado no CSS (.reveal fica estático).
 * - Sem dependências externas (dispensa framer-motion para este caso).
 *
 * Uso:
 *   <Reveal delay={100}><Card /></Reveal>
 *   <Reveal direction='left' as='section'>...</Reveal>
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem suporte a IO (browsers muito antigos): mostra imediatamente
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
        ? 'reveal-right'
        : direction === 'none'
          ? 'reveal-none'
          : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${className}`.trim()}
      style={
        delay
          ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
