// 📄 client/src/data/services-data.ts
//
// Ponto de entrada dos dados das especialidades.
// O conteúdo vive em ./treatments/ (fonte única, PT/EN) —
// este ficheiro mantém o caminho de import estável para
// Navbar, TreatmentsSection, WhatsAppButton, MobileCtaBar, etc.

import { treatmentsPT } from './treatments/treatments-pt';
import { treatmentsEN } from './treatments/treatments-en';

export type {
  Treatment,
  TreatmentFaqItem,
  TreatmentServiceItem,
  TreatmentStep,
} from './treatments/types';

export { treatmentsPT, treatmentsEN };

/** Devolve as especialidades no idioma ativo. */
export function getTreatments(language: string) {
  return language === 'en' ? treatmentsEN : treatmentsPT;
}
