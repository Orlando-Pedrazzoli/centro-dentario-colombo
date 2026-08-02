// 📄 client/src/components/ScrollToTop.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Restaura o scroll para o topo em cada mudança de rota.
 *
 * O React Router não faz isto por defeito em SPAs: ao navegar de
 * /tratamentos/implantologia para /faq, a página nova abria na
 * posição de scroll da anterior. Era por isso que os links do
 * Footer precisavam de onClick={() => window.scrollTo(0, 0)}
 * manuais — este componente torna esses handlers redundantes.
 *
 * Âncoras (/#tratamentos, /#contacto) são respeitadas: quando há
 * hash, deixamos o browser/CSS (scroll-behavior + scroll-margin-top
 * definidos no index.css) tratar do posicionamento na secção.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // 'instant' evita a animação suave do scroll-behavior: smooth
    // global — a página nova deve simplesmente começar no topo.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
