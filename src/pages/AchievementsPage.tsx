import React from 'react';
import {
  Trophy,
  Award,
  Medal,
  Flag,
  Camera,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface AchievementsPageProps {
  onNavigateHome?: () => void;
}

interface AchievementEventCard {
  id: string;
  imageSrc: string;
  imageAltEn: string;
  imageAltMr: string;
  placeholderLabelEn: string;
  placeholderLabelMr: string;
  badgeEn: string;
  badgeMr: string;
  badgeTone: 'amber' | 'emerald' | 'blue' | 'purple';
  icon: React.ComponentType<{ className?: string }>;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  paragraphsEn?: string[];
  paragraphsMr?: string[];
  highlightTagEn: string;
  highlightTagMr: string;
  featured?: boolean;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ onNavigateHome }) => {
  const { language, t } = useLanguage();

  // ---------------------------------------------------------------------------
  // Student Achievement Events & Sports Medals Showcase
  // Populated with user uploaded photographs: 46.jpg, 47.jpg, 48.jpg, 49.jpg, medals.jpg
  // ---------------------------------------------------------------------------
  const ACHIEVEMENT_CARDS: AchievementEventCard[] = [
    {
      id: 'achievement-championship-trophy',
      // PHOTO 1: Second Prize in Championship Trophy -> /46.jpg
      imageSrc: '/46.jpg',
      imageAltEn: 'Championship Trophy Second Prize Ceremony Photograph',
      imageAltMr: 'चॅम्पियनशिप चषक द्वितीय पारितोषिक सोहळा छायाचित्र',
      placeholderLabelEn: 'Championship Trophy Photograph Placeholder',
      placeholderLabelMr: 'चॅम्पियनशिप चषक छायाचित्र',
      badgeEn: 'Second Prize • Championship Trophy',
      badgeMr: 'द्वितीय पारितोषिक • चॅम्पियनशिप चषक',
      badgeTone: 'amber',
      icon: Trophy,
      titleEn: 'Second Prize in the Championship Trophy',
      titleMr: 'चॅम्पियनशिप ट्रॉफीमध्ये द्वितीय क्रमांक',
      descriptionEn:
        'Our students proudly secured second prize in the Championship Trophy competition organised by Sanskar Pratishthan Matimand Mulanchi Nivasi Shala. This achievement represents a proud and memorable moment for the students and the entire Sai Seva school community. Their participation reflects the importance of providing opportunities for children to demonstrate their abilities, build confidence, and experience the joy of achievement. Recognition through this competition encourages students to continue participating enthusiastically in activities that support their growth and development. We celebrate this accomplishment and the determination shown by our students.',
      descriptionMr:
        'संस्कार प्रतिष्ठान मतिमंद मुलांची निवासी शाळा यांच्या वतीने आयोजित चॅम्पियनशिप ट्रॉफी स्पर्धेत आमच्या विद्यार्थ्यांनी अभिमानास्पद द्वितीय क्रमांक पटकावला. हे यश विद्यार्थी आणि संपूर्ण साई सेवा परिवारासाठी अत्यंत अभिमानाचा आणि संस्मरणीय क्षण आहे. मुलांच्या क्षमतांना वाव देणे, त्यांच्यात आत्मविश्वास निर्माण करणे आणि यशाचा आनंद अनुभवणे याचे महत्त्व या सहभागातून अधोरेखित होते. अशा स्पर्धांमधील सन्मानामुळे विद्यार्थ्यांना त्यांच्या सर्वांगीण विकासासाठी उपयुक्त ठरणाऱ्या विविध उपक्रमांमध्ये उत्साहाने भाग घेण्याची प्रेरणा मिळते. आमच्या विद्यार्थ्यांचा हा निश्चय आणि गौरव आम्ही मोठ्या आनंदाने साजरा करतो.',
      highlightTagEn: 'Organized by Sanskar Pratishthan Matimand Shala',
      highlightTagMr: 'संस्कार प्रतिष्ठान मतिमंद निवासी शाळा आयोजित',
    },
    {
      id: 'achievement-given-objects',
      // PHOTO 2: First Prize in Use of Given Objects -> /47.jpg
      imageSrc: '/47.jpg',
      imageAltEn: 'Kashap Himam Nadaf First Prize Ceremony Photograph',
      imageAltMr: 'कशप हिमाम नदाफ प्रथम पारितोषिक सोहळा छायाचित्र',
      placeholderLabelEn: 'Use of Given Objects Competition Photograph Placeholder',
      placeholderLabelMr: 'दिल्या गेलेल्या वस्तूंचा वापर स्पर्धा छायाचित्र',
      badgeEn: 'First Prize • Creative & Motor Skills',
      badgeMr: 'प्रथम पारितोषिक • कौशल्य स्पर्धा',
      badgeTone: 'emerald',
      icon: Award,
      titleEn: 'First Prize in the Use of Given Objects Competition',
      titleMr: 'दिल्या गेलेल्या वस्तूंचा वापर स्पर्धेत प्रथम क्रमांक',
      descriptionEn:
        'Kashap Himam Nadaf won first prize in the Use of Given Objects competition, bringing a moment of pride to Sai Seva. This achievement celebrates the student\'s success and participation in the activity. Such opportunities allow students to demonstrate their abilities, engage in meaningful tasks, and experience the satisfaction of accomplishing something successfully. The recognition also highlights the importance of encouraging individual strengths and celebrating every student\'s milestones. We are proud to acknowledge this accomplishment and the inspiration it brings to our school community.',
      descriptionMr:
        'दिलेल्या वस्तूंचा कल्पक व अचूक वापर करण्याच्या स्पर्धेत कशप हिमाम नदाफ याने प्रथम क्रमांक पटकावून साई सेवेचे नाव उज्ज्वल केले. हे यश विद्यार्थ्याचा प्रत्यक्ष सहभाग आणि यशाचा गौरव करणारे आहे. अशा संधींमुळे विद्यार्थ्यांना त्यांच्या उपजत कौशल्यांचे प्रदर्शन करणे, अर्थपूर्ण कामांमध्ये सहभागी होणे आणि एखादे काम यशस्वीरीत्या पूर्ण करण्याचे समाधान अनुभवता येते. हे यश प्रत्येक मुलाच्या वैयक्तिक कौशल्यांना प्रोत्साहन देण्याचे आणि त्यांच्या प्रगतीचा गौरव करण्याचे महत्त्व स्पष्ट करते. आम्हाला या यशाचा मनःपूर्वक अभिमान आहे.',
      highlightTagEn: 'Student: Kashap Himam Nadaf',
      highlightTagMr: 'विद्यार्थी: कशप हिमाम नदाफ',
    },
    {
      id: 'achievement-district-sports',
      // PHOTO 3: Trophy at Jillastariya Sports Meet -> /48.jpg
      imageSrc: '/48.jpg',
      imageAltEn: 'Jillastariya Sports Trophy Victory Photograph',
      imageAltMr: 'जिल्हास्तरीय क्रीडा स्पर्धा चषक छायाचित्र',
      placeholderLabelEn: 'District Sports Trophy Photograph Placeholder',
      placeholderLabelMr: 'जिल्हास्तरीय क्रीडा चषक छायाचित्र',
      badgeEn: 'Trophy Winner • District Sports Meet',
      badgeMr: 'विजेता चषक • जिल्हास्तरीय क्रीडा स्पर्धा',
      badgeTone: 'amber',
      icon: Medal,
      titleEn: 'Trophy at the Jillastariya Gramin Va Shahari Krida Spardha',
      titleMr: 'जिल्हास्तरीय ग्रामीण व शहरी क्रीडा स्पर्धेत चषक',
      descriptionEn:
        'Our students proudly won a trophy at the Jillastariya Gramin Va Shahari Krida Spardha. Participating in a sporting competition gives students opportunities to demonstrate enthusiasm, perseverance, teamwork, and confidence. This accomplishment is an important moment for the students and the Sai Seva school community, celebrating their involvement and success in sports. Such experiences encourage students to participate actively, explore their abilities, and take pride in their achievements. We celebrate this milestone and the positive spirit our students bring to sporting activities.',
      descriptionMr:
        'जिल्हास्तरीय ग्रामीण व शहरी क्रीडा स्पर्धेत आमच्या विद्यार्थ्यांनी उत्कृष्ट कामगिरी करत मानाचा चषक पटकावला. क्रीडा स्पर्धांमधील सहभागामुळे विद्यार्थ्यांना ऊर्जा, चिकाटी, सांघिक भावना आणि आत्मविश्वास प्रदर्शित करण्याची उत्तम संधी मिळते. हा क्षण विद्यार्थी व संपूर्ण साई सेवा विद्यालयासाठी अत्यंत महत्त्वाचा व क्रीडा यशाचा उत्सव साजरा करणारा आहे. असे अनुभव विद्यार्थ्यांना खेळात सक्रिय राहण्यास, आपल्या क्षमतेची ओळख पटवून घेण्यास आणि स्वतःच्या कर्तृत्वाचा अभिमान बाळगण्यास प्रेरित करतात. विद्यार्थ्यांच्या या यशाचा आणि क्रीडावृत्तीचा आम्हाला सार्थ अभिमान आहे.',
      highlightTagEn: 'Jillastariya Gramin Va Shahari Krida Spardha',
      highlightTagMr: 'जिल्हास्तरीय ग्रामीण व शहरी क्रीडा स्पर्धा',
    },
    {
      id: 'achievement-obstacle-race',
      // PHOTO 4: Success in Obstacle Race -> /49.jpg
      imageSrc: '/49.jpg',
      imageAltEn: 'Obstacle Race Athletic Victory Photograph',
      imageAltMr: 'अडथळा शर्यत क्रीडा यश छायाचित्र',
      placeholderLabelEn: 'Obstacle Race Event Photograph Placeholder',
      placeholderLabelMr: 'अडथळा शर्यत छायाचित्र',
      badgeEn: 'Sports Achievement • Obstacle Race',
      badgeMr: 'क्रीडा यश • अडथळा शर्यत स्पर्धा',
      badgeTone: 'blue',
      icon: Flag,
      titleEn: 'Achievement in the Obstacle Race',
      titleMr: 'अडथळा शर्यत (Obstacle Race) स्पर्धेत यश',
      descriptionEn:
        'Our students also achieved success in the obstacle race, making it another memorable accomplishment for Sai Seva. The activity offered an opportunity for students to participate in a sporting challenge, demonstrate perseverance, and experience the excitement of reaching a goal. Taking part in such activities can help children develop confidence, coordination, determination, and a positive attitude towards challenges. Their achievement reminds us of the importance of creating inclusive opportunities where every child can participate, explore their abilities, and celebrate progress. We are proud of our students for their participation and success in the event.',
      descriptionMr:
        'अडथळा शर्यत (Obstacle Race) स्पर्धेतही आमच्या विद्यार्थ्यांनी नेत्रदीपक यश संपादन करत साई सेवेसाठी आणखी एक संस्मरणीय दिवस नोंदवला. या उपक्रमाने विद्यार्थ्यांना क्रीडा आव्हानाचा सामना करणे, चिकाटी दाखवणे आणि ध्येय गाठण्याचा आनंद अनुभवण्याची संधी दिली. अशा स्पर्धांमुळे मुलांमध्ये शारीरिक समन्वय, निर्धार, आत्मविश्वास आणि आव्हानांकडे सकारात्मक दृष्टीने पाहण्याची वृत्ती वाढीस लागते. प्रत्येक मुलाला सहभागी होता यावे, स्वतःच्या क्षमतांचा शोध घेता यावा आणि प्रगतीचा आनंद साजरा करता यावा अशा सर्वसमावेशक संधींचे महत्त्व या यशाने अधोरेखित केले आहे. विद्यार्थ्यांच्या या यशाचा आम्हाला सार्थ अभिमान आहे.',
      highlightTagEn: 'Adaptive Athletics & Coordination',
      highlightTagMr: 'शारीरिक समन्वय व क्रीडा स्पर्धा',
    },
    {
      id: 'achievement-certificate-rohit-sutar',
      imageSrc: '/certificate1.jpg',
      imageAltEn: 'Rohit Sutar 1st Prize Certificate in Paavlancha Khel',
      imageAltMr: 'रोहित सुतार प्रथम पारितोषिक प्रमाणपत्र - पावलांचा खेळ',
      placeholderLabelEn: 'Rohit Sutar Certificate • Paavlancha Khel',
      placeholderLabelMr: 'रोहित सुतार प्रमाणपत्र • पावलांचा खेळ',
      badgeEn: '1st Prize • Paavlancha Khel',
      badgeMr: 'प्रथम पारितोषिक • पावलांचा खेळ',
      badgeTone: 'emerald',
      icon: Award,
      titleEn: "1st Prize: Rohit Sutar in 'Paavlancha Khel'",
      titleMr: "प्रथम पारितोषिक: रोहित सुतार - 'पावलांचा खेळ' स्पर्धा",
      descriptionEn:
        "Rohit Sutar won the prestigious 1st prize along with an official merit certificate in 'Paavlancha Khel' (Footstep Coordination Game). This competition challenges balance, agility, spatial judgment, and precise foot placement. Rohit's determined performance and exemplary physical coordination brought great honor and pride to Sai Seva.",
      descriptionMr:
        "'पावलांचा खेळ' या शारीरिक तोल व एकाग्रतेच्या विशेष क्रीडा प्रकारात आमच्या शाळेचा गुणी विद्यार्थी रोहित सुतार याने उत्कृष्ट कौशल्य दाखवत प्रथम क्रमांक व मानाचे प्रमाणपत्र पटकावले. पावलांचा खेळ विद्यार्थ्यांमधील शारीरिक समन्वय, चपळता आणि आत्मविश्वास वाढवतो. रोहितच्या या देदिप्यमान यशाचा संपूर्ण साई सेवा परिवाराला सार्थ अभिमान आहे.",
      highlightTagEn: '1st Prize Winner • Rohit Sutar',
      highlightTagMr: 'प्रथम पारितोषिक विजेते • रोहित सुतार',
    },
    {
      id: 'achievement-certificate-poonam-kumbhar',
      imageSrc: '/certificate2.jpg',
      imageAltEn: 'Poonam Kumbhar 1st Prize Certificate in Club Throw',
      imageAltMr: 'पूनम कुंभार प्रथम पारितोषिक प्रमाणपत्र - क्लब थ्रो स्पर्धा',
      placeholderLabelEn: 'Poonam Kumbhar Certificate • Club Throw',
      placeholderLabelMr: 'पूनम कुंभार प्रमाणपत्र • क्लब थ्रो स्पर्धा',
      badgeEn: '1st Prize • Club Throw',
      badgeMr: 'प्रथम पारितोषिक • क्लब थ्रो स्पर्धा',
      badgeTone: 'purple',
      icon: Trophy,
      titleEn: "1st Prize: Poonam Kumbhar in 'Club Throw'",
      titleMr: "प्रथम पारितोषिक: पूनम कुंभार - 'क्लब थ्रो' स्पर्धा",
      descriptionEn:
        "Poonam Kumbhar demonstrated remarkable upper-body strength, grip, focus, and target precision to secure the 1st prize and certificate of merit in 'Club Throw'. Club throw is a recognized adaptive para-athletics event requiring dedicated practice and muscular control. Poonam's victory is an inspiring testament to the hard work and resilience of our special students.",
      descriptionMr:
        "विशेष क्रीडा स्पर्धांमध्ये 'क्लब थ्रो' या क्रीडा प्रकारात आमच्या विद्यार्थिनी पूनम कुंभार हिने अप्रतिम ताकद, अचूक निशाणा आणि एकाग्रतेचे प्रदर्शन करत प्रथम पारितोषिक व प्रमाणपत्र मिळवले. क्लब थ्रो हा खांद्यांची ताकद आणि हाताचा समन्वय तपासणारा खेळ आहे. पूनमने दाखवलेली जिद्द आणि मिळवलेले यश इतर सर्व विद्यार्थ्यांनाही खेळांमध्ये पुढे जाण्याची प्रेरणा देते.",
      highlightTagEn: '1st Prize Winner • Poonam Kumbhar',
      highlightTagMr: 'प्रथम पारितोषिक विजेती • पूनम कुंभार',
    },
    {
      id: 'achievement-certificate-udaan-dance',
      imageSrc: '/group_certificate.jpg',
      imageAltEn: '1st Prize Certificate for Udaan Group Dance Performance',
      imageAltMr: 'उडान समूह नृत्य स्पर्धेतील प्रथम पारितोषिक प्रमाणपत्र',
      placeholderLabelEn: 'Udaan Group Dance Certificate',
      placeholderLabelMr: 'उडान समूह नृत्य प्रमाणपत्र',
      badgeEn: '1st Prize • Udaan Dance Competition',
      badgeMr: 'प्रथम पारितोषिक • उडान नृत्य स्पर्धा',
      badgeTone: 'amber',
      icon: Medal,
      titleEn: "1st Prize: Group Victory in 'Udaan Dance'",
      titleMr: "प्रथम पारितोषिक: 'उडान' समूह नृत्य स्पर्धेत सुवर्ण यश",
      descriptionEn:
        "Our talented group of students achieved the 1st prize along with the official victory certificate in the celebrated 'Udaan Dance' competition. Through rhythmic harmony, synchronized steps, vibrant stage presence, and infectious enthusiasm, our children captivated the judges and audience alike. This collective achievement highlights the power of creative expression, confidence, and teamwork fostered at Sai Seva.",
      descriptionMr:
        "'उडान' या विशेष कला महोत्सवातील समूह नृत्य स्पर्धेत आमच्या विद्यार्थ्यांच्या चमूने आपल्या सुरेख तालावर, शिस्तबद्ध हालचालींवर आणि मनमोहक सादरीकरणावर परीक्षकांची मने जिंकत प्रथम पारितोषिक व प्रमाणपत्र पटकावले. या सामूहिक यशामुळे मुलांमधील संगीत आवड, रंगमंचावरील आत्मविश्वास आणि सांघिक भावना अधिक दृढ झाली आहे.",
      highlightTagEn: '1st Prize • Udaan Cultural Dance Group',
      highlightTagMr: 'प्रथम पारितोषिक • उडान समूह नृत्य चमू',
    },
    {
      id: 'achievement-medals-sports',
      // PHOTO 5: Medals in Sports & Athletics -> /medals.jpg
      imageSrc: '/medals.jpg',
      imageAltEn: 'Numerous medals won by our special children in running races, obstacle games and sports meets',
      imageAltMr: 'धावणे, अडथळा शर्यत व मैदानी क्रीडा स्पर्धांमध्ये विद्यार्थ्यांनी अभिमानाने मिळवलेली असंख्य पदके',
      placeholderLabelEn: 'Medals in Sports & Athletics',
      placeholderLabelMr: 'क्रीडा पदके व सन्मान',
      badgeEn: 'Sports Excellence • Numerous Medals',
      badgeMr: 'क्रीडा प्राविण्य • पदकांची परंपरा',
      badgeTone: 'amber',
      icon: Medal,
      titleEn: 'A Tradition of Medals in Sports & Athletics',
      titleMr: 'क्रीडा स्पर्धांमधील पदकांची परंपरा व विद्यार्थ्यांचा गौरव',
      descriptionEn: '',
      descriptionMr: '',
      paragraphsEn: [
        'Beyond individual trophies, our school campus shines with dozens of gold, silver, and bronze medals that our children proudly bring home year after year. These medals represent far more than athletic awards, they are shining symbols of perseverance, courage, and the boundless potential of children with special needs. Each medal on our school display has a heartwarming story behind it: a story of a child who refused to give up, practiced diligently with their teachers, and experienced the unforgettable thrill of crossing the finish line.',
        'Our students actively participate in a wide variety of sporting events, including 50-metre and 100-metre sprint running, relay races, obstacle courses, sensory balance challenges, shot put, and recreational track games. In adaptive sports, the obstacle race is especially cherished, as it challenges coordination, spatial judgment, and agility. Our dedicated physical education teachers and therapists tailor every training session to each child’s physical strengths, ensuring that every student, regardless of their level of challenge, can participate safely, joyfully, and with absolute dignity.',
        'We believe deeply in regular, year-round participation rather than occasional events. From inter-school competitions organised by special education networks across Pune and Maharashtra to district-level sports meets (Jillastariya Krida Spardha), our students are always encouraged to step onto the field. Teachers and caregivers travel alongside the children, cheering them from the sidelines, calming pre-race jitters, and celebrating every small victory with immense pride. The loud cheers and joyful applause when a student steps onto the victory podium are moments that stay etched in their hearts forever.',
        'Sports provide our children with vital benefits that reach far beyond physical fitness. On the sports track, they learn sportsmanship, discipline, emotional resilience, and mutual teamwork. Cheering for their peers teaches them empathy and belonging, while receiving a medal in front of hundreds of spectators gives them an unforgettable boost in self-confidence. This confidence naturally carries over into their academic classes, vocational training, and everyday life skills, inspiring them to face life’s hurdles with a smile.',
      ],
      paragraphsMr: [
        'केवळ मोजके चषकच नव्हे, तर आमच्या शाळेच्या विद्यार्थ्यांनी विविध क्रीडा स्पर्धांमधून मिळवलेली असंख्य सुवर्ण, रौप्य व कांस्य पदके हे त्यांच्या अथांग परिश्रमांचे आणि अदम्य उत्साहाचे प्रतीक आहेत. ही पदके म्हणजे केवळ धातूचे तुकडे नव्हेत, तर आमच्या विशेष मुलांच्या जिद्दीची, आत्मविश्वासाची आणि अपार क्षमतेची साक्ष आहेत. प्रत्येक पदकामागे एका मुलाची अथक मेहनत, शिक्षकांचे प्रेमळ मार्गदर्शन आणि फिनिश लाईन ओलांडताना मुलांच्या चेहऱ्यावर उमटलेला अवर्णनीय आनंद दडलेला आहे.',
        'आमचे विद्यार्थी ५० मीटर व १०० मीटर धावणे, रिले, अडथळा शर्यत (Obstacle Race), गोळाफेक, रिंग फेकून लक्ष्य भेदणे आणि विविध संवेदी संतुलन खेळांमध्ये मोठ्या उत्साहाने भाग घेतात. यामध्ये अडथळा शर्यत हा मुलांचा अत्यंत आवडता प्रकार असून त्यातून मुलांचा शारीरिक समन्वय, तोल आणि चपळता विकसित होते. आमचे क्रीडा शिक्षक व फिजिओथेरपिस्ट प्रत्येक मुलाच्या गरजेनुसार खेळात आवश्यक बदल करून त्यांना सुरक्षितपणे व आत्मविश्वासाने खेळण्यासाठी तयार करतात.',
        'खेळात केवळ जिंकणे नव्हे, तर प्रत्येक मुलाने मैदानात उतरून स्वतःची प्रतिभा दाखवणे ही आमची मुख्य धारणा आहे. पुणे जिल्हा आणि महाराष्ट्रभरातील विशेष शाळांच्या क्रीडा स्पर्धा तसेच जिल्हास्तरीय क्रीडा स्पर्धांमध्ये आमची मुले सातत्याने सहभागी होतात. शिक्षक व कर्मचारी मुलांसोबत मैदानात उपस्थित राहून त्यांचा उत्साह वाढवतात. जेव्हा आमच्या मुलांच्या गळ्यात पदक घातले जाते आणि उपस्थितांच्या टाळ्यांचा गजर होतो, तेव्हा मुलांचा आणि पालकांचा चेहरा अभिमानाने उजळून निघतो.',
        'खेळामुळे मुलांमध्ये केवळ शारीरिक तंदुरुस्तीच येत नाही, तर सहकार्य, चिकाटी, नियम पाळणे आणि संघभावना यांसारखे महत्त्वाचे जीवनमूल्ये रुजतात. मैदानावर मिळणारा हा आत्मविश्वास त्यांच्या दैनंदिन शिक्षणात, व्यावसायिक कौशल्यांमध्ये आणि स्वावलंबनातही दिसून येतो. मुलांच्या या प्रवासात प्रत्येक पाऊल आमच्यासाठी विजयासारखे आहे.',
      ],
      highlightTagEn: 'Running, Obstacle Races & Adaptive Games',
      highlightTagMr: 'धावणे, अडथळा शर्यत व मैदानी खेळ',
      featured: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* 1. Breadcrumb */}
      <Breadcrumb
        currentEn="Achievements"
        currentMr="यश व गौरव"
        onNavigateHome={onNavigateHome}
      />

      {/* 2. Main Page Header with achievements.png Background */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-300/80 bg-stone-100 text-center max-w-4xl mx-auto p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Background Image covering the entire grid with proper opacity - 1 shade darker */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/achievements.png"
            alt="Achievements Background"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-100/75 via-amber-100/55 to-stone-100/75" />
        </div>

        <div className="relative z-10 space-y-3.5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-900 bg-amber-100/95 border border-amber-300/80 px-3.5 py-1 rounded-full shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'mr' ? 'गौरव व सन्मान' : 'Honors & Accomplishments'}</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 leading-tight tracking-tight">
            {language === 'mr' ? 'विद्यार्थी यश, गौरव व प्रगती' : 'Celebrating Student Accomplishments'}
          </h1>

          <p className="text-base sm:text-lg text-amber-950 font-bold leading-relaxed">
            {language === 'mr'
              ? 'आमच्या विशेष विद्यार्थ्यांचा प्रत्येक सहभाग आणि विजय हा आत्मविश्वास, चिकाटी व स्वावलंबनाची नवी भरारी आहे.'
              : 'Honoring our students’ perseverance, joy of participation, and milestones across competitive events.'}
          </p>

          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            {language === 'mr'
              ? 'श्री साई सेवा निवासी विद्यालयात प्रत्येक मुलाला आपल्या सुप्त कलागुणांना वाव देण्याची, विविध स्पर्धांमध्ये सहभागी होण्याची आणि स्वतःच्या यशाचा अभिमान बाळगण्याची समान संधी दिली जाते.'
              : 'At Shree Sai Seva Residential School, every student is provided opportunities to explore their potential, take part in sports and skills competitions, and experience the pride of achievement in an atmosphere of warmth, dignity, and encouragement.'}
          </p>
        </div>
      </div>

      {/* 3. The Dedicated Achievement Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-stone-200 pb-3">
          <Award className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {language === 'mr' ? 'प्रमुख स्पर्धा व पारितोषिके' : 'Major Competitions & Awards'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-start">
          {ACHIEVEMENT_CARDS.map((ach) => {
            const hasImage = Boolean(ach.imageSrc && ach.imageSrc.trim().length > 0);

            // Featured Full-Width Card for the Medals Collection
            if (ach.featured) {
              return (
                <article
                  key={ach.id}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 md:col-span-2 grid grid-cols-1 md:grid-cols-12 items-stretch"
                >
                  {/* Left Column: Full Uncropped Medals Image with Ambient Glow */}
                  <div className="md:col-span-5 relative overflow-hidden bg-stone-100 border-b md:border-b-0 md:border-r border-stone-200/80 flex items-center justify-center p-3 sm:p-5 min-h-[380px] sm:min-h-[500px] lg:min-h-[640px]">
                    {/* Ambient soft blur backdrop so no blank voids */}
                    <img
                      src={ach.imageSrc}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                    />
                    {/* Entire uncropped medals image displayed fully */}
                    <img
                      src={ach.imageSrc}
                      alt={language === 'mr' ? ach.imageAltMr : ach.imageAltEn}
                      className="relative z-10 w-auto h-full max-h-[640px] max-w-full object-contain rounded-2xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Column: Rich Detailed Narrative matching the image's height */}
                  <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-gradient-to-br from-white via-amber-50/20 to-white">
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {language === 'mr' ? ach.titleMr : ach.titleEn}
                    </h3>

                    <div className="space-y-3.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {(language === 'mr' ? ach.paragraphsMr : ach.paragraphsEn)?.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            // Standard Event Cards (Cards 1 to 4)
            return (
              <article
                key={ach.id}
                className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Image Area: Completely Uncropped with Ambient Backdrop */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 border-b border-stone-200/80 flex items-center justify-center">
                  {hasImage ? (
                    <>
                      {/* Ambient soft blur backdrop eliminates dead white margins */}
                      <img
                        src={ach.imageSrc}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-lg opacity-25 scale-110 pointer-events-none"
                      />
                      {/* Entire image displayed fully without a single pixel cropped */}
                      <img
                        src={ach.imageSrc}
                        alt={language === 'mr' ? ach.imageAltMr : ach.imageAltEn}
                        className="relative z-10 w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    /* Fallback Placeholder */
                    <div className="w-full h-full bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-100/90 flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/95 border border-amber-200/80 shadow-2xs flex items-center justify-center text-amber-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                      </div>

                      <p className="text-xs sm:text-sm font-bold text-stone-800 tracking-tight max-w-xs">
                        {language === 'mr' ? ach.placeholderLabelMr : ach.placeholderLabelEn}
                      </p>

                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300/70 text-[11px] font-medium text-stone-600">
                        <Camera className="w-3.5 h-3.5 text-stone-500" />
                        <span>
                          {language === 'mr'
                            ? 'छायाचित्र लवकरच जोडले जाईल'
                            : 'Photograph will be added here'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content & Narrative */}
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-start">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {language === 'mr' ? ach.titleMr : ach.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {language === 'mr' ? ach.descriptionMr : ach.descriptionEn}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Celebratory Inclusion Note */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-100 via-amber-50/50 to-stone-100 border border-stone-200/80 text-center max-w-3xl mx-auto space-y-2">
        <HeartHandshake className="w-6 h-6 text-amber-700 mx-auto" />
        <h3 className="text-sm sm:text-base font-bold text-stone-900">
          {language === 'mr' ? 'प्रत्येक विद्यार्थ्याच्या क्षमतेवर विश्वास' : 'Believing in Every Child’s Potential'}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {language === 'mr'
            ? 'आमच्या शाळेत प्रत्येक मुलाचा लहान-मोठा सहभाग आणि यश हे त्यांच्या स्वावलंबनाचे आणि प्रगतीचे प्रतीक आहे. आम्ही प्रत्येक विद्यार्थ्याच्या प्रवासाचा सन्मान करतो.'
            : 'At Sai Seva, every medal, certificate, and active participation is a celebration of inclusion, determination, and independence. We take immense pride in every student’s journey.'}
        </p>
      </div>
    </div>
  );
};
