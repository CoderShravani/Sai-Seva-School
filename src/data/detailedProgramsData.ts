export interface ProgramStep {
  stepNumber: number;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
}

export interface ProgramExpectancy {
  timelineEn: string;
  timelineMr: string;
  milestoneEn: string;
  milestoneMr: string;
}

export interface DetailedProgram {
  id: string;
  titleEn: string;
  titleMr: string;
  badgeEn: string;
  badgeMr: string;
  category: 'academic' | 'therapy' | 'lifeskills' | 'vocational' | 'cocurricular' | 'counselling';
  taglineEn: string;
  taglineMr: string;
  descriptionEn: string;
  descriptionMr: string;
  eligibilityEn: string;
  eligibilityMr: string;
  staffStudentRatio: string;
  weeklyHours: string;
  certification: string;
  image: string;
  heroCaptionEn?: string;
  heroCaptionMr?: string;
  galleryImages: string[];
  galleryCaptionsEn?: string[];
  galleryCaptionsMr?: string[];
  iconName: string;
  themeColor: {
    badge: string;
    border: string;
    accent: string;
    bgSoft: string;
  };
  objectivesEn: string[];
  objectivesMr: string[];
  pedagogicalSteps: ProgramStep[];
  expectedOutcomes: ProgramExpectancy[];
  dailyInterventionsEn: string[];
  dailyInterventionsMr: string[];
  assessmentMethodEn: string;
  assessmentMethodMr: string;
  parentRoleEn: string;
  parentRoleMr: string;
}

export const DETAILED_PROGRAMS_DATA: DetailedProgram[] = [
  {
    id: 'academic',
    titleEn: 'Academic Education & Diksha Coursework',
    titleMr: 'विशेष शैक्षणिक वर्ग व दीक्षा अभ्यासक्रम',
    badgeEn: 'Core Curriculum',
    badgeMr: 'मूलभूत शिक्षण',
    category: 'academic',
    taglineEn: 'Personalized educational pathways tailored to individual cognitive readiness and sensory processing abilities.',
    taglineMr: 'प्रत्येक मुलाच्या आकलन गतीनुसार तयार केलेला वैयक्तिक अभ्यासक्रम व संवेदी शिक्षण पद्धती.',
    descriptionEn: 'The Academic Special Education Program provides structured, child-centered schooling designed specifically for students with mild, moderate, and severe intellectual disabilities, Autism Spectrum Conditions, and Down Syndrome. Recognizing that no two learners share the exact same cognitive architecture, we discard standardized rote curriculums in favor of Diksha education coursework formulated after rigorous multidisciplinary baseline evaluations. Classroom environments are distraction-controlled, visually structured, and equipped with multisensory learning apparatus that transform abstract numerical and language concepts into concrete, joyful physical experiences.',
    descriptionMr: 'विशेष शैक्षणिक वर्ग कार्यक्रम हा मतिमंदत्व, ऑटिझम आणि डाऊन सिंड्रोम असलेल्या मुलांसाठी अत्यंत नियोजनबद्ध व बाल-केंद्रित पद्धतीने राबवला जातो. प्रत्येक बालकाची शिकण्याची गती, आकलनक्षमता आणि संवेदी गरजा वेगवेगळ्या असतात. त्यामुळे पारंपारिक घोकंपट्टी न करता, तज्ज्ञ शिक्षकांद्वारे मुलांची प्रारंभिक चाचणी घेऊन प्रत्येकासाठी स्वतंत्र "दीक्षा शैक्षणिक अभ्यासक्रम" (Diksha Education Coursework) तयार केला जातो. वर्गातील वातावरण शांत, सुरक्षित आणि दृकश्राव्य साधनांनी सुसज्ज असते, ज्यामुळे भाषेची ओळख, संख्याज्ञान आणि व्यावहारिक आकलन सुलभ होते.',
    eligibilityEn: 'Children aged 6 to 18 years diagnosed with Intellectual Disability (IQ 35-70), Autism Spectrum Disorder, or Global Developmental Delay.',
    eligibilityMr: 'वय वर्षे ६ ते १८; मतिमंदत्व (IQ ३५ ते ७०), ऑटिझम किंवा विकासात्मक विलंब असलेले विशेष विद्यार्थी.',
    staffStudentRatio: '1 : 6 (Dedicated Special Educator & Assistant)',
    weeklyHours: 'Monday – Saturday',
    certification: 'Dedicated Special Educators & Compassionate Caregivers',
    image: '/33.jpg',
    heroCaptionEn: 'Dedicated teacher gently guiding students on the path of knowledge and confidence',
    heroCaptionMr: 'ज्ञानाच्या व स्वावलंबनाच्या वाटेवर विद्यार्थ्यांना प्रेमाने मार्गदर्शन करणारी शिक्षक माऊली',
    galleryImages: [
      '/34.jpg',
      '/35.jpg',
      '/36.jpg',
      '/37.jpg',
    ],
    galleryCaptionsEn: [
      'Interactive Classroom Study & Guided Reading',
      'Sensory Flashcard Recognition & Body Parts Identification',
      'Hands-on Workbook Tracing & Fine Motor Writing',
      'Independent Blackboard Exercise & Numeracy Application',
    ],
    galleryCaptionsMr: [
      'मार्गदर्शकांसोबत वर्ग अध्यापन व वाचन सराव',
      'रंगीत चित्रांद्वारे अवयवांची ओळख व संवेदी शिक्षण',
      'पुस्तिका लेखन, रेखन सराव व हस्तकौशल्य विकास',
      'फळ्यावर स्वतःहून पर्यावरण व संख्या लेखन सराव',
    ],
    iconName: 'BookOpen',
    themeColor: {
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      border: 'border-emerald-200 hover:border-emerald-400',
      accent: '#0B4D3C',
      bgSoft: 'bg-emerald-50/50',
    },
    objectivesEn: [
      'Master functional literacy: recognizing own name, emergency signs, family photos, and primary survival sight-words.',
      'Develop functional numeracy: time telling basics, identifying Indian currency notes/coins, counting quantities.',
      'Cultivate expressive communication through speech, picture exchange cards, and natural gestures.',
      'Enhance sustained attention span and tabletop task completion from 5 minutes up to 25 minutes.',
    ],
    objectivesMr: [
      'कार्यात्मक साक्षरता: स्वतःचे नाव, पत्ता, धोक्याच्या सूचना, साधे शब्द आणि चित्रांची अचूक ओळख.',
      'कार्यात्मक अंकगणित: भारतीय नाणी व नोटांची ओळख, घड्याळातील साध्या वेळा समजणे आणि दैनंदिन हिशेब.',
      'संवाद कौशल्य: चित्र देवाणघेवाण पद्धत, सोपे शब्द आणि खुणांच्या साहाय्याने गरजा स्पष्टपणे सांगणे.',
      'एकाग्रता वाढवणे: बसून काम करण्याची क्षमता ५ मिनिटांवरून २५ मिनिटांपर्यंत टप्प्याटप्प्याने वाढवणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Comprehensive Baseline Developmental Assessment',
        titleMr: 'सर्वंकष प्रारंभिक मूल्यांकन व क्षमता तपासणी',
        descriptionEn: 'Assessment is done through Diksha framework scales covering motor, language, cognitive, social, and emotional readiness within the first 14 days of admission.',
        descriptionMr: 'प्रवेशानंतर पहिल्या १४ दिवसांत दीक्षा फ्रेमवर्क मानकांनुसार (Diksha Framework Scales) मुलाच्या शारीरिक, भाषिक, बौद्धिक आणि सामाजिक क्षमतेचे सविस्तर मूल्यांकन केले जाते.',
      },
      {
        stepNumber: 2,
        titleEn: 'Formulation of Diksha Education Coursework',
        titleMr: 'दीक्षा शैक्षणिक अभ्यासक्रम निश्चिती',
        descriptionEn: 'Collaborative formulation of broken-down, measurable SMART milestones by the special educator, speech therapist, occupational therapist, and parents.',
        descriptionMr: 'विशेष शिक्षक, थेरपिस्ट आणि पालकांच्या चर्चेतून मुलासाठी साध्य करता येतील अशी मोजता येणारी शैक्षणिक ध्येये निश्चित केली जातात.',
      },
      {
        stepNumber: 3,
        titleEn: 'Structured Multisensory Classroom Instruction',
        titleMr: 'बहु-संवेदी शैक्षणिक साधनांद्वारे प्रत्यक्ष वर्ग अध्यापन',
        descriptionEn: 'Daily 45-minute interactive learning sessions utilizing wooden alphabet blocks, picture flashcards, playful learning toys, and engaging visual aids.',
        descriptionMr: 'लाकडी अक्षरे, मणी, आकर्षक चित्रकार्डे आणि खेळण्यांचा वापर करून दररोज ४५ मिनिटांची सोपी व आनंददायी शैक्षणिक सत्रे घेतली जातात.',
      },
      {
        stepNumber: 4,
        titleEn: 'Continuous Behavioral Reinforcement & Peer Learning',
        titleMr: 'सकारात्मक प्रोत्साहन व वर्गमित्रांसोबत सहकार्य',
        descriptionEn: 'Encouraging positive behavior with praise and star rewards, gentle guidance, and cheerful group activities where children learn to share and support each other.',
        descriptionMr: 'चांगल्या वर्तनासाठी कौतुक, बक्षीस पद्धत आणि लहान गटात खेळता खेळता एकमेकांकडून शिकण्याची प्रेरणा दिली जाते.',
      },
      {
        stepNumber: 5,
        titleEn: 'Quarterly Review & Adaptive Curriculum Adjustment',
        titleMr: 'त्रैमासिक प्रगती आढावा व अभ्यासक्रम पुनर्रचना',
        descriptionEn: 'Formal progress reporting to parents every 3 months; unachieved sub-goals are broken down into smaller micro-steps, while mastered skills graduate to real-world application.',
        descriptionMr: 'दर ३ महिन्यांनी पालकांसोबत प्रगतीचा लेखी आढावा घेतला जातो; आत्मसात न झालेली उद्दिष्टे आणखी सोप्या भागात विभागून सराव करून घेतला जातो.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Month 1 - 3 (Orientation & Readiness)',
        timelineMr: 'महिना १ ते ३ (सुरुवात व वर्ग सवय)',
        milestoneEn: 'Student adapts to classroom desk routine, follows 1-step teacher commands, and recognizes own desk/belongings.',
        milestoneMr: 'मुलाला वर्गात बसण्याची सवय होते, शिक्षकांच्या साध्या आज्ञांचे पालन होते आणि स्वतःच्या वस्तू ओळखता येतात.',
      },
      {
        timelineEn: 'Month 4 - 6 (Cognitive Foundation)',
        timelineMr: 'महिना ४ ते ६ (मूलभूत ज्ञान ग्रहण)',
        milestoneEn: 'Accurate color sorting, primary geometric shape matching, and communicating 5 core daily needs using flashcards or speech.',
        milestoneMr: 'रंग आणि आकारांची अचूक वर्गवारी, तसेच पाणी, भूक, स्वच्छता यासारख्या ५ गरजा स्वतःहून स्पष्टपणे व्यक्त करणे.',
      },
      {
        timelineEn: 'Month 7 - 12 (Functional Application)',
        timelineMr: 'महिना ७ ते १२ (उपयोजन व स्वावलंबन)',
        milestoneEn: 'Recognizing coin-currency patterns, independent name tracing, and solving 4-to-6 piece cognitive jigsaw puzzles.',
        milestoneMr: 'नाणी-नोटांची ओळख, स्वतःच्या नावाचा सराव, आणि ४ ते ६ तुकड्यांची कोडी स्वतःच्या बुद्धीने सोडवणे.',
      },
    ],
    dailyInterventionsEn: [
      'Morning cognitive warm-up & calendar recognition (day, date, weather, attendance)',
      'Everyday phonics and vocabulary practice using familiar everyday objects and visual pictures',
      'Tabletop numeracy games using colored abacus and counting beads',
      'Storytelling and visual learning is conducted through teachers',
    ],
    dailyInterventionsMr: [
      'सकाळचा दिनदर्शिका सराव: आजचा वार, तारीख, महिना व हवामानाची ओळख',
      'प्रत्यक्ष वस्तूंच्या साहाय्याने शब्द ओळख व उच्चार सराव',
      'रंगीत मणी व मोजणी दांड्यांद्वारे गणिताची सोपी ओळख',
      'शिक्षकांद्वारे प्रत्यक्ष संवादातून गोष्ट सांगणे व दृश्य शैक्षणिक मार्गदर्शन',
    ],
    assessmentMethodEn: 'Quarterly evaluation is done through Diksha coursework grading system, video portfolio reviews, and written anecdotal records.',
    assessmentMethodMr: 'दीक्षा अभ्यासक्रम मूल्यमापन पद्धती (Diksha Coursework Grading System), व्हिडिओ निरीक्षण आणि शिक्षकांच्या दैनंदिन प्रगती नोंदवहीद्वारे त्रैमासिक मूल्यांकन.',
    parentRoleEn: 'Parents receive regular, caring updates and stay closely connected, helping their child practice simple daily communication and learning at home with love and encouragement.',
    parentRoleMr: 'पालकांना नियमित व प्रेमळ माहिती दिली जाते, ज्यामुळे शाळेत शिकलेल्या चांगल्या सवयी व सोपा संवाद घरीही आपुलकीने व सातत्याने सुरू राहतो.',
  },
  {
    id: 'therapy',
    titleEn: 'Therapeutic and Speech Support',
    titleMr: 'उपचार, वाणी व संवेदी पुनर्वसन',
    badgeEn: 'Therapy & Care',
    badgeMr: 'उपचार व आधार',
    category: 'therapy',
    taglineEn: 'Helping children speak with confidence, move more freely, and feel secure in their daily routines.',
    taglineMr: 'मुलांना आपले विचार व्यक्त करता यावेत, चालताना आत्मविश्वास मिळावा आणि दैनंदिन जीवनात सुरक्षित वाटावे यासाठीचे साधे, प्रेमळ उपचार.',
    descriptionEn: 'Children with special needs often need gentle guidance with speaking clearly, walking with balance, or feeling calm in noisy settings. Our dedicated staff and visiting therapists work closely with each child at their own natural speed. Through friendly speech exercises, picture communication cards, gentle physical stretches, and quiet sensory spaces, we help children express their daily needs and take confident steps toward everyday comfort.',
    descriptionMr: 'काही मुलांना बोलण्यात, चालताना तोल सांभाळण्यात किंवा मोठा आवाज आणि नवीन वातावरणात अस्वस्थ वाटू शकते. आमचे शिक्षक व थेरपिस्ट प्रत्येक मुलाशी प्रेमाने व संयमाने काम करतात. चित्र-कार्ड्सद्वारे संवाद साधणे, सोपे उच्चार सराव, शरीराची लवचिकता वाढवणारे हलके व्यायाम आणि मन शांत ठेवणाऱ्या साध्या उपक्रमांद्वारे मुलांना दैनंदिन जीवनात मदत केली जाते.',
    eligibilityEn: 'Any admitted student who needs assistance with clear speech, walking balance, muscle coordination, or sensory sensitivity.',
    eligibilityMr: 'ज्या मुलांना बोलण्यात अडचण आहे, चालताना तोल जातो किंवा आवाजाची व स्पर्शाची भीती वाटते अशा गरजू विद्यार्थ्यांना.',
    staffStudentRatio: '1 : 1 (Individual Attention During Sessions)',
    weeklyHours: 'Regular Weekly Sessions Based on Child Need',
    certification: 'Dedicated Therapists & Compassionate Care Team',
    image: '/therepist.jpg',
    heroCaptionEn: 'One-on-One Developmental Consultation & Caring Progress Assessment',
    heroCaptionMr: 'प्रत्येक मुलाशी आपुलकीने संवाद साधून वैयक्तिक प्रगतीचे मूल्यांकन',
    galleryImages: [
      '/therapist1.jpg',
      '/38.jpg',
      '/39.jpg',
      '/40.jpg',
    ],
    galleryCaptionsEn: [
      'Compassionate Therapy & School Care Team',
      'Morning Breathing & Arm Expansion Posture Exercises',
      'Guided Leg Stretching & Gentle Relaxation Routine',
      'Mindful Balance & Yoga (Vrikshasana) Practice',
    ],
    galleryCaptionsMr: [
      'आपुलकीचे नाते: भेट देणारे तज्ज्ञ थेरपिस्ट आणि शाळेचे समर्पित शिक्षक व सेवक',
      'सकाळचा श्वास सराव आणि हात विस्तारून शरीराचा तोल सांभाळणे',
      'मार्गदर्शनाखाली पाय ताणून स्नायू शिथिलीकरण व शांततेचा सराव',
      'वृक्षासन आणि एकाग्रतेचा सराव: तोल व मन शांत ठेवण्याची सवय',
    ],
    iconName: 'Activity',
    themeColor: {
      badge: 'bg-blue-100 text-blue-900 border-blue-300',
      border: 'border-blue-200 hover:border-blue-400',
      accent: '#0284C7',
      bgSoft: 'bg-blue-50/50',
    },
    objectivesEn: [
      'Encourage clear speech sounds, simple words, and daily verbal communication.',
      'Use picture cards and easy hand gestures to help non-verbal children express hunger, thirst, or bathroom needs.',
      'Help children improve walking balance, standing posture, and basic muscle coordination.',
      'Provide a quiet, relaxing space to reduce stress, restlessness, and fear of sudden loud sounds.',
    ],
    objectivesMr: [
      'सोपे शब्द आणि आवाज स्पष्ट बोलण्यास प्रोत्साहन देणे.',
      'न बोलू शकणाऱ्या मुलांना चित्र-कार्ड्स किंवा साध्या खुणांद्वारे भूक, तहान व स्वच्छतागृहाची गरज सांगायला शिकवणे.',
      'चालताना तोल सांभाळणे आणि शरीराची ताकद व लवचिकता वाढवणे.',
      'मोठ्या आवाजाची किंवा नवीन वातावरणाची भीती कमी करून मुलांचे मन शांत ठेवणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Understanding Each Child’s Needs',
        titleMr: 'मुलाच्या अडचणी आणि गरजा समजून घेणे',
        descriptionEn: 'Gently observing how the child speaks, walks, and responds to sounds and textures to plan the right support.',
        descriptionMr: 'मूल कसे बोलते, कसे चालते आणि त्याला कशामुळे भीती वाटते याचे प्रेमाने निरीक्षण करून योग्य उपचारांचे नियोजन केले जाते.',
      },
      {
        stepNumber: 2,
        titleEn: 'Caregiver Assistance for Daily Walking & Movement',
        titleMr: 'चालण्यासाठी व हालचालींसाठी काळजीवाहकांची मदत',
        descriptionEn: 'Caregivers assist the students with daily walking and sitting postures so they can sit and move comfortably.',
        descriptionMr: 'काळजीवाहक विद्यार्थ्यांना चालण्यासाठी, बसण्यासाठी आणि दिवसभरात सहज हालचाली करण्यासाठी प्रेमाने मदत करतात.',
      },
      {
        stepNumber: 3,
        titleEn: 'One-on-One Speech & Physical Practice',
        titleMr: 'बोलण्याचा आणि शरीराचा वैयक्तिक सराव',
        descriptionEn: 'Practicing words in front of a mirror, gentle straw-blowing games, and balance activities on soft mats.',
        descriptionMr: 'आरशात पाहून शब्द बोलण्याचा सराव, फुंकर मारणे, हलके स्ट्रेचिंग आणि मॅटवर तोल सांभाळण्याचे सोपे खेळ.',
      },
      {
        stepNumber: 4,
        titleEn: 'Guidance for Caretakers & Parents',
        titleMr: 'पालक व वसतिगृह कर्मचाऱ्यांना सोपे मार्गदर्शन',
        descriptionEn: 'Sharing easy sitting, feeding posture, and encouraging tips so the child receives consistent support throughout the day.',
        descriptionMr: 'मुलाला कसे बसवावे, कसे भरवावे आणि घरी कोणते सोपे व्यायाम घ्यावेत याबद्दल पालकांना साधे मार्गदर्शन दिले जाते.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Initial Phase (Comfort & Trust)',
        timelineMr: 'सुरुवातीचा टप्पा (शांतता व विश्वास)',
        milestoneEn: 'Child feels safe with caregivers, cooperates with daily face washing and teeth brushing, and enjoys gentle therapy games.',
        milestoneMr: 'मुलाची भीती कमी होते; दात घासणे, तोंड धुणे यास आनंदाने सहकार्य करते आणि खेळांमध्ये भाग घेते.',
      },
      {
        timelineEn: 'Midway (Communication & Balance)',
        timelineMr: 'मध्यम टप्पा (संवाद व तोल)',
        milestoneEn: 'Child begins attempting simple words, points to picture cards for water or food, and shows firmer standing balance.',
        milestoneMr: 'आई, पाणी यासारखे सोपे शब्द बोलणे किंवा चित्राकडे बोट दाखवून गरज व्यक्त करणे; चालताना तोल सुधारणे.',
      },
      {
        timelineEn: 'Ongoing (Greater Everyday Independence)',
        timelineMr: 'पुढील टप्पा (रोजचे स्वावलंबन)',
        milestoneEn: 'Child walks with more stability, relies less on adult assistance, and communicates basic feelings with fewer frustrations.',
        milestoneMr: 'कमी मदतीसह अधिक आत्मविश्वासाने चालणे आणि स्वतःच्या गरजा शिक्षक व मित्रांशी न घाबरता व्यक्त करणे.',
      },
    ],
    dailyInterventionsEn: [
      'Morning gentle stretching to relax tight muscles',
      'Simple mouth, tongue, and breathing exercises for speech clarity',
      'Assisted walking and balance practice on safe mats',
      'Calming relaxation time to unwind after daily activities',
    ],
    dailyInterventionsMr: [
      'सकाळी स्नायू मोकळे करण्यासाठी हलके स्ट्रेचिंग',
      'स्पष्ट बोलण्यासाठी ओठ व जिभेचे सोपे व्यायाम',
      'सुरक्षित मॅटवर तोल सांभाळून चालण्याचा रोजचा सराव',
      'दिवसभरातील दगदगीनंतर मन शांत करण्यासाठी विश्रांती',
    ],
    assessmentMethodEn: 'Continuous observations and simple monthly progress notes by teachers and therapists to adapt daily support.',
    assessmentMethodMr: 'मुलाच्या बोलण्यात व हालचालींत काय बदल होतोय याची शिक्षक व थेरपिस्टद्वारे साध्या नोंदींद्वारे नियमित तपासणी.',
    parentRoleEn: 'Simple, comforting exercises and speech games that parents can easily practice with their child during home holidays.',
    parentRoleMr: 'घरी सुट्टीत असताना मुलाशी कसे बोलावे, कोणते सोपे खेळ घ्यावेत याचे पालकांना प्रत्यक्ष मार्गदर्शन केले जाते.',
  },
  {
    id: 'lifeskills',
    titleEn: 'Activities of Daily Living (ADL) & Self-Care Mastery',
    titleMr: 'दैनंदिन जीवन कौशल्ये व स्वावलंबन प्रशिक्षण (ADL)',
    badgeEn: 'Independence Training',
    badgeMr: 'स्वावलंबन व स्वाभिमान',
    category: 'lifeskills',
    taglineEn: 'Transforming dependent children into dignified, self-reliant individuals capable of handling daily personal routines.',
    taglineMr: 'इतरांवर अवलंबून न राहता स्वतःची रोजची कामे स्वतः करण्याची क्षमता व सन्मान मिळवून देणारे प्रशिक्षण.',
    descriptionEn: 'The true measure of dignity for an individual with an intellectual disability is their ability to handle personal daily routines and self-care with confidence and comfort. The ADL (Activities of Daily Living) Mastery Program is the beating heart of our residential philosophy. From waking up at 06:00 AM to going to bed at 09:30 PM, every moment is leveraged as a joyful learning opportunity. Children are taught task-analyzed micro-steps in personal hygiene, dressing, buttoning, shoe-lacing, tooth brushing, hand washing, eating meals neatly together, and household chores in a warm, family-like hostel environment.',
    descriptionMr: 'मतिमंद बालकांसाठी सर्वात मोठी देणगी म्हणजे स्वावलंबन! स्वतःची रोजची कामे स्वतः करता येणे हाच खरा स्वाभिमान आहे. आमच्या निवासी वसतिगृहातील सकाळच्या ६:०० वाजल्यापासून रात्री ९:३० पर्यंतची दिनचर्या ही स्वावलंबनाची एक अखंड शाळा आहे. दात घासणे, आंघोळ करणे, कपडे घालणे, बटणे लावणे, चप्पल घालणे, वैयक्तिक स्वच्छता राखणे आणि स्वतःच्या हाताने सांडू न देता जेवणे: हे सर्व कौशल्ये सोप्या लहान लहान टप्प्यांत विभागून अत्यंत प्रेमाने शिकवली जातात.',
    eligibilityEn: 'All admitted residential students from beginner to advanced stages of personal independence.',
    eligibilityMr: 'शाळेत प्रवेश घेतलेले सर्व विद्यार्थी—अगदी सुरुवातीच्या टप्प्यापासून ते प्रगत स्वावलंबनापर्यंत.',
    staffStudentRatio: '1 : 4 (Residential Hostel Caregiver Supervision)',
    weeklyHours: 'Daily Integrated Living Curriculum (7 Days / Week)',
    certification: 'Trained Residential House-Parents & Rehabilitation Assistants',
    image: '/44.png',
    heroCaptionEn: 'Daily Living Skills & Self-Care Mastery in Action',
    heroCaptionMr: 'दैनंदिन जीवन कौशल्ये आणि स्वावलंबनाचा प्रात्यक्षिक सराव',
    galleryImages: [
      '/41.png',
      '/42.png',
      '/43.png',
    ],
    galleryCaptionsEn: [
      'Guided Hand Washing & Personal Hygiene Routine',
      'Hands-On Clothes & Linen Folding Session',
      'Sharing Warm Meals Together with Love and Care',
    ],
    galleryCaptionsMr: [
      'मार्गदर्शनाखाली हात धुणे आणि दैनंदिन स्वच्छतेचा सराव',
      'कपडे आणि टॉवेलची व्यवस्थित घडी करण्याचा सराव',
      'स्नेहभोजन: प्रेमाने एकत्र बसून आनंदाने जेवणाचा गोड क्षण',
    ],
    iconName: 'UserCheck',
    themeColor: {
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      border: 'border-amber-200 hover:border-amber-400',
      accent: '#D97706',
      bgSoft: 'bg-amber-50/50',
    },
    objectivesEn: [
      'Develop healthy personal hygiene habits with timely guidance and caring support from caregivers.',
      'Perform unassisted tooth brushing, soap lathering, body drying with towel, and hair combing.',
      'Master the fine motor sequence of wearing trousers, buttoning shirts, and buckling sandals.',
      'Eat meals neatly and properly using fingers or spoons without significant spillage.',
    ],
    objectivesMr: [
      'दैनंदिन वैयक्तिक स्वच्छतेच्या चांगल्या सवयी आत्मसात करणे आणि केअरगिव्हर्सच्या प्रेमाने स्वच्छता राखणे.',
      'स्वतःचे दात घासणे, साबण लावून आंघोळ करणे, टॉवेलने अंग पुसणे आणि केस विंचरणे.',
      'कपडे नीट घालणे, बटणे लावणे, चड्डी-पँट चढवणे व बूट-चप्पल व्यवस्थित घालणे.',
      'अन्न न सांडता स्वतःच्या हाताने किंवा चमच्याने व्यवस्थित व योग्य रीतीने जेवण्याची सवय आत्मसात करणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Task Analysis Breakdown for Every Routine',
        titleMr: 'प्रत्येक कृतीचे लहान-लहान सूक्ष्म पायऱ्यांमध्ये विभाजन',
        descriptionEn: 'Every routine is decomposed into atomic micro-actions (e.g., tooth-brushing is broken into 12 sequential steps from picking the brush to rinsing the mouth).',
        descriptionMr: 'कोणतीही कृती एकाच वेळी न शिकवता तिचे १२ ते १५ छोटे भाग केले जातात (उदा. ब्रश उचलणे, पेस्ट लावणे, पुढचे दात घासणे, गुळणी करणे).',
      },
      {
        stepNumber: 2,
        titleEn: 'Visual Cues & Hands-On Caregiver Assistance',
        titleMr: 'चित्रमय मार्गदर्शक व केअरगिव्हर्सचे प्रत्यक्ष सहकार्य',
        descriptionEn: 'Caregivers themselves actively assist students through each daily living activity, using gentle visual cues and friendly demonstration to help them learn with confidence.',
        descriptionMr: 'केअरगिव्हर्स स्वतः विद्यार्थ्यांना प्रत्येक दैनंदिन कामात प्रेमाने प्रत्यक्ष मदत करतात आणि सोप्या चित्रांद्वारे त्यांचा आत्मविश्वास वाढवतात.',
      },
      {
        stepNumber: 3,
        titleEn: 'Backward & Forward Chaining Techniques',
        titleMr: 'साखळी पद्धत: शेवटची पायरी आधी शिकवून आत्मविश्वास निर्माण करणे',
        descriptionEn: 'Caregivers assist in the initial 80% of a task and let the child independently execute the final satisfying step, gradually fading assistance backwards.',
        descriptionMr: 'सुरुवातीला शिक्षक बहुतांश मदत करतात आणि शेवटचा सोपा भाग मुलाला करू देतात; यामुळे मुलाला "मी हे पूर्ण केले" असा प्रचंड आनंद मिळतो.',
      },
      {
        stepNumber: 4,
        titleEn: 'Peer Modeling in Dormitories',
        titleMr: 'हुशार वर्गमित्रांचे अनुकरण व कौटुंबिक वातावरण',
        descriptionEn: 'More independent senior students act as daily buddy mentors, inspiring junior students to emulate their morning routines.',
        descriptionMr: 'मोठी मुले लहान मुलांसोबत राहून स्वतः दात घासतात, कपडे घालतात, त्यांचे पाहून लहान मुले आपोआप शिकतात.',
      },
      {
        stepNumber: 5,
        titleEn: 'Independent Milestone Validation & Celebration',
        titleMr: 'स्वावलंबनाचा आनंदोत्सव व सन्मान पदक',
        descriptionEn: 'When a child masters an independent ADL milestone without prompting, they receive the "Star of Independence" badge at weekly school assemblies.',
        descriptionMr: 'कोणतेही एक काम स्वतःहून पूर्ण करणाऱ्या विद्यार्थ्याचे दर शनिवारी प्रार्थनेच्या वेळी सर्वांसमोर टाळ्या वाजवून कौतुक केले जाते.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Month 1 - 3 (Hygiene Initiation)',
        timelineMr: 'महिना १ ते ३ (स्वच्छतेची सुरुवात)',
        milestoneEn: 'Maintains personal hygiene with care; washes hands with liquid soap and learns clean daily habits.',
        milestoneMr: 'वैयक्तिक स्वच्छता आपुलकीने राखणे; साबणाने हात स्वच्छ धुणे आणि दैनंदिन स्वच्छतेच्या चांगल्या सवयी अंगवळणी पडणे.',
      },
      {
        timelineEn: 'Month 4 - 6 (Dressing & Grooming)',
        timelineMr: 'महिना ४ ते ६ (कपडे व नीटनेटकेपणा)',
        milestoneEn: 'Comfortably learns to dress, wear footwear, and brush teeth with loving encouragement and guidance from caregivers.',
        milestoneMr: 'केअरगिव्हर्सच्या प्रेमळ मार्गदर्शनाने स्वतःचे कपडे व पादत्राणे घालणे आणि दात स्वच्छ घासण्याची सवय विकसित करणे.',
      },
      {
        timelineEn: 'Month 7 - 12 (Total Self-Sufficiency)',
        timelineMr: 'महिना ७ ते १२ (संपूर्ण स्वावलंबन)',
        milestoneEn: 'Naturally embraces personal hygiene, tidies their bedding each morning with care, and warmly assists friends during meal times.',
        milestoneMr: 'सहजपणे दैनंदिन वैयक्तिक स्वच्छता राखणे, सकाळी उठून स्वतःचे अंथरुण प्रेमाने घडी करणे आणि मित्रांना आपुलकीने मदत करणे.',
      },
    ],
    dailyInterventionsEn: [
      'Morning 06:30 AM guided brushing, bathing, and hygiene supervision',
      'Interactive buttoning, zipping, and shoelace practice boards',
      'Breakfast mealtime guidance: eating neatly and enjoying morning nourishment together',
      'Evening bed-making, folding clothes, and personal locker organization',
    ],
    dailyInterventionsMr: [
      'सकाळी ६:३० वाजता गृहप्रमुखांच्या देखरेखीखाली दात घासणे व आंघोळीचा प्रत्यक्ष सराव',
      'बटणे लावणे, चेन ओढणे आणि नाडी बांधण्याचे विशेष सराव बोर्ड',
      'नाश्ता करताना आपुलकीने मार्गदर्शन: ताटाबाहेर न सांडता खाणे व एकत्र आनंदाने जेवणे',
      'संध्याकाळी स्वतःचे कपडे घडी करून स्वतःच्या कपाटात व्यवस्थित रचून ठेवणे',
    ],
    assessmentMethodEn: 'Assessment of Functional Living Skills (AFLS) protocol recorded weekly by the residential warden and special educator.',
    assessmentMethodMr: 'AFLS कार्यात्मक जीवन कौशल्य प्रणालीद्वारे दर आठवड्याला गृहप्रमुखांद्वारे प्रत्येक कौशल्याची लेखी नोंद ठेवली जाते.',
    parentRoleEn: 'During weekend visits, parents are strictly counseled to allow the child to perform their own dressing and feeding at home, avoiding overprotection.',
    parentRoleMr: 'घरी सुट्टीत गेल्यावर पालकांनी मुलाची कामे स्वतः न करता मुलालाच करू द्यावीत, जेणेकरून शाळेत लागलेली स्वावलंबनाची सवय कायम राहील.',
  },
  {
    id: 'vocational',
    titleEn: 'Pre-Vocational & Handicraft Skill Workshop',
    titleMr: 'पूर्व-व्यावसायिक व हस्तकला कार्यशाळा (स्वावलंबी रोजगार)',
    badgeEn: 'Livelihood & Dignity',
    badgeMr: 'रोजगार व स्वाभिमान',
    category: 'vocational',
    taglineEn: 'Empowering students through creative handicrafts, art, and practical hands-on skills.',
    taglineMr: 'विद्यार्थ्यांना पणत्या रंगवणे, कागदी पिशव्या, मेणबत्त्या व सुंदर हस्तकलेतून स्वाभिमानी बनवणारी कार्यशाळा.',
    descriptionEn: 'Shree Sai Seva School nurtures the artistic and creative spirit of every student through our vibrant Pre-Vocational & Handicraft Skill Workshop. Tailored for all students regardless of age, this joyful workshop helps children discover the happiness of creating with their own hands. Students learn festive clay diya painting, eco-friendly paper bag fabrication, decorative greeting cards, and scented wax candle crafting. Our annual festive exhibitions celebrate the crafts lovingly created by our students, giving them true pride, joy, and lasting self-confidence.',
    descriptionMr: 'विशेष मुलांमध्ये कलेची आवड निर्माण करण्यासाठी आणि त्यांना स्वावलंबी बनवण्यासाठी शाळेने पूर्व-व्यावसायिक कार्यशाळा सुरू केली आहे. सर्व वयोगटातील विद्यार्थ्यांना त्यांच्या आवडीनुसार मातीच्या सुंदर पणत्या रंगवणे, पर्यावरणपूरक कागदी पिशव्या बनवणे, सणांची तोरणे आणि सुगंधी मेणबत्त्या बनवणे शिकवले जाते. दिवाळी व सणांच्या काळात मुलांनी तयार केलेल्या वस्तूंचे सुंदर प्रदर्शन भरवले जाते, ज्यामुळे त्यांचा आत्मविश्वास दुणावतो.',
    eligibilityEn: 'All students with basic hand grip and an interest in learning creative crafts.',
    eligibilityMr: 'हाताची पकड असलेले व नवनवीन कलाकुसर शिकण्याची आवड असलेले सर्व विद्यार्थी.',
    staffStudentRatio: '1 : 5 (Dedicated Craft Teachers & Vocational Instructors)',
    weeklyHours: 'Monday – Saturday',
    certification: 'Experienced Vocational Instructors & Craft Teachers',
    image: '/vocational.png',
    heroCaptionEn: 'Dedicated craft teachers lovingly guiding students as they discover the joy of creative handiwork',
    heroCaptionMr: 'शिक्षकांच्या प्रेमळ मार्गदर्शनाखाली मुले आनंदाने हस्तकला व नवनिर्मिती शिकताना',
    galleryImages: [
      '/1.jpg',
      '/2.jpg',
      '/3.jpg',
    ],
    galleryCaptionsEn: [
      "Exhibition of Student-Made Handicrafts",
      "Guided Exercise & Physical Training under Instructor Guidance",
      "Folklore & Cultural Performance by Students",
    ],
    galleryCaptionsMr: [
      "विद्यार्थ्यांनी तयार केलेल्या वस्तूंचे प्रदर्शन",
      "मार्गदर्शकांच्या सूचनेनुसार शारीरिक व्यायाम व कसरत",
      "विद्यार्थ्यांचे लोकनृत्य व सांस्कृतिक सादरीकरण",
    ],
    iconName: 'Palette',
    themeColor: {
      badge: 'bg-purple-100 text-purple-900 border-purple-300',
      border: 'border-purple-200 hover:border-purple-400',
      accent: '#7E22CE',
      bgSoft: 'bg-purple-50/50',
    },
    objectivesEn: [
      'Develop steady hand skills through brush painting, sponge dabbing, paper folding, and safe tool handling.',
      'Learn patience and focus through sorting cheerful colors, following gentle step-by-step guidance, and taking pride in neat work.',
      'Achieve a sense of dignity and gain confidence through their creative work and community appreciation.',
      'Build practical craft skills and self-reliance so students feel happy, confident, and capable at home and in society.',
      'Foster creativity, self-expression, and the pure joy of making beautiful things with their own hands.',
    ],
    objectivesMr: [
      'ब्रशने रंगकाम करणे, कागदाची घडी घालणे आणि साधनांचा सुरक्षित वापर करून हातांची पकड मजबूत करणे.',
      'शांतपणे आणि लक्षपूर्वक एकापाठोपाठ एक पायरी शिकणे, रंगानुसार वर्गीकरण करणे आणि काम सुबकपणे पूर्ण करणे.',
      'स्वतःच्या कौशल्यातून आणि समाजातील कौतुकातून स्वाभिमान व आत्मविश्वास संपादन करणे.',
      'मुलांमध्ये हस्तकलेची कौशल्ये रुजवून त्यांना घरात व समाजात आत्मविश्वासाने आणि आनंदाने जगण्यास सक्षम करणे.',
      'स्वतःच्या हातांनी सुंदर कलाकृती तयार करून नवनिर्मितीचा आणि सर्जनशीलतेचा खरा आनंद अनुभवणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Discovering Each Student’s Interests',
        titleMr: 'मुलांची आवड व कल जाणून घेणे',
        descriptionEn: 'Teachers gently understand what each child enjoys doing most—whether it is painting with cheerful colors, folding paper, or decorating crafts.',
        descriptionMr: 'मुलाला नेमके कशात आनंद मिळतो—रंगकाम करणे, कागद घडी करणे की कलाकुसर करणे, हे शिक्षक प्रेमाने समजून घेतात.',
      },
      {
        stepNumber: 2,
        titleEn: 'Gentle Step-by-Step Guidance',
        titleMr: 'साधे साचे व प्रेमळ मार्गदर्शन',
        descriptionEn: 'Using helpful guides, soft grips, and simple stencils so every student can create shapes with ease, confidence, and comfort.',
        descriptionMr: 'सोप्या लाकडी साच्यांच्या आणि शिक्षकांच्या मदतीने मुले स्वतःच्या हातांनी सुबक व सुंदर आकार सहज तयार करतात.',
      },
      {
        stepNumber: 3,
        titleEn: 'Joy of Making Things Together',
        titleMr: 'मित्रांसोबत मिळून काम करण्याचा आनंद',
        descriptionEn: 'Students sit together happily, helping one another—one student applies color, another adds decorations, and friends cheer each other on.',
        descriptionMr: 'सर्व मुले एकत्र बसून एकमेकांना मदत करतात—एकाने रंग देणे, दुसऱ्याने टिकल्या लावणे आणि एकत्र मिळून सुंदर वस्तू बनवणे.',
      },
      {
        stepNumber: 4,
        titleEn: 'Neat Packaging & Gentle Care',
        titleMr: 'सुबक पॅकिंग व वस्तूंची काळजी',
        descriptionEn: 'Learning to count and place finished items into neat gift pouches and boxes with love and care.',
        descriptionMr: 'तयार झालेल्या वस्तू मोजून, सुंदर पिशव्यांमध्ये किंवा खोक्यांमध्ये प्रेमाने आणि काळजीपूर्वक ठेवणे शिकणे.',
      },
      {
        stepNumber: 5,
        titleEn: 'Sharing Handcrafted Art at School Exhibitions',
        titleMr: 'शालेय प्रदर्शनात वस्तू मांडणे',
        descriptionEn: 'Putting up colorful stalls during Diwali and festivals where visitors, parents, and friends come to see and appreciate the children’s hard work.',
        descriptionMr: 'दिवाळी व सणांच्या वेळी प्रदर्शनात स्टॉल लावून मुलांनी केलेल्या वस्तू मांडल्या जातात, जिथे सर्वजण त्यांच्या कामाचे कौतुक करतात.',
      },
      {
        stepNumber: 6,
        titleEn: 'Gaining Confidence & Everyday Happiness',
        titleMr: 'आत्मविश्वास व आनंदाची भावना',
        descriptionEn: 'Seeing people admire their creations brings bright smiles, a strong sense of pride, and the joy of being truly capable.',
        descriptionMr: 'लोकांनी केलेले कौतुक पाहून मुलांचा आत्मविश्वास दुणावतो आणि त्यांना स्वतःच्या कर्तृत्वाचा मनस्वी आनंद मिळतो.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Month 1 - 3 (Gentle Familiarization)',
        timelineMr: 'महिना १ ते ३ (साधनांची ओळख)',
        milestoneEn: 'Learns safe handling of paints and materials, folding paper bags happily with teacher guidance.',
        milestoneMr: 'रंग व साहित्याचा सुरक्षित वापर; शिक्षकांच्या मदतीने कागदी पिशव्यांची घडी घालणे.',
      },
      {
        timelineEn: 'Month 4 - 6 (Creative Independence)',
        timelineMr: 'महिना ४ ते ६ (स्वतंत्र कला निर्मिती)',
        milestoneEn: 'Decorates beautiful diyas or candles with focus and joy, without needing constant help.',
        milestoneMr: 'शिक्षकांच्या सतत मदतीशिवाय स्वतःच्या हातांनी सुंदर पणत्या किंवा मेणबत्त्या सुबकपणे तयार करणे.',
      },
      {
        timelineEn: 'Month 7 - 12 (Pride & Sharing Creations)',
        timelineMr: 'महिना ७ ते १२ (स्वाभिमान व कौतुक)',
        milestoneEn: 'Confidently interacts with visitors and proudly presents handmade crafts at school exhibitions.',
        milestoneMr: 'प्रदर्शनात येणाऱ्या पाहुण्यांशी हसून संवाद साधणे आणि आपल्या कलाकृती अभिमानाने दाखवणे.',
      },
    ],
    dailyInterventionsEn: [
      'Gentle morning finger exercises and playful hand warm-ups to get ready for crafting',
      'Gently wiping earthen diyas and painting them with cheerful, bright colors',
      'Folding paper neatly, tying soft handles, and making colorful envelopes with fun stamps',
      'Tidying up finished crafts together and packing them lovingly into gift boxes',
    ],
    dailyInterventionsMr: [
      'हस्तकला सुरू करण्यापूर्वी बोटे मोकळी करण्यासाठी हलके व सोपे हात-व्यायाम',
      'मातीच्या पणत्या स्वच्छ करून त्यावर आवडीच्या सुंदर रंगांनी रंगकाम करणे',
      'कागदाची सुबक घडी घालून पिशव्यांना दोऱ्या लावणे आणि छान भेट पाकिटे तयार करणे',
      'तयार केलेल्या सुंदर वस्तू मित्रांसोबत मिळून प्रेमाने भेट खोक्यांमध्ये नीट मांडणे',
    ],
    assessmentMethodEn: 'Continuous observation and supportive evaluation focusing on child comfort, hand grip progress, task completion, and personal confidence.',
    assessmentMethodMr: 'मुलाची प्रगती, हातांची पकड, काम पूर्ण करण्याचा आनंद आणि वाढणारा आत्मविश्वास यावर आधारित प्रेमळ मूल्यांकन.',
    parentRoleEn: 'Parents are encouraged to order handmade bags and festive products for their extended families, celebrating their child’s craftsmanship.',
    parentRoleMr: 'पालकांना आपल्या नातेवाईक व ओळखीच्या कार्यक्रमांसाठी मुलांनी बनवलेल्या वस्तू वापरण्याचे आवाहन केले जाते, ज्यामुळे मुलांचा हुरूप वाढतो.',
  },
  {
    id: 'cocurricular',
    titleEn: 'Co-Curricular Arts, Adaptive Sports & Cultural Expression',
    titleMr: 'कला, क्रीडा, योग व सांस्कृतिक सर्वांगीण विकास',
    badgeEn: 'Joy & Physical Vitality',
    badgeMr: 'आनंद, ऊर्जा व क्रीडा',
    category: 'cocurricular',
    taglineEn: 'Encouraging joyful playtime, active outdoor games, creative arts, and cheerful cultural celebrations.',
    taglineMr: 'खेळ, मैदानी मौजमज्जा, हस्तकला आणि सांस्कृतिक उपक्रमांतून मुलांच्या चेहऱ्यावर आनंद फुलवणारा उपक्रम.',
    descriptionEn: 'Childhood is meant to be filled with laughter, running in the open air, and the simple joy of playing together. At Shree Sai Seva School, our co-curricular and sports activities give children a happy, welcoming space where they can move freely, try exciting new games, and express themselves without pressure. Our open playground comes alive with fun activities that children find fascinating—from friendly running races, ring-toss, and soft ball catch to playful obstacle courses and group games. In morning assemblies, students join together in peaceful prayers and cheerful clapping. During festive school events, children dress in colorful attire, celebrate with dance and simple skits, and feel the pure warmth of applause from their parents and teachers.',
    descriptionMr: 'आनंद, खेळ आणि मनमोकळे हसू हेच खऱ्या बालपणाचे सौंदर्य आहे. श्री साई सेवा विद्यालयात मुले मोकळ्या मैदानात धावण्याचा, नवनवीन खेळांचा आणि कलेचा मनसोक्त आनंद घेतात. शाळेच्या प्रांगणात मुलांना आकर्षित करणारे विविध खेळ घेतले जातात—जसे की धावण्याच्या गमतीशीर शर्यती, रिंग फेकणे, चेंडू झेलणे आणि मजेदार अडथळ्यांचे खेळ. सकाळी प्रार्थनेच्या वेळी मुले एकत्र येऊन टाळ्यांच्या गजरात सहभागी होतात. सण-उत्सवांच्या वेळी रंगीबेरंगी कपडे घालून मुले हसतमुखाने साधे नृत्य व नाटकांत भाग घेतात, ज्यामुळे त्यांच्यातील भीती दूर होऊन आत्मविश्वास वाढतो.',
    eligibilityEn: 'All admitted school students across all mobility levels.',
    eligibilityMr: 'शाळेतील सर्व विद्यार्थी; प्रत्येकाला त्याच्या क्षमतेनुसार खेळ व उपक्रमांत प्रेमाने सहभागी करून घेतले जाते.',
    staffStudentRatio: '1 : 8 (Dedicated Sports Trainers & Activity Guides)',
    weeklyHours: 'Daily Morning Stretches & Afternoon Playtime',
    certification: 'Dedicated Sports Trainers & Creative Activity Guides',
    image: '/cocurricular.png',
    heroCaptionEn: 'Discovering joy, friendships, and confidence through arts, sports, yoga, and cultural celebrations',
    heroCaptionMr: 'कला, खेळ, योग आणि सांस्कृतिक उपक्रमांतून आनंद, मैत्री व आत्मविश्वास अनुभवणारी मुले',
    galleryImages: [
      '/4.jpg',
      '/5.jpg',
      '/6.jpg',
    ],
    galleryCaptionsEn: [
      'Ready to Soar: Loving Encouragement at the Starting Line',
      'Pure Joy of Childhood: Giggles & Carefree Smiles on the Merry-Go-Round',
      'Running with Pride: Celebrating Every Little Champion on the Track',
    ],
    galleryCaptionsMr: [
      'धावण्यासाठी सज्ज! शिक्षकांचे प्रेमळ बोट धरून आत्मविश्वासाने घेतलेली भरारी',
      'खळखळून हसणारे बालपण: फिरत्या पाळण्यावर मित्रांसोबत मनसोक्त आनंद',
      'आमचे छोटे चॅम्पियन्स: आत्मविश्वासाने आणि जिद्दीने मैदानावर धावणारी मुले',
    ],
    iconName: 'Trophy',
    themeColor: {
      badge: 'bg-rose-100 text-rose-900 border-rose-300',
      border: 'border-rose-200 hover:border-rose-400',
      accent: '#E11D48',
      bgSoft: 'bg-rose-50/50',
    },
    objectivesEn: [
      'Build physical vitality, body balance, and healthy energy through joyful, non-competitive outdoor games.',
      'Help children feel calm, happy, and refreshed through gentle morning stretches and shared assembly prayers.',
      'Nurture friendship, sharing, taking turns, and cheering for each other on the playground.',
      'Overcome shyness and build lasting self-confidence through participation in cheerful school celebrations.',
    ],
    objectivesMr: [
      'मैदानी खेळ व गमतीशीर उपक्रमांतून मुलांची शारीरिक ऊर्जा, तोल आणि स्वास्थ्य सुधारणे.',
      'सकाळच्या सोप्या व्यायामातून आणि प्रार्थनेतून मुलांचे मन शांत व उत्साही ठेवणे.',
      'खेळाच्या माध्यमातून मित्रांसोबत मिळून खेळणे, पाळीची वाट पाहणे आणि एकमेकांना प्रोत्साहन देणे.',
      'शाळेतील सण-उत्सवांमध्ये सहभागी होऊन मनातील भीती दूर करणे आणि आत्मविश्वास मिळवणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Discovering What Each Child Enjoys',
        titleMr: 'प्रत्येक मुलाची आवड समजून घेणे',
        descriptionEn: 'Teachers patiently observe which outdoor games, running activities, or creative arts each child loves most.',
        descriptionMr: 'मुलाला कोणत्या प्रकारच्या खेळांमध्ये किंवा कला उपक्रमांत जास्त आनंद मिळतो, हे शिक्षक प्रेमाने समजून घेतात.',
      },
      {
        stepNumber: 2,
        titleEn: 'Gentle Morning Stretches & Fresh Air',
        titleMr: 'सकाळचे हलके व्यायाम व शांत श्वास',
        descriptionEn: 'Starting the day in the fresh morning air with simple stretches, deep breaths, and easy movements that help children feel relaxed and cheerful.',
        descriptionMr: 'सकाळी मोकळ्या हवेत सोपे हात-पाय हलवणे, दीर्घ श्वास घेणे आणि शरीराला ताजेतवाने करणारे हलके व्यायाम करणे.',
      },
      {
        stepNumber: 3,
        titleEn: 'Fascinating Field & Playground Games',
        titleMr: 'मुलांचे आवडते मैदानी व गमतीशीर खेळ',
        descriptionEn: 'Enjoying a wonderful variety of games that children naturally find fascinating—such as soft ball throwing and catching, ring-toss, and cheerful obstacle games adapted for everyone.',
        descriptionMr: 'मुलांना आकर्षित करणारे विविध खेळ—जसे की चेंडू फेकणे व झेलणे, रिंग फेकणे आणि सर्वांना सहज जमणारे सांघिक खेळ.',
      },
      {
        stepNumber: 4,
        titleEn: 'Joyful Group Dancing & Festive Celebrations',
        titleMr: 'आनंददायी समूह नृत्य व सण उत्सव',
        descriptionEn: 'Moving happily to cheerful songs, practicing simple folk dance steps, and clapping together in fun group circles.',
        descriptionMr: 'आनंदी गाण्यांवर साधे नृत्याचे पाऊल टाकणे, फेर धरणे आणि मित्रांसोबत टाळ्या वाजवून सण साजरा करणे.',
      },
      {
        stepNumber: 5,
        titleEn: 'Shining with Confidence in Front of Parents',
        titleMr: 'पालकांसमोर कौतुकाने व आत्मविश्वासाने चमकणे',
        descriptionEn: 'Dressing up in bright festive clothes and taking part in joyful school performances where proud parents cheer and clap with all their heart.',
        descriptionMr: 'सुंदर पारंपरिक कपडे घालून शाळेच्या उत्सवात आनंदाने सहभागी होणे, जिथे पालक मुलांचे टाळ्या वाजवून कौतुक करतात.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Month 1 - 3 (Playground Warm-Up)',
        timelineMr: 'महिना १ ते ३ (मैदानाची सवय)',
        milestoneEn: 'Enjoys running freely on the playground with a happy smile and joins in with joyful clapping during morning assembly.',
        milestoneMr: 'मैदानावर आनंदाने धावणे आणि सकाळच्या प्रार्थनेत हसतमुखाने टाळ्या वाजवून सामील होणे.',
      },
      {
        timelineEn: 'Month 4 - 6 (Coordination & Friendly Play)',
        timelineMr: 'महिना ४ ते ६ (तोल व समन्वय)',
        milestoneEn: 'Happily throws and catches soft play balls with friends and participates in fun playground coordination games.',
        milestoneMr: 'मित्रांसोबत चेंडू फेकणे-झेलणे आणि मैदानातील साध्या खेळांमध्ये उत्साहाने भाग घेणे.',
      },
      {
        timelineEn: 'Month 7 - 12 (Celebration Pride & Smiles)',
        timelineMr: 'महिना ७ ते १२ (उत्सवातील आनंद)',
        milestoneEn: 'Confidently takes part in festive school performances and sports day events, beaming with pride as families cheer them on.',
        milestoneMr: 'शाळेच्या क्रीडा दिन व उत्सवांमध्ये मित्रांसोबत आनंदाने सहभागी होणे आणि पालकांच्या कौतुकाने आत्मविश्वास वाढवणे.',
      },
    ],
    dailyInterventionsEn: [
      'Morning gentle playground stretches and refreshing deep breaths under the open sky',
      'Morning assembly prayers with joyful group clapping and positive encouragement',
      'Afternoon playtime with engaging games: soft ball catch, fun obstacle runs, and ring-toss',
      'Evening group dance and free-movement recreational games in the open courtyard',
    ],
    dailyInterventionsMr: [
      'सकाळी मोकळ्या हवेत मैदानावर हलके व्यायाम आणि शांत श्वास घेणे',
      'सामुदायिक प्रार्थना आणि सर्वांसोबत टाळ्या वाजवून दिवसाची प्रसन्न सुरुवात',
      'दुपारी मुलांचे आवडते खेळ: चेंडू झेलणे, साधी अडथळ्यांची शर्यत आणि रिंग फेकणे',
      'संध्याकाळी मैदानावर आनंददायी समूह नृत्य आणि मित्रांसोबत गमतीशीर खेळ',
    ],
    assessmentMethodEn: 'Gentle and encouraging observation focusing on the child’s everyday happiness, eagerness to play, body balance, and growing self-confidence.',
    assessmentMethodMr: 'मुलाचा खेळण्यातील आनंद, शारीरिक तोल, सहभाग आणि वाढणारा आत्मविश्वास यावर आधारित प्रेमळ निरीक्षण.',
    parentRoleEn: 'Parents are warmly invited during school sports days and festive celebrations to cheer for their children and celebrate their joyful achievements.',
    parentRoleMr: 'क्रीडा दिनी व शाळेच्या उत्सवात पालकांना प्रेमाने आमंत्रित केले जाते, जेणेकरून ते आपल्या मुलांचा आनंद व खेळ प्रत्यक्ष पाहू शकतील.',
  },
  {
    id: 'counselling',
    titleEn: 'Counselling & Care',
    titleMr: 'विद्यार्थी समुपदेशन व प्रेमळ काळजी',
    badgeEn: 'Emotional Care & Support',
    badgeMr: 'भावनिक आधार व काळजी',
    category: 'counselling',
    taglineEn: 'Gentle emotional support, attentive care, and peaceful guidance whenever children need it.',
    taglineMr: 'विद्यार्थ्यांना गरज भासेल तेव्हा प्रेमळ समुपदेशन, शांत वातावरण आणि सतत काळजी.',
    descriptionEn: 'Every child experiences moments when they feel overwhelmed, upset, or find it hard to express their feelings. At Shree Sai Seva School, our focus is on giving each student a safe, gentle, and loving environment. When a child becomes restless or aggressive, our caring staff and dedicated counselors step in with patience, soothing words, and gentle care. We help calm children through peaceful music, comforting toys, and warm, one-on-one conversations. Our dedicated ayahs are always present beside the children throughout the day, looking after their personal needs and comforting them whenever required. In addition, we also assist families with the paperwork needed for obtaining government disability certificates.',
    descriptionMr: 'प्रत्येक मुलाला कधीकधी आपल्या भावना व्यक्त करणे कठीण जाते किंवा मनात अस्वस्थता वाटते. अशा वेळी श्री साई सेवा विद्यालयात मुलांची खूप प्रेमाने आणि आपुलकीने काळजी घेतली जाते. मूल अस्वस्थ किंवा रागावलेले असताना आमचे समुपदेशक त्यांच्याशी प्रेमाने बोलतात, त्यांना समजून घेतात आणि शांत करतात. मुलांना शांत करण्यासाठी खेळणी, मंद संगीत आणि प्रेमळ संवादाची मदत घेतली जाते. आमच्या काळजीवाहू मावशी (आया) मुलांसोबत सतत उपस्थित असतात आणि त्यांची प्रत्येक गरज मायेने पूर्ण करतात. यासोबतच पालकांना मुलांचे शासकीय दिव्यांग प्रमाणपत्र (Disability Certificate) मिळवण्यासाठी आवश्यक ती सर्व मदत केली जाते.',
    eligibilityEn: 'All enrolled school students whenever they need emotional comfort or guidance.',
    eligibilityMr: 'शाळेतील सर्व विद्यार्थी; ज्यांना गरज भासेल तेव्हा प्रेमाने मार्गदर्शन व काळजी दिली जाते.',
    staffStudentRatio: '1 : 1 (Individual Attention & Attentive Care)',
    weeklyHours: 'According to the requirements of the students',
    certification: 'Dedicated Counselors & Caring Caregivers (Ayahs)',
    image: '/councelling.png',
    heroCaptionEn: 'Safe, heard, and supported: dedicated counselors and loving staff being there for every child',
    heroCaptionMr: 'मुलांना समजून घेणारे समुपदेशक आणि मायेने काळजी घेणाऱ्या आया',
    galleryImages: [
      '/45.png',
      '/therapist.jpg',
      '/therapist1.jpg',
    ],
    galleryCaptionsEn: [
      'Safe, Heard & Valued: Profound Guidance & Emotional Support',
      'One-on-One Student Consultation & Guidance Session',
      'Our Dedicated Counseling Team, Visiting Therapists & Caring Ayahs',
    ],
    galleryCaptionsMr: [
      'सुरक्षित व प्रेमळ वातावरण: आपुलकीचा संवाद आणि भावनिक आधार',
      'विद्यार्थी प्रगती तपासणी व पालकांशी आपुलकीचे मार्गदर्शन',
      'मुलांची मायेने काळजी घेणारे समुपदेशक, थेरपिस्ट व काळजीवाहू वर्ग',
    ],
    iconName: 'HeartHandshake',
    themeColor: {
      badge: 'bg-teal-100 text-teal-900 border-teal-300',
      border: 'border-teal-200 hover:border-teal-400',
      accent: '#0D9488',
      bgSoft: 'bg-teal-50/50',
    },
    objectivesEn: [
      'Provide compassionate, one-on-one counseling for children whenever they feel upset or need someone to listen.',
      'Gently calm children using soothing music, engaging toys, and reassuring words when they feel restless.',
      'Ensure dedicated ayahs are always present alongside the children to look after their comfort and daily care.',
      'Assist parents with the application and paperwork required for government disability certificates.',
    ],
    objectivesMr: [
      'मुले अस्वस्थ असताना त्यांच्याशी प्रेमाने बोलून त्यांचे मन हलके करणे आणि समजून घेणे.',
      'मूल रागावलेले असताना मंद संगीत, आवडती खेळणी आणि आपुलकीच्या शब्दांनी त्याला शांत करणे.',
      'काळजीवाहू मावशी (आया) मुलांसोबत सतत राहून त्यांची मायेने काळजी घेतील याची खात्री करणे.',
      'पालकांना मुलांचे शासकीय दिव्यांग प्रमाणपत्र मिळवून देण्यासाठी आवश्यक सहकार्य करणे.',
    ],
    pedagogicalSteps: [
      {
        stepNumber: 1,
        titleEn: 'Understanding the Child with Patience',
        titleMr: 'मुलाचे मन प्रेमाने समजून घेणे',
        descriptionEn: 'Our counselors sit warmly with the child to understand what is bothering them, listening without pressure or scolding.',
        descriptionMr: 'समुपदेशक मुलाजवळ प्रेमाने बसून त्याचे म्हणणे ऐकून घेतात आणि त्याला कशाचा त्रास होतोय हे समजून घेतात.',
      },
      {
        stepNumber: 2,
        titleEn: 'Calming and Comforting with Toys & Music',
        titleMr: 'खेळणी व संगीताने शांत करणे',
        descriptionEn: 'When a child feels agitated or aggressive, we use gentle music, favorite toys, and reassuring companionship to help them feel at ease.',
        descriptionMr: 'मूल चिडलेले असताना मंद संगीत, सुंदर खेळणी आणि प्रेमळ शब्दांनी त्याचे लक्ष दुसरीकडे वळवून त्याला शांत केले जाते.',
      },
      {
        stepNumber: 3,
        titleEn: 'Heart-to-Heart Guidance & Emotional Healing',
        titleMr: 'आपुलकीचा संवाद व मार्गदर्शन',
        descriptionEn: 'Dedicated counselors speak gently with the student, standing beside them, helping them express their feelings, and healing their distress.',
        descriptionMr: 'समुपदेशक मुलाशी हितगुज करतात, त्याला धीर देतात आणि त्याच्या मनातील भीती दूर करून आत्मविश्वास वाढवतात.',
      },
      {
        stepNumber: 4,
        titleEn: 'Continuous Care by Attentive Ayahs',
        titleMr: 'मावशींची (आया) सतत सोबत व काळजी',
        descriptionEn: 'Our dedicated ayahs remain with the children throughout the day, looking after their needs and giving loving comfort whenever required.',
        descriptionMr: 'शाळेच्या वेळेत काळजीवाहू मावशी सतत मुलांसोबत असतात आणि त्यांना आवश्यक तेव्हा लगेच मदत व मायेचा आधार देतात.',
      },
      {
        stepNumber: 5,
        titleEn: 'Assistance with Disability Certificates',
        titleMr: 'दिव्यांग प्रमाणपत्र मिळवण्यासाठी मदत',
        descriptionEn: 'We provide practical assistance to parents with the paperwork and documentation needed to obtain their child’s government disability certificate.',
        descriptionMr: 'मुलाला आवश्यक असणारे शासकीय दिव्यांग प्रमाणपत्र मिळवण्यासाठी आम्ही पालकांना सर्व प्रकारची कागदपत्री मदत करतो.',
      },
    ],
    expectedOutcomes: [
      {
        timelineEn: 'Month 1 - 3 (Comfort & Safety)',
        timelineMr: 'महिना १ ते ३ (विश्वास व सुरक्षितता)',
        milestoneEn: 'The child feels secure in school and comfortably approaches counselors and ayahs when upset.',
        milestoneMr: 'मुलाच्या मनातील भीती कमी होऊन ते समुपदेशक आणि मावशींशी मनमोकळेपणाने संवाद साधू लागते.',
      },
      {
        timelineEn: 'Month 4 - 6 (Calmer Daily Routine)',
        timelineMr: 'महिना ४ ते ६ (शांत व आनंदी दिनचर्या)',
        milestoneEn: 'Restlessness and aggressive moments reduce naturally through calming music, toys, and steady companionship.',
        milestoneMr: 'संगीत, खेळणी आणि प्रेमळ देखरेखीमुळे मुलाचे चिडणे कमी होऊन ते दिवसभर शांत राहू लागते.',
      },
      {
        timelineEn: 'Month 7 - 12 (Confidence & Balance)',
        timelineMr: 'महिना ७ ते १२ (आत्मविश्वास व भावनिक स्थैर्य)',
        milestoneEn: 'The child shows healthy emotional balance in daily activities, and disability certificate support is facilitated.',
        milestoneMr: 'मुलामध्ये चांगला आत्मविश्वास निर्माण होतो आणि त्याचे शासकीय दिव्यांग प्रमाणपत्र पूर्ण करण्यास मदत होते.',
      },
    ],
    dailyInterventionsEn: [
      'Caring observation by teachers and staff to notice if any child is feeling quiet or upset',
      'Gentle one-on-one conversations with dedicated counselors whenever a child needs emotional support',
      'Soothing playtime with comforting toys and calm music to help children relax and feel peaceful',
      'Continuous presence and assistance from dedicated ayahs throughout the school day',
    ],
    dailyInterventionsMr: [
      'कोणतेही मूल अस्वस्थ किंवा दुःखी आहे का याकडे शिक्षक व कर्मचाऱ्यांचे प्रेमळ लक्ष',
      'गरज असेल तेव्हा समुपदेशकांसोबत एकांतात आपुलकीचा व शांत संवाद',
      'मुलांचे मन शांत करण्यासाठी खेळणी, मंद संगीत आणि सुरक्षित वातावरण',
      'दिवसभरात मुलांच्या प्रत्येक गरजेसाठी काळजीवाहू मावशींची सतत उपस्थिती',
    ],
    assessmentMethodEn: 'Ongoing caring observation of the child’s emotional comfort, peaceful behavior, and happy participation in school.',
    assessmentMethodMr: 'मुलाचा आनंद, त्याची शांतता आणि शाळेतील सहभागाचे प्रेमळ व सतत निरीक्षण.',
    parentRoleEn: 'Parents coordinate with the school for disability certificate paperwork and keep staff informed about the child’s wellbeing.',
    parentRoleMr: 'पालकांनी दिव्यांग प्रमाणपत्रासाठी आवश्यक कागदपत्रांमध्ये सहकार्य करावे आणि मुलाच्या तब्येतीविषयी शिक्षकांना सांगावे.',
  },
];
