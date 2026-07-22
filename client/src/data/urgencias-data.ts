// client/src/data/urgencias-data.ts

export type UrgencyLevel = 'imediata' | 'mesmo-dia' | 'avaliar';

export interface EmergencyCase {
  id: string;
  title: string;
  symptom: string;
  level: UrgencyLevel;
  whatWeDo: string;
  relatedSlug?: string;
}

export interface FirstAidStep {
  id: string;
  title: string;
  do: string[];
  dont: string[];
}

export interface ProtocolStep {
  order: number;
  title: string;
  description: string;
  duration: string;
}

export interface UrgencyFaq {
  question: string;
  answer: string;
}

export interface UrgenciasContent {
  levelLabels: Record<UrgencyLevel, string>;
  cases: EmergencyCase[];
  protocol: ProtocolStep[];
  firstAid: FirstAidStep[];
  faq: UrgencyFaq[];
}

// ============================================
// PORTUGUÊS
// ============================================
const urgenciasPT: UrgenciasContent = {
  levelLabels: {
    imediata: 'Venha já',
    'mesmo-dia': 'Hoje',
    avaliar: 'Ligue e avaliamos',
  },
  cases: [
    {
      id: 'dor-aguda',
      title: 'Dor de dentes intensa',
      symptom:
        'Dor latejante que não passa com analgésicos, piora à noite ou ao deitar, ou irradia para o ouvido e a cabeça.',
      level: 'imediata',
      whatWeDo:
        'Identificamos a origem da dor com radiografia digital e aliviamos o quadro na própria consulta — normalmente com abertura e desinfeção do canal ou drenagem, consoante o diagnóstico.',
      relatedSlug: 'endodontia',
    },
    {
      id: 'abcesso',
      title: 'Abcesso ou inchaço na face',
      symptom:
        'Inchaço na gengiva ou na face, gosto desagradável na boca, febre ou dificuldade em abrir a boca e engolir.',
      level: 'imediata',
      whatWeDo:
        'Um abcesso é uma infeção ativa e não se resolve sozinho. Drenamos o foco infecioso, prescrevemos medicação quando indicado e planeamos o tratamento definitivo.',
      relatedSlug: 'caries',
    },
    {
      id: 'dente-avulsionado',
      title: 'Dente arrancado por pancada',
      symptom:
        'Dente permanente que saiu inteiro da boca após queda, acidente ou impacto desportivo.',
      level: 'imediata',
      whatWeDo:
        'É a urgência dentária mais sensível ao tempo. Reimplantamos o dente e ferulizamos. As primeiras duas horas determinam o prognóstico — venha imediatamente com o dente conservado em leite ou soro.',
      relatedSlug: 'implantologia',
    },
    {
      id: 'dente-partido',
      title: 'Dente partido ou lascado',
      symptom:
        'Fratura visível, aresta cortante a magoar a língua, ou sensibilidade forte ao ar e ao frio.',
      level: 'mesmo-dia',
      whatWeDo:
        'Avaliamos se a fratura atingiu o nervo. Protegemos o dente e restauramos a forma e a função — muitas vezes numa só sessão.',
      relatedSlug: 'caries',
    },
    {
      id: 'coroa-caida',
      title: 'Coroa, faceta ou ponte que caiu',
      symptom: 'A peça soltou-se a comer, deixando o dente exposto e sensível.',
      level: 'mesmo-dia',
      whatWeDo:
        'Guarde a peça e traga-a consigo. Na maioria dos casos é possível recimentar a coroa original no mesmo dia, sem custo de refazer.',
      relatedSlug: 'proteses-dentarias',
    },
    {
      id: 'protese-partida',
      title: 'Prótese partida ou a magoar',
      symptom:
        'Prótese removível fraturada, com gancho partido ou a provocar feridas na gengiva.',
      level: 'mesmo-dia',
      whatWeDo:
        'Reparamos ou ajustamos a prótese e tratamos as feridas. Não use cola doméstica — inviabiliza a reparação e é tóxica.',
      relatedSlug: 'proteses-dentarias',
    },
    {
      id: 'hemorragia',
      title: 'Hemorragia que não pára',
      symptom:
        'Sangramento persistente após extração ou traumatismo, que continua depois de 30 minutos de compressão.',
      level: 'imediata',
      whatWeDo:
        'Localizamos a origem, controlamos a hemorragia e suturamos se necessário. Traga a lista da sua medicação, sobretudo anticoagulantes.',
    },
    {
      id: 'aparelho',
      title: 'Aparelho a magoar',
      symptom:
        'Arco solto a espetar na bochecha, bracket descolado ou fio de contenção partido.',
      level: 'avaliar',
      whatWeDo:
        'Colocamos cera ortodôntica e recolocamos o componente. Traga o seu plano ortodôntico se estiver em tratamento noutra clínica.',
      relatedSlug: 'ortodontia',
    },
    {
      id: 'crianca',
      title: 'Traumatismo em criança',
      symptom:
        'Queda com dente de leite ou definitivo partido, deslocado ou empurrado para dentro da gengiva.',
      level: 'imediata',
      whatWeDo:
        'Dentes de leite e definitivos têm protocolos diferentes. Avaliamos o dente afetado e o impacto no germe do dente permanente por baixo.',
      relatedSlug: 'odontopediatria',
    },
    {
      id: 'siso',
      title: 'Dor no dente do siso',
      symptom:
        'Dor e inchaço atrás do último molar, dificuldade em abrir a boca ou em engolir.',
      level: 'mesmo-dia',
      whatWeDo:
        'Controlamos a inflamação (pericoronarite) e avaliamos, por radiografia, se há indicação para extração.',
      relatedSlug: 'implantologia',
    },
  ],
  protocol: [
    {
      order: 1,
      title: 'Ligue antes de vir',
      description:
        'Uma chamada de dois minutos permite-nos preparar o gabinete e encaixá-lo na agenda. Se não conseguir falar, envie mensagem por WhatsApp.',
      duration: '2 min',
    },
    {
      order: 2,
      title: 'Triagem à chegada',
      description:
        'Avaliamos a gravidade do quadro assim que chega. Casos com dor intensa, infeção ativa ou traumatismo têm prioridade sobre consultas de rotina.',
      duration: '5 min',
    },
    {
      order: 3,
      title: 'Diagnóstico com radiografia digital',
      description:
        'Radiografia no local, com baixa radiação, para identificar a causa real e não apenas o sintoma.',
      duration: '10 min',
    },
    {
      order: 4,
      title: 'Alívio da dor no próprio dia',
      description:
        'Intervimos para tirar a dor e estabilizar a situação. Explicamos o que vamos fazer e o custo antes de começar.',
      duration: '30–60 min',
    },
    {
      order: 5,
      title: 'Plano de tratamento definitivo',
      description:
        'Quando a resolução completa não é possível no mesmo dia, estabilizamos e agendamos a continuação com o especialista indicado.',
      duration: 'Agendado',
    },
  ],
  firstAid: [
    {
      id: 'dor',
      title: 'Enquanto espera: dor de dentes',
      do: [
        'Tome o analgésico que costuma tomar, respeitando a dose habitual',
        'Aplique frio na face, por fora, 10 minutos de cada vez',
        'Durma com a cabeça mais elevada, com uma almofada extra',
        'Faça bochechos com água morna e sal',
      ],
      dont: [
        'Não coloque aspirina ou comprimidos diretamente sobre a gengiva — queima o tecido',
        'Não aplique calor sobre a face se houver inchaço — agrava a infeção',
        'Não tente furar nem espremer um abcesso em casa',
      ],
    },
    {
      id: 'avulsao',
      title: 'Enquanto espera: dente arrancado',
      do: [
        'Pegue no dente pela coroa, a parte branca — nunca pela raiz',
        'Se estiver sujo, passe por leite ou soro fisiológico, durante segundos',
        'Se souber e conseguir, volte a colocá-lo no alvéolo e morda um pano limpo',
        'Caso contrário, transporte-o dentro de um copo com leite e venha de imediato',
      ],
      dont: [
        'Não esfregue nem escove a raiz — destrói as células que permitem a reimplantação',
        'Não transporte o dente em água da torneira nem seco num guardanapo',
        'Não perca tempo: as primeiras 2 horas decidem se o dente se salva',
      ],
    },
    {
      id: 'hemorragia',
      title: 'Enquanto espera: hemorragia',
      do: [
        'Morda uma compressa limpa e enrolada sobre o local, com força constante, durante 20 minutos seguidos',
        'Mantenha-se sentado e com a cabeça elevada',
        'Se persistir, repita com uma compressa nova e contacte-nos',
      ],
      dont: [
        'Não levante a compressa a toda a hora para verificar — desfaz o coágulo',
        'Não bocheche com força, não fume e não use palhinha',
        'Não suspenda medicação anticoagulante por sua iniciativa',
      ],
    },
  ],
  faq: [
    {
      question: 'Atendem urgências dentárias sem marcação?',
      answer:
        'Sim. Recebemos urgências todos os dias, das 09:00 às 23:00, incluindo sábados, domingos e feriados. Recomendamos ligar antes para +351 21 604 13 55 para reduzirmos o tempo de espera, mas quem chega com dor aguda, infeção ou traumatismo é sempre triado com prioridade.',
    },
    {
      question: 'Estão abertos ao domingo e nos feriados?',
      answer:
        'Sim. O Centro Dentário Colombo está aberto 365 dias por ano, das 09:00 às 23:00, incluindo domingos e feriados, no horário do Centro Comercial Colombo.',
    },
    {
      question: 'Quanto custa uma consulta de urgência?',
      answer:
        'A consulta de urgência inclui triagem, observação e diagnóstico, com radiografia digital quando necessária. O valor do tratamento depende do que for preciso fazer e é sempre apresentado e aceite por si antes de qualquer intervenção. Não iniciamos tratamentos sem apresentar o custo.',
    },
    {
      question: 'Vou sair da consulta sem dor?',
      answer:
        'O objetivo da consulta de urgência é controlar a dor e eliminar o foco de infeção no próprio dia. Nem sempre é possível concluir o tratamento definitivo na primeira sessão — nesse caso estabilizamos a situação, tiramos a dor e agendamos a continuação com o especialista indicado.',
    },
    {
      question: 'Sou de fora e não sou paciente da clínica. Podem atender-me?',
      answer:
        'Sim. Atendemos pacientes novos, residentes e visitantes em urgência. Traga um documento de identificação e, se tiver, a lista da medicação que toma. Também atendemos em inglês.',
    },
    {
      question: 'Parti um dente ao fim de semana. Espero por segunda-feira?',
      answer:
        'Não. Uma fratura pode expor o nervo e evoluir para infeção em poucos dias, e a dor tende a agravar-se. Estamos abertos ao sábado e ao domingo — ser observado no próprio dia costuma significar um tratamento mais simples e mais barato.',
    },
    {
      question: 'Onde fica a clínica e onde posso estacionar?',
      answer:
        'Estamos dentro do Centro Comercial Colombo, no Piso -1, Loja 507 (Av. Lusíada 2, 1500-392 Lisboa). Tem estacionamento coberto do centro comercial à porta e a estação de metro Colégio Militar/Luz (linha azul) fica a poucos minutos a pé.',
    },
    {
      question: 'A minha criança partiu um dente de leite. É mesmo urgente?',
      answer:
        'Sim, deve ser observada. Um traumatismo num dente de leite pode afetar o germe do dente permanente que está a formar-se por baixo. A avaliação é rápida e permite decidir se há necessidade de intervenção imediata.',
    },
  ],
};

// ============================================
// ENGLISH
// ============================================
const urgenciasEN: UrgenciasContent = {
  levelLabels: {
    imediata: 'Come now',
    'mesmo-dia': 'Today',
    avaliar: 'Call us first',
  },
  cases: [
    {
      id: 'dor-aguda',
      title: 'Severe toothache',
      symptom:
        'Throbbing pain that painkillers no longer control, gets worse at night or when lying down, or spreads to your ear and head.',
      level: 'imediata',
      whatWeDo:
        'We find the source with a digital X-ray and relieve the pain during the same appointment — usually by opening and disinfecting the canal, or draining, depending on the diagnosis.',
      relatedSlug: 'endodontia',
    },
    {
      id: 'abcesso',
      title: 'Abscess or facial swelling',
      symptom:
        'Swollen gum or face, bad taste in the mouth, fever, or trouble opening your mouth and swallowing.',
      level: 'imediata',
      whatWeDo:
        'An abscess is an active infection and will not clear on its own. We drain it, prescribe medication when indicated, and plan the definitive treatment.',
      relatedSlug: 'caries',
    },
    {
      id: 'dente-avulsionado',
      title: 'Knocked-out tooth',
      symptom:
        'A permanent tooth came out whole after a fall, accident or sports impact.',
      level: 'imediata',
      whatWeDo:
        'This is the most time-critical dental emergency. We replant and splint the tooth. The first two hours decide the outcome — come immediately, keeping the tooth in milk or saline.',
      relatedSlug: 'implantologia',
    },
    {
      id: 'dente-partido',
      title: 'Broken or chipped tooth',
      symptom:
        'A visible fracture, a sharp edge cutting your tongue, or strong sensitivity to air and cold.',
      level: 'mesmo-dia',
      whatWeDo:
        'We check whether the fracture reached the nerve, protect the tooth and rebuild its shape and function — often in a single session.',
      relatedSlug: 'caries',
    },
    {
      id: 'coroa-caida',
      title: 'Crown, veneer or bridge came off',
      symptom:
        'The restoration came loose while eating, leaving the tooth exposed and sensitive.',
      level: 'mesmo-dia',
      whatWeDo:
        'Keep the piece and bring it with you. In most cases we can re-cement the original crown the same day, with no need to remake it.',
      relatedSlug: 'proteses-dentarias',
    },
    {
      id: 'protese-partida',
      title: 'Broken or painful denture',
      symptom:
        'A fractured removable denture, a broken clasp, or sore spots on your gum.',
      level: 'mesmo-dia',
      whatWeDo:
        'We repair or adjust the denture and treat the sore areas. Do not use household glue — it is toxic and makes a proper repair impossible.',
      relatedSlug: 'proteses-dentarias',
    },
    {
      id: 'hemorragia',
      title: 'Bleeding that will not stop',
      symptom:
        'Persistent bleeding after an extraction or trauma that continues after 30 minutes of pressure.',
      level: 'imediata',
      whatWeDo:
        'We locate the source, control the bleeding and suture if needed. Bring your medication list, especially any blood thinners.',
    },
    {
      id: 'aparelho',
      title: 'Braces hurting you',
      symptom:
        'A loose wire poking your cheek, a debonded bracket, or a broken retainer.',
      level: 'avaliar',
      whatWeDo:
        'We apply orthodontic wax and refit the component. Bring your treatment plan if you are being treated at another clinic.',
      relatedSlug: 'ortodontia',
    },
    {
      id: 'crianca',
      title: 'Child dental trauma',
      symptom:
        'A fall leaving a baby or permanent tooth broken, displaced, or pushed up into the gum.',
      level: 'imediata',
      whatWeDo:
        'Baby teeth and permanent teeth follow different protocols. We assess the affected tooth and the impact on the permanent tooth bud underneath.',
      relatedSlug: 'odontopediatria',
    },
    {
      id: 'siso',
      title: 'Wisdom tooth pain',
      symptom:
        'Pain and swelling behind the last molar, difficulty opening your mouth or swallowing.',
      level: 'mesmo-dia',
      whatWeDo:
        'We control the inflammation (pericoronitis) and use an X-ray to assess whether extraction is indicated.',
      relatedSlug: 'implantologia',
    },
  ],
  protocol: [
    {
      order: 1,
      title: 'Call before you come',
      description:
        'A two-minute call lets us prepare the room and fit you into the schedule. If you cannot talk, send us a WhatsApp message.',
      duration: '2 min',
    },
    {
      order: 2,
      title: 'Triage on arrival',
      description:
        'We assess how serious your case is as soon as you arrive. Severe pain, active infection and trauma take priority over routine appointments.',
      duration: '5 min',
    },
    {
      order: 3,
      title: 'Diagnosis with digital X-ray',
      description:
        'Low-radiation imaging on site, to identify the real cause rather than just the symptom.',
      duration: '10 min',
    },
    {
      order: 4,
      title: 'Pain relief the same day',
      description:
        'We intervene to remove the pain and stabilise the situation. We explain what we will do and what it costs before we start.',
      duration: '30–60 min',
    },
    {
      order: 5,
      title: 'Definitive treatment plan',
      description:
        'When full resolution is not possible on the day, we stabilise the case and book the follow-up with the right specialist.',
      duration: 'Scheduled',
    },
  ],
  firstAid: [
    {
      id: 'dor',
      title: 'While you wait: toothache',
      do: [
        'Take the painkiller you normally use, at your usual dose',
        'Apply cold to the outside of your face, 10 minutes at a time',
        'Sleep with your head raised on an extra pillow',
        'Rinse with warm salt water',
      ],
      dont: [
        'Do not place aspirin or tablets directly on the gum — it burns the tissue',
        'Do not apply heat to a swollen face — it feeds the infection',
        'Do not try to pierce or squeeze an abscess at home',
      ],
    },
    {
      id: 'avulsao',
      title: 'While you wait: knocked-out tooth',
      do: [
        'Hold the tooth by the crown, the white part — never by the root',
        'If dirty, rinse it in milk or saline for a few seconds only',
        'If you can, put it back in the socket and bite on a clean cloth',
        'Otherwise carry it in a cup of milk and come straight away',
      ],
      dont: [
        'Do not scrub or brush the root — it destroys the cells that allow replantation',
        'Do not carry the tooth in tap water or dry in a tissue',
        'Do not wait: the first 2 hours decide whether the tooth can be saved',
      ],
    },
    {
      id: 'hemorragia',
      title: 'While you wait: bleeding',
      do: [
        'Bite on a clean rolled gauze over the site with steady pressure for 20 uninterrupted minutes',
        'Stay seated with your head raised',
        'If it continues, repeat with fresh gauze and contact us',
      ],
      dont: [
        'Do not keep lifting the gauze to check — it breaks the clot',
        'Do not rinse hard, smoke, or use a straw',
        'Do not stop blood-thinning medication on your own initiative',
      ],
    },
  ],
  faq: [
    {
      question: 'Do you see dental emergencies without an appointment?',
      answer:
        'Yes. We take emergencies every day, from 09:00 to 23:00, including Saturdays, Sundays and public holidays. Calling ahead on +351 21 604 13 55 shortens your wait, but anyone arriving with acute pain, infection or trauma is always triaged as a priority.',
    },
    {
      question: 'Are you open on Sundays and public holidays?',
      answer:
        'Yes. Centro Dentário Colombo is open 365 days a year, from 09:00 to 23:00, including Sundays and public holidays, in line with Colombo Shopping Centre opening hours.',
    },
    {
      question: 'How much does an emergency appointment cost?',
      answer:
        'The emergency appointment covers triage, examination and diagnosis, including a digital X-ray when needed. The cost of treatment depends on what is required and is always presented to you and accepted before any intervention. We never start treatment without telling you the price.',
    },
    {
      question: 'Will I leave without pain?',
      answer:
        'The goal of an emergency appointment is to control the pain and eliminate the source of infection the same day. It is not always possible to complete definitive treatment in the first session — in that case we stabilise the situation, remove the pain and schedule the follow-up with the right specialist.',
    },
    {
      question:
        'I am visiting and not a patient of the clinic. Can you see me?',
      answer:
        'Yes. We see new patients, residents and visitors in emergency. Bring photo ID and, if you have one, a list of the medication you take. We also speak English.',
    },
    {
      question: 'I broke a tooth at the weekend. Should I wait until Monday?',
      answer:
        'No. A fracture can expose the nerve and turn into an infection within days, and the pain usually gets worse. We are open on Saturdays and Sundays — being seen the same day normally means simpler and cheaper treatment.',
    },
    {
      question: 'Where are you and where can I park?',
      answer:
        'We are inside Colombo Shopping Centre, Level -1, Unit 507 (Av. Lusíada 2, 1500-392 Lisbon). The shopping centre car park is right at the door, and Colégio Militar/Luz metro station (blue line) is a few minutes away on foot.',
    },
    {
      question: 'My child broke a baby tooth. Is that really urgent?',
      answer:
        'Yes, it should be checked. Trauma to a baby tooth can affect the permanent tooth forming underneath. The assessment is quick and tells us whether immediate treatment is needed.',
    },
  ],
};

export function getUrgenciasContent(language: 'pt' | 'en'): UrgenciasContent {
  return language === 'en' ? urgenciasEN : urgenciasPT;
}

export const urgencias = urgenciasPT;
