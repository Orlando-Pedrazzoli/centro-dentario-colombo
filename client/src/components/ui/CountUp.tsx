// client/src/components/ui/CountUp.tsx

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Valor final */
  end: number;
  /** Sufixo (ex.: '+', '%') */
  suffix?: string;
  /** Duração em ms. Default: 1600 */
  duration?: number;
  className?: string;
}

/**
 * Contador animado que dispara quando entra no viewport.
 * Respeita prefers-reduced-motion (salta direto para o valor final).
 */
export default function CountUp({
  end,
  suffix = '',
  duration = 1600,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const start = () => {
      if (started.current) return;
      started.current = true;

      if (prefersReduced) {
        setValue(end);
        return;
      }

      const t0 = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - t0) / duration, 1);
        // easeOutCubic — desacelera perto do fim
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
