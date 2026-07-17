// client/src/components/home/ContactSection.tsx

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Reveal from '../ui/Reveal';

export default function ContactSection() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);

  /**
   * TODO (próximo passo): integrar Resend.
   * O markup já está pronto — labels ligadas por htmlFor/id,
   * name/autoComplete/required para validação nativa e autofill.
   * Basta trocar o corpo deste handler por um POST à API route.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // const formData = new FormData(e.currentTarget);
    // await fetch('/api/contact', { method: 'POST', body: formData });
    setSending(false);
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-shadow';

  return (
    <section id='contacto' className='py-20 md:py-24 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* ============ INFO DE CONTACTO ============ */}
          <Reveal direction='left'>
            <span className='inline-block text-sm font-bold tracking-widest uppercase text-primary-600 mb-3'>
              {t('common.eyebrowContact')}
            </span>
            <h2 className='text-heading text-gray-900 mb-6'>
              {t('contact.sectionTitle')}
            </h2>
            <p className='text-lead text-gray-600 mb-8'>
              {t('contact.sectionDesc')}
            </p>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center'>
                  <MapPin
                    className='w-5 h-5 text-primary-600'
                    aria-hidden='true'
                  />
                </div>
                <div>
                  <div className='font-bold text-gray-900'>
                    {t('contact.address')}
                  </div>
                  <div className='text-gray-600'>
                    {t('contact.addressLine1')}
                  </div>
                  <div className='text-gray-600'>
                    {t('contact.addressLine2')}
                  </div>
                  <div className='text-gray-600'>
                    {t('contact.addressLine3')}
                  </div>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center'>
                  <Phone
                    className='w-5 h-5 text-primary-600'
                    aria-hidden='true'
                  />
                </div>
                <div>
                  <div className='font-bold text-gray-900'>
                    {t('contact.phone')}
                  </div>
                  <a
                    href='tel:+351216041355'
                    className='text-primary-600 hover:underline'
                  >
                    +351 21 604 13 55
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center'>
                  <Mail
                    className='w-5 h-5 text-primary-600'
                    aria-hidden='true'
                  />
                </div>
                <div>
                  <div className='font-bold text-gray-900'>
                    {t('contact.email')}
                  </div>
                  <a
                    href='mailto:clinicadentaria.colombo@gmail.com'
                    className='text-primary-600 hover:underline break-all'
                  >
                    clinicadentaria.colombo@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center'>
                  <Clock
                    className='w-5 h-5 text-primary-600'
                    aria-hidden='true'
                  />
                </div>
                <div>
                  <div className='font-bold text-gray-900'>
                    {t('contact.schedule')}
                  </div>
                  <div className='text-gray-600'>
                    {t('contact.scheduleTime')}
                  </div>
                  <div className='text-green-600 font-semibold mt-1'>
                    {t('contact.scheduleOpen')}
                  </div>
                </div>
              </div>

              <div className='bg-primary-50 border border-primary-100 p-4 rounded-xl mt-6'>
                <div className='flex items-center gap-2 font-bold text-gray-900 mb-2'>
                  <ShieldCheck
                    className='w-4 h-4 text-primary-600'
                    aria-hidden='true'
                  />
                  {t('contact.legalInfo')}
                </div>
                <div className='text-sm text-gray-600 space-y-1'>
                  <div>D. Amaral Assistência e Prevenção Dentária LDA</div>
                  <div>NIPC: 505887533</div>
                  <div>Licença ERS: 3297/2011</div>
                  <div>Nº Registo ERS: E115139</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============ FORMULÁRIO ============ */}
          <Reveal direction='right' delay={120}>
            <div className='bg-white p-8 rounded-2xl shadow-card'>
              <form
                className='space-y-6'
                onSubmit={handleSubmit}
                noValidate={false}
              >
                <div>
                  <label
                    htmlFor='contact-name'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    {t('contact.formName')}
                  </label>
                  <input
                    id='contact-name'
                    name='name'
                    type='text'
                    required
                    autoComplete='name'
                    className={inputClass}
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor='contact-email'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    {t('contact.formEmail')}
                  </label>
                  <input
                    id='contact-email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    className={inputClass}
                    placeholder={t('contact.formEmailPlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor='contact-phone'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    {t('contact.formPhone')}
                  </label>
                  <input
                    id='contact-phone'
                    name='phone'
                    type='tel'
                    autoComplete='tel'
                    className={inputClass}
                    placeholder={t('contact.formPhonePlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor='contact-message'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id='contact-message'
                    name='message'
                    rows={4}
                    required
                    className={inputClass}
                    placeholder={t('contact.formMessagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={sending}
                  className='w-full bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-500 disabled:opacity-60 disabled:cursor-not-allowed transition font-semibold text-lg shadow-cta'
                >
                  {t('contact.formSubmit')}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
