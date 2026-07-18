// client/src/components/home/HeroSection.tsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Phone, ArrowRight, ChevronRight, Siren } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { SITE_CONFIG, isClinicOpenNow } from '../../utils/seoConfig';

const { business } = SITE_CONFIG;

const TEL_HREF = `tel:${business.telephone}`;
/** '+351 21 604 13 55' -> '21 604 13 55' */
const TEL_DISPLAY = business.telephoneDisplay.replace('+351 ', '');

/** '+351918565118' -> '918 565 118' */
const formatMobile = (tel: string) =>
  tel.replace('+351', '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

/**
 * Hierarquia de CTAs (boas práticas de conversão):
 * - 1 primário: "Marcar Consulta" — branco sólido, o único elemento
 *   de máximo contraste sobre o fundo escuro.
 * - 1 secundário: ghost com o NÚMERO visível ("21 604 13 55") — labels
 *   específicos convertem melhor que verbos vagos ("Ligar Agora").
 * - Urgências: painel próprio com acento vermelho (semântica de urgência,
 *   separada do azul da marca) com as 4 linhas telefónicas.
 * - Trust row: sinais de confiança ACIONÁVEIS (rating, localização,
 *   equipa) em vez de afirmações genéricas.
 */
export default function HeroSection() {
  const { t } = useLanguage();

  // Estado aberto/fechado real. Fica null durante o prerender para não
  // gravar um estado errado no HTML estático (mesmo padrão de /urgencias).
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    if (!(window as Window & { __PRERENDER__?: boolean }).__PRERENDER__) {
      setIsOpen(isClinicOpenNow());
    }
  }, []);

  return (
    <section
      id='inicio'
      className='relative hero-viewport flex items-center overflow-hidden'
    >
      {/* Vídeo de fundo — poster evita o flash preto durante o load */}
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          poster='/hero-poster.jpg'
          aria-hidden='true'
          className='w-full h-full object-cover'
        >
          <source src='/hero-video.mp4' type='video/mp4' />
        </video>
        {/* Overlay mais escuro à esquerda — garante contraste AA do texto */}
        <div className='absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/75 to-primary-900/45'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 sm:pt-32 md:pt-40'>
        <div className='max-w-3xl'>
          {/* Badge de estado — dinâmico, com fallback estático */}
          <div className='animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5 sm:mb-6'>
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpen === false ? 'bg-amber-400' : 'bg-green-400 animate-pulse'
              }`}
            ></span>
            <span className='text-white text-xs sm:text-sm font-semibold tracking-wide'>
              {isOpen === null
                ? t('hero.badge')
                : isOpen
                  ? t('hero.openBadge')
                  : t('hero.closedBadge')}
            </span>
          </div>

          {/* Título */}
          <h1
            className='animate-fade-up text-display text-white mb-4 sm:mb-5'
            style={{ animationDelay: '100ms' }}
          >
            {t('hero.title1')}
            <br />
            {t('hero.title2')}{' '}
            <span className='text-primary-300'>{t('hero.titleHighlight')}</span>
          </h1>

          {/* Descrição */}
          <p
            className='animate-fade-up text-lead text-gray-100 mb-6 sm:mb-8 max-w-2xl'
            style={{ animationDelay: '200ms' }}
          >
            {t('hero.description')}
          </p>

          {/* ============ CTAs — hierarquia clara ============ */}
          <div
            className='animate-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8'
            style={{ animationDelay: '300ms' }}
          >
            {/* Primário: branco sólido — o elemento de maior contraste */}
            <a
              href='#contacto'
              className='group inline-flex items-center justify-center gap-2.5 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-cta hover:bg-primary-50 hover:scale-[1.02] transition-all duration-300'
            >
              {t('hero.cta1')}
              <ArrowRight
                className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                aria-hidden='true'
              />
            </a>

            {/* Secundário: ghost com o número visível */}
            <a
              href={TEL_HREF}
              aria-label={`${t('hero.cta2')}: ${business.telephoneDisplay}`}
              className='inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/70 transition-all duration-300'
            >
              <Phone className='w-5 h-5' aria-hidden='true' />
              {TEL_DISPLAY}
            </a>
          </div>

          {/* ============ FAIXA DE URGÊNCIAS ============
              Mobile: uma linha compacta (título + link) — os números
              vivem na página de urgências e na MobileCtaBar.
              >=sm: descrição + as 4 linhas telefónicas. */}
          <div
            className='animate-fade-up rounded-2xl bg-red-500/15 border border-red-300/30 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4'
            style={{ animationDelay: '400ms' }}
          >
            <div className='flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:mb-3'>
              <span className='inline-flex items-center gap-2 text-white font-bold'>
                <Siren className='w-5 h-5 text-red-300' aria-hidden='true' />
                {t('hero.urgencyTitle')}
              </span>
              <span className='hidden sm:inline text-gray-200 text-sm'>
                {t('hero.urgencyDesc')}
              </span>
              <Link
                to='/urgencias'
                onClick={() => window.scrollTo(0, 0)}
                className='inline-flex items-center gap-0.5 text-red-200 hover:text-white text-sm font-semibold transition-colors ml-auto'
              >
                {t('hero.urgencyLink')}
                <ChevronRight className='w-4 h-4' aria-hidden='true' />
              </Link>
            </div>

            {/* As 4 linhas telefónicas — fonte única: seoConfig */}
            <ul className='hidden sm:flex flex-wrap gap-2' role='list'>
              <li>
                <a
                  href={TEL_HREF}
                  className='inline-flex items-center gap-1.5 bg-white/10 border border-white/25 rounded-full px-3.5 py-1.5 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-colors'
                >
                  <Phone
                    className='w-3.5 h-3.5 text-red-200'
                    aria-hidden='true'
                  />
                  {TEL_DISPLAY}
                </a>
              </li>
              {business.emergencyLines.map(line => (
                <li key={line}>
                  <a
                    href={`tel:${line}`}
                    className='inline-flex items-center gap-1.5 bg-white/10 border border-white/25 rounded-full px-3.5 py-1.5 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-colors'
                  >
                    <Phone
                      className='w-3.5 h-3.5 text-red-200'
                      aria-hidden='true'
                    />
                    {formatMobile(line)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
