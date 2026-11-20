export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  photo: string;
  bio: string;
  education?: string[];
  achievements?: string[];
  languages?: string[];
  /** Nº de cédula profissional da Ordem dos Médicos Dentistas */
  omd?: string;
  /** 'F' → "Médica Dentista", 'M' → "Médico Dentista" */
  gender: 'F' | 'M';
}

// ============================================
// Dados de identificação profissional (ERS)
// ============================================
// Fonte única para PT e EN, indexada pelo id do médico.
// Exigência ERS: cada médico dentista apresentado no site
// deve ter o nº da OMD visível. Lista oficial enviada pela
// clínica em 18/11/2026.
// `hidden: true` → não consta da lista oficial e não aparece
// no Corpo Clínico (os dados ficam guardados para reativar).
const PROFESSIONAL_IDS: Record<
  string,
  { omd?: string; gender: 'F' | 'M'; hidden?: boolean }
> = {
  '1': { gender: 'M', omd: '3397' }, // Marcelo Ferrian Natali
  '2': { gender: 'F', omd: '12367' }, // Geane Augusta Mendes
  '3': { gender: 'F', omd: '8165' }, // Christina Melo Hastenreiter
  '4': { gender: 'F', omd: '14389' }, // Ana Paula Ribeiro Borges
  '5': { gender: 'F', omd: '14201' }, // Camila Ferreira Lameira
  '6': { gender: 'M', omd: '11398' }, // Marcelo Marques
  '7': { gender: 'M', omd: '8281' }, // Orlando Cepa (diretor clínico)
  '8': { gender: 'F', omd: '12366' }, // Veridiana Fumio
  '9': { gender: 'F', hidden: true }, // Andresa Fonseca M. da Silva — fora da lista
  '10': { gender: 'F', omd: '16515' }, // Flávia Paula da Silva Cardoso
  '11': { gender: 'F', hidden: true }, // Andréa Romero Esteves Lima — fora da lista
  '12': { gender: 'F', omd: '15519' }, // Carolina de Andrade Lima Chaves
  '13': { gender: 'F', omd: '14350' }, // Fernanda Maria Peixoto Patrício
  '14': { gender: 'F', hidden: true }, // Sandra Rodriguez — fora da lista
  '15': { gender: 'M', omd: '3036' }, // Éder Quedas Ferreira (questionário: 03036)
  '16': { gender: 'F', omd: '14245' }, // Jessica Arcadier
  '17': { gender: 'M', omd: '2724' }, // Júlio Sérgio Gomes de Souza
  '18': { gender: 'F', omd: '14405' }, // Patrícia Octávio de Oliveira
};

type DoctorContent = Omit<Doctor, 'omd' | 'gender'>;

// ============================================
// Portuguese Doctors Data
// ============================================
const doctorsPT: DoctorContent[] = [
  {
    id: '1',
    name: 'Marcelo F. Natali',
    title: 'Dr.',
    specialties: ['Generalista', 'Reabilitação Oral'],
    photo: '/doctors/marcelo-natali.jpg',
    bio: 'Médico dentista formado há 33 anos, atuando como generalista com ênfase em reabilitação oral fixa e parcial. Atendimento humanizado, baseado na escuta, no respeito ao paciente e na busca por tratamentos seguros, funcionais e confortáveis, sempre focados no bem-estar e na qualidade de vida.',
    languages: ['Português'],
  },
  {
    id: '2',
    name: 'Geane Mendes',
    title: 'Dra.',
    specialties: [
      'Endodontia',
      'Generalista',
      'Prótese Dentária',
      'Cirurgia Oral',
    ],
    photo: '/doctors/geane-mendes.jpg',
    bio: 'Médica Dentista com mais de 25 anos de experiência clínica, há 9 anos no Centro Dentário Colombo. Com especialização em Endodontia e mestrado, dedica-se à avaliação, diagnóstico, prevenção e tratamento de doenças orais, com cuidados personalizados e foco na saúde oral e no bem-estar de cada paciente.',
    education: [
      'Medicina Dentária — Universidade de Santo Amaro (UNISA), São Paulo, 1999',
      'Especialização em Endodontia — Universidade de Santo Amaro, 2001',
      'Mestrado — João Pessoa, 2018',
      'Pós-graduação em Cirurgia — Universidade Egas Moniz, 2026',
    ],
    languages: ['Português', 'Francês'],
  },
  {
    id: '3',
    name: 'Christina Melo Hastenreiter',
    title: 'Dra.',
    specialties: ['Ortopedia Funcional dos Maxilares', 'Ortodontia Corretiva'],
    photo: '/doctors/christina-hastenreiter.jpg',
    bio: 'Atua na área de Ortopedia Funcional dos Maxilares e Ortodontia Corretiva. Trabalho focado no diagnóstico e tratamento das alterações dentofaciais, promovendo função, estética e equilíbrio do sistema estomatognático.',
    languages: ['Português'],
  },
  {
    id: '4',
    name: 'Ana Paula Ribeiro Borges',
    title: 'Dra.',
    specialties: ['Ortodontia'],
    photo: '/doctors/ana-paula-borges.jpg',
    bio: 'Ortodontista com mais de 20 anos de experiência, dedicada a entregar com excelência sorrisos funcionais e harmoniosos, sempre com empatia e compromisso ao longo de toda a sua carreira.',
    languages: ['Português'],
  },
  {
    id: '5',
    name: 'Camila F. Lameira',
    title: 'Dra.',
    specialties: ['Ortodontia', 'Ortopedia', 'Odontopediatria'],
    photo: '/doctors/camila-lameira.jpg',
    bio: 'Médica dentista com 20 anos de experiência. Atua em Ortodontia e Ortopedia Funcional dos Maxilares, com paixão pela Odontopediatria. Acredita que compreender cada paciente é essencial para transformar sorrisos com confiança.',
    languages: ['Português'],
  },
  {
    id: '6',
    name: 'Marcelo Marques',
    title: 'Dr.',
    specialties: [
      'Reabilitação Oral',
      'Implantes Dentários',
      'Dentisteria Estética',
      'Prótese Dentária',
    ],
    photo: '/doctors/marcelo-marques.jpg',
    bio: 'Médico Dentista com mais de 30 anos de experiência clínica, há 12 anos no Centro Dentário Colombo. Dedica-se a pacientes que precisam de reabilitação oral, implantes ou que querem mudar a estética do sorriso. Acredita que bons sentimentos, boa alimentação e uma boca saudável com um belo sorriso são os pilares da felicidade.',
    education: [
      'Medicina Dentária — UNIUBE, 1992',
      'Especialização em Dentisteria Restauradora — ABO, 1997',
      'Mestrado — CESPU, 2010',
      'Pós-graduação em Implantologia — ILAPEO, 2012',
      'Cursos de Prótese Fixa (1995), Oclusão (2000) e Periodontia (2008) — ABO',
    ],
    languages: ['Português'],
  },
  {
    id: '7',
    name: 'Orlando Cepa',
    title: 'Dr.',
    specialties: ['Reabilitação Oral', 'Dentisteria', 'Prótese Dentária'],
    photo: '/doctors/orlando-cepa.jpg',
    bio: 'Com uma carreira distinta que inclui formação em Medicina Dentária na FMDUP, experiência clínica e um foco em reabilitação oral, dentisteria e prótese dentária, trabalhando com uma equipa experiente na clínica.',
    education: [
      'Medicina Dentária - FMDUP (Faculdade de Medicina Dentária da Universidade do Porto)',
    ],
    languages: ['Português'],
  },
  {
    id: '8',
    name: 'Veridiana Fumio',
    title: 'Dra.',
    specialties: [
      'Implantologia',
      'Cirurgia Oral',
      'Dentisteria',
      'Prostodontia',
    ],
    photo: '/doctors/veridiana-fumio.jpeg',
    bio: 'Médica Dentista com atuação em Implantologia, Cirurgia Oral, Dentisteria e Prótese Dentária. Realiza desde tratamentos restauradores e reabilitações estéticas até cirurgias e colocação de implantes, sempre focando no conforto, funcionalidade e bem-estar do paciente.',
    languages: ['Português'],
  },
  {
    id: '9',
    name: 'Andresa Fonseca M. da Silva',
    title: 'Dra.',
    specialties: ['Generalista', 'Endodontia'],
    photo: '/doctors/andrea-fonseca.jpg',
    bio: 'Atendimento humanizado para adultos e crianças. Possui pós-graduação em diversas áreas como Endodontia, Implantologia, Cirurgia Oral Menor e Prótese, garantindo um cuidado abrangente e de qualidade.',
    education: [
      'Pós-graduação em Endodontia',
      'Pós-graduação em Implantologia',
      'Pós-graduação em Cirurgia Oral Menor',
      'Pós-graduação em Prótese',
    ],
    languages: ['Português'],
  },
  {
    id: '10',
    name: 'Flavia Paula Silva Cardoso',
    title: 'Dra.',
    specialties: ['Generalista', 'Odontopediatria', 'Cirurgia Oral'],
    photo: '/doctors/flavia-paula.jpg',
    bio: 'Médica Dentista Generalista com pós-graduação em cirurgia de dentes inclusos. Atua realizando atendimentos a pacientes de todas as idades, com foco especial em Odontopediatria.',
    education: ['Pós-graduação em Cirurgia de Dentes Inclusos'],
    languages: ['Português'],
  },
  {
    id: '11',
    name: 'Andréa Romero Esteves Lima',
    title: 'Dra.',
    specialties: [
      'Reabilitação Oral',
      'Dentisteria Estética',
      'Periodontologia',
    ],
    photo: '/doctors/andrea-romero.jpeg',
    bio: 'Atua em Prótese e Dentisteria, executa tratamentos restauradores em geral como coroas e facetas em resina e porcelana, periodontologia e pequenas cirurgias. Formação em implantes e prótese sobre implantes.',
    education: [
      'Formação em Prótese',
      'Formação em Dentisteria',
      'Formação em Implantes e Prótese sobre Implantes',
      'Formação em Periodontologia',
    ],
    languages: ['Português'],
  },
  {
    id: '12',
    name: 'Carolina Chaves',
    title: 'Dra.',
    specialties: ['Prostodontia', 'Implantes Dentários'],
    photo: '/doctors/carolina-chaves.jpg',
    bio: 'Doutorada (PhD) em Reabilitação Oral, com mais de 10 anos de experiência clínica e investigação. Formação avançada em Cirurgia de Implantes e Prótese sobre Implantes. Investigadora em biomateriais para reabilitação oral, com publicações em revistas científicas internacionais.',
    education: [
      'Doutoramento (PhD) em Reabilitação Oral — UNESP',
      'Formação em Cirurgia de Implantes',
      'Formação em Prótese sobre Implantes',
      'Investigação - São Paulo State University',
      'Investigação - University of Montreal',
    ],
    achievements: ['Publicações em revistas científicas internacionais'],
    languages: ['Português', 'Inglês', 'Francês'],
  },
  {
    id: '13',
    name: 'Fernanda P. Patrício',
    title: 'Dra.',
    specialties: ['Generalista', 'Cirurgia Oral'],
    photo: '/doctors/fernanda-patricio.jpg',
    bio: 'Médica dentista formada há 18 anos, atuando como generalista com foco em cirurgia oral. Acredita num atendimento verdadeiramente humanizado, baseado na escuta atenta, na confiança e no cuidado individualizado de cada paciente.',
    languages: ['Português'],
  },
  {
    id: '14',
    name: 'Sandra Rodriguez',
    title: 'Dra.',
    specialties: ['Clínica Geral'],
    photo: '/doctors/sandra-rodrigues.jpg',
    bio: 'Médica dentista formada há 20 anos. Apaixonada pelo trabalho clínico e pela aplicação da evidência científica para oferecer aos pacientes tratamentos de última geração com calor humano.',
    languages: ['Português'],
  },
  {
    id: '15',
    name: 'Éder Quedas Ferreira',
    title: 'Dr.',
    specialties: [
      'Generalista',
      'Dentisteria Estética',
      'Endodontia',
      'Periodontia',
      'Cirurgia Oral',
    ],
    photo: '/doctors/eder-quedas.jpg',
    bio: 'Médico Dentista com mais de 40 anos de experiência clínica, formado pela Universidade de Mogi das Cruzes (São Paulo, Brasil). Exerce em Portugal desde 1989 e está há 14 anos no Centro Dentário Colombo. Atua em Dentisteria, Endodontia, Periodontia, Cirurgia Oral e Prótese, cuidando do sorriso de cada paciente com empatia, dedicação e foco no seu bem-estar.',
    education: [
      'Medicina Dentária — Universidade de Mogi das Cruzes (UMC), 1983',
    ],
    languages: ['Português', 'Inglês', 'Francês'],
  },
  {
    id: '16',
    name: 'Jessica Arcadier',
    title: 'Dra.',
    specialties: ['Periodontia', 'Prótese Fixa', 'Dentisteria Estética'],
    photo: '/doctors/jessica-arcadier.jpg',
    bio: 'Atua em Periodontia, tratando doenças e realizando cirurgias nos tecidos de suporte dos dentes. Possui formação em Dentisteria Estética, com foco em restaurações e reabilitações fixas que unem função e harmonia do sorriso.',
    languages: ['Português'],
  },
  {
    id: '17',
    name: 'Júlio Souza',
    title: 'Dr.',
    specialties: ['Cirurgia Oral'],
    photo: '/doctors/julio-souza.jpg',
    bio: 'Médico dentista com mais de 40 anos de experiência clínica, reconhecido pelo atendimento humanizado, bem-humorado e pela realização de extrações com conforto, tranquilidade e segurança.',
    languages: ['Português'],
  },
  {
    id: '18',
    name: 'Patricia Octávio',
    title: 'Dra.',
    specialties: [
      'Implantes Dentários',
      'Cirurgia',
      'Prótese Fixa',
      'Prótese Removível',
      'Reabilitação Oral',
    ],
    photo: '/doctors/patricia-octavio.jpg',
    bio: 'Com 28 anos de experiência em Cirurgia Oral Avançada, Implantes Avançados, Próteses sobre Implantes e Reabilitação Oral, devolvendo função mastigatória e estética ao paciente.',
    languages: ['Português'],
  },
];

// ============================================
// English Doctors Data
// ============================================
const doctorsEN: DoctorContent[] = [
  {
    id: '1',
    name: 'Marcelo F. Natali',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Oral Rehabilitation'],
    photo: '/doctors/marcelo-natali.jpg',
    bio: 'Dentist with 33 years of experience, practicing as a general dentist with emphasis on fixed and partial oral rehabilitation. Humanized care based on listening, respect for the patient, and the pursuit of safe, functional, and comfortable treatments, always focused on well-being and quality of life.',
    languages: ['Portuguese'],
  },
  {
    id: '2',
    name: 'Geane Mendes',
    title: 'Dr.',
    specialties: [
      'Endodontics',
      'General Dentistry',
      'Dental Prosthetics',
      'Oral Surgery',
    ],
    photo: '/doctors/geane-mendes.jpg',
    bio: "Dentist with over 25 years of clinical experience, 9 of them at Centro Dentário Colombo. With a specialisation in Endodontics and a master's degree, she focuses on the assessment, diagnosis, prevention and treatment of oral diseases, with personalised care centred on each patient's oral health and well-being.",
    education: [
      'Dental Medicine — Universidade de Santo Amaro (UNISA), São Paulo, 1999',
      'Specialisation in Endodontics — Universidade de Santo Amaro, 2001',
      "Master's degree — João Pessoa, 2018",
      'Postgraduate in Surgery — Universidade Egas Moniz, 2026',
    ],
    languages: ['Portuguese', 'French'],
  },
  {
    id: '3',
    name: 'Christina Melo Hastenreiter',
    title: 'Dr.',
    specialties: ['Functional Jaw Orthopedics', 'Corrective Orthodontics'],
    photo: '/doctors/christina-hastenreiter.jpg',
    bio: 'Works in the area of Functional Jaw Orthopedics and Corrective Orthodontics. Focused on the diagnosis and treatment of dentofacial alterations, promoting function, aesthetics, and balance of the stomatognathic system.',
    languages: ['Portuguese'],
  },
  {
    id: '4',
    name: 'Ana Paula Ribeiro Borges',
    title: 'Dr.',
    specialties: ['Orthodontics'],
    photo: '/doctors/ana-paula-borges.jpg',
    bio: 'Orthodontist with over 20 years of experience, dedicated to delivering functional and harmonious smiles with excellence, always with empathy and commitment throughout her career.',
    languages: ['Portuguese'],
  },
  {
    id: '5',
    name: 'Camila F. Lameira',
    title: 'Dr.',
    specialties: ['Orthodontics', 'Orthopedics', 'Pediatric Dentistry'],
    photo: '/doctors/camila-lameira.jpg',
    bio: 'Dentist with 20 years of experience. Practises Orthodontics and Functional Jaw Orthopedics, with a passion for Pediatric Dentistry. Believes that understanding each patient is essential to transforming smiles with confidence.',
    languages: ['Portuguese'],
  },
  {
    id: '6',
    name: 'Marcelo Marques',
    title: 'Dr.',
    specialties: [
      'Oral Rehabilitation',
      'Dental Implants',
      'Cosmetic Dentistry',
      'Dental Prosthetics',
    ],
    photo: '/doctors/marcelo-marques.jpg',
    bio: 'Dentist with over 30 years of clinical experience, 12 of them at Centro Dentário Colombo. He focuses on patients who need oral rehabilitation or implants, or who want to change the aesthetics of their smile. He believes that good feelings, good nutrition and a healthy mouth with a beautiful smile are the pillars of happiness.',
    education: [
      'Dental Medicine — UNIUBE, 1992',
      'Specialisation in Restorative Dentistry — ABO, 1997',
      "Master's degree — CESPU, 2010",
      'Postgraduate in Implantology — ILAPEO, 2012',
      'Courses in Fixed Prosthetics (1995), Occlusion (2000) and Periodontics (2008) — ABO',
    ],
    languages: ['Portuguese'],
  },
  {
    id: '7',
    name: 'Orlando Cepa',
    title: 'Dr.',
    specialties: [
      'Oral Rehabilitation',
      'Restorative Dentistry',
      'Dental Prosthetics',
    ],
    photo: '/doctors/orlando-cepa.jpg',
    bio: 'With a distinguished career including training in Dental Medicine at FMDUP, clinical experience and a focus on oral rehabilitation, restorative dentistry, and dental prosthetics, working with an experienced team at the clinic.',
    education: [
      'Dental Medicine - FMDUP (Faculty of Dental Medicine, University of Porto)',
    ],
    languages: ['Portuguese'],
  },
  {
    id: '8',
    name: 'Veridiana Fumio',
    title: 'Dr.',
    specialties: [
      'Implantology',
      'Oral Surgery',
      'Restorative Dentistry',
      'Prosthodontics',
    ],
    photo: '/doctors/veridiana-fumio.jpeg',
    bio: 'Dentist practicing in Implantology, Oral Surgery, Restorative Dentistry, and Dental Prosthetics. Performs everything from restorative treatments and aesthetic rehabilitations to surgeries and implant placement, always focusing on patient comfort, functionality, and well-being.',
    languages: ['Portuguese'],
  },
  {
    id: '9',
    name: 'Andresa Fonseca M. da Silva',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Endodontics'],
    photo: '/doctors/andrea-fonseca.jpg',
    bio: 'Humanized care for adults and children. Holds postgraduate degrees in various areas such as Endodontics, Implantology, Minor Oral Surgery, and Prosthetics, ensuring comprehensive and quality care.',
    education: [
      'Postgraduate in Endodontics',
      'Postgraduate in Implantology',
      'Postgraduate in Minor Oral Surgery',
      'Postgraduate in Prosthetics',
    ],
    languages: ['Portuguese'],
  },
  {
    id: '10',
    name: 'Flavia Paula Silva Cardoso',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Pediatric Dentistry', 'Oral Surgery'],
    photo: '/doctors/flavia-paula.jpg',
    bio: 'General Dentist with a postgraduate degree in impacted tooth surgery. Provides care to patients of all ages, with special focus on Pediatric Dentistry.',
    education: ['Postgraduate in Impacted Tooth Surgery'],
    languages: ['Portuguese'],
  },
  {
    id: '11',
    name: 'Andréa Romero Esteves Lima',
    title: 'Dr.',
    specialties: [
      'Oral Rehabilitation',
      'Cosmetic Dentistry',
      'Periodontology',
    ],
    photo: '/doctors/andrea-romero.jpeg',
    bio: 'Practises Prosthetics and Restorative Dentistry, performing general restorative treatments such as resin and porcelain crowns and veneers, periodontology, and minor surgeries. Trained in implants and implant-supported prosthetics.',
    education: [
      'Training in Prosthetics',
      'Training in Restorative Dentistry',
      'Training in Implants and Implant-Supported Prosthetics',
      'Training in Periodontology',
    ],
    languages: ['Portuguese'],
  },
  {
    id: '12',
    name: 'Carolina Chaves',
    title: 'Dr.',
    specialties: ['Prosthodontics', 'Dental Implants'],
    photo: '/doctors/carolina-chaves.jpg',
    bio: 'PhD in Oral Rehabilitation, with over 10 years of clinical experience and research. Advanced training in Implant Surgery and Implant-Supported Prosthetics. Researcher in biomaterials for oral rehabilitation, with publications in international scientific journals.',
    education: [
      'PhD in Oral Rehabilitation — UNESP',
      'Training in Implant Surgery',
      'Training in Implant-Supported Prosthetics',
      'Research - São Paulo State University',
      'Research - University of Montreal',
    ],
    achievements: ['Publications in international scientific journals'],
    languages: ['Portuguese', 'English', 'French'],
  },
  {
    id: '13',
    name: 'Fernanda P. Patrício',
    title: 'Dr.',
    specialties: ['General Dentistry', 'Oral Surgery'],
    photo: '/doctors/fernanda-patricio.jpg',
    bio: 'Dentist with 18 years of experience, practicing as a general dentist with a focus on oral surgery. Believes in truly humanized care based on attentive listening, trust, and individualized care for each patient.',
    languages: ['Portuguese'],
  },
  {
    id: '14',
    name: 'Sandra Rodriguez',
    title: 'Dr.',
    specialties: ['General Practice'],
    photo: '/doctors/sandra-rodrigues.jpg',
    bio: 'Dentist with 20 years of experience. Passionate about clinical work and applying scientific evidence to offer patients state-of-the-art treatments with human warmth.',
    languages: ['Portuguese'],
  },
  {
    id: '15',
    name: 'Éder Quedas Ferreira',
    title: 'Dr.',
    specialties: [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Endodontics',
      'Periodontics',
      'Oral Surgery',
    ],
    photo: '/doctors/eder-quedas.jpg',
    bio: 'Dentist with over 40 years of clinical experience, graduated from the University of Mogi das Cruzes (São Paulo, Brazil). He has practised in Portugal since 1989 and has been at Centro Dentário Colombo for 14 years. He works in Restorative Dentistry, Endodontics, Periodontics, Oral Surgery and Prosthetics, caring for each patient’s smile with empathy, dedication and a focus on their well-being.',
    education: ['Dental Medicine — University of Mogi das Cruzes (UMC), 1983'],
    languages: ['Portuguese', 'English', 'French'],
  },
  {
    id: '16',
    name: 'Jessica Arcadier',
    title: 'Dr.',
    specialties: ['Periodontics', 'Fixed Prosthetics', 'Cosmetic Dentistry'],
    photo: '/doctors/jessica-arcadier.jpg',
    bio: 'Practises Periodontics, treating diseases and performing surgeries on tooth-supporting tissues. Trained in Cosmetic Dentistry, focusing on restorations and fixed rehabilitations that combine function and smile harmony.',
    languages: ['Portuguese'],
  },
  {
    id: '17',
    name: 'Júlio Souza',
    title: 'Dr.',
    specialties: ['Oral Surgery'],
    photo: '/doctors/julio-souza.jpg',
    bio: 'Dentist with over 40 years of clinical experience, recognized for humanized, good-humored care and performing extractions with comfort, tranquility, and safety.',
    languages: ['Portuguese'],
  },
  {
    id: '18',
    name: 'Patricia Octávio',
    title: 'Dr.',
    specialties: [
      'Dental Implants',
      'Surgery',
      'Fixed Prosthetics',
      'Removable Prosthetics',
      'Oral Rehabilitation',
    ],
    photo: '/doctors/patricia-octavio.jpg',
    bio: 'With 28 years of experience in Advanced Oral Surgery, Advanced Implants, Implant-Supported Prosthetics, and Oral Rehabilitation, restoring chewing function and aesthetics to patients.',
    languages: ['Portuguese'],
  },
];

// ============================================
// Export function to get doctors by language
// ============================================
const withProfessionalIds = (list: DoctorContent[]): Doctor[] =>
  list
    .filter(doctor => !PROFESSIONAL_IDS[doctor.id]?.hidden)
    .map(doctor => {
      const { omd, gender } = PROFESSIONAL_IDS[doctor.id] ?? {
        gender: 'M' as const,
      };
      return { ...doctor, gender, ...(omd ? { omd } : {}) };
    });

const doctorsPTFull = withProfessionalIds(doctorsPT);
const doctorsENFull = withProfessionalIds(doctorsEN);

export function getDoctors(language: string): Doctor[] {
  return language === 'en' ? doctorsENFull : doctorsPTFull;
}

// Default export for backward compatibility
export const doctors = doctorsPTFull;
export default doctors;
