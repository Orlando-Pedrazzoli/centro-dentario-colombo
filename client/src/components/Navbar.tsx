// client/src/components/Navbar.tsx

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { getTreatments } from '../data/services-data';
import { SITE_CONFIG } from '../utils/seoConfig';

const { business } = SITE_CONFIG;
const TEL_HREF = `tel:${business.telephone}`;

/**
 * Rotas com hero escuro, onde a barra pode ficar transparente no topo.
 * Em todas as outras é sólida desde o início — antes disto, a /corpo-clinico
 * tinha texto branco sobre fundo branco: navegação invisível.
 */
const OVERLAY_ROUTES = ['/', '/urgencias'];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  // Antes usava a lista `treatments`, que é só PT: em inglês o dropdown
  // mostrava títulos portugueses.
  const treatments = getTreatments(language);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOverlayRoute = OVERLAY_ROUTES.includes(pathname);
  const solid = !isOverlayRoute || scrolled;

  useEffect(() => {
    if (!isOverlayRoute) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOverlayRoute]);

  // Fechar tudo ao mudar de página — senão o drawer fica aberto sobre o destino.
  useEffect(() => {
    setMenuOpen(false);
    setTreatmentsOpen(false);
    setMobileTreatmentsOpen(false);
  }, [pathname]);

  // Escape fecha e devolve o foco ao botão que abriu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      setTreatmentsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Bloquear o scroll do body com o drawer aberto.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Clique fora fecha o dropdown de tratamentos.
  useEffect(() => {
    if (!treatmentsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [treatmentsOpen]);

  const half = Math.ceil(treatments.length / 2);
  const columns = [treatments.slice(0, half), treatments.slice(half)];

  const linkColor = solid
    ? 'text-gray-700 hover:text-[#14489c]'
    : 'text-white/90 hover:text-white';

  return (
    <>
      <nav
        aria-label={t('navbar.mainNav')}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 lg:h-20 gap-4'>
            {/* ---------- Logo ---------- */}
            <Link
              to='/'
              className='flex items-center gap-2.5 min-w-0 group'
              aria-label={SITE_CONFIG.siteName}
            >
              <img
                src='/logo-colombo-nav.png'
                alt=''
                className='h-9 sm:h-10 lg:h-12 w-auto flex-shrink-0 transition-transform group-hover:scale-105'
              />
              <span
                className={`font-semibold tracking-tight leading-none truncate text-[13px] sm:text-base lg:text-lg ${
                  solid
                    ? 'bg-gradient-to-r from-[#14489c] to-[#006bb3] bg-clip-text text-transparent'
                    : 'text-white drop-shadow'
                }`}
              >
                Centro Dentário Colombo
              </span>
            </Link>

            {/* ---------- Links desktop ---------- */}
            <div className='hidden lg:flex items-center gap-1'>
              <div
                ref={dropdownRef}
                className='relative'
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <button
                  type='button'
                  onClick={() => setTreatmentsOpen(v => !v)}
                  aria-expanded={treatmentsOpen}
                  aria-controls='menu-tratamentos'
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
                >
                  {t('navbar.treatments')}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      treatmentsOpen ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>

                {treatmentsOpen && (
                  <div
                    id='menu-tratamentos'
                    className='absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px]'
                  >
                    <div className='bg-white rounded-2xl shadow-2xl border border-gray-100 p-4'>
                      <div className='grid grid-cols-2 gap-x-4'>
                        {columns.map((column, i) => (
                          <ul key={i} className='space-y-0.5'>
                            {column.map(treatment => (
                              <li key={treatment.id}>
                                <Link
                                  to={`/tratamentos/${treatment.slug}`}
                                  className='flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-[#14489c] transition-colors'
                                >
                                  <span className='w-1.5 h-1.5 rounded-full bg-[#006bb3] flex-shrink-0' />
                                  {treatment.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to='/corpo-clinico'
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
              >
                {t('navbar.clinicalTeamLink')}
              </Link>
              <Link
                to='/faq'
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
              >
                {t('navbar.faq')}
              </Link>
              <a
                href='/#contacto'
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
              >
                {t('navbar.contact')}
              </a>
            </div>

            {/* ---------- Ações desktop ---------- */}
            <div className='hidden lg:flex items-center gap-3'>
              <LanguageToggle
                language={language}
                setLanguage={setLanguage}
                solid={solid}
                label={t('navbar.language')}
              />

              <a
                href={TEL_HREF}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
              >
                <PhoneIcon className='w-4 h-4' />
                <span className='hidden xl:inline'>
                  {business.telephoneDisplay}
                </span>
                <span className='xl:hidden'>{t('navbar.call')}</span>
              </a>

              {/* Urgências é o CTA primário: é o caminho de maior intenção do
                  site e o único que responde a "estão abertos agora?". */}
              <Link
                to='/urgencias'
                className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-red-600/20 transition-colors'
              >
                <span className='relative flex h-2 w-2'>
                  <span className='motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60' />
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-white' />
                </span>
                {t('navbar.emergencies')}
              </Link>
            </div>

            {/* ---------- Ações mobile ---------- */}
            {/* O telefone fica sempre visível: quem tem dor não deve ter de
                abrir um menu para ligar. Alvos de 44px. */}
            <div className='flex lg:hidden items-center gap-1'>
              <a
                href={TEL_HREF}
                aria-label={`${t('navbar.call')} ${business.telephoneDisplay}`}
                className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                  solid
                    ? 'text-[#14489c] hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <PhoneIcon className='w-5 h-5' />
              </a>

              <button
                ref={menuButtonRef}
                type='button'
                onClick={() => setMenuOpen(true)}
                aria-label={t('navbar.openMenu')}
                aria-expanded={menuOpen}
                aria-controls='menu-mobile'
                className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                  solid
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 7h16M4 12h16M4 17h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== DRAWER MOBILE ==================== */}
      {menuOpen && (
        <div className='lg:hidden fixed inset-0 z-[60]'>
          <div
            className='absolute inset-0 bg-gray-900/50 backdrop-blur-sm'
            onClick={() => setMenuOpen(false)}
            aria-hidden='true'
          />

          <div
            ref={panelRef}
            id='menu-mobile'
            role='dialog'
            aria-modal='true'
            aria-label={t('navbar.mainNav')}
            tabIndex={-1}
            className='absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col outline-none'
          >
            <div className='flex items-center justify-between h-16 px-4 border-b border-gray-100 flex-shrink-0'>
              <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#14489c] to-[#006bb3]'>
                Centro Dentário Colombo
              </span>
              <button
                type='button'
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label={t('navbar.closeMenu')}
                className='flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            <div className='flex-1 overflow-y-auto overscroll-contain px-4 py-5'>
              {/* Urgências primeiro e como cartão: quem abre este menu com dor
                  tem de encontrar isto sem procurar. */}
              <Link
                to='/urgencias'
                className='flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-5'
              >
                <span className='relative flex h-2.5 w-2.5 mt-1.5 flex-shrink-0'>
                  <span className='motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60' />
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600' />
                </span>
                <span className='min-w-0'>
                  <span className='block font-bold text-red-700'>
                    {t('navbar.emergenciesMobile')}
                  </span>
                  <span className='block text-sm text-red-900/70 mt-0.5'>
                    {t('navbar.openHours')}
                  </span>
                </span>
              </Link>

              <ul className='space-y-1'>
                <li>
                  <button
                    type='button'
                    onClick={() => setMobileTreatmentsOpen(v => !v)}
                    aria-expanded={mobileTreatmentsOpen}
                    aria-controls='menu-mobile-tratamentos'
                    className='w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-gray-900 font-medium hover:bg-gray-50 transition-colors'
                  >
                    {t('navbar.treatments')}
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        mobileTreatmentsOpen ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>

                  <ul
                    id='menu-mobile-tratamentos'
                    hidden={!mobileTreatmentsOpen}
                    className='mt-1 ml-3 pl-3 border-l border-gray-200 space-y-0.5'
                  >
                    {treatments.map(treatment => (
                      <li key={treatment.id}>
                        <Link
                          to={`/tratamentos/${treatment.slug}`}
                          className='block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-[#14489c] transition-colors'
                        >
                          {treatment.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link
                    to='/corpo-clinico'
                    className='block px-3 py-3.5 rounded-xl text-gray-900 font-medium hover:bg-gray-50 transition-colors'
                  >
                    {t('navbar.clinicalTeamLink')}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/faq'
                    className='block px-3 py-3.5 rounded-xl text-gray-900 font-medium hover:bg-gray-50 transition-colors'
                  >
                    {t('navbar.faqMobile')}
                  </Link>
                </li>
                <li>
                  <a
                    href='/#contacto'
                    onClick={() => setMenuOpen(false)}
                    className='block px-3 py-3.5 rounded-xl text-gray-900 font-medium hover:bg-gray-50 transition-colors'
                  >
                    {t('navbar.contact')}
                  </a>
                </li>
              </ul>

              <div className='mt-6 pt-5 border-t border-gray-100'>
                <p className='text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5 px-3'>
                  {t('navbar.language')}
                </p>
                <div className='px-3'>
                  <LanguageToggle
                    language={language}
                    setLanguage={setLanguage}
                    solid
                    label={t('navbar.language')}
                    size='lg'
                  />
                </div>
              </div>
            </div>

            <div className='border-t border-gray-100 p-4 flex-shrink-0'>
              <a
                href={TEL_HREF}
                className='flex items-center justify-center gap-2.5 w-full bg-[#14489c] hover:bg-[#006bb3] text-white py-3.5 rounded-full font-semibold transition-colors'
              >
                <PhoneIcon className='w-5 h-5' />
                {business.telephoneDisplay}
              </a>
              <p className='text-center text-xs text-gray-500 mt-3'>
                {t('navbar.openHours')}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============================================
// Toggle de idioma
// ============================================
/**
 * Texto, não bandeiras. Bandeira é país, não língua: a portuguesa exclui os
 * brasileiros que também usam o site, e a dos EUA para "inglês" é arbitrária.
 * O atributo lang em cada botão faz com que os leitores de ecrã pronunciem
 * cada opção na língua certa.
 */
function LanguageToggle({
  language,
  setLanguage,
  solid,
  label,
  size = 'sm',
}: {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  solid: boolean;
  label: string;
  size?: 'sm' | 'lg';
}) {
  const options: Array<{ code: 'pt' | 'en'; name: string }> = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
  ];

  const big = size === 'lg';

  return (
    <div
      role='group'
      aria-label={label}
      className={`relative inline-flex items-center rounded-full p-0.5 ${
        big ? 'w-full' : ''
      } ${solid ? 'bg-gray-100' : 'bg-white/15 backdrop-blur-sm'}`}
    >
      <span
        aria-hidden='true'
        className='absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-transform duration-200 motion-reduce:transition-none'
        style={{
          transform:
            language === 'en'
              ? 'translateX(calc(100% + 2px))'
              : 'translateX(0)',
        }}
      />
      {options.map(option => {
        const active = language === option.code;
        return (
          <button
            key={option.code}
            type='button'
            lang={option.code}
            onClick={() => setLanguage(option.code)}
            aria-pressed={active}
            title={option.name}
            className={`relative z-10 rounded-full font-semibold transition-colors ${
              big ? 'flex-1 px-4 py-2.5 text-sm' : 'px-2.5 py-1 text-xs'
            } ${
              active
                ? 'text-[#14489c]'
                : solid
                  ? 'text-gray-500 hover:text-gray-700'
                  : 'text-white/80 hover:text-white'
            }`}
          >
            {option.code.toUpperCase()}
            <span className='sr-only'> — {option.name}</span>
          </button>
        );
      })}
    </div>
  );
}

// ============================================
// Ícone
// ============================================
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      />
    </svg>
  );
}
