// 📄 client/src/data/treatments/types.ts
//
// Tipos partilhados pelos dados das especialidades (PT/EN).
// Estrutura alinhada com o conteúdo oficial validado pelo
// corpo clínico do Centro Dentário Colombo (Jul/2026).

export interface TreatmentFaqItem {
  question: string;
  answer: string;
}

/** Item de "Tratamentos Disponíveis" (nome + descrição curta). */
export interface TreatmentServiceItem {
  name: string;
  description: string;
}

/** Passo numerado de "Como funciona o tratamento?". */
export interface TreatmentStep {
  title: string;
  description: string;
}

export interface Treatment {
  id: string;
  /** Nome curto — usado em menus, cards e breadcrumbs. */
  title: string;
  /** Slug da rota /tratamentos/:slug — NÃO alterar (SEO). */
  slug: string;
  /** Subtítulo curto — usado nos cards da homepage. */
  subtitle: string;
  /** Resumo — cards da homepage e meta description. */
  description: string;

  hero: {
    title: string;
    subtitle: string;
    /** Texto do botão principal do hero. */
    cta: string;
  };

  intro: {
    headline: string;
    text: string;
  };

  whatIs: string;

  /** Override do título da secção (ex.: "Quando é recomendada?"). */
  indicationsTitle?: string;
  indications: string[];

  availableTreatments: TreatmentServiceItem[];

  /** Override do título da secção (ex.: "Como funciona a consulta?"). */
  stepsTitle?: string;
  steps: TreatmentStep[];

  /** Secção extra opcional (ex.: "Duração do tratamento" na Ortodontia). */
  extraInfo?: {
    title: string;
    text: string;
  };

  benefits: string[];
  whyChoose: string[];

  /** Frase de fecho antes do CTA final. */
  ctaHeadline: string;

  faq: TreatmentFaqItem[];

  bannerImage: string;
  image1: string;
  image2: string;
  keywords: string[];
}
