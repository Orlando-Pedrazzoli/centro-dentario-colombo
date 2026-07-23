// 📄 client/src/pages/TreatmentPage.tsx

import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { SEO } from '../components/SEO';
import {
  TreatmentJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from '../components/JsonLd';
import { getTreatments } from '../data/services-data';
import { useLanguage } from '../contexts/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';

// ============================================
// Ícones inline (sem dependências extra)
// ============================================
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
}

// ============================================
// Título de secção com barra azul
// ============================================
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3'>
      <span className='w-2 h-8 bg-blue-600 rounded'></span>
      {children}
    </h2>
  );
}

// ============================================
// Banda de secção — alterna fundos para criar
// ritmo visual sem depender de imagens internas
// ============================================
function SectionBand({
  tone = 'white',
  children,
}: {
  tone?: 'white' | 'gray';
  children: React.ReactNode;
}) {
  return (
    <section
      className={`py-14 md:py-16 px-4 ${
        tone === 'gray' ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className='max-w-5xl mx-auto'>{children}</div>
    </section>
  );
}

// ============================================
// Item do accordion de FAQ
// ============================================
interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: FaqAccordionItemProps) {
  return (
    <div className='border-b border-gray-200 last:border-b-0'>
      <button
        onClick={onClick}
        className='w-full py-5 px-4 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg'
        aria-expanded={isOpen}
      >
        <span className='text-gray-800 font-medium pr-4 text-base md:text-lg'>
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='px-4 pb-5 text-gray-600 leading-relaxed text-sm md:text-base'>
          {answer}
        </p>
      </div>
    </div>
  );
}

// ============================================
// Página de Tratamento
// ============================================
export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Obter tratamentos no idioma atual
  const treatments = getTreatments(language);

  // Scroll para o topo quando a página carregar ou o slug mudar
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(null);
  }, [slug]);

  // Encontrar o tratamento pelo slug
  const treatment = treatments.find(tr => tr.slug === slug);

  // Se não encontrar o tratamento, redirecionar para home
  if (!treatment) {
    return <Navigate to='/' replace />;
  }

  // Path para SEO
  const path = `/tratamentos/${treatment.slug}`;

  // Descrição SEO baseada no tratamento
  const seoDescription = `${treatment.title} - Centro Dentário Colombo, Lisboa. ${treatment.description} ${t('treatmentPage.seoSuffix')}`;

  // Keywords
  const seoKeywords = `${treatment.keywords.join(', ')}, ${
    language === 'en'
      ? 'dental treatment lisbon, centro dentário colombo, dentist lisbon'
      : 'tratamento dentário lisboa, centro dentário colombo, dentista lisboa'
  }`;

  const bannerAbsolute = treatment.bannerImage.startsWith('http')
    ? treatment.bannerImage
    : `https://www.centrodentariocolombo.com${treatment.bannerImage}`;

  const whatsAppHref = getWhatsAppUrl({
    treatment: treatment.title,
    language: language === 'en' ? 'en' : 'pt',
  });

  return (
    <div className='min-h-screen bg-white'>
      {/* SEO Meta Tags Dinâmicas */}
      <SEO
        title={treatment.title}
        description={seoDescription}
        keywords={seoKeywords}
        image={bannerAbsolute}
        path={path}
        type='article'
      />

      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: t('treatmentPage.breadcrumbHome'), path: '/' },
          {
            name: t('treatmentPage.breadcrumbTreatments'),
            path: '/#tratamentos',
          },
          { name: treatment.title, path: path },
        ]}
      />
      <TreatmentJsonLd
        name={treatment.title}
        description={seoDescription}
        path={path}
        image={bannerAbsolute}
      />
      {/* FAQ visível na página, por isso é elegível para schema FAQPage */}
      <FaqJsonLd items={treatment.faq} />

      {/* Navbar vem do Layout. */}

      {/* Hero Banner — única imagem da página.
          Imagem recomendada: 1920×1080 (WebP/JPG otimizado). */}
      <section className='pt-20'>
        <div className='relative h-[460px] md:h-[560px] overflow-hidden'>
          <img
            src={treatment.bannerImage}
            alt={treatment.title}
            className='w-full h-full object-cover'
            fetchPriority='high'
          />
          {/* Gradiente reforçado à esquerda para legibilidade do texto */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent'></div>

          {/* Conteúdo do hero */}
          <div className='absolute bottom-0 left-0 right-0 p-8 md:p-12'>
            <div className='max-w-7xl mx-auto'>
              {/* Breadcrumb visível — orientação e SEO */}
              <nav
                aria-label='Breadcrumb'
                className='mb-4 text-sm text-white/70'
              >
                <ol className='flex flex-wrap items-center gap-2'>
                  <li>
                    <Link to='/' className='hover:text-white transition'>
                      {t('treatmentPage.breadcrumbHome')}
                    </Link>
                  </li>
                  <li aria-hidden='true'>/</li>
                  <li>
                    <a
                      href='/#tratamentos'
                      className='hover:text-white transition'
                    >
                      {t('treatmentPage.breadcrumbTreatments')}
                    </a>
                  </li>
                  <li aria-hidden='true'>/</li>
                  <li className='text-white font-medium'>{treatment.title}</li>
                </ol>
              </nav>

              <p className='text-sm md:text-base font-semibold uppercase tracking-wider text-blue-300 mb-3'>
                {treatment.title}
              </p>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl'>
                {treatment.hero.title}
              </h1>
              <p className='text-lg md:text-xl text-white/90 max-w-3xl mb-6'>
                {treatment.hero.subtitle}
              </p>
              <a
                href={whatsAppHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 hover:scale-[1.02] transition text-lg font-semibold shadow-lg'
              >
                {treatment.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <SectionBand>
        <div className='bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-lg'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            {treatment.intro.headline}
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {treatment.intro.text}
          </p>
        </div>
      </SectionBand>

      {/* O que é? */}
      <SectionBand>
        <SectionTitle>{t('treatmentPage.whatIs')}</SectionTitle>
        <p className='text-gray-700 leading-relaxed text-lg'>
          {treatment.whatIs}
        </p>
      </SectionBand>

      {/* Quando é indicada? */}
      <SectionBand tone='gray'>
        <SectionTitle>
          {treatment.indicationsTitle ?? t('treatmentPage.indications')}
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-4'>
          {treatment.indications.map((indication, index) => (
            <div
              key={index}
              className='flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition'
            >
              <CheckIcon className='w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5' />
              <p className='text-gray-700 leading-relaxed'>{indication}</p>
            </div>
          ))}
        </div>
      </SectionBand>

      {/* Tratamentos Disponíveis */}
      <SectionBand>
        <SectionTitle>{t('treatmentPage.availableTreatments')}</SectionTitle>
        <div className='grid md:grid-cols-2 gap-5'>
          {treatment.availableTreatments.map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg hover:-translate-y-0.5 transition'
            >
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                {item.name}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secção extra (ex.: Duração do tratamento — Ortodontia) */}
        {treatment.extraInfo && (
          <div className='mt-10 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              {treatment.extraInfo.title}
            </h3>
            <p className='text-gray-700 leading-relaxed text-lg'>
              {treatment.extraInfo.text}
            </p>
          </div>
        )}
      </SectionBand>

      {/* Como funciona? — timeline vertical */}
      <SectionBand tone='gray'>
        <SectionTitle>
          {treatment.stepsTitle ?? t('treatmentPage.howItWorks')}
        </SectionTitle>
        <ol className='relative ml-5 border-l-2 border-blue-200 space-y-8'>
          {treatment.steps.map((step, index) => (
            <li key={index} className='relative pl-10'>
              {/* Marcador numerado sobre a linha */}
              <span className='absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg ring-4 ring-gray-50'>
                {index + 1}
              </span>
              <div className='bg-white p-5 rounded-xl border border-gray-200 shadow-sm'>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>
                  {step.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </SectionBand>

      {/* Benefícios */}
      <SectionBand>
        <SectionTitle>{t('treatmentPage.benefits')}</SectionTitle>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {treatment.benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition'
            >
              <CheckIcon className='w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5' />
              <p className='text-gray-700 leading-relaxed'>{benefit}</p>
            </div>
          ))}
        </div>
      </SectionBand>

      {/* Porquê escolher o Centro Dentário Colombo? */}
      <SectionBand tone='gray'>
        <SectionTitle>{t('treatmentPage.whyChoose')}</SectionTitle>
        <div className='bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm'>
          <ul className='space-y-4'>
            {treatment.whyChoose.map((reason, index) => (
              <li key={index} className='flex items-start gap-3'>
                <CheckIcon className='w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5' />
                <p className='text-gray-700 leading-relaxed text-lg'>
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SectionBand>

      {/* Perguntas Frequentes */}
      <SectionBand>
        <SectionTitle>{t('treatmentPage.faqTitle')}</SectionTitle>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
          {treatment.faq.map((item, index) => (
            <FaqAccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </SectionBand>

      {/* Call to Action */}
      <section className='pb-16 px-4 bg-white'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              {treatment.ctaHeadline}
            </h3>
            <p className='text-xl text-white/90 mb-8'>
              {t('treatmentPage.ctaNoCommitment')}
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              {/* CTA primário: WhatsApp com mensagem pré-preenchida do
                  tratamento — link direto de conversão para campanhas. */}
              <a
                href={whatsAppHref}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition text-lg font-semibold inline-flex items-center shadow-lg'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                </svg>
                {t('treatmentPage.bookWhatsApp')}
              </a>
              <a
                href='/#contacto'
                className='bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-semibold inline-flex items-center shadow-lg'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                {t('treatmentPage.bookAppointment')}
              </a>
              <a
                href='tel:+351216041355'
                className='bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/20 transition text-lg font-semibold inline-flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                {t('treatmentPage.callNow')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Relacionados */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            {t('treatmentPage.otherTreatments')}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {treatments
              .filter(tr => tr.id !== treatment.id)
              .slice(0, 16)
              .map(relatedTreatment => (
                <Link
                  key={relatedTreatment.id}
                  to={`/tratamentos/${relatedTreatment.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group'
                >
                  <div className='h-48 overflow-hidden'>
                    <img
                      src={relatedTreatment.bannerImage}
                      alt={relatedTreatment.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      loading='lazy'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>
                      {relatedTreatment.title}
                    </h3>
                    <p className='text-sm text-blue-600 font-semibold'>
                      {relatedTreatment.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer Simplificado */}
      <footer className='bg-gray-900 text-white py-8 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Centro Dentário Colombo.{' '}
            {t('treatmentPage.footerRights')}
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            {t('treatmentPage.footerErs')}
          </p>
        </div>
      </footer>
    </div>
  );
}
