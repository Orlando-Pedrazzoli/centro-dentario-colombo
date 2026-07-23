// 📄 client/src/data/treatments/treatments-pt.ts
//
// Conteúdo oficial das especialidades (PT) — validado pelo
// corpo clínico do Centro Dentário Colombo (Jul/2026).
// Fonte: "Conteúdo das Especialidades — Website" + "FAQ Completo".
// ⚠️ Não alterar os slugs — preservam URLs indexados (SEO).

import type { Treatment } from './types';

export const treatmentsPT: Treatment[] = [
  // ============================================
  // 1. IMPLANTOLOGIA
  // ============================================
  {
    id: 'implantologia',
    title: 'Implantologia',
    slug: 'implantologia',
    subtitle: 'Implantes Dentários e Reabilitação Fixa',
    description:
      'Substitua dentes perdidos com soluções fixas, estáveis e personalizadas — implantes dentários com diagnóstico por tomografia (CBCT) e planeamento digital.',
    hero: {
      title: 'Recupere o prazer de sorrir e mastigar naturalmente.',
      subtitle:
        'A Implantologia permite substituir dentes perdidos com soluções fixas, estáveis e personalizadas, devolvendo conforto, funcionalidade e um sorriso natural.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Muito mais do que substituir um dente.',
      text: 'A perda de um ou mais dentes pode afetar muito mais do que a estética. Pode comprometer a mastigação, a fala, a confiança e a qualidade de vida. No Centro Dentário Colombo, cada plano de tratamento é desenvolvido de forma personalizada, com diagnóstico por tomografia computorizada (CBCT) e técnicas modernas de Implantologia, para devolver função, conforto e um resultado harmonioso e natural.',
    },
    whatIs:
      'A Implantologia é a área da Medicina Dentária dedicada à substituição de dentes perdidos através de implantes dentários em titânio, que funcionam como uma nova raiz para suportar coroas, pontes ou próteses fixas. O objetivo não é apenas preencher o espaço deixado pela perda dentária, mas restabelecer a função mastigatória, preservar o osso e devolver um sorriso com aparência natural.',
    indications: [
      'Perdeu um único dente.',
      'Perdeu vários dentes.',
      'Necessita substituir todos os dentes de uma arcada.',
      'Tem dificuldade em utilizar próteses removíveis.',
      'Procura uma solução fixa e duradoura.',
    ],
    availableTreatments: [
      {
        name: 'Implante dentário unitário',
        description:
          'Reposição de um único dente com total integração estética e funcional.',
      },
      {
        name: 'Implantes múltiplos',
        description:
          'Solução para substituir vários dentes perdidos, preservando conforto e estabilidade.',
      },
      {
        name: 'Reabilitação total com prótese protocolo (All-on-4 / All-on-6)',
        description:
          'Tratamento para pacientes com perda total dos dentes, permitindo recuperar uma arcada completa apoiada sobre implantes.',
      },
      {
        name: 'Carga imediata',
        description:
          'Em situações selecionadas, é possível colocar uma prótese provisória no próprio dia da cirurgia.',
      },
      {
        name: 'Enxertos ósseos',
        description:
          'Quando necessário, realizam-se procedimentos para regeneração óssea e criação das condições ideais para a colocação dos implantes.',
      },
    ],
    steps: [
      {
        title: 'Avaliação clínica e diagnóstico digital',
        description:
          'Planeamento personalizado com recurso a tomografia computorizada (CBCT) e exames complementares.',
      },
      {
        title: 'Planeamento do tratamento',
        description: 'Definição da solução mais adequada para cada caso.',
      },
      {
        title: 'Colocação dos implantes',
        description:
          'Procedimento realizado com técnicas modernas e elevado rigor clínico.',
      },
      {
        title: 'Integração óssea',
        description:
          'Período de cicatrização que permite a união do implante ao osso.',
      },
      {
        title: 'Reabilitação definitiva',
        description:
          'Colocação da coroa ou prótese final, cuidadosamente adaptada para um resultado funcional e estético.',
      },
    ],
    benefits: [
      'Recuperação da função mastigatória.',
      'Maior estabilidade e conforto.',
      'Aparência natural.',
      'Preservação da estrutura óssea.',
      'Melhoria da fala.',
      'Mais confiança para sorrir.',
    ],
    whyChoose: [
      'Diagnóstico personalizado com tomografia computorizada (CBCT).',
      'Planeamento digital preciso.',
      'Equipa experiente em reabilitação oral.',
      'Soluções adaptadas a cada paciente.',
      'Acompanhamento em todas as fases do tratamento.',
      'Abertos até às 23h — incluindo atendimento de urgência.',
    ],
    ctaHeadline:
      'Recupere o conforto, a função e a confiança para voltar a sorrir.',
    faq: [
      {
        question: 'A colocação de implantes é dolorosa?',
        answer:
          'O procedimento é realizado sob anestesia local, pelo que durante a cirurgia a sensação mais comum é de pressão, não de dor. Após o procedimento, pode existir algum desconforto nos dias seguintes, facilmente controlável com analgésicos indicados pela nossa equipa.',
      },
      {
        question: 'Quanto tempo dura um implante dentário?',
        answer:
          'Com os cuidados adequados — higiene oral regular e consultas de manutenção — um implante dentário pode durar décadas. A taxa de sucesso a longo prazo é superior a 95%.',
      },
      {
        question: 'Todos os pacientes podem colocar implantes?',
        answer:
          'A grande maioria dos pacientes adultos são candidatos a implantes. A avaliação prévia, que inclui tomografia computorizada (CBCT), permite perceber a quantidade e qualidade óssea disponível. Em alguns casos pode ser necessário um enxerto ósseo antes da colocação do implante.',
      },
      {
        question: 'O que é uma prótese protocolo?',
        answer:
          'A prótese protocolo (All-on-4 ou All-on-6) é uma solução fixa que substitui uma arcada dentária completa apoiada sobre 4 ou 6 implantes. É uma alternativa a próteses removíveis, oferecendo estabilidade, conforto e aparência natural.',
      },
      {
        question: 'É possível colocar dentes fixos no próprio dia?',
        answer:
          'Em casos cuidadosamente selecionados, é possível sair da cirurgia com uma prótese provisória no mesmo dia — o chamado protocolo de carga imediata. A viabilidade desta opção é avaliada caso a caso.',
      },
      {
        question: 'Como devo cuidar dos implantes após o tratamento?',
        answer:
          'O cuidado diário é semelhante ao dos dentes naturais — escovagem regular, fio dentário e consultas periódicas de higiene oral. A manutenção regular é essencial para garantir a longevidade do implante.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: [
      'implantologia',
      'implantes dentários',
      'implante dentário lisboa',
      'all-on-4',
      'all-on-6',
      'carga imediata',
      'enxerto ósseo',
      'tomografia CBCT',
    ],
  },

  // ============================================
  // 2. ORTODONTIA
  // ============================================
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    slug: 'ortodontia',
    subtitle: 'Aparelhos Fixos e Alinhadores Transparentes',
    description:
      'Corrija o alinhamento dos dentes e da mordida com soluções adaptadas a cada paciente — aparelhos fixos, estéticos e alinhadores transparentes.',
    hero: {
      title: 'Um sorriso alinhado começa com um plano personalizado.',
      subtitle:
        'A Ortodontia permite corrigir o alinhamento dos dentes e da mordida através de soluções adaptadas a cada paciente, promovendo não só uma melhoria estética, mas também uma melhor saúde oral e função mastigatória.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Muito mais do que dentes alinhados.',
      text: 'Um sorriso equilibrado vai além da estética. Dentes corretamente alinhados facilitam a higiene oral, contribuem para uma mastigação eficiente e ajudam a preservar a saúde das gengivas e da articulação temporomandibular. No Centro Dentário Colombo, cada tratamento ortodôntico é planeado de forma personalizada, respeitando as necessidades, a idade e os objetivos de cada paciente.',
    },
    whatIs:
      'A Ortodontia é a especialidade da Medicina Dentária dedicada ao diagnóstico, prevenção e correção do posicionamento dos dentes e da mordida. O tratamento procura melhorar a função oral, a estética do sorriso e a estabilidade dos resultados a longo prazo.',
    indications: [
      'Dentes desalinhados.',
      'Espaços entre dentes.',
      'Dentes sobrepostos.',
      'Mordida cruzada, aberta ou profunda.',
      'Problemas de oclusão.',
      'Necessidade de preparar tratamentos estéticos ou reabilitações.',
    ],
    availableTreatments: [
      {
        name: 'Aparelho fixo metálico',
        description:
          'Tratamento eficaz para correções ortodônticas de diferentes níveis de complexidade.',
      },
      {
        name: 'Aparelho fixo estético',
        description:
          'Brackets cerâmicos discretos para um resultado mais harmonioso durante o tratamento.',
      },
      {
        name: 'Alinhadores transparentes',
        description:
          'Solução praticamente invisível, removível e confortável para muitos casos de alinhamento dentário.',
      },
      {
        name: 'Ortodontia infantil',
        description:
          'Acompanhamento do crescimento e desenvolvimento dentário das crianças.',
      },
      {
        name: 'Ortodontia para adultos',
        description:
          'Tratamentos personalizados para quem deseja melhorar o sorriso em qualquer fase da vida.',
      },
      {
        name: 'Contenção pós-tratamento',
        description:
          'Incluída no acompanhamento para garantir a estabilidade dos resultados.',
      },
    ],
    extraInfo: {
      title: 'Duração do tratamento',
      text: 'A duração varia consoante a complexidade de cada caso. Em geral, os tratamentos têm uma duração entre 12 e 24 meses, com consultas periódicas de acompanhamento. O plano detalhado é definido na avaliação inicial.',
    },
    steps: [
      {
        title: 'Avaliação clínica',
        description: 'Análise da mordida, sorriso e estrutura facial.',
      },
      {
        title: 'Exames complementares',
        description:
          'Radiografias, fotografias e digitalização intraoral quando necessário.',
      },
      {
        title: 'Planeamento personalizado',
        description: 'Definição da melhor abordagem para cada caso.',
      },
      {
        title: 'Tratamento ortodôntico',
        description:
          'Acompanhamento periódico para garantir uma evolução segura e previsível.',
      },
      {
        title: 'Contenção',
        description:
          'Após o alinhamento, utilizam-se contenções para manter os resultados obtidos.',
      },
    ],
    benefits: [
      'Sorriso mais harmonioso.',
      'Melhoria da mordida.',
      'Higiene oral facilitada.',
      'Redução do desgaste dentário.',
      'Melhor função mastigatória.',
      'Maior confiança ao sorrir.',
    ],
    whyChoose: [
      'Diagnóstico personalizado.',
      'Diferentes opções de tratamento adaptadas a cada caso.',
      'Acompanhamento contínuo incluindo contenção pós-tratamento.',
      'Soluções para crianças, adolescentes e adultos.',
      'Abertos até às 23h para situações de urgência.',
    ],
    ctaHeadline:
      'Um sorriso alinhado pode transformar muito mais do que a aparência.',
    faq: [
      {
        question: 'Qual a idade ideal para iniciar um tratamento ortodôntico?',
        answer:
          'Não existe uma idade ideal única. Em crianças, a primeira avaliação ortodôntica é recomendada por volta dos 7 anos, para acompanhar o desenvolvimento dentário. Nos adultos, o tratamento é igualmente eficaz e cada vez mais comum.',
      },
      {
        question: 'Os adultos também podem usar aparelho?',
        answer:
          'Sim. A ortodontia para adultos é hoje muito comum e existe uma vasta oferta de soluções discretas, como os alinhadores transparentes e os brackets cerâmicos, que permitem tratar o sorriso sem comprometer a imagem durante o processo.',
      },
      {
        question:
          'Qual a diferença entre aparelho fixo e alinhadores transparentes?',
        answer:
          'O aparelho fixo (metálico ou cerâmico) fica colado aos dentes e atua continuamente, sendo indicado para casos de maior complexidade. Os alinhadores são removíveis, praticamente invisíveis e mais confortáveis, sendo adequados para muitos casos de alinhamento.',
      },
      {
        question: 'Quanto tempo dura um tratamento ortodôntico?',
        answer:
          'A duração varia consoante a complexidade de cada caso. Em geral, os tratamentos têm uma duração entre 12 e 24 meses. O plano detalhado é definido na avaliação inicial.',
      },
      {
        question: 'O tratamento provoca dor?',
        answer:
          'Nos primeiros dias após cada ajuste pode existir alguma sensibilidade ou pressão nos dentes. Este desconforto é passageiro e diminui rapidamente à medida que o tratamento avança.',
      },
      {
        question: 'É necessário utilizar contenção após o tratamento?',
        answer:
          'Sim. Após o alinhamento dos dentes, a contenção é fundamental para manter os resultados. A contenção pode ser fixa (colada na parte interior dos dentes) ou removível, e está incluída no acompanhamento do tratamento.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: [
      'ortodontia',
      'aparelho dentário',
      'alinhadores transparentes',
      'aparelho fixo',
      'brackets cerâmicos',
      'ortodontia infantil',
      'ortodontia adultos',
    ],
  },

  // ============================================
  // 3. ESTÉTICA DENTÁRIA
  // ============================================
  {
    id: 'estetica-dentaria',
    title: 'Estética Dentária',
    slug: 'estetica-dentaria',
    subtitle: 'Facetas, Branqueamento e Sorriso Natural',
    description:
      'Melhore a harmonia do seu sorriso com branqueamento, facetas em cerâmica ou resina e reconstruções estéticas — sempre com resultados naturais.',
    hero: {
      title: 'Valorize o seu sorriso com naturalidade.',
      subtitle:
        'A Estética Dentária combina ciência, técnica e sensibilidade para melhorar a harmonia do sorriso, respeitando as características únicas de cada paciente.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Um sorriso bonito começa pelo equilíbrio.',
      text: 'Cada sorriso é único. Pequenas alterações na forma, cor ou proporção dos dentes podem transformar significativamente a expressão do rosto, preservando sempre a naturalidade. No Centro Dentário Colombo, cada tratamento é cuidadosamente planeado para alcançar resultados elegantes, funcionais e duradouros.',
    },
    whatIs:
      'A Estética Dentária reúne diferentes tratamentos destinados a melhorar a aparência do sorriso sem comprometer a saúde oral. O objetivo é alcançar um resultado harmonioso, respeitando a anatomia, a função e as características individuais de cada paciente.',
    indications: [
      'Alterações na cor dos dentes.',
      'Desgaste dentário.',
      'Pequenas fraturas.',
      'Espaços entre dentes.',
      'Irregularidades de forma ou tamanho.',
      'Insatisfação com o sorriso.',
    ],
    availableTreatments: [
      {
        name: 'Branqueamento Dentário',
        description:
          'Clareamento seguro, supervisionado clinicamente, que respeita a sensibilidade de cada paciente e recupera a luminosidade natural do sorriso.',
      },
      {
        name: 'Facetas em Cerâmica (Porcelana)',
        description:
          'Lâminas estéticas personalizadas em laboratório, com alta durabilidade e aparência idêntica ao esmalte natural.',
      },
      {
        name: 'Facetas em Resina Composta',
        description:
          'Aplicadas diretamente na consulta, são uma opção mais acessível e com resultados imediatos. Em caso de necessidade de reparação, o processo é também mais simples.',
      },
      {
        name: 'Reconstruções Estéticas',
        description: 'Restaurações em resina para devolver estética e função.',
      },
      {
        name: 'Recontorno Dentário',
        description:
          'Pequenos ajustes na anatomia dos dentes para melhorar a harmonia do sorriso.',
      },
      {
        name: 'Reabilitação Estética',
        description:
          'Planeamento global que combina diferentes tratamentos para um sorriso equilibrado.',
      },
    ],
    steps: [
      {
        title: 'Avaliação estética',
        description: 'Compreensão das expectativas e análise do sorriso.',
      },
      {
        title: 'Planeamento personalizado',
        description: 'Definição do tratamento mais indicado.',
      },
      {
        title: 'Execução clínica',
        description:
          'Realização dos procedimentos com materiais de elevada qualidade.',
      },
      {
        title: 'Ajustes finais',
        description: 'Refinamento da forma, cor e integração do resultado.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Monitorização para preservar os resultados ao longo do tempo.',
      },
    ],
    benefits: [
      'Sorriso mais harmonioso.',
      'Aparência natural.',
      'Maior confiança.',
      'Melhoria da proporção dentária.',
      'Resultados personalizados.',
      'Preservação da estrutura dentária sempre que possível.',
    ],
    whyChoose: [
      'Planeamento estético individualizado.',
      'Materiais de elevada qualidade.',
      'Abordagem conservadora.',
      'Integração entre estética e função.',
      'Resultados naturais e personalizados.',
    ],
    ctaHeadline: 'Um sorriso harmonioso pode fazer toda a diferença.',
    faq: [
      {
        question: 'O branqueamento danifica os dentes?',
        answer:
          'Quando realizado com supervisão clínica e com os produtos adequados, o branqueamento dentário é seguro. O processo pode causar alguma sensibilidade temporária, que desaparece após o tratamento. Nunca recomendamos branqueamentos sem avaliação prévia.',
      },
      {
        question: 'Quanto tempo dura o branqueamento?',
        answer:
          'Os resultados do branqueamento variam consoante os hábitos do paciente. Em geral, mantêm-se entre 1 a 3 anos. Pequenos retoques periódicos ajudam a prolongar os resultados.',
      },
      {
        question: 'O que são facetas dentárias?',
        answer:
          'As facetas são lâminas muito finas aplicadas sobre a superfície frontal dos dentes, que corrigem a cor, forma, espaçamento e pequenas imperfeições. Existe uma versão em cerâmica (mais duradoura) e em resina composta (aplicada diretamente na consulta).',
      },
      {
        question: 'Qual a diferença entre facetas em resina e cerâmica?',
        answer:
          'As facetas em cerâmica são fabricadas em laboratório, têm maior durabilidade e resistência à pigmentação, e o resultado estético é muito próximo do esmalte natural. As facetas em resina são aplicadas diretamente pelo dentista, são mais acessíveis e mais fáceis de reparar, mas têm uma durabilidade inferior.',
      },
      {
        question: 'É possível corrigir pequenos espaços entre os dentes?',
        answer:
          'Sim. Pequenos espaços entre os dentes podem ser corrigidos com facetas em resina, reconstruções estéticas ou recontorno dentário, consoante o caso. Em situações mais complexas, a ortodontia pode ser a solução mais adequada.',
      },
      {
        question: 'Os resultados parecem naturais?',
        answer:
          'Sim. O nosso objetivo é sempre alcançar um resultado harmonioso que se integre de forma natural com o rosto e a personalidade de cada paciente. Utilizamos materiais de elevada qualidade e um planeamento cuidadoso para garantir que o resultado final parece sempre natural.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'estética dentária',
      'facetas dentárias',
      'branqueamento dentário',
      'facetas de porcelana',
      'facetas de resina',
      'recontorno dentário',
      'sorriso natural',
    ],
  },

  // ============================================
  // 4. DENTISTERIA
  // ============================================
  {
    id: 'dentisteria',
    title: 'Dentisteria',
    slug: 'caries',
    subtitle: 'Restaurações e Tratamento de Lesões Dentárias',
    description:
      'Prevenção, diagnóstico e restauração de dentes afetados por lesões, fraturas ou desgaste — preservando ao máximo a estrutura natural do dente.',
    hero: {
      title: 'Preservar os seus dentes é sempre a nossa prioridade.',
      subtitle:
        'A Dentisteria dedica-se à prevenção, diagnóstico e restauração de dentes afetados por lesões dentárias, fraturas ou desgaste, devolvendo saúde, função e estética ao sorriso.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Cada dente natural merece ser preservado.',
      text: 'Sempre que possível, o melhor tratamento é manter a estrutura dentária original. Através de técnicas modernas e materiais altamente estéticos, é possível restaurar dentes comprometidos, devolvendo-lhes resistência, funcionalidade e uma aparência natural. No Centro Dentário Colombo, cada restauração é planeada para integrar-se de forma harmoniosa com os restantes dentes.',
    },
    whatIs:
      'A Dentisteria é a área da Medicina Dentária dedicada à prevenção, diagnóstico e tratamento de lesões dentárias, como fraturas e desgaste do esmalte. O principal objetivo é conservar o máximo possível da estrutura natural do dente, restaurando a sua função e estética.',
    indications: [
      'Lesões dentárias.',
      'Dentes partidos ou fraturados.',
      'Desgaste do esmalte.',
      'Restaurações antigas deterioradas.',
      'Alterações na forma dos dentes.',
      'Sensibilidade provocada por perda de estrutura dentária.',
    ],
    availableTreatments: [
      {
        name: 'Tratamento de lesões dentárias',
        description:
          'Remoção da lesão e restauração do dente com materiais estéticos.',
      },
      {
        name: 'Restaurações estéticas em resina composta',
        description:
          'Reconstrução de dentes preservando forma, função e aparência natural.',
      },
      {
        name: 'Reconstruções dentárias',
        description:
          'Recuperação de dentes com perda significativa de estrutura.',
      },
      {
        name: 'Substituição de restaurações antigas',
        description: 'Renovação de restaurações desgastadas ou deterioradas.',
      },
      {
        name: 'Selamento de fissuras',
        description:
          'Proteção preventiva das superfícies dentárias mais vulneráveis em crianças e adultos jovens.',
      },
      {
        name: 'Reabilitação funcional',
        description:
          'Correção de pequenas alterações estruturais para melhorar conforto e mastigação.',
      },
    ],
    steps: [
      {
        title: 'Avaliação clínica',
        description: 'Identificação das alterações dentárias.',
      },
      {
        title: 'Diagnóstico',
        description:
          'Avaliação da extensão da lesão e definição do tratamento.',
      },
      {
        title: 'Tratamento',
        description: 'Remoção da área comprometida e reconstrução do dente.',
      },
      {
        title: 'Ajustes',
        description: 'Controlo da mordida, forma e acabamento estético.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Monitorização periódica para preservar a saúde do dente restaurado.',
      },
    ],
    benefits: [
      'Preservação do dente natural.',
      'Recuperação da função mastigatória.',
      'Melhoria da estética.',
      'Redução da sensibilidade.',
      'Tratamentos minimamente invasivos.',
      'Resultados duradouros.',
    ],
    whyChoose: [
      'Diagnóstico rigoroso.',
      'Abordagem conservadora.',
      'Materiais estéticos de elevada qualidade.',
      'Planeamento personalizado.',
      'Integração entre função e estética.',
    ],
    ctaHeadline:
      'Cuidar hoje dos seus dentes naturais é investir na saúde do seu sorriso para o futuro.',
    faq: [
      {
        question: 'Uma lesão dentária pode ser tratada sem dor?',
        answer:
          'Sim. O tratamento é realizado sob anestesia local, pelo que o procedimento em si é indolor. Pode existir alguma sensibilidade nas horas seguintes, que desaparece rapidamente.',
      },
      {
        question: 'As restaurações ficam visíveis?',
        answer:
          'As restaurações em resina composta são adaptadas à cor natural dos dentes, tornando-se praticamente invisíveis. O objetivo é que a restauração se integre de forma harmoniosa com os restantes dentes.',
      },
      {
        question: 'Quanto tempo dura uma restauração?',
        answer:
          'A durabilidade de uma restauração depende da sua localização, dos hábitos do paciente e dos cuidados de higiene oral. Em média, uma restauração bem executada pode durar entre 5 e 10 anos ou mais.',
      },
      {
        question: 'É possível substituir restaurações antigas?',
        answer:
          'Sim. As restaurações desgastadas, deterioradas ou esteticamente desatualizadas podem ser substituídas por restaurações modernas, mais estéticas e duradouras.',
      },
      {
        question: 'Quando uma restauração deixa de ser suficiente?',
        answer:
          'Quando a perda de estrutura dentária é muito extensa, uma restauração simples pode não ser suficiente. Nestes casos, podem ser indicadas coroas dentárias ou outras soluções de reabilitação mais abrangentes.',
      },
      {
        question: 'Como prevenir novas lesões dentárias?',
        answer:
          'A prevenção passa por uma boa higiene oral diária, consultas regulares de higiene profissional e uma alimentação equilibrada. Em crianças e adultos jovens, o selamento de fissuras é também uma excelente medida preventiva.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'dentisteria',
      'restauração dentária',
      'tratamento de lesões dentárias',
      'dente partido',
      'selamento de fissuras',
      'resina composta',
      'saúde oral',
    ],
  },

  // ============================================
  // 5. ENDODONTIA
  // ============================================
  {
    id: 'endodontia',
    title: 'Endodontia',
    slug: 'endodontia',
    subtitle: 'Tratamento de Canal e Preservação Dentária',
    description:
      'Trate infeções e lesões no interior do dente, eliminando a dor e preservando o dente natural — tratamento de canal com rigor clínico.',
    hero: {
      title: 'Salvar o seu dente é a nossa prioridade.',
      subtitle:
        'A Endodontia permite tratar infeções e lesões no interior do dente, eliminando a dor, preservando a estrutura dentária e devolvendo a sua função.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Nem todos os dentes comprometidos precisam de ser extraídos.',
      text: 'Quando a polpa dentária é afetada por lesões profundas, traumatismos ou infeções, a Endodontia pode permitir preservar o dente natural e evitar a sua perda. O tratamento é realizado sob anestesia local, garantindo o conforto do paciente. No Centro Dentário Colombo, cada caso é tratado com rigor clínico e planeamento individualizado.',
    },
    whatIs:
      'A Endodontia é a especialidade da Medicina Dentária dedicada ao diagnóstico e tratamento das doenças que afetam a polpa dentária e os tecidos que envolvem a raiz do dente. O tratamento endodôntico, conhecido como "tratamento de canal", elimina a infeção, preserva o dente e permite restaurar a sua função.',
    indications: [
      'Dor dentária intensa.',
      'Sensibilidade prolongada ao frio ou ao calor.',
      'Lesões dentárias profundas.',
      'Infeções na raiz do dente.',
      'Traumatismos dentários.',
      'Abcessos.',
      'Alterações observadas em exames radiográficos.',
    ],
    availableTreatments: [
      {
        name: 'Tratamento endodôntico (tratamento de canal)',
        description:
          'Remoção da infeção e preservação do dente natural, realizado sob anestesia local.',
      },
      {
        name: 'Retratamento endodôntico',
        description:
          'Nova intervenção quando um tratamento anterior necessita de ser revisto.',
      },
      {
        name: 'Tratamento de traumatismos dentários',
        description:
          'Abordagem clínica para preservar dentes afetados por acidentes.',
      },
      {
        name: 'Avaliação de lesões periapicais',
        description:
          'Diagnóstico e acompanhamento de alterações na região da raiz.',
      },
    ],
    steps: [
      {
        title: 'Avaliação clínica',
        description: 'Identificação da origem da dor e da extensão da lesão.',
      },
      {
        title: 'Diagnóstico',
        description:
          'Radiografias e exames complementares para planear o tratamento.',
      },
      {
        title: 'Tratamento endodôntico',
        description:
          'Remoção do tecido comprometido, desinfeção dos canais e selagem, sob anestesia local.',
      },
      {
        title: 'Reconstrução do dente',
        description:
          'Após o tratamento, o dente é restaurado para recuperar resistência e função.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Monitorização da cicatrização e da estabilidade do tratamento.',
      },
    ],
    benefits: [
      'Alívio da dor.',
      'Preservação do dente natural.',
      'Eliminação da infeção.',
      'Recuperação da função mastigatória.',
      'Evita extrações quando possível.',
      'Contribui para a saúde oral a longo prazo.',
    ],
    whyChoose: [
      'Diagnóstico preciso.',
      'Planeamento individualizado.',
      'Técnicas modernas de tratamento.',
      'Foco na preservação dentária.',
      'Acompanhamento clínico após o procedimento.',
    ],
    ctaHeadline:
      'Preservar um dente natural é, muitas vezes, a melhor solução.',
    faq: [
      {
        question: 'O tratamento de canal dói?',
        answer:
          'O tratamento é realizado sob anestesia local, pelo que durante o procedimento não deve sentir dor. Após o tratamento, pode existir alguma sensibilidade nos dias seguintes, facilmente controlável com analgésicos.',
      },
      {
        question: 'Quanto tempo demora o tratamento?',
        answer:
          'O tratamento endodôntico pode ser realizado numa ou em várias consultas, dependendo da complexidade do caso. Em muitas situações, é possível concluir o tratamento numa única sessão.',
      },
      {
        question: 'O dente fica mais frágil depois do tratamento?',
        answer:
          'Após o tratamento endodôntico, o dente perde a sua sensibilidade mas mantém a sua estrutura. Para protegê-lo e devolver-lhe resistência, é frequentemente necessário colocar uma coroa dentária, especialmente em dentes posteriores.',
      },
      {
        question: 'É sempre possível salvar um dente?',
        answer:
          'Nem sempre. Em alguns casos, o estado do dente ou do osso de suporte não permite a sua preservação. A avaliação clínica e radiográfica permite determinar se o tratamento endodôntico é viável ou se a extração é a melhor opção.',
      },
      {
        question: 'Quando é necessário repetir um tratamento de canal?',
        answer:
          'Em alguns casos, o tratamento endodôntico pode precisar de ser repetido — por exemplo, quando existe persistência de infeção ou quando canais não foram totalmente tratados na primeira intervenção. O retratamento permite, na maioria dos casos, preservar o dente.',
      },
      {
        question: 'Como devo cuidar do dente após o tratamento?',
        answer:
          'Os cuidados são semelhantes aos dos outros dentes — escovagem regular e fio dentário. Se foi colocada uma coroa, deve evitar morder objetos duros com esse dente. As consultas de acompanhamento são importantes para monitorizar a cicatrização.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: [
      'endodontia',
      'tratamento de canal',
      'desvitalização',
      'dor de dentes',
      'infeção dentária',
      'abcesso dentário',
      'retratamento endodôntico',
    ],
  },

  // ============================================
  // 6. PERIODONTOLOGIA
  // ============================================
  {
    id: 'periodontologia',
    title: 'Periodontologia',
    slug: 'periodontologia',
    subtitle: 'Saúde das Gengivas e Tecidos de Suporte',
    description:
      'Prevenção, diagnóstico e tratamento das doenças das gengivas e dos tecidos que sustentam os dentes — gengivite, periodontite e manutenção periodontal.',
    hero: {
      title: 'Gengivas saudáveis são a base de um sorriso duradouro.',
      subtitle:
        'A Periodontologia dedica-se à prevenção, diagnóstico e tratamento das doenças das gengivas e dos tecidos que sustentam os dentes, ajudando a preservar a saúde oral a longo prazo.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline:
        'A saúde das gengivas é essencial para manter os dentes naturais.',
      text: 'Mesmo dentes saudáveis podem ser comprometidos quando as gengivas e o osso de suporte são afetados por doença periodontal. Existe também evidência científica que relaciona a saúde das gengivas com a saúde geral — incluindo doenças cardiovasculares, diabetes e complicações na gravidez. No Centro Dentário Colombo, o tratamento é personalizado para controlar a inflamação, preservar os tecidos de suporte e contribuir para a estabilidade do sorriso ao longo dos anos.',
    },
    whatIs:
      'A Periodontologia é a especialidade da Medicina Dentária responsável pela prevenção, diagnóstico e tratamento das doenças que afetam as gengivas, o osso e os restantes tecidos que sustentam os dentes. O objetivo é controlar a doença periodontal, preservar os dentes naturais sempre que possível e promover uma saúde oral duradoura.',
    indications: [
      'Sangramento das gengivas.',
      'Gengivas inchadas ou avermelhadas.',
      'Mau hálito persistente.',
      'Recessão gengival.',
      'Mobilidade dentária.',
      'Sensibilidade na raiz dos dentes.',
      'Diagnóstico de gengivite ou periodontite.',
    ],
    availableTreatments: [
      {
        name: 'Avaliação Periodontal',
        description:
          'Diagnóstico completo da saúde gengival e dos tecidos de suporte.',
      },
      {
        name: 'Tratamento da Gengivite',
        description:
          'Controlo da inflamação e prevenção da evolução da doença.',
      },
      {
        name: 'Tratamento da Periodontite',
        description:
          'Redução da infeção e estabilização dos tecidos periodontais.',
      },
      {
        name: 'Raspagem e Alisamento Radicular',
        description:
          'Remoção do biofilme e do cálculo abaixo da linha da gengiva.',
      },
      {
        name: 'Cirurgia Periodontal',
        description:
          'Para casos mais avançados que requerem intervenção cirúrgica.',
      },
      {
        name: 'Manutenção Periodontal',
        description:
          'Consultas periódicas para acompanhar a evolução e prevenir recidivas.',
      },
    ],
    steps: [
      {
        title: 'Avaliação Clínica',
        description: 'Exame detalhado das gengivas e dos tecidos de suporte.',
      },
      {
        title: 'Diagnóstico',
        description:
          'Identificação do grau da doença periodontal e elaboração do plano de tratamento.',
      },
      {
        title: 'Tratamento',
        description: 'Remoção da infeção e controlo da inflamação.',
      },
      {
        title: 'Reavaliação',
        description: 'Monitorização da resposta ao tratamento.',
      },
      {
        title: 'Manutenção',
        description:
          'Consultas periódicas para preservar os resultados obtidos.',
      },
    ],
    benefits: [
      'Preservação dos dentes naturais.',
      'Controlo da inflamação gengival.',
      'Redução do sangramento.',
      'Melhoria do hálito.',
      'Estabilidade dos tecidos de suporte.',
      'Promoção da saúde oral a longo prazo.',
    ],
    whyChoose: [
      'Diagnóstico periodontal rigoroso.',
      'Tratamentos personalizados.',
      'Abordagem preventiva e conservadora.',
      'Acompanhamento contínuo.',
      'Integração com as restantes especialidades para um plano de tratamento completo.',
    ],
    ctaHeadline:
      'Cuidar das suas gengivas é proteger o seu sorriso para o futuro.',
    faq: [
      {
        question: 'Porque sangram as minhas gengivas?',
        answer:
          'O sangramento das gengivas é um dos sinais mais comuns de inflamação gengival (gengivite). Pode ser causado por acumulação de placa bacteriana, escovagem inadequada ou outros fatores. É importante não ignorar este sinal e procurar avaliação clínica.',
      },
      {
        question: 'A gengivite tem cura?',
        answer:
          'Sim. A gengivite é reversível com tratamento adequado e melhoria dos hábitos de higiene oral. Quando não tratada, pode evoluir para periodontite, uma condição mais grave que requer acompanhamento contínuo.',
      },
      {
        question: 'O que acontece se a periodontite não for tratada?',
        answer:
          'A periodontite não tratada pode levar à destruição progressiva do osso e dos tecidos de suporte dos dentes, resultando em mobilidade dentária e, em casos avançados, perda dos dentes.',
      },
      {
        question: 'A doença periodontal pode causar perda de dentes?',
        answer:
          'Sim. A periodontite grave é uma das principais causas de perda dentária em adultos. Por isso, o diagnóstico e tratamento precoces são fundamentais para preservar os dentes naturais.',
      },
      {
        question: 'Com que frequência devo fazer manutenção periodontal?',
        answer:
          'A frequência das consultas de manutenção é definida individualmente, consoante a gravidade da doença e a resposta ao tratamento. Em geral, recomendamos consultas a cada 3 a 6 meses para pacientes com histórico de doença periodontal.',
      },
      {
        question: 'A doença periodontal pode voltar?',
        answer:
          'A periodontite requer acompanhamento contínuo. Com tratamento adequado e manutenção regular, é possível controlá-la de forma eficaz e preservar os dentes ao longo dos anos. Por isso, as consultas de manutenção são essenciais.',
      },
    ],
    bannerImage:
      'https://d2k1crfmot9vtj.cloudfront.net/media/ae42b22c5fe2137f34c929204328b4ef_TZjkGkL.jpg',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    keywords: [
      'periodontologia',
      'gengivite',
      'periodontite',
      'sangramento gengival',
      'raspagem radicular',
      'doença periodontal',
      'saúde das gengivas',
    ],
  },

  // ============================================
  // 7. PRÓTESE PROTOCOLO (ALL-ON-4 / ALL-ON-6)
  // ============================================
  {
    id: 'protese-protocolo',
    title: 'Prótese Protocolo',
    slug: 'proteses-dentarias',
    subtitle: 'All-on-4 / All-on-6 — Reabilitação Total Fixa',
    description:
      'Solução fixa para quem perdeu todos ou a maioria dos dentes — reabilite uma arcada completa sobre implantes, com estabilidade e aparência natural.',
    hero: {
      title: 'Recupere um sorriso completo — fixo, estável e natural.',
      subtitle:
        'A Prótese Protocolo (All-on-4 / All-on-6) é a solução fixa para quem perdeu todos ou a maioria dos dentes, permitindo reabilitar uma arcada completa sobre implantes dentários, com estabilidade, conforto e aparência natural.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline: 'Uma segunda oportunidade para sorrir com confiança.',
      text: 'Quando a perda dentária é extensa ou total, a Prótese Protocolo oferece uma solução fixa e definitiva — apoiada sobre implantes dentários — que devolve função mastigatória, estética e qualidade de vida. Sem próteses removíveis. Sem inseguranças. Com o sorriso que merece.',
    },
    whatIs:
      'A Prótese Protocolo é uma reabilitação oral completa, fixada sobre 4 ou 6 implantes dentários (All-on-4 ou All-on-6), que substitui uma arcada dentária inteira de forma fixa e permanente. É uma solução para quem tem perda total ou muito extensa dos dentes e procura conforto, estabilidade e aparência natural.',
    indications: [
      'Perdeu todos ou a maioria dos dentes.',
      'Tem uma dentição muito comprometida que não justifica a manutenção dos dentes restantes.',
      'Utiliza prótese removível e procura uma solução fixa.',
      'Pretende reabilitar uma arcada completa de forma estável e duradoura.',
    ],
    availableTreatments: [
      {
        name: 'Prótese Protocolo All-on-4',
        description:
          'Arcada completa apoiada sobre 4 implantes estrategicamente posicionados.',
      },
      {
        name: 'Prótese Protocolo All-on-6',
        description:
          'Maior distribuição de força com 6 implantes, indicada para casos específicos.',
      },
      {
        name: 'Próteses Fixas sobre Implantes',
        description:
          'Para reabilitações parciais ou totais com implantes individuais.',
      },
      {
        name: 'Coroas Dentárias',
        description:
          'Cobertura individual para dentes fragilizados ou tratados.',
      },
      {
        name: 'Pontes Dentárias',
        description:
          'Substituição de um ou mais dentes apoiada nos dentes adjacentes.',
      },
      {
        name: 'Próteses Removíveis',
        description: 'Opção quando os implantes não são viáveis.',
      },
      {
        name: 'Reabilitação Oral Completa',
        description: 'Planeamento global para casos complexos.',
      },
    ],
    steps: [
      {
        title: 'Avaliação clínica e diagnóstico por tomografia (CBCT)',
        description:
          'Análise detalhada do osso disponível e planeamento digital.',
      },
      {
        title: 'Plano de tratamento personalizado',
        description:
          'Definição do número de implantes e tipo de prótese mais adequados.',
      },
      {
        title: 'Colocação dos implantes',
        description:
          'Intervenção cirúrgica com técnicas modernas e rigor clínico.',
      },
      {
        title: 'Prótese provisória',
        description:
          'Em muitos casos é possível sair da cirurgia com dentes provisórios no mesmo dia.',
      },
      {
        title: 'Prótese definitiva',
        description:
          'Colocação da prótese final, adaptada para um resultado funcional e estético.',
      },
    ],
    benefits: [
      'Solução fixa e permanente.',
      'Aparência e função semelhantes a dentes naturais.',
      'Sem necessidade de remover a prótese.',
      'Preservação do osso maxilar.',
      'Melhoria da mastigação, fala e confiança.',
      'Resultados duradouros com os cuidados adequados.',
    ],
    whyChoose: [
      'Diagnóstico por tomografia computorizada (CBCT).',
      'Planeamento digital preciso.',
      'Equipa experiente em reabilitação oral completa.',
      'Soluções adaptadas a cada paciente.',
      'Acompanhamento em todas as fases do tratamento.',
      'Abertos até às 23h — incluindo atendimento de urgência.',
    ],
    ctaHeadline:
      'Um sorriso completo e fixo pode mudar muito mais do que aparenta.',
    faq: [
      {
        question: 'Quem é candidato à Prótese Protocolo?',
        answer:
          'Pacientes com perda total ou muito extensa dos dentes, ou com uma dentição muito comprometida que não justifica a manutenção dos dentes restantes. A avaliação por tomografia (CBCT) permite determinar a viabilidade do tratamento.',
      },
      {
        question: 'Qual a diferença entre All-on-4 e All-on-6?',
        answer:
          'O All-on-4 utiliza 4 implantes estrategicamente posicionados para suportar uma arcada completa. O All-on-6 utiliza 6 implantes, oferecendo maior distribuição de forças, sendo indicado para casos específicos. A escolha é feita após avaliação clínica detalhada.',
      },
      {
        question: 'É possível sair da cirurgia com dentes?',
        answer:
          'Em muitos casos sim. O protocolo de carga imediata permite colocar uma prótese provisória no mesmo dia da cirurgia, permitindo ao paciente sair da clínica com um sorriso funcional. A prótese definitiva é colocada numa fase posterior.',
      },
      {
        question: 'Quanto tempo dura o tratamento completo?',
        answer:
          'O processo completo, desde a colocação dos implantes até à prótese definitiva, dura geralmente entre 3 a 6 meses, dependendo de cada caso. Em situações de carga imediata, o paciente fica com dentes provisórios durante este período.',
      },
      {
        question: 'Como se cuida de uma Prótese Protocolo?',
        answer:
          'A higiene é fundamental. Recomendamos escovagem regular, uso de fio dentário específico ou escovas interdentais, e consultas de manutenção periódicas. A prótese é fixa — não precisa de ser removida para limpeza.',
      },
      {
        question: 'A Prótese Protocolo é uma solução definitiva?',
        answer:
          'Sim. Com os cuidados adequados e acompanhamento regular, a Prótese Protocolo é uma solução de longa duração. Os implantes têm uma taxa de sucesso superior a 95% a longo prazo.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'prótese protocolo',
      'all-on-4',
      'all-on-6',
      'prótese fixa sobre implantes',
      'reabilitação oral completa',
      'coroas dentárias',
      'pontes dentárias',
    ],
  },

  // ============================================
  // 8. HIGIENE ORAL
  // ============================================
  {
    id: 'higiene-oral',
    title: 'Higiene Oral',
    slug: 'higiene-oral',
    subtitle: 'Destartarização, Profilaxia e Prevenção',
    description:
      'Previna doenças das gengivas e lesões dentárias com consultas de higiene oral personalizadas — destartarização, profilaxia e orientação.',
    hero: {
      title: 'Um sorriso saudável começa pela prevenção.',
      subtitle:
        'A Higiene Oral é essencial para prevenir doenças das gengivas, reduzir o risco de lesões dentárias e manter a saúde do seu sorriso ao longo da vida.',
      cta: 'Marque a sua consulta de Higiene Oral',
    },
    intro: {
      headline:
        'A prevenção é uma das formas mais eficazes de preservar a saúde oral.',
      text: 'Mesmo com uma boa escovagem diária, a placa bacteriana e o tártaro podem acumular-se em zonas de difícil acesso, aumentando o risco de gengivite e doença periodontal. Recomendamos consultas de Higiene Oral a cada 6 meses. No Centro Dentário Colombo, as consultas são personalizadas para remover estes depósitos, avaliar a saúde da boca e orientar cada paciente sobre os melhores cuidados diários.',
    },
    whatIs:
      'A Higiene Oral é uma área da Medicina Dentária dedicada à prevenção das doenças orais e à manutenção da saúde dos dentes e das gengivas. Durante a consulta são removidos o tártaro e a placa bacteriana, é avaliado o estado da cavidade oral e são dadas recomendações personalizadas para melhorar os hábitos de higiene.',
    indicationsTitle: 'Quando é recomendada?',
    indications: [
      'Remover placa bacteriana e tártaro.',
      'Prevenir lesões dentárias e doenças gengivais.',
      'Melhorar o hálito.',
      'Acompanhar pacientes com implantes ou próteses.',
      'Manter os resultados de tratamentos ortodônticos.',
      'Realizar um acompanhamento preventivo periódico.',
    ],
    availableTreatments: [
      {
        name: 'Destartarização',
        description:
          'Remoção do tártaro acumulado acima e abaixo da linha da gengiva.',
      },
      {
        name: 'Profilaxia Dentária',
        description:
          'Limpeza profissional para remover placa bacteriana e pigmentações.',
      },
      {
        name: 'Polimento Dentário',
        description:
          'Acabamento que deixa a superfície dos dentes mais lisa e dificulta a acumulação de placa.',
      },
      {
        name: 'Educação para a Higiene Oral',
        description:
          'Orientação personalizada sobre escovagem, fio dentário e outros cuidados diários.',
      },
    ],
    stepsTitle: 'Como funciona a consulta?',
    steps: [
      {
        title: 'Avaliação Clínica',
        description:
          'Análise da saúde oral e identificação de necessidades específicas.',
      },
      {
        title: 'Remoção do Tártaro',
        description: 'Destartarização e eliminação da placa bacteriana.',
      },
      {
        title: 'Profilaxia',
        description: 'Limpeza profissional e polimento dos dentes.',
      },
      {
        title: 'Orientação Personalizada',
        description: 'Recomendações para manter uma boa higiene oral em casa.',
      },
      {
        title: 'Plano de Manutenção',
        description:
          'Definição da periodicidade ideal das consultas preventivas.',
      },
    ],
    benefits: [
      'Prevenção de lesões dentárias.',
      'Redução do risco de gengivite e periodontite.',
      'Hálito mais fresco.',
      'Dentes mais limpos.',
      'Maior durabilidade dos tratamentos dentários.',
      'Promoção da saúde oral a longo prazo.',
    ],
    whyChoose: [
      'Abordagem preventiva e personalizada.',
      'Avaliação completa da saúde oral.',
      'Orientação adaptada a cada paciente.',
      'Integração com todas as especialidades da clínica.',
      'Acompanhamento regular para manter resultados duradouros.',
    ],
    ctaHeadline:
      'A prevenção é o melhor investimento para manter um sorriso saudável.',
    faq: [
      {
        question: 'Com que frequência devo fazer uma consulta de Higiene Oral?',
        answer:
          'Recomendamos consultas de higiene oral a cada 6 meses para a maioria dos pacientes. Em casos de maior risco (pacientes com doença periodontal, implantes ou aparelho ortodôntico), a frequência pode ser maior.',
      },
      {
        question: 'A destartarização danifica os dentes?',
        answer:
          'Não. A destartarização é um procedimento seguro que remove o tártaro sem danificar o esmalte. Realizada por um profissional, é indolor e essencial para manter a saúde das gengivas.',
      },
      {
        question: 'A consulta ajuda a prevenir lesões dentárias?',
        answer:
          'Sim. A remoção regular de placa bacteriana e tártaro reduz significativamente o risco de lesões dentárias e doenças gengivais. A consulta de higiene oral é também uma oportunidade para detetar precocemente alterações na saúde oral.',
      },
      {
        question: 'Quem usa implantes também deve fazer Higiene Oral?',
        answer:
          'Sim, e é especialmente importante. Os implantes dentários requerem cuidados de higiene rigorosos para prevenir a peri-implantite, uma infeção que pode comprometer a estabilidade do implante.',
      },
      {
        question: 'A limpeza elimina manchas nos dentes?',
        answer:
          'O polimento dentário pode remover algumas pigmentações superficiais causadas por café, chá, vinho ou tabaco. Para manchas mais profundas ou alterações de cor intrínsecas, pode ser recomendado um branqueamento dentário.',
      },
      {
        question: 'Como posso melhorar a minha higiene oral em casa?',
        answer:
          'Recomendamos escovagem durante 2 minutos, pelo menos 2 vezes por dia (especialmente antes de dormir), utilização de fio dentário diariamente, e água após as refeições. Na consulta de higiene oral, a nossa equipa dá orientações personalizadas para cada caso.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'higiene oral',
      'destartarização',
      'limpeza dentária',
      'profilaxia dentária',
      'remoção de tártaro',
      'polimento dentário',
      'prevenção dentária',
    ],
  },

  // ============================================
  // 9. ODONTOPEDIATRIA
  // ============================================
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    slug: 'odontopediatria',
    subtitle: 'Saúde Oral de Bebés, Crianças e Adolescentes',
    description:
      'Acompanhamos o desenvolvimento da saúde oral infantil com prevenção, diagnóstico precoce e tratamentos adaptados a cada fase do crescimento.',
    hero: {
      title:
        'Cuidamos do sorriso das crianças desde os primeiros anos de vida.',
      subtitle:
        'A Odontopediatria acompanha o desenvolvimento da saúde oral infantil, promovendo prevenção, diagnóstico precoce e tratamentos adaptados a cada fase do crescimento.',
      cta: 'Marque a avaliação do seu filho',
    },
    intro: {
      headline:
        'A infância é a melhor fase para construir hábitos que acompanham a criança por toda a vida.',
      text: 'Recomendamos a primeira consulta logo que apareçam os primeiros dentes — geralmente a partir dos 12 meses. As consultas de Odontopediatria ajudam a prevenir problemas, acompanhar o crescimento dos dentes e tornar a visita ao dentista uma experiência tranquila e positiva. No Centro Dentário Colombo, cada criança é recebida com atenção, paciência e uma abordagem adaptada à sua idade e às suas necessidades.',
    },
    whatIs:
      'A Odontopediatria é a área da Medicina Dentária dedicada à prevenção, diagnóstico e tratamento da saúde oral de bebés, crianças e adolescentes. Além de tratar problemas dentários, acompanha o desenvolvimento da dentição e orienta os pais sobre os cuidados mais adequados em cada etapa do crescimento.',
    indicationsTitle: 'Quando é recomendada?',
    indications: [
      'Primeira consulta odontológica (a partir dos 12 meses).',
      'Prevenção de lesões dentárias.',
      'Tratamento de lesões em dentes de leite e permanentes.',
      'Acompanhamento do crescimento dos dentes.',
      'Avaliação da necessidade de aparelhos ortodônticos.',
      'Traumatismos dentários.',
      'Educação para uma boa higiene oral.',
    ],
    availableTreatments: [
      {
        name: 'Consulta de Prevenção',
        description:
          'Avaliação da saúde oral e acompanhamento do desenvolvimento da dentição.',
      },
      {
        name: 'Tratamento de Lesões Dentárias',
        description:
          'Tratamentos conservadores para preservar a saúde dos dentes.',
      },
      {
        name: 'Aplicação de Selantes',
        description:
          'Proteção das superfícies dentárias mais suscetíveis ao aparecimento de lesões.',
      },
      {
        name: 'Aplicação de Flúor',
        description:
          'Reforço da proteção do esmalte dentário, de acordo com a avaliação clínica.',
      },
      {
        name: 'Aparelhos Ortodônticos Infantis',
        description:
          'Avaliação e acompanhamento precoce para orientar o correto desenvolvimento da mordida e dos maxilares.',
      },
    ],
    stepsTitle: 'Como funciona a consulta?',
    steps: [
      {
        title: 'Avaliação Inicial',
        description: 'Observação da dentição, gengivas e desenvolvimento oral.',
      },
      {
        title: 'Diagnóstico',
        description:
          'Identificação de necessidades preventivas ou tratamentos.',
      },
      {
        title: 'Plano Personalizado',
        description:
          'Definição dos cuidados mais adequados para a idade da criança.',
      },
      {
        title: 'Tratamento',
        description:
          'Sempre realizado de forma gradual, respeitando o conforto da criança.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Consultas periódicas para acompanhar o crescimento e prevenir futuros problemas.',
      },
    ],
    benefits: [
      'Prevenção de lesões dentárias.',
      'Desenvolvimento saudável da dentição.',
      'Acompanhamento do crescimento oral.',
      'Diminuição do medo do dentista.',
      'Educação para bons hábitos de higiene oral.',
      'Diagnóstico precoce de alterações.',
    ],
    whyChoose: [
      'Equipa experiente no atendimento infantil.',
      'Ambiente acolhedor e tranquilo.',
      'Abordagem adaptada à idade da criança.',
      'Foco na prevenção e no acompanhamento contínuo.',
      'Integração com Ortodontia para um desenvolvimento saudável da dentição.',
    ],
    ctaHeadline: 'Um sorriso saudável começa na infância.',
    faq: [
      {
        question:
          'Quando devo levar o meu filho ao dentista pela primeira vez?',
        answer:
          'Recomendamos a primeira consulta logo que apareçam os primeiros dentes — geralmente por volta dos 12 meses. Esta visita precoce permite acompanhar o desenvolvimento dentário e criar uma relação positiva da criança com o dentista.',
      },
      {
        question: 'Os dentes de leite precisam de ser tratados?',
        answer:
          'Sim. Os dentes de leite são fundamentais para a mastigação, a fala e o desenvolvimento correto da arcada dentária. Lesões não tratadas podem afetar os dentes permanentes e causar dor e infeções.',
      },
      {
        question: 'Como prevenir lesões dentárias nas crianças?',
        answer:
          'A prevenção passa por uma boa higiene oral desde os primeiros dentes, uma alimentação equilibrada com baixo consumo de açúcar, aplicação de flúor e selantes, e consultas regulares de odontopediatria.',
      },
      {
        question: 'Quando é necessária uma avaliação ortodôntica?',
        answer:
          'A primeira avaliação ortodôntica é recomendada por volta dos 7 anos, quando já é possível identificar alterações no desenvolvimento da mordida e intervir precocemente se necessário.',
      },
      {
        question: 'Quantas vezes por ano a criança deve ir ao dentista?',
        answer:
          'Recomendamos consultas a cada 6 meses. Em crianças com maior risco de lesões dentárias, a frequência pode ser maior.',
      },
      {
        question: 'O que fazer em caso de traumatismo dentário?',
        answer:
          'Em caso de queda ou batida com envolvimento de dentes, deve contactar-nos o mais rapidamente possível. Se o dente permanente sair da boca, guarde-o em leite ou soro fisiológico e venha de imediato à clínica — em muitos casos é possível reimplantá-lo.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: [
      'odontopediatria',
      'dentista infantil',
      'dentista para crianças',
      'dentes de leite',
      'selantes',
      'flúor',
      'primeira consulta dentista',
    ],
  },

  // ============================================
  // 10. HARMONIZAÇÃO OROFACIAL
  // ============================================
  {
    id: 'harmonizacao-orofacial',
    title: 'Harmonização Orofacial',
    slug: 'harmonizacao-orofacial',
    subtitle: 'Toxina Botulínica, Ácido Hialurónico e Bioestimuladores',
    description:
      'Procedimentos minimamente invasivos que valorizam os traços do rosto, respeitando a sua anatomia — resultados elegantes e naturais.',
    hero: {
      title: 'Realce a sua beleza com equilíbrio e naturalidade.',
      subtitle:
        'A Harmonização Orofacial reúne procedimentos minimamente invasivos que valorizam os traços do rosto, respeitando a sua anatomia e proporcionando resultados elegantes e naturais.',
      cta: 'Marque a sua avaliação',
    },
    intro: {
      headline:
        'Cada rosto possui características únicas que merecem ser valorizadas, nunca transformadas.',
      text: 'Na consulta de Harmonização Orofacial, realizamos uma avaliação individualizada para compreender as suas necessidades e definir um plano de tratamento personalizado, sempre com foco na harmonia facial, na naturalidade e no bem-estar.',
    },
    whatIs:
      'A Harmonização Orofacial é uma área da Medicina Dentária que combina conhecimento da anatomia facial com técnicas estéticas minimamente invasivas para melhorar o equilíbrio do rosto. Os tratamentos são personalizados e têm como objetivo suavizar sinais de envelhecimento, restaurar volumes e realçar a beleza natural de forma discreta e segura.',
    indications: [
      'Suavizar rugas e linhas de expressão.',
      'Restaurar o volume facial.',
      'Definir o contorno do rosto.',
      'Melhorar a harmonia do perfil facial.',
      'Atenuar sinais de envelhecimento.',
      'Valorizar os lábios de forma natural.',
      'Tratamento do bruxismo com toxina botulínica.',
    ],
    availableTreatments: [
      {
        name: 'Toxina Botulínica (Botox®)',
        description:
          'Suaviza rugas dinâmicas e linhas de expressão, proporcionando um aspeto mais descansado e natural. Indicada também para o tratamento do bruxismo.',
      },
      {
        name: 'Preenchimento com Ácido Hialurónico',
        description:
          'Restaura volume e melhora o contorno facial, respeitando as proporções individuais.',
      },
      {
        name: 'Harmonização Labial',
        description:
          'Realça o formato e o volume dos lábios com equilíbrio e naturalidade.',
      },
      {
        name: 'Bioestimuladores de Colagénio',
        description:
          'Estimula a produção natural de colagénio, contribuindo para uma pele mais firme e com melhor qualidade.',
      },
    ],
    steps: [
      {
        title: 'Avaliação Facial',
        description:
          'Análise da anatomia, proporções e expectativas do paciente.',
      },
      {
        title: 'Planeamento Personalizado',
        description:
          'Definição dos procedimentos mais indicados para alcançar um resultado harmonioso.',
      },
      {
        title: 'Tratamento',
        description:
          'Realização dos procedimentos com técnicas minimamente invasivas e foco no conforto.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Avaliação da evolução e orientação sobre os cuidados após o procedimento.',
      },
    ],
    benefits: [
      'Resultados naturais e personalizados.',
      'Valorização dos traços faciais.',
      'Procedimentos minimamente invasivos.',
      'Recuperação rápida.',
      'Melhoria da autoestima.',
      'Planeamento individualizado.',
    ],
    whyChoose: [
      'Avaliação personalizada.',
      'Respeito pela anatomia e identidade de cada paciente.',
      'Técnicas modernas e seguras.',
      'Foco na naturalidade dos resultados.',
      'Acompanhamento antes e após o tratamento.',
    ],
    ctaHeadline: 'A verdadeira harmonia está em valorizar quem você já é.',
    faq: [
      {
        question: 'A Harmonização Orofacial altera a expressão do rosto?',
        answer:
          'Quando realizada por profissionais com formação específica, a Harmonização Orofacial respeita a anatomia e as proporções do rosto, melhorando o equilíbrio sem alterar a expressão natural. O objetivo é sempre um resultado harmonioso e discreto.',
      },
      {
        question: 'Quanto tempo duram os resultados?',
        answer:
          'A duração varia consoante o procedimento. A toxina botulínica tem efeito entre 4 a 6 meses. O ácido hialurónico dura geralmente entre 12 a 18 meses. Os bioestimuladores de colagénio têm efeitos progressivos que podem durar 2 anos ou mais.',
      },
      {
        question: 'Os procedimentos são dolorosos?',
        answer:
          'Os procedimentos são minimamente invasivos e realizados com produtos anestésicos tópicos ou locais. O desconforto é geralmente muito reduzido e passageiro.',
      },
      {
        question: 'Quanto tempo demora a recuperação?',
        answer:
          'A recuperação é rápida. Na maioria dos casos, é possível retomar a atividade normal no próprio dia. Pode existir alguma vermelhidão ou ligeiro inchaço nos dias seguintes, que desaparece rapidamente.',
      },
      {
        question: 'Posso combinar diferentes tratamentos?',
        answer:
          'Sim. Em muitos casos, a combinação de diferentes procedimentos permite obter um resultado mais harmonioso e natural. O plano de tratamento é sempre definido após avaliação individualizada.',
      },
      {
        question: 'Como saber qual o tratamento mais indicado para mim?',
        answer:
          'A primeira consulta de avaliação é fundamental. Durante esta consulta, analisamos a anatomia facial, as suas expectativas e o resultado que pretende alcançar, e definimos juntos o plano mais adequado ao seu caso.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'harmonização orofacial',
      'toxina botulínica',
      'botox',
      'ácido hialurónico',
      'preenchimento labial',
      'bioestimuladores de colagénio',
      'bruxismo',
    ],
  },
];
