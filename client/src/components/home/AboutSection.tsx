// client/src/components/home/AboutSection.tsx

import { Cpu, Users, Clock, Sofa, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Reveal from '../ui/Reveal';

const features = [
  { icon: Cpu, titleKey: 'about.feature1Title', descKey: 'about.feature1Desc' },
  {
    icon: Users,
    titleKey: 'about.feature2Title',
    descKey: 'about.feature2Desc',
  },
  {
    icon: Clock,
    titleKey: 'about.feature3Title',
    descKey: 'about.feature3Desc',
  },
  {
    icon: Sofa,
    titleKey: 'about.feature4Title',
    descKey: 'about.feature4Desc',
  },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id='sobre'
      className='py-20 md:py-24 px-4 bg-gradient-to-br from-primary-50 to-white'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Título da secção */}
        <Reveal className='text-center mb-14 md:mb-16'>
          <span className='inline-block text-sm font-bold tracking-widest uppercase text-primary-600 mb-3'>
            {t('common.eyebrowAbout')}
          </span>
          <h2 className='text-heading text-gray-900 mb-4'>
            {t('about.sectionTitle')}
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
        </Reveal>

        {/* Grid 2 colunas */}
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Coluna Esquerda - Imagem */}
          <Reveal direction='left' className='relative'>
            <div className='rounded-2xl overflow-hidden shadow-card'>
              <img
                src='/sobre-colombo.jpg'
                alt='Equipa Centro Dentário Colombo'
                loading='lazy'
                decoding='async'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Badge decorativo */}
            <div className='absolute -bottom-6 -right-4 sm:-right-6 bg-primary-600 text-white px-6 sm:px-8 py-4 rounded-xl shadow-cta'>
              <p className='text-3xl font-extrabold'>28+</p>
              <p className='text-sm text-primary-100'>{t('about.yearsExp')}</p>
            </div>
          </Reveal>

          {/* Coluna Direita - Conteúdo */}
          <Reveal direction='right' delay={120} className='space-y-6'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {t('about.title')}
              </h3>
              {/* about.description no JSON já não contém HTML nem o nome
                  da clínica — a ênfase é feita aqui no componente */}
              <p className='text-lead text-gray-700'>
                O{' '}
                <span className='font-semibold text-primary-600'>
                  Centro Dentário Colombo
                </span>{' '}
                {t('about.description')}
              </p>
            </div>

            {/* Features em grid */}
            <div className='grid sm:grid-cols-2 gap-4 pt-2'>
              {features.map(({ icon: Icon, titleKey, descKey }, i) => (
                <Reveal
                  key={titleKey}
                  delay={i * 90}
                  className='flex items-start gap-3 bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300'
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center'>
                    <Icon
                      className='w-5 h-5 text-primary-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-900 mb-1'>
                      {t(titleKey)}
                    </h4>
                    <p className='text-sm text-gray-600'>{t(descKey)}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Destaque ERS */}
            <Reveal
              delay={180}
              className='bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-xl shadow-cta mt-6'
            >
              <div className='flex items-start gap-4'>
                <BadgeCheck
                  className='w-8 h-8 flex-shrink-0 mt-1 text-primary-200'
                  aria-hidden='true'
                />
                <div>
                  <h4 className='font-bold text-lg mb-2'>
                    {t('about.ersTitle')}
                  </h4>
                  <p className='text-primary-100'>{t('about.ersDesc')}</p>
                </div>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
