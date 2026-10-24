import React from 'react';

export interface AspectDialogue {
  titleEn: string;
  titleMr: string;
  cloudBadgeEn: string;
  cloudBadgeMr: string;
  studentQuoteEn: string;
  studentQuoteMr: string;
  shortTakeawayEn: string;
  shortTakeawayMr: string;
}

export interface ProgramCampusHighlight {
  icon: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
}

export interface ProgramPhilosophyHighlight {
  pointsEn: string[];
  pointsMr: string[];
  parentSummaryEn: string;
  parentSummaryMr: string;
}

export interface ProgramSkitData {
  programId: string;
  campusHighlights: ProgramCampusHighlight[];
  philosophyHighlights: ProgramPhilosophyHighlight;
  objectiveCategoriesEn: string[];
  objectiveCategoriesMr: string[];
  timelineDetailsEn: string[];
  timelineDetailsMr: string[];
  dialogues: {
    campus: AspectDialogue;
    crucial: AspectDialogue;
    objectives: AspectDialogue;
    methodology: AspectDialogue;
    expectancies: AspectDialogue;
    routine: AspectDialogue;
  };
}

export const PROGRAM_STUDENT_DIALOGUES: Record<string, ProgramSkitData> = {
  academic: {
    programId: 'academic',
    campusHighlights: [
      {
        icon: '🧸',
        titleEn: 'Calming Sensory Zone',
        titleMr: 'संवेदी शांतता कक्ष (Sensory Corner)',
        descriptionEn: 'Equipped with soothing comforting cushions, soft mats, and warm dim lighting to help children rest and feel peaceful whenever overwhelmed.',
        descriptionMr: 'मुलाला अस्वस्थ वाटल्यास शांत आणि सुरक्षित वाटावे यासाठी मऊ उशा व विश्रांतीची प्रेमळ व्यवस्था.',
      },
      {
        icon: '👨‍🏫',
        titleEn: '1:8 Focused Ratio',
        titleMr: '१:८ शिक्षक-विद्यार्थी प्रमाण',
        descriptionEn: 'Every learner receives attentive one-on-one attention from devoted special educators & caring teachers.',
        descriptionMr: 'प्रत्येक विद्यार्थ्यावर प्रेमाने वैयक्तिक लक्ष देणारे शिक्षक व काळजीवाहक.',
      },
      {
        icon: '🧩',
        titleEn: 'Hands-On Learning Aids',
        titleMr: 'मॉन्टेसरी व संवेदी खेळणी',
        descriptionEn: 'Non-toxic wooden pegboards, colorful alphabet blocks, and visual picture schedules.',
        descriptionMr: 'लाकडी कोडी, मण्यांच्या माळा आणि रंगीत फ्लॅशकार्ड्सद्वारे कृतीयुक्त शिक्षण.',
      },
      {
        icon: '🍲',
        titleEn: 'Supervised Dining Routine',
        titleMr: 'सुरक्षित व पोषक भोजन व्यवस्था',
        descriptionEn: 'Carefully structured meal routines teaching self-feeding, spoon grip, and polite table sharing.',
        descriptionMr: 'हात धुणे, चमचा पकडणे आणि टेबल मॅनर्स शिकवणारे मार्गदर्शित स्नेहभोजन.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'Conventional classrooms expect all students to keep pace with a uniform syllabus, generating frustration and fear. Our Diksha education coursework model customizes the pace, sensory tools, and milestones strictly around your child’s readiness.',
      parentSummaryMr: 'पारंपरिक शाळांमध्ये सर्व मुलांना एकाच मोजमापाने शिकवले जाते, ज्यामुळे विशेष मुलांमध्ये न्यूनगंड आणि भीती निर्माण होते. येथे प्रत्येक मुलाच्या क्षमतेनुसार त्याचा स्वतःचा स्वतंत्र दीक्षा अभ्यासक्रम तयार केला जातो.',
      pointsEn: [
        'Zero Peer Comparison or Ranking',
        'Progress Judged Only Against Self-Baseline',
        'Focus on Real-World Self-Reliance',
      ],
      pointsMr: [
        'तुलना नाही, स्पर्धा नाही',
        'स्वतःच्या प्रगतीवरच मूल्यमापन',
        'आत्मसन्मान व स्वावलंबनावर भर',
      ],
    },
    objectiveCategoriesEn: [
      'Functional Literacy & Symbol Recognition',
      'Functional Currency & Basic Math',
      'Activities of Daily Living (ADL)',
      'Social Interaction & Communication',
    ],
    objectiveCategoriesMr: [
      'वाचन व चिन्हे ओळखणे',
      'दैनिक हिशोब व व्यवहार',
      'स्वतःची कामे स्वतः करणे',
      'स्पष्ट संवाद व भावना प्रकटीकरण',
    ],
    timelineDetailsEn: [
      'Emotional settling, separation ease, following basic commands, and establishing comfortable chair posture.',
      'Doubling of attention span, identifying colors & objects, and independently verbalizing/signaling needs.',
      'Independent dress/eating skills, tracing name, recognizing currency, and confident polite interactions.',
    ],
    timelineDetailsMr: [
      'शाळेच्या वातावरणाशी जुळवून घेणे, भयमुक्त होणे आणि वर्गातील दैनंदिन नियमांची सवय होणे.',
      'रंग, वस्तू व गरजा ओळखणे, तहान-भूक स्वतःहून सांगणे आणि चिडचिड कमी होणे.',
      'स्वतःची कामे स्वतः करणे, नाव ओळखणे, मित्रांसोबत खेळणे आणि सामाजिक शिष्टाचार पाळणे.',
    ],
    dialogues: {
      campus: {
        titleEn: 'Campus Life & Classroom Joy',
        titleMr: 'आमच्या विद्यालयातील मज्जा व वर्ग',
        cloudBadgeEn: 'Peek at our Campus!',
        cloudBadgeMr: 'आमचा दिवस बघा!',
        studentQuoteEn:
          'Hello! Come, take a peek at the life we have on our campus! In regular schools, I always felt scared of being laughed at whenever I dropped my pencil, got confused, or took five extra minutes to answer. But here at Shree Sai Seva, everything is so gentle and cheerful. Our classrooms aren\'t filled with harsh scolding: they are filled with vibrant colours, soft therapy mats, wooden puzzle blocks, and smiling faces. Every morning we start together with singing and gentle yoga. If I feel overwhelmed or loud sounds bother me, our teachers don\'t get angry; they take me to our calming sensory corner with soft cushions until I feel peaceful again. We play learning games with real toys, eat healthy meals together with our friends at the dining table, and celebrate even the smallest things like holding a spoon properly or tracing a letter!',
        studentQuoteMr:
          'नमस्कार! या, आमच्या विद्यालयातील आमचा दिवस कसा असतो ते अगदी जवळून बघा! इतर सामान्य शाळांमध्ये मी पेन्सिल खाली पाडली, गोंधळलो किंवा उत्तर द्यायला थोडा वेळ लावला की मला भीती वाटायची की सगळे माझ्यावर हसतील. पण आमच्या श्री साई सेवा विद्यालयात तसं मुळीच नाही! इथे शिक्षक कधीही ओरडत नाहीत. आमचे वर्ग रंगीबेरंगी खेळणी, मऊ मॅट्स आणि लाकडी कोड्यांनी भरलेले आहेत. सकाळी आम्ही छान प्रार्थना आणि योग करतो. मला जर कशाचा त्रास झाला किंवा खूप गोंधळ वाटला, तर शिक्षक रागावत नाहीत, उलट मला शांत वाटेल अशा मऊ उशांच्या कॉर्नरमध्ये नेऊन बसवतात. आम्ही मित्रांसोबत एकत्र हसत-खेळत जेवतो आणि एखादं साधं अक्षर गिरवलं किंवा स्वतःच्या हाताने चमचा पकडला तरी सगळे टाळ्या वाजवून कौतुक करतात!',
        shortTakeawayEn: 'A zero-pressure, emotionally safe campus equipped with sensory corners, empathetic teachers, and cheerful group routines.',
        shortTakeawayMr: 'कोणताही मानसिक ताण नसलेले, संवेदी साधने व प्रेमळ शिक्षकांनी युक्त सुरक्षित व आनंददायी वातावरण.',
      },
      crucial: {
        titleEn: 'Why This Program is Crucial',
        titleMr: 'हा अभ्यासक्रम का महत्त्वाचा आहे?',
        cloudBadgeEn: 'Why it means the world to me',
        cloudBadgeMr: 'माझ्यासाठी हे का महत्त्वाचं आहे?',
        studentQuoteEn:
          'Do you know why this special education program means the entire world to me and my family? Before my parents brought me here, big textbooks with crowded small letters made my head spin. In standard classrooms, the teacher moved so fast on the blackboard, and when I couldn\'t keep up, people thought I was stubborn or incapable of learning. It made me cry and stay silent for days. But on my very first day here, my teacher hugged me and said: "Aarav, you are wonderful, and we will learn together at your own speed!" In this program, nobody forces me to memorize things I don\'t understand. My teacher sits right beside me with flashcards and colorful beads. They teach me how to express myself, how to stay calm, and how to believe in myself. For the first time in my life, I feel confident, valued, and proud of who I am.',
        studentQuoteMr:
          'माझ्यासाठी आणि माझ्या आई-वडिलांसाठी हा विशेष अभ्यासक्रम इतका महत्त्वाचा का आहे, हे तुम्हाला माहितीये का? इथे येण्यापूर्वी गर्दीने भरलेली मोठी पुस्तकं आणि बारीक आकडे बघून माझ्या डोक्यात गोंधळ व्हायचा. इतर शाळांमध्ये शिक्षक फळ्यावर खूप वेगाने शिकवायचे, आणि मला ते न जमल्यामुळे लोकांना वाटायचं की मी हट्टी आहे किंवा मला कधीच काही शिकता येणार नाही. यामुळे मला खूप रडू यायचं आणि मी कोणाशीही बोलत नसे. पण इथे पहिल्याच दिवशी माझ्या शिक्षकांनी मला जवळ घेतलं आणि सांगितलं: "आरव, तू खूप हुशार आहेस, आपण हळूहळू आणि आनंदाने शिकूया!" इथे कोणावरही घोकंपट्टीची सक्ती नसते. शिक्षक स्वतः शेजारी बसून रंगीत मणी आणि चित्रांच्या कार्ड्सने शिकवतात. मला माझे विचार व्यक्त करायला शिकवले. आयुष्यात पहिल्यांदाच मला स्वतःचा अभिमान वाटतोय!',
        shortTakeawayEn: 'Replaces textbook trauma and competitive stress with personalized Diksha education coursework pace, emotional healing, and dignity.',
        shortTakeawayMr: 'घोकंपट्टी आणि न्यूनगंड दूर करून मुलामध्ये आत्मविश्वास, आनंद आणि स्वतःची ओळख निर्माण करणे.',
      },
      objectives: {
        titleEn: 'Key Pedagogical Objectives',
        titleMr: 'प्रमुख उद्दिष्टे (Core Objectives)',
        cloudBadgeEn: 'What I am learning to do',
        cloudBadgeMr: 'मी काय काय शिकणार?',
        studentQuoteEn:
          'Let me explain what we are really working towards in this program! We don\'t just sit and write ABCD on pages. Our teachers teach us real-life abilities so that we don\'t have to depend on someone for every little thing. First, I am learning functional reading: so I can identify the bus number when travelling with my mother, recognize danger signs, and read shop boards. Second, I am practicing functional math: counting 10 and 20 rupee notes so I can buy my favorite biscuits and check if the shopkeeper gave back the right coins. Third, self-help skills: buttoning my uniform shirt, tying shoelaces, washing hands before eating, and keeping my bag organized. And most importantly, communication: learning how to clearly say "I am thirsty", "I need help", or "I am feeling uneasy" without getting frustrated. This is giving me the wings to live with dignity!',
        studentQuoteMr:
          'आम्ही इथे नक्की काय साध्य करतोय ते मी तुम्हाला सांगतो! इथे फक्त वहीवर अ, आ, इ किंवा ABCD गिरवणे एवढंच नसतं, तर आम्ही स्वावलंबी जीवन जगायला शिकतो. पहिलं म्हणजे, व्यावहारिक वाचन: जेणेकरून आईसोबत बाहेर गेल्यावर मला बसचा नंबर ओळखता यायला हवा, रस्त्यावरील धोक्याच्या पाट्या आणि दुकानांची नावं वाचता यायला हवीत. दुसरं म्हणजे, पैशांचा हिशोब: दहा आणि वीस रुपयांच्या नोटा मोजून स्वतः बिस्किटांचा पुडा विकत घेणे आणि सुट्टे पैसे समजणे. तिसरं म्हणजे, स्वतःची कामं स्वतः करणे: शर्टाची बटणे लावणे, बुटांची लेस बांधणे, जेवणापूर्वी हात स्वच्छ धुणे आणि दप्तर नीट भरणे. आणि सर्वात महत्त्वाचं म्हणजे, संवाद: मला भूक लागली, तहान लागली किंवा त्रास होतोय हे न लाजता आणि न चिडता शांतपणे सांगता येणे. यामुळे मला स्वतःच्या पायावर उभं राहण्याची हिंमत मिळते!',
        shortTakeawayEn: 'Functional reading, currency math, independent hygiene, emotional regulation, and clear daily communication.',
        shortTakeawayMr: 'दैनंदिन जीवनातील व्यावहारिक कौशल्ये: स्वावलंबी दिनचर्या, पैशांचे व्यवहार, साधे वाचन व स्पष्ट संवाद.',
      },
      methodology: {
        titleEn: '5-Step Implementation Journey',
        titleMr: 'अध्यापन व प्रशिक्षण कार्यपद्धती (५ टप्पे)',
        cloudBadgeEn: 'How my teachers teach me',
        cloudBadgeMr: 'शिक्षक कसे शिकवतात?',
        studentQuoteEn:
          'People often wonder: how exactly do teachers teach special children like us? It happens in five thoughtful steps! In Step 1 (Assessment), they don\'t give us scary exams; they sit on the floor and play with us using blocks and clay to observe our strengths, hand grip, and attention span. In Step 2 (Goal Setting), my principal and therapists sit with my parents and prepare my customized "Diksha education coursework" roadmap with small 6-month milestones. In Step 3 (Multisensory Learning), we learn through touch, sounds, and visual flashcards: like tracing letters in colored sand or matching real fruits with picture cards. In Step 4 (Positive Reinforcement), whenever I complete a task correctly, my teacher gives me a star stamp or high-five, which makes me want to try even harder. And in Step 5 (Quarterly Review), they review how much I\'ve improved and adjust the plan so I keep moving forward smoothly.',
        studentQuoteMr:
          'लोकांना नेहमी प्रश्न पडतो की आमच्यासारख्या विशेष मुलांना शिक्षक कसे शिकवतात? यासाठी ५ पद्धतशीर टप्पे असतात! पहिल्या टप्प्यात (मूल्यांकन), कोणतीही कठीण परीक्षा न घेता शिक्षक आमच्यासोबत जमिनीवर बसून खेळतात, आमचा हात कसा वळतो आणि कशात लक्ष लागतं ते पाहतात. दुसऱ्या टप्प्यात (ध्येय निश्चिती), मुख्याध्यापक आणि थेरपिस्ट माझ्या आई-वडिलांशी बोलून फक्त माझ्यासाठी ६ महिन्यांची उद्दिष्टे (दीक्षा अभ्यासक्रम आराखडा) तयार करतात. तिसऱ्या टप्प्यात (संवेदी अध्यापन), आम्ही रंगीत वाळूमध्ये बोटांनी अक्षरं गिरवतो, फळांची प्रत्यक्ष चित्रे जुळवतो आणि गाणी ऐकून शिकतो. चौथ्या टप्प्यात (प्रोत्साहन), एखादी गोष्ट जमली की शिक्षक हातावर स्टार देतात आणि शाबासकी देतात, ज्यामुळे मला अजून छान करावंसं वाटतं. आणि पाचव्या टप्प्यात (त्रैमासिक आढावा), माझी प्रगती तपासून त्यानुसार पुढील अभ्यासाचा मार्ग ठरवला जातो.',
        shortTakeawayEn: 'Scientific 5-stage progression: play-based baseline testing, personalized Diksha education coursework goals, multisensory tools, positive praise, and quarterly tracking.',
        shortTakeawayMr: '५ शास्त्रीय पायऱ्या: खेळाधारित मूल्यमापन, वैयक्तिक दीक्षा अभ्यासक्रम ध्येय, बहुसंवेदी साधने, शाबासकी व त्रैमासिक आढावा.',
      },
      expectancies: {
        titleEn: 'Timeline Milestones & Expectancies',
        titleMr: 'पालकांसाठी प्रगतीची कालमर्यादा (१२ महिने)',
        cloudBadgeEn: 'When will you see change?',
        cloudBadgeMr: 'माझ्यात कधी बदल दिसेल?',
        studentQuoteEn:
          'When my parents first visited the school, they were filled with worry, asking: "When will our child speak, sit calmly, and show progress?" My teachers told them that every child blooms at their own rhythm, but here is what happened in my journey! In the first 3 months (Settling Phase), I stopped crying at drop-off, learned to comfortably sit on my chair for 20 minutes, and followed simple instructions like "come here" and "open the box". By 6 months (Sensory & Routine Phase), my attention doubled, I stopped throwing tantrums during transition times, learned colors, and started indicating toilet and water needs independently. By 9 months (Functional Learning Phase), I started tracing alphabets, matching numbers to objects, and sharing toys with classmates. And by 12 months (Independence Milestone), I was proudly wearing my shoes, eating neatly, identifying family members\' names, and greeting visitors with a warm Namaste!',
        studentQuoteMr:
          'माझे आई-बाबा जेव्हा मला शाळेत घेऊन आले, तेव्हा त्यांच्या डोळ्यात खूप काळजी होती: "आमचा मुलगा कधी बोलणार? कधी एका जागी शांत बसणार? कधी बदल दिसेल?" शिक्षकांनी सांगितलं की प्रत्येक मुलाचा वेग वेगळा असतो. पण माझ्या प्रवासात काय बदल झाला बघा! पहिल्या ३ महिन्यांत (समायोजन काळ), माझं रडणं पूर्ण थांबलं, मी वर्गात २० मिनिटे शांत बसू लागलो आणि "इथे ये", "डबा उघड" अशा साध्या सूचना ऐकू लागलो. ६ महिन्यांत (संवेदी व संवाद टप्पा), माझं लक्ष जास्त वेळ टिकू लागलं, राग-चिडचिड कमी झाली आणि तहान-शौचाची गरज मी स्वतःहून सांगू लागलो. ९ महिन्यांत (कार्यात्मक शिक्षण), मी आकडे आणि वस्तू जुळवू लागलो आणि मित्रांसोबत खेळू लागलो. आणि १२ महिन्यांत (स्वावलंबन टप्पा), मी स्वतःचे बूट घालू लागलो, न सांडता जेवू लागलो आणि घरी पाहुणे आले की हात जोडून "नमस्ते" करू लागलो!',
        shortTakeawayEn: 'Predictable developmental progression from emotional settling (0-3m) to sensory calm (3-6m), basic skills (6-9m), and practical independence (9-12m).',
        shortTakeawayMr: 'निश्चित प्रगती टप्पे: वर्गाची सवय (०-३ महिने), संवेदी समतोल व गरज सांगणे (३-६ महिने), व एका वर्षात स्वावलंबन.',
      },
      routine: {
        titleEn: 'Daily Routine & Parent Bridge',
        titleMr: 'दैनिक दिनचर्या व पालकांची भूमिका',
        cloudBadgeEn: 'Our day & family teamwork',
        cloudBadgeMr: 'माझी दिनचर्या आणि आई-बाबा',
        studentQuoteEn:
          'Our entire day is structured like a happy, predictable adventure so we never feel confused or anxious! We begin at 9:30 AM with morning assembly, school prayer, and joyful rhythmic clapping which wakes up our senses. Then we have speech and cognitive therapy where we practice letter sounds and sensory motor exercises. At 11:30 AM is our favorite snack break where teachers guide us in sharing food and saying "thank you". Afternoon is for vocational puzzles, drawing, and storytelling with puppets. And here is what\'s truly wonderful: my teachers don\'t just teach me in school, they call my Mummy and Papa every month, maintain a daily home-school communication diary, and give my parents simple 10-minute games to play with me on Sundays so that what I learn at school stays fresh at home!',
        studentQuoteMr:
          'आमचा संपूर्ण दिवस अगदी आनंददायी आणि सुनियोजित असतो, ज्यामुळे आम्हाला कोणताही ताण येत नाही! सकाळी ९:३० वाजता प्रार्थनेने आणि टाळ्यांच्या तालावर संगीताने सुरुवात होते, ज्यामुळे आमचे मन ताजेतवाने होते. त्यानंतर उच्चार सराव आणि बौद्धिक खेळ होतात, जिथे आम्ही अक्षरांचे आवाज आणि शरीराचा तोल सांभाळायला शिकतो. ११:३० वाजता आमचा आवडता खाऊचा डबा असतो, जिथे वाटून खाणे आणि "थॅंक यू" म्हणायला शिकवले जाते. दुपारच्या सत्रात चित्रकला, लाकडी कोडी आणि बाहुल्यांच्या गोष्टी होतात. आणि सर्वात महत्त्वाची गोष्ट म्हणजे, शिक्षक केवळ शाळेतच नाही तर दर महिन्याला आई-बाबांशी फोनवर बोलतात, रोजच्या प्रगतीची डायरी तपासतात आणि रविवारी घरी खेळण्यासाठी १० मिनिटांचे सोपे खेळ सांगतात!',
        shortTakeawayEn: 'Balanced therapy-integrated daily schedule paired with monthly parent conferences and daily home-school diaries.',
        shortTakeawayMr: 'नियोजनबद्ध दैनिक वेळापत्रक, मासिक पालक चर्चासत्रे आणि दैनंदिन संवाद डायरी.',
      },
    },
  },

  therapy: {
    programId: 'therapy',
    campusHighlights: [
      {
        icon: '🤸‍♂️',
        titleEn: 'Physiotherapy & Mobility Hall',
        titleMr: 'फिजिओथेरपी व हालचाल कक्ष',
        descriptionEn: 'Caregivers provide dedicated help to the students, assisting them with walking practice and doing the needful for their posture and balance.',
        descriptionMr: 'केअरगिव्हर्स विद्यार्थ्यांना प्रत्यक्ष मदत करतात, चालण्याचा सराव करून घेतात आणि त्यांच्या हालचाली व तोल सांभाळण्यासाठी योग्य ती सर्व मदत करतात.',
      },
      {
        icon: '🗣️',
        titleEn: 'Speech & Communication Support',
        titleMr: 'वाणी व संभाषण मदत कक्ष',
        descriptionEn: 'Caregivers provide loving support to the students, practicing everyday communication and doing the needful to encourage speech and self-expression.',
        descriptionMr: 'केअरगिव्हर्स विद्यार्थ्यांना बोलण्यासाठी आपुलकीने मदत करतात, संवाद सराव घेतात आणि त्यांच्या संभाषण गरजांनुसार योग्य ती सर्व मदत करतात.',
      },
      {
        icon: '🌿',
        titleEn: 'Mindfulness & Calming Care Corner',
        titleMr: 'शांतता व माइंडफुलनेस कक्ष',
        descriptionEn: 'Soothing sensory space where therapists guide children through breathing exercises and calming relaxation techniques.',
        descriptionMr: 'मुलांचे मन शांत करण्यासाठी श्वास सराव आणि सोप्या रिलॅक्सेशन तंत्रांची प्रेमळ जागा.',
      },
      {
        icon: '🩼',
        titleEn: 'Assistive Mobility & Walking Support',
        titleMr: 'सहाय्यक हालचाल व चालण्याची मदत',
        descriptionEn: 'Caregivers provide gentle help to the students with walking aids, posture comfort, and doing the needful for their daily mobility and safety.',
        descriptionMr: 'केअरगिव्हर्स विद्यार्थ्यांना चालण्याच्या साधनांमध्ये मदत करतात आणि त्यांच्या दैनंदिन हालचाली व सुरक्षिततेसाठी योग्य ती सर्व मदत करतात.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'Physical stiffness, walking delays, and speech blocks are not not mental defiance, they are neuromuscular hurdles that dissolve with dedicated gentle therapy and sensory recalibration.',
      parentSummaryMr: 'चालताना तोल जाणे, बोलण्यात अडचण किंवा शरीराचा ताठरपणा हा मुलाचा हट्टीपणा नसतो, तर तो स्नायूंचा त्रास असतो. योग्य थेरपीने हा त्रास नक्की दूर होतो.',
      pointsEn: [
        '1:1 Gentle Attention from Dedicated Therapists',
        'Holistic Integration of Body Balance & Speech Clarity',
        '24/7 Positioning Training for Residential Caregivers',
      ],
      pointsMr: [
        'प्रत्येक मुलासाठी स्वतंत्र १:१ थेरपिस्ट सत्र',
        'शारीरिक तोल, चालणे व वाणीचा एकात्मिक विकास',
        'वसतिगृह कर्मचाऱ्यांना योग्य हालचालींचे २४ तास प्रशिक्षण',
      ],
    },
    objectiveCategoriesEn: [
      'Oral Motor Tone & Clear Articulation',
      'Picture Exchange & Expressive Communication',
      'Gait Correction & Standing Balance',
      'Sensory Calming & Desensitization',
    ],
    objectiveCategoriesMr: [
      'तोंड, ओठ व जिभेच्या स्नायूंची ताकद व स्पष्ट शब्द',
      'चित्र देवाणघेवाण व सोप्या खुणांद्वारे संवाद',
      'चालण्यातील तोल सुधारणा व ताठ उभे राहणे',
      'आवाज व स्पर्शाची भीती दूर करून मन शांत करणे',
    ],
    timelineDetailsEn: [
      'Sensory ease, accepting hair brushing/face washing, and joyfully blowing soap bubbles.',
      'Clear production of 3-5 vowel sounds, standing unassisted for 5 minutes, and improved grip.',
      'Walking across the room with caregiver assistance, and independently pointing to picture boards for meals/water.',
    ],
    timelineDetailsMr: [
      'स्पर्शाची भीती कमी होणे, दात घासणे व केस विंचरण्यास सहकार्य, फुगे फुंकण्याचा सराव.',
      'आई, बाबा, पाणी असे सोपे उच्चार; ५ मिनिटे आधाराशिवाय उभे राहण्याचा तोल.',
      'केअरगिव्हर्सच्या मदतीने खोलीत चालणे; चित्र दाखवून भूक व पाण्याची गरज व्यक्त करणे.',
    ],
    dialogues: {
      campus: {
        titleEn: 'Campus Therapy & Calming Care',
        titleMr: 'आमचा थेरपी व शांतता विभाग',
        cloudBadgeEn: 'See where we heal & learn!',
        cloudBadgeMr: 'आमचा थेरपी कक्ष बघा!',
        studentQuoteEn:
          'Hello friends! Come, let me take you to our therapy center! When my parents first brought me here, my legs used to shake whenever I tried to stand, and my mouth felt so heavy that I couldn\'t make clear words. But our therapy room is such a calm and supportive space. We have caring therapists who calm us down whenever we need. They teach us breathing exercises, relaxation techniques, mindfulness, and so on, helping us find balance and confidence every day.',
        studentQuoteMr:
          'मित्रांनो, या! मी तुम्हाला आमचा थेरपी विभाग दाखवतो! मी जेव्हा शाळेत आलो, तेव्हा मला नीट उभे राहता येत नव्हते आणि बोलताना शब्द बाहेरच पडत नव्हते. पण आमचा हा थेरपी कक्ष अतिशय शांत, सुरक्षित आणि आधार देणारा आहे. इथे आमचे काळजी घेणारे थेरपिस्ट आहेत जे आम्हाला गरज असेल तेव्हा प्रेमाने शांत करतात. ते आम्हाला श्वासाचे व्यायाम, रिलॅक्सेशन तंत्र आणि माइंडफुलनेस शिकवतात, ज्यामुळे आम्हाला दररोज नवीन आत्मविश्वास मिळतो.',
        shortTakeawayEn: 'Personalized therapy, mindful relaxation techniques, breathing exercises, and supportive posture guidance.',
        shortTakeawayMr: 'वैयक्तिक थेरपी, श्वास सराव, माइंडफुलनेस आणि शरीराचा तोल सांभाळण्याचे आपुलकीचे मार्गदर्शन.',
      },
      crucial: {
        titleEn: 'Why This Therapy is Vital',
        titleMr: 'ही थेरपी का अत्यंत आवश्यक आहे?',
        cloudBadgeEn: 'Why therapy changed my life',
        cloudBadgeMr: 'थेरपीने माझे आयुष्य कसे बदलले?',
        studentQuoteEn:
          'Do you know why speech and physiotherapy are so crucial for children like me? Many people think that special children don\'t want to speak or walk out of stubbornness. But that is not true! Inside, our muscles are either too stiff like tight rubber bands, or too loose like soft dough, and loud noises feel like thunder in our ears. In regular clinics, appointments are short and rushed. But here, our therapists work with us patiently every day. They stretch our tight leg muscles, gently massage our facial muscles so our tongue can move freely, and teach us that our bodies are capable of wonderful things. Without this therapy, I would have spent my life in bed. With it, I can stand proudly on my own two feet!',
        studentQuoteMr:
          'आमच्यासारख्या मुलांसाठी ही फिजिओ व स्पीच थेरपी इतकी महत्त्वाची का आहे, हे माहितीये का? बाहेर लोकांना वाटतं की मूल हट्टामुळे बोलत नाही किंवा चालत नाही. पण खरं कारण असं नसतं! आमचे स्नायू खूप ताठर असतात किंवा खूप मऊ असतात, आणि आवाजांची आम्हाला खूप भीती वाटते. इतर दवाखान्यांत खूप गर्दी असते आणि घाईघाईत तपासले जाते. पण इथे शाळेत थेरपिस्ट रोज आमच्यासोबत १ तास प्रेमाने सराव करतात. ते माझे पाय हलके करतात, गालावर व्यायाम करून जीभ मोकळी करतात आणि मला विश्वास देतात की मी चालू शकतो! ही थेरपी मिळाली नसती तर मी अंथरुणात पडून राहिलो असतो. आज मी स्वतःच्या पायावर उभा आहे!',
        shortTakeawayEn: 'Direct clinical treatment for neuromuscular spasticity, sensory overload, and oral-motor speech barriers.',
        shortTakeawayMr: 'स्नायूंचा ताठरपणा, वाणीतील अडथळे आणि संवेदी असंतुलनावर वैज्ञानिक व प्रेमळ उपचार.',
      },
      objectives: {
        titleEn: 'Therapeutic Objectives',
        titleMr: 'थेरपीची प्रमुख उद्दिष्टे',
        cloudBadgeEn: 'What my body is achieving',
        cloudBadgeMr: 'माझं शरीर काय शिकतंय?',
        studentQuoteEn:
          'Let me tell you what my body and voice are achieving in this program! First is speech clarity: strengthening lip seal, tongue movements, and breath control so I can pronounce words clearly or point to picture exchange cards to say "I want water" or "I feel happy". Second is standing and walking balance: straightening my knees, placing my feet flat on the floor, and walking without stumbling. Third is sensory calming: helping my brain handle sudden loud sounds, bright lights, and textured food without crying. And fourth is hand grip: making my fingers strong enough to hold a glass, button my shirt, and shake hands with friends!',
        studentQuoteMr:
          'माझे शरीर आणि वाणी इथे काय काय साध्य करतेय ते बघा! पहिलं म्हणजे स्पष्ट बोलणे: ओठ, जीभ आणि श्वासावर ताबा मिळवून "पाणी द्या", "भूक लागली" हे स्पष्ट सांगणे किंवा चित्रांच्या कार्ड्सद्वारे व्यक्त करणे. दुसरं म्हणजे चालण्यातील तोल: पावले जमिनीवर सपाट ठेवून न धडपडता ताठ चालणे. तिसरं म्हणजे संवेदी शांतता: मोठ्या आवाजाची किंवा अनोळखी स्पर्शाची भीती न बाळगणे. आणि चौथं म्हणजे हाताची पकड: ग्लास घट्ट पकडणे, चमच्याने खाणे आणि मित्रांशी हात मिळवणे!',
        shortTakeawayEn: 'Oral articulation, upright unassisted gait, sensory tolerance, and functional bilateral hand strength.',
        shortTakeawayMr: 'स्पष्ट वाणी, स्वतंत्र चालणे, संवेदी भीती मुक्ती आणि हाताच्या स्नायूंची भक्कम पकड.',
      },
      methodology: {
        titleEn: '5 Clinical Implementation Steps',
        titleMr: '५ शास्त्रीय उपचार टप्पे',
        cloudBadgeEn: 'How therapists heal us',
        cloudBadgeMr: 'थेरपिस्ट उपचार कसे करतात?',
        studentQuoteEn:
          'How do our doctors and therapists train us without causing pain? In five scientific steps! In Step 1, they examine our joint flexibility, muscle tone, and sensory triggers. In Step 2, if a child needs supportive calipers, orthotic shoes, or a walker, the school provides them for free and fits them comfortably. In Step 3, we have individual one-on-one sessions with mirrors, bubble-blowing games, and parallel bars. In Step 4, we visit the sensory integration room to swing in hammocks and relax in the foam ball pit. And in Step 5, our therapists train our hostel caregivers so that even while we sleep or eat, our body posture stays healthy!',
        studentQuoteMr:
          'आमचे थेरपिस्ट कोणतीही भीती न वाटू देता ५ टप्प्यांत उपचार करतात! पहिल्या टप्प्यात, ते आमच्या सांध्यांची आणि स्नायूंची वैज्ञानिक तपासणी करतात. दुसऱ्या टप्प्यात, गरज असलेल्या मुलांना कॅलिपर्स, विशेष बूट आणि वॉकर शाळेकडून मोफत उपलब्ध करून दिले जातात. तिसऱ्या टप्प्यात, आरशासमोर बोलण्याचा आणि पॅरलल बार्सवर चालण्याचा वैयक्तिक सराव होतो. चौथ्या टप्प्यात, संवेदी कक्षात झोके व बॉल पूलमध्ये खेळून मनाचा ताण दूर केला जातो. आणि पाचव्या टप्प्यात, वसतिगृहातील कर्मचाऱ्यांना मुलांना योग्य प्रकारे बसवणे व झोपवण्याचे मार्गदर्शन दिले जाते!',
        shortTakeawayEn: 'Clinical motor screening, orthotic fitting, targeted one-on-one sessions, and 24/7 posture care.',
        shortTakeawayMr: 'क्लिनिकल तपासणी, मोफत कॅलिपर्स, वैयक्तिक सत्रे, संवेदी झोके आणि वसतिगृहातील २४ तास काळजी.',
      },
      expectancies: {
        titleEn: '12-Month Recovery Expectations',
        titleMr: '१२ महिन्यांतील अपेक्षित प्रगती',
        cloudBadgeEn: 'When my movements improved',
        cloudBadgeMr: 'माझ्यात कधी बदल घडला?',
        studentQuoteEn:
          'Parents often come with worried eyes: "Will my child ever take a step or say our names?" Here is what happened in my 12-month journey! In Month 1 to 3, my fear of being touched disappeared: I happily allowed teachers to wash my face and loved blowing soap bubbles. In Month 4 to 6, I stood balanced on my own for 5 minutes without holding anyone, and spoke clear words like "Aai", "Baba", and "Pani"! In Month 7 to 9, I walked across the room using the walker. And by Month 12, I was walking to the dining hall with my friends and pointing to picture cards with a big beaming smile!',
        studentQuoteMr:
          'पालक सुरुवातीला काळजीत असतात की "माझे बाळ कधी चालणार? कधी आई-बाबा म्हणणार?" माझ्या १२ महिन्यांत काय घडले ते बघा! पहिल्या ३ महिन्यांत स्पर्शाची भीती संपली: मी स्वतः दात घासून घेऊ लागलो आणि फुगे उडवण्याचा सराव करू लागलो. ४ ते ६ महिन्यांत मी कोणाचाही आधार न घेता ५ मिनिटे ताठ उभा राहू लागलो आणि "आई", "बाबा", "पाणी" असे शब्द स्पष्ट बोलू लागलो. ७ ते ९ महिन्यांत वॉकरच्या साहाय्याने खोलीभर फिरू लागलो. आणि १२ महिने पूर्ण होताच, मी मित्रांसोबत जेवायला जाऊ लागलो आणि आनंदाने सर्वांशी हसून संवाद साधू लागलो!',
        shortTakeawayEn: 'Desensitization (0-3m), elementary clarity in speech (4-6m), and assisted walking & communication (7-12m).',
        shortTakeawayMr: 'भीती मुक्ती (०-३ महिने), प्राथमिक शब्द व तोल (४-६ महिने), आणि स्वावलंबी चालणे व संवाद (७-१२ महिने).',
      },
      routine: {
        titleEn: 'Therapy Routine & Home Care',
        titleMr: 'दैनिक थेरपी वेळापत्रक व घरगुती सराव',
        cloudBadgeEn: 'Daily therapy & home exercises',
        cloudBadgeMr: 'रोजची थेरपी आणि आई-बाबा',
        studentQuoteEn:
          'Our therapy routine is balanced so our bodies never feel exhausted! In the morning, we start with warm stretching and gentle muscle massage. Then comes speech therapy where we make funny faces, practice tongue curls, and blow paper boats across water bowls. In the afternoon, we have walking drills on the balance track. Before bed, we relax in the sensory room under starry lights. Best of all, our therapists teach simple 10-minute passive stretches to my parents so that during school holidays at home, my joints stay loose and my progress keeps growing!',
        studentQuoteMr:
          'आमचे थेरपीचे वेळापत्रक खूप छान असते, त्यामुळे थकवा येत नाही! सकाळी हलके स्ट्रेचिंग व मालिशने स्नायू मोकळे केले जातात. नंतर स्पीच थेरपीमध्ये आरशासमोर तोंडाचे गमतीशीर व्यायाम आणि कागदाच्या होड्या फुंकर मारून चालवण्याचा खेळ होतो. दुपारी वॉकिंग ट्रॅकवर चालण्याचा सराव असतो. आणि रात्री झोपण्यापूर्वी संवेदी कक्षात मंद प्रकाशात विश्रांती मिळते. सुट्टीत घरी गेल्यावर स्नायू ताठ होऊ नयेत म्हणून थेरपिस्ट माझ्या आई-वडिलांना घरी करायचे सोपे व्यायाम शिकवतात!',
        shortTakeawayEn: 'Daily neuromuscular stretches, speech sound-drills, and home stretching demonstration guides for vacations.',
        shortTakeawayMr: 'दैनिक स्नायू स्ट्रेचिंग, स्पीच थेरपी सत्रे आणि सुट्ट्यांसाठी पालकांना प्रत्यक्ष प्रात्यक्षिक मार्गदर्शन.',
      },
    },
  },

  lifeskills: {
    programId: 'lifeskills',
    campusHighlights: [
      {
        icon: '🛏️',
        titleEn: 'Homelike Residential Dormitories',
        titleMr: 'कौटुंबिक निवासी वसतिगृह',
        descriptionEn: 'Cozy personal beds, individual lockers, and shared living spaces fostering family warmth.',
        descriptionMr: 'स्वतःची स्वतंत्र गादी, कपाट आणि कौटुंबिक प्रेमाने भरलेले सुरक्षित वसतिगृह.',
      },
      {
        icon: '🚿',
        titleEn: 'Visual Hygiene Washrooms',
        titleMr: 'चित्रमय सूचनांनी सुसज्ज स्वच्छतागृह',
        descriptionEn: 'Step-by-step pictorial cartoon checklists on mirrors guiding washing, brushing, and bathing sequences.',
        descriptionMr: 'आरशावर हात धुणे, दात घासणे व आंघोळीच्या पायऱ्यांची सोपी रंगीत चित्रे.',
      },
      {
        icon: '👕',
        titleEn: 'Fine-Motor Dressing Lab',
        titleMr: 'कपडे व स्वावलंबन सराव दालन',
        descriptionEn: 'Tactile dressing practice frames with large buttons, heavy zippers, snaps, and shoelace loops.',
        descriptionMr: 'बटणे लावणे, चेन ओढणे आणि बुटांची लेस बांधण्याचे विशेष सराव बोर्ड.',
      },
      {
        icon: '🍽️',
        titleEn: 'Family Mealtimes & Eating Together',
        titleMr: 'मार्गदर्शित स्नेहभोजन',
        descriptionEn: 'Caregivers lovingly serve warm, wholesome meals, gently guiding children to eat with care, drink water comfortably, and enjoy eating together like family.',
        descriptionMr: 'मायेने वाढलेले गरम जेवण एकत्र बसून आनंदाने खाणे, पाणी पिणे आणि प्रेमाने जेवणाच्या चांगल्या सवयींचे मार्गदर्शन.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'The true measure of dignity for a special child is not textbook grades, it is personal self-reliance! When a child can bathe, dress, eat, and use the washroom unassisted, they stand tall with self-respect and peace of mind for parents.',
      parentSummaryMr: 'विशेष मुलांसाठी पुस्तकी मार्कांपेक्षा स्वावलंबन हेच खरे जीवन आहे! स्वतःचे कपडे स्वतः घालणे, दात घासणे, न सांडता जेवणे आणि स्वच्छतागृह वापरता येणे हाच खरा सन्मान आहे.',
      pointsEn: [
        'Deconstruction of Complex Tasks into Atomic Steps (Task Analysis)',
        'Eradication of Lifelong Helplessness & Caregiver Burden',
        'Weekly "Star of Independence" Honor Assemblies',
      ],
      pointsMr: [
        'प्रत्येक कृतीचे लहान-लहान टप्प्यांत सोपे विभाजन (Task Analysis)',
        'दुसऱ्यावरील परावलंबित्व संपवून स्वाभिमान मिळवणे',
        'स्वावलंबी झालेल्या विद्यार्थ्यांचे दर आठवड्याला मंचावर कौतुक',
      ],
    },
    objectiveCategoriesEn: [
      'Personal Hygiene & Daily Cleanliness Routine',
      'Morning Hygiene & Tooth Brushing',
      'Buttoning, Zipping & Dressing Sequence',
      'Eating Neatly & Sharing Meals Together',
    ],
    objectiveCategoriesMr: [
      'वैयक्तिक स्वच्छता आणि दैनंदिन सवय',
      'स्वतःचे दात घासणे व आंघोळीची स्वच्छता',
      'कपडे घालणे, बटणे लावणे व बूट-चप्पल चढवणे',
      'न सांडता आपुलकीने व शांतपणे एकत्र जेवण्याच्या सवयी',
    ],
    timelineDetailsEn: [
      'Timely communication of personal hygiene needs and washing hands gently with soap.',
      'Putting on loose clothes independently, fastening Velcro sandals, and brushing with minimal reminders.',
      'Waking up happily, tidying bedding, dressing comfortably, and enjoying meals neatly with friends.',
    ],
    timelineDetailsMr: [
      'वैयक्तिक स्वच्छतेची गरज वेळेवर सांगणे; साबणाने हात स्वच्छ धुण्याची सवय होणे.',
      'स्वतःचे कपडे घालणे व काढणे; चप्पल व्यवस्थित घालणे; दात पूर्ण स्वच्छ करणे.',
      'अंथरुणाची घडी करणे, स्वतः तयार होणे आणि न सांडता मित्रांसोबत प्रेमाने जेवणे.',
    ],
    dialogues: {
      campus: {
        titleEn: 'Hostel Life & Everyday Living Quarters',
        titleMr: 'वसतिगृह जीवन व स्वावलंबन परिसर',
        cloudBadgeEn: 'Peek at our home quarters!',
        cloudBadgeMr: 'आमचं घर बघा!',
        studentQuoteEn:
          'Come inside our hostel living campus! This is where we learn the most precious ability in the world: how to take care of ourselves! Our dormitories look like a warm family home with soft beds, neat personal lockers for our clothes, clean living spaces with helpful visual guides, and a sunny dining hall where we sit together like brothers and sisters. We don\'t just sit in classrooms, our entire living space and dining table is where we warmly practice real-world independence!',
        studentQuoteMr:
          'या, आमचं वसतिगृह बघा! इथे आम्ही जगातली सर्वात महत्त्वाची गोष्ट शिकतो: स्वतःची काळजी स्वतः कशी घ्यायची! आमचं वसतिगृह अगदी घरासारखं आहे. प्रत्येकाची छान गादी, कपड्यांचे कपाट, भिंतीवर लावलेली सोपी चित्रे आणि सगळे मित्र एकत्र बसून जेवणारा मोठा डायनिंग हॉल! इथे आम्ही फक्त पुस्तकातून शिकत नाही, तर प्रत्यक्ष दात घासणे, अंथरुणाची घडी करणे आणि व्यवस्थित जेवणे आनंदाने शिकतो!',
        shortTakeawayEn: 'Dormitories designed for real-world self-care mastery with pictorial guides and dressing practice frames.',
        shortTakeawayMr: 'प्रत्यक्ष जीवन कौशल्यांसाठी सुसज्ज वसतिगृह, चित्रमय आरसे आणि बटणे-लेस सराव बोर्ड.',
      },
      crucial: {
        titleEn: 'Why Self-Care Independence Matters',
        titleMr: 'स्वावलंबन प्रशिक्षण का सर्वात महत्त्वाचे आहे?',
        cloudBadgeEn: 'Why taking care of myself is dignity',
        cloudBadgeMr: 'स्वतःची कामे स्वतः करण्यातला आनंद',
        studentQuoteEn:
          'Why is ADL and self-care training the most sacred thing we learn here? Think about this: as a child with special needs grows up, the deepest worry every mother and father carries in their heart is: "Who will take care of my child after we are gone? Who will feed him? Who will help him with personal hygiene?" When I couldn\'t button my shirt or tell someone I needed help, I felt so helpless and cried in shame. But this program gave me the greatest gift a human can have: dignity! Being able to dress myself, brush my own teeth, and eat neatly means I am never a burden. I am an independent, dignified human being!',
        studentQuoteMr:
          'आमच्यासाठी हे स्वावलंबन प्रशिक्षण इतके महत्त्वाचे का आहे? विचार करा, विशेष मूल मोठे झाल्यावर प्रत्येक आई-वडिलांच्या मनात एकच मोठी भीती असते: "आमच्यानंतर आमच्या बाळाचे काय होणार? त्याला कोण भरवणार? त्याला कोण सांभाळणार?" जेव्हा मला शर्टाचे बटण लावता येत नव्हते किंवा स्वच्छतागृहाला जाणे सांगता येत नव्हते, तेव्हा मला खूप दुःख व्हायचे. पण या शाळेने मला स्वाभिमान दिला! स्वतःचे कपडे स्वतः घालणे, दात घासणे आणि न सांडता जेवणे यामुळे मी कोणावरही ओझे उरलेलो नाही. मी स्वावलंबी बनलो आहे!',
        shortTakeawayEn: 'Eradicates humiliating dependence, solves parental worry of "after us what?", and restores personal dignity.',
        shortTakeawayMr: 'दुसऱ्यावरील परावलंबित्व संपवून पालकांची भविष्याची चिंता दूर करणे आणि सन्मान मिळवून देणे.',
      },
      objectives: {
        titleEn: 'Key ADL Objectives',
        titleMr: 'स्वावलंबनाची प्रमुख उद्दिष्टे',
        cloudBadgeEn: 'What I am mastering daily',
        cloudBadgeMr: 'मी रोज काय शिकतोय?',
        studentQuoteEn:
          'Here are the big milestones we conquer in our daily living program! First, personal hygiene: learning clean daily habits and taking care of ourselves with pride. We focus on recognizing the body\'s signal on time and using the washroom cleanly. Second, morning grooming: holding our toothbrush properly, lathering soap, bathing, drying with a towel, and combing hair in front of the mirror. Third, dressing mastery: wearing trousers, buttoning shirts, and strapping sandals. And fourth, neat dining: eating properly with a spoon or fingers without spilling food, and drinking with good table manners!',
        studentQuoteMr:
          'आम्ही रोज काय काय शिकतोय ते बघा! पहिलं म्हणजे, वैयक्तिक स्वच्छता: स्वच्छतेच्या चांगल्या सवयी आत्मसात करणे आणि स्वाभिमानाने राहणे. दुसरं म्हणजे, स्वतःचे दात घासणे, साबण लावून आंघोळ करणे, टॉवेलने अंग पुसणे आणि केस विंचरणे. तिसरं म्हणजे, स्वतःचे कपडे स्वतः घालणे, बटणे लावणे आणि चप्पल व्यवस्थित चढवणे. आणि चौथं म्हणजे, ताटातले अन्न सांडू न देता स्वतःच्या हाताने किंवा चमच्याने व्यवस्थित व शांतपणे जेवण्याची सवय!',
        shortTakeawayEn: 'Personal hygiene habits, daily grooming, dressing with ease, and enjoying meals neatly.',
        shortTakeawayMr: 'वैयक्तिक स्वच्छता, स्वतः आंघोळ व दात घासणे, कपडे घालणे आणि न सांडता व्यवस्थित जेवण्याच्या सवयी.',
      },
      methodology: {
        titleEn: '5 Steps to Independence',
        titleMr: 'स्वावलंबनाचे ५ सोपे टप्पे',
        cloudBadgeEn: 'How caregivers teach us',
        cloudBadgeMr: 'शिक्षक आम्हाला कसे शिकवतात?',
        studentQuoteEn:
          'How do our house-parents teach us things that seemed impossible? In five loving steps! First, "Task Analysis": they break a big task like brushing into 12 tiny, easy steps. Second, "Visual Strips": cartoon picture cards are pasted beside the washbasin so we look and follow. Third, "Backward Chaining": they help us with the hard part at first and let us complete the very last step ourselves so we feel the thrill: "I did it!" Fourth, our senior hostel friends show us how they do it. And fifth, whenever a student masters a skill alone, they receive the "Star of Independence" badge in our Saturday assembly!',
        studentQuoteMr:
          'आमचे गृहप्रमुख आम्हाला अवघड गोष्टी इतक्या सोप्या करून शिकवतात! पहिल्या टप्प्यात, दात घासण्यासारख्या साध्या कामाचे १२ छोटे छोटे भाग केले जातात. दुसऱ्या टप्प्यात, वॉशबेसिनजवळ पायऱ्यांची रंगीत चित्रे लावली जातात. तिसऱ्या टप्प्यात, शिक्षक सुरुवातीची मदत करतात आणि शेवटची सोपी पायरी आम्हाला करू देतात, ज्यामुळे "मी हे करून दाखवले!" असा आनंद होतो. चौथ्या टप्प्यात, मोठी मुले लहान मुलांना शिकवतात. आणि पाचव्या टप्प्यात, स्वतः काम करणाऱ्या विद्यार्थ्याला शनिवारी प्रार्थनेत पदक दिले जाते!',
        shortTakeawayEn: 'Task analysis decomposition, pictorial schedule strips, backward chaining, peer modeling, and weekly badges.',
        shortTakeawayMr: 'सूक्ष्म पायऱ्यांमध्ये विभाजन, चित्रमय वेळापत्रक, साखळी पद्धत, वर्गमित्रांचे अनुकरण व सन्मान पदक.',
      },
      expectancies: {
        titleEn: '12-Month Independence Milestones',
        titleMr: '१२ महिन्यांतील स्वावलंबन टप्पे',
        cloudBadgeEn: 'My journey to doing it alone',
        cloudBadgeMr: 'मी कधी स्वावलंबी झालो?',
        studentQuoteEn:
          'Here is the real timeline of self-reliance over a year! In Month 1 to 3, personal hygiene improved: I learned clean habits and maintaining hygiene with confidence. In Month 4 to 6, I was putting on loose clothes, fastening sandals, and brushing my teeth with just a small verbal reminder. In Month 7 to 9, I learned to fold my bedsheets neatly every morning. And by Month 12, I was waking up, bathing, dressing in my crisp uniform, and eating properly and neatly all by myself! When my mother saw me do this at home during holidays, she hugged me with tears of joy!',
        studentQuoteMr:
          'एका वर्षात स्वावलंबन कसे आले ते बघा! पहिल्या ३ महिन्यांत वैयक्तिक स्वच्छतेची सवय झाली: मी स्वच्छता राखू लागलो आणि साबणाने हात स्वच्छ धुऊ लागलो. ४ ते ६ महिन्यांत मी स्वतः कपडे घालू लागलो, चप्पल चढवू लागलो आणि दात स्वच्छ करू लागलो. ७ ते ९ महिन्यांत सकाळी उठल्यावर स्वतःची अंथरुणे घडी करू लागलो. आणि १२ महिने पूर्ण झाल्यावर, मी कोणाचीही मदत न घेता स्वतः तयार होऊ लागलो, आणि अन्न न सांडता व्यवस्थित जेवू लागलो! सुट्टीत घरी गेल्यावर हे बघून आईच्या डोळ्यात आनंदाश्रू उभे राहिले!',
        shortTakeawayEn: 'Hygiene initiation (0-3m), dressing & brushing (4-6m), and total unassisted daily self-sufficiency (7-12m).',
        shortTakeawayMr: 'स्वच्छतेची सवय (०-३ महिने), कपडे व दात घासणे (४-६ महिने), आणि संपूर्ण स्वावलंबन (७-१२ महिने).',
      },
      routine: {
        titleEn: 'Dormitory Routine & Family Teamwork',
        titleMr: 'वसतिगृहाची दिनचर्या व पालकांची भूमिका',
        cloudBadgeEn: 'From sunrise to bedtime',
        cloudBadgeMr: 'सकाळपासून रात्रीपर्यंतची दिनचर्या',
        studentQuoteEn:
          'From sunrise to bedtime, every single hour is a fun learning moment! At 6:30 AM, our house-mother gently wakes us up and guides our brushing and bathing. At breakfast, we practice holding our glasses and eating without dropping a single grain. In the afternoon, we have shoe-tying and buttoning practice games. In the evening, we fold our laundry and organize our lockers. And here is what our teachers ask our parents: "When Aarav visits home on holidays, please don\'t do his work for him, let him show you how independent he is!" That trust makes me feel so proud and grown-up!',
        studentQuoteMr:
          'सकाळपासून रात्रीपर्यंत आमचा प्रत्येक तास स्वावलंबनाचा असतो! सकाळी ६:३० वाजता गृहप्रमुख प्रेमाने उठवतात आणि दात घासणे व आंघोळीचा सराव करून घेतात. नाश्त्याच्या वेळी अन्न न सांडता खाण्याची सवय होते. दुपारी बटणे लावणे व बुटांची लेस बांधण्याचे खेळ होतात. संध्याकाळी स्वतःचे कपडे घडी करून कपाटात ठेवतो. आणि शिक्षक पालकांना नेहमी सांगतात: "सुट्टीत घरी आल्यावर मुलाची कामे तुम्ही करू नका, त्याला स्वतः करू द्या!" या विश्वासाने आम्हाला खूप अभिमान वाटतो!',
        shortTakeawayEn: 'Guided 6:30 AM to 9:30 PM structured dormitory life paired with parent counseling against overprotective habits.',
        shortTakeawayMr: 'सकाळी ६:३० ते रात्री ९:३० पर्यंत नियोजनबद्ध सराव आणि पालकांनी घरी अति-लाड न करता सराव चालू ठेवणे.',
      },
    },
  },

  vocational: {
    programId: 'vocational',
    campusHighlights: [
      {
        icon: '🎨',
        titleEn: 'Festive Diya Painting',
        titleMr: 'सुंदर पणत्यांचे रंगकाम',
        descriptionEn: 'Bright wooden tables where students happily paint earthen diyas in cheerful festive colors with brushes and sparkles.',
        descriptionMr: 'मुले एकत्र बसून मातीच्या पणत्यांना विविध रंगांनी व चमकीने प्रेमाने सजवतात.',
      },
      {
        icon: '🛍️',
        titleEn: 'Handmade Paper Bags',
        titleMr: 'हस्तनिर्मित कागदी पिशव्या',
        descriptionEn: 'Folding colorful papers neatly, making gentle creases, and tying soft handles to create useful bags.',
        descriptionMr: 'कागदाची सोपी घडी घालून आणि सुंदर दोऱ्या बांधून मुले स्वतःच्या हातांनी पिशव्या बनवतात.',
      },
      {
        icon: '🕯️',
        titleEn: 'Scented Candle Crafting',
        titleMr: 'सुगंधी मेणबत्त्या बनवणे',
        descriptionEn: 'Carefully pouring warm wax into fun shapes and adding mild floral scents to make soothing candles.',
        descriptionMr: 'शिक्षकांच्या मदतीने विविध साच्यांमध्ये मेण ओतून छान सुगंधी मेणबत्त्या तयार करणे.',
      },
      {
        icon: '💌',
        titleEn: 'Greeting Cards & Festive Crafts',
        titleMr: 'शुभेच्छापत्रे व सणांची कलाकुसर',
        descriptionEn: 'Making colorful cards, gift envelopes, and decorative wall hangings with stamps and bright craft papers.',
        descriptionMr: 'सण-उत्सवांसाठी हाताने सुंदर शुभेच्छापत्रे, भेट पाकिटे आणि आकर्षक तोरणे तयार करणे.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'Every student, regardless of age, has creative potential waiting to blossom. Our handicraft workshop gives students hands-on opportunities to paint festive diyas, fold paper bags, and craft candles—filling their hearts with pride, joy, and self-confidence.',
      parentSummaryMr: 'प्रत्येक मुलामध्ये कलेची व नवनिर्मितीची क्षमता असते. आमची हस्तकला कार्यशाळा सर्व वयोगटातील मुलांना पणत्या रंगवणे, कागदी पिशव्या आणि मेणबत्त्या बनवण्याची संधी देऊन त्यांचा आत्मविश्वास आणि आनंद वाढवते.',
      pointsEn: [
        'Gentle Guides & Stencils Helping Every Child Craft with Ease',
        'Friendly Teamwork & Mutual Encouragement',
        'Joy & Self-Respect Earned Through Community Appreciation',
      ],
      pointsMr: [
        'मुलांना सहज जमण्यासाठी सोपे साचे आणि शिक्षकांचे मार्गदर्शन',
        'मित्रांसोबत प्रेमाने व आनंदाने मिळून काम करण्याची सवय',
        'समाजातील कौतुकातून आणि प्रदर्शनातून मिळणारा खरा स्वाभिमान',
      ],
    },
    objectiveCategoriesEn: [
      'Gentle Hand Skills for Brushes & Paper Folding',
      'Patience, Focus & Thoughtful Crafting',
      'Pride & Confidence Through Creative Accomplishment',
      'Practical Lifelong Skills for Home & Independence',
    ],
    objectiveCategoriesMr: [
      'ब्रश पकडणे, कागद घडी करणे व सुरक्षित काम करणे',
      'शांतपणे लक्ष देणे आणि सुबक काम करण्याची सवय',
      'स्वतःच्या कलाकृतीतून स्वाभिमान व आत्मविश्वास संपादन',
      'स्वावलंबनासाठी आवश्यक असणारी उपयुक्त हस्तकला कौशल्ये',
    ],
    timelineDetailsEn: [
      'Learning safe use of colors and materials; folding paper bags with teacher support.',
      'Creating decorated diyas and candles happily and neatly with increasing independence.',
      'Smiling and sharing their handmade crafts with visitors at the school exhibition.',
    ],
    timelineDetailsMr: [
      'रंग व साहित्याचा सुरक्षित वापर; शिक्षकांच्या मदतीने कागदी पिशव्या बनवणे.',
      'अधिक आत्मविश्वासाने आणि स्वतःच्या हातांनी सुंदर पणत्या व मेणबत्त्या सजवणे.',
      'शाळेच्या प्रदर्शनात येणाऱ्या पाहुण्यांशी हसून बोलणे आणि आपली कला दाखवणे.',
    ],
    dialogues: {
      campus: {
        titleEn: 'Joyful Handicraft Workshop',
        titleMr: 'आनंददायी हस्तकला कार्यशाळा',
        cloudBadgeEn: 'Step inside our workshop!',
        cloudBadgeMr: 'आमची कार्यशाळा बघा!',
        studentQuoteEn:
          'Step inside our colorful artisan workshop! You will see sunny wooden tables covered with festive diyas, rolls of handmade craft paper, soothing scented wax, and vibrant paints. The entire room feels bright and welcoming! Students of all ages sit happily around work tables with gentle guides and soft brushes. Everyone works happily together, sharing colors and chatting warmly like a loving family!',
        studentQuoteMr:
          'या, आमची हस्तकला कार्यशाळा बघा! इथे मोठ्या लाकडी टेबलांवर सुंदर पणत्या, कागदी पिशव्या, सुगंधी मेणबत्त्या आणि रंगीबेरंगी रंग मांडलेले असतात. सर्व विद्यार्थी येथे आनंदाने काम करतात. आम्ही सर्वजण एकत्र बसून, एकमेकांना मदत करत आनंदाने सुंदर वस्तू तयार करतो!',
        shortTakeawayEn: 'A joyful workshop where students happily learn diya painting, paper crafts, and candle making.',
        shortTakeawayMr: 'पणत्या रंगवणे, कागदी पिशव्या आणि मेणबत्त्या बनवण्याची प्रेमळ व आनंददायी कार्यशाळा.',
      },
      crucial: {
        titleEn: 'Why Handicraft & Creative Dignity Matters',
        titleMr: 'हस्तकला व निर्मितीचे महत्त्व',
        cloudBadgeEn: 'The joy of creating with my own hands',
        cloudBadgeMr: 'स्वतःच्या हातांनी घडवण्याचा आनंद',
        studentQuoteEn:
          'Why is our workshop so meaningful? Every student, no matter their age or background, deserves to feel capable and creative. When we work with colors, clay, and paper, our hands learn beautiful skills. When family and visitors admire the diyas and bags we created, our hearts fill with happiness and confidence. It gives us a strong sense of dignity and belonging!',
        studentQuoteMr:
          'ही हस्तकला कार्यशाळा इतकी महत्त्वाची का आहे? कारण प्रत्येक मुलामध्ये काहीतरी सुंदर निर्माण करण्याची क्षमता असते. जेव्हा आम्ही रंग, माती आणि कागदासोबत काम करतो, तेव्हा आम्हाला खूप आनंद मिळतो. जेव्हा पालक आणि पाहुणे आमच्या वस्तूंचे कौतुक करतात, तेव्हा आमचा आत्मविश्वास गगनाला भिडतो! यामुळे आम्हाला स्वतःचा अभिमान वाटतो.',
        shortTakeawayEn: 'Builds self-reliance, creative joy, and genuine pride through meaningful hands-on crafts.',
        shortTakeawayMr: 'हस्तकलेच्या माध्यमातून मुलांमध्ये आत्मविश्वास, स्वावलंबन आणि नवनिर्मितीचा खरा आनंद निर्माण करणे.',
      },
      objectives: {
        titleEn: 'Vocational Learning Goals',
        titleMr: 'कार्यशाळेची प्रमुख ध्येये',
        cloudBadgeEn: 'What skills I am building',
        cloudBadgeMr: 'मी कोणती कौशल्ये शिकतोय?',
        studentQuoteEn:
          'Here are the skills we nurture in our workshop! First, steady hands: holding brushes gently, folding paper neatly, and using safety scissors with care. Second, patience and focus: working step-by-step and keeping our tables tidy. Third, friendship and teamwork: sharing colors and helping each other. And fourth, confidence: proudly showing our handmade crafts to everyone during school exhibitions!',
        studentQuoteMr:
          'आम्ही कार्यशाळेत काय शिकतो? पहिलं म्हणजे, हातांची पकड: ब्रश नीट धरणे, कागद घडी करणे आणि काळजीपूर्वक काम करणे. दुसरं म्हणजे, शांतपणे लक्ष केंद्रित करणे आणि कामाची स्वच्छता ठेवणे. तिसरं म्हणजे, मैत्री आणि सहकार्य: एकमेकांना मदत करणे. आणि चौथं म्हणजे, आत्मविश्वास: प्रदर्शनात स्वतःच्या वस्तू अभिमानाने दाखवणे!',
        shortTakeawayEn: 'Strengthening hand coordination, learning patience, and enjoying teamwork with friends.',
        shortTakeawayMr: 'हातांची पकड सुधारणे, कामातील एकाग्रता वाढवणे आणि मित्रांसोबत मिळून काम करण्याचा आनंद घेणे.',
      },
      methodology: {
        titleEn: 'Gentle Learning Steps',
        titleMr: 'शिकण्याचे सोपे टप्पे',
        cloudBadgeEn: 'How caring teachers guide us',
        cloudBadgeMr: 'शिक्षक आम्हाला कसे शिकवतात?',
        studentQuoteEn:
          'How do our caring teachers help us learn? Step-by-step with so much patience! First, they understand what we love doing most—painting, folding, or decorating. Second, they provide gentle wooden guides and stencils so our hands feel supported and our shapes turn out neat. Third, we work happily alongside friends, sharing tasks and encouraging one another. Fourth, we carefully place each finished item in lovely boxes. And finally, during festive exhibitions, visitors come to admire what we made!',
        studentQuoteMr:
          'आमचे शिक्षक आम्हाला कसे शिकवतात? अगदी प्रेमाने आणि टप्प्याटप्प्याने! आधी आम्हाला काय करायला आवडते ते शिक्षक समजून घेतात. नंतर सोप्या लाकडी साच्यांच्या मदतीने हात स्थिर ठेवून सुंदर आकार बनवायला शिकवतात. आम्ही सर्वजण एकत्र बसून आनंदाने काम करतो, वस्तू नीट खोक्यात ठेवतो आणि सणांच्या वेळी प्रदर्शनात सर्वांना दाखवतो!',
        shortTakeawayEn: 'Gentle step-by-step guidance, supportive wooden guides, friendly teamwork, and celebrating our work at exhibitions.',
        shortTakeawayMr: 'शिक्षकांचे प्रेमळ मार्गदर्शन, सोपे साचे, मित्रांसोबत सहकार्य आणि प्रदर्शनात कामाचे कौतुक.',
      },
      expectancies: {
        titleEn: 'Growth & Creative Milestones',
        titleMr: 'प्रगतीचे सुंदर टप्पे',
        cloudBadgeEn: 'How I grow in confidence',
        cloudBadgeMr: 'माझा आत्मविश्वास कसा वाढला?',
        studentQuoteEn:
          'What growth do parents notice as months go by? In the first three months, students become familiar with paints, paper, and tools under loving guidance. From months 4 to 6, they make diyas, bags, and candles with growing independence and big smiles! And by month 12, students stand happily at school exhibitions, greeting visitors with warmth and confidence as everyone appreciates their art.',
        studentQuoteMr:
          'काही महिन्यांत मुलांमध्ये काय बदल दिसून येतो? पहिल्या ३ महिन्यांत मुले शिक्षकांच्या मदतीने साहित्याची ओळख करून घेतात. ४ ते ६ महिन्यांत स्वतःच्या हातांनी आनंदाने वस्तू बनवायला लागतात. आणि वर्षभरात प्रदर्शनात हसतमुखाने पाहुण्यांशी संवाद साधतात आणि आपली कला दाखवतात.',
        shortTakeawayEn: 'Exploring materials with guidance (0-3m), crafting independently with joy (4-6m), and smiling proudly at exhibitions (7-12m).',
        shortTakeawayMr: 'साहित्याची ओळख व सराव (०-३ महिने), आनंदाने स्वतंत्र काम (४-६ महिने), आणि प्रदर्शनात कौतुकाचा अनुभव (७-१२ महिने).',
      },
      routine: {
        titleEn: 'Daily Craft Routine & Care',
        titleMr: 'रोजचा दिनक्रम व आनंददायी सराव',
        cloudBadgeEn: 'A day in our workshop',
        cloudBadgeMr: 'कार्यशाळेतील आमचा दिवस',
        studentQuoteEn:
          'Our workshop time is so joyful and peaceful! We begin our craft sessions with gentle hand stretches and finger exercises to warm up. Then we spend happy hours painting festive diyas and decorating greeting cards. Later in the day, we make eco-friendly paper bags and tie soft handles. Our teachers invite parents and community members to visit our exhibitions and encourage the students!',
        studentQuoteMr:
          'आमच्या कार्यशाळेत खूप प्रसन्न वातावरण असते! सुरुवातीला बोटांचे हलके व्यायाम करून हात मोकळे केले जातात. नंतर आम्ही पणत्या रंगवणे आणि भेटकार्ड्स सजवणे यात रमून जातो. त्यानंतर कागदी पिशव्या बनवण्याचे काम होते. आमचे शिक्षक सर्व पालकांना प्रदर्शनाला भेट देऊन मुलांचे कौतुक करण्याचे आवाहन करतात!',
        shortTakeawayEn: 'Peaceful daily craft sessions from Monday to Saturday, filled with creative fun, guided practice, and loving encouragement.',
        shortTakeawayMr: 'सोमवार ते शनिवार शांत व आनंददायी हस्तकला वर्ग, जिथे मुले प्रेमाने आणि आनंदाने नवनवीन गोष्टी शिकतात.',
      },
    },
  },

  cocurricular: {
    programId: 'cocurricular',
    campusHighlights: [
      {
        icon: '🏃‍♂️',
        titleEn: 'Open Green Playgrounds',
        titleMr: 'विस्तीर्ण मोकळे क्रीडांगण',
        descriptionEn: 'Spacious open grounds with safe play areas, obstacle courses, and room for children to play freely.',
        descriptionMr: 'धावण्यासाठी सुरक्षित मार्ग, साधे अडथळे आणि मुलांसाठी आनंदाने खेळता येईल असे मोकळे मैदान.',
      },
      {
        icon: '🎨',
        titleEn: 'Creative Art & Activity Space',
        titleMr: 'कला व हस्तकला परिसर',
        descriptionEn: 'A welcoming space with drawing sheets, child-friendly colors, and craft supplies where students express their imagination.',
        descriptionMr: 'चित्रे काढण्यासाठी, रंग भरण्यासाठी आणि हस्तकलेसाठी मुलांचे आवडते आनंददायी दालन.',
      },
      {
        icon: '🧘‍♀️',
        titleEn: 'Morning Fresh Air & Gentle Yoga',
        titleMr: 'सकाळचा योग व हलके व्यायाम',
        descriptionEn: 'Open courtyard where children practice gentle morning stretches and deep breaths to start the day peacefully.',
        descriptionMr: 'सकाळी मोकळ्या जागेत सोपे सूर्यनमस्कार आणि शांत श्वास घेऊन दिवसाची प्रसन्न सुरुवात केली जाते.',
      },
      {
        icon: '🎭',
        titleEn: 'Celebration Stage & Performance Area',
        titleMr: 'सांस्कृतिक रंगमंच व उत्सव परिसर',
        descriptionEn: 'A cheerful platform where children take part in festive dances and simple plays, building courage with warm family applause.',
        descriptionMr: 'मुले सण-उत्सवांमध्ये आनंदाने नृत्य व साध्या नाटकात भाग घेतात आणि पालकांच्या टाळ्यांनी त्यांचा आत्मविश्वास वाढतो.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'Play, laughter, and open-air games are essential to every child’s well-being! Active playground games build healthy physical vitality and coordination, while creative arts and festive celebrations give every child the confidence to shine with genuine joy.',
      parentSummaryMr: 'खेळ, आनंद आणि मोकळे हास्य मुलांच्या सर्वांगीण विकासासाठी अत्यंत आवश्यक आहे! मैदानी खेळांमुळे मुलांचे आरोग्य व तोल सुधारतो, तर सांस्कृतिक उपक्रमांमुळे मनातील भीती दूर होऊन मुले आनंदाने चमकतात.',
      pointsEn: [
        'Fascinating Playground Games Tailored for Every Child’s Joy',
        'Gentle Daily Stretches & Deep Breathing for Calmness',
        'Encouraging Participation in School Celebrations & Sports Days',
      ],
      pointsMr: [
        'मुलांना आकर्षित करणारे विविध मैदानी व गमतीशीर खेळ',
        'सकाळचे हलके व्यायाम व मन शांत ठेवणारा सराव',
        'शाळेच्या क्रीडा दिन व उत्सवांमध्ये प्रत्येकाचा आनंदी सहभाग',
      ],
    },
    objectiveCategoriesEn: [
      'Healthy Energy, Body Balance & Vitality',
      'Calmness & Morning Freshness Through Simple Movement',
      'Teamwork, Sharing & Cheering for Friends',
      'Joyful Self-Expression & Celebration Confidence',
    ],
    objectiveCategoriesMr: [
      'शारीरिक ऊर्जा, तोल आणि मैदानी उत्साह',
      'सकाळच्या साध्या हालचालींतून मिळणारी शांतता',
      'खेळातून मैत्री, सहकार्य आणि मित्रांचा उत्साह वाढवणे',
      'आनंदाने स्वतःला व्यक्त करणे व भीतीमुक्ती',
    ],
    timelineDetailsEn: [
      'Running freely on the playground with a big smile and clapping cheerfully during morning assembly.',
      'Catching soft balls with friends and enjoying exciting playground coordination games.',
      'Dancing happily in festive school celebrations and beaming with pride as parents cheer.',
    ],
    timelineDetailsMr: [
      'मैदानावर आनंदाने धावणे आणि सकाळच्या प्रार्थनेत हसतमुखाने टाळ्या वाजवणे.',
      'मित्रांसोबत चेंडू खेळणे आणि साध्या मैदानी खेळांचा मनसोक्त आनंद घेणे.',
      'शाळेच्या उत्सवात नृत्यात सहभागी होऊन पालकांच्या कौतुकाने सुखावणे.',
    ],
    dialogues: {
      campus: {
        titleEn: 'Open Playgrounds & Celebration Stage',
        titleMr: 'मोकळे क्रीडांगण व उत्सव रंगमंच',
        cloudBadgeEn: 'Come play with us on the field!',
        cloudBadgeMr: 'आमचे मैदान बघा!',
        studentQuoteEn:
          'Welcome to the happiest place on our campus: our open playgrounds and activity areas! Look at our open campus grounds, colorful play equipment, and plenty of space to play freely under the trees. When the morning assembly begins, everyone claps and smiles together. And during playtime, we run, throw balls, jump through fun obstacles, and share big laughs with our friends!',
        studentQuoteMr:
          'या, आमच्या शाळेतील सर्वात आनंदी जागा बघा: आमचे मोकळे मैदान आणि खेळाचा परिसर! मोकळे मैदान, खेळाचे साहित्य आणि झाडांची सावली! सकाळी प्रार्थनेच्या वेळी सगळे एकत्र टाळ्या वाजवून आनंद साजरा करतात. आणि खेळाच्या वेळेस आम्ही धावतो, चेंडू खेळतो, गमतीशीर खेळ खेळतो आणि मित्रांसोबत मनसोक्त हसतो!',
        shortTakeawayEn: 'Spacious open playgrounds with fun outdoor games, morning stretches, and joyful celebration spaces.',
        shortTakeawayMr: 'मोकळे क्रीडांगण, मुलांचे आवडते खेळ आणि सण-उत्सवांचे आनंददायी वातावरण.',
      },
      crucial: {
        titleEn: 'Why Play & Movement Matter',
        titleMr: 'खेळ आणि मैदानी आनंद का महत्त्वाचा आहे?',
        cloudBadgeEn: 'Why playing outside makes us happy',
        cloudBadgeMr: 'खेळल्याने आम्हाला काय मिळते?',
        studentQuoteEn:
          'Why are sports and creative activities so important for us? If we only sat in a classroom all day, we would miss the pure joy of childhood! We have lots of natural energy, and playing outside lets us run, stretch, and breathe fresh air. Games keep our bodies active and strong, while taking part in school celebrations helps us overcome shyness. When parents and teachers cheer for us, it shows the world how capable, happy, and full of life we truly are!',
        studentQuoteMr:
          'आमच्यासाठी खेळ आणि उपक्रम इतके महत्त्वाचे का आहेत? दिवसभर फक्त वर्गात बसून राहण्यापेक्षा मैदानात धावल्याने खूप आनंद मिळतो! खेळल्याने शरीर मजबूत होते, धावण्याची ताकद वाढते आणि मनातील भीती पळून जाते. शाळेच्या कार्यक्रमात भाग घेतल्यावर जेव्हा पालक टाळ्या वाजवतात, तेव्हा आम्हाला खूप आनंद होतो!',
        shortTakeawayEn: 'Releases natural energy, keeps bodies healthy and active, and builds cheerful confidence through joyful play.',
        shortTakeawayMr: 'शारीरिक तंदुरुस्ती, मैदानी मौजमज्जा आणि खेळांतून मुलांमध्ये आत्मविश्वास निर्माण करणे.',
      },
      objectives: {
        titleEn: 'Playground & Activity Goals',
        titleMr: 'क्रीडा व उपक्रम विभागाची उद्दिष्टे',
        cloudBadgeEn: 'What we practice on the field',
        cloudBadgeMr: 'आम्ही मैदानात काय शिकतो?',
        studentQuoteEn:
          'Here is what we enjoy practicing every week! First, healthy movement: running freely, building strong legs, and practicing balance with simple morning stretches. Second, fun playground games: playing catch, ring-toss, and exciting relay races. Third, friendship and sportsmanship: sharing balls, cheering for each other, and enjoying games together win or lose. And fourth, celebration confidence: dressing up in colorful clothes and smiling proudly during school festivities!',
        studentQuoteMr:
          'आम्ही मैदानात काय शिकतो? पहिलं म्हणजे, सोपे व्यायाम: न थकता धावणे, शरीराचा तोल सांभाळणे आणि सकाळी हलके व्यायाम करणे. दुसरं म्हणजे, मुलांचे आवडते खेळ: चेंडू झेलणे, रिंग फेकणे आणि शर्यतींचा आनंद घेणे. तिसरं म्हणजे, मैत्री: एकमेकांना मदत करणे आणि हसतमुखाने खेळणे. आणि चौथं म्हणजे, शाळेच्या उत्सवांमध्ये न घाबरता आनंद साजरा करणे!',
        shortTakeawayEn: 'Active movement, engaging outdoor games, friendly teamwork, and joyful celebration confidence.',
        shortTakeawayMr: 'मैदानी खेळ, साधे व्यायाम, खेळाडूवृत्ती आणि उत्सवांमधील आनंदी सहभाग.',
      },
      methodology: {
        titleEn: 'Gentle Steps for Fun & Play',
        titleMr: 'खेळ व उपक्रमांचे सोपे टप्पे',
        cloudBadgeEn: 'How teachers guide our playtime',
        cloudBadgeMr: 'शिक्षक आम्हाला कसे शिकवतात?',
        studentQuoteEn:
          'How do our teachers help us on the field? With endless patience and care! First, they find out what games and creative activities each child loves most. Second, we begin mornings with gentle stretches and calm breathing in the fresh air. Third, we enjoy fascinating playground games tailored so every child can play comfortably. Fourth, we practice cheerful group dances for upcoming celebrations. And fifth, during school sports days and festivals, our families come to cheer us on and celebrate every step of our growth!',
        studentQuoteMr:
          'आमचे शिक्षक मैदानात कशी मदत करतात? अगदी प्रेमाने आणि आपुलकीने! आधी मुलाला कोणता खेळ किंवा उपक्रम आवडतो ते समजून घेतले जाते. नंतर सकाळी मोकळ्या हवेत सोपे व्यायाम होतात. त्यानंतर सर्वांना आवडणारे मैदानी खेळ घेतले जातात. सणांच्या वेळी साधे समूह नृत्य शिकवले जाते. आणि शेवटी शाळेच्या क्रीडा दिन व उत्सवांमध्ये सर्व पालक येऊन मुलांचे कौतुक करतात!',
        shortTakeawayEn: 'Discovering interests, morning stretches, engaging playground games, group dances, and sports day celebrations.',
        shortTakeawayMr: 'मुलांची आवड, सकाळचे व्यायाम, आवडते मैदानी खेळ, समूह नृत्य आणि क्रीडा दिनाचा उत्सव.',
      },
      expectancies: {
        titleEn: 'Milestones of Growth & Play',
        titleMr: 'खेळ व उत्साहातील प्रगती',
        cloudBadgeEn: 'How my confidence blossomed',
        cloudBadgeMr: 'माझा आत्मविश्वास कसा वाढला?',
        studentQuoteEn:
          'Look at how much progress happens over the months! In the first three months, children get used to the playground, running with big smiles and clapping enthusiastically in morning assembly. From months 4 to 6, hand-eye coordination blooms: throwing and catching soft play balls and enjoying group obstacle games. And by month 12, children participate enthusiastically in festive school celebrations, proudly smiling as their parents applaud their happiness!',
        studentQuoteMr:
          'काही महिन्यांत मुलांमध्ये काय बदल होतो? पहिल्या ३ महिन्यांत मुले मोकळेपणाने धावायला लागतात आणि प्रार्थनेत टाळ्या वाजवतात. ४ ते ६ महिन्यांत चेंडू फेकणे-झेलणे आणि मैदानी खेळांचा आनंद घेतात. आणि वर्षभरात शाळेच्या कार्यक्रमात न घाबरता आनंदाने भाग घेतात आणि पालकांचे कौतुक मिळवतात.',
        shortTakeawayEn: 'Playground warming (0-3m), ball games & coordination (4-6m), and celebration confidence (7-12m).',
        shortTakeawayMr: 'मैदानाची सवय (०-३ महिने), चेंडूचे खेळ व तोल (४-६ महिने), आणि उत्सवात आत्मविश्वासाने सहभाग (७-१२ महिने).',
      },
      routine: {
        titleEn: 'Daily Playtime & Sports Days',
        titleMr: 'रोजचे खेळ व क्रीडा दिन',
        cloudBadgeEn: 'A day of active fun',
        cloudBadgeMr: 'मैदानावरील आमचा दिवस',
        studentQuoteEn:
          'Our daily playtime is filled with fresh air and happy energy! Mornings begin gently with morning stretches and uplifting assembly prayers. In the afternoon, we head outside for wonderful playground games—running, catching soft balls, ring-toss, and fun obstacle play that everyone enjoys. On school sports days and festive occasions, our parents come to watch us play and celebrate with big smiles and warm applause!',
        studentQuoteMr:
          'आमचे मैदानावरचे दिवस खूप उत्साहाचे असतात! सकाळी मोकळ्या हवेत हलके व्यायाम आणि प्रार्थना होतात. दुपारी मुलांचे आवडते खेळ—धावणे, चेंडू खेळणे, रिंग फेकणे आणि अडथळ्यांचे गमतीशीर खेळ होतात. आणि शाळेच्या क्रीडा दिनी पालक येऊन मुलांचा खेळ पाहतात आणि प्रेमाने शाबासकी देतात!',
        shortTakeawayEn: 'Morning stretches, engaging afternoon playground games, and sports days celebrated with families.',
        shortTakeawayMr: 'सकाळचे हलके व्यायाम, दुपारचे आवडते मैदानी खेळ आणि पालकांच्या उपस्थितीत क्रीडा दिन उत्सव.',
      },
    },
  },

  counselling: {
    programId: 'counselling',
    campusHighlights: [
      {
        icon: '🧸',
        titleEn: 'Playful Calming Area with Toys',
        titleMr: 'खेळणी व शांततेची जागा',
        descriptionEn: 'Comforting toys and engaging play activities that help children feel happy and relaxed.',
        descriptionMr: 'मुलांचे मन रमवणारी सुंदर खेळणी आणि त्यांना शांत ठेवणारा आनंददायी परिसर.',
      },
      {
        icon: '🎵',
        titleEn: 'Peaceful Music & Comfort Room',
        titleMr: 'मंद संगीत व शांततेचा कक्ष',
        descriptionEn: 'Soft melodies and peaceful surroundings that help calm children when they feel restless or aggressive.',
        descriptionMr: 'मूल चिडलेले किंवा अस्वस्थ असताना त्याला शांत करणारे मंद संगीत व आरामदायक वातावरण.',
      },
      {
        icon: '💬',
        titleEn: 'Dedicated Child Counselors',
        titleMr: 'आपुलकीचे समुपदेशक',
        descriptionEn: 'Loving counselors who sit with the children, listen patiently, speak gently, and stand beside them.',
        descriptionMr: 'मुलांशी प्रेमाने बोलणारे, त्यांचे मन समजून घेणारे आणि त्यांना धीर देणारे समुपदेशक.',
      },
      {
        icon: '🤝',
        titleEn: 'Caring Ayahs & Certificate Help',
        titleMr: 'मावशींची सतत काळजी व दाखल्यांसाठी मदत',
        descriptionEn: 'Devoted ayahs always by the children’s side, and guidance for parents on government disability certificates.',
        descriptionMr: 'मुलांसोबत सतत उपस्थित असणाऱ्या काळजीवाहू मावशी आणि पालकांसाठी दिव्यांग प्रमाणपत्राची मदत.',
      },
    ],
    philosophyHighlights: {
      parentSummaryEn: 'We provide loving, compassionate emotional support directly to children whenever they are in need. When a child becomes aggressive or overwhelmed, our counselors, calming music, toys, and dedicated ayahs provide immediate comfort, while we assist families with official disability certificates.',
      parentSummaryMr: 'मुलांना गरज भासेल तेव्हा त्यांना प्रेमळ आणि आपुलकीचे समुपदेशन देणे हे आमचे कर्तव्य आहे. मूल अस्वस्थ किंवा रागावलेले असताना समुपदेशक, मंद संगीत, खेळणी आणि मावशी त्याला शांत करतात, तसेच पालकांना दिव्यांग प्रमाणपत्र मिळवण्यासाठी मदत केली जाते.',
      pointsEn: [
        'Gentle one-on-one counseling for students when they need someone to talk to',
        'Calming aggressive moments with comforting toys, gentle music, and warm patience',
        'Constant daily care by dedicated ayahs and practical help with disability certificates',
      ],
      pointsMr: [
        'मुलांना गरज असेल तेव्हा त्यांच्याशी आपुलकीचे व प्रेमळ समुपदेशन',
        'खेळणी, मंद संगीत आणि प्रेमाने रागावलेल्या मुलाला शांत करणे',
        'काळजीवाहू मावशींची सतत उपस्थिती आणि शासकीय दिव्यांग प्रमाणपत्रासाठी सहकार्य',
      ],
    },
    objectiveCategoriesEn: [
      'Gentle One-on-One Child Counseling',
      'Calming Restlessness with Toys & Music',
      'Constant Attention from Caring Ayahs',
      'Government Disability Certificate Assistance',
    ],
    objectiveCategoriesMr: [
      'विद्यार्थ्यांशी आपुलकीचा संवाद व समुपदेशन',
      'खेळणी व संगीताद्वारे मुलांचे मन शांत करणे',
      'काळजीवाहू मावशींची सतत उपस्थिती व देखरेख',
      'शासकीय दिव्यांग प्रमाणपत्र मिळवण्यासाठी सहकार्य',
    ],
    timelineDetailsEn: [
      'The child feels safe in school and comfortably approaches counselors and ayahs when upset.',
      'Restlessness and aggressive moments reduce naturally through calming music, toys, and steady companionship.',
      'The child shows healthy emotional balance in daily activities, and disability certificate support is facilitated.',
    ],
    timelineDetailsMr: [
      'मुलाच्या मनातील भीती कमी होऊन ते समुपदेशक आणि मावशींशी मनमोकळेपणाने संवाद साधू लागते.',
      'संगीत, खेळणी आणि प्रेमळ देखरेखीमुळे मुलाचे चिडणे कमी होऊन ते दिवसभर शांत राहू लागते.',
      'मुलामध्ये चांगला आत्मविश्वास निर्माण होतो आणि त्याचे शासकीय दिव्यांग प्रमाणपत्र पूर्ण करण्यास मदत होते.',
    ],
    dialogues: {
      campus: {
        titleEn: 'A Peaceful Place of Comfort & Care',
        titleMr: 'शांतता, प्रेम आणि आधाराची जागा',
        cloudBadgeEn: 'Where every child feels heard and comforted',
        cloudBadgeMr: 'जिथे प्रत्येक मुलाला मायेचा आधार मिळतो',
        studentQuoteEn:
          'Whenever any of us feel upset, frustrated, or find it hard to express what we feel, this is where we come. There are wonderful toys to hold, soothing music playing in the background, and loving counselors who sit right beside us, hold our hands, and speak to us with so much warmth. Our kind ayahs are also always right beside us, making sure we are safe, comfortable, and never alone.',
        studentQuoteMr:
          'जेव्हा आमच्यातील कोणाला राग येतो किंवा मन अस्वस्थ होते, तेव्हा इथे खूप सुरक्षित वाटते. इथे खेळण्यासाठी छान खेळणी, मंद संगीत आणि प्रेमाने समजावून सांगणारे समुपदेशक असतात. ते जवळ बसतात आणि आपुलकीने बोलतात. आमच्या काळजीवाहू मावशीही सतत आमच्या सोबत असतात आणि आमची सर्व काळजी घेतात.',
        shortTakeawayEn: 'A peaceful, comforting space with engaging toys, soothing music, loving counselors, and dedicated ayahs.',
        shortTakeawayMr: 'खेळणी, मंद संगीत, समुपदेशक आणि मावशींची सतत साथ असणारे सुरक्षित व प्रेमळ वातावरण.',
      },
      crucial: {
        titleEn: 'Why Compassionate Care is So Important',
        titleMr: 'प्रेमळ काळजी व समुपदेशन का आवश्यक आहे?',
        cloudBadgeEn: 'Listening and standing beside our students',
        cloudBadgeMr: 'मुलांच्या पाठीशी खंबीरपणे उभे राहणे',
        studentQuoteEn:
          'Sometimes, when we are unable to explain our feelings, frustration turns into restless or aggressive behavior. Here, no one ever scolds us or gets angry. Our counselors patiently sit with us, talk with us, and heal our upset hearts. With gentle music, comforting toys, and our wonderful ayahs always around us, we quickly feel calm and happy again. And our school also helps our parents get our government disability certificates easily!',
        studentQuoteMr:
          'कधीकधी मनात काय चालले आहे हे सांगता न आल्यामुळे आम्हाला राग येतो किंवा चिडचिड होते. पण इथे कोणीही रागावत नाही; समुपदेशक जवळ घेऊन प्रेमाने बोलतात. खेळणी, मंद संगीत आणि मावशींच्या मायेमुळे आम्ही पटकन शांत होतो. तसेच आमच्या आई-बाबांना दिव्यांग प्रमाणपत्र मिळवण्यासाठी शाळा पूर्ण मदत करते.',
        shortTakeawayEn: 'Gently calming aggressive moments with toys, music, understanding counselors, and devoted ayahs.',
        shortTakeawayMr: 'अस्वस्थ मुलांना समुपदेशक, संगीत, खेळणी व मावशींच्या मदतीने प्रेमाने शांत करणे.',
      },
      objectives: {
        titleEn: 'Our Care & Support Goals',
        titleMr: 'काळजी व समुपदेशनाची उद्दिष्टे',
        cloudBadgeEn: 'Peace, comfort, and practical help',
        cloudBadgeMr: 'शांतता, प्रेम आणि आवश्यक मदत',
        studentQuoteEn:
          'What are the core goals of this care? First, giving children a gentle friend in our counselors whenever they need emotional comfort. Second, calming aggressive or restless moments using soothing music and toys. Third, ensuring our attentive ayahs are always present beside us throughout the school day. And fourth, helping our parents complete the documentation needed for government disability certificates!',
        studentQuoteMr:
          'आमच्या या उपक्रमाची मुख्य उद्दिष्टे काय आहेत? पहिलं म्हणजे, गरज असेल तेव्हा मुलांशी प्रेमाने बोलणे. दुसरं म्हणजे, मूल चिडले तर खेळणी व संगीताने त्याला शांत करणे. तिसरं म्हणजे, काळजीवाहू मावशी सतत मुलांसोबत राहून त्यांची देखरेख करतील हे पाहणे. आणि चौथं म्हणजे, पालकांना मुलांचे शासकीय दिव्यांग प्रमाणपत्र मिळवण्यासाठी सर्व मदत करणे!',
        shortTakeawayEn: 'Child-centered counseling, calming with toys & music, dedicated ayah care, and disability certificate support.',
        shortTakeawayMr: 'मुलांशी प्रेमळ समुपदेशन, खेळणी व संगीताने शांत करणे, मावशींची देखरेख आणि दिव्यांग प्रमाणपत्राची मदत.',
      },
      methodology: {
        titleEn: '5 Thoughtful Steps of Child Care',
        titleMr: 'काळजी व मार्गदर्शनाचे ५ सोपे टप्पे',
        cloudBadgeEn: 'How we care for each child',
        cloudBadgeMr: 'मुलांची काळजी कशी घेतली जाते?',
        studentQuoteEn:
          'How do our counselors and caregivers help us? In five simple, caring steps! First, they observe with patience to see if any child is feeling upset. Second, when a child gets restless or aggressive, they use soothing music and favorite toys to calm them down. Third, counselors speak gently with the child to understand their feelings. Fourth, our devoted ayahs stay by our side all day to help with every need. And fifth, the school assists our parents in securing government disability certificates!',
        studentQuoteMr:
          'शाळेत मुलांची काळजी ५ सोप्या टप्प्यांत घेतली जाते! पहिल्या टप्प्यात, मूल अस्वस्थ आहे का हे प्रेमाने पाहिले जाते. दुसऱ्या टप्प्यात, मूल चिडले तर मंद संगीत आणि खेळण्यांच्या मदतीने त्याला शांत केले जाते. तिसऱ्या टप्प्यात, समुपदेशक मुलाशी आपुलकीने बोलतात. चौथ्या टप्प्यात, काळजीवाहू मावशी सतत मुलांची काळजी घेतात. आणि पाचव्या टप्प्यात, पालकांना दिव्यांग प्रमाणपत्र मिळवून दिले जाते!',
        shortTakeawayEn: 'Compassionate listening, calming through toys and music, heartfelt counseling, ayah support, and certificate help.',
        shortTakeawayMr: 'मुलाचे मन समजून घेणे, खेळणी व संगीताने शांत करणे, समुपदेशन, मावशींची सोबत आणि प्रमाणपत्र मदत.',
      },
      expectancies: {
        titleEn: 'Growth in Calm and Happiness',
        titleMr: 'शांतता आणि आनंदातील प्रगती',
        cloudBadgeEn: 'Feeling happier and safer every day',
        cloudBadgeMr: 'दिवसेंदिवस वाढणारा आनंद व सुरक्षितता',
        studentQuoteEn:
          'What positive changes happen over time? In the first few months, a child begins to feel completely safe and trusts the counselors and ayahs. By four to six months, restlessness and aggressive outbursts decrease naturally because the child is surrounded by calming music, comforting toys, and patient love. And as the months go on, children participate happily in daily activities with confidence, while their disability certificates are properly completed!',
        studentQuoteMr:
          'काही महिन्यांत मुलामध्ये काय बदल होतो? सुरुवातीच्या काही महिन्यांत मुलाच्या मनातील भीती जाऊन ते शिक्षक, समुपदेशक आणि मावशींशी प्रेमाने वागू लागते. ४ ते ६ महिन्यांत संगीत, खेळणी आणि प्रेमामुळे मुलाचे विनाकारण चिडणे खूप कमी होते. आणि हळूहळू मूल आनंदाने शाळेतील उपक्रमांत भाग घेते, तसेच त्याचे दिव्यांग प्रमाणपत्रही पूर्ण होते!',
        shortTakeawayEn: 'Building early trust, reducing restlessness through toys & music, and achieving lasting emotional calm.',
        shortTakeawayMr: 'सुरुवातीचा विश्वास, खेळणी व संगीताने चिडचिड कमी होणे, आणि मुलाला भावनिक स्थैर्य मिळणे.',
      },
      routine: {
        titleEn: 'Everyday Care & Attentive Presence',
        titleMr: 'दैनंदिन काळजी व सतत उपस्थिती',
        cloudBadgeEn: 'Always beside the children when in need',
        cloudBadgeMr: 'गरज असेल तेव्हा मुलांच्या सोबत',
        studentQuoteEn:
          'Every single day, our teachers and counselors stay attentive to how we are feeling. If anyone feels agitated or upset, we are gently guided to our calming space with toys and peaceful music. Our dedicated ayahs are always present with us throughout the entire day, readily helping with anything we need. We know that whenever we need comfort or a listening ear, someone who loves us is always right by our side!',
        studentQuoteMr:
          'दररोज शिक्षक आणि समुपदेशक मुलांच्या मनःस्थितीकडे प्रेमाने लक्ष देतात. मूल चिडले तर त्याला खेळणी आणि मंद संगीताने शांत केले जाते. आमच्या काळजीवाहू मावशी दिवसभर आमच्या सोबत असतात आणि सर्व कामांत मदत करतात. आम्हाला माहीत आहे की जेव्हा जेव्हा गरज असेल, तेव्हा आम्हाला समजून घेणारी प्रेमळ माणसे आमच्या सोबत आहेत!',
        shortTakeawayEn: 'Daily emotional observation, one-on-one counseling as needed, calming music and toys, and constant ayah care.',
        shortTakeawayMr: 'दैनिक प्रेमळ लक्ष, गरजेनुसार समुपदेशन, खेळणी व संगीताने शांत करणे, आणि मावशींची सतत काळजी.',
      },
    },
  },
};
