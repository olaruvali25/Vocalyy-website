import type { IndustryData } from '@/types/industry';

export const INDUSTRIES: IndustryData[] = [
  {
    slug: 'clinici-dentare',
    nameRo: 'Clinici Dentare',
    nameEn: 'Dental Clinics',
    icon: 'tooth',
    heroRo:
      'Fiecare apel neprimit e o programare pierdută. Agentul tău răspunde și când tu ești cu mâinile în gura pacientului.',
    heroEn:
      'Every missed call is a missed appointment. Your agent answers even when your hands are in a patient\'s mouth.',
    descriptionRo:
      'Programări automate, răspuns la întrebări despre tratamente, urgențe nocturne. Agentul tău vocal preia fiecare apel și transformă fiecare interes în programare confirmată.',
    descriptionEn:
      'Automatic appointments, treatment FAQs, after-hours emergencies. Your voice agent handles every call and turns every inquiry into a confirmed booking.',
    stats: [
      {
        label: 'Valoarea medie a unei programări',
        value: '350',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar (media)',
        value: '47',
      },
      {
        label: 'Venit pierdut lunar din apeluri nepreluate',
        value: '16.450',
        prefix: '€',
      },
      {
        label: 'Rata de conversie apel-programare cu agentul',
        value: '73',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Apel de urgență la 10 seara',
        without:
          'Pacientul sună, nimeni nu răspunde. Sună alt cabinet care are cineva la telefon. L-ai pierdut.',
        with: 'Agentul răspunde, evaluează urgența, programează prima oră disponibilă dimineață și trimite SMS de confirmare.',
      },
      {
        title: '3 apeluri simultan la ora de vârf',
        without:
          'Recepționera preia un apel, celelalte 2 sună în gol. 2 pacienți pierduți.',
        with: 'Toate 3 apelurile preluate simultan. Fiecare pacient programat, fiecare confirmare trimisă.',
      },
      {
        title: 'Pacient care întreabă de prețuri',
        without:
          'Recepționera e ocupată, pacientul nu primește răspuns, caută pe Google și găsește alt cabinet.',
        with: 'Agentul răspunde la întrebări despre tratamente și prețuri, apoi propune o programare pentru consultație.',
      },
    ],
    beforeAfter: [
      {
        before: 'Apeluri pierdute în timpul procedurilor',
        after: 'Fiecare apel preluat automat, non-stop',
      },
      {
        before: 'Recepționera copleșită la ore de vârf',
        after: 'Apeluri simultane nelimitate',
      },
      {
        before: 'Urgențe nocturne fără răspuns',
        after: 'Triaj automat și programare urgențe',
      },
      {
        before: 'Programări notate pe hârtie, uitate',
        after: 'Programări direct în calendar, cu confirmare SMS',
      },
      {
        before: 'Pacienți care sună concurența',
        after: 'Răspuns instant, pacient capturat',
      },
    ],
    objections: [
      {
        question: 'Pacienții mei nu vor accepta să vorbească cu un robot.',
        answer:
          'Vocea agentului e naturală, conversațională. 87% din pacienți nu realizează că vorbesc cu AI. Și sincer — un răspuns la 10 seara bate o mesagerie goală.',
      },
      {
        question: 'Ce se întâmplă cu urgențele reale?',
        answer:
          'Agentul identifică urgențele și le escaladează imediat — te sună pe mobil sau trimite alertă. Nu înlocuiește judecata clinică, dar asigură că niciun apel de urgență nu rămâne fără răspuns.',
      },
      {
        question: 'Am deja recepționeră. De ce aș mai plăti?',
        answer:
          'Recepționera ta lucrează 8 ore. Agentul lucrează 24. Recepționera ia pauze, concedii, se îmbolnăvește. Agentul nu. Și costă de 5 ori mai puțin.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări automate',
        description:
          'Agentul verifică disponibilitatea și programează direct în calendarul clinicii.',
      },
      {
        icon: 'clock',
        title: 'Disponibilitate 24/7',
        description:
          'Răspunde la apeluri non-stop, inclusiv weekend și sărbători.',
      },
      {
        icon: 'message',
        title: 'Răspuns FAQ tratamente',
        description:
          'Oferă informații despre proceduri, prețuri și pregătire pre-tratament.',
      },
      {
        icon: 'alert',
        title: 'Triaj urgențe',
        description:
          'Identifică urgențele dentare și escaladează imediat către medic.',
      },
      {
        icon: 'sms',
        title: 'Confirmare SMS/WhatsApp',
        description:
          'Trimite confirmare automată și reminder înainte de programare.',
      },
      {
        icon: 'users',
        title: 'Gestionare mai mulți medici',
        description:
          'Programează la medicul potrivit în funcție de tratamentul solicitat.',
      },
    ],
    recommendedTier: 'professional',
    roiDefaults: {
      callsPerDay: 12,
      missedCallPercent: 35,
      avgAppointmentValue: 350,
    },
  },
  {
    slug: 'cabinete-medicale',
    nameRo: 'Cabinete Medicale',
    nameEn: 'Medical Practices',
    icon: 'stethoscope',
    heroRo: 'Pacienții sună. Tu consulți. Cine răspunde?',
    heroEn: 'Patients call. You\'re in consultation. Who answers?',
    descriptionRo:
      'Programări pacienți, triaj telefonic, informații rezultate analize. Agentul preia tot ce nu necesită consultație medicală directă.',
    descriptionEn:
      'Patient scheduling, phone triage, test results information. The agent handles everything that doesn\'t require direct medical consultation.',
    stats: [
      {
        label: 'Valoarea medie a unei consultații',
        value: '200',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '62',
      },
      {
        label: 'Venit pierdut lunar',
        value: '12.400',
        prefix: '€',
      },
      {
        label: 'Timp economisit zilnic de recepție',
        value: '3',
        suffix: 'h',
      },
    ],
    scenarios: [
      {
        title: 'Pacient care sună pentru rezultate analize',
        without:
          'Recepționera e ocupată, pacientul sună de 3 ori, se frustrează, lasă recenzie negativă.',
        with: 'Agentul confirmă identitatea, informează despre disponibilitatea rezultatelor și programează ridicarea sau consultul.',
      },
      {
        title: 'Gripă de sezon — 50 de apeluri pe zi',
        without:
          'Linia e ocupată permanent, pacienții nu pot suna, unii vin fără programare și creează haos.',
        with: 'Agentul preia toate apelurile simultan, programează în ordine, gestionează urgențele.',
      },
      {
        title: 'Apel la 8 seara — pacient cu simptome',
        without:
          'Nimeni nu răspunde. Pacientul merge la urgențe sau amână — ambele variante proaste.',
        with: 'Agentul face triaj telefonic de bază, recomandă urgența dacă e cazul sau programează prima oră dimineață.',
      },
    ],
    beforeAfter: [
      {
        before: 'Pacienți care nu pot suna pentru programare',
        after: 'Programări 24/7, fără timp de așteptare',
      },
      {
        before: 'Recepția copleșită în sezonul de gripă',
        after: 'Capacitate nelimitată de apeluri simultane',
      },
      {
        before: 'Pacienți care sună repetat pentru rezultate',
        after: 'Informare automată despre disponibilitatea rezultatelor',
      },
      {
        before: 'Triaj telefonic absent seara',
        after: 'Triaj de bază 24/7 cu escaladare pentru urgențe',
      },
      {
        before: 'Recepționeră: €2.000-€3.000/lună',
        after: 'Agent vocal: de la €299/lună',
      },
    ],
    objections: [
      {
        question: 'Nu poate face diagnostic. E periculos.',
        answer:
          'Corect. Agentul NU face diagnostic. Preia apeluri, programează și escaladează urgențele. Exact ce face o recepționeră bună — dar non-stop.',
      },
      {
        question: 'Pacienții vârstnici nu vor accepta.',
        answer:
          'Vocea e naturală și calmă. Majoritatea pacienților vârstnici apreciază că primesc răspuns instant în loc să aștepte.',
      },
      {
        question: 'Am nevoie de integrare cu sistemul meu medical.',
        answer:
          'Integrăm cu Google Calendar, Outlook și majoritatea sistemelor de management al cabinetelor. Dacă ai un sistem specific, discutăm.',
      },
      {
        question: 'Ce se întâmplă cu datele medicale?',
        answer:
          'Agentul NU accesează date medicale. Programează, răspunde la FAQ-uri și transferă apeluri. Toate datele sunt criptate și GDPR compliant.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări pacienți',
        description:
          'Programează consultații direct în calendar, cu verificare disponibilitate.',
      },
      {
        icon: 'triage',
        title: 'Triaj telefonic',
        description:
          'Evaluează simptomele de bază și escaladează urgențele către medic.',
      },
      {
        icon: 'info',
        title: 'Informații rezultate',
        description:
          'Informează pacienții despre disponibilitatea analizelor și programează ridicarea.',
      },
      {
        icon: 'reminder',
        title: 'Reminder-uri programări',
        description:
          'Trimite SMS/WhatsApp de confirmare și reminder cu 24h înainte.',
      },
      {
        icon: 'transfer',
        title: 'Transfer către medic',
        description:
          'Transferă apelul către medic sau asistentă când e necesar.',
      },
      {
        icon: 'multilingual',
        title: 'Română și engleză',
        description:
          'Comută automat între limbi pentru pacienți internaționali.',
      },
    ],
    recommendedTier: 'professional',
    roiDefaults: {
      callsPerDay: 18,
      missedCallPercent: 30,
      avgAppointmentValue: 200,
    },
  },
  {
    slug: 'saloane-de-frumusete',
    nameRo: 'Saloane de Frumusețe',
    nameEn: 'Beauty Salons',
    icon: 'scissors',
    heroRo:
      'Clientele tale sună când tu ai mâinile ocupate. Agentul nostru le programează în locul tău.',
    heroEn:
      'Your clients call when your hands are busy. Our agent books them in your place.',
    descriptionRo:
      'Programări non-stop, anulări și reprogramări automate. Fiecare apel e o programare potențială — agentul se asigură că niciuna nu se pierde.',
    descriptionEn:
      'Non-stop bookings, automatic cancellations and rescheduling. Every call is a potential booking — the agent makes sure none are lost.',
    stats: [
      {
        label: 'Valoarea medie a unei programări',
        value: '120',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '38',
      },
      {
        label: 'Venit pierdut lunar',
        value: '4.560',
        prefix: '€',
      },
      {
        label: 'Reducere no-show cu reminder-uri',
        value: '40',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Sâmbătă dimineață — toată lumea sună',
        without:
          'Ai 3 cliente în salon. Telefonul sună de 10 ori. Nu poți răspunde. 7 programări pierdute.',
        with: 'Agentul preia toate apelurile, verifică disponibilitatea și programează fiecare clientă.',
      },
      {
        title: 'Clientă care vrea să reprogrameze',
        without:
          'Sună de 3 ori, nu prinde pe nimeni. Renunță. Nu mai vine niciodată.',
        with: 'Agentul reprogramează instant, trimite confirmare nouă și eliberează slotul vechi pentru altcineva.',
      },
      {
        title: 'Apel la 9 seara — programare pentru mâine',
        without:
          'Nimeni nu răspunde. Clienta programează la alt salon care are booking online.',
        with: 'Agentul răspunde, verifică disponibilitatea și confirmă programarea. Clienta e mulțumită.',
      },
    ],
    beforeAfter: [
      {
        before: 'Apeluri pierdute când ai mâinile ocupate',
        after: 'Fiecare apel preluat, mâini libere pentru clienți',
      },
      {
        before: 'No-show-uri frecvente',
        after: 'Reminder automat cu 24h înainte, reducere no-show 40%',
      },
      {
        before: 'Programări doar în orele de lucru',
        after: 'Programări 24/7 inclusiv noapte și weekend',
      },
      {
        before: 'Anulări fără reprogramare',
        after: 'Reprogramare automată și slotul eliberat pentru altcineva',
      },
      {
        before: 'Agendă pe hârtie, greșeli frecvente',
        after: 'Calendar digital, zero suprapuneri',
      },
    ],
    objections: [
      {
        question: 'Clientele mele vor să vorbească cu mine personal.',
        answer:
          'Și pot — agentul transferă apelul oricând. Dar 80% din apeluri sunt simple programări. Agentul le rezolvă în 30 de secunde.',
      },
      {
        question: 'Am deja un sistem de booking online.',
        answer:
          'Excelent. Agentul completează booking-ul online pentru clienții care preferă să sune. Nu îl înlocuiește, îl completează.',
      },
      {
        question: 'E prea scump pentru un salon mic.',
        answer:
          'Pachetul Starter e €299/lună. Dacă recuperezi 3 programări pierdute pe lună (€360), ești deja pe plus. Majoritatea recuperează de 10 ori mai mult.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări automate',
        description:
          'Verifică disponibilitatea și programează pe stilistul potrivit.',
      },
      {
        icon: 'refresh',
        title: 'Reprogramare și anulare',
        description:
          'Gestionează anulările și reprogramează automat, eliberând slotul.',
      },
      {
        icon: 'bell',
        title: 'Reminder-uri automate',
        description:
          'SMS/WhatsApp cu 24h înainte pentru reducerea no-show-urilor.',
      },
      {
        icon: 'info',
        title: 'Informații servicii și prețuri',
        description:
          'Răspunde la întrebări despre servicii, durate și prețuri.',
      },
      {
        icon: 'clock',
        title: 'Non-stop 24/7',
        description:
          'Programări chiar și la 11 noaptea sau duminică dimineață.',
      },
      {
        icon: 'users',
        title: 'Mai mulți stiliști',
        description:
          'Programează la stilistul preferat sau la primul disponibil.',
      },
    ],
    recommendedTier: 'starter',
    roiDefaults: {
      callsPerDay: 8,
      missedCallPercent: 40,
      avgAppointmentValue: 120,
    },
  },
  {
    slug: 'firme-de-avocatura',
    nameRo: 'Firme de Avocatură',
    nameEn: 'Law Firms',
    icon: 'scale',
    heroRo:
      'Când cineva sună un avocat, e în criză. Dacă nu răspunzi, sună pe următorul.',
    heroEn:
      'When someone calls a lawyer, they\'re in crisis. If you don\'t answer, they call the next one.',
    descriptionRo:
      'Preluare cazuri noi, colectare detalii, programare consultații. Fiecare apel pierdut poate fi un caz de mii de euro.',
    descriptionEn:
      'New case intake, detail collection, consultation scheduling. Every missed call could be a case worth thousands of euros.',
    stats: [
      {
        label: 'Valoarea medie a unui caz nou',
        value: '2.500',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '23',
      },
      {
        label: 'Venit potențial pierdut lunar',
        value: '57.500',
        prefix: '€',
      },
      {
        label: 'Conversie apel-client cu agentul',
        value: '45',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Joi seara la 11 — victimă accident',
        without:
          'Victima sună, nimeni nu răspunde. Sună alt avocat. Cazul de €15.000 a dispărut.',
        with: 'Agentul răspunde, colectează detaliile incidentului, stabilește urgența și programează consultație a doua zi la prima oră.',
      },
      {
        title: 'Luni dimineață — 5 apeluri simultane',
        without:
          'Secretara preia un apel. 4 potențiali clienți nu primesc răspuns. Minimum 2 sună alt cabinet.',
        with: 'Toate 5 apelurile preluate. Fiecare potențial client calificat, detalii colectate, consultații programate.',
      },
      {
        title: 'Client existent cu întrebări despre dosarul său',
        without:
          'Sună de 3 ori, nu prinde avocatul. Se simte neglijat. Lasă recenzie negativă.',
        with: 'Agentul notează întrebarea, confirmă că avocatul va reveni și programează un apel de follow-up.',
      },
    ],
    beforeAfter: [
      {
        before: 'Cazuri noi pierdute seara și weekend',
        after: 'Intake 24/7, fiecare potențial client capturat',
      },
      {
        before: 'Secretară copleșită luni dimineața',
        after: 'Apeluri nelimitate simultan, fiecare preluat',
      },
      {
        before: 'Clienți care se simt neglijați',
        after: 'Răspuns instant, follow-up programat',
      },
      {
        before: 'Detalii caz pierdute sau incomplete',
        after: 'Colectare structurată de detalii, transcriere completă',
      },
      {
        before: 'Secretară: €30.000-€45.000/an',
        after: 'Agent vocal: de la €449/lună',
      },
    ],
    objections: [
      {
        question: 'Clienții mei au nevoie de confidențialitate.',
        answer:
          'Toate conversațiile sunt criptate end-to-end. Datele sunt stocate pe servere UE, GDPR compliant. Mai sigur decât un fax sau un email necriptat.',
      },
      {
        question: 'Un robot nu poate evalua un caz.',
        answer:
          'Nu evaluează cazuri. Colectează informații de bază, programează consultația și te notifică. Exact ce face o secretară bună — dar non-stop.',
      },
      {
        question: 'Avocatura e o relație de încredere. AI-ul o subminează.',
        answer:
          'Dimpotrivă. Clientul care sună la miezul nopții și primește răspuns instant are mai multă încredere decât cel care ascultă robotul telefonic clasic.',
      },
    ],
    features: [
      {
        icon: 'intake',
        title: 'Intake cazuri noi',
        description:
          'Colectează detalii structurate despre caz: tip, urgență, părți implicate.',
      },
      {
        icon: 'calendar',
        title: 'Programare consultații',
        description:
          'Programează consultații inițiale direct în calendarul avocatului.',
      },
      {
        icon: 'shield',
        title: 'Confidențialitate deplină',
        description:
          'Criptare end-to-end, GDPR compliant, date stocate în UE.',
      },
      {
        icon: 'transfer',
        title: 'Escaladare urgențe',
        description:
          'Identifică cazurile urgente și sună avocatul imediat.',
      },
      {
        icon: 'transcript',
        title: 'Transcriere completă',
        description:
          'Fiecare apel transcris și disponibil pentru dosar.',
      },
      {
        icon: 'followup',
        title: 'Follow-up automat',
        description:
          'Confirmări programări, remindere documente necesare.',
      },
    ],
    recommendedTier: 'professional',
    roiDefaults: {
      callsPerDay: 8,
      missedCallPercent: 25,
      avgAppointmentValue: 2500,
    },
  },
  {
    slug: 'agentii-imobiliare',
    nameRo: 'Agenții Imobiliare',
    nameEn: 'Real Estate Agencies',
    icon: 'building',
    heroRo:
      'Ești la vizionare. Telefonul sună. Un vânzător vrea să listeze. Nu poți răspunde. Comisionul tocmai a plecat.',
    heroEn:
      'You\'re at a showing. The phone rings. A seller wants to list. You can\'t answer. The commission just walked away.',
    descriptionRo:
      'Lead capture 24/7, programare vizionări, follow-up automat. Niciun lead nu mai pleacă la concurență.',
    descriptionEn:
      '24/7 lead capture, viewing scheduling, automatic follow-up. No lead goes to the competition.',
    stats: [
      {
        label: 'Comision mediu per tranzacție',
        value: '4.500',
        prefix: '€',
      },
      {
        label: 'Lead-uri pierdute lunar',
        value: '15',
      },
      {
        label: 'Venit potențial pierdut lunar',
        value: '67.500',
        prefix: '€',
      },
      {
        label: 'Rata conversie lead cu follow-up rapid',
        value: '35',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Proprietar sună să vândă — ești la vizionare',
        without:
          'Nu răspunzi. Proprietarul sună alt agent. Listingul de €200.000 și comisionul de €6.000 — pierdute.',
        with: 'Agentul răspunde, colectează detaliile proprietății, programează evaluarea și trimite confirmare. Tu revii cu toate informațiile gata.',
      },
      {
        title: 'Duminică — 8 apeluri de la cumpărători',
        without:
          'E ziua ta liberă. Telefonul sună continuu. Răspunzi la 3, pierzi 5. 2 vizionări pierdute.',
        with: 'Agentul preia toate 8 apelurile, califică interesul, programează vizionări și trimite adresele. Tu te bucuri de weekend.',
      },
      {
        title: 'Cumpărător care întreabă de un listing',
        without:
          'Sună, nu răspunzi, caută pe alte site-uri, găsește alt agent.',
        with: 'Agentul oferă detalii despre proprietate, disponibilitate vizionare și programează pe loc.',
      },
    ],
    beforeAfter: [
      {
        before: 'Lead-uri pierdute la vizionări',
        after: 'Fiecare lead capturat, 24/7',
      },
      {
        before: 'Proprietari care sună concurența',
        after: 'Răspuns instant, detalii colectate',
      },
      {
        before: 'Weekenduri fără răgaz',
        after: 'Agentul preia apelurile, tu te odihnești',
      },
      {
        before: 'Follow-up manual, uneori uitat',
        after: 'Follow-up automat pentru fiecare lead',
      },
      {
        before: 'Vizionări neprogramate, timp pierdut',
        after: 'Programare automată vizionări în calendar',
      },
      {
        before: 'Informații incomplete de la clienți',
        after: 'Colectare structurată: buget, preferințe, termen',
      },
    ],
    objections: [
      {
        question: 'Imobiliare înseamnă relații personale.',
        answer:
          'Exact. Și relația începe cu un răspuns la telefon. Agentul face prima impresie, tu construiești relația.',
      },
      {
        question: 'Fiecare proprietate e unică, agentul nu poate răspunde la detalii.',
        answer:
          'Agentul are baza de date cu listingurile tale. Oferă detalii (suprafață, preț, zone) și programează vizionarea. Tu faci prezentarea.',
      },
      {
        question: 'Clienții mei de lux nu vor accepta AI.',
        answer:
          'Clienții de lux apreciază răspunsul instant și profesionalismul. Un apel preluat imediat la orice oră transmite exact asta.',
      },
    ],
    features: [
      {
        icon: 'lead',
        title: 'Lead capture 24/7',
        description:
          'Colectează datele fiecărui potențial client: buget, preferințe, termen.',
      },
      {
        icon: 'calendar',
        title: 'Programare vizionări',
        description:
          'Programează vizionări direct în calendarul agentului imobiliar.',
      },
      {
        icon: 'database',
        title: 'Detalii proprietăți',
        description:
          'Oferă informații din baza de date: suprafață, preț, facilități, zone.',
      },
      {
        icon: 'followup',
        title: 'Follow-up automat',
        description:
          'Recontactează lead-urile care nu au programat vizionare.',
      },
      {
        icon: 'qualify',
        title: 'Calificare lead-uri',
        description:
          'Evaluează seriozitatea interesului: buget, termen, pre-aprobare credit.',
      },
      {
        icon: 'sms',
        title: 'Notificări instant',
        description:
          'Trimite SMS cu detalii lead nou imediat după apel.',
      },
    ],
    recommendedTier: 'premium',
    roiDefaults: {
      callsPerDay: 10,
      missedCallPercent: 35,
      avgAppointmentValue: 4500,
    },
  },
  {
    slug: 'service-auto',
    nameRo: 'Service Auto',
    nameEn: 'Auto Service',
    icon: 'wrench',
    heroRo:
      'Ești sub mașină, cu mâinile în ulei. Telefonul sună. Cine răspunde primul, câștigă.',
    heroEn:
      'You\'re under a car, hands covered in oil. The phone rings. Whoever answers first wins.',
    descriptionRo:
      'Programări reparații, urgențe pană, informații prețuri. Agentul preia fiecare apel și umple agenda service-ului.',
    descriptionEn:
      'Repair bookings, breakdown emergencies, pricing information. The agent handles every call and fills your service schedule.',
    stats: [
      {
        label: 'Valoarea medie a unei reparații',
        value: '280',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '35',
      },
      {
        label: 'Venit pierdut lunar',
        value: '9.800',
        prefix: '€',
      },
      {
        label: 'Clienți care sună alt service dacă nu răspunzi',
        value: '65',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Luni dimineața — toate rampa ocupate',
        without:
          'Ai 3 mașini pe lift, mâinile în ulei. Telefonul sună de 8 ori. Pierzi 5 programări.',
        with: 'Agentul preia toate apelurile, verifică disponibilitatea și programează fiecare client pe slotul potrivit.',
      },
      {
        title: 'Pană pe drum — client dispersat',
        without:
          'Sună, nu răspunzi, caută pe Google „service auto non-stop". Ai pierdut clientul.',
        with: 'Agentul răspunde, colectează locația, evaluează urgența și te notifică imediat.',
      },
      {
        title: 'Client care întreabă de prețuri',
        without:
          'Sună la 3 service-uri. Nu răspunzi tu. Alege pe altul.',
        with: 'Agentul oferă estimări de preț, explică ce include și programează direct.',
      },
    ],
    beforeAfter: [
      {
        before: 'Mâinile în ulei, telefonul sună',
        after: 'Agentul preia, tu repari',
      },
      {
        before: 'Programări pierdute la ore de vârf',
        after: 'Apeluri nelimitate simultan',
      },
      {
        before: 'Clienți care sună concurența',
        after: 'Răspuns instant, programare pe loc',
      },
      {
        before: 'Urgențe fără răspuns în afara orelor',
        after: 'Preluare urgențe 24/7 cu notificare',
      },
      {
        before: 'Prețuri repetate de 20 ori pe zi',
        after: 'Agentul dă informații de preț automat',
      },
    ],
    objections: [
      {
        question: 'Fiecare mașină e diferită. Nu poate da prețuri exacte.',
        answer:
          'Corect. Agentul dă estimări de preț și specifică „preț final după diagnoza la service". Exact ce ai spune și tu la telefon.',
      },
      {
        question: 'Clienții mei preferă să vorbească direct cu mecanicul.',
        answer:
          'Și pot. Agentul face prima preluare — colectează informații, programează. Tu vorbești cu clientul când e la tine în service, cu toate detaliile deja pregătite.',
      },
      {
        question: 'Suntem un service mic, nu ne permitem.',
        answer:
          'Pachetul Starter e €299/lună. O singură reparație recuperată pe lună acoperă costul. De obicei recuperezi 10+.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări reparații',
        description:
          'Programează pe rampa potrivită în funcție de tipul lucrării.',
      },
      {
        icon: 'alert',
        title: 'Urgențe pană/accident',
        description:
          'Preia apeluri de urgență, colectează locația și notifică echipa.',
      },
      {
        icon: 'price',
        title: 'Estimări de preț',
        description:
          'Oferă estimări de preț pentru lucrări uzuale din lista ta.',
      },
      {
        icon: 'reminder',
        title: 'Reminder-uri ITP/revizie',
        description:
          'Notifică clienții când se apropie ITP-ul sau revizia programată.',
      },
      {
        icon: 'sms',
        title: 'Notificare mașină gata',
        description:
          'Trimite SMS clientului când mașina e gata de ridicat.',
      },
      {
        icon: 'clock',
        title: 'Disponibilitate 24/7',
        description:
          'Preia apeluri non-stop, inclusiv urgențe nocturne.',
      },
    ],
    recommendedTier: 'starter',
    roiDefaults: {
      callsPerDay: 10,
      missedCallPercent: 40,
      avgAppointmentValue: 280,
    },
  },
  {
    slug: 'frizerii-barbershop',
    nameRo: 'Frizerii & Barbershop',
    nameEn: 'Barbershops',
    icon: 'scissors-alt',
    heroRo:
      'Clientul sună pentru programare. Tu tunzi pe cineva. Telefonul sună în gol.',
    heroEn:
      'A customer calls to book. You\'re cutting someone\'s hair. The phone rings out.',
    descriptionRo:
      'Programări rapide, rebooking automat, reminder-uri. Simplu, eficient, fără complicații.',
    descriptionEn:
      'Quick bookings, automatic rebooking, reminders. Simple, efficient, no complications.',
    stats: [
      {
        label: 'Valoarea medie a unui serviciu',
        value: '35',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '52',
      },
      {
        label: 'Venit pierdut lunar',
        value: '1.820',
        prefix: '€',
      },
      {
        label: 'Clienți recurenți pierduți anual din cauza așteptării',
        value: '25',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Vineri la 5 — weekend rush',
        without:
          'Toată lumea sună pentru programare. Tu tunzi. Telefonul sună de 15 ori. Răspunzi la 3.',
        with: 'Agentul preia toate 15 apelurile, programează pe fiecare, trimite confirmare. Tu te concentrezi pe tunsori.',
      },
      {
        title: 'Client fidel vrea să reprogrameze',
        without:
          'Sună de 2 ori, nu răspunzi. Se duce la alt barbershop. L-ai pierdut.',
        with: 'Agentul reprogramează instant, slot vechi eliberat, client mulțumit.',
      },
      {
        title: 'Programare la 10 seara pentru mâine dimineață',
        without:
          'Nimeni nu răspunde. Clientul programează la altcineva care are booking online.',
        with: 'Agentul programează și trimite confirmare. Clientul e al tău.',
      },
    ],
    beforeAfter: [
      {
        before: 'Foarfeca în mână, telefonul sună',
        after: 'Agentul preia, tu tunzi',
      },
      {
        before: 'Clienți care renunță după 2 apeluri fără răspuns',
        after: 'Răspuns instant la fiecare apel',
      },
      {
        before: 'No-show-uri frecvente',
        after: 'Reminder SMS cu 2h înainte, no-show redus 40%',
      },
      {
        before: 'Programări doar în orele de lucru',
        after: 'Booking 24/7 prin telefon',
      },
      {
        before: 'Agendă pe hârtie, haos în programări',
        after: 'Calendar digital, zero suprapuneri',
      },
    ],
    objections: [
      {
        question: 'Clientul meu vrea să vorbească cu mine, nu cu un robot.',
        answer:
          'Și poate. Dar 90% din apeluri sunt „Hai o programare la 3, te rog." Agentul rezolvă asta în 20 de secunde. Tu ai timp pentru conversații reale când clientul e în scaun.',
      },
      {
        question: 'E prea mult pentru un barbershop.',
        answer:
          '€299/lună. Dacă pierzi 9 programări de €35 pe lună (adică o zi proastă), agentul se plătește singur. Restul e profit.',
      },
      {
        question: 'Am deja o aplicație de booking.',
        answer:
          'Perfect. Agentul e pentru cei care preferă să sune. Unii clienți (mai ales cei 40+) nu vor da tap pe o aplicație.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări rapide',
        description:
          'Programare în 20 de secunde: serviciu, frizer, oră.',
      },
      {
        icon: 'refresh',
        title: 'Reprogramare automată',
        description:
          'Clientul reprogramează fără bătaie de cap, slotul e eliberat.',
      },
      {
        icon: 'bell',
        title: 'Reminder-uri SMS',
        description:
          'Reminder cu 2h înainte de programare pentru reducerea no-show.',
      },
      {
        icon: 'clock',
        title: 'Non-stop 24/7',
        description:
          'Programări chiar și la miezul nopții.',
      },
      {
        icon: 'users',
        title: 'Mai mulți frizeri',
        description:
          'Programează la frizerul preferat sau la primul disponibil.',
      },
      {
        icon: 'info',
        title: 'Informații servicii',
        description:
          'Răspunde la întrebări despre servicii, durate și prețuri.',
      },
    ],
    recommendedTier: 'starter',
    roiDefaults: {
      callsPerDay: 15,
      missedCallPercent: 45,
      avgAppointmentValue: 35,
    },
  },
  {
    slug: 'hoteluri-hospitality',
    nameRo: 'Hoteluri & Hospitality',
    nameEn: 'Hotels & Hospitality',
    icon: 'hotel',
    heroRo:
      'Oaspetele sună la 2 noaptea să întrebe de check-in. Recepția e ocupată.',
    heroEn:
      'A guest calls at 2 AM asking about check-in. The front desk is busy.',
    descriptionRo:
      'Rezervări, confirmări, FAQ-uri, apeluri de noapte. Agentul tău nu doarme niciodată și vorbește și engleză.',
    descriptionEn:
      'Reservations, confirmations, FAQs, night calls. Your agent never sleeps and speaks English too.',
    stats: [
      {
        label: 'Valoarea medie a unei rezervări',
        value: '180',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar (noapte)',
        value: '28',
      },
      {
        label: 'Venit pierdut lunar din apeluri nepreluate',
        value: '5.040',
        prefix: '€',
      },
      {
        label: 'Satisfacție oaspeți cu răspuns instant',
        value: '92',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: '2 noaptea — turist străin sună să confirme',
        without:
          'Recepția e cu un alt oaspete sau nu e nimeni la telefon. Turistul se îngrijorează, caută alt hotel.',
        with: 'Agentul răspunde în engleză, confirmă rezervarea, oferă detalii check-in și instrucțiuni de acces.',
      },
      {
        title: 'Sezon de vârf — telefon non-stop',
        without:
          'Recepția e copleșită. 40% din apeluri pierdute. Rezervări care se duc la booking.com cu comision 15-20%.',
        with: 'Agentul preia toate apelurile, face rezervări directe (fără comision booking.com), confirmare instant.',
      },
      {
        title: 'Oaspete care întreabă despre facilități',
        without:
          'Sună, linia e ocupată, caută pe Google, găsește alt hotel cu recenzii mai bune.',
        with: 'Agentul răspunde la toate întrebările: piscină, parcare, restaurant, check-in/out.',
      },
    ],
    beforeAfter: [
      {
        before: 'Apeluri de noapte fără răspuns',
        after: 'Recepție vocală 24/7 în română și engleză',
      },
      {
        before: 'Rezervări pierdute către OTA-uri (comision 15-20%)',
        after: 'Rezervări directe prin telefon, zero comision',
      },
      {
        before: 'Recepție copleșită în sezon',
        after: 'Apeluri nelimitate simultan',
      },
      {
        before: 'FAQ-uri repetitive care consumă timp recepției',
        after: 'Răspuns automat la întrebări frecvente',
      },
      {
        before: 'Oaspeți frustrați de lipsa răspunsului',
        after: 'Răspuns instant, oaspeți mulțumiți',
      },
    ],
    objections: [
      {
        question: 'Hospitalitatea înseamnă touch personal.',
        answer:
          'Absolut. Și touch-ul personal începe cu un răspuns la telefon, nu cu o mesagerie automată. Agentul face prima impresie — echipa ta face experiența.',
      },
      {
        question: 'Avem deja sistem de rezervări online.',
        answer:
          'Mulți oaspeți (mai ales cei 50+) preferă să sune. Agentul completează booking-ul online, nu îl înlocuiește. Plus, salvează comisionul OTA.',
      },
      {
        question: 'Vorbesc oaspeții mai multe limbi.',
        answer:
          'Agentul vorbește română și engleză fluent. Comută automat în funcție de limba oaspetelui.',
      },
      {
        question: 'Cum gestionează cereri speciale?',
        answer:
          'Notează cererea, confirmă disponibilitatea (dacă are datele) și trimite notificare echipei. Cereri complexe sunt transferate la recepție.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Rezervări directe',
        description:
          'Rezervări telefonice fără comision OTA, direct în sistemul hotelului.',
      },
      {
        icon: 'multilingual',
        title: 'Română și engleză',
        description:
          'Comută automat între limbi pentru oaspeți internaționali.',
      },
      {
        icon: 'info',
        title: 'FAQ-uri facilități',
        description:
          'Răspunde la întrebări despre cameră, facilități, check-in/out, parcare.',
      },
      {
        icon: 'clock',
        title: 'Non-stop 24/7',
        description:
          'Răspunde la apeluri de noapte exact ca o recepție permanentă.',
      },
      {
        icon: 'sms',
        title: 'Confirmare rezervare',
        description:
          'Trimite confirmare SMS/email cu detalii rezervare și instrucțiuni.',
      },
      {
        icon: 'transfer',
        title: 'Transfer la recepție',
        description:
          'Transferă apelurile complexe către echipa de la recepție.',
      },
    ],
    recommendedTier: 'professional',
    roiDefaults: {
      callsPerDay: 15,
      missedCallPercent: 20,
      avgAppointmentValue: 180,
    },
  },
  {
    slug: 'consultanti-imigrare',
    nameRo: 'Consultanți Imigrare',
    nameEn: 'Immigration Consultants',
    icon: 'globe',
    heroRo:
      'Clientul sună să întrebe despre viză. Tu ești în consultație. Pierdut.',
    heroEn:
      'A client calls asking about visas. You\'re in a consultation. Lost.',
    descriptionRo:
      'Informații vize, programări consultații, triaj documente. Agentul preia volumul mare de apeluri repetitive și te lasă pe tine să te ocupi de cazurile complexe.',
    descriptionEn:
      'Visa information, consultation booking, document triage. The agent handles the high volume of repetitive calls and lets you focus on complex cases.',
    stats: [
      {
        label: 'Valoarea medie a unui dosar de imigrare',
        value: '1.800',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '42',
      },
      {
        label: 'Venit potențial pierdut lunar',
        value: '75.600',
        prefix: '€',
      },
      {
        label: 'Apeluri cu aceleași întrebări de bază',
        value: '70',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Miercuri la 2 — 6 apeluri despre vize',
        without:
          'Ești în consultație. 6 apeluri pierdute. 4 din ele erau dosare noi potențiale.',
        with: 'Agentul răspunde la fiecare, oferă informații de bază despre tipurile de viză, colectează datele clientului și programează consultație.',
      },
      {
        title: 'Client din diaspora — apel la 9 seara (ora lor)',
        without:
          'Biroul e închis. Clientul nu găsește informații suficiente online. Sună alt consultant.',
        with: 'Agentul răspunde non-stop, oferă informații despre proces, documente necesare și programează consultație în fusul orar potrivit.',
      },
      {
        title: '„Ce documente îmi trebuie pentru viză de lucru?"',
        without:
          'Această întrebare vine de 20 de ori pe zi. Pierzi ore întregi răspunzând la același lucru.',
        with: 'Agentul oferă lista de documente standard, specifică particularitățile și programează consultația pentru detalii specifice cazului.',
      },
    ],
    beforeAfter: [
      {
        before: 'Ore pierdute cu aceleași întrebări de bază',
        after: 'FAQ automat, tu te ocupi de cazuri complexe',
      },
      {
        before: 'Clienți din diaspora care sună în afara orelor',
        after: 'Disponibilitate 24/7, orice fus orar',
      },
      {
        before: 'Lead-uri pierdute din cauza liniei ocupate',
        after: 'Apeluri simultane nelimitate',
      },
      {
        before: 'Dosare noi pierdute — clientul sună alt consultant',
        after: 'Fiecare potențial client capturat și programat',
      },
      {
        before: 'Triaj manual — timp consumat',
        after: 'Pre-calificare automată: tip viză, documente, urgență',
      },
    ],
    objections: [
      {
        question: 'Fiecare caz de imigrare e diferit.',
        answer:
          'Exact. Agentul nu rezolvă cazuri. Oferă informații de bază (pe care le dai de 20 ori pe zi), colectează datele și programează consultația unde tu faci analiza specifică.',
      },
      {
        question: 'Clienții mei sunt anxioși, vor om real.',
        answer:
          'Un răspuns instant la orice oră calmează mai mult decât o mesagerie automată. Și agentul transferă către tine oricând clientul insistă.',
      },
      {
        question: 'Informațiile despre vize se schimbă frecvent.',
        answer:
          'Actualizăm baza de cunoștințe a agentului ori de câte ori legislația se schimbă. Tu ne spui ce s-a schimbat, noi actualizăm în 24h.',
      },
    ],
    features: [
      {
        icon: 'info',
        title: 'Informații tipuri de viză',
        description:
          'Răspunde la întrebări despre vize de lucru, studii, rezidenți, reunificare familială.',
      },
      {
        icon: 'checklist',
        title: 'Liste documente necesare',
        description:
          'Oferă lista de documente standard pentru fiecare tip de viză.',
      },
      {
        icon: 'calendar',
        title: 'Programare consultații',
        description:
          'Programează consultații cu verificare de disponibilitate.',
      },
      {
        icon: 'qualify',
        title: 'Pre-calificare dosar',
        description:
          'Colectează informații de bază: cetățenie, tip viză, termen dorit.',
      },
      {
        icon: 'multilingual',
        title: 'Română și engleză',
        description:
          'Comunicare bilingvă pentru clienți din diaspora.',
      },
      {
        icon: 'clock',
        title: 'Disponibil 24/7',
        description:
          'Preia apeluri din orice fus orar, oricând.',
      },
    ],
    recommendedTier: 'professional',
    roiDefaults: {
      callsPerDay: 12,
      missedCallPercent: 35,
      avgAppointmentValue: 1800,
    },
  },
  {
    slug: 'notariate',
    nameRo: 'Notariate',
    nameEn: 'Notary Offices',
    icon: 'stamp',
    heroRo:
      'Clientul sună pentru un act notarial. Sunteți ocupat. Telefonul sună de 4 ori. Nimeni nu răspunde.',
    heroEn:
      'A client calls for a notarial deed. You\'re busy. The phone rings 4 times. No one answers.',
    descriptionRo:
      'Programări acte, remindere documente, informații proceduri. Agentul se ocupă de apeluri ca să vă ocupați de acte.',
    descriptionEn:
      'Document appointments, document reminders, procedure information. The agent handles calls so you can focus on deeds.',
    stats: [
      {
        label: 'Valoarea medie a unui act notarial',
        value: '250',
        prefix: '€',
      },
      {
        label: 'Apeluri pierdute lunar',
        value: '30',
      },
      {
        label: 'Venit pierdut lunar',
        value: '7.500',
        prefix: '€',
      },
      {
        label: 'Clienți care vin fără documente complete',
        value: '35',
        suffix: '%',
      },
    ],
    scenarios: [
      {
        title: 'Joi la 11 — 3 autentificări consecutive',
        without:
          'Între autentificări, telefonul sună. Nu puteți răspunde. 3 clienți noi pierduți.',
        with: 'Agentul preia apelurile, informează despre documente necesare, programează și trimite lista de documente pe WhatsApp.',
      },
      {
        title: 'Client care vine fără documente complete',
        without:
          'Actul nu se poate face. Programarea e pierdută. Clientul e frustrat. Trebuie reprogramat.',
        with: 'Agentul trimite lista de documente la programare. Reminder cu 24h înainte: „Aveți toate documentele?" Reducere 60% a vizitelor incomplete.',
      },
      {
        title: '„Ce documente îmi trebuie pentru vânzare apartament?"',
        without:
          'Secretara răspunde la aceeași întrebare de 15 ori pe zi. Timp pierdut, erori posibile.',
        with: 'Agentul oferă lista exactă de documente, specifică particularitățile (moștenire, minor, societate) și programează.',
      },
    ],
    beforeAfter: [
      {
        before: 'Apeluri pierdute între autentificări',
        after: 'Fiecare apel preluat automat',
      },
      {
        before: 'Clienți care vin fără documente',
        after: 'Lista de documente trimisă automat + reminder',
      },
      {
        before: 'Secretară copleșită cu întrebări repetitive',
        after: 'FAQ automat: documente, proceduri, taxe',
      },
      {
        before: 'Programări pierdute din cauza liniei ocupate',
        after: 'Apeluri simultane, fiecare programat',
      },
      {
        before: 'Reprogramări frecvente din cauza documentelor lipsă',
        after: 'Vizite complete, acte finalizate din prima',
      },
    ],
    objections: [
      {
        question: 'Actele notariale sunt complexe. Un robot nu poate consilia.',
        answer:
          'Agentul nu consiliază juridic. Oferă informații de procedură (documente necesare, taxe estimative) și programează. Consultanța o dați dumneavoastră.',
      },
      {
        question: 'Clienții noștri sunt în general persoane în vârstă.',
        answer:
          'Exact de aceea preferă telefonul. Agentul vorbește clar, calm și natural. E mai ușor de înțeles decât un meniu telefonic cu taste.',
      },
      {
        question: 'Avem deja secretară.',
        answer:
          'Agentul completează secretara. Preia apelurile când ea e ocupată, la prânz sau după ore. Și trimite automat listele de documente — lucru pe care secretara uită uneori.',
      },
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Programări acte notariale',
        description:
          'Programează autentificări, legalizări și alte proceduri notariale.',
      },
      {
        icon: 'checklist',
        title: 'Liste documente automate',
        description:
          'Trimite lista exactă de documente pe WhatsApp/email după programare.',
      },
      {
        icon: 'reminder',
        title: 'Reminder documente',
        description:
          'Reminder cu 24h înainte: confirmare programare + verificare documente.',
      },
      {
        icon: 'info',
        title: 'Informații proceduri',
        description:
          'Răspunde la întrebări despre proceduri, taxe estimative și durată.',
      },
      {
        icon: 'clock',
        title: 'Disponibilitate extinsă',
        description:
          'Preia programări și în afara orelor de birou.',
      },
      {
        icon: 'sms',
        title: 'Confirmare SMS/WhatsApp',
        description:
          'Confirmare automată cu toate detaliile: dată, oră, documente necesare.',
      },
    ],
    recommendedTier: 'starter',
    roiDefaults: {
      callsPerDay: 10,
      missedCallPercent: 30,
      avgAppointmentValue: 250,
    },
  },
];
