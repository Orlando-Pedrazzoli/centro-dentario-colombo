// client/src/components/SEO.tsx

import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, normalizeUrl } from '../utils/seoConfig';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  /** Usar o título tal e qual, sem acrescentar "| Centro Dentário Colombo" */
  titleAsIs?: boolean;
}

export function SEO({
  title,
  description = SITE_CONFIG.defaultDescription,
  keywords = SITE_CONFIG.defaultKeywords,
  image = SITE_CONFIG.defaultImage,
  path = '',
  type = 'website',
  noindex = false,
  titleAsIs = false,
}: SEOProps) {
  const { language } = useLanguage();

  const fullTitle = !title
    ? SITE_CONFIG.defaultTitle
    : titleAsIs
      ? title
      : `${title} | ${SITE_CONFIG.siteName}`;

  const canonicalUrl = normalizeUrl(path);
  const htmlLang = language === 'en' ? 'en-GB' : 'pt-PT';
  const ogLocale = language === 'en' ? 'en_GB' : SITE_CONFIG.locale;
  const ogLocaleAlt = language === 'en' ? SITE_CONFIG.locale : 'en_GB';

  return (
    <Helmet prioritizeSeoTags>
      <html lang={htmlLang} />

      <title>{fullTitle}</title>

      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={SITE_CONFIG.siteName} />

      <link rel='canonical' href={canonicalUrl} />

      {/*
        O site serve PT e EN no mesmo URL (troca via contexto), por isso o
        canónico é único e declaramos x-default. Se um dia as versões passarem a
        ter URLs próprios (/en/...), acrescente aqui os hreflang correspondentes.
      */}
      <link rel='alternate' hrefLang='x-default' href={canonicalUrl} />
      <link rel='alternate' hrefLang='pt-PT' href={canonicalUrl} />
      <link rel='alternate' hrefLang='en' href={canonicalUrl} />

      {noindex ? (
        <meta name='robots' content='noindex, nofollow' />
      ) : (
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
      )}

      {/* Open Graph */}
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={SITE_CONFIG.siteName} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={fullTitle} />
      <meta property='og:locale' content={ogLocale} />
      <meta property='og:locale:alternate' content={ogLocaleAlt} />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={canonicalUrl} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Geo */}
      <meta name='geo.region' content='PT-11' />
      <meta name='geo.placename' content='Lisboa' />
      <meta
        name='geo.position'
        content={`${SITE_CONFIG.business.geo.latitude};${SITE_CONFIG.business.geo.longitude}`}
      />
      <meta
        name='ICBM'
        content={`${SITE_CONFIG.business.geo.latitude}, ${SITE_CONFIG.business.geo.longitude}`}
      />
    </Helmet>
  );
}

export default SEO;
