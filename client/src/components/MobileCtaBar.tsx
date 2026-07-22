// client/src/components/MobileCtaBar.tsx

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTreatments } from '../data/services-data';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function MobileCtaBar() {
  const { t, language } = useLanguage();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const hidden =
    pathname.startsWith('/admin') || pathname.startsWith('/patient');

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hidden]);

  if (hidden) return null;

  // WhatsApp contextual: em páginas de tratamento a mensagem pré-preenchida
  // menciona a especialidade — conversão direta a partir de campanhas.
  const treatmentSlug = pathname.startsWith('/tratamentos/')
    ? pathname.split('/')[2]
    : undefined;
  const treatment = treatmentSlug
    ? getTreatments(language).find(tr => tr.slug === treatmentSlug)
    : undefined;
  const whatsappUrl = getWhatsAppUrl({
    treatment: treatment?.title,
    language: language === 'en' ? 'en' : 'pt',
  });

  const bookHref = pathname === '/' ? '#contacto' : '/#contacto';

  const linkBase =
    'flex flex-col items-center justify-center gap-1 py-2.5 transition-colors';

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className='grid grid-cols-3 gap-px bg-gray-200 border-t border-gray-200 shadow-[0_-4px_20px_rgba(8,34,80,0.12)]'>
        <a
          href='tel:+351216041355'
          className={`${linkBase} bg-white text-primary-600 active:bg-primary-50`}
        >
          <Phone className='w-5 h-5' aria-hidden='true' />
          <span className='text-xs font-semibold'>{t('mobileCta.call')}</span>
        </a>

        <a
          href={whatsappUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`${linkBase} bg-white text-green-600 active:bg-green-50`}
        >
          <MessageCircle className='w-5 h-5' aria-hidden='true' />
          <span className='text-xs font-semibold'>
            {t('mobileCta.whatsapp')}
          </span>
        </a>

        <a
          href={bookHref}
          className={`${linkBase} bg-primary-600 text-white active:bg-primary-700`}
        >
          <Calendar className='w-5 h-5' aria-hidden='true' />
          <span className='text-xs font-semibold'>{t('mobileCta.book')}</span>
        </a>
      </div>
    </div>
  );
}
