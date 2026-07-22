// client/src/utils/whatsapp.ts

/**
 * Utilitário central para links de WhatsApp.
 *
 * Estratégia de campanhas (Instagram/Facebook Ads):
 * 1. O anúncio aponta para a página do tratamento com UTMs, ex.:
 *    https://www.centrodentariocolombo.com/tratamentos/ortodontia?utm_source=instagram&utm_campaign=invisalign_jul26
 * 2. `captureUtmParams()` guarda a origem em sessionStorage no primeiro load.
 * 3. Qualquer botão de WhatsApp do site gera a mensagem pré-preenchida com:
 *    - o tratamento da página atual (conversão direta, sem fricção)
 *    - a origem do anúncio (atribuição de leads visível para a clínica)
 *
 * Resultado: a rececionista vê no WhatsApp "consulta de Ortodontia — vi no
 * Instagram" e a clínica consegue medir o retorno de cada campanha sem
 * ferramentas adicionais.
 */

export const WHATSAPP_PHONE = '351933522580'; // formato internacional, sem + nem espaços

const UTM_STORAGE_KEY = 'cdc_utm_source';

/** Chamar uma vez no arranque da app (App.tsx). Guarda a origem da visita. */
export function captureUtmParams(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    if (source) {
      sessionStorage.setItem(UTM_STORAGE_KEY, source.toLowerCase());
    }
  } catch {
    // sessionStorage indisponível (modo privado antigo) — ignorar silenciosamente
  }
}

function getStoredUtmSource(): string | null {
  try {
    return sessionStorage.getItem(UTM_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Sufixo de atribuição anexado à mensagem, legível pela rececionista. */
function getSourceSuffix(language: 'pt' | 'en'): string {
  const source = getStoredUtmSource();
  if (!source) return '';

  const labels: Record<string, { pt: string; en: string }> = {
    instagram: { pt: 'Instagram', en: 'Instagram' },
    facebook: { pt: 'Facebook', en: 'Facebook' },
    google: { pt: 'Google', en: 'Google' },
  };

  const label = labels[source]?.[language];
  if (!label) return '';

  return language === 'en'
    ? ` (I saw your ad on ${label}.)`
    : ` (Vi a vossa publicação no ${label}.)`;
}

interface WhatsAppUrlOptions {
  /** Nome do tratamento para pré-preencher a mensagem (ex.: "Ortodontia") */
  treatment?: string;
  language?: 'pt' | 'en';
}

/** Gera o link wa.me com mensagem pré-preenchida. */
export function getWhatsAppUrl(options: WhatsAppUrlOptions = {}): string {
  const { treatment, language = 'pt' } = options;

  let message: string;
  if (treatment) {
    message =
      language === 'en'
        ? `Hello! I would like to book a ${treatment} appointment.`
        : `Olá! Gostaria de marcar uma consulta de ${treatment}.`;
  } else {
    message =
      language === 'en'
        ? 'Hello! I would like to book an appointment.'
        : 'Olá! Gostaria de marcar uma consulta.';
  }

  message += getSourceSuffix(language);

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
