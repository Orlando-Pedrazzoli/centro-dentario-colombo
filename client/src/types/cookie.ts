export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  consentDate: string;
  consentVersion: string;
}

export const COOKIE_CONSENT_VERSION = '1.0';
export const COOKIE_STORAGE_KEY = 'cdc_cookie_consent';

export const defaultCookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Cookies Essenciais',
    description: 'Necessários para o funcionamento básico do site. Incluem cookies de sessão, segurança e preferências de consentimento. Não podem ser desativados.',
    required: true,
    enabled: true,
  },
  {
    id: 'analytics',
    name: 'Cookies de Análise',
    description: 'Permitem-nos analisar como os visitantes utilizam o site, ajudando a melhorar a experiência. Recolhem dados anónimos sobre as páginas visitadas e o tempo de navegação.',
    required: false,
    enabled: false,
  },
  {
    id: 'marketing',
    name: 'Cookies de Marketing',
    description: 'Utilizados para apresentar anúncios relevantes com base nos seus interesses. Podem ser partilhados com parceiros de publicidade.',
    required: false,
    enabled: false,
  },
  {
    id: 'preferences',
    name: 'Cookies de Preferências',
    description: 'Guardam as suas preferências de navegação, como idioma e região, para personalizar a sua experiência no site.',
    required: false,
    enabled: false,
  },
];