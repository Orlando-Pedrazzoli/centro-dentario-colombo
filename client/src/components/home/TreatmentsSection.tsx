// client/src/components/home/TreatmentsSection.tsx

import { Link } from 'react-router';
import { ChevronRight, Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTreatments } from '../../data/services-data';
import Reveal from '../ui/Reveal';
import CountUp from '../ui/CountUp';

/**
 * Hierarquia de conteúdo:
 * A grelha anterior tinha 12 cards com o mesmo peso visual.
 * A maioria dos pacientes procura 3-4 coisas — destacamos essas
 * com cards grandes (com imagem) e agrupamos as restantes num
 * grid compacto sem imagem (menos 8 downloads do Unsplash).
 */
const FEATURED_SLUGS = [
  'implantologia',
  'ortodontia',
  'estetica-dentaria',
  'caries',
];

export default function TreatmentsSection() {
  const { t, language } = useLanguage();
  const treatments = getTreatments(language);

  const featured = FEATURED_SLUGS.map(slug =>
    treatments.find(tr => tr.slug === slug),
  ).filter(Boolean) as ReturnType<typeof getTreatments>;

  const others = treatments.filter(tr => !FEATURED_SLUGS.includes(tr.slug));

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <section id='tratamentos' className='py-20 md:py-24 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <Reveal className='text-center mb-14 md:mb-16'>
          <span className='inline-block text-sm font-bold tracking-widest uppercase text-primary-600 mb-3'>
            {t('common.eyebrowTreatments')}
          </span>
          <h2 className='text-heading text-gray-900 mb-4'>
            {t('treatments.sectionTitle')}
          </h2>
          <p className='text-lead text-gray-600 max-w-3xl mx-auto'>
            {t('treatments.sectionDesc')}
          </p>
        </Reveal>

        {/* ============ DESTAQUES (4 cards com imagem) ============ */}
        <Reveal className='mb-10'>
          <h3 className='text-sm font-bold tracking-widest uppercase text-gray-500 mb-5'>
            {t('treatments.featuredLabel')}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {featured.map((treatment, i) => (
              <Reveal key={treatment.id} delay={i * 90}>
                <Link
                  to={`/tratamentos/${treatment.slug}`}
                  onClick={scrollTop}
                  className='block h-full bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group'
                >
                  <div className='h-44 overflow-hidden bg-gradient-to-br from-primary-50 to-white relative'>
                    <img
                      src={treatment.bannerImage}
                      alt={treatment.title}
                      loading='lazy'
                      decoding='async'
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-primary-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>

                  <div className='p-5'>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>
                      {treatment.title}
                    </h3>
                    <p className='text-primary-600 font-semibold text-sm mb-2'>
                      {treatment.subtitle}
                    </p>
                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                      {treatment.description}
                    </p>

                    <div className='inline-flex items-center mt-4 text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition'>
                      {t('treatments.learnMore')}
                      <ChevronRight
                        className='w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ============ RESTANTES (grid compacto, sem imagem) ============ */}
        <Reveal className='mb-16'>
          <h3 className='text-sm font-bold tracking-widest uppercase text-gray-500 mb-5'>
            {t('treatments.othersLabel')}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {others.map((treatment, i) => (
              <Reveal key={treatment.id} delay={(i % 4) * 70}>
                <Link
                  to={`/tratamentos/${treatment.slug}`}
                  onClick={scrollTop}
                  className='flex items-center justify-between gap-3 h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-card hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300 p-4 group'
                >
                  <div className='min-w-0'>
                    <h4 className='font-bold text-gray-900 text-sm md:text-base truncate'>
                      {treatment.title}
                    </h4>
                    <p className='text-xs md:text-sm text-gray-500 truncate'>
                      {treatment.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className='w-4 h-4 flex-shrink-0 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all'
                    aria-hidden='true'
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ============ ESTATÍSTICAS ANIMADAS ============ */}
        <Reveal className='bg-white rounded-2xl shadow-card p-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-2'>
                <CountUp end={16} suffix='+' />
              </div>
              <div className='text-gray-600'>{t('treatments.specialties')}</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-2'>
                <CountUp end={100} suffix='%' />
              </div>
              <div className='text-gray-600'>
                {t('treatments.satisfaction')}
              </div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-2'>
                <CountUp end={7} />
              </div>
              <div className='text-gray-600'>{t('treatments.daysWeek')}</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-extrabold text-primary-600 mb-2'>
                ERS
              </div>
              <div className='text-gray-600'>{t('treatments.certified')}</div>
            </div>
          </div>
        </Reveal>

        {/* ============ CTA ============ */}
        <Reveal className='text-center mt-12'>
          <p className='text-lg text-gray-600 mb-6'>
            {t('treatments.ctaText')}
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <a
              href='#contacto'
              className='bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-500 transition text-lg font-semibold inline-flex items-center gap-2 shadow-cta hover:scale-[1.03] transform duration-300'
            >
              <Calendar className='w-5 h-5' aria-hidden='true' />
              {t('treatments.ctaButton')}
            </a>
            <a
              href='tel:+351216041355'
              className='border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full hover:bg-primary-50 transition text-lg font-semibold inline-flex items-center gap-2'
            >
              <Phone className='w-5 h-5' aria-hidden='true' />
              {t('treatments.ctaCall')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
