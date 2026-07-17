// client/src/components/home/HeroSection.tsx

import { Link } from 'react-router';
import { Phone, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id='inicio'
      className='relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden'
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
        {/* Overlay gradiente com tom da marca (mais coeso que preto puro) */}
        <div className='absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-950/70 to-primary-900/45'></div>
      </div>

      {/* Conteúdo com entrada staggered (animações CSS, sem JS) */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 md:pt-28'>
        <div className='max-w-3xl'>
          {/* Badge */}
          <div className='animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8'>
            <span className='w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse'></span>
            <span className='text-white text-xs sm:text-sm font-semibold tracking-wide'>
              {t('hero.badge')}
            </span>
          </div>

          {/* Título — tipografia fluida (clamp) em vez de 5 breakpoints */}
          <h1
            className='animate-fade-up text-display text-white mb-4 sm:mb-6'
            style={{ animationDelay: '120ms' }}
          >
            {t('hero.title1')}
            <br />
            {t('hero.title2')}{' '}
            <span className='text-primary-300'>{t('hero.titleHighlight')}</span>
          </h1>

          {/* Descrição */}
          <p
            className='animate-fade-up text-lead text-gray-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl'
            style={{ animationDelay: '240ms' }}
          >
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div
            className='animate-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-14'
            style={{ animationDelay: '360ms' }}
          >
            <a
              href='#contacto'
              className='group bg-primary-600 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full hover:bg-primary-500 transition-all text-sm sm:text-lg font-semibold text-center shadow-cta hover:scale-[1.03] transform duration-300 inline-flex items-center justify-center gap-2'
            >
              {t('hero.cta1')}
              <ArrowRight
                className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform'
                aria-hidden='true'
              />
            </a>
            <a
              href='tel:+351216041355'
              className='group bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full hover:bg-white hover:text-primary-800 hover:border-white transition-all text-sm sm:text-lg font-semibold text-center inline-flex items-center justify-center gap-2'
            >
              <Phone className='w-4 h-4 sm:w-5 sm:h-5' aria-hidden='true' />
              {t('hero.cta2')}
            </a>
          </div>

          {/* Features */}
          <div
            className='animate-fade-up grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-white'
            style={{ animationDelay: '480ms' }}
          >
            <Link
              to='/corpo-clinico'
              onClick={() => window.scrollTo(0, 0)}
              className='flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2.5 hover:bg-white/20 transition-all duration-300 cursor-pointer group'
            >
              <div className='flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-primary-400/30 rounded-full flex items-center justify-center border border-primary-300/30'>
                <Check
                  className='w-4 h-4 sm:w-5 sm:h-5 text-primary-200'
                  aria-hidden='true'
                />
              </div>
              <span className='text-sm sm:text-base font-medium group-hover:text-primary-200 transition-colors flex-1'>
                {t('hero.featureClinicalTeam')}
              </span>
              <ChevronRight
                className='w-4 h-4 text-primary-200 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all'
                aria-hidden='true'
              />
            </Link>

            <div className='flex items-center gap-2.5 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2.5'>
              <div className='flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-primary-400/20 rounded-full flex items-center justify-center'>
                <Check
                  className='w-4 h-4 sm:w-5 sm:h-5 text-primary-300'
                  aria-hidden='true'
                />
              </div>
              <span className='text-sm sm:text-base font-medium'>
                {t('hero.featureFlexible')}
              </span>
            </div>

            <div className='flex items-center gap-2.5 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2.5'>
              <div className='flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-primary-400/20 rounded-full flex items-center justify-center'>
                <Check
                  className='w-4 h-4 sm:w-5 sm:h-5 text-primary-300'
                  aria-hidden='true'
                />
              </div>
              <span className='text-sm sm:text-base font-medium'>
                {t('hero.featureModern')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
