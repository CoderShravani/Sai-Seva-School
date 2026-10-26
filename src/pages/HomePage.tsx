import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  GraduationCap,
  Sparkles,
  UserCheck,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Users,
  Award,
  Activity,
  HeartHandshake,
  Palette,
  Trophy,
  MessageCircle,
  HelpCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Shield,
  Smile,
  Target
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { QuickStats } from '../components/QuickStats';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import {
  PROGRAMS_DATA,
  FACILITIES_DATA,
  GALLERY_ITEMS
} from '../data/schoolData';
import { ProgramItem, GalleryItem } from '../types';

interface HomePageProps {
  onOpenAdmission: () => void;
  onOpenDonate: () => void;
  setActiveTab: (tab: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onSelectProgram?: (programId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAdmission,
  onOpenDonate,
  setActiveTab,
  onOpenLightbox,
  onSelectProgram,
}) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTrustIndex, setActiveTrustIndex] = useState<number | null>(null);

  // 5 School Images for automatic sliding photo grid near Welcome section
  const schoolPhotos = [
    {
      src: '/school1.jpg',
      titleEn: 'Campus & Daily Activities',
      titleMr: 'शालेय परिसर व उपक्रम',
      subtitleEn: 'Joyful, safe and caring atmosphere',
      subtitleMr: 'आनंददायी, सुरक्षित आणि प्रेमळ वातावरण',
    },
    {
      src: '/school2.jpg',
      titleEn: 'Interactive Classroom Learning',
      titleMr: 'संवादी वर्गखोल्या व अध्ययन',
      subtitleEn: 'Individualized teaching & student engagement',
      subtitleMr: 'वैयक्तिक शैक्षणिक मार्गदर्शन व सहभाग',
    },
    {
      src: '/school3.jpg',
      titleEn: 'Special Care & Development',
      titleMr: 'विशेष काळजी व व्यक्तिमत्त्व विकास',
      subtitleEn: 'Dedicated educators supporting every milestone',
      subtitleMr: 'शिक्षकांचे सतत व आपुलकीचे मार्गदर्शन',
    },
    {
      src: '/school4.jpg',
      titleEn: 'Life Skills & Creativity',
      titleMr: 'जीवन कौशल्ये व कलात्मक उपक्रम',
      subtitleEn: 'Practical activities for independence',
      subtitleMr: 'स्वावलंबन व हस्तकलेचा प्रत्यक्ष सराव',
    },
    {
      src: '/school5.jpg',
      titleEn: 'Holistic Growth & Community',
      titleMr: 'सर्वांगीण विकास व स्नेहसंमेलन',
      subtitleEn: 'Empowering children with confidence and pride',
      subtitleMr: 'मुलांमध्ये आत्मविश्वास व स्वाभिमान वाढवणे',
    },
  ];

  // Automatic slide transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [schoolPhotos.length]);

  // 6 Distinct Core Programs matching design layout
  const homePrograms = [
    {
      id: 'academic',
      titleEn: 'Academic Education & Diksha Coursework',
      titleMr: 'विशेष शैक्षणिक वर्ग व दीक्षा अभ्यासक्रम',
      descEn: 'Individualized learning programs to help children build academic skills at their own pace.',
      descMr: 'प्रत्येक मुलाच्या आकलन क्षमतेनुसार वैयक्तिक शैक्षणिक आराखडा व मूलभूत ज्ञान प्रशिक्षण.',
      icon: BookOpen,
      circleBg: 'bg-[#E8F5E9]',
      iconColor: 'text-[#2E7D32]',
      tagEn: 'Curriculum',
      tagMr: 'अभ्यासक्रम',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      highlightsEn: ['Diksha education coursework', 'Sensory-based interactive learning', 'Daily progress assessment'],
      highlightsMr: ['दीक्षा शैक्षणिक अभ्यासक्रम', 'ज्ञानेंद्रिय आधारित शिक्षण', 'दैनिक प्रगती नोंद'],
    },
    {
      id: 'therapy',
      titleEn: 'Therapeutic and Speech Support',
      titleMr: 'उपचार, वाणी व संवेदी पुनर्वसन',
      descEn: 'Speech, occupational, physiotherapy and behavioral therapy for holistic development.',
      descMr: 'स्पीच थेरपी, ऑक्युपेशनल थेरपी आणि फिजिओथेरपीद्वारे शारीरिक व मानसिक पुनर्वसन.',
      icon: Activity,
      logoUrl: '/image.png',
      circleBg: 'bg-[#E0F2FE]',
      iconColor: 'text-[#00A3E0]',
      tagEn: 'Therapy',
      tagMr: 'उपचार पद्धती',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
      highlightsEn: ['Dedicated speech articulation room', 'Occupational sensory integration', 'Pediatric physical therapy'],
      highlightsMr: ['स्वतंत्र वाचा सुधारणा कक्ष', 'संवेदी एकत्रीकरण प्रशिक्षण', 'तज्ज्ञ फिजिओथेरपिस्ट मार्गदर्शन'],
    },
    {
      id: 'lifeskills',
      titleEn: 'Life Skills Training',
      titleMr: 'जीवन कौशल्य व स्वावलंबन',
      descEn: 'Daily living skills, independence training and vocational preparation.',
      descMr: 'दैनिक स्वच्छता, स्वयंमदत कौशल्ये आणि व्यावसायिक पूर्वतयारीद्वारे स्वावलंबन.',
      icon: UserCheck,
      logoUrl: '/image1.png',
      circleBg: 'bg-stone-100',
      iconColor: 'text-stone-800',
      tagEn: 'Independence',
      tagMr: 'स्वावलंबन',
      image: '/44.png',
      highlightsEn: ['ADL (Activities of Daily Living) mastery', 'Basic cooking and household skills', 'Pre-vocational handiwork'],
      highlightsMr: ['दैनिक दिनचर्या व स्वच्छता', 'मूलभूत स्वयंपाक व घरगुती कौशल्ये', 'हस्तकला व व्यावसायिक सराव'],
    },
    {
      id: 'vocational',
      titleEn: 'Pre-Vocational Training',
      titleMr: 'पूर्व-व्यावसायिक प्रशिक्षण',
      descEn: 'Artisanal crafts, diya painting, packaging and life-skills for self-reliance and workplace readiness.',
      descMr: 'पणत्या रंगवणे, हस्तकला, कागदी पिशव्या व साध्या कामांद्वारे स्वावलंबन व रोजगार पूर्वतयारी.',
      icon: Palette,
      circleBg: 'bg-[#FFF3E0]',
      iconColor: 'text-[#E65100]',
      tagEn: 'Vocational',
      tagMr: 'व्यावसायिक',
      image: '/vocational.png',
      highlightsEn: ['Festive diya painting & craftwork', 'Office assistance & packaging', 'Community exhibition sales'],
      highlightsMr: ['मातीच्या पणत्या रंगवणे व हस्तकला', 'साधे पॅकिंग व वर्गीकरण', 'सार्वजनिक प्रदर्शन व विक्री'],
    },
    {
      id: 'cocurricular',
      titleEn: 'Co-curricular Activities',
      titleMr: 'कला, क्रीडा व उपक्रम',
      descEn: 'Art, music, dance, sports and creative activities to build confidence.',
      descMr: 'चित्रकला, संगीत, नृत्य, मैदानी खेळ आणि सांस्कृतिक कार्यक्रमांद्वारे सर्वांगीण विकास.',
      icon: Trophy,
      circleBg: 'bg-[#F3E5F5]',
      iconColor: 'text-[#7B1FA2]',
      tagEn: 'Creativity',
      tagMr: 'कला व क्रीडा',
      image: '/cocurricular.png',
      highlightsEn: ['Special Olympics training', 'Music and rhythm therapy', 'Festival celebrations & drama'],
      highlightsMr: ['विशेष ऑलिम्पिक क्रीडा सराव', 'संगीत व ताल उपचार', 'सण, उत्सव व नाट्य सादरीकरण'],
    },
    {
      id: 'counselling',
      titleEn: 'Counselling & Care',
      titleMr: 'समुपदेशन व मानसिक आधार',
      descEn: 'Loving emotional support for students, calming guidance with music and toys, and attentive care by ayahs.',
      descMr: 'विद्यार्थ्यांसाठी प्रेमळ समुपदेशन, खेळणी व संगीताद्वारे शांतता आणि मावशींची सतत काळजी.',
      icon: Heart,
      circleBg: 'bg-[#FCE4EC]',
      iconColor: 'text-[#C2185B]',
      tagEn: 'Wellbeing',
      tagMr: 'कल्याण व आधार',
      image: '/councelling.png',
      highlightsEn: ['Counseling for students when in need', 'Calming support with toys & music', 'Assistance for disability certificates'],
      highlightsMr: ['गरज भासल्यास विद्यार्थ्यांशी प्रेमळ समुपदेशन', 'खेळणी व संगीताच्या साथीने शांत करणे', 'दिव्यांग प्रमाणपत्र मिळवण्यासाठी सहकार्य'],
    },
  ];

  // Why Parents Trust Us 5 Pillars
  const trustPillars = [
    {
      titleEn: 'Safe & Secure Environment',
      titleMr: 'सुरक्षित व संरक्षित परिसर',
      descEn: '24/7 CCTV surveillance, dedicated caregivers, secured hostel campus and caring female wardens.',
      descMr: '२४/७ सीसीटीव्ही निगराणी, सुरक्षित वसतिगृह, काळजीवाहू कर्मचारी आणि प्रेमळ वातावरण.',
      icon: ShieldCheck,
      circleBg: 'bg-[#E8F5E9]',
      iconColor: 'text-[#2E7D32]',
    },
    {
      titleEn: 'Experienced & Compassionate Staff',
      titleMr: 'अनुभवी व संवेदनशील शिक्षक',
      descEn: 'Specialized educators, pediatric therapists, clinical psychologists and trained caretakers.',
      descMr: 'विशेष शिक्षक, प्रशिक्षित थेरपिस्ट आणि मुलांवर जिवापाड प्रेम करणारे कर्मचारी.',
      icon: Users,
      circleBg: 'bg-[#FFF3E0]',
      iconColor: 'text-[#E65100]',
    },
    {
      titleEn: 'Individualized Attention',
      titleMr: 'प्रत्येक मुलाकडे वैयक्तिक लक्ष',
      descEn: 'Tailored Diksha education coursework crafted around each child’s developmental milestones, strengths, and unique pace.',
      descMr: 'प्रत्येक मुलाच्या क्षमतेनुसार तयार केलेला दीक्षा शैक्षणिक अभ्यासक्रम व विशेष मार्गदर्शन.',
      icon: Target,
      circleBg: 'bg-[#E1F5FE]',
      iconColor: 'text-[#0277BD]',
    },
    {
      titleEn: 'Holistic Development',
      titleMr: 'सर्वांगीण व्यक्तिमत्त्व विकास',
      descEn: 'Balanced blend of academic basics, therapeutic care, life skills, sports and expressive arts.',
      descMr: 'शिक्षण, उपचार, स्वावलंबन, क्रीडा आणि सांस्कृतिक उपक्रमांचा परिपूर्ण आणि समतोल संगम.',
      icon: Sparkles,
      logoUrl: '/image2.png',
      circleBg: 'bg-[#F3E5F5]',
      iconColor: 'text-[#7B1FA2]',
    },
    {
      titleEn: 'Parent Partnership & Transparency',
      titleMr: 'पालकांशी पारदर्शक संवाद',
      descEn: 'Regular interactive progress reviews, open visits, counselling sessions and genuine care updates.',
      descMr: 'नियमित पालक बैठका, प्रगती अहवाल, समुपदेशन आणि विश्वासाचे पारदर्शक नाते.',
      icon: HeartHandshake,
      circleBg: 'bg-[#FCE4EC]',
      iconColor: 'text-[#C2185B]',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Carousel Banner */}
      <Hero
        onOpenAdmission={onOpenAdmission}
        onOpenDonate={onOpenDonate}
        onNavigateAbout={() => {
          setActiveTab('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Floating Stats Ribbon Card */}
      <QuickStats />

      {/* 3. Welcome to Our School Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4D3C] tracking-tight leading-tight">
                {language === 'mr' ? 'आमच्या विद्यालयात आपले सहर्ष स्वागत' : 'Welcome to Our School'}
              </h2>
              <div className="w-16 h-1 bg-[#2E7D32] mt-3 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {language === 'mr'
                ? 'श्री साई सेवा निवासी मतिमंद विद्यालय हे मतिमंद व विशेष गरजा असलेल्या मुलांच्या सर्वांगीण विकासासाठी कटिबद्ध असलेले एक अग्रगण्य निवासी विद्यालय आहे. आमचा बाल-केंद्रित दृष्टिकोन मुलांना सुरक्षित, स्नेहपूर्ण आणि कौटुंबिक वातावरणात शिक्षण, विविध थेरपी उपचार, दैनंदिन स्वावलंबन आणि व्यक्तिमत्त्व विकासाची संधी देतो.'
                : 'We are a residential special school dedicated to children with intellectual and developmental disabilities. Our child-centered approach ensures education, therapy, life skills and holistic development in a nurturing environment.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs font-semibold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{language === 'mr' ? '२४/७ सुरक्षित निवासी शाळा' : '24/7 Safe Residential School'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs font-semibold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{language === 'mr' ? 'प्रशिक्षित विशेष शिक्षक व थेरपिस्ट' : 'Certified Therapists & Staff'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs font-semibold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{language === 'mr' ? 'आरोग्यदायी व पौष्टिक भोजन' : 'Hygienic Nutritious Meals'}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs font-semibold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>{language === 'mr' ? 'कला, क्रीडा व व्यावसायिक प्रशिक्षण' : 'Vocational & Sports Training'}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>{language === 'mr' ? 'आमच्याबद्दल अधिक जाणून घ्या' : 'Know More About Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column - Auto-swiping Photo Grid Carousel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
              {/* Main Active Image Display */}
              <div className="relative h-80 sm:h-[400px] w-full overflow-hidden">
                {schoolPhotos.map((photo, idx) => (
                  <div
                    key={photo.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={language === 'mr' ? photo.titleMr : photo.titleEn}
                      className="w-full h-full object-contain object-center"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                          {language === 'mr' ? photo.titleMr : photo.titleEn}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-2 drop-shadow-sm">
                        {language === 'mr' ? photo.subtitleMr : photo.subtitleEn}
                      </h3>
                    </div>
                  </div>
                ))}

                {/* Left & Right Arrow Controls */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + schoolPhotos.length) % schoolPhotos.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-80 hover:opacity-100"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % schoolPhotos.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-80 hover:opacity-100"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Programs Section (5 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4D3C] tracking-tight">
            {language === 'mr' ? 'आमचे विशेष अभ्यासक्रम व उपक्रम' : 'Our Programs'}
          </h2>
          <div className="w-14 h-1 bg-[#2E7D32] mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-600 pt-1">
            {language === 'mr'
              ? 'विशेष मुलांच्या क्षमता ओळखून त्यांच्या सर्वांगीण विकासासाठी आखलेले शास्त्रशुद्ध कार्यक्रम'
              : 'Comprehensive developmental programs tailored to the unique potential of every child'}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {homePrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Circle Badge / Custom Logo */}
                <div className={`w-12 h-12 rounded-full ${prog.circleBg} flex items-center justify-center p-1.5 overflow-hidden shrink-0`}>
                  {'logoUrl' in prog && prog.logoUrl ? (
                    <img
                      src={prog.logoUrl as string}
                      alt={language === 'mr' ? prog.titleMr : prog.titleEn}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <prog.icon className={`w-6 h-6 ${prog.iconColor}`} />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-stone-900 group-hover:text-[#0B4D3C] transition-colors leading-snug">
                  {language === 'mr' ? prog.titleMr : prog.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {language === 'mr' ? prog.descMr : prog.descEn}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-stone-100 mt-4">
                <button
                  onClick={() => {
                    if (onSelectProgram) {
                      onSelectProgram(prog.id);
                    } else {
                      setSelectedProgram({
                        id: prog.id,
                        titleEn: prog.titleEn,
                        titleMr: prog.titleMr,
                        category: prog.tagEn,
                        ageGroupEn: '6-18 Years',
                        ageGroupMr: '६ ते १८ वर्षे',
                        descriptionEn: prog.descEn,
                        descriptionMr: prog.descMr,
                        highlightsEn: prog.highlightsEn,
                        highlightsMr: prog.highlightsMr,
                        image: prog.image
                      });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#047857] hover:text-[#065f46] group-hover:underline cursor-pointer"
                >
                  <span>{language === 'mr' ? 'अधिक वाचा' : 'Read More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center Explore All Programs Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              setActiveTab('programs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>{language === 'mr' ? 'सर्व अभ्यासक्रम सविस्तर पहा' : 'Explore All Programs'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. Why Parents Trust Us Section (5 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4D3C] tracking-tight">
            {language === 'mr' ? 'पालक आमच्यावर विश्वास का ठेवतात?' : 'Why Parents Trust Us'}
          </h2>
          <div className="w-14 h-1 bg-[#2E7D32] mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-stone-600 pt-1">
            {language === 'mr'
              ? 'मुलांचे संरक्षण, आदर, प्रेम आणि शास्त्रीय पद्धतींवर आधारलेली कार्यप्रणाली'
              : 'Our steadfast commitment to safety, transparency, professional expertise and deep love'}
          </p>
        </div>

        {/* 5 Columns Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustPillars.map((pillar, idx) => {
            const isSelected = activeTrustIndex === idx;
            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setActiveTrustIndex((prev) => (prev === idx ? null : idx))}
                whileHover={{
                  y: -6,
                  scale: 1.025,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: isSelected ? -8 : 0,
                  scale: isSelected ? 1.035 : 1,
                  zIndex: isSelected ? 20 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 24
                }}
                className={`relative cursor-pointer bg-white rounded-2xl p-5 border transition-colors duration-200 flex flex-col items-center text-center space-y-3 select-none ${
                  isSelected
                    ? 'border-[#0B4D3C] shadow-xl ring-2 ring-[#0B4D3C]/25 z-20 bg-gradient-to-b from-emerald-50/30 to-white'
                    : 'border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 z-1'
                }`}
              >
                {/* Circle Badge */}
                <motion.div
                  animate={{
                    scale: isSelected ? 1.1 : 1,
                    rotate: isSelected ? [0, -4, 4, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-full ${pillar.circleBg} flex items-center justify-center p-1.5 overflow-hidden shrink-0 transition-transform`}
                >
                  {'logoUrl' in pillar && pillar.logoUrl ? (
                    <img
                      src={pillar.logoUrl as string}
                      alt={language === 'mr' ? pillar.titleMr : pillar.titleEn}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  )}
                </motion.div>

                {/* Title */}
                <h3 className={`text-sm font-bold leading-snug transition-colors ${isSelected ? 'text-[#0B4D3C]' : 'text-stone-900'}`}>
                  {language === 'mr' ? pillar.titleMr : pillar.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'mr' ? pillar.descMr : pillar.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Carousel Section (Parent & Guardian Reviews) */}
      <TestimonialCarousel />

      {/* 6. Support Our Children. Build Their Tomorrow. Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF8F3] border border-orange-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Icon + Text Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-xs border border-orange-200">
              <Heart className="w-7 h-7 fill-orange-500 text-orange-500" />
            </div>
            
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {language === 'mr'
                  ? 'मुलांच्या सेवेत हातभार लावा. त्यांचे भविष्य घडवा.'
                  : 'Support Our Children. Build Their Tomorrow.'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {language === 'mr'
                  ? 'आपली छोटीशी मदत विशेष मुलांच्या शिक्षण, थेरपी, सकस भोजन किंवा वसतिगृह सुविधांसाठी मोलाचा आधार ठरते.'
                  : 'Your support helps us provide quality education, therapy, nutritious food, or better facilities for our children.'}
              </p>
            </div>
          </div>

          {/* Right Orange Donate Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenDonate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{language === 'mr' ? 'देणगी / साहाय्य करा' : 'Support / Donate Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-lg w-full overflow-hidden animate-in fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedProgram.image}
                alt={language === 'mr' ? selectedProgram.titleMr : selectedProgram.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-stone-900">
                {language === 'mr' ? selectedProgram.titleMr : selectedProgram.titleEn}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {language === 'mr' ? selectedProgram.descriptionMr : selectedProgram.descriptionEn}
              </p>
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <p className="text-xs font-bold text-stone-900">
                  {language === 'mr' ? 'प्रमुख वैशिष्ट्ये व उद्दिष्टे:' : 'Key Objectives & Highlights:'}
                </p>
                {(language === 'mr' ? selectedProgram.highlightsMr : selectedProgram.highlightsEn).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2.5 bg-[#047857] text-white text-xs font-bold rounded-xl hover:bg-[#065f46]"
                >
                  {language === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

