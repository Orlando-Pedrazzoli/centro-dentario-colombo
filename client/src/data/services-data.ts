// client/src/data/services-data.ts

export interface Treatment {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  fullContent: {
    whatIs: string;
    advantages: string[];
    additionalInfo?: string;
  };
  bannerImage: string;
  image1: string;
  image2: string;
  keywords: string[];
}

// ============================================
// Portuguese Treatments Data
// Lista oficial de especialidades validada pelo
// corpo clínico (Jul/2026) — 10 áreas.
// ============================================
const treatmentsPT: Treatment[] = [
  {
    id: '1',
    title: 'Dentisteria',
    slug: 'caries',
    subtitle: 'Tratamento de Cáries e Restaurações',
    description:
      'Recupere a saúde dos seus dentes afetados por cáries ou traumatismos através de tratamentos modernos e eficazes.',
    fullContent: {
      whatIs:
        'A Dentisteria é frequentemente a primeira área da Medicina Dentária com a qual os pacientes têm contacto, estando associada ao conhecido "Check-up Dentário". Esta especialidade dedica-se ao tratamento de lesões dentárias causadas por cáries ou traumatismos, restaurando a aparência natural, textura e função dos dentes. Quando os dentes são afetados, a Dentisteria permite recuperar as funções estéticas, anatómicas e mastigatórias, devolvendo ao paciente conforto, bem-estar e autoconfiança. O tratamento imediato é fundamental para evitar que lesões pequenas evoluam para problemas mais graves que possam requerer intervenções mais complexas.',
      advantages: [
        'Evita a destruição progressiva da estrutura dentária e a possível perda total do dente',
        'Intervenção precoce resulta em restaurações menores e menos invasivas',
        'Preserva ao máximo a estrutura natural do dente e a sua função mastigatória',
        'Restaura a estética do sorriso e a autoconfiança do paciente',
        'Melhora o hálito e a saúde oral geral',
        'Previne complicações que poderiam necessitar de tratamentos mais complexos',
      ],
      additionalInfo:
        'Quando uma lesão se torna muito extensa, pode ser necessária a intervenção de outras especialidades como Endodontia, Próteses Dentárias ou Implantologia para garantir o melhor resultado.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'dentisteria',
      'cáries',
      'tratamento de cáries',
      'restauração dentária',
      'obturação',
      'check-up dentário',
      'saúde oral',
    ],
  },
  {
    id: '2',
    title: 'Estética Dentária',
    slug: 'estetica-dentaria',
    subtitle: 'Facetas, Branqueamento e Sorriso Natural',
    description:
      'Transforme o seu sorriso com facetas dentárias, branqueamento profissional e outros tratamentos estéticos que devolvem beleza, naturalidade e confiança.',
    fullContent: {
      whatIs:
        'A Estética Dentária é a especialidade que transforma sorrisos através de diversos tratamentos cosméticos avançados, com destaque para as facetas dentárias e o branqueamento profissional. Utilizando técnicas e materiais de última geração, conseguimos realizar alterações subtis mas impactantes nos dentes, corrigindo imperfeições e criando sorrisos harmoniosos e naturais. Esta área atua na correção de dentes fraturados, lesionados por cárie, manchados ou descoloridos, no fechamento de espaços entre dentes (diastemas), e na realização de branqueamentos dentários seguros e supervisionados. Cada tratamento é cuidadosamente planeado para respeitar as características faciais únicas de cada paciente, garantindo resultados que parecem completamente naturais e que contribuem significativamente para a melhoria da autoestima.',
      advantages: [
        'Facetas dentárias em cerâmica ou resina composta para um sorriso harmonioso',
        'Branqueamento dentário profissional, seguro e supervisionado',
        'Correção de dentes fraturados, lascados ou desgastados',
        'Tratamento de dentes manchados ou descoloridos',
        'Fechamento de espaços inestéticos entre dentes (diastemas)',
        'Melhoria da forma, tamanho e proporção dos dentes',
        'Resultados naturais que respeitam a harmonia facial',
        'Tratamentos minimamente invasivos com materiais de excelência',
      ],
    },
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
      'facetas',
      'sorriso perfeito',
      'cosmética dentária',
    ],
  },
  {
    id: '3',
    title: 'Endodontia',
    slug: 'endodontia',
    subtitle: 'Desvitalização e Preservação',
    description:
      'Tratamento de canal radicular (desvitalização) - a solução conservadora para salvar dentes severamente afetados.',
    fullContent: {
      whatIs:
        'A Endodontia, popularmente conhecida como "desvitalização" ou "tratamento de canal", é a especialidade que preserva dentes que de outra forma teriam que ser extraídos. Este tratamento conservador visa salvar dentes severamente cariados, infetados ou traumatizados, tratando a polpa dentária (parte interna do dente que contém nervos e vasos sanguíneos). O procedimento consiste na limpeza cuidadosa do espaço da polpa, preparação dos canais radiculares e preenchimento com material biocompatível que sela os canais e impede a entrada de bactérias. Após a desvitalização, o dente deve ser restaurado com uma coroa ou outra restauração adequada para recuperar sua função e protegê-lo de futuras fraturas.',
      advantages: [
        'Preserva o dente natural evitando a extração',
        'Última alternativa para salvar dentes severamente comprometidos',
        'Elimina a dor causada por infeções dentárias',
        'Mantém a estrutura dentária para reabilitação posterior',
        'Previne a propagação de infeções para outros dentes',
        'Impede nova entrada de bactérias nos canais tratados',
        'Mantém o espaço natural na arcada dentária',
        'Solução mais económica que a extração e substituição do dente',
      ],
      additionalInfo:
        'Após o tratamento endodôntico, é fundamental restaurar o dente com uma coroa ou reconstrução adequada para garantir sua longevidade e função.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: [
      'endodontia',
      'desvitalização',
      'tratamento de canal',
      'dor de dente',
      'infeção dentária',
    ],
  },
  {
    id: '4',
    title: 'Implantologia',
    slug: 'implantologia',
    subtitle: 'Dentes Fixos para Sempre',
    description:
      'Restabeleça o seu sorriso com dentes fixos usando tecnologia de implantes avançada. Possibilidade de dentes no próprio dia!',
    fullContent: {
      whatIs:
        'A Implantologia representa a solução mais moderna e eficaz para substituição de dentes perdidos, sendo a reabilitação oral que mais se aproxima da dentição natural em termos de funcionalidade, estética e conforto. Os implantes dentários são pequenos parafusos de titânio (material biocompatível) que funcionam como raízes artificiais, sendo colocados cirurgicamente no osso do maxilar. Após a integração com o osso (osseointegração), os implantes servem de suporte para coroas de cerâmica que reproduzem perfeitamente os dentes naturais. O resultado final é tão natural que se torna praticamente impossível distinguir o dente implantado de um dente natural. Os implantes podem ser utilizados para substituir um único dente, vários dentes (pontes sobre implantes) ou até mesmo todos os dentes (próteses totais sobre implantes).',
      advantages: [
        'Solução mais próxima dos dentes naturais',
        'Excelente conforto e estabilidade',
        'Maior longevidade comparado a outras soluções',
        'Preserva o osso maxilar prevenindo reabsorção',
        'Não compromete dentes adjacentes saudáveis',
        'Restauração completa da capacidade mastigatória',
        'Recuperação total da estética facial e do sorriso',
        'Melhoria da fonética e autoestima',
        'Possibilidade de dentes no próprio dia em casos selecionados',
      ],
      additionalInfo:
        'No Centro Dentário Colombo, utilizamos tecnologia de ponta que permite, em casos selecionados, a colocação de dentes no mesmo dia da cirurgia de implantes!',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: [
      'implantes dentários',
      'implantologia',
      'dentes fixos',
      'osseointegração',
      'reabilitação oral',
    ],
  },
  {
    id: '5',
    title: 'Odontopediatria',
    slug: 'odontopediatria',
    subtitle: 'Dentista para Crianças e Bebés',
    description:
      'Cuidado especializado e preventivo para a saúde oral de bebés, crianças e adolescentes: tratamento de cáries e aparelhos num ambiente acolhedor.',
    fullContent: {
      whatIs:
        'A Odontopediatria é a especialidade da Medicina Dentária dedicada exclusivamente ao cuidado da saúde oral de bebés, crianças e adolescentes, desde o nascimento até à adolescência. O primeiro contacto com o dentista pediátrico deve acontecer ainda no primeiro ano de vida da criança, estabelecendo desde cedo uma relação positiva com a Medicina Dentária. Durante as consultas, avaliamos o estado de saúde oral, monitorizamos a erupção dentária (nascimento dos dentes), realizamos tratamentos preventivos como aplicação de flúor e selantes, tratamos cáries quando necessário e acompanhamos a necessidade de aparelhos ortodônticos. Um aspeto fundamental da Odontopediatria é a educação - ensinamos às crianças e aos pais técnicas corretas de escovagem, uso do fio dentário e a importância de uma alimentação saudável para a saúde oral.',
      advantages: [
        'Prevenção eficaz do aparecimento de cáries',
        'Tratamento de cáries adaptado a crianças',
        'Criação de hábitos saudáveis de higiene oral',
        'Estabelecimento de relação positiva com o dentista',
        'Eliminação do medo do dentista',
        'Acompanhamento do desenvolvimento dentário',
        'Deteção precoce de problemas ortodônticos e indicação de aparelhos',
        'Aplicação de tratamentos preventivos (flúor, selantes)',
        'Garantia de saúde oral duradoura',
      ],
      additionalInfo:
        'Criamos um ambiente lúdico e acolhedor onde as crianças se sentem seguras e confortáveis, tornando as visitas ao dentista uma experiência positiva.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: [
      'odontopediatria',
      'dentista para crianças',
      'dentista infantil',
      'saúde oral infantil',
      'aparelho dentário criança',
      'selantes',
      'flúor',
    ],
  },
  {
    id: '6',
    title: 'Ortodontia',
    slug: 'ortodontia',
    subtitle: 'Invisalign, Aparelhos Autoligáveis e Convencionais',
    description:
      'Corrija o posicionamento dos seus dentes com alinhadores invisíveis (Invisalign), aparelhos autoligáveis ou convencionais para um sorriso harmonioso.',
    fullContent: {
      whatIs:
        'A Ortodontia é a especialidade da Medicina Dentária responsável pelo diagnóstico, prevenção e tratamento de problemas relacionados com o mau posicionamento dos dentes e maxilares. Dentes mal posicionados não se encaixam corretamente, dificultando a higiene oral, aumentando o risco de cáries e doenças gengivais, podendo também causar desgaste prematuro, dores musculares e problemas na articulação temporomandibular. Através de uma avaliação completa que inclui análise facial, radiografias e modelos de estudo, o Ortodontista desenvolve um plano de tratamento personalizado. No Centro Dentário Colombo oferecemos três soluções ortodônticas: alinhadores transparentes invisíveis (Invisalign), aparelhos fixos autoligáveis (mais discretos e com consultas mais espaçadas) e aparelhos fixos convencionais, adaptando a solução às necessidades estéticas, funcionais e financeiras de cada paciente.',
      advantages: [
        'Alinhadores invisíveis Invisalign: discretos, removíveis e confortáveis',
        'Aparelhos autoligáveis: menor fricção e consultas mais espaçadas',
        'Aparelhos convencionais: solução eficaz e acessível',
        'Melhoria significativa da estética facial e do sorriso',
        'Facilitação da higiene oral adequada',
        'Redução do risco de cáries e doenças gengivais',
        'Melhoria da função mastigatória e digestão',
        'Prevenção de desgaste prematuro dos dentes',
        'Tratamento possível em qualquer idade',
      ],
      additionalInfo:
        'O tratamento ortodôntico pode ser realizado em qualquer idade, sendo cada vez mais comum em adultos que procuram opções discretas como o Invisalign para melhorar o seu sorriso e saúde oral.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: [
      'ortodontia',
      'invisalign',
      'alinhadores invisíveis',
      'aparelho autoligável',
      'aparelho dentário',
      'aparelho fixo',
      'ortodontista lisboa',
    ],
  },
  {
    id: '7',
    title: 'Periodontologia',
    slug: 'periodontologia',
    subtitle: 'Tratamento de Gengivite e Periodontite',
    description:
      'Previna e trate doenças das gengivas como a gengivite e a periodontite. Evite sangramento, dor, mau hálito e a perda prematura de dentes.',
    fullContent: {
      whatIs:
        'A Periodontologia é a especialidade que cuida dos tecidos de suporte dos dentes: gengivas, osso alveolar e ligamento periodontal (que conecta o dente ao osso). As doenças periodontais são extremamente comuns e iniciam-se com a gengivite - inflamação das gengivas causada por acumulação de placa bacteriana. Os sinais incluem gengivas vermelhas, inchadas e que sangram facilmente durante a escovagem. Se não tratada, a gengivite pode evoluir para periodontite, uma condição mais grave onde a inflamação atinge o osso, causando sua destruição progressiva. Isto leva à formação de "bolsas" periodontais, mobilidade dentária e eventualmente à perda dos dentes. O tratamento periodontal remove a placa e tártaro acumulados, controla a infeção bacteriana e estabiliza a doença, preservando os dentes.',
      advantages: [
        'Tratamento eficaz de gengivite e periodontite',
        'Prevenção da perda prematura de dentes',
        'Eliminação de sangramento gengival',
        'Alívio de dor e desconforto',
        'Melhoria significativa do hálito',
        'Controlo de infeções bacterianas',
        'Preservação do osso de suporte dos dentes',
        'Redução do risco de doenças sistémicas associadas',
        'Manutenção da saúde oral a longo prazo',
      ],
      additionalInfo:
        'Estudos científicos demonstram que doenças periodontais não tratadas podem estar associadas a problemas cardíacos, diabetes e outras condições sistémicas, tornando o tratamento ainda mais importante.',
    },
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
      'gengivas',
      'sangramento gengival',
      'saúde gengival',
    ],
  },
  {
    id: '8',
    title: 'Próteses Dentárias',
    slug: 'proteses-dentarias',
    subtitle: 'Próteses Fixas e Removíveis',
    description:
      'Substitua dentes perdidos e recupere o seu sorriso, função mastigatória e conforto com próteses fixas e removíveis, modernas e personalizadas.',
    fullContent: {
      whatIs:
        'A área das Próteses Dentárias (Prostodontia) dedica-se à substituição de dentes perdidos através de próteses que reproduzem ao máximo a dentição natural. O objetivo é restabelecer integralmente a função mastigatória, fonética (capacidade de falar corretamente) e estética do paciente. As próteses são fabricadas de forma personalizada e podem ser fixas ou removíveis, totais ou parciais, dependendo das necessidades específicas de cada caso. Com os avanços tecnológicos atuais, as próteses modernas oferecem excelente estética, conforto e durabilidade. Em alguns casos, as próteses podem ser suportadas por implantes dentários, oferecendo maior estabilidade e conforto.',
      advantages: [
        'Próteses fixas (coroas e pontes) e removíveis (acrílicas ou esqueléticas)',
        'Restauração completa da capacidade mastigatória',
        'Melhoria da digestão e da nutrição',
        'Melhoria da fonética e clareza na fala',
        'Recuperação da estética facial e do sorriso',
        'Suporte aos tecidos faciais, prevenindo o envelhecimento precoce',
        'Aumento da autoestima e confiança social',
        'Possibilidade de fixação sobre implantes para maior conforto',
      ],
      additionalInfo:
        'Oferecemos próteses fixas (coroas e pontes) que protegem e recobrem dentes danificados, e próteses removíveis (acrílicas ou esqueléticas) que facilitam a higiene oral.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'próteses dentárias',
      'prótese fixa',
      'prótese removível',
      'prostodontia',
      'coroas',
      'pontes',
      'dentadura',
    ],
  },
  {
    id: '9',
    title: 'Higiene Oral',
    slug: 'higiene-oral',
    subtitle: 'Profilaxia e Destartarização',
    description:
      'Mantenha o seu sorriso saudável com limpezas dentárias profissionais: profilaxia e destartarização realizadas por profissionais especializados.',
    fullContent: {
      whatIs:
        'A Higiene Oral profissional é a base de toda a saúde dentária e a forma mais eficaz de prevenir cáries, gengivite, periodontite e mau hálito. Mesmo com uma escovagem cuidadosa em casa, existem zonas da boca onde a placa bacteriana se acumula e mineraliza, transformando-se em tártaro - que só pode ser removido em consultório. A consulta de higiene oral inclui a destartarização (remoção do tártaro acumulado acima e abaixo da linha gengival, com recurso a ultrassons) e a profilaxia (polimento das superfícies dentárias que remove manchas superficiais e dificulta a nova adesão da placa bacteriana). Durante a consulta, o higienista avalia também o estado geral das gengivas e ensina técnicas personalizadas de escovagem e uso de fio dentário. Recomenda-se a realização de uma limpeza profissional a cada 6 meses, ou com maior frequência em pacientes com histórico de doença periodontal.',
      advantages: [
        'Remoção completa de placa bacteriana e tártaro (destartarização)',
        'Polimento dentário que remove manchas superficiais (profilaxia)',
        'Prevenção eficaz de cáries, gengivite e periodontite',
        'Melhoria imediata do hálito',
        'Dentes visivelmente mais limpos e brilhantes',
        'Deteção precoce de problemas dentários e gengivais',
        'Aconselhamento personalizado de higiene oral',
        'Procedimento rápido, confortável e indolor',
      ],
      additionalInfo:
        'A limpeza dentária profissional semestral é o investimento mais económico que pode fazer na sua saúde oral - previne tratamentos mais complexos e dispendiosos no futuro.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'higiene oral',
      'limpeza dentária',
      'destartarização',
      'profilaxia',
      'remoção de tártaro',
      'limpeza de dentes lisboa',
    ],
  },
  {
    id: '10',
    title: 'Harmonização Orofacial',
    slug: 'harmonizacao-orofacial',
    subtitle: 'Estética Facial Integrada',
    description:
      'Equilibre a estética do seu rosto e sorriso com procedimentos de harmonização orofacial realizados por profissionais de saúde qualificados.',
    fullContent: {
      whatIs:
        'A Harmonização Orofacial é uma área da Medicina Dentária que integra a estética do sorriso com a estética facial, procurando o equilíbrio e a proporção harmoniosa entre dentes, lábios e restantes estruturas do rosto. Um sorriso bonito não depende apenas dos dentes - a moldura facial que o envolve é igualmente determinante. Esta especialidade recorre a procedimentos minimamente invasivos, como a aplicação de toxina botulínica (com fins terapêuticos, por exemplo no tratamento do bruxismo e do sorriso gengival, ou estéticos) e de preenchimentos com ácido hialurónico, para suavizar linhas de expressão, melhorar o contorno labial e restaurar volumes perdidos. Todos os procedimentos são planeados de forma personalizada, com avaliação prévia detalhada, e executados por profissionais de saúde qualificados, garantindo resultados naturais e seguros.',
      advantages: [
        'Integração da estética dentária com a estética facial',
        'Tratamento do sorriso gengival e do bruxismo com toxina botulínica',
        'Suavização de linhas de expressão e rugas',
        'Melhoria do contorno e volume labial',
        'Procedimentos minimamente invasivos e sem tempo de recuperação',
        'Resultados naturais que respeitam as proporções do rosto',
        'Planeamento personalizado com avaliação prévia detalhada',
        'Realizado por profissionais de saúde qualificados',
      ],
      additionalInfo:
        'A harmonização orofacial complementa na perfeição tratamentos como facetas, branqueamento e ortodontia, potenciando o resultado estético global do sorriso.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'harmonização orofacial',
      'harmonização facial',
      'toxina botulínica',
      'ácido hialurónico',
      'estética facial',
      'sorriso gengival',
      'bruxismo',
    ],
  },
];

// ============================================
// English Treatments Data
// ============================================
const treatmentsEN: Treatment[] = [
  {
    id: '1',
    title: 'Restorative Dentistry',
    slug: 'caries',
    subtitle: 'Cavity Treatment and Restorations',
    description:
      'Restore the health of your teeth affected by cavities or trauma through modern and effective treatments.',
    fullContent: {
      whatIs:
        'Restorative Dentistry is often the first area of dentistry patients come into contact with, associated with the well-known "Dental Check-up". This specialty is dedicated to treating dental lesions caused by cavities or trauma, restoring the natural appearance, texture and function of teeth. When teeth are affected, Restorative Dentistry allows the recovery of aesthetic, anatomical and chewing functions, giving the patient back comfort, well-being and self-confidence. Immediate treatment is essential to prevent small lesions from evolving into more serious problems that may require more complex interventions.',
      advantages: [
        'Prevents progressive destruction of tooth structure and possible total tooth loss',
        'Early intervention results in smaller, less invasive restorations',
        'Preserves the natural tooth structure and its chewing function as much as possible',
        "Restores the smile's aesthetics and the patient's self-confidence",
        'Improves breath and overall oral health',
        'Prevents complications that could require more complex treatments',
      ],
      additionalInfo:
        'When a lesion becomes very extensive, the intervention of other specialties such as Endodontics, Dental Prosthetics or Implantology may be necessary to ensure the best result.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'restorative dentistry',
      'cavities',
      'cavity treatment',
      'dental restoration',
      'filling',
      'dental check-up',
      'oral health',
    ],
  },
  {
    id: '2',
    title: 'Cosmetic Dentistry',
    slug: 'estetica-dentaria',
    subtitle: 'Veneers, Whitening and a Natural Smile',
    description:
      'Transform your smile with dental veneers, professional whitening and other cosmetic treatments that restore beauty, naturalness and confidence.',
    fullContent: {
      whatIs:
        "Cosmetic Dentistry is the specialty that transforms smiles through various advanced cosmetic treatments, most notably dental veneers and professional teeth whitening. Using state-of-the-art techniques and materials, we can make subtle but impactful changes to teeth, correcting imperfections and creating harmonious, natural smiles. This area works on correcting fractured teeth, teeth damaged by cavities, stained or discolored teeth, closing gaps between teeth (diastemas), and performing safe, supervised teeth whitening. Each treatment is carefully planned to respect each patient's unique facial characteristics, guaranteeing results that look completely natural and significantly improve self-esteem.",
      advantages: [
        'Ceramic or composite dental veneers for a harmonious smile',
        'Professional, safe and supervised teeth whitening',
        'Correction of fractured, chipped or worn teeth',
        'Treatment of stained or discolored teeth',
        'Closing unaesthetic gaps between teeth (diastemas)',
        'Improvement of tooth shape, size and proportion',
        'Natural results that respect facial harmony',
        'Minimally invasive treatments with excellent materials',
      ],
    },
    bannerImage:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'cosmetic dentistry',
      'dental veneers',
      'teeth whitening',
      'veneers',
      'perfect smile',
      'aesthetic dentistry',
    ],
  },
  {
    id: '3',
    title: 'Endodontics',
    slug: 'endodontia',
    subtitle: 'Root Canal Treatment and Preservation',
    description:
      'Root canal treatment - the conservative solution to save severely affected teeth.',
    fullContent: {
      whatIs:
        'Endodontics, popularly known as "root canal treatment", is the specialty that preserves teeth that would otherwise have to be extracted. This conservative treatment aims to save severely decayed, infected or traumatized teeth by treating the dental pulp (the inner part of the tooth containing nerves and blood vessels). The procedure consists of carefully cleaning the pulp space, preparing the root canals and filling them with biocompatible material that seals the canals and prevents bacteria from entering. After the root canal treatment, the tooth must be restored with a crown or other suitable restoration to recover its function and protect it from future fractures.',
      advantages: [
        'Preserves the natural tooth, avoiding extraction',
        'Last alternative to save severely compromised teeth',
        'Eliminates pain caused by dental infections',
        'Maintains tooth structure for later rehabilitation',
        'Prevents the spread of infections to other teeth',
        'Prevents new bacteria from entering treated canals',
        'Maintains natural space in the dental arch',
        'More economical solution than extraction and tooth replacement',
      ],
      additionalInfo:
        'After endodontic treatment, it is essential to restore the tooth with a suitable crown or reconstruction to ensure its longevity and function.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: [
      'endodontics',
      'root canal',
      'root canal treatment',
      'toothache',
      'dental infection',
    ],
  },
  {
    id: '4',
    title: 'Implantology',
    slug: 'implantologia',
    subtitle: 'Fixed Teeth Forever',
    description:
      'Restore your smile with fixed teeth using advanced implant technology. Possibility of teeth on the same day!',
    fullContent: {
      whatIs:
        'Implantology represents the most modern and effective solution for replacing lost teeth, being the oral rehabilitation that comes closest to natural dentition in terms of functionality, aesthetics and comfort. Dental implants are small titanium screws (biocompatible material) that function as artificial roots, being surgically placed in the jawbone. After integration with the bone (osseointegration), the implants serve as support for ceramic crowns that perfectly reproduce natural teeth. The final result is so natural that it becomes practically impossible to distinguish the implanted tooth from a natural tooth. Implants can be used to replace a single tooth, several teeth (implant-supported bridges) or even all teeth (full implant-supported prostheses).',
      advantages: [
        'Solution closest to natural teeth',
        'Excellent comfort and stability',
        'Greater longevity compared to other solutions',
        'Preserves the jawbone, preventing resorption',
        'Does not compromise healthy adjacent teeth',
        'Complete restoration of chewing capacity',
        'Total recovery of facial aesthetics and smile',
        'Improved phonetics and self-esteem',
        'Possibility of same-day teeth in selected cases',
      ],
      additionalInfo:
        'At Centro Dentário Colombo, we use cutting-edge technology that allows, in selected cases, the placement of teeth on the same day as implant surgery!',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: [
      'dental implants',
      'implantology',
      'fixed teeth',
      'osseointegration',
      'oral rehabilitation',
    ],
  },
  {
    id: '5',
    title: 'Pediatric Dentistry',
    slug: 'odontopediatria',
    subtitle: 'Dentist for Children and Babies',
    description:
      'Specialized and preventive care for the oral health of babies, children and adolescents: cavity treatment and braces in a welcoming environment.',
    fullContent: {
      whatIs:
        "Pediatric Dentistry is the dental specialty dedicated exclusively to caring for the oral health of babies, children and adolescents, from birth to adolescence. The first contact with the pediatric dentist should happen in the child's first year of life, establishing a positive relationship with dentistry from an early age. During appointments, we assess oral health status, monitor tooth eruption, perform preventive treatments such as fluoride application and sealants, treat cavities when necessary and monitor the need for orthodontic appliances. A fundamental aspect of Pediatric Dentistry is education - we teach children and parents correct brushing techniques, flossing and the importance of healthy eating for oral health.",
      advantages: [
        'Effective prevention of cavities',
        'Cavity treatment adapted to children',
        'Creation of healthy oral hygiene habits',
        'Establishment of a positive relationship with the dentist',
        'Elimination of fear of the dentist',
        'Monitoring of dental development',
        'Early detection of orthodontic problems and indication of braces',
        'Application of preventive treatments (fluoride, sealants)',
        'Guarantee of lasting oral health',
      ],
      additionalInfo:
        'We create a playful and welcoming environment where children feel safe and comfortable, making dental visits a positive experience.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: [
      'pediatric dentistry',
      'dentist for children',
      'children dentist',
      'children oral health',
      'braces for children',
      'sealants',
      'fluoride',
    ],
  },
  {
    id: '6',
    title: 'Orthodontics',
    slug: 'ortodontia',
    subtitle: 'Invisalign, Self-Ligating and Conventional Braces',
    description:
      'Correct the position of your teeth with invisible aligners (Invisalign), self-ligating or conventional braces for a harmonious smile.',
    fullContent: {
      whatIs:
        'Orthodontics is the dental specialty responsible for the diagnosis, prevention and treatment of problems related to the misalignment of teeth and jaws. Misaligned teeth do not fit together properly, making oral hygiene difficult, increasing the risk of cavities and gum disease, and can also cause premature wear, muscle pain and temporomandibular joint problems. Through a complete evaluation that includes facial analysis, X-rays and study models, the Orthodontist develops a personalized treatment plan. At Centro Dentário Colombo we offer three orthodontic solutions: invisible clear aligners (Invisalign), self-ligating fixed braces (more discreet and with more spaced-out appointments) and conventional fixed braces, adapting the solution to the aesthetic, functional and financial needs of each patient.',
      advantages: [
        'Invisalign invisible aligners: discreet, removable and comfortable',
        'Self-ligating braces: less friction and more spaced-out appointments',
        'Conventional braces: effective and affordable solution',
        'Significant improvement in facial aesthetics and smile',
        'Facilitation of proper oral hygiene',
        'Reduced risk of cavities and gum disease',
        'Improved chewing function and digestion',
        'Prevention of premature tooth wear',
        'Treatment possible at any age',
      ],
      additionalInfo:
        'Orthodontic treatment can be performed at any age, being increasingly common in adults seeking discreet options like Invisalign to improve their smile and oral health.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: [
      'orthodontics',
      'invisalign',
      'invisible aligners',
      'self-ligating braces',
      'braces',
      'fixed braces',
      'orthodontist lisbon',
    ],
  },
  {
    id: '7',
    title: 'Periodontology',
    slug: 'periodontologia',
    subtitle: 'Gingivitis and Periodontitis Treatment',
    description:
      'Prevent and treat gum diseases such as gingivitis and periodontitis. Avoid bleeding, pain, bad breath and premature tooth loss.',
    fullContent: {
      whatIs:
        'Periodontology is the specialty that takes care of the supporting tissues of the teeth: gums, alveolar bone and periodontal ligament (which connects the tooth to the bone). Periodontal diseases are extremely common and begin with gingivitis - inflammation of the gums caused by the accumulation of bacterial plaque. Signs include red, swollen gums that bleed easily during brushing. If left untreated, gingivitis can progress to periodontitis, a more serious condition where the inflammation reaches the bone, causing its progressive destruction. This leads to the formation of periodontal "pockets", tooth mobility and eventually tooth loss. Periodontal treatment removes accumulated plaque and tartar, controls bacterial infection and stabilizes the disease, preserving the teeth.',
      advantages: [
        'Effective treatment of gingivitis and periodontitis',
        'Prevention of premature tooth loss',
        'Elimination of gum bleeding',
        'Relief of pain and discomfort',
        'Significant improvement in breath',
        'Control of bacterial infections',
        'Preservation of tooth-supporting bone',
        'Reduced risk of associated systemic diseases',
        'Maintenance of long-term oral health',
      ],
      additionalInfo:
        'Scientific studies demonstrate that untreated periodontal diseases may be associated with heart problems, diabetes and other systemic conditions, making treatment even more important.',
    },
    bannerImage:
      'https://d2k1crfmot9vtj.cloudfront.net/media/ae42b22c5fe2137f34c929204328b4ef_TZjkGkL.jpg',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    keywords: [
      'periodontology',
      'gingivitis',
      'periodontitis',
      'gums',
      'gum bleeding',
      'gum health',
    ],
  },
  {
    id: '8',
    title: 'Dental Prosthetics',
    slug: 'proteses-dentarias',
    subtitle: 'Fixed and Removable Prostheses',
    description:
      'Replace lost teeth and recover your smile, chewing function and comfort with modern, personalized fixed and removable prostheses.',
    fullContent: {
      whatIs:
        "Dental Prosthetics (Prosthodontics) is dedicated to replacing lost teeth through prostheses that reproduce natural dentition as closely as possible. The goal is to fully restore the patient's chewing function, phonetics (ability to speak correctly) and aesthetics. Prostheses are custom-made and can be fixed or removable, total or partial, depending on the specific needs of each case. With current technological advances, modern prostheses offer excellent aesthetics, comfort and durability. In some cases, prostheses can be supported by dental implants, offering greater stability and comfort.",
      advantages: [
        'Fixed prostheses (crowns and bridges) and removable prostheses (acrylic or skeletal)',
        'Complete restoration of chewing capacity',
        'Improved digestion and nutrition',
        'Improved phonetics and speech clarity',
        'Recovery of facial aesthetics and smile',
        'Support for facial tissues, preventing premature aging',
        'Increased self-esteem and social confidence',
        'Possibility of implant fixation for greater comfort',
      ],
      additionalInfo:
        'We offer fixed prostheses (crowns and bridges) that protect and cover damaged teeth, and removable prostheses (acrylic or skeletal) that facilitate oral hygiene.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'dental prosthetics',
      'fixed prosthesis',
      'removable prosthesis',
      'prosthodontics',
      'crowns',
      'bridges',
      'dentures',
    ],
  },
  {
    id: '9',
    title: 'Oral Hygiene',
    slug: 'higiene-oral',
    subtitle: 'Prophylaxis and Scaling',
    description:
      'Keep your smile healthy with professional dental cleanings: prophylaxis and scaling performed by specialized professionals.',
    fullContent: {
      whatIs:
        'Professional Oral Hygiene is the foundation of all dental health and the most effective way to prevent cavities, gingivitis, periodontitis and bad breath. Even with careful brushing at home, there are areas of the mouth where bacterial plaque accumulates and mineralizes, turning into tartar - which can only be removed in the dental office. The oral hygiene appointment includes scaling (removal of tartar accumulated above and below the gum line, using ultrasound) and prophylaxis (polishing of tooth surfaces that removes superficial stains and makes it harder for new plaque to adhere). During the appointment, the hygienist also assesses the general condition of the gums and teaches personalized brushing and flossing techniques. A professional cleaning is recommended every 6 months, or more frequently for patients with a history of periodontal disease.',
      advantages: [
        'Complete removal of bacterial plaque and tartar (scaling)',
        'Tooth polishing that removes superficial stains (prophylaxis)',
        'Effective prevention of cavities, gingivitis and periodontitis',
        'Immediate breath improvement',
        'Visibly cleaner and brighter teeth',
        'Early detection of dental and gum problems',
        'Personalized oral hygiene advice',
        'Quick, comfortable and painless procedure',
      ],
      additionalInfo:
        'A professional dental cleaning every six months is the most economical investment you can make in your oral health - it prevents more complex and expensive treatments in the future.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'oral hygiene',
      'dental cleaning',
      'scaling',
      'prophylaxis',
      'tartar removal',
      'teeth cleaning lisbon',
    ],
  },
  {
    id: '10',
    title: 'Orofacial Harmonization',
    slug: 'harmonizacao-orofacial',
    subtitle: 'Integrated Facial Aesthetics',
    description:
      'Balance the aesthetics of your face and smile with orofacial harmonization procedures performed by qualified health professionals.',
    fullContent: {
      whatIs:
        'Orofacial Harmonization is an area of dentistry that integrates the aesthetics of the smile with facial aesthetics, seeking balance and harmonious proportion between teeth, lips and the other structures of the face. A beautiful smile does not depend only on the teeth - the facial frame surrounding it is equally decisive. This specialty uses minimally invasive procedures, such as the application of botulinum toxin (for therapeutic purposes, for example in the treatment of bruxism and gummy smile, or aesthetic purposes) and hyaluronic acid fillers, to soften expression lines, improve lip contour and restore lost volumes. All procedures are planned in a personalized way, with a detailed prior assessment, and performed by qualified health professionals, guaranteeing natural and safe results.',
      advantages: [
        'Integration of dental aesthetics with facial aesthetics',
        'Treatment of gummy smile and bruxism with botulinum toxin',
        'Softening of expression lines and wrinkles',
        'Improvement of lip contour and volume',
        'Minimally invasive procedures with no recovery time',
        'Natural results that respect facial proportions',
        'Personalized planning with detailed prior assessment',
        'Performed by qualified health professionals',
      ],
      additionalInfo:
        'Orofacial harmonization perfectly complements treatments such as veneers, whitening and orthodontics, enhancing the overall aesthetic result of the smile.',
    },
    bannerImage:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'orofacial harmonization',
      'facial harmonization',
      'botulinum toxin',
      'hyaluronic acid',
      'facial aesthetics',
      'gummy smile',
      'bruxism',
    ],
  },
];

// ============================================
// Exports
// ============================================
export function getTreatments(language: string): Treatment[] {
  return language === 'en' ? treatmentsEN : treatmentsPT;
}

// Compatibilidade retroativa (código legado importa `treatments`)
export const treatments = treatmentsPT;
