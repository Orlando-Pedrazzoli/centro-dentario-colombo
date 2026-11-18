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
      className='pt-8 pb-20 md:pt-10 md:pb-24 px-4 bg-gradient-to-br from-primary-50 to-white'
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

        {/* Montra completa em faixa larga — a imagem é panorâmica (16:9),
            por isso fica a toda a largura em vez de recortada numa coluna.
            Foto real do espaço, sem pessoas (a antiga sobre-colombo.jpg era
            de banco de imagens — risco de publicidade enganosa, ERS).
            Substituir por foto real da equipa quando a clínica a enviar. */}
        <Reveal className='relative mb-16 md:mb-20'>
          <div className='rounded-2xl overflow-hidden shadow-card aspect-video md:aspect-[2/1]'>
            <img
              src='/sobre-espaco.jpg'
              alt='Montra do Centro Dentário Colombo no Centro Comercial Colombo'
              width={1600}
              height={900}
              loading='lazy'
              decoding='async'
              className='w-full h-full object-cover object-top'
            />
          </div>
          {/* Badge decorativo */}
          <div className='absolute -bottom-5 sm:-bottom-6 left-3 sm:left-8 bg-primary-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-xl shadow-cta'>
            <p className='text-xl sm:text-3xl font-extrabold leading-tight'>
              28+
            </p>
            <p className='text-xs sm:text-sm text-primary-100'>
              {t('about.yearsExp')}
            </p>
          </div>
        </Reveal>

        {/* Texto + ERS à esquerda, diferenciais à direita */}
        <div className='grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch'>
          <Reveal direction='left' className='lg:col-span-5 space-y-6'>
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

            {/* Destaque ERS */}
            <div className='bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-xl shadow-cta'>
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
            </div>
          </Reveal>

          {/* Features em grid */}
          <Reveal
            direction='right'
            delay={120}
            className='lg:col-span-7 grid sm:grid-cols-2 auto-rows-fr gap-4'
          >
            {features.map(({ icon: Icon, titleKey, descKey }, i) => (
              <Reveal
                key={titleKey}
                delay={i * 90}
                className='flex items-center gap-4 bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 h-full'
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
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {t(descKey)}
                  </p>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
