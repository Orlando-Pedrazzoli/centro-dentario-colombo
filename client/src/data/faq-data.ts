// 📄 client/src/data/faq-data.ts
//
// FAQ oficial (Jul/2026) — derivado diretamente dos dados das
// especialidades (fonte única de verdade em ./treatments/).
// Cada especialidade contribui com as suas 6 perguntas oficiais,
// garantindo consistência entre a página FAQ e as páginas de
// tratamento (que mostram o mesmo FAQ em accordion + JSON-LD).

import { treatmentsPT } from './treatments/treatments-pt';
import { treatmentsEN } from './treatments/treatments-en';
import type { Treatment } from './treatments/types';

// ============================================
// FAQ Data Structure
// ============================================
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

// Ícone por especialidade (id partilhado entre PT e EN)
const CATEGORY_ICONS: Record<string, string> = {
  implantologia: '🦷',
  ortodontia: '😁',
  'estetica-dentaria': '✨',
  dentisteria: '🪥',
  endodontia: '🩺',
  periodontologia: '🌿',
  'protese-protocolo': '🔩',
  'higiene-oral': '🧼',
  odontopediatria: '🧒',
  'harmonizacao-orofacial': '💆',
};

function buildCategories(treatments: Treatment[]): FAQCategory[] {
  return treatments.map(treatment => ({
    id: treatment.id,
    title: treatment.title,
    icon: CATEGORY_ICONS[treatment.id] ?? '🦷',
    items: treatment.faq,
  }));
}

const faqDataPT: FAQCategory[] = buildCategories(treatmentsPT);
const faqDataEN: FAQCategory[] = buildCategories(treatmentsEN);

// ============================================
// Export function to get FAQ data by language
// ============================================
export function getFaqData(language: string): FAQCategory[] {
  return language === 'en' ? faqDataEN : faqDataPT;
}
