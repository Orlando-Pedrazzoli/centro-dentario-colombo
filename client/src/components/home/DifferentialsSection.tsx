// client/src/components/home/DifferentialsSection.tsx

import {
  CalendarDays,
  Microscope,
  HeartHandshake,
  BadgeCheck,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Reveal from '../ui/Reveal';

const items = [
  {
    icon: CalendarDays,
    titleKey: 'differentials.open7Title',
    descKey: 'differentials.open7Desc',
  },
  {
    icon: Microscope,
    titleKey: 'differentials.modernTitle',
    descKey: 'differentials.modernDesc',
  },
  {
    icon: HeartHandshake,
    titleKey: 'differentials.welcomeTitle',
    descKey: 'differentials.welcomeDesc',
  },
  {
    icon: BadgeCheck,
    titleKey: 'differentials.ersTitle',
    descKey: 'differentials.ersDesc',
  },
];

export default function DifferentialsSection() {
  const { t } = useLanguage();

  return (
    <section className='py-20 md:py-24 px-4 bg-gradient-to-br from-primary-700 to-primary-900 text-white'>
      <div className='max-w-7xl mx-auto'>
        <Reveal className='text-center mb-14 md:mb-16'>
          <h2 className='text-heading mb-4'>
            {t('differentials.sectionTitle')}
          </h2>
          <p className='text-lead text-primary-100 max-w-3xl mx-auto'>
            {t('differentials.sectionDesc')}
          </p>
        </Reveal>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {items.map(({ icon: Icon, titleKey, descKey }, i) => (
            <Reveal
              key={titleKey}
              delay={i * 100}
              className='text-center bg-white/[0.07] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300'
            >
              <div className='w-16 h-16 mx-auto mb-5 bg-white/10 rounded-2xl flex items-center justify-center'>
                <Icon className='w-8 h-8 text-primary-200' aria-hidden='true' />
              </div>
              <h3 className='text-xl font-bold mb-2'>{t(titleKey)}</h3>
              <p className='text-primary-100 text-sm leading-relaxed'>
                {t(descKey)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
