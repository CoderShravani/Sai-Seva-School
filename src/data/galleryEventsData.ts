export interface GalleryEventSection {
  headingEn?: string;
  headingMr?: string;
  contentEn: string;
  contentMr?: string;
}

export interface GalleryEventItem {
  id: string;
  slug: string;
  titleEn: string;
  titleMr: string;
  shortIntroEn: string;
  shortIntroMr: string;
  categoryEn: string;
  categoryMr: string;
  verifiedDate?: string;
  mainImage?: string;
  isVideo?: boolean;
  videoUrl?: string;
  galleryImages?: string[];
  galleryPlaceholderCount: number;
  article: {
    introParagraphEn: string;
    introParagraphMr: string;
    sections: GalleryEventSection[];
    closingParagraphEn: string;
    closingParagraphMr: string;
  };
}

export const GALLERY_EVENTS: GalleryEventItem[] = [
  // 1. Independence Day
  {
    id: 'independence-day',
    slug: 'independence-day',
    titleEn: 'Independence Day',
    titleMr: 'स्वातंत्र्य दिन उत्सव',
    shortIntroEn:
      'A solemn and joyful celebration honoring our nation’s heritage, bringing our children and educators together under the tricolor.',
    shortIntroMr:
      'भारताच्या स्वातंत्र्यदिनानिमित्त राष्ट्रीय एकात्मता आणि देशभक्तीचा संदेश देणारा आनंददायी सोहळा.',
    categoryEn: 'National Occasion',
    categoryMr: 'राष्ट्रीय उत्सव',
    mainImage: '/independence.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Every year on the fifteenth of August, schools across India gather to observe Independence Day. For our residential community, this occasion serves as a deeply meaningful reminder of the ideals that bind our nation together: freedom, equality, shared dignity, and the promise that every citizen has a rightful place in society.',
      introParagraphMr:
        'दरवर्षी १५ ऑगस्ट रोजी संपूर्ण भारतात स्वातंत्र्यदिन मोठ्या अभिमानाने साजरा केला जातो. आमच्या निवासी शाळेतील मुलांसाठी हा दिवस केवळ एक सण नसून राष्ट्राविषयी आपुलकी आणि प्रत्येक नागरिकाच्या समान अधिकारांची जाणीव करून देणारा एक सुंदर प्रसंग असतो.',
      sections: [
        {
          headingEn: 'A Sense of Belonging and National Pride',
          headingMr: 'देशाभिमान आणि सामूहिक एकात्मतेची भावना',
          contentEn:
            'For children with developmental and intellectual disabilities, national celebrations carry special value. Long before complex historical treaties or political milestones are understood, the symbols of our country speak directly to the heart: the vibrant tricolor, the solemn melody of the national anthem, and the shared stillness as the flag rises against the open sky. In these shared moments, every child experiences an unmistakable sense of belonging. They are not merely observers of our country’s story; they are cherished participants in its present and its future.',
          contentMr:
            'विशेष गरजा असणाऱ्या मुलांसाठी राष्ट्रीय सण मनाला स्पर्श करणारे ठरतात. तिरंगा ध्वज, राष्ट्रगीताचे सूर आणि सामूहिक एकता यातून प्रत्येक मुलाला देशाचा आपण एक सन्माननीय घटक आहोत याची सुंदर अनुभूती मिळते.',
        },
        {
          headingEn: 'Active Participation in Everyday Expressions',
          headingMr: 'उत्सवातील सहभाग आणि आत्मविश्वास',
          contentEn:
            'National festivals provide countless pathways for inclusive engagement. Whether standing in quiet reverence with peers, waving small handheld flags, or joining voices in songs of unity, each child participates in ways that honor their unique comfort and abilities. Special educators guide the children with steady reassurance, turning what might otherwise be an abstract concept into tangible feelings of warmth, collective pride, and security within their school home.',
          contentMr:
            'मुलांच्या क्षमतेनुसार त्यांना राष्ट्रध्वजाचे महत्त्व समजावून सांगणे, देशभक्तीपर गीतांमध्ये सहभागी करून घेणे आणि शाळेतील मित्रांसोबत एकत्र येणे यामुळे मुलांचा आत्मविश्वास वाढतो.',
        },
        {
          headingEn: 'Reflecting on Freedom Through the Lens of Care',
          headingMr: 'स्वातंत्र्याची खरी व्याख्या: सन्मान आणि स्वावलंबन',
          contentEn:
            'True independence, in the context of special education, is reflected in every small step toward self-reliance. When a young learner masters buttoning a shirt, communicates a personal choice, or walks steadily across the quadrangle, a quiet milestone of freedom is achieved. Honoring Independence Day in our school is therefore a celebration of both our country’s journey and the personal triumphs of each child growing toward self-respect and dignity.',
          contentMr:
            'विशेष मुलांच्या संदर्भात स्वातंत्र्य म्हणजे स्वतःच्या पायावर उभे राहणे आणि स्वावलंबी जीवन जगणे. हा दिवस साजरा करताना आम्ही प्रत्येक मुलाच्या वैयक्तिक प्रगतीचा आणि आत्मविश्वासाचा सन्मान करतो.',
        },
      ],
      closingParagraphEn:
        'As the morning sun warms our campus quadrangle, Independence Day leaves us with renewed dedication: to nurture each student with patience, provide an unshakeable foundation of care, and stand beside them as they carve their own honorable path in our shared homeland.',
      closingParagraphMr:
        'स्वातंत्र्यदिनाचा हा पवित्र प्रसंग आमच्या शाळेतील प्रत्येक मुलाला प्रेम, सुरक्षितता आणि सन्मानपूर्वक जीवन देण्याच्या आमच्या संकल्पाला नवी ऊर्जा देतो.',
    },
  },

  // 2. Republic Day
  {
    id: 'republic-day',
    slug: 'republic-day',
    titleEn: 'Republic Day',
    titleMr: 'प्रजासत्ताक दिन सोहळा',
    shortIntroEn:
      'Reflecting on our Constitution’s core values of equality, fundamental dignity, and the promise of an inclusive society for all.',
    shortIntroMr:
      'संविधानाने दिलेल्या समान हक्क, सन्मान आणि सर्वसमावेशकतेच्या मूल्यांचे स्मरण करून देणारा प्रजासत्ताक दिन.',
    categoryEn: 'National Occasion',
    categoryMr: 'राष्ट्रीय उत्सव',
    mainImage: '/republic.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Republic Day commemorates the moment India adopted its Constitution, formally declaring that every person—regardless of background, circumstance, or ability—is endowed with equal dignity and rights. Within our school community, this day prompts thoughtful reflection on what an inclusive republic genuinely looks like in daily practice.',
      introParagraphMr:
        '२६ जानेवारी हा दिवस भारताच्या प्रजासत्ताकाचा आणि संविधानाचा उत्सव आहे. संविधानाने प्रत्येक व्यक्तीला दिलेला समान अधिकार आणि सन्मान या मूल्यांचा जागर आमच्या शाळेत विशेषत्वाने केला जातो.',
      sections: [
        {
          headingEn: 'The Promise of Equality in Practice',
          headingMr: 'समानतेचा खरा अर्थ आणि प्रत्यक्ष कृती',
          contentEn:
            'The preamble of our Constitution begins with "We, the People." These words encompass children who learn at different paces, communicate without words, and navigate sensory worlds distinct from the mainstream. Celebrating Republic Day reminds us that a nation’s strength is measured not by how fast its swiftest citizens move, but by how compassionately it supports, includes, and honors every single member of the human family.',
          contentMr:
            'संविधानातील "आम्ही भारताचे लोक" हा विचार प्रत्येक विशेष मुलाला लागू होतो. मुलांच्या क्षमता वेगवेगळ्या असल्या तरी त्यांचा सन्मान आणि शिक्षणाचा अधिकार समान आहे हा संदेश या दिवशी अधोरेखित होतो.',
        },
        {
          headingEn: 'Building Civic Awareness Gently',
          headingMr: 'नागरिक कर्तव्यांची व मूल्यांची सोपी ओळख',
          contentEn:
            'Rather than burdening young minds with complex legal doctrines, our educators translate constitutional values into simple, relatable truths: sharing resources fairly, respecting individual differences, protecting one another from harm, and working together as a peaceful household. These living habits form the genuine bedrock of civic duty and social harmony.',
          contentMr:
            'नियम पाळणे, मित्रांना मदत करणे, एकमेकांचा आदर करणे या दैनंदिन चांगल्या सवयींतूनच मुले जबाबदार नागरिक बनण्याच्या दिशेने वाटचाल करतात.',
        },
        {
          headingEn: 'A Community Gathered in Unity',
          headingMr: 'सामूहिक एकात्मता आणि शांततेचा संदेश',
          contentEn:
            'Gathering as a whole school on Republic Day morning bridges generations and backgrounds. Attendants, teachers, speech therapists, caregivers, and students assemble side by side. The shared silence, the crisp salute, and the rhythmic cadence of the anthem reaffirm a shared mission: to build an educational haven where no child is left behind in the march of progress.',
          contentMr:
            'सर्व शिक्षक, कर्मचारी आणि विद्यार्थी एकत्र येऊन राष्ट्रध्वजाला वंदन करतात आणि एकात्मतेची भावना वृद्धिंगत करतात.',
        },
      ],
      closingParagraphEn:
        'Republic Day stands as an enduring pledge that our school community will continue upholding the constitutional spirit of universal brotherhood, compassionate inclusion, and uncompromising dignity for every child entrusted to our care.',
      closingParagraphMr:
        'प्रजासत्ताक दिनाचा हा संदेश आम्हाला मुलांच्या उज्ज्वल भविष्यासाठी अधिक निष्ठेने कार्य करण्याची प्रेरणा देतो.',
    },
  },

  // 3. Dahi Handi Celebration
  {
    id: 'dahi-handi',
    slug: 'dahi-handi',
    titleEn: 'Dahi Handi Celebration',
    titleMr: 'दहीहंडी उत्सव',
    shortIntroEn:
      'Immersing in the spirited traditions of Gokulashtami, celebrating youthful joy, camaraderie, and Maharashtrian cultural heritage.',
    shortIntroMr:
      'गोकुळाष्टमी आणि दहीहंडीच्या पवित्र परंपरेतून मुलांमध्ये उत्साह, आनंद आणि सांघिक वृत्ती निर्माण करणारा उत्सव.',
    categoryEn: 'Cultural Tradition',
    categoryMr: 'सांस्कृतिक परंपरा',
    mainImage: '/dahihandi.mp4',
    isVideo: true,
    videoUrl: '/dahihandi.mp4',
    galleryPlaceholderCount: 5,
    article: {
      introParagraphEn:
        'Dahi Handi is one of Maharashtra’s most lively and cherished cultural traditions. Rooted in the folklore of Lord Krishna’s playful youth in Gokul, the festival carries timeless themes of camaraderie, cheerful collaboration, and the infectious energy that blossoms when a community comes together in shared delight.',
      introParagraphMr:
        'महाराष्ट्रात गोकुळाष्टमी व दहीहंडी उत्सवाला एक विशेष स्थान आहे. बाळकृष्णाच्या बाललीलांवर आधारित हा सण मुलांमध्ये उत्साह, आनंद आणि परस्परांविषयी प्रेम निर्माण करतो.',
      sections: [
        {
          headingEn: 'The Cultural Spirit of Krishna’s Childhood',
          headingMr: 'बाळकृष्णाच्या बाललीला आणि उत्सवाचा आनंद',
          contentEn:
            'In Indian lore, the young Krishna is remembered as an endearing child surrounded by loyal friends, known for sharing earthen pots of curd and butter. For our school, this narrative resonates deeply with the spirit of innocent childhood. The festival offers a welcoming cultural touchstone, connecting our students to songs, rhythms, and family traditions celebrated throughout their home region.',
          contentMr:
            'गोकुळातील बाळकृष्णाच्या कथा मुलांच्या बालमनाला खूप भावतात. या सणामुळे मुलांचे मन प्रसन्न होते आणि त्यांना आपल्या संस्कृतीची गोडी लागते.',
        },
        {
          headingEn: 'A Celebration Adapted with Warmth and Care',
          headingMr: 'मुलांच्या सुरक्षिततेची व आनंदाची काळजी',
          contentEn:
            'Festive occasions at our school are always tailored to the comfort, sensory needs, and safety of every learner. The focus is never on high-pressure spectacles, but rather on joyful participation: the sound of traditional music, the sight of decorated clay pots, the gentle clapping of hands, and the shared anticipation of sweet festive snacks prepared with love by our kitchen staff.',
          contentMr:
            'आमच्या शाळेत कोणताही उत्सव साजरा करताना मुलांची सुरक्षितता आणि त्यांचा सहज आनंद याला सर्वोच्च प्राधान्य दिले जाते.',
        },
        {
          headingEn: 'Fostering Togetherness and Friendship',
          headingMr: 'मैत्री आणि सहकार्याची भावना',
          contentEn:
            'What matters most during Dahi Handi is the feeling of mutual support. Children watch, cheer, smile, and participate alongside their mentors and friends. In an environment built around special education, these shared festive memories help dissolve anxieties, spark spontaneous smiles, and strengthen the bonds of affection that make our hostel feel like a home.',
          contentMr:
            'मित्रांसोबत आनंद वाटणे, टाळ्या वाजवून दाद देणे आणि उत्साहात सहभागी होणे यामुळे मुलांमधील मैत्री आणखी दृढ होते.',
        },
      ],
      closingParagraphEn:
        'As the festive rhythms echo across our grounds, Dahi Handi leaves our halls filled with warm smiles and pleasant exhaustion, reminding us that childhood is meant to be treasured in all its colorful, spontaneous delight.',
      closingParagraphMr:
        'दहीहंडीचा हा उत्सव मुलांच्या चेहऱ्यावर उमटणारे हास्य आणि शाळेतील प्रसन्न वातावरण यामुळे कायम स्मरणात राहतो.',
    },
  },

  // 4. Holi Celebration
  {
    id: 'holi',
    slug: 'holi',
    titleEn: 'Holi Celebration',
    titleMr: 'रंगोत्सव होळी व धुलीवंदन',
    shortIntroEn:
      'Welcoming spring through safe, sensory-friendly colors, warmth, and the timeless joy of festive togetherness.',
    shortIntroMr:
      'सुरक्षित, नैसर्गिक रंगांच्या माध्यमातून वसंत ऋतूचे स्वागत आणि मुलांसाठी आनंददायी रंगांची उधळण.',
    categoryEn: 'Cultural Tradition',
    categoryMr: 'सांस्कृतिक परंपरा',
    mainImage: '/holi.jpg',
    galleryPlaceholderCount: 5,
    article: {
      introParagraphEn:
        'Holi arrives with the changing of seasons, signaling the departure of winter and the vibrant rebirth of spring. Across India, it is hailed as a festival that washes away grievances and paints life in hopeful hues of friendship, affection, and renewal.',
      introParagraphMr:
        'होळी आणि धुलीवंदन हा सण वसंत ऋतूचे स्वागत करतो. जुने मतभेद विसरून प्रेम आणि आनंदाचे रंग उधळणारा हा भारतीय संस्कृतीतील अत्यंत लोकप्रिय सण आहे.',
      sections: [
        {
          headingEn: 'Sensory Exploration and Tactile Discovery',
          headingMr: 'संवेदी अनुभव आणि सुरक्षित रंग',
          contentEn:
            'For special children, colors are far more than a visual spectacle; they represent a rich tactile and sensory experience. The soft texture of dry herbal powders, the gentle dusting of gulal on a smiling forehead, and the sight of bright yellows, pinks, and greens against clean white kurtas spark immediate curiosity. Guided with attentiveness by therapists and teachers, children are encouraged to touch, explore, and react at their own unhurried pace.',
          contentMr:
            'मुलांसाठी रंग स्पर्श करणे, पाहणे आणि अनुभवणे हा एक छान संवेदी खेळ ठरतो. नैसर्गिक रंगांचा वापर करून मुले हा सण सुरक्षितपणे अनुभवतात.',
        },
        {
          headingEn: 'Respecting Individual Comfort Zones',
          headingMr: 'प्रत्येक मुलाच्या आवडीचा आदर',
          contentEn:
            'Sensory processing varies immensely among children. While some eagerly plunge their hands into bright colors, others prefer observing quietly from the verandah with a favorite caregiver. Our team honors these individual boundaries unconditionally. No child is pressured; instead, the festive atmosphere is crafted so that participation is completely voluntary, soothing, and pressure-free.',
          contentMr:
            'काही मुलांना रंग खेळणे खूप आवडते, तर काही मुले लांबून पाहणे पसंत करतात. आम्ही प्रत्येक मुलाच्या आवडीनिवडीचा आणि मानसिकतेचा आदर करतो.',
        },
        {
          headingEn: 'Symbolism of Renewal and Acceptance',
          headingMr: 'नवी उमेद आणि सर्वसमावेशकतेचा संदेश',
          contentEn:
            'The heart of Holi lies in its radical equality: when faces are brushed with color, distinctions of background, speech abilities, and developmental timelines dissolve into shared warmth. It is a day that celebrates every child simply for who they are, surrounded by caretakers who love them unconditionally.',
          contentMr:
            'रंगांच्या या खेळात सर्व मुले समान असतात. एकमेकांना प्रेमाने रंग लावताना त्यांच्यातील जवळीक अधिक वाढते.',
        },
      ],
      closingParagraphEn:
        'Long after the colored powders are washed away, the warmth of Holi lingers in our hallways—a gentle reminder of the bright, multifaceted potential flourishing within every single student.',
      closingParagraphMr:
        'होळीचा हा सण आमच्या शाळेत मुलांसाठी आनंद, प्रेम आणि परस्परांबद्दलची आपुलकी दृढ करणारा ठरतो.',
    },
  },

  // 5. Birthday Celebrations of Guests
  {
    id: 'guest-birthday-celebrations',
    slug: 'guest-birthday-celebrations',
    titleEn: 'Birthday Celebrations of Guests',
    titleMr: 'स्नेही व पाहुण्यांचे वाढदिवस',
    shortIntroEn:
      'Welcoming donors, well-wishers, and friends who choose to share their milestone birthdays in the company of our children.',
    shortIntroMr:
      'आपला वाढदिवस विशेष मुलांसोबत साजरा करून त्यांना आपुलकी व माया देणाऱ्या हितचिंतकांचा सन्मान.',
    categoryEn: 'Community Life',
    categoryMr: 'सामाजिक उपक्रम',
    mainImage: '/birthday.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Birthdays are traditionally celebrated among family and close friends. Yet throughout the year, compassionate individuals, family donors, and community patrons choose to mark their personal milestones by visiting our residential school, choosing to share their special day with children whose journeys inspire them.',
      introParagraphMr:
        'अनेक संवेदनशील नागरिक, देणगीदार आणि हितचिंतक स्वतःचा किंवा कुटुंबीयांचा वाढदिवस आमच्या शाळेतील मुलांसोबत साजरा करण्यास प्राधान्य देतात. यामुळे मुलांच्या चेहऱ्यावर एक वेगळाच आनंद दिसून येतो.',
      sections: [
        {
          headingEn: 'A Bridge Between the School and Society',
          headingMr: 'समाज आणि शाळेतील आपुलकीचा पूल',
          contentEn:
            'These visits form a vital bridge connecting our residential campus to the wider community. When visitors step through our gates to celebrate, they bring not merely sweets, fruit baskets, or thoughtful donations, but something far more precious: their presence, genuine smiles, and time. For children living in residential care, knowing that the outside world remembers and values them is deeply comforting.',
          contentMr:
            'पाहुण्यांच्या भेटींमुळे मुलांना समाजातील आपुलकीचा प्रत्यय येतो. बाहेरील व्यक्ती जेव्हा त्यांच्याशी प्रेमाने बोलतात, तेव्हा मुलांचा एकटेपणा दूर होतो आणि त्यांचा आत्मविश्वास वाढतो.',
        },
        {
          headingEn: 'Learning the Values of Hospitality and Gratitude',
          headingMr: 'आदरातिथ्य आणि कृतज्ञतेचे संस्कार',
          contentEn:
            'Welcoming a guest offers wonderful natural opportunities for life-skills learning. Students practice greeting visitors with folded hands, saying "Namaste," offering chairs, and singing sweet birthday wishes. These authentic, unscripted moments teach confidence and social etiquette in ways that no textbook lesson ever could.',
          contentMr:
            'पाहुण्यांचे स्वागत करणे, त्यांना नमस्कार करणे आणि त्यांच्या आनंदात सहभागी होणे यातून मुलांवर चांगले सामाजिक संस्कार घडतात.',
        },
        {
          headingEn: 'Meaningful Memories for Both Children and Visitors',
          headingMr: 'समाधान आणि आत्मिक शांतीचा अनुभव',
          contentEn:
            'Visitors frequently express how deeply humbling and heartwarming it is to spend their birthday in our prayer hall or dining room. The children’s spontaneous claps, innocent eyes, and genuine smiles cut through the distractions of everyday life, leaving guests with a profound sense of purpose and fulfillment.',
          contentMr:
            'मुलांसोबत वाढदिवस साजरा करून पाहुण्यांनाही एक वेगळेच आत्मिक समाधान मिळते आणि शाळेविषयी त्यांची आपुलकी अधिक वाढते.',
        },
      ],
      closingParagraphEn:
        'Every guest who chooses to celebrate a personal milestone among our children leaves an indelible mark of kindness, proving that human warmth and shared presence are the greatest gifts anyone can bestow.',
      closingParagraphMr:
        'अशा वाढदिवसाच्या क्षणांमुळे आमच्या शाळेतील मुलांना प्रेमाची आणि कुटुंबासारखी उब लाभते.',
    },
  },

  // 6. Guru Purnima Celebration
  {
    id: 'guru-purnima',
    slug: 'guru-purnima',
    titleEn: 'Guru Purnima Celebration',
    titleMr: 'गुरुपौर्णिमा उत्सव',
    shortIntroEn:
      'Honoring the quiet dedication of special educators, therapists, and caregivers who guide our students with boundless patience.',
    shortIntroMr:
      'आपल्या विद्यार्थ्यांना मायेने आणि अथांग संयमाने घडवणाऱ्या शिक्षकांप्रति व मार्गदर्शकांप्रति कृतज्ञता व्यक्त करणारा दिवस.',
    categoryEn: 'Cultural Tradition',
    categoryMr: 'सांस्कृतिक परंपरा',
    mainImage: '/gurupurnima.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Guru Purnima is one of India’s most revered spiritual and cultural traditions—a day dedicated to expressing profound gratitude to those who illuminate our minds with wisdom, dispel darkness, and steady our steps along life’s journey. In a special school, this reverence takes on an exceptionally tender and sacred meaning.',
      introParagraphMr:
        'गुरुपौर्णिमा हा आपल्या जीवनाला योग्य दिशा देणाऱ्या शिक्षकांप्रति, गुरूंप्रति कृतज्ञता व्यक्त करण्याचा अत्यंत पवित्र सण आहे. विशेष शाळेत या सणाचे महत्त्व अधिकच वाढते.',
      sections: [
        {
          headingEn: 'The Special Educator as a Compassionate Guide',
          headingMr: 'विशेष शिक्षकांची अथांग मेहनत व आपुलकी',
          contentEn:
            'Teaching a child with an intellectual disability requires patience far beyond conventional pedagogy. It requires repeating a single word dozens of times without frustration; gently guiding stiffened fingers until they grasp a crayon; and celebrating with tears of joy when a non-verbal child makes intentional eye contact for the first time. The special educator is teacher, mentor, therapist, and mother-figure all at once.',
          contentMr:
            'विशेष मुलांना शिकवणे हे अत्यंत संयमाचे काम असते. एकच अक्षर किंवा शब्द अनेकदा समजावून सांगणे, हात धरून लिहिण्यास शिकवणे ही शिक्षकांची अथांग साधना असते.',
        },
        {
          headingEn: 'Expressing Gratitude in Simple, Touching Ways',
          headingMr: 'कृतज्ञतेचे साधे पण भावूक क्षण',
          contentEn:
            'On Guru Purnima, our students express their love in ways that touch the soul. A flower picked from the campus garden, a hand-drawn greeting card with colorful scribbles, or a child gently touching the feet of their teacher with innocent sincerity—these unpretentious gestures convey deep, genuine affection that monetary awards could never match.',
          contentMr:
            'मुले आपल्या शिक्षकांना फुले देऊन, नमस्कार करून किंवा स्वतः हाताने बनवलेली कार्डे देऊन गुरुपौर्णिमा साजरी करतात.',
        },
        {
          headingEn: 'Acknowledging Non-Teaching Caregivers as Gurus',
          headingMr: 'मावशी व काळजीवाहूंचाही सन्मान',
          contentEn:
            'In our residential school, learning does not stop when the bell rings. Our ayahs, wardens, cooks, and support staff teach essential lessons every day: how to fold a blanket, how to wash hands properly, and how to treat one another with kindness. Guru Purnima is an opportunity to honor every member of our staff who nurtures our children’s lives.',
          contentMr:
            'शाळेत मुलांना जीवन जगण्याची कौशल्ये शिकवणाऱ्या काळजीवाहू मावशी, कर्मचारी हेही मुलांचे गुरुच असतात; या दिवशी त्यांचाही सत्कार केला जातो.',
        },
      ],
      closingParagraphEn:
        'Guru Purnima reminds us all that true teaching is an act of selfless devotion, and that the greatest reward of any mentor is witnessing a child take another brave step toward independent dignity.',
      closingParagraphMr:
        'शिक्षकांचे आशीर्वाद आणि मुलांचे प्रेम यातून शाळेतील गुरु-शिष्याचे नाते अधिक दृढ व पवित्र बनते.',
    },
  },

  // 7. Raksha Bandhan Celebration
  {
    id: 'raksha-bandhan',
    slug: 'raksha-bandhan',
    titleEn: 'Raksha Bandhan Celebration',
    titleMr: 'रक्षाबंधन सोहळा',
    shortIntroEn:
      'Emphasizing mutual care, lifelong protection, and the affectionate bonds that make our residential hostel a true family.',
    shortIntroMr:
      'परस्परांचे रक्षण, प्रेम आणि आपुलकीचे प्रतीक असणारा रक्षाबंधन सण शाळेत कौटुंबिक वातावरणात साजरा केला जातो.',
    categoryEn: 'Cultural Tradition',
    categoryMr: 'सांस्कृतिक परंपरा',
    mainImage: '/rakshabandhan.jpg',
    galleryPlaceholderCount: 5,
    article: {
      introParagraphEn:
        'Raksha Bandhan is traditionally celebrated with the tying of a sacred thread—a rakhi—symbolizing affection, protection, and the enduring promise of care between siblings. Within our residential school, this festival expands beyond biological bonds, embracing our entire community in a circle of mutual safety and loving support.',
      introParagraphMr:
        'रक्षाबंधन हा बहीण-भावाच्या अतूट प्रेमाचा आणि संरक्षणाचा सण आहे. आमच्या निवासी शाळेत हा सण एका मोठ्या कुटुंबासारखा साजरा केला जातो, जिथे सर्व विद्यार्थी आणि कर्मचारी एकमेकांचे रक्षण करण्याचे वचन देतात.',
      sections: [
        {
          headingEn: 'Broadening the Meaning of Brotherhood and Sisterhood',
          headingMr: 'कौटुंबिक नात्यापलीकडचा स्नेहबंध',
          contentEn:
            'Many children in residential special education spend long periods away from their ancestral homes. In our hostel, peers naturally become brothers and sisters. Older students look after younger ones during meal times, hold hands while walking to the classroom, and comfort one another during homesick evenings. Raksha Bandhan honors these everyday acts of mutual guardianship.',
          contentMr:
            'वसतिगृहात एकत्र राहणारी ही मुले एकमेकांची भावंडे बनतात. संकटात एकमेकांना धीर देणे, एकत्र खेळणे आणि काळजी घेणे यातून हा स्नेहबंध अधिक घट्ट होतो.',
        },
        {
          headingEn: 'Handcrafted Rakhis and Fine-Motor Engagement',
          headingMr: 'स्वनिर्मित राख्या आणि हस्तकलेचा सराव',
          contentEn:
            'Leading up to the festival, craft sessions often incorporate rakhi-making activities. Threading colorful beads, gluing soft velvet motifs, and tying silky threads provide marvelous vocational therapy, refining fine-motor coordination and concentration while instilling pride in creating something by hand for a beloved friend or teacher.',
          contentMr:
            'मुले स्वतःच्या हाताने मणी ओवून, रंगीबेरंगी धागे वापरून राख्या तयार करतात, ज्यामुळे त्यांच्या बोटांचा व्यायाम होतो आणि हस्तकलेचा आनंद मिळतो.',
        },
        {
          headingEn: 'A Gentle Promise of Unconditional Protection',
          headingMr: 'सुरक्षिततेचे व विश्वासाचे वचन',
          contentEn:
            'When a thread is tied around a child’s wrist by a peer, teacher, or visiting sister, it carries an unspoken message: "You are safe here. You are cherished here. We will stand beside you." For a child navigating life with disabilities, that reassurance of safety is the greatest blessing any festival can bring.',
          contentMr:
            'हातात बांधलेली राखी प्रत्येक मुलाला ही जाणीव करून देते की ते या शाळेत पूर्णपणे सुरक्षित आहेत आणि त्यांची काळजी घेणारे लोक त्यांच्या पाठीशी आहेत.',
        },
      ],
      closingParagraphEn:
        'With colorful threads gracing small wrists throughout our dormitories, Raksha Bandhan fills our campus with a quiet, reassuring warmth—a testament to the enduring family bonds forged within our school walls.',
      closingParagraphMr:
        'रक्षाबंधनाचा हा धागा केवळ मनगटावर नसून प्रत्येक मुलाच्या मनात सुरक्षिततेची आणि आपुलकीची भावना निर्माण करतो.',
    },
  },

  // 8. Art Competition
  {
    id: 'art-competition',
    slug: 'art-competition',
    titleEn: 'Art Competition',
    titleMr: 'चित्रकला व रंगभरण स्पर्धा',
    shortIntroEn:
      'Fostering free creative expression, color exploration, and personal choice where every child’s voice is celebrated.',
    shortIntroMr:
      'मुलांच्या कल्पनाशक्तीला वाव देणारी, रंगांचा मुक्त वापर आणि आनंदाची अनुभूती देणारी चित्रकला स्पर्धा.',
    categoryEn: 'Creative Arts',
    categoryMr: 'कला व क्रीडा',
    mainImage: '/art.jpg',
    galleryPlaceholderCount: 6,
    article: {
      introParagraphEn:
        'Art is one of the most liberating forms of communication known to humanity. For children who struggle with verbal fluency, complex syntax, or rapid speech, a blank sheet of paper and a tray of vibrant colors offer an open window to the soul—a place where imagination speaks without words.',
      introParagraphMr:
        'चित्रकला हे मुलांच्या भावना व्यक्त करण्याचे एक अत्यंत प्रभावी माध्यम आहे. ज्या मुलांना बोलण्यात अडचण येते, ती मुले रंगांच्या माध्यमातून आपले मन मोकळे करतात.',
      sections: [
        {
          headingEn: 'Valuing the Creative Journey Over Rankings',
          headingMr: 'निकालापेक्षा प्रक्रियेला आणि प्रयत्नांना महत्त्व',
          contentEn:
            'In conventional settings, art competitions often place intense pressure on technical precision and winning trophies. In our school philosophy, the real triumph lies in the creative process itself. Whether a child chooses bold, expressive crayon strokes, delicate finger painting, or abstract patterns of color, every piece of paper represents an authentic act of courage, curiosity, and self-expression.',
          contentMr:
            'आमच्या शाळेत पहिला-दुसरा क्रमांक काढण्यापेक्षा प्रत्येक मुलाने रंगांमध्ये रमून स्वतःचे चित्र पूर्ण केले याला जास्त महत्त्व दिले जाते.',
        },
        {
          headingEn: 'Therapeutic and Motor Benefits of Art',
          headingMr: 'शारीरिक व मानसिक विकासासाठी उपयुक्त',
          contentEn:
            'Engaging with art materials provides profound occupational therapy benefits. Gripping crayons strengthens palmar arches, dabbing brushes coordinates wrist stability, and choosing between crimson red or ocean blue nurtures independent decision-making. As the colors flow, anxious minds settle into peaceful, focused concentration.',
          contentMr:
            'रंग हातात धरणे, रेषा ओढणे यामुळे मुलांच्या हाताच्या स्नायूंना बळकटी मिळते आणि त्यांची एकाग्रता वाढण्यास मदत होते.',
        },
        {
          headingEn: 'An Exhibition of Pride and Individuality',
          headingMr: 'मुलांच्या चित्रांचे प्रदर्शन व कौतुक',
          contentEn:
            'Displaying the children’s finished artwork along our corridor display boards transforms the school into a vibrant gallery of individuality. Seeing their work pinned up for peers, teachers, and visiting parents to admire fills our young artists with tangible pride, reinforcing their belief in their own unique capabilities.',
          contentMr:
            'मुलांनी काढलेली चित्रे जेव्हा शाळेच्या फलकावर लावली जातात, तेव्हा त्यांचे कौतुक पाहून मुलांचा आत्मविश्वास दुणावतो.',
        },
      ],
      closingParagraphEn:
        'The Art Competition is not about determining who draws best; it is an enduring celebration of individuality, proving that when children are given freedom and encouragement, their inner worlds bloom with radiant beauty.',
      closingParagraphMr:
        'चित्रकलेचा हा उपक्रम प्रत्येक मुलाच्या सुप्त कलागुणांना वाव देणारा आणि त्यांना आनंदाची अनुभूती देणारा ठरतो.',
    },
  },

  // 9. Children's Day Celebration
  {
    id: 'childrens-day',
    slug: 'childrens-day',
    titleEn: "Children's Day Celebration",
    titleMr: 'बालदिन सोहळा',
    shortIntroEn:
      'Honoring every child’s right to childhood, laughter, affectionate attention, and respectful validation.',
    shortIntroMr:
      'प्रत्येक मुलाच्या बालसुलभ आनंदाचा, हक्कांचा आणि व्यक्तिमत्त्वाचा आदर करणारा १४ नोव्हेंबरचा बालदिन.',
    categoryEn: 'Special Celebration',
    categoryMr: 'विशेष दिन',
    mainImage: '/children.jpg',
    galleryPlaceholderCount: 5,
    article: {
      introParagraphEn:
        'Celebrated on the fourteenth of November in memory of Pandit Jawaharlal Nehru, Children’s Day is a nationwide tribute to the innocence, promise, and preciousness of childhood. In our school, this day is celebrated as an affirmation that childhood belongs unconditionally to every young soul, regardless of cognitive or physical hurdles.',
      introParagraphMr:
        '१४ नोव्हेंबर हा दिवस भारतात बालदिन म्हणून साजरा केला जातो. पंडित नेहरूंना मुलांविषयी असणारे प्रेम या दिवशी आठवले जाते. आमच्या शाळेसाठी हा दिवस प्रत्येक विशेष मुलाच्या बालपणाचा सन्मान करणारा असतो.',
      sections: [
        {
          headingEn: 'Reclaiming the Pure Joy of Being a Child',
          headingMr: 'निरागस बालपणाचा मनमुराद आनंद',
          contentEn:
            'Children with special needs often endure rigorous daily schedules of physical therapy, medical assessments, speech correction, and developmental exercises. Children’s Day creates a joyful pause in that clinical routine—a day dedicated entirely to pure enjoyment, cheerful playtime, sweet treats, and unstructured laughter with friends.',
          contentMr:
            'मुलांना नियमित थेरपी व अभ्यासातून थोडा विरंगुळा मिळावा आणि त्यांनी मनसोक्त खेळावे, हसावे यासाठी बालदिनाचे विशेष महत्त्व असते.',
        },
        {
          headingEn: 'When Educators Become Playmates',
          headingMr: 'शिक्षकांचे प्रेमळ सहकार्य आणि सवंगडीपण',
          contentEn:
            'One of the sweetest aspects of Children’s Day is seeing educators and caregivers step down from their instructional roles to join the children as companions in play. Teachers sing favorite rhymes, join circle games, clap to cheerful tunes, and serve festive lunch plates directly to the children with warm encouragement and boundless smiles.',
          contentMr:
            'या दिवशी शिक्षक स्वतः मुलांसोबत खेळात सहभागी होतात, गाणी गातात आणि मुलांना गोड खाऊ देऊन त्यांचा दिवस अविस्मरणीय बनवतात.',
        },
        {
          headingEn: 'Every Child Seen, Heard, and Cherished',
          headingMr: 'प्रत्येक मुलाचे वेगळेपण आणि सन्मान',
          contentEn:
            'Beyond games and refreshments, the true essence of Children’s Day is validation. It is about looking directly into a child’s eyes, calling them by their name with love, and communicating that they are cherished precisely as they are. In a world that often measures worth by speed and competition, our children are reminded that their presence brings warmth and light to all who know them.',
          contentMr:
            'प्रत्येक मूल खास आहे, त्याचे अस्तित्व अनमोल आहे ही भावना मुलांच्या मनात रुजवणे हेच या दिवसाचे खरे उद्दिष्ट आहे.',
        },
      ],
      closingParagraphEn:
        'As the sun sets on Children’s Day, the echoes of delighted laughter lingering across our courtyard remind us why our school exists: to protect, nurture, and celebrate the sacred gift of childhood each and every day.',
      closingParagraphMr:
        'मुलांचा निरागस आनंद आणि त्यांचे कौतुक हाच बालदिनाचा खरा संदेश आहे, जो आम्हाला वर्षभर प्रेरणा देत राहतो.',
    },
  },

  // 10. Shiv Jayanti Celebration
  {
    id: 'shiv-jayanti',
    slug: 'shiv-jayanti',
    titleEn: 'Shiv Jayanti Celebration',
    titleMr: 'शिवजयंती उत्सव',
    shortIntroEn:
      'Reflecting on the inspiring legacy of Chhatrapati Shivaji Maharaj—his courage, ethical leadership, and deep compassion for the common people.',
    shortIntroMr:
      'छत्रपती शिवाजी महाराजांच्या पराक्रम, न्यायप्रियता आणि लोककल्याणकारी विचारांचे स्मरण करणारा शिवजयंती सोहळा.',
    categoryEn: 'Historical Heritage',
    categoryMr: 'ऐतिहासिक वारसा',
    mainImage: '/shivjayanti.jpg',
    galleryPlaceholderCount: 5,
    article: {
      introParagraphEn:
        'Shiv Jayanti commemorates the birth anniversary of Chhatrapati Shivaji Maharaj, the revered founder of the Maratha Empire and one of Indian history’s most celebrated visionary leaders. In Maharashtra, this day is observed with immense cultural pride, resonant remembrance, and deep respect for the ideals of justice and benevolent welfare.',
      introParagraphMr:
        'शिवजयंती म्हणजे रयतेचे राजे छत्रपती शिवाजी महाराज यांच्या जन्मदिनाचा पवित्र सोहळा. महाराष्ट्रात शिवजयंती अत्यंत उत्साहाने आणि आदराने साजरी केली जाते.',
      sections: [
        {
          headingEn: 'A Legacy of Courage and Inclusion',
          headingMr: 'शौर्य आणि सर्वसमावेशकतेचा आदर्श',
          contentEn:
            'Shivaji Maharaj is remembered not merely as a formidable warrior, but as a ruler who governed with extraordinary fairness, moral integrity, and deep compassion for the vulnerable. His governance protected the farmer, respected women, honored soldiers of all faiths, and created a society rooted in Swarajya—self-rule grounded in ethical responsibility. These timeless values provide rich, inspiring lessons for children growing up in Maharashtra.',
          contentMr:
            'शिवाजी महाराजांनी रयतेची काळजी घेतली, सर्वांना समान न्याय दिला आणि अन्यायाविरुद्ध लढण्याचे धैर्य दिले. त्यांचे हे विचार आजही मुलांना प्रेरणा देतात.',
        },
        {
          headingEn: 'Making History Relatable and Uplifting',
          headingMr: 'इतिहासाची सोपी व रंजक ओळख',
          contentEn:
            'For our special learners, the stories of Shivaji Maharaj are shared through evocative, accessible storytelling: his bravery as a young boy in Pune and Shivneri, his love for his mother Jijabai, his respect for mentors, and his fearless heart when facing overwhelming odds. Hearing how courage can triumph over physical limitations encourages our children to face their own everyday hurdles with determination.',
          contentMr:
            'जिजाऊंचे संस्कार आणि शिवरायांचे बालपण याविषयी सोप्या भाषेत गोष्टी सांगून मुलांमध्ये आत्मविश्वास व धाडस निर्माण केले जाते.',
        },
        {
          headingEn: 'Cultural Resonance and Community Spirit',
          headingMr: 'महाराष्ट्राच्या संस्कृतीचे दर्शन',
          contentEn:
            'Shiv Jayanti brings the resonant cadence of traditional Maharashtrian cultural heritage directly to our campus. The sight of saffron banners, traditional greetings, and solemn musical tributes creates a majestic yet warm atmosphere. Students participate with deep respect, sharing in the collective pride that unites their state and ancestral heritage.',
          contentMr:
            'भगवे ध्वज, पोवाड्यांचे सूर आणि शिवरायांच्या प्रतिमेला वंदन करताना मुलांमध्ये एक वेगळाच उत्साह आणि आदरभाव निर्माण होतो.',
        },
      ],
      closingParagraphEn:
        'Honoring Chhatrapati Shivaji Maharaj reminds our entire school family that real strength lies not in physical might, but in character, resilience, and standing steadfastly in service to those who need our protection most.',
      closingParagraphMr:
        'शिवछत्रपतींचे विचार आणि त्यांचे जीवनकार्य आमच्या शाळेतील प्रत्येक मुलाला आणि शिक्षकाला निरंतर प्रेरणा देत राहील.',
    },
  },

  // 11. A Gesture of Kindness - Grocery Donation
  {
    id: 'grocery-donation',
    slug: 'grocery-donation',
    titleEn: 'A Gesture of Kindness - Grocery Donation',
    titleMr: 'सद्भावनेची भेट - किराणा साहित्य दान',
    shortIntroEn:
      'Generous donors and compassionate well-wishers regularly support our school by fulfilling the daily necessities of groceries and essentials. Their thoughtful contributions ensure that our residential students receive wholesome, nutritious meals every single day. This heartwarming support sustains the daily nourishment and wellbeing of our entire school community.',
    shortIntroMr:
      'दानशूर व्यक्ती आणि सहृदय हितचिंतकांच्या मदतीमुळे आमच्या शाळेतील मुलांसाठी लागणाऱ्या दैनंदिन किराणा साहित्याची गरज पूर्ण होते. या प्रेमळ सहकार्यामुळे निवासी विद्यार्थ्यांना दररोज सकस आणि पौष्टिक भोजन मिळते. समाजातील या आस्थेमुळे आमच्या सर्व मुलांचे आरोग्य व पोषण उत्तम राहण्यास मोठी मदत होते.',
    categoryEn: 'Community Support',
    categoryMr: 'समाज सहकार्य',
    mainImage: '/grocery.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Sustaining a residential care home and school for children with special needs requires more than dedicated teaching and rehabilitation; it begins with fulfilling the basic daily nutrition and sustenance of every child. Through the continuous kindness of our donors, the school receives essential groceries, grains, cooking oil, pulses, and provisions that keep our kitchen flourishing.',
      introParagraphMr:
        'विशेष निवासी शाळेतील मुलांचे संगोपन करताना त्यांच्या दैनंदिन आहाराची व पोषणाची गरज पूर्ण करणे अत्यंत महत्त्वाचे असते. समाजातील दात्यांच्या सहकार्याने अन्नधान्य, तेल आणि किराणा साहित्याची नियमित पूर्तता होते.',
      sections: [
        {
          headingEn: 'Fulfilling Daily Necessities with Love',
          headingMr: 'दैनंदिन गरजांची प्रेमाने पूर्तता',
          contentEn:
            'Every meal served on our campus represents the collective goodwill of patrons who choose to share their blessings. Donors generously provide daily grocery rations—such as rice, wheat, pulses, spices, and sanitary items—ensuring that our children never lack wholesome, freshly prepared meals that support their physical growth and therapy needs.',
          contentMr:
            'दात्यांच्या प्रेमळ सहकार्यातून तांदूळ, गहू, डाळी आणि किराणा साहित्याची पूर्तता होते, ज्यामुळे मुलांना दररोज वेळेवर आणि सकस आहार मिळतो.',
        },
        {
          headingEn: 'The Strength of Community Partnership',
          headingMr: 'समाजाचे मोलाचे पाठबळ',
          contentEn:
            'Running a non-profit residential institution involves significant recurring pantry expenses. When thoughtful citizens and families celebrate life milestones or visit our campus with grocery provisions, they relieve substantial financial strain, allowing the school to direct crucial funds toward therapeutic interventions, specialized educators, and student welfare.',
          contentMr:
            'किराणा साहित्याच्या देणगीमुळे शाळेवरील दैनंदिन खर्चाचा ताण कमी होतो आणि मुलांच्या उपचारात्मक व शैक्षणिक विकासावर अधिक लक्ष केंद्रित करणे शक्य होते.',
        },
        {
          headingEn: 'A Circle of Nourishment and Gratitude',
          headingMr: 'कृतज्ञतेची भावना',
          contentEn:
            'Meal times in our dining hall are moments of joy, unity, and shared blessings. The children and staff offer silent thanks before each meal, acknowledging the caring hands outside their campus walls that ensure they are well-fed, protected, and deeply valued.',
          contentMr:
            'एकत्र बसून आनंदाने भोजन करताना मुले आणि शिक्षक सर्व दात्यांचे मनःपूर्वक आभार मानतात आणि त्यांच्या प्रती कृतज्ञता व्यक्त करतात.',
        },
      ],
      closingParagraphEn:
        'A gesture of kindness through grocery donation is a direct lifeline of care, reminding our children that they are held with genuine affection by a warm and compassionate society.',
      closingParagraphMr:
        'किराणा साहित्याचे हे दान आमच्या मुलांना समाजात आपलेपणा आणि प्रेमाची सुंदर अनुभूती देते.',
    },
  },

  // 12. A Day at the Movies: Making Memories Together
  {
    id: 'day-at-the-movies',
    slug: 'day-at-the-movies',
    titleEn: 'A Day at the Movies: Making Memories Together',
    titleMr: 'चित्रपटगृहातील आनंदाचा दिवस: एकत्र जपलेल्या आठवणी',
    shortIntroEn:
      'A special movie outing brought immense joy, excitement, and unforgettable smiles to our children as they experienced the magic of cinema on the big screen together. Accompanied by caring teachers and staff, they shared hearty laughter, delicious snacks, and treasured moments outside the classroom. These heartwarming excursions broaden horizons, nurture social confidence, and create precious lifelong memories.',
    shortIntroMr:
      'चित्रपटगृहातील या विशेष सहलीने आमच्या मुलांच्या चेहऱ्यावर अथांग आनंद, उत्साह आणि गोड आठवणींची भेट दिली. शिक्षक आणि काळजीवाहू यांच्या सोबतीने मुलांनी मोठ्या पडद्यावर चित्रपटाचा मनमुराद आनंद लुटला. वर्गखोलीबाहेरील असे आनंदाचे क्षण मुलांचा सामाजिक आत्मविश्वास वाढवण्यास आणि त्यांचे भावविश्व समृद्ध करण्यास मोलाची मदत करतात.',
    categoryEn: 'Recreation & Outing',
    categoryMr: 'मनोरंजन व सहल',
    mainImage: '/movies.jpg',
    galleryPlaceholderCount: 4,
    article: {
      introParagraphEn:
        'Recreation and recreational outings play an indispensable role in the holistic development and emotional wellbeing of children with special needs. An exciting day trip to the cinema allowed our children to step into the wonder of the big screen, surrounded by their friends and devoted mentors.',
      introParagraphMr:
        'विशेष मुलांच्या सर्वांगीण विकासात आणि भावनिक जडणघडणीत मनोरंजनात्मक सहलींचा मोठा वाटा असतो. चित्रपटगृहातील या सहलीने मुलांना मित्रांसोबत मोठ्या पडद्यावर चित्रपटाचा थरार आणि आनंद अनुभवण्याची अप्रतिम संधी दिली.',
      sections: [
        {
          headingEn: 'The Wonder of the Big Screen Experience',
          headingMr: 'मोठ्या पडद्यावरील जादूई अनुभव',
          contentEn:
            'For many children, entering a cinema hall—with its dimming lights, vibrant visuals, and immersive sound—is an exhilarating sensory adventure. Sharing laughter, cheering for their favorite scenes, and enjoying treats created an atmosphere of pure, unfiltered celebration.',
          contentMr:
            'चित्रपटगृहातील भव्य पडदा, प्रभावी आवाज आणि दिव्यांचा खेळ मुलांसाठी विलक्षण कुतूहल आणि उत्साहाचा ठरला. सर्वांनी एकत्र मिळून चित्रपटाचा आनंद घेतला.',
        },
        {
          headingEn: 'Building Social Confidence Outside Campus',
          headingMr: 'वर्गखोलीबाहेर आत्मविश्वास आणि सामाजिक संवाद',
          contentEn:
            'Stepping into public spaces like movie theaters offers invaluable real-world social exposure. Our students practiced waiting in queues, navigating public seating, and sharing community spaces comfortably under the supportive guidance of our staff, fostering independence and pride.',
          contentMr:
            'चित्रपटगृहासारख्या सार्वजनिक ठिकाणी जाण्याने मुलांमध्ये रांगेत उभे राहणे, शिस्त पाळणे आणि समाजात मिसळण्याचा आत्मविश्वास दृढ होतो.',
        },
        {
          headingEn: 'Cherished Memories That Last a Lifetime',
          headingMr: 'कायमस्वरूपी आठवणींचा साठा',
          contentEn:
            'Beyond the film itself, the day was filled with vibrant conversations, shared smiles, and the warmth of togetherness. These collective excursions demonstrate that every child deserves the fullness of childhood joy, cultural recreation, and unconditional belonging.',
          contentMr:
            'या सहलीतून मिळालेला आनंद आणि मैत्रीची ऊब मुलांच्या स्मरणात सदैव ताजी राहील.',
        },
      ],
      closingParagraphEn:
        'A Day at the Movies reminds us that true learning and happiness thrive through shared adventures, joyful laughter, and the simple beauty of creating unforgettable memories together.',
      closingParagraphMr:
        'एकत्र घालवलेले हे आनंदाचे क्षण मुलांच्या चेहऱ्यावर कायमचे हास्य फुलवतात आणि जीवन अधिक सुंदर बनवतात.',
    },
  },
];

