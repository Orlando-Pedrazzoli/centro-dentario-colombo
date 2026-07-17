// client/src/pages/NotFoundPage.tsx

import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Antes: qualquer URL inválido fazia <Navigate to="/" />.
 * Isso é um soft 404 — o Google indexa lixo, dilui o canónico da home e
 * esconde erros de links internos. Agora servimos uma 404 real com noindex.
 */
export default function NotFoundPage() {
  const { language } = useLanguage();
  const isEN = language === 'en';

  const copy = isEN
    ? {
        title: 'Page not found',
        lead: 'The page you are looking for does not exist or has been moved.',
        home: 'Back to home',
        emergency: 'Dental emergency',
        team: 'Clinical team',
        callLead: 'Need help now?',
      }
    : {
        title: 'Página não encontrada',
        lead: 'A página que procura não existe ou foi movida.',
        home: 'Voltar ao início',
        emergency: 'Urgências dentárias',
        team: 'Corpo clínico',
        callLead: 'Precisa de ajuda agora?',
      };

  return (
    <div className='min-h-screen bg-white flex items-center justify-center px-4 pt-24 pb-16'>
      <SEO title={copy.title} path='/404' noindex />

      <div className='text-center max-w-lg'>
        <p className='text-7xl font-bold text-blue-100 mb-4'>404</p>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3'>
          {copy.title}
        </h1>
        <p className='text-gray-600 mb-8'>{copy.lead}</p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center mb-10'>
          <Link
            to='/'
            className='inline-flex items-center justify-center bg-[#14489c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#006bb3] transition-colors'
          >
            {copy.home}
          </Link>
          <Link
            to='/urgencias'
            className='inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors'
          >
            {copy.emergency}
          </Link>
          <Link
            to='/corpo-clinico'
            className='inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors'
          >
            {copy.team}
          </Link>
        </div>

        <p className='text-sm text-gray-500'>
          {copy.callLead}{' '}
          <a
            href='tel:+351216041355'
            className='text-blue-600 font-semibold hover:underline'
          >
            +351 21 604 13 55
          </a>
        </p>
      </div>
    </div>
  );
}
