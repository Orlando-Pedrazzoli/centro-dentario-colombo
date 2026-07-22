// client/src/utils/seoConfig.ts

/**
 * Fonte única de verdade para SEO, NAP e dados de negócio.
 * NAP (Name / Address / Phone) tem de ser IDÊNTICO aqui, no Google Business
 * Profile, no rodapé e em todos os diretórios. Qualquer divergência dilui o
 * sinal de local SEO.
 */

export const SITE_CONFIG = {
  baseUrl: 'https://www.centrodentariocolombo.com',
  siteName: 'Centro Dentário Colombo',
  legalName: 'D. Amaral Assistência e Prevenção Dentária LDA',
  defaultTitle: 'Centro Dentário Colombo | Dentista no Colombo, Lisboa',
  defaultDescription:
    'Clínica dentária no Centro Comercial Colombo, Lisboa. Aberto todos os dias das 09:00 às 23:00, incluindo fins de semana e feriados. Urgências dentárias, implantologia, ortodontia e estética dentária.',
  defaultKeywords:
    'dentista colombo, clínica dentária lisboa, urgência dentária lisboa, dentista aberto ao domingo lisboa, implantes dentários lisboa, ortodontia lisboa, centro dentário colombo',
  defaultImage: 'https://www.centrodentariocolombo.com/og-image-v2.jpg',
  locale: 'pt_PT',
  localeAlternate: 'en_GB',
  themeColor: '#14489c',

  business: {
    // NAP oficial — confirmado no Google Business Profile
    telephone: '+351216041355',
    telephoneDisplay: '+351 21 604 13 55',
    // Linhas de reforço para urgências — mostradas em /urgencias e
    // publicadas no schema contactPoint. Ordem = ordem de tentativa.
    emergencyLines: ['+351918565118', '+351929138923', '+351933522580'],
    whatsapp: '351933522580',
    whatsappDisplay: '+351 933 522 580',
    email: 'clinicadentaria.colombo@gmail.com',
    address: {
      street: 'Centro Comercial Colombo, Av. Lusíada 2, Piso -1, Loja 507',
      locality: 'Lisboa',
      region: 'Lisboa',
      postalCode: '1500-392',
      country: 'PT',
    },
    geo: {
      latitude: 38.7547929,
      longitude: -9.190261,
    },
    // Aberto todos os dias, 09:00–23:00 (365 dias por ano)
    openingHours: {
      opens: '09:00',
      closes: '23:00',
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ] as const,
    },
    priceRange: '€€',
    vatID: 'PT505887533',
    ersLicense: '3297/2011',
    ersRegistration: 'E115139',
    socialMedia: {
      facebook: 'https://www.facebook.com/centrodentariocolombo',
      instagram: 'https://www.instagram.com/centrodentario_colombo',
      googleMaps: 'https://maps.google.com/?cid=3260960382060429767',
    },
  },
};

/** Constrói um URL absoluto e canónico a partir de um path. */
export function normalizeUrl(path: string): string {
  const base = SITE_CONFIG.baseUrl.replace(/\/+$/, '');
  if (!path || path === '/') {
    return base;
  }
  const cleanPath = path
    .replace(/\/+$/, '')
    .replace(/^\/+/, '')
    .split('#')[0]
    .split('?')[0];
  return `${base}/${cleanPath}`;
}

/**
 * A clínica está aberta agora? Calcula sempre no fuso Europe/Lisbon,
 * independentemente do fuso do dispositivo do visitante.
 */
export function isClinicOpenNow(now: Date = new Date()): boolean {
  const lisbon = new Intl.DateTimeFormat('pt-PT', {
    timeZone: 'Europe/Lisbon',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const [hour, minute] = lisbon.split(':').map(Number);
  const minutesNow = hour * 60 + minute;
  const [oh, om] = SITE_CONFIG.business.openingHours.opens
    .split(':')
    .map(Number);
  const [ch, cm] = SITE_CONFIG.business.openingHours.closes
    .split(':')
    .map(Number);

  return minutesNow >= oh * 60 + om && minutesNow < ch * 60 + cm;
}

// Slugs dos tratamentos (usado no sitemap, prerender e rotas)
export const TREATMENT_SLUGS = [
  'caries',
  'estetica-dentaria',
  'endodontia',
  'implantologia',
  'odontopediatria',
  'ortodontia',
  'periodontologia',
  'proteses-dentarias',
  'higiene-oral',
  'harmonizacao-orofacial',
];

/**
 * Páginas estáticas públicas (sitemap + prerender).
 * A prioridade reflete valor comercial, não hierarquia de menu:
 * /urgencias é a página de maior intenção de conversão do site.
 */
export const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/urgencias', changefreq: 'weekly', priority: '0.9' },
  { path: '/corpo-clinico', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/politica-privacidade', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-cookies', changefreq: 'yearly', priority: '0.3' },
];

// Paths privados (noindex + disallow)
export const PRIVATE_PATHS = ['/admin', '/patient'];
