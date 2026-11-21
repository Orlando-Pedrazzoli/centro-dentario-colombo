// client/src/pages/DorDeDentesPage.tsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import {
  BreadcrumbJsonLd,
  ContactPageJsonLd,
  FaqJsonLd,
} from '../components/JsonLd';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_CONFIG } from '../utils/seoConfig';
import { getDorDeDentesContent } from '../data/dor-de-dentes-data';
import Reveal from '../components/ui/Reveal';
import {
  Phone,
  Clock,
  MapPin,
  BadgeCheck,
  Languages,
  ChevronRight,
  ChevronDown,
  Info,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

const { business } = SITE_CONFIG;

/** '+351918565118' -> '918 565 118' (formato PT de leitura rápida) */
const formatLine = (tel: string) =>
  tel.replace('+351', '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

const WHATSAPP_PT = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  'Olá, estou com dor de dentes. Têm disponibilidade para uma consulta?',
)}`;
const WHATSAPP_EN = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  'Hello, I have a toothache. Do you have an appointment available?',
)}`;
const MAPS_HREF = business.socialMedia.googleMaps;
const PAGE_PATH = '/dor-de-dentes';

/**
 * Painel único de linhas telefónicas.
 *
 * Todos os números juntos, grandes e tocáveis — a linha fixa primeiro, os
 * telemóveis a seguir. O objetivo da página é um só: que a pessoa LIGUE
 * antes de se deslocar, para confirmarmos se há disponibilidade.
 */
function PhoneLinesPanel({
  title,
  sub,
  landlineLabel,
  mobileLabel,
}: {
  title: string;
  sub: string;
  landlineLabel: string;
  mobileLabel: string;
}) {
  const lines = [
    {
      tel: business.telephone,
      display: business.telephoneDisplay.replace('+351 ', ''),
      label: landlineLabel,
      primary: true,
    },
    ...business.additionalLines.map(line => ({
      tel: line,
      display: formatLine(line),
      label: mobileLabel,
      primary: false,
    })),
  ];

  return (
    <div className='w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden'>
      <div className='px-5 pt-4 pb-3 border-b border-gray-100'>
        <p className='text-gray-900 font-bold text-base leading-snug'>
          {title}
        </p>
        <p className='text-gray-500 text-sm mt-0.5'>{sub}</p>
      </div>
      <ul role='list' className='divide-y divide-gray-100'>
        {lines.map(line => (
          <li key={line.tel}>
            <a
              href={`tel:${line.tel}`}
              className={`flex items-center gap-4 px-5 py-4 transition-colors ${
                line.primary
                  ? 'bg-primary-50 hover:bg-primary-100 active:bg-primary-100'
                  : 'hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${
                  line.primary
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-50 text-primary-600'
                }`}
              >
                <Phone className='w-5 h-5' aria-hidden='true' />
              </span>
              <span className='flex-1 min-w-0'>
                <span className='block text-xl font-bold text-gray-900 tabular-nums leading-tight'>
                  {line.display}
                </span>
                <span className='block text-xs font-semibold uppercase tracking-wider text-gray-500 mt-0.5'>
                  {line.label}
                </span>
              </span>
              <ChevronRight
                className='w-5 h-5 text-gray-300 flex-shrink-0'
                aria-hidden='true'
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DorDeDentesPage() {
  const { language } = useLanguage();
  const isEN = language === 'en';
  const content = getDorDeDentesContent(language);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * REGRA DE CONTEÚDO (pedido da clínica, Nov/2026): esta página não pode
   * falar em "urgências", prometer atendimento imediato / sem marcação, nem
   * dar orientações clínicas. Ver nota em data/dor-de-dentes-data.ts.
   */
  const copy = isEN
    ? {
        seoTitle: 'In a Lot of Pain? Call Us First | Centro Dentário Colombo',
        seoDescription:
          'Toothache in Lisbon? Call Centro Dentário Colombo before you come: we confirm availability and offer you the earliest possible appointment. Colombo Shopping Centre. +351 21 604 13 55.',
        seoKeywords:
          'toothache lisbon, dentist lisbon, dentist open sunday lisbon, dentist colombo, book dentist lisbon',
        eyebrow: 'Toothache',
        h1: 'In a lot of pain? Call us first',
        lead: 'Contact us by phone or WhatsApp before travelling to the clinic. We check the schedule and offer you the earliest possible appointment.',
        notice:
          'Appointments depend on availability — always call before you come.',
        linesTitle: 'Call before you come',
        linesSub: 'If one line is busy, try the next one.',
        landlineLabel: 'Main line',
        mobileLabel: 'Mobile',
        whatsapp: 'WhatsApp us',
        hours: 'Clinic hours: every day, 09:00–23:00',
        hoursSub: 'Appointments subject to availability',
        where: 'Colombo Shopping Centre, Level -1, Unit 507',
        whereSub: 'Av. Lusíada 2, 1500-392 Lisbon',
        booking: 'By appointment',
        bookingSub: 'Confirm by phone before travelling',
        stepsTitle: 'How it works',
        stepsLead:
          'One phone call saves you a wasted trip: you know whether we can see you, and when, before leaving home.',
        locationTitle: 'Getting here',
        locationLead:
          'We are inside the shopping centre, with covered parking and a metro station a few minutes away.',
        directions: 'Open in Google Maps',
        parking: 'Colombo car park, direct access to Level -1',
        metro: 'Colégio Militar/Luz metro, blue line',
        languages: 'We see patients in Portuguese and English',
        faqTitle: 'Frequently asked questions',
        finalTitle: 'In a lot of pain?',
        finalLead:
          'Call us before you come. We will tell you the earliest availability.',
        disclaimer:
          'This website does not provide clinical advice and does not replace an assessment by a dentist. Centro Dentário Colombo is not an emergency service: being seen depends on schedule and dentist availability. If the clinic is closed or has no availability, or in any serious situation, contact SNS 24 (808 24 24 24) or call 112.',
        breadcrumbHome: 'Home',
        breadcrumbCurrent: 'Toothache',
      }
    : {
        seoTitle: 'Está com Muita Dor? Ligue-nos | Centro Dentário Colombo',
        seoDescription:
          'Dor de dentes em Lisboa? Ligue ao Centro Dentário Colombo antes de vir: confirmamos a disponibilidade e indicamos-lhe a consulta mais próxima possível. C.C. Colombo. +351 21 604 13 55.',
        seoKeywords:
          'dor de dentes lisboa, dentista lisboa, dentista aberto ao domingo lisboa, dentista colombo, marcar consulta dentista lisboa',
        eyebrow: 'Dor de dentes',
        h1: 'Está com muita dor? Ligue-nos primeiro',
        lead: 'Fale connosco por telefone ou WhatsApp antes de se deslocar à clínica. Verificamos a agenda e indicamos-lhe a consulta mais próxima possível.',
        notice:
          'Atendimento sujeito a disponibilidade — ligue sempre antes de vir.',
        linesTitle: 'Ligue antes de vir',
        linesSub: 'Se uma linha estiver ocupada, tente a seguinte.',
        landlineLabel: 'Linha principal',
        mobileLabel: 'Telemóvel',
        whatsapp: 'Falar por WhatsApp',
        hours: 'Horário da clínica: todos os dias, 09:00–23:00',
        hoursSub: 'Atendimento sujeito a disponibilidade',
        where: 'C.C. Colombo, Piso -1, Loja 507',
        whereSub: 'Av. Lusíada 2, 1500-392 Lisboa',
        booking: 'Consulta por marcação',
        bookingSub: 'Confirme por telefone antes de se deslocar',
        stepsTitle: 'Como funciona',
        stepsLead:
          'Um telefonema evita-lhe uma deslocação em vão: fica a saber se o podemos receber, e quando, antes de sair de casa.',
        locationTitle: 'Como chegar',
        locationLead:
          'Estamos dentro do centro comercial, com estacionamento coberto e metro a poucos minutos.',
        directions: 'Abrir no Google Maps',
        parking: 'Parque do Colombo, acesso direto ao Piso -1',
        metro: 'Metro Colégio Militar/Luz, linha azul',
        languages: 'Atendemos em português e em inglês',
        faqTitle: 'Perguntas frequentes',
        finalTitle: 'Está com muita dor?',
        finalLead:
          'Ligue-nos antes de vir. Dizemos-lhe qual é a disponibilidade mais próxima.',
        disclaimer:
          'Este website não presta aconselhamento clínico nem substitui a avaliação por um médico dentista. O Centro Dentário Colombo não é um serviço de urgência: o atendimento depende da disponibilidade de agenda e de médico dentista. Se a clínica estiver fechada ou sem disponibilidade, ou em qualquer situação grave, contacte o SNS 24 (808 24 24 24) ou ligue 112.',
        breadcrumbHome: 'Início',
        breadcrumbCurrent: 'Dor de dentes',
      };

  return (
    <div className='min-h-screen bg-white'>
      <SEO
        title={copy.seoTitle}
        titleAsIs
        description={copy.seoDescription}
        keywords={copy.seoKeywords}
        path={PAGE_PATH}
      />

      <ContactPageJsonLd
        name={copy.seoTitle}
        description={copy.seoDescription}
        path={PAGE_PATH}
        language={language}
      />
      <BreadcrumbJsonLd
        items={[
          { name: copy.breadcrumbHome, path: '/' },
          { name: copy.breadcrumbCurrent, path: PAGE_PATH },
        ]}
      />
      <FaqJsonLd items={content.faq} />

      {/* ============ HERO ============ */}
      <header className='relative bg-gradient-to-br from-primary-900 via-primary-600 to-primary-500 pt-28 pb-16 sm:pt-36 sm:pb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Breadcrumb */}
          <nav
            aria-label='Breadcrumb'
            className='text-sm text-primary-200 mb-6 flex items-center gap-2'
          >
            <Link to='/' className='hover:text-white transition-colors'>
              {copy.breadcrumbHome}
            </Link>
            <span aria-hidden='true'>/</span>
            <span className='text-white'>{copy.breadcrumbCurrent}</span>
          </nav>

          <div className='grid lg:grid-cols-12 gap-10 items-start'>
            <div className='lg:col-span-7'>
              <p className='text-primary-200 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3'>
                {copy.eyebrow}
              </p>

              <h1 className='text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.12] tracking-tight font-extrabold text-white mb-5'>
                {copy.h1}
              </h1>

              <p className='text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl mb-8'>
                {copy.lead}
              </p>

              {/* Aviso fixo (sem estado "aberto agora"): o horário de
                  funcionamento não garante disponibilidade de consulta. */}
              <div className='inline-flex items-start gap-2.5 rounded-2xl px-4 py-2.5 mb-7 border bg-white/10 border-white/25 max-w-md'>
                <Info
                  className='w-4 h-4 text-white flex-shrink-0 mt-0.5'
                  aria-hidden='true'
                />
                <span className='text-white text-sm font-semibold leading-snug'>
                  {copy.notice}
                </span>
              </div>

              {/* Painel único com as 4 linhas — o elemento nº1 da página. */}
              <PhoneLinesPanel
                title={copy.linesTitle}
                sub={copy.linesSub}
                landlineLabel={copy.landlineLabel}
                mobileLabel={copy.mobileLabel}
              />

              <div className='mt-4 max-w-md'>
                <a
                  href={isEN ? WHATSAPP_EN : WHATSAPP_PT}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-7 py-4 rounded-full font-bold text-base shadow-cta hover:bg-green-600 transition-all duration-300'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                  </svg>
                  {copy.whatsapp}
                </a>
              </div>
            </div>

            {/* Cartão de factos — o que o utente precisa de saber em 5 segundos */}
            <div className='lg:col-span-5 w-full'>
              <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-5'>
                <FactRow label={copy.hours} sub={copy.hoursSub} icon={Clock} />
                <FactRow label={copy.where} sub={copy.whereSub} icon={MapPin} />
                <FactRow
                  label={copy.booking}
                  sub={copy.bookingSub}
                  icon={BadgeCheck}
                />
                <FactRow label={copy.languages} icon={Languages} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ COMO FUNCIONA ============ */}
      <section className='py-16 sm:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Reveal className='max-w-3xl mb-10'>
            <h2 className='text-heading text-gray-900 mb-4'>
              {copy.stepsTitle}
            </h2>
            <p className='text-gray-600 leading-relaxed'>{copy.stepsLead}</p>
          </Reveal>

          <ol className='relative border-l-2 border-primary-100 ml-4 sm:ml-6 space-y-8'>
            {content.steps.map((step, i) => (
              <Reveal
                as='li'
                key={step.order}
                delay={i * 80}
                className='pl-8 sm:pl-10 relative'
              >
                <span className='absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold ring-4 ring-gray-50'>
                  {step.order}
                </span>
                <h3 className='text-lg font-bold text-gray-900 mb-1.5'>
                  {step.title}
                </h3>
                <p className='text-gray-600 leading-relaxed max-w-2xl'>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>

          {/* Aviso legal: o site não presta aconselhamento clínico.
              NÃO acrescentar aqui orientações do tipo "o que fazer". */}
          <div className='mt-10 flex gap-3 bg-white border border-gray-200 rounded-xl p-5'>
            <Info
              className='w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5'
              aria-hidden='true'
            />
            <p className='text-sm text-gray-700 leading-relaxed'>
              {copy.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ============ LOCALIZAÇÃO ============ */}
      <section className='py-16 sm:py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-10 items-center'>
            <div>
              <h2 className='text-heading text-gray-900 mb-4'>
                {copy.locationTitle}
              </h2>
              <p className='text-gray-600 leading-relaxed mb-7'>
                {copy.locationLead}
              </p>

              <address className='not-italic text-gray-900 font-semibold mb-6 leading-relaxed'>
                {copy.where}
                <br />
                <span className='font-normal text-gray-600'>
                  {copy.whereSub}
                </span>
              </address>

              <ul className='space-y-3 mb-8'>
                <li className='flex items-center gap-3 text-gray-700'>
                  <span className='w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0' />
                  {copy.parking}
                </li>
                <li className='flex items-center gap-3 text-gray-700'>
                  <span className='w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0' />
                  {copy.metro}
                </li>
                <li className='flex items-center gap-3 text-gray-700'>
                  <span className='w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0' />
                  {copy.hours}
                </li>
              </ul>

              <a
                href={MAPS_HREF}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-500 transition-colors'
              >
                {copy.directions}
                <ExternalLink className='w-4 h-4' aria-hidden='true' />
              </a>
            </div>

            <div className='rounded-2xl overflow-hidden border border-gray-200 shadow-card'>
              {/* loading="lazy" para não penalizar o LCP da página */}
              <iframe
                title={
                  isEN
                    ? 'Centro Dentário Colombo location map'
                    : 'Mapa de localização do Centro Dentário Colombo'
                }
                src={`https://www.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&hl=${language}&z=17&output=embed`}
                width='100%'
                height='400'
                style={{ border: 0 }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className='py-16 sm:py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Reveal as='h2' className='text-heading text-gray-900 mb-10'>
            {copy.faqTitle}
          </Reveal>

          <div className='space-y-3'>
            {content.faq.map((item, index) => {
              const expanded = openFaq === index;
              return (
                <div
                  key={index}
                  className='bg-white rounded-xl border border-gray-200 overflow-hidden'
                >
                  <h3>
                    <button
                      type='button'
                      onClick={() => setOpenFaq(expanded ? null : index)}
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${index}`}
                      className='w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-gray-50 transition-colors'
                    >
                      <span className='font-semibold text-gray-900'>
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
                        aria-hidden='true'
                      />
                    </button>
                  </h3>
                  {/*
                    hidden em vez de desmontar: o conteúdo fica no HTML servido,
                    é o que o schema FAQPage declara e o que os crawlers leem.
                  */}
                  <div
                    id={`faq-panel-${index}`}
                    hidden={!expanded}
                    className='px-5 pb-5 text-gray-600 leading-relaxed'
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className='py-16 sm:py-20 bg-primary-600'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-heading text-white mb-4'>{copy.finalTitle}</h2>
          <p className='text-primary-100 leading-relaxed mb-8'>
            {copy.finalLead}
          </p>

          {/* O mesmo painel do hero, no mesmo formato. */}
          <div className='flex justify-center mb-4'>
            <div className='w-full max-w-md text-left'>
              <PhoneLinesPanel
                title={copy.linesTitle}
                sub={copy.linesSub}
                landlineLabel={copy.landlineLabel}
                mobileLabel={copy.mobileLabel}
              />
            </div>
          </div>

          <a
            href={isEN ? WHATSAPP_EN : WHATSAPP_PT}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-cta hover:bg-green-600 transition-colors'
          >
            {copy.whatsapp}
          </a>

          <p className='text-primary-200 text-sm mt-6'>{copy.hours}</p>
        </div>
      </section>
      {/* A barra fixa mobile é agora a MobileCtaBar global (Layout) —
          a versão local desta página foi removida para não duplicar. */}
    </div>
  );
}

// ============================================
// Subcomponente local
// ============================================
function FactRow({
  label,
  sub,
  icon: Icon,
}: {
  label: string;
  sub?: string;
  icon: LucideIcon;
}) {
  return (
    <div className='flex items-start gap-3.5'>
      <Icon
        className='w-5 h-5 text-primary-200 flex-shrink-0 mt-0.5'
        aria-hidden='true'
      />
      <div>
        <p className='text-white font-semibold text-sm leading-snug'>{label}</p>
        {sub && <p className='text-primary-200 text-xs mt-0.5'>{sub}</p>}
      </div>
    </div>
  );
}
