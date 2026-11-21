// client/src/data/dor-de-dentes-data.ts

/**
 * Conteúdo da página /dor-de-dentes ("Está com muita dor?").
 *
 * REGRA DE CONTEÚDO (pedido da clínica, Nov/2026) — não quebrar:
 * - Nunca usar "urgência(s)", "emergência", "venha já", "sem marcação" nem
 *   prometer atendimento imediato ou no próprio dia. A clínica não é um
 *   serviço de urgência: o atendimento depende de agenda e de médico.
 * - Nunca publicar orientações clínicas (o que fazer / o que evitar, triagem
 *   por sintomas, primeiros socorros). Sem diagnóstico presencial, o site só
 *   pode dizer "ligue-nos" e remeter para SNS 24 / 112.
 */

export interface ContactStep {
  order: number;
  title: string;
  description: string;
}

export interface PainFaq {
  question: string;
  answer: string;
}

export interface DorDeDentesContent {
  steps: ContactStep[];
  faq: PainFaq[];
}

// ============================================
// PORTUGUÊS
// ============================================
const contentPT: DorDeDentesContent = {
  steps: [
    {
      order: 1,
      title: 'Ligue ou envie mensagem',
      description:
        'Fale connosco por telefone ou WhatsApp antes de se deslocar à clínica. Diga-nos o que sente e quando lhe dá mais jeito vir.',
    },
    {
      order: 2,
      title: 'Confirmamos a disponibilidade',
      description:
        'A receção verifica a agenda e indica-lhe a consulta mais próxima possível. O atendimento depende sempre da disponibilidade de agenda e de médico dentista.',
    },
    {
      order: 3,
      title: 'Avaliação em consulta',
      description:
        'O diagnóstico e o plano de tratamento são feitos presencialmente pelo médico dentista. O custo é sempre apresentado e aceite por si antes de qualquer tratamento.',
    },
  ],
  faq: [
    {
      question: 'Posso ir à clínica sem marcação?',
      answer:
        'Pedimos que ligue sempre antes de vir, para o +351 21 604 13 55. O atendimento depende da disponibilidade de agenda e de médico dentista no momento, pelo que, sem contacto prévio, não conseguimos garantir que será atendido.',
    },
    {
      question: 'Qual é o horário da clínica?',
      answer:
        'O Centro Dentário Colombo funciona todos os dias, das 09:00 às 23:00, no horário do Centro Comercial Colombo. O horário de funcionamento não garante disponibilidade imediata de consulta — confirme sempre por telefone.',
    },
    {
      question: 'Podem dizer-me pelo telefone ou pelo site o que devo fazer?',
      answer:
        'Não. Não prestamos aconselhamento clínico pelo website nem fazemos diagnósticos à distância: a avaliação é feita em consulta, pelo médico dentista. Para aconselhamento de saúde por telefone existe a linha SNS 24 (808 24 24 24) e, em situações graves, o 112.',
    },
    {
      question: 'Quanto custa a consulta?',
      answer:
        'O valor depende da avaliação e do tratamento que for necessário. É sempre apresentado e aceite por si antes de qualquer intervenção — não iniciamos tratamentos sem apresentar o custo.',
    },
    {
      question: 'Não sou paciente da clínica. Posso marcar consulta?',
      answer:
        'Sim. Recebemos pacientes novos, residentes e visitantes, mediante marcação. Traga um documento de identificação. Também atendemos em inglês.',
    },
    {
      question: 'Onde fica a clínica e onde posso estacionar?',
      answer:
        'Estamos dentro do Centro Comercial Colombo, no Piso -1, Loja 507 (Av. Lusíada 2, 1500-392 Lisboa). Tem o estacionamento coberto do centro comercial e a estação de metro Colégio Militar/Luz (linha azul) fica a poucos minutos a pé.',
    },
  ],
};

// ============================================
// ENGLISH
// ============================================
const contentEN: DorDeDentesContent = {
  steps: [
    {
      order: 1,
      title: 'Call or message us',
      description:
        'Contact us by phone or WhatsApp before travelling to the clinic. Tell us what you are feeling and when it suits you to come.',
    },
    {
      order: 2,
      title: 'We confirm availability',
      description:
        'Reception checks the schedule and offers you the earliest possible appointment. Being seen always depends on schedule and dentist availability.',
    },
    {
      order: 3,
      title: 'Assessment at the appointment',
      description:
        'Diagnosis and treatment planning are done in person by the dentist. The cost is always presented to you and accepted before any treatment.',
    },
  ],
  faq: [
    {
      question: 'Can I come to the clinic without an appointment?',
      answer:
        'Please always call first, on +351 21 604 13 55. Being seen depends on schedule and dentist availability at the time, so without prior contact we cannot guarantee that you will be seen.',
    },
    {
      question: 'What are the clinic opening hours?',
      answer:
        'Centro Dentário Colombo is open every day from 09:00 to 23:00, following Colombo Shopping Centre hours. Opening hours do not guarantee that an appointment is immediately available — always confirm by phone.',
    },
    {
      question: 'Can you tell me by phone or on the website what I should do?',
      answer:
        'No. We do not give clinical advice through the website or diagnose remotely: assessment happens at the appointment, with the dentist. For health advice by phone in Portugal there is the SNS 24 line (808 24 24 24) and, in serious situations, 112.',
    },
    {
      question: 'How much does the appointment cost?',
      answer:
        'It depends on the assessment and on the treatment required. The cost is always presented to you and accepted before any intervention — we never start treatment without presenting the cost.',
    },
    {
      question: 'I am not a patient of the clinic. Can I book?',
      answer:
        'Yes. We welcome new patients, residents and visitors, by appointment. Please bring photo ID. We also speak English.',
    },
    {
      question: 'Where is the clinic and where can I park?',
      answer:
        'We are inside Colombo Shopping Centre, Level -1, Unit 507 (Av. Lusíada 2, 1500-392 Lisbon). The shopping centre has covered parking and Colégio Militar/Luz metro station (blue line) is a few minutes away on foot.',
    },
  ],
};

export function getDorDeDentesContent(
  language: 'pt' | 'en',
): DorDeDentesContent {
  return language === 'en' ? contentEN : contentPT;
}
