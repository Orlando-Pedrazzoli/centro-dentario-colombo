// client/src/components/JsonLd.tsx

import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG, normalizeUrl } from '../utils/seoConfig';

const { business } = SITE_CONFIG;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.street,
  addressLocality: business.address.locality,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.country,
};

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: business.geo.latitude,
  longitude: business.geo.longitude,
};

// Aberto todos os dias, 09:00–23:00 — tem de bater certo com o
// Google Business Profile e com o rodapé, ou o sinal perde-se.
const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...business.openingHours.days],
    opens: business.openingHours.opens,
    closes: business.openingHours.closes,
  },
];

/**
 * Entidade principal da clínica. Usar apenas na home, para não fragmentar a
 * entidade em várias páginas. Nas restantes páginas usa-se @id como referência.
 */
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${normalizeUrl('')}/#clinica`,
    name: SITE_CONFIG.siteName,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.defaultDescription,
    url: normalizeUrl(''),
    logo: normalizeUrl('/logo-colombo.svg'),
    image: SITE_CONFIG.defaultImage,
    telephone: business.telephone,
    email: business.email,
    vatID: business.vatID,
    address: postalAddress,
    geo: geoCoordinates,
    hasMap: business.socialMedia.googleMaps,
    openingHoursSpecification,
    priceRange: business.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Dinheiro, Multibanco, MB Way, Cartão de Crédito',
    availableLanguage: ['pt', 'en'],
    isAcceptingNewPatients: true,
    areaServed: [
      { '@type': 'City', name: 'Lisboa' },
      { '@type': 'City', name: 'Odivelas' },
      { '@type': 'City', name: 'Amadora' },
      { '@type': 'City', name: 'Loures' },
    ],
    sameAs: [
      business.socialMedia.facebook,
      business.socialMedia.instagram,
      business.socialMedia.googleMaps,
    ],
    medicalSpecialty: [
      'Implantology',
      'Orthodontics',
      'CosmeticDentistry',
      'Periodontic',
      'Endodontic',
      'PediatricDentistry',
      'OralSurgery',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Urgência dentária',
        url: normalizeUrl('/urgencias'),
      },
    ],
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${normalizeUrl('')}/#website`,
    name: SITE_CONFIG.siteName,
    url: normalizeUrl(''),
    inLanguage: ['pt-PT', 'en'],
    publisher: { '@id': `${normalizeUrl('')}/#clinica` },
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.path),
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface TreatmentJsonLdProps {
  name: string;
  description: string;
  path: string;
  image?: string;
}

export function TreatmentJsonLd({
  name,
  description,
  path,
  image,
}: TreatmentJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: normalizeUrl(path),
    image: image || SITE_CONFIG.defaultImage,
    provider: {
      '@type': 'Dentist',
      '@id': `${normalizeUrl('')}/#clinica`,
      name: SITE_CONFIG.siteName,
      url: normalizeUrl(''),
    },
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/**
 * Schema da página de urgências.
 * EmergencyService + MedicalWebPage é o par que o Google associa a intenção
 * "dentista de urgência aberto agora".
 */
interface EmergencyServiceJsonLdProps {
  name: string;
  description: string;
  path?: string;
  language?: 'pt' | 'en';
}

export function EmergencyServiceJsonLd({
  name,
  description,
  path = '/urgencias',
  language = 'pt',
}: EmergencyServiceJsonLdProps) {
  const url = normalizeUrl(path);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EmergencyService',
        '@id': `${url}#servico-urgencia`,
        name,
        description,
        url,
        telephone: business.telephone,
        // Todas as linhas de urgência — a principal primeiro, depois as
        // de reforço. O Google pode apresentar qualquer uma como contacto.
        contactPoint: [business.telephone, ...business.emergencyLines].map(
          phone => ({
            '@type': 'ContactPoint',
            telephone: phone,
            contactType: 'emergency',
            availableLanguage: ['pt', 'en'],
          }),
        ),
        email: business.email,
        address: postalAddress,
        geo: geoCoordinates,
        hasMap: business.socialMedia.googleMaps,
        openingHoursSpecification,
        areaServed: [
          { '@type': 'City', name: 'Lisboa' },
          { '@type': 'City', name: 'Odivelas' },
          { '@type': 'City', name: 'Amadora' },
          { '@type': 'City', name: 'Loures' },
        ],
        parentOrganization: { '@id': `${normalizeUrl('')}/#clinica` },
        potentialAction: {
          '@type': 'ReserveAction',
          target: `tel:${business.telephone}`,
          name: language === 'en' ? 'Call the clinic' : 'Ligar para a clínica',
        },
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#pagina`,
        url,
        name,
        description,
        inLanguage: language === 'en' ? 'en' : 'pt-PT',
        about: {
          '@type': 'MedicalCondition',
          name: language === 'en' ? 'Dental emergency' : 'Urgência dentária',
        },
        audience: { '@type': 'Patient' },
        isPartOf: { '@id': `${normalizeUrl('')}/#website` },
        lastReviewed: new Date().toISOString().split('T')[0],
        specialty: 'Dentistry',
      },
    ],
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQPage. Nota: desde 2023 o Google só mostra rich results de FAQ para sites
 * governamentais e de saúde reconhecidos, mas o schema continua a ajudar na
 * compreensão da página e nas AI Overviews. Só usar quando as perguntas estão
 * mesmo visíveis na página.
 */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ============================================
// Corpo Clínico — schema Person por médico
// ============================================

interface DoctorSchemaItem {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  photo: string;
  languages?: string[];
}

/**
 * ItemList de Person para a página /corpo-clinico.
 * Cada médico vira uma entidade Person ligada à clínica via @id —
 * alimenta pesquisas por nome ("Dra. X dentista lisboa") e reforça
 * o E-E-A-T da página. Com o prerender, fica no HTML estático.
 */
export function DoctorsJsonLd({ doctors }: { doctors: DoctorSchemaItem[] }) {
  const base = normalizeUrl('');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${base}/corpo-clinico#equipa`,
    name: 'Corpo Clínico — Centro Dentário Colombo',
    itemListElement: doctors.map((doctor, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        '@id': `${base}/corpo-clinico#${doctor.id}`,
        name: `${doctor.title} ${doctor.name}`,
        jobTitle: doctor.specialties.join(', '),
        image: `${base}${doctor.photo}`,
        worksFor: { '@id': `${base}/#clinica` },
        ...(doctor.languages?.length
          ? { knowsLanguage: doctor.languages }
          : {}),
      },
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
