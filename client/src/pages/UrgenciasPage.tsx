// client/src/pages/UrgenciasPage.tsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import {
  BreadcrumbJsonLd,
  EmergencyServiceJsonLd,
  FaqJsonLd,
} from '../components/JsonLd';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_CONFIG, isClinicOpenNow } from '../utils/seoConfig';
import { getUrgenciasContent, type UrgencyLevel } from '../data/urgencias-data';
import Reveal from '../components/ui/Reveal';
import {
  Phone,
  Clock,
  MapPin,
  BadgeCheck,
  Languages,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  AlertTriangle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

declare global {
  interface Window {
    /** Definida pelo scripts/prerender.cjs enquanto grava o HTML estático. */
    __PRERENDER__?: boolean;
  }
}

const { business } = SITE_CONFIG;

const TEL_HREF = `tel:${business.telephone}`;
const WHATSAPP_PT = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  'Olá, tenho uma urgência dentária. Podem atender-me hoje?',
)}`;
const WHATSAPP_EN = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  'Hello, I have a dental emergency. Can you see me today?',
)}`;
const MAPS_HREF = business.socialMedia.googleMaps;

const LEVEL_STYLES: Record<UrgencyLevel, string> = {
  imediata: 'bg-red-50 text-red-700 border-red-200',
  'mesmo-dia': 'bg-amber-50 text-amber-800 border-amber-200',
  avaliar: 'bg-primary-50 text-primary-700 border-primary-200',
};

export default function UrgenciasPage() {
  const { language } = useLanguage();
  const isEN = language === 'en';
  const content = getUrgenciasContent(language);

  /**
   * null = ainda não sabemos (é o estado do HTML pré-renderizado).
   *
   * Isto é deliberado. O prerender é um Chrome a sério: monta o React e corre
   * os efeitos antes de gravar o HTML. Se o estado fosse calculado aqui — ou
   * mesmo no useEffect sem guarda — o Google indexaria para sempre o
   * "aberto/fechado" que calhou ao build (o Vercel constrói em UTC, muitas
   * vezes de madrugada: sairia "Fechado").
   *
   * Por isso o useEffect abaixo não faz nada quando window.__PRERENDER__ está
   * definida. O crawler fica com o horário, sempre verdadeiro; o utilizador
   * recebe o estado ao vivo na hidratação.
   */
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // O estado "aberto agora" é a informação nº1 para quem tem dor às 22h.
  useEffect(() => {
    // Durante o prerender ficamos em null: o HTML gravado mostra o horário,
    // que é verdade a qualquer hora, em vez de um "Fechado" fossilizado.
    if (window.__PRERENDER__) return;

    setIsOpen(isClinicOpenNow());
    const id = window.setInterval(() => setIsOpen(isClinicOpenNow()), 60000);
    return () => window.clearInterval(id);
  }, []);

  const copy = isEN
    ? {
        seoTitle: 'Emergency Dentist in Lisbon | Open Every Day, 09:00–23:00',
        seoDescription:
          'Dental emergency in Lisbon? We see toothache, abscesses, broken and knocked-out teeth every day from 09:00 to 23:00, including weekends and holidays. Colombo Shopping Centre. Call +351 21 604 13 55.',
        seoKeywords:
          'emergency dentist lisbon, dental emergency lisbon, dentist open sunday lisbon, toothache lisbon, dentist colombo',
        eyebrow: 'Dental emergencies',
        h1: 'Emergency dentist in Lisbon, every day until 23:00',
        lead: 'Toothache, an abscess, a broken tooth or a crown that came off. We triage on arrival and relieve the pain the same day — 365 days a year, inside Colombo Shopping Centre.',
        statusUnknown: 'Open every day, 09:00–23:00',
        openNow: 'Open now — come in or call',
        closedNow: 'Closed right now — we open at 09:00',
        callNow: 'Call +351 21 604 13 55',
        whatsapp: 'WhatsApp us',
        hours: 'Every day, 09:00–23:00',
        hoursSub: 'Weekends and public holidays included',
        where: 'Colombo Shopping Centre, Level -1, Unit 507',
        whereSub: 'Av. Lusíada 2, 1500-392 Lisbon',
        triage: 'Free triage on arrival',
        triageSub: 'Pain and trauma take priority',
        casesTitle: 'Is what you have an emergency?',
        casesLead:
          'Find your situation below. If it is not listed, call us anyway — a two-minute call tells you whether you should come now or wait.',
        whatWeDoLabel: 'What we do',
        readMore: 'More about',
        protocolTitle: 'What happens when you arrive',
        protocolLead:
          'No surprises. This is the exact sequence, and you know the cost before anything starts.',
        firstAidTitle: 'What to do before you get here',
        firstAidLead:
          'These steps do not replace the appointment — they stop the situation getting worse on the way.',
        doLabel: 'Do this',
        dontLabel: 'Avoid this',
        locationTitle: 'Getting here',
        locationLead:
          'We are inside the shopping centre, so you have covered parking at the door and a metro station two minutes away — at 22:00 on a Sunday, that matters.',
        directions: 'Open in Google Maps',
        parking: 'Colombo car park, direct access to Level -1',
        metro: 'Colégio Militar/Luz metro, blue line',
        languages: 'We see patients in Portuguese and English',
        faqTitle: 'Frequently asked questions',
        finalTitle: 'In pain right now?',
        finalLead:
          'Do not wait for Monday. Call us — if we can help you today, we will tell you straight away.',
        disclaimer:
          'Life-threatening situations — severe facial swelling affecting breathing or swallowing, trauma with loss of consciousness, or uncontrolled bleeding — should go to a hospital emergency department or call 112.',
        breadcrumbHome: 'Home',
        breadcrumbEmergency: 'Emergencies',
      }
    : {
        seoTitle:
          'Urgências Dentárias em Lisboa | Aberto Todos os Dias, 09:00–23:00',
        seoDescription:
          'Urgência dentária em Lisboa? Atendemos dor de dentes, abcessos, dentes partidos e traumatismos todos os dias das 09:00 às 23:00, incluindo fins de semana e feriados. C.C. Colombo. Ligue +351 21 604 13 55.',
        seoKeywords:
          'urgência dentária lisboa, dentista urgência lisboa, dentista aberto ao domingo lisboa, dor de dentes lisboa, dentista colombo, urgências dentárias',
        eyebrow: 'Urgências dentárias',
        h1: 'Urgências dentárias em Lisboa, todos os dias até às 23:00',
        lead: 'Dor de dentes, abcesso, dente partido ou coroa que caiu. Fazemos triagem à chegada e tiramos a dor no próprio dia — 365 dias por ano, dentro do Centro Comercial Colombo.',
        statusUnknown: 'Aberto todos os dias, 09:00–23:00',
        openNow: 'Aberto agora — venha ou ligue',
        closedNow: 'Fechado neste momento — abrimos às 09:00',
        callNow: 'Ligar +351 21 604 13 55',
        whatsapp: 'Falar por WhatsApp',
        hours: 'Todos os dias, 09:00–23:00',
        hoursSub: 'Fins de semana e feriados incluídos',
        where: 'C.C. Colombo, Piso -1, Loja 507',
        whereSub: 'Av. Lusíada 2, 1500-392 Lisboa',
        triage: 'Triagem à chegada',
        triageSub: 'Dor e traumatismo têm prioridade',
        casesTitle: 'O que tem é uma urgência?',
        casesLead:
          'Encontre a sua situação abaixo. Se não estiver na lista, ligue à mesma — dois minutos ao telefone dizem-lhe se deve vir agora ou se pode esperar.',
        whatWeDoLabel: 'O que fazemos',
        readMore: 'Saber mais sobre',
        protocolTitle: 'O que acontece quando chega',
        protocolLead:
          'Sem surpresas. Esta é a sequência exata, e sabe o custo antes de começar seja o que for.',
        firstAidTitle: 'O que fazer até chegar cá',
        firstAidLead:
          'Estes passos não substituem a consulta — evitam que a situação piore pelo caminho.',
        doLabel: 'Faça',
        dontLabel: 'Evite',
        locationTitle: 'Como chegar',
        locationLead:
          'Estamos dentro do centro comercial, por isso tem estacionamento coberto à porta e metro a dois minutos — às 22h de um domingo, isso faz diferença.',
        directions: 'Abrir no Google Maps',
        parking: 'Parque do Colombo, acesso direto ao Piso -1',
        metro: 'Metro Colégio Militar/Luz, linha azul',
        languages: 'Atendemos em português e em inglês',
        faqTitle: 'Perguntas frequentes',
        finalTitle: 'Está com dor neste momento?',
        finalLead:
          'Não espere por segunda-feira. Ligue-nos — se pudermos atendê-lo hoje, dizemos-lhe já.',
        disclaimer:
          'Situações com risco de vida — inchaço grave da face que afete a respiração ou a deglutição, traumatismo com perda de consciência, ou hemorragia incontrolável — devem ser encaminhadas para uma urgência hospitalar ou para o 112.',
        breadcrumbHome: 'Início',
        breadcrumbEmergency: 'Urgências',
      };

  return (
    <div className='min-h-screen bg-white'>
      <SEO
        title={copy.seoTitle}
        titleAsIs
        description={copy.seoDescription}
        keywords={copy.seoKeywords}
        path='/urgencias'
      />

      <EmergencyServiceJsonLd
        name={
          isEN
            ? 'Dental emergency service — Centro Dentário Colombo'
            : 'Serviço de urgências dentárias — Centro Dentário Colombo'
        }
        description={copy.seoDescription}
        language={language}
      />
      <BreadcrumbJsonLd
        items={[
          { name: copy.breadcrumbHome, path: '/' },
          { name: copy.breadcrumbEmergency, path: '/urgencias' },
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
            <span className='text-white'>{copy.breadcrumbEmergency}</span>
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

              {/* Estado em tempo real: a pergunta nº1 de quem tem dor */}
              <div
                className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-7 border ${
                  isOpen === true
                    ? 'bg-green-500/15 border-green-400/40'
                    : 'bg-white/10 border-white/25'
                }`}
                role='status'
                aria-live='polite'
              >
                <span className='relative flex h-2.5 w-2.5'>
                  {isOpen === true && (
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isOpen === true ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                  ></span>
                </span>
                <span className='text-white text-sm font-semibold'>
                  {isOpen === null
                    ? copy.statusUnknown
                    : isOpen
                      ? copy.openNow
                      : copy.closedNow}
                </span>
              </div>

              {/* CTAs — telefone acima da dobra, sempre */}
              <div className='flex flex-col sm:flex-row gap-3'>
                <a
                  href={TEL_HREF}
                  className='inline-flex items-center justify-center gap-2.5 bg-white text-primary-600 px-7 py-4 rounded-full font-bold text-base shadow-cta hover:bg-primary-50 hover:scale-[1.02] transition-all duration-300'
                >
                  <Phone className='w-5 h-5' aria-hidden='true' />
                  {copy.callNow}
                </a>

                <a
                  href={isEN ? WHATSAPP_EN : WHATSAPP_PT}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-7 py-4 rounded-full font-bold text-base shadow-cta hover:bg-green-600 transition-all duration-300'
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
                  label={copy.triage}
                  sub={copy.triageSub}
                  icon={BadgeCheck}
                />
                <FactRow label={copy.languages} icon={Languages} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ CASOS / TRIAGEM ============ */}
      <section className='py-16 sm:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Reveal className='max-w-3xl mb-10'>
            <h2 className='text-heading text-gray-900 mb-4'>
              {copy.casesTitle}
            </h2>
            <p className='text-gray-600 leading-relaxed'>{copy.casesLead}</p>
          </Reveal>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {content.cases.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <article className='h-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-card-hover hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300'>
                  <span
                    className={`self-start text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 ${
                      LEVEL_STYLES[c.level]
                    }`}
                  >
                    {content.levelLabels[c.level]}
                  </span>

                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {c.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                    {c.symptom}
                  </p>

                  <div className='mt-auto pt-4 border-t border-gray-100'>
                    <p className='text-[11px] font-bold uppercase tracking-wider text-primary-600 mb-1.5'>
                      {copy.whatWeDoLabel}
                    </p>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                      {c.whatWeDo}
                    </p>

                    {c.relatedSlug && (
                      <Link
                        to={`/tratamentos/${c.relatedSlug}`}
                        className='inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-800 mt-3 transition-colors'
                      >
                        {copy.readMore} {c.title.toLowerCase()}
                        <ChevronRight
                          className='w-3.5 h-3.5'
                          aria-hidden='true'
                        />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROTOCOLO ============ */}
      <section className='py-16 sm:py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Reveal className='max-w-3xl mb-10'>
            <h2 className='text-heading text-gray-900 mb-4'>
              {copy.protocolTitle}
            </h2>
            <p className='text-gray-600 leading-relaxed'>{copy.protocolLead}</p>
          </Reveal>

          <ol className='relative border-l-2 border-primary-100 ml-4 sm:ml-6 space-y-8'>
            {content.protocol.map((step, i) => (
              <Reveal
                as='li'
                key={step.order}
                delay={i * 80}
                className='pl-8 sm:pl-10 relative'
              >
                <span className='absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold ring-4 ring-white'>
                  {step.order}
                </span>
                <div className='flex flex-wrap items-center gap-3 mb-1.5'>
                  <h3 className='text-lg font-bold text-gray-900'>
                    {step.title}
                  </h3>
                  <span className='text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full'>
                    {step.duration}
                  </span>
                </div>
                <p className='text-gray-600 leading-relaxed max-w-2xl'>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ PRIMEIROS SOCORROS ============ */}
      <section className='py-16 sm:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Reveal className='max-w-3xl mb-10'>
            <h2 className='text-heading text-gray-900 mb-4'>
              {copy.firstAidTitle}
            </h2>
            <p className='text-gray-600 leading-relaxed'>{copy.firstAidLead}</p>
          </Reveal>

          <div className='grid lg:grid-cols-3 gap-5'>
            {content.firstAid.map((block, i) => (
              <Reveal key={block.id} delay={i * 90} className='h-full'>
                <div className='h-full bg-white rounded-2xl border border-gray-200 p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-5'>
                    {block.title}
                  </h3>

                  <p className='text-[11px] font-bold uppercase tracking-wider text-green-700 mb-2.5'>
                    {copy.doLabel}
                  </p>
                  <ul className='space-y-2.5 mb-6'>
                    {block.do.map((item, i) => (
                      <li
                        key={i}
                        className='flex gap-2.5 text-sm text-gray-700'
                      >
                        <Check
                          className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5'
                          aria-hidden='true'
                        />
                        <span className='leading-relaxed'>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className='text-[11px] font-bold uppercase tracking-wider text-red-700 mb-2.5'>
                    {copy.dontLabel}
                  </p>
                  <ul className='space-y-2.5'>
                    {block.dont.map((item, i) => (
                      <li
                        key={i}
                        className='flex gap-2.5 text-sm text-gray-700'
                      >
                        <X
                          className='w-4 h-4 text-red-600 flex-shrink-0 mt-0.5'
                          aria-hidden='true'
                        />
                        <span className='leading-relaxed'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Limite de competência — sinal E-E-A-T e responsabilidade clínica */}
          <div className='mt-8 flex gap-3 bg-red-50 border border-red-200 rounded-xl p-5'>
            <AlertTriangle
              className='w-5 h-5 text-red-600 flex-shrink-0 mt-0.5'
              aria-hidden='true'
            />
            <p className='text-sm text-red-900 leading-relaxed'>
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

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <a
              href={TEL_HREF}
              className='inline-flex items-center justify-center gap-2.5 bg-white text-primary-600 px-8 py-4 rounded-full font-bold shadow-cta hover:bg-primary-50 transition-colors'
            >
              {copy.callNow}
            </a>
            <a
              href={isEN ? WHATSAPP_EN : WHATSAPP_PT}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-cta hover:bg-green-600 transition-colors'
            >
              {copy.whatsapp}
            </a>
          </div>

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
