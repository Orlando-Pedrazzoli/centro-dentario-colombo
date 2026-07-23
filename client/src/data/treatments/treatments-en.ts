// 📄 client/src/data/treatments/treatments-en.ts
//
// English translation of the official specialties content
// approved by Centro Dentário Colombo's clinical team (Jul/2026).
// ⚠️ Slugs must match treatments-pt.ts — do not change (SEO).

import type { Treatment } from './types';

export const treatmentsEN: Treatment[] = [
  // ============================================
  // 1. IMPLANTOLOGY
  // ============================================
  {
    id: 'implantologia',
    title: 'Implantology',
    slug: 'implantologia',
    subtitle: 'Dental Implants and Fixed Rehabilitation',
    description:
      'Replace missing teeth with fixed, stable, personalised solutions — dental implants with CBCT diagnosis and digital planning.',
    hero: {
      title: 'Rediscover the pleasure of smiling and chewing naturally.',
      subtitle:
        'Implantology allows you to replace missing teeth with fixed, stable and personalised solutions, restoring comfort, functionality and a natural smile.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'Much more than replacing a tooth.',
      text: 'Losing one or more teeth can affect much more than aesthetics. It can compromise chewing, speech, confidence and quality of life. At Centro Dentário Colombo, every treatment plan is developed individually, with computed tomography (CBCT) diagnosis and modern Implantology techniques, to restore function, comfort and a harmonious, natural result.',
    },
    whatIs:
      'Implantology is the field of Dentistry dedicated to replacing missing teeth with titanium dental implants, which act as a new root to support crowns, bridges or fixed prostheses. The goal is not only to fill the gap left by tooth loss, but to restore chewing function, preserve the bone and bring back a natural-looking smile.',
    indications: [
      'You have lost a single tooth.',
      'You have lost several teeth.',
      'You need to replace all the teeth in one arch.',
      'You find removable dentures difficult to use.',
      'You are looking for a fixed, long-lasting solution.',
    ],
    availableTreatments: [
      {
        name: 'Single dental implant',
        description:
          'Replacement of a single tooth with full aesthetic and functional integration.',
      },
      {
        name: 'Multiple implants',
        description:
          'A solution to replace several missing teeth while preserving comfort and stability.',
      },
      {
        name: 'Full-arch rehabilitation with fixed hybrid prosthesis (All-on-4 / All-on-6)',
        description:
          'Treatment for patients with total tooth loss, restoring a complete arch supported by implants.',
      },
      {
        name: 'Immediate loading',
        description:
          'In selected cases, a provisional prosthesis can be placed on the very day of surgery.',
      },
      {
        name: 'Bone grafting',
        description:
          'When necessary, bone regeneration procedures are performed to create the ideal conditions for implant placement.',
      },
    ],
    steps: [
      {
        title: 'Clinical assessment and digital diagnosis',
        description:
          'Personalised planning using computed tomography (CBCT) and complementary exams.',
      },
      {
        title: 'Treatment planning',
        description: 'Defining the most suitable solution for each case.',
      },
      {
        title: 'Implant placement',
        description:
          'Procedure performed with modern techniques and high clinical rigour.',
      },
      {
        title: 'Osseointegration',
        description:
          'Healing period that allows the implant to bond with the bone.',
      },
      {
        title: 'Final rehabilitation',
        description:
          'Placement of the final crown or prosthesis, carefully adapted for a functional and aesthetic result.',
      },
    ],
    benefits: [
      'Restored chewing function.',
      'Greater stability and comfort.',
      'Natural appearance.',
      'Preservation of bone structure.',
      'Improved speech.',
      'More confidence to smile.',
    ],
    whyChoose: [
      'Personalised diagnosis with computed tomography (CBCT).',
      'Precise digital planning.',
      'Team experienced in oral rehabilitation.',
      'Solutions tailored to each patient.',
      'Support at every stage of the treatment.',
      'Open until 11pm — including emergency care.',
    ],
    ctaHeadline: 'Regain the comfort, function and confidence to smile again.',
    faq: [
      {
        question: 'Is implant placement painful?',
        answer:
          'The procedure is performed under local anaesthesia, so during surgery the most common sensation is pressure, not pain. Afterwards, there may be some discomfort over the following days, easily managed with painkillers recommended by our team.',
      },
      {
        question: 'How long does a dental implant last?',
        answer:
          'With proper care — regular oral hygiene and maintenance appointments — a dental implant can last for decades. The long-term success rate is above 95%.',
      },
      {
        question: 'Can every patient get implants?',
        answer:
          'The vast majority of adult patients are candidates for implants. The prior assessment, which includes computed tomography (CBCT), shows the quantity and quality of available bone. In some cases, a bone graft may be needed before the implant is placed.',
      },
      {
        question: 'What is a fixed hybrid prosthesis?',
        answer:
          'The fixed hybrid prosthesis (All-on-4 or All-on-6) is a fixed solution that replaces a complete dental arch supported on 4 or 6 implants. It is an alternative to removable dentures, offering stability, comfort and a natural appearance.',
      },
      {
        question: 'Is it possible to get fixed teeth on the same day?',
        answer:
          'In carefully selected cases, it is possible to leave surgery with a provisional prosthesis on the same day — the so-called immediate loading protocol. The feasibility of this option is assessed case by case.',
      },
      {
        question: 'How should I care for my implants after treatment?',
        answer:
          'Daily care is similar to natural teeth — regular brushing, flossing and periodic oral hygiene appointments. Regular maintenance is essential to ensure the longevity of the implant.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1660732205497-f284ab0be4e9?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776813397-5c4d5c9e149f?w=800&h=500&fit=crop',
    keywords: [
      'implantology',
      'dental implants',
      'dental implant lisbon',
      'all-on-4',
      'all-on-6',
      'immediate loading',
      'bone graft',
      'CBCT scan',
    ],
  },

  // ============================================
  // 2. ORTHODONTICS
  // ============================================
  {
    id: 'ortodontia',
    title: 'Orthodontics',
    slug: 'ortodontia',
    subtitle: 'Fixed Braces and Clear Aligners',
    description:
      'Correct the alignment of your teeth and bite with solutions tailored to each patient — fixed braces, ceramic brackets and clear aligners.',
    hero: {
      title: 'An aligned smile starts with a personalised plan.',
      subtitle:
        'Orthodontics corrects the alignment of the teeth and bite through solutions tailored to each patient, improving not only aesthetics but also oral health and chewing function.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'Much more than straight teeth.',
      text: 'A balanced smile goes beyond aesthetics. Properly aligned teeth make oral hygiene easier, contribute to efficient chewing and help preserve the health of the gums and the temporomandibular joint. At Centro Dentário Colombo, every orthodontic treatment is individually planned, respecting the needs, age and goals of each patient.',
    },
    whatIs:
      'Orthodontics is the specialty of Dentistry dedicated to the diagnosis, prevention and correction of the position of the teeth and the bite. Treatment aims to improve oral function, the aesthetics of the smile and the long-term stability of the results.',
    indications: [
      'Misaligned teeth.',
      'Gaps between teeth.',
      'Overlapping teeth.',
      'Crossbite, open bite or deep bite.',
      'Occlusion problems.',
      'Preparation for aesthetic treatments or rehabilitations.',
    ],
    availableTreatments: [
      {
        name: 'Metal fixed braces',
        description:
          'Effective treatment for orthodontic corrections of varying levels of complexity.',
      },
      {
        name: 'Aesthetic fixed braces',
        description:
          'Discreet ceramic brackets for a more harmonious look during treatment.',
      },
      {
        name: 'Clear aligners',
        description:
          'A practically invisible, removable and comfortable solution for many tooth-alignment cases.',
      },
      {
        name: 'Children\u2019s orthodontics',
        description:
          'Monitoring children\u2019s dental growth and development.',
      },
      {
        name: 'Orthodontics for adults',
        description:
          'Personalised treatments for anyone wishing to improve their smile at any stage of life.',
      },
      {
        name: 'Post-treatment retention',
        description:
          'Included in the follow-up to ensure the stability of the results.',
      },
    ],
    extraInfo: {
      title: 'Treatment duration',
      text: 'Duration varies with the complexity of each case. In general, treatments last between 12 and 24 months, with periodic follow-up appointments. The detailed plan is defined at the initial assessment.',
    },
    steps: [
      {
        title: 'Clinical assessment',
        description: 'Analysis of the bite, smile and facial structure.',
      },
      {
        title: 'Complementary exams',
        description:
          'X-rays, photographs and intraoral scanning when necessary.',
      },
      {
        title: 'Personalised planning',
        description: 'Defining the best approach for each case.',
      },
      {
        title: 'Orthodontic treatment',
        description:
          'Periodic follow-up to ensure safe and predictable progress.',
      },
      {
        title: 'Retention',
        description:
          'After alignment, retainers are used to maintain the results achieved.',
      },
    ],
    benefits: [
      'A more harmonious smile.',
      'Improved bite.',
      'Easier oral hygiene.',
      'Reduced tooth wear.',
      'Better chewing function.',
      'More confidence when smiling.',
    ],
    whyChoose: [
      'Personalised diagnosis.',
      'Different treatment options adapted to each case.',
      'Continuous follow-up including post-treatment retention.',
      'Solutions for children, teenagers and adults.',
      'Open until 11pm for emergencies.',
    ],
    ctaHeadline:
      'An aligned smile can transform much more than your appearance.',
    faq: [
      {
        question: 'What is the ideal age to start orthodontic treatment?',
        answer:
          'There is no single ideal age. For children, the first orthodontic assessment is recommended around age 7, to monitor dental development. For adults, treatment is equally effective and increasingly common.',
      },
      {
        question: 'Can adults wear braces too?',
        answer:
          'Yes. Orthodontics for adults is very common today, with a wide range of discreet solutions such as clear aligners and ceramic brackets, allowing you to treat your smile without compromising your image during the process.',
      },
      {
        question:
          'What is the difference between fixed braces and clear aligners?',
        answer:
          'Fixed braces (metal or ceramic) are bonded to the teeth and work continuously, being indicated for more complex cases. Aligners are removable, practically invisible and more comfortable, and are suitable for many alignment cases.',
      },
      {
        question: 'How long does orthodontic treatment take?',
        answer:
          'Duration varies with the complexity of each case. In general, treatments last between 12 and 24 months. The detailed plan is defined at the initial assessment.',
      },
      {
        question: 'Is the treatment painful?',
        answer:
          'In the first few days after each adjustment there may be some sensitivity or pressure in the teeth. This discomfort is temporary and quickly subsides as treatment progresses.',
      },
      {
        question: 'Do I need to wear a retainer after treatment?',
        answer:
          'Yes. After the teeth are aligned, retention is essential to maintain the results. The retainer can be fixed (bonded to the inner surface of the teeth) or removable, and is included in the treatment follow-up.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop',
    keywords: [
      'orthodontics',
      'braces',
      'clear aligners',
      'fixed braces',
      'ceramic brackets',
      'children orthodontics',
      'adult orthodontics',
    ],
  },

  // ============================================
  // 3. COSMETIC DENTISTRY
  // ============================================
  {
    id: 'estetica-dentaria',
    title: 'Cosmetic Dentistry',
    slug: 'estetica-dentaria',
    subtitle: 'Veneers, Whitening and a Natural Smile',
    description:
      'Enhance the harmony of your smile with whitening, ceramic or composite veneers and aesthetic reconstructions — always with natural results.',
    hero: {
      title: 'Enhance your smile, naturally.',
      subtitle:
        'Cosmetic Dentistry combines science, technique and sensitivity to improve the harmony of the smile, respecting the unique characteristics of each patient.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'A beautiful smile begins with balance.',
      text: 'Every smile is unique. Small changes to the shape, colour or proportion of the teeth can significantly transform the expression of the face, while always preserving naturalness. At Centro Dentário Colombo, every treatment is carefully planned to achieve elegant, functional and long-lasting results.',
    },
    whatIs:
      'Cosmetic Dentistry brings together different treatments designed to improve the appearance of the smile without compromising oral health. The goal is a harmonious result that respects the anatomy, function and individual characteristics of each patient.',
    indications: [
      'Changes in tooth colour.',
      'Tooth wear.',
      'Small fractures.',
      'Gaps between teeth.',
      'Irregularities in shape or size.',
      'Dissatisfaction with your smile.',
    ],
    availableTreatments: [
      {
        name: 'Teeth Whitening',
        description:
          'Safe, clinically supervised whitening that respects each patient\u2019s sensitivity and restores the natural brightness of the smile.',
      },
      {
        name: 'Ceramic (Porcelain) Veneers',
        description:
          'Custom-made laboratory veneers with high durability and an appearance identical to natural enamel.',
      },
      {
        name: 'Composite Resin Veneers',
        description:
          'Applied directly at the appointment, they are a more affordable option with immediate results. If repair is ever needed, the process is also simpler.',
      },
      {
        name: 'Aesthetic Reconstructions',
        description: 'Resin restorations that restore aesthetics and function.',
      },
      {
        name: 'Tooth Recontouring',
        description:
          'Small adjustments to tooth anatomy to improve the harmony of the smile.',
      },
      {
        name: 'Aesthetic Rehabilitation',
        description:
          'Comprehensive planning that combines different treatments for a balanced smile.',
      },
    ],
    steps: [
      {
        title: 'Aesthetic assessment',
        description:
          'Understanding your expectations and analysing your smile.',
      },
      {
        title: 'Personalised planning',
        description: 'Defining the most suitable treatment.',
      },
      {
        title: 'Clinical execution',
        description: 'Carrying out the procedures with high-quality materials.',
      },
      {
        title: 'Final adjustments',
        description:
          'Refining the shape, colour and integration of the result.',
      },
      {
        title: 'Follow-up',
        description: 'Monitoring to preserve the results over time.',
      },
    ],
    benefits: [
      'A more harmonious smile.',
      'Natural appearance.',
      'Greater confidence.',
      'Improved tooth proportion.',
      'Personalised results.',
      'Preservation of tooth structure whenever possible.',
    ],
    whyChoose: [
      'Individualised aesthetic planning.',
      'High-quality materials.',
      'Conservative approach.',
      'Integration of aesthetics and function.',
      'Natural, personalised results.',
    ],
    ctaHeadline: 'A harmonious smile can make all the difference.',
    faq: [
      {
        question: 'Does whitening damage the teeth?',
        answer:
          'When carried out under clinical supervision and with the right products, teeth whitening is safe. The process may cause some temporary sensitivity, which disappears after treatment. We never recommend whitening without a prior assessment.',
      },
      {
        question: 'How long does whitening last?',
        answer:
          'Whitening results vary according to the patient\u2019s habits. In general, they last between 1 and 3 years. Small periodic touch-ups help prolong the results.',
      },
      {
        question: 'What are dental veneers?',
        answer:
          'Veneers are very thin shells applied to the front surface of the teeth, correcting colour, shape, spacing and small imperfections. There is a ceramic version (more durable) and a composite resin version (applied directly at the appointment).',
      },
      {
        question: 'What is the difference between resin and ceramic veneers?',
        answer:
          'Ceramic veneers are made in a laboratory, are more durable and stain-resistant, and their aesthetic result is very close to natural enamel. Resin veneers are applied directly by the dentist, are more affordable and easier to repair, but have a shorter lifespan.',
      },
      {
        question: 'Is it possible to close small gaps between teeth?',
        answer:
          'Yes. Small gaps between teeth can be corrected with resin veneers, aesthetic reconstructions or tooth recontouring, depending on the case. In more complex situations, orthodontics may be the most suitable solution.',
      },
      {
        question: 'Do the results look natural?',
        answer:
          'Yes. Our goal is always a harmonious result that integrates naturally with each patient\u2019s face and personality. We use high-quality materials and careful planning to ensure the final result always looks natural.',
      },
    ],
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
      'porcelain veneers',
      'composite veneers',
      'tooth recontouring',
      'natural smile',
    ],
  },

  // ============================================
  // 4. RESTORATIVE DENTISTRY
  // ============================================
  {
    id: 'dentisteria',
    title: 'Restorative Dentistry',
    slug: 'caries',
    subtitle: 'Fillings and Treatment of Dental Lesions',
    description:
      'Prevention, diagnosis and restoration of teeth affected by lesions, fractures or wear — preserving as much natural tooth structure as possible.',
    hero: {
      title: 'Preserving your teeth is always our priority.',
      subtitle:
        'Restorative Dentistry is dedicated to the prevention, diagnosis and restoration of teeth affected by dental lesions, fractures or wear, restoring health, function and aesthetics to your smile.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'Every natural tooth deserves to be preserved.',
      text: 'Whenever possible, the best treatment is to keep the original tooth structure. Using modern techniques and highly aesthetic materials, compromised teeth can be restored, regaining strength, functionality and a natural appearance. At Centro Dentário Colombo, every restoration is planned to blend harmoniously with the surrounding teeth.',
    },
    whatIs:
      'Restorative Dentistry is the field of Dentistry dedicated to the prevention, diagnosis and treatment of dental lesions, such as fractures and enamel wear. Its main goal is to preserve as much of the tooth\u2019s natural structure as possible, restoring its function and aesthetics.',
    indications: [
      'Dental lesions.',
      'Broken or fractured teeth.',
      'Enamel wear.',
      'Deteriorated old fillings.',
      'Changes in tooth shape.',
      'Sensitivity caused by loss of tooth structure.',
    ],
    availableTreatments: [
      {
        name: 'Treatment of dental lesions',
        description:
          'Removal of the lesion and restoration of the tooth with aesthetic materials.',
      },
      {
        name: 'Aesthetic composite resin fillings',
        description:
          'Tooth reconstruction preserving natural shape, function and appearance.',
      },
      {
        name: 'Dental reconstructions',
        description: 'Recovery of teeth with significant loss of structure.',
      },
      {
        name: 'Replacement of old fillings',
        description: 'Renewal of worn or deteriorated restorations.',
      },
      {
        name: 'Fissure sealing',
        description:
          'Preventive protection of the most vulnerable tooth surfaces in children and young adults.',
      },
      {
        name: 'Functional rehabilitation',
        description:
          'Correction of small structural changes to improve comfort and chewing.',
      },
    ],
    steps: [
      {
        title: 'Clinical assessment',
        description: 'Identification of dental changes.',
      },
      {
        title: 'Diagnosis',
        description:
          'Assessment of the extent of the lesion and definition of treatment.',
      },
      {
        title: 'Treatment',
        description:
          'Removal of the compromised area and reconstruction of the tooth.',
      },
      {
        title: 'Adjustments',
        description: 'Bite control, shaping and aesthetic finishing.',
      },
      {
        title: 'Follow-up',
        description:
          'Periodic monitoring to preserve the health of the restored tooth.',
      },
    ],
    benefits: [
      'Preservation of the natural tooth.',
      'Restored chewing function.',
      'Improved aesthetics.',
      'Reduced sensitivity.',
      'Minimally invasive treatments.',
      'Long-lasting results.',
    ],
    whyChoose: [
      'Rigorous diagnosis.',
      'Conservative approach.',
      'High-quality aesthetic materials.',
      'Personalised planning.',
      'Integration of function and aesthetics.',
    ],
    ctaHeadline:
      'Caring for your natural teeth today is an investment in the health of your future smile.',
    faq: [
      {
        question: 'Can a dental lesion be treated without pain?',
        answer:
          'Yes. Treatment is performed under local anaesthesia, so the procedure itself is painless. There may be some sensitivity in the following hours, which quickly disappears.',
      },
      {
        question: 'Are fillings visible?',
        answer:
          'Composite resin fillings are matched to the natural colour of the teeth, becoming practically invisible. The goal is for the restoration to blend harmoniously with the surrounding teeth.',
      },
      {
        question: 'How long does a filling last?',
        answer:
          'The lifespan of a filling depends on its location, the patient\u2019s habits and oral hygiene care. On average, a well-executed restoration can last between 5 and 10 years or more.',
      },
      {
        question: 'Can old fillings be replaced?',
        answer:
          'Yes. Worn, deteriorated or aesthetically outdated fillings can be replaced with modern restorations that are more aesthetic and durable.',
      },
      {
        question: 'When is a filling no longer enough?',
        answer:
          'When the loss of tooth structure is very extensive, a simple filling may not be enough. In these cases, dental crowns or other more comprehensive rehabilitation solutions may be indicated.',
      },
      {
        question: 'How can I prevent new dental lesions?',
        answer:
          'Prevention involves good daily oral hygiene, regular professional hygiene appointments and a balanced diet. In children and young adults, fissure sealing is also an excellent preventive measure.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1743767587921-473b6d079137?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'restorative dentistry',
      'dental filling',
      'treatment of dental lesions',
      'broken tooth',
      'fissure sealing',
      'composite resin',
      'oral health',
    ],
  },

  // ============================================
  // 5. ENDODONTICS
  // ============================================
  {
    id: 'endodontia',
    title: 'Endodontics',
    slug: 'endodontia',
    subtitle: 'Root Canal Treatment and Tooth Preservation',
    description:
      'Treat infections and lesions inside the tooth, relieving pain and preserving the natural tooth — root canal treatment with clinical rigour.',
    hero: {
      title: 'Saving your tooth is our priority.',
      subtitle:
        'Endodontics treats infections and lesions inside the tooth, relieving pain, preserving tooth structure and restoring its function.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'Not every compromised tooth needs to be extracted.',
      text: 'When the dental pulp is affected by deep lesions, trauma or infection, Endodontics can preserve the natural tooth and prevent its loss. Treatment is performed under local anaesthesia, ensuring patient comfort. At Centro Dentário Colombo, every case is handled with clinical rigour and individualised planning.',
    },
    whatIs:
      'Endodontics is the specialty of Dentistry dedicated to the diagnosis and treatment of diseases affecting the dental pulp and the tissues surrounding the tooth root. Endodontic treatment, known as "root canal treatment", eliminates the infection, preserves the tooth and restores its function.',
    indications: [
      'Intense tooth pain.',
      'Prolonged sensitivity to cold or heat.',
      'Deep dental lesions.',
      'Infections at the tooth root.',
      'Dental trauma.',
      'Abscesses.',
      'Changes observed in X-ray exams.',
    ],
    availableTreatments: [
      {
        name: 'Endodontic treatment (root canal treatment)',
        description:
          'Removal of the infection and preservation of the natural tooth, performed under local anaesthesia.',
      },
      {
        name: 'Endodontic retreatment',
        description:
          'A new intervention when a previous treatment needs to be revised.',
      },
      {
        name: 'Treatment of dental trauma',
        description:
          'Clinical approach to preserve teeth affected by accidents.',
      },
      {
        name: 'Assessment of periapical lesions',
        description: 'Diagnosis and monitoring of changes in the root region.',
      },
    ],
    steps: [
      {
        title: 'Clinical assessment',
        description:
          'Identifying the source of the pain and the extent of the lesion.',
      },
      {
        title: 'Diagnosis',
        description: 'X-rays and complementary exams to plan the treatment.',
      },
      {
        title: 'Endodontic treatment',
        description:
          'Removal of the compromised tissue, disinfection of the canals and sealing, under local anaesthesia.',
      },
      {
        title: 'Tooth reconstruction',
        description:
          'After treatment, the tooth is restored to regain strength and function.',
      },
      {
        title: 'Follow-up',
        description: 'Monitoring the healing and stability of the treatment.',
      },
    ],
    benefits: [
      'Pain relief.',
      'Preservation of the natural tooth.',
      'Elimination of infection.',
      'Restored chewing function.',
      'Avoids extractions whenever possible.',
      'Contributes to long-term oral health.',
    ],
    whyChoose: [
      'Precise diagnosis.',
      'Individualised planning.',
      'Modern treatment techniques.',
      'Focus on tooth preservation.',
      'Clinical follow-up after the procedure.',
    ],
    ctaHeadline: 'Preserving a natural tooth is often the best solution.',
    faq: [
      {
        question: 'Does root canal treatment hurt?',
        answer:
          'Treatment is performed under local anaesthesia, so you should not feel pain during the procedure. Afterwards, there may be some sensitivity for a few days, easily managed with painkillers.',
      },
      {
        question: 'How long does the treatment take?',
        answer:
          'Endodontic treatment can be performed in one or several appointments, depending on the complexity of the case. In many situations, it can be completed in a single session.',
      },
      {
        question: 'Does the tooth become weaker after treatment?',
        answer:
          'After endodontic treatment, the tooth loses its sensitivity but keeps its structure. To protect it and restore its strength, it is often necessary to place a dental crown, especially on back teeth.',
      },
      {
        question: 'Is it always possible to save a tooth?',
        answer:
          'Not always. In some cases, the condition of the tooth or the supporting bone does not allow its preservation. Clinical and radiographic assessment determines whether endodontic treatment is viable or whether extraction is the best option.',
      },
      {
        question: 'When does a root canal treatment need to be repeated?',
        answer:
          'In some cases, endodontic treatment may need to be repeated — for example, when infection persists or when canals were not fully treated in the first intervention. Retreatment allows the tooth to be preserved in most cases.',
      },
      {
        question: 'How should I care for the tooth after treatment?',
        answer:
          'Care is similar to your other teeth — regular brushing and flossing. If a crown was placed, avoid biting hard objects with that tooth. Follow-up appointments are important to monitor healing.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1658847075814-bf9a341c91e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=500&fit=crop',
    keywords: [
      'endodontics',
      'root canal treatment',
      'root canal',
      'toothache',
      'dental infection',
      'dental abscess',
      'endodontic retreatment',
    ],
  },

  // ============================================
  // 6. PERIODONTOLOGY
  // ============================================
  {
    id: 'periodontologia',
    title: 'Periodontology',
    slug: 'periodontologia',
    subtitle: 'Gum Health and Supporting Tissues',
    description:
      'Prevention, diagnosis and treatment of diseases of the gums and the tissues supporting the teeth — gingivitis, periodontitis and periodontal maintenance.',
    hero: {
      title: 'Healthy gums are the foundation of a lasting smile.',
      subtitle:
        'Periodontology is dedicated to the prevention, diagnosis and treatment of diseases of the gums and the tissues that support the teeth, helping preserve long-term oral health.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'Gum health is essential to keep your natural teeth.',
      text: 'Even healthy teeth can be compromised when the gums and supporting bone are affected by periodontal disease. There is also scientific evidence linking gum health to general health — including cardiovascular disease, diabetes and pregnancy complications. At Centro Dentário Colombo, treatment is personalised to control inflammation, preserve the supporting tissues and contribute to the stability of your smile over the years.',
    },
    whatIs:
      'Periodontology is the specialty of Dentistry responsible for the prevention, diagnosis and treatment of diseases affecting the gums, the bone and the other tissues that support the teeth. The goal is to control periodontal disease, preserve natural teeth whenever possible and promote lasting oral health.',
    indications: [
      'Bleeding gums.',
      'Swollen or reddened gums.',
      'Persistent bad breath.',
      'Gum recession.',
      'Tooth mobility.',
      'Sensitivity at the tooth root.',
      'A diagnosis of gingivitis or periodontitis.',
    ],
    availableTreatments: [
      {
        name: 'Periodontal Assessment',
        description: 'Complete diagnosis of gum health and supporting tissues.',
      },
      {
        name: 'Gingivitis Treatment',
        description:
          'Control of inflammation and prevention of disease progression.',
      },
      {
        name: 'Periodontitis Treatment',
        description:
          'Reduction of infection and stabilisation of the periodontal tissues.',
      },
      {
        name: 'Scaling and Root Planing',
        description: 'Removal of biofilm and calculus below the gum line.',
      },
      {
        name: 'Periodontal Surgery',
        description: 'For more advanced cases requiring surgical intervention.',
      },
      {
        name: 'Periodontal Maintenance',
        description:
          'Periodic appointments to monitor progress and prevent relapses.',
      },
    ],
    steps: [
      {
        title: 'Clinical Assessment',
        description: 'Detailed examination of the gums and supporting tissues.',
      },
      {
        title: 'Diagnosis',
        description:
          'Identifying the degree of periodontal disease and drawing up the treatment plan.',
      },
      {
        title: 'Treatment',
        description: 'Removal of infection and control of inflammation.',
      },
      {
        title: 'Reassessment',
        description: 'Monitoring the response to treatment.',
      },
      {
        title: 'Maintenance',
        description: 'Periodic appointments to preserve the results achieved.',
      },
    ],
    benefits: [
      'Preservation of natural teeth.',
      'Control of gum inflammation.',
      'Reduced bleeding.',
      'Improved breath.',
      'Stability of supporting tissues.',
      'Promotion of long-term oral health.',
    ],
    whyChoose: [
      'Rigorous periodontal diagnosis.',
      'Personalised treatments.',
      'Preventive and conservative approach.',
      'Continuous follow-up.',
      'Integration with the other specialties for a complete treatment plan.',
    ],
    ctaHeadline:
      'Caring for your gums is protecting your smile for the future.',
    faq: [
      {
        question: 'Why do my gums bleed?',
        answer:
          'Bleeding gums are one of the most common signs of gum inflammation (gingivitis). It can be caused by plaque build-up, inadequate brushing or other factors. It is important not to ignore this sign and to seek clinical assessment.',
      },
      {
        question: 'Can gingivitis be cured?',
        answer:
          'Yes. Gingivitis is reversible with proper treatment and improved oral hygiene habits. If left untreated, it can progress to periodontitis, a more serious condition requiring ongoing follow-up.',
      },
      {
        question: 'What happens if periodontitis is not treated?',
        answer:
          'Untreated periodontitis can lead to the progressive destruction of the bone and supporting tissues of the teeth, resulting in tooth mobility and, in advanced cases, tooth loss.',
      },
      {
        question: 'Can periodontal disease cause tooth loss?',
        answer:
          'Yes. Severe periodontitis is one of the main causes of tooth loss in adults. That is why early diagnosis and treatment are essential to preserve natural teeth.',
      },
      {
        question: 'How often should I have periodontal maintenance?',
        answer:
          'The frequency of maintenance appointments is defined individually, according to the severity of the disease and the response to treatment. In general, we recommend appointments every 3 to 6 months for patients with a history of periodontal disease.',
      },
      {
        question: 'Can periodontal disease come back?',
        answer:
          'Periodontitis requires ongoing follow-up. With proper treatment and regular maintenance, it can be effectively controlled and the teeth preserved over the years. That is why maintenance appointments are essential.',
      },
    ],
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
      'bleeding gums',
      'root planing',
      'periodontal disease',
      'gum health',
    ],
  },

  // ============================================
  // 7. FIXED HYBRID PROSTHESIS (ALL-ON-4 / ALL-ON-6)
  // ============================================
  {
    id: 'protese-protocolo',
    title: 'Fixed Hybrid Prosthesis',
    slug: 'proteses-dentarias',
    subtitle: 'All-on-4 / All-on-6 — Full Fixed Rehabilitation',
    description:
      'A fixed solution for those who have lost all or most of their teeth — rehabilitate a complete arch on implants, with stability and a natural look.',
    hero: {
      title: 'Regain a complete smile — fixed, stable and natural.',
      subtitle:
        'The Fixed Hybrid Prosthesis (All-on-4 / All-on-6) is the fixed solution for those who have lost all or most of their teeth, rehabilitating a complete arch on dental implants with stability, comfort and a natural appearance.',
      cta: 'Book your assessment',
    },
    intro: {
      headline: 'A second chance to smile with confidence.',
      text: 'When tooth loss is extensive or total, the Fixed Hybrid Prosthesis offers a fixed, definitive solution — supported on dental implants — that restores chewing function, aesthetics and quality of life. No removable dentures. No insecurities. With the smile you deserve.',
    },
    whatIs:
      'The Fixed Hybrid Prosthesis is a complete oral rehabilitation, fixed on 4 or 6 dental implants (All-on-4 or All-on-6), which replaces an entire dental arch in a fixed and permanent way. It is a solution for those with total or very extensive tooth loss who are looking for comfort, stability and a natural appearance.',
    indications: [
      'You have lost all or most of your teeth.',
      'Your remaining teeth are severely compromised and not worth preserving.',
      'You wear a removable denture and want a fixed solution.',
      'You want to rehabilitate a complete arch in a stable, long-lasting way.',
    ],
    availableTreatments: [
      {
        name: 'All-on-4 Fixed Hybrid Prosthesis',
        description:
          'Complete arch supported on 4 strategically positioned implants.',
      },
      {
        name: 'All-on-6 Fixed Hybrid Prosthesis',
        description:
          'Greater force distribution with 6 implants, indicated for specific cases.',
      },
      {
        name: 'Implant-Supported Fixed Prostheses',
        description:
          'For partial or full rehabilitations with individual implants.',
      },
      {
        name: 'Dental Crowns',
        description: 'Individual coverage for weakened or treated teeth.',
      },
      {
        name: 'Dental Bridges',
        description:
          'Replacement of one or more teeth supported on the adjacent teeth.',
      },
      {
        name: 'Removable Dentures',
        description: 'An option when implants are not viable.',
      },
      {
        name: 'Complete Oral Rehabilitation',
        description: 'Comprehensive planning for complex cases.',
      },
    ],
    steps: [
      {
        title: 'Clinical assessment and CT (CBCT) diagnosis',
        description:
          'Detailed analysis of the available bone and digital planning.',
      },
      {
        title: 'Personalised treatment plan',
        description:
          'Defining the most suitable number of implants and type of prosthesis.',
      },
      {
        title: 'Implant placement',
        description:
          'Surgical intervention with modern techniques and clinical rigour.',
      },
      {
        title: 'Provisional prosthesis',
        description:
          'In many cases it is possible to leave surgery with provisional teeth on the same day.',
      },
      {
        title: 'Final prosthesis',
        description:
          'Placement of the final prosthesis, adapted for a functional and aesthetic result.',
      },
    ],
    benefits: [
      'A fixed, permanent solution.',
      'Appearance and function similar to natural teeth.',
      'No need to remove the prosthesis.',
      'Preservation of the jaw bone.',
      'Improved chewing, speech and confidence.',
      'Long-lasting results with proper care.',
    ],
    whyChoose: [
      'Computed tomography (CBCT) diagnosis.',
      'Precise digital planning.',
      'Team experienced in complete oral rehabilitation.',
      'Solutions tailored to each patient.',
      'Support at every stage of the treatment.',
      'Open until 11pm — including emergency care.',
    ],
    ctaHeadline: 'A complete, fixed smile can change much more than it seems.',
    faq: [
      {
        question: 'Who is a candidate for the Fixed Hybrid Prosthesis?',
        answer:
          'Patients with total or very extensive tooth loss, or with severely compromised teeth that are not worth preserving. A CT (CBCT) assessment determines the feasibility of the treatment.',
      },
      {
        question: 'What is the difference between All-on-4 and All-on-6?',
        answer:
          'All-on-4 uses 4 strategically positioned implants to support a complete arch. All-on-6 uses 6 implants, offering greater force distribution, and is indicated for specific cases. The choice is made after a detailed clinical assessment.',
      },
      {
        question: 'Is it possible to leave surgery with teeth?',
        answer:
          'In many cases, yes. The immediate loading protocol allows a provisional prosthesis to be placed on the same day as surgery, letting the patient leave the clinic with a functional smile. The final prosthesis is placed at a later stage.',
      },
      {
        question: 'How long does the complete treatment take?',
        answer:
          'The complete process, from implant placement to the final prosthesis, generally takes between 3 and 6 months, depending on each case. With immediate loading, the patient wears provisional teeth during this period.',
      },
      {
        question: 'How do you care for a Fixed Hybrid Prosthesis?',
        answer:
          'Hygiene is essential. We recommend regular brushing, using specific floss or interdental brushes, and periodic maintenance appointments. The prosthesis is fixed — it does not need to be removed for cleaning.',
      },
      {
        question: 'Is the Fixed Hybrid Prosthesis a definitive solution?',
        answer:
          'Yes. With proper care and regular follow-up, the Fixed Hybrid Prosthesis is a long-lasting solution. Implants have a long-term success rate above 95%.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1612283105859-6e2585710acd?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'fixed hybrid prosthesis',
      'all-on-4',
      'all-on-6',
      'implant-supported prosthesis',
      'full mouth rehabilitation',
      'dental crowns',
      'dental bridges',
    ],
  },

  // ============================================
  // 8. ORAL HYGIENE
  // ============================================
  {
    id: 'higiene-oral',
    title: 'Oral Hygiene',
    slug: 'higiene-oral',
    subtitle: 'Scaling, Prophylaxis and Prevention',
    description:
      'Prevent gum disease and dental lesions with personalised oral hygiene appointments — scaling, prophylaxis and guidance.',
    hero: {
      title: 'A healthy smile begins with prevention.',
      subtitle:
        'Oral Hygiene is essential to prevent gum disease, reduce the risk of dental lesions and keep your smile healthy throughout life.',
      cta: 'Book your Oral Hygiene appointment',
    },
    intro: {
      headline:
        'Prevention is one of the most effective ways to preserve oral health.',
      text: 'Even with good daily brushing, plaque and tartar can build up in hard-to-reach areas, increasing the risk of gingivitis and periodontal disease. We recommend Oral Hygiene appointments every 6 months. At Centro Dentário Colombo, appointments are personalised to remove these deposits, assess the health of your mouth and guide each patient on the best daily care.',
    },
    whatIs:
      'Oral Hygiene is a field of Dentistry dedicated to preventing oral diseases and maintaining the health of teeth and gums. During the appointment, tartar and plaque are removed, the state of the oral cavity is assessed and personalised recommendations are given to improve hygiene habits.',
    indicationsTitle: 'When is it recommended?',
    indications: [
      'To remove plaque and tartar.',
      'To prevent dental lesions and gum disease.',
      'To improve your breath.',
      'To follow up patients with implants or prostheses.',
      'To maintain the results of orthodontic treatments.',
      'For regular preventive follow-up.',
    ],
    availableTreatments: [
      {
        name: 'Scaling',
        description:
          'Removal of tartar accumulated above and below the gum line.',
      },
      {
        name: 'Dental Prophylaxis',
        description: 'Professional cleaning to remove plaque and staining.',
      },
      {
        name: 'Tooth Polishing',
        description:
          'A finish that leaves the tooth surface smoother and makes plaque build-up harder.',
      },
      {
        name: 'Oral Hygiene Education',
        description:
          'Personalised guidance on brushing, flossing and other daily care.',
      },
    ],
    stepsTitle: 'How does the appointment work?',
    steps: [
      {
        title: 'Clinical Assessment',
        description:
          'Analysis of oral health and identification of specific needs.',
      },
      {
        title: 'Tartar Removal',
        description: 'Scaling and elimination of plaque.',
      },
      {
        title: 'Prophylaxis',
        description: 'Professional cleaning and tooth polishing.',
      },
      {
        title: 'Personalised Guidance',
        description:
          'Recommendations for maintaining good oral hygiene at home.',
      },
      {
        title: 'Maintenance Plan',
        description: 'Defining the ideal frequency of preventive appointments.',
      },
    ],
    benefits: [
      'Prevention of dental lesions.',
      'Reduced risk of gingivitis and periodontitis.',
      'Fresher breath.',
      'Cleaner teeth.',
      'Longer-lasting dental treatments.',
      'Promotion of long-term oral health.',
    ],
    whyChoose: [
      'Preventive, personalised approach.',
      'Complete oral health assessment.',
      'Guidance adapted to each patient.',
      'Integration with all the clinic\u2019s specialties.',
      'Regular follow-up for long-lasting results.',
    ],
    ctaHeadline:
      'Prevention is the best investment in keeping your smile healthy.',
    faq: [
      {
        question: 'How often should I have an Oral Hygiene appointment?',
        answer:
          'We recommend oral hygiene appointments every 6 months for most patients. In higher-risk cases (patients with periodontal disease, implants or braces), the frequency may be higher.',
      },
      {
        question: 'Does scaling damage the teeth?',
        answer:
          'No. Scaling is a safe procedure that removes tartar without damaging the enamel. Performed by a professional, it is painless and essential to keep the gums healthy.',
      },
      {
        question: 'Does the appointment help prevent dental lesions?',
        answer:
          'Yes. Regular removal of plaque and tartar significantly reduces the risk of dental lesions and gum disease. The oral hygiene appointment is also an opportunity to detect changes in oral health early.',
      },
      {
        question:
          'Should implant patients also have Oral Hygiene appointments?',
        answer:
          'Yes, and it is especially important. Dental implants require rigorous hygiene care to prevent peri-implantitis, an infection that can compromise the stability of the implant.',
      },
      {
        question: 'Does the cleaning remove stains from the teeth?',
        answer:
          'Tooth polishing can remove some superficial staining caused by coffee, tea, wine or tobacco. For deeper stains or intrinsic colour changes, teeth whitening may be recommended.',
      },
      {
        question: 'How can I improve my oral hygiene at home?',
        answer:
          'We recommend brushing for 2 minutes, at least twice a day (especially before bed), daily flossing, and water after meals. At the oral hygiene appointment, our team provides personalised guidance for each case.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop',
    keywords: [
      'oral hygiene',
      'dental scaling',
      'dental cleaning',
      'dental prophylaxis',
      'tartar removal',
      'tooth polishing',
      'dental prevention',
    ],
  },

  // ============================================
  // 9. PAEDIATRIC DENTISTRY
  // ============================================
  {
    id: 'odontopediatria',
    title: 'Paediatric Dentistry',
    slug: 'odontopediatria',
    subtitle: 'Oral Health for Babies, Children and Teenagers',
    description:
      'We follow the development of children\u2019s oral health with prevention, early diagnosis and treatments adapted to every stage of growth.',
    hero: {
      title:
        'We care for children\u2019s smiles from the very first years of life.',
      subtitle:
        'Paediatric Dentistry follows the development of children\u2019s oral health, promoting prevention, early diagnosis and treatments adapted to each stage of growth.',
      cta: 'Book your child\u2019s assessment',
    },
    intro: {
      headline:
        'Childhood is the best time to build habits that last a lifetime.',
      text: 'We recommend the first appointment as soon as the first teeth appear — usually from 12 months of age. Paediatric Dentistry appointments help prevent problems, monitor tooth growth and make visiting the dentist a calm, positive experience. At Centro Dentário Colombo, every child is welcomed with attention, patience and an approach adapted to their age and needs.',
    },
    whatIs:
      'Paediatric Dentistry is the field of Dentistry dedicated to the prevention, diagnosis and treatment of the oral health of babies, children and teenagers. Beyond treating dental problems, it monitors the development of the teeth and guides parents on the most appropriate care at each stage of growth.',
    indicationsTitle: 'When is it recommended?',
    indications: [
      'First dental appointment (from 12 months of age).',
      'Prevention of dental lesions.',
      'Treatment of lesions in baby and permanent teeth.',
      'Monitoring tooth growth.',
      'Assessing the need for braces.',
      'Dental trauma.',
      'Education for good oral hygiene.',
    ],
    availableTreatments: [
      {
        name: 'Prevention Appointment',
        description:
          'Oral health assessment and monitoring of tooth development.',
      },
      {
        name: 'Treatment of Dental Lesions',
        description:
          'Conservative treatments to preserve the health of the teeth.',
      },
      {
        name: 'Sealant Application',
        description:
          'Protection of the tooth surfaces most susceptible to lesions.',
      },
      {
        name: 'Fluoride Application',
        description:
          'Strengthening of the tooth enamel, according to clinical assessment.',
      },
      {
        name: 'Children\u2019s Braces',
        description:
          'Early assessment and follow-up to guide the correct development of the bite and jaws.',
      },
    ],
    stepsTitle: 'How does the appointment work?',
    steps: [
      {
        title: 'Initial Assessment',
        description: 'Observation of the teeth, gums and oral development.',
      },
      {
        title: 'Diagnosis',
        description: 'Identifying preventive needs or treatments.',
      },
      {
        title: 'Personalised Plan',
        description:
          'Defining the most appropriate care for the child\u2019s age.',
      },
      {
        title: 'Treatment',
        description:
          'Always carried out gradually, respecting the child\u2019s comfort.',
      },
      {
        title: 'Follow-up',
        description:
          'Periodic appointments to monitor growth and prevent future problems.',
      },
    ],
    benefits: [
      'Prevention of dental lesions.',
      'Healthy development of the teeth.',
      'Monitoring of oral growth.',
      'Reduced fear of the dentist.',
      'Education for good oral hygiene habits.',
      'Early diagnosis of changes.',
    ],
    whyChoose: [
      'Team experienced in caring for children.',
      'A welcoming, calm environment.',
      'An approach adapted to the child\u2019s age.',
      'Focus on prevention and continuous follow-up.',
      'Integration with Orthodontics for healthy tooth development.',
    ],
    ctaHeadline: 'A healthy smile begins in childhood.',
    faq: [
      {
        question:
          'When should I take my child to the dentist for the first time?',
        answer:
          'We recommend the first appointment as soon as the first teeth appear — usually around 12 months of age. This early visit allows us to monitor dental development and build a positive relationship between the child and the dentist.',
      },
      {
        question: 'Do baby teeth need to be treated?',
        answer:
          'Yes. Baby teeth are essential for chewing, speech and the correct development of the dental arch. Untreated lesions can affect the permanent teeth and cause pain and infections.',
      },
      {
        question: 'How can dental lesions be prevented in children?',
        answer:
          'Prevention involves good oral hygiene from the first teeth, a balanced diet low in sugar, fluoride and sealant applications, and regular paediatric dentistry appointments.',
      },
      {
        question: 'When is an orthodontic assessment needed?',
        answer:
          'The first orthodontic assessment is recommended around age 7, when changes in the development of the bite can already be identified and early intervention made if necessary.',
      },
      {
        question: 'How many times a year should a child see the dentist?',
        answer:
          'We recommend appointments every 6 months. For children at higher risk of dental lesions, the frequency may be higher.',
      },
      {
        question: 'What should I do in case of dental trauma?',
        answer:
          'In case of a fall or blow involving teeth, contact us as quickly as possible. If a permanent tooth comes out of the mouth, keep it in milk or saline solution and come to the clinic immediately — in many cases it can be reimplanted.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&h=600&fit=crop',
    image1:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop',
    image2:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    keywords: [
      'paediatric dentistry',
      'children dentist',
      'kids dentist',
      'baby teeth',
      'sealants',
      'fluoride',
      'first dental appointment',
    ],
  },

  // ============================================
  // 10. OROFACIAL HARMONISATION
  // ============================================
  {
    id: 'harmonizacao-orofacial',
    title: 'Orofacial Harmonisation',
    slug: 'harmonizacao-orofacial',
    subtitle: 'Botulinum Toxin, Hyaluronic Acid and Biostimulators',
    description:
      'Minimally invasive procedures that enhance your facial features, respecting your anatomy — elegant, natural results.',
    hero: {
      title: 'Enhance your beauty with balance and naturalness.',
      subtitle:
        'Orofacial Harmonisation brings together minimally invasive procedures that enhance your facial features, respecting your anatomy and delivering elegant, natural results.',
      cta: 'Book your assessment',
    },
    intro: {
      headline:
        'Every face has unique features that deserve to be enhanced, never transformed.',
      text: 'At the Orofacial Harmonisation appointment, we carry out an individualised assessment to understand your needs and define a personalised treatment plan, always focused on facial harmony, naturalness and well-being.',
    },
    whatIs:
      'Orofacial Harmonisation is a field of Dentistry that combines knowledge of facial anatomy with minimally invasive aesthetic techniques to improve the balance of the face. Treatments are personalised and aim to soften signs of ageing, restore volume and enhance natural beauty discreetly and safely.',
    indications: [
      'Softening wrinkles and expression lines.',
      'Restoring facial volume.',
      'Defining the contour of the face.',
      'Improving the harmony of the facial profile.',
      'Reducing signs of ageing.',
      'Enhancing the lips naturally.',
      'Treatment of bruxism with botulinum toxin.',
    ],
    availableTreatments: [
      {
        name: 'Botulinum Toxin (Botox\u00ae)',
        description:
          'Softens dynamic wrinkles and expression lines, providing a more rested, natural look. Also indicated for the treatment of bruxism.',
      },
      {
        name: 'Hyaluronic Acid Filler',
        description:
          'Restores volume and improves facial contour, respecting individual proportions.',
      },
      {
        name: 'Lip Harmonisation',
        description:
          'Enhances the shape and volume of the lips with balance and naturalness.',
      },
      {
        name: 'Collagen Biostimulators',
        description:
          'Stimulates natural collagen production, contributing to firmer, better-quality skin.',
      },
    ],
    steps: [
      {
        title: 'Facial Assessment',
        description:
          'Analysis of the patient\u2019s anatomy, proportions and expectations.',
      },
      {
        title: 'Personalised Planning',
        description:
          'Defining the most suitable procedures to achieve a harmonious result.',
      },
      {
        title: 'Treatment',
        description:
          'Carrying out the procedures with minimally invasive techniques and a focus on comfort.',
      },
      {
        title: 'Follow-up',
        description:
          'Assessing progress and providing guidance on post-procedure care.',
      },
    ],
    benefits: [
      'Natural, personalised results.',
      'Enhancement of facial features.',
      'Minimally invasive procedures.',
      'Fast recovery.',
      'Improved self-esteem.',
      'Individualised planning.',
    ],
    whyChoose: [
      'Personalised assessment.',
      'Respect for each patient\u2019s anatomy and identity.',
      'Modern, safe techniques.',
      'Focus on natural-looking results.',
      'Follow-up before and after treatment.',
    ],
    ctaHeadline: 'True harmony lies in enhancing who you already are.',
    faq: [
      {
        question: 'Does Orofacial Harmonisation change your facial expression?',
        answer:
          'When performed by professionals with specific training, Orofacial Harmonisation respects the anatomy and proportions of the face, improving balance without altering natural expression. The goal is always a harmonious, discreet result.',
      },
      {
        question: 'How long do the results last?',
        answer:
          'Duration varies with the procedure. Botulinum toxin lasts between 4 and 6 months. Hyaluronic acid generally lasts between 12 and 18 months. Collagen biostimulators have progressive effects that can last 2 years or more.',
      },
      {
        question: 'Are the procedures painful?',
        answer:
          'The procedures are minimally invasive and performed with topical or local anaesthetics. Discomfort is generally very mild and short-lived.',
      },
      {
        question: 'How long does recovery take?',
        answer:
          'Recovery is fast. In most cases, you can resume normal activity on the same day. There may be some redness or slight swelling in the following days, which quickly disappears.',
      },
      {
        question: 'Can I combine different treatments?',
        answer:
          'Yes. In many cases, combining different procedures achieves a more harmonious, natural result. The treatment plan is always defined after an individualised assessment.',
      },
      {
        question: 'How do I know which treatment is right for me?',
        answer:
          'The first assessment appointment is essential. During this appointment, we analyse your facial anatomy, your expectations and the result you want to achieve, and together we define the plan best suited to your case.',
      },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1655807946138-811bb2340d34?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image1:
      'https://images.unsplash.com/photo-1681939283065-011297ba26eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2:
      'https://images.unsplash.com/photo-1633690015214-462c5b6809cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keywords: [
      'orofacial harmonisation',
      'botulinum toxin',
      'botox',
      'hyaluronic acid',
      'lip filler',
      'collagen biostimulators',
      'bruxism',
    ],
  },
];
