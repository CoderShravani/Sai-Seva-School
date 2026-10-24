import React from 'react';
import { motion, useInView } from 'motion/react';
import {
  Leaf,
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  UserCheck,
  Handshake,
  HeartHandshake,
  Scale,
  Calendar,
  School,
  FileText,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Award,
  Clock,
  Stethoscope,
  BadgeCheck,
  Check,
  GraduationCap,
  Briefcase,
  PieChart,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface PieSliceItem {
  id: string;
  titleEn: string;
  titleMr: string;
  percentage: number;
  color: string;
  hoverColor: string;
  bgLight: string;
  textClass: string;
  borderClass: string;
  icon: React.ComponentType<{ className?: string }>;
  descEn: string;
  descMr: string;
}

// Reactive Self-Loading Interactive Pie Chart with Vertical One-After-Another Items
const ReactiveHolisticPieChart: React.FC<{
  language: 'en' | 'mr';
  data: PieSliceItem[];
}> = ({ language, data }) => {
  const wheelRef = React.useRef<HTMLDivElement>(null);
  // Trigger only when the user scrolls down and can actually see the chart (50% of the wheel is visible)
  const isChartInView = useInView(wheelRef, { amount: 0.5 });
  const [animationProgress, setAnimationProgress] = React.useState(0);
  const [activeSliceId, setActiveSliceId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!isChartInView) {
      setAnimationProgress(0);
      return;
    }

    let startTime: number | null = null;
    const totalDuration = 1800; // 1.8s smooth rotation and circle filling
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / totalDuration, 1);
      // smooth easeInOut curve: begins gently, rotates & fills smoothly, settles cleanly
      const progress = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      setAnimationProgress(progress);

      if (elapsed < totalDuration) {
        rafId = requestAnimationFrame(step);
      } else {
        setAnimationProgress(1);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isChartInView]);

  const radius = 64;
  const circumference = 2 * Math.PI * radius; // ~402.12
  const activeSlice = data.find((s) => s.id === activeSliceId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-white border border-stone-200/90 rounded-3xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow space-y-2.5"
    >
      <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <PieChart className="w-3.5 h-3.5 text-[#2E7D32]" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-black text-stone-900 leading-tight truncate">
              {language === 'mr' ? 'समग्र काळजी व दैनंदिन विकास वाटप' : 'Holistic Care & Daily Development Allocation'}
            </h3>
            <p className="text-[10px] font-semibold text-emerald-800 truncate">
              {language === 'mr'
                ? 'दीक्षा अभ्यासक्रम व बहु-शाखीय पुनर्वसन मॉडेल'
                : 'Diksha Coursework & Multi-Disciplinary Rehabilitation Model'}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Chart + Vertical Order (One after another) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* SVG Donut / Pie Chart (Rotates with colors filling the circle as the user lands on it) */}
        <div ref={wheelRef} className="md:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center select-none shrink-0">
            {/* The literal rotating chart with the colors filling in */}
            <motion.div
              key={isChartInView ? 'chart-active' : 'chart-idle'}
              initial={{ rotate: 0, scale: 0.95 }}
              animate={
                isChartInView
                  ? { rotate: 360, scale: 1 }
                  : { rotate: 0, scale: 0.95 }
              }
              transition={{
                duration: 1.8,
                ease: 'easeInOut'
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90 overflow-visible">
                {/* Background track circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke="#F5F5F4"
                  strokeWidth="24"
                />

                {/* Slices filling the circle with colors as the chart rotates */}
                {(() => {
                  let cumulativePercent = 0;
                  const currentTotal = animationProgress * 100;

                  return data.map((slice) => {
                    const sliceStartPercent = cumulativePercent;
                    cumulativePercent += slice.percentage;

                    const sliceFilled = Math.max(
                      0,
                      Math.min(slice.percentage, currentTotal - sliceStartPercent)
                    );
                    const strokeDash = (sliceFilled / 100) * circumference;
                    const strokeGap = circumference - strokeDash;
                    const offset = -(sliceStartPercent / 100) * circumference;

                    const isActive = activeSliceId === slice.id;

                    return (
                      <circle
                        key={slice.id}
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={slice.color}
                        strokeWidth={isActive ? 32 : 24}
                        strokeDasharray={`${strokeDash} ${strokeGap}`}
                        strokeDashoffset={offset}
                        className="transition-all duration-200 cursor-pointer"
                        style={{
                          opacity: sliceFilled > 0 ? (activeSliceId && !isActive ? 0.45 : 1) : 0,
                          filter: isActive
                            ? `drop-shadow(0 4px 10px ${slice.color}66)`
                            : 'none'
                        }}
                        onMouseEnter={() => setActiveSliceId(slice.id)}
                        onMouseLeave={() => setActiveSliceId(null)}
                        onClick={() => setActiveSliceId(isActive ? null : slice.id)}
                      />
                    );
                  });
                })()}
              </svg>
            </motion.div>

            {/* Donut Center Label - remains level and upright in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-2">
              {activeSlice ? (
                <motion.div
                  key={activeSlice.id}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-0.5"
                >
                  <span
                    className="text-lg sm:text-xl font-black block leading-none font-mono tracking-tight"
                    style={{ color: activeSlice.color }}
                  >
                    {activeSlice.percentage}%
                  </span>
                  <span className="text-[10px] font-extrabold text-stone-800 block leading-tight max-w-[85px] line-clamp-1">
                    {language === 'mr' ? activeSlice.titleMr : activeSlice.titleEn}
                  </span>
                </motion.div>
              ) : (
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-[#0B4D3C] block leading-none font-mono tracking-tight">
                    {Math.round(100 * animationProgress)}%
                  </span>
                  <span className="text-[9px] font-extrabold text-stone-600 uppercase tracking-wider block leading-tight">
                    {language === 'mr' ? 'समग्र विकास' : 'Holistic'}
                  </span>
                  <span className="text-[8px] text-emerald-700 font-semibold block">
                    {language === 'mr' ? 'संतुलित दिनक्रम' : 'Balanced Care'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vertical Order: One after another (NOT in grids) */}
        <div className="md:col-span-7 flex flex-col gap-1.5 sm:gap-2">
          {(() => {
            let runningPercent = 0;
            const currentTotal = animationProgress * 100;

            return data.map((slice, index) => {
              const sliceStart = runningPercent;
              runningPercent += slice.percentage;
              const sliceFilled = Math.max(0, Math.min(slice.percentage, currentTotal - sliceStart));
              const displayPercent = Math.round(sliceFilled);
              const IconComponent = slice.icon;
              const isActive = activeSliceId === slice.id;

              return (
                <motion.div
                  key={slice.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isChartInView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                  onMouseEnter={() => setActiveSliceId(slice.id)}
                  onMouseLeave={() => setActiveSliceId(null)}
                  onClick={() => setActiveSliceId(isActive ? null : slice.id)}
                  className={`px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? `${slice.bgLight} border-stone-400 shadow-xs ring-1 ring-emerald-600/30`
                      : 'bg-stone-50/90 border-stone-200/80 hover:bg-stone-100/90 hover:border-stone-300'
                  }`}
                >
                  {/* Animated fill indicator bar reflecting progress */}
                  <div
                    className="absolute left-0 bottom-0 top-0 opacity-10 transition-all duration-300 pointer-events-none"
                    style={{
                      backgroundColor: slice.color,
                      width: `${displayPercent}%`
                    }}
                  />

                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-2xs"
                        style={{
                          backgroundColor: `${slice.color}20`,
                          color: slice.color
                        }}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: slice.color }}
                          />
                          <h4 className="text-xs font-bold text-stone-900 leading-tight group-hover:text-[#0B4D3C] transition-colors">
                            {language === 'mr' ? slice.titleMr : slice.titleEn}
                          </h4>
                        </div>
                        <p className="text-[10px] sm:text-[10.5px] text-stone-600 font-medium leading-snug pt-0.5">
                          {language === 'mr' ? slice.descMr : slice.descEn}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className="text-[11px] sm:text-xs font-black px-2 py-0.5 rounded-full leading-none font-mono tracking-tight transition-transform"
                        style={{
                          backgroundColor: `${slice.color}18`,
                          color: slice.color,
                          transform: isActive ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        {displayPercent}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>
    </motion.div>
  );
};

interface AboutPageProps {
  onNavigateHome?: () => void;
  onNavigateDonate?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onNavigateDonate }) => {
  const { language } = useLanguage();
  const { schoolInfo } = useSchoolData();

  // Helper to trigger navigation to DonatePage
  const handleSupportClick = () => {
    if (onNavigateDonate) {
      onNavigateDonate();
      return;
    }
    const donateBtn = document.getElementById('footer-donate-btn') || document.getElementById('header-donate-btn');
    if (donateBtn) {
      donateBtn.click();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  // 8 Core Values corresponding to design (with complete, concise 2-line sentences)
  const coreValues = [
    {
      id: 'dignity',
      titleEn: 'Dignity',
      titleMr: 'सन्मान व प्रतिष्ठा',
      descEn: 'We honor every child’s unique identity, personal voice, and rights.',
      descMr: 'आम्ही प्रत्येक मुलाच्या स्वतंत्र अस्तित्वाचा व हक्कांचा मनापासून आदर करतो.',
      practiceEn: 'Individualized respect in daily routines',
      practiceMr: 'दैनंदिन दिनचर्येत प्रत्येक मुलाचा वैयक्तिक सन्मान',
      icon: Leaf,
      bg: 'bg-[#EDF7F1]',
      hoverBg: 'hover:bg-[#E3F2E9]',
      border: 'border-emerald-200/80',
      hoverBorder: 'hover:border-emerald-400',
      iconColor: 'text-emerald-700',
    },
    {
      id: 'compassion',
      titleEn: 'Compassion',
      titleMr: 'करुणा व वात्सल्य',
      descEn: 'We care with gentle patience, warm affection, and motherly love.',
      descMr: 'आम्ही अत्यंत संयमाने, निःस्वार्थ प्रेमाने व वात्सल्याने काळजी घेतो.',
      practiceEn: 'Motherly resident care 24/7',
      practiceMr: '२४/७ मायेची व वात्सल्याची निवासी काळजी',
      icon: Heart,
      bg: 'bg-[#FDF0F4]',
      hoverBg: 'hover:bg-[#FBE4EC]',
      border: 'border-rose-200/80',
      hoverBorder: 'hover:border-rose-400',
      iconColor: 'text-rose-600',
    },
    {
      id: 'inclusion',
      titleEn: 'Inclusion',
      titleMr: 'समावेशकता',
      descEn: 'We celebrate diverse abilities, creating genuine belonging for all.',
      descMr: 'आम्ही सर्व मुलांचे स्वागत करून आपुलकीचे वातावरण निर्माण करतो.',
      practiceEn: 'Barrier-free community bonding',
      practiceMr: 'समाजात सर्वसमावेशक सहभाग व मैत्री',
      icon: Users,
      bg: 'bg-[#EDF5FC]',
      hoverBg: 'hover:bg-[#E0EFFB]',
      border: 'border-blue-200/80',
      hoverBorder: 'hover:border-blue-400',
      iconColor: 'text-blue-600',
    },
    {
      id: 'safety',
      titleEn: 'Safety',
      titleMr: 'सुरक्षितता',
      descEn: 'We provide a secure, clean, nurturing, and child-safe campus.',
      descMr: 'आम्ही मुलांसाठी अत्यंत सुरक्षित, स्वच्छ व निर्धोक वातावरण प्रदान करतो.',
      practiceEn: '24/7 CCTV & trained wardens',
      practiceMr: 'सीसीटीव्ही व प्रशिक्षित अधीक्षकांचे पहारे',
      icon: Shield,
      bg: 'bg-[#FEF6EC]',
      hoverBg: 'hover:bg-[#FDEED9]',
      border: 'border-amber-200/80',
      hoverBorder: 'hover:border-amber-400',
      iconColor: 'text-amber-700',
    },
    {
      id: 'independence',
      titleEn: 'Independence',
      titleMr: 'स्वावलंबन',
      descEn: 'We foster self-reliance in daily hygiene, dining, and life skills.',
      descMr: 'आम्ही मुलांना स्वतःची कामे स्वतः करणे व जीवन कौशल्ये शिकवतो.',
      practiceEn: 'Hands-on functional mastery',
      practiceMr: 'प्रत्यक्ष कृतीतून स्वावलंबी शिक्षण',
      icon: UserCheck,
      bg: 'bg-[#F5F0FB]',
      hoverBg: 'hover:bg-[#ECE3F8]',
      border: 'border-purple-200/80',
      hoverBorder: 'hover:border-purple-400',
      iconColor: 'text-purple-700',
    },
    {
      id: 'respect',
      titleEn: 'Respect',
      titleMr: 'आदरभाव',
      descEn: 'We value parents’ trust, teachers’ dedication, and children’s dignity.',
      descMr: 'आम्ही पालकांचा विश्वास आणि मुलांच्या क्षमतेचा सर्वोच्च आदर करतो.',
      practiceEn: 'Active family-school synergy',
      practiceMr: 'पालक व शाळा यांच्यातील निरंतर संवाद',
      icon: Handshake,
      bg: 'bg-[#EDF7F3]',
      hoverBg: 'hover:bg-[#DDF2E8]',
      border: 'border-teal-200/80',
      hoverBorder: 'hover:border-teal-400',
      iconColor: 'text-teal-700',
    },
    {
      id: 'responsibility',
      titleEn: 'Responsibility',
      titleMr: 'जबाबदारी व निष्ठा',
      descEn: 'We practice complete transparency, ethics, and social devotion.',
      descMr: 'आम्ही पारदर्शक, प्रामाणिक व नैतिक सेवाभावासाठी कटिबद्ध आहोत.',
      practiceEn: 'Audited & compliant administration',
      practiceMr: 'शासनमान्य व लेखापरीक्षित व्यवस्थापन',
      icon: HeartHandshake,
      bg: 'bg-[#FEF5ED]',
      hoverBg: 'hover:bg-[#FDEBDD]',
      border: 'border-orange-200/80',
      hoverBorder: 'hover:border-orange-400',
      iconColor: 'text-orange-700',
    },
    {
      id: 'equal-opportunity',
      titleEn: 'Equal Opportunity',
      titleMr: 'समान संधी',
      descEn: 'We ensure fair access to special education, therapies, and arts.',
      descMr: 'आम्ही प्रत्येक बालकाला दर्जेदार शिक्षण व खेळाची समान संधी देतो.',
      practiceEn: 'No child left behind policy',
      practiceMr: 'प्रत्येक मुलाला शिकण्याची समान संधी',
      icon: Scale,
      bg: 'bg-[#EEF6FB]',
      hoverBg: 'hover:bg-[#DEEFF9]',
      border: 'border-sky-200/80',
      hoverBorder: 'hover:border-sky-400',
      iconColor: 'text-sky-700',
    },
  ];

  // Who We Serve Checklist items with enhanced details
  const whoWeServeList = [
    {
      en: 'Intellectual disabilities (Mild, Moderate & Severe)',
      mr: 'मतिमंदत्व व बौद्धिक अक्षमता (सौम्य, मध्यम व तीव्र)',
      tagEn: 'Functional IQ & Cognitive Support',
      tagMr: 'बौद्धिक व अध्ययन साहाय्य'
    },
    {
      en: 'Developmental disabilities & Genetic conditions',
      mr: 'विकासात्मक दिव्यांगत्व व अनुवांशिक स्थिती',
      tagEn: 'Milestone Tracking & Nurturing',
      tagMr: 'टप्प्याटप्प्याने विकास मार्गदर्शन'
    },
    {
      en: 'Autism Spectrum Disorder (ASD)',
      mr: 'ऑटिझम स्पेक्ट्रम डिसऑर्डर (ASD)',
      tagEn: 'Sensory & Routine Integration',
      tagMr: 'संवेदना व संवाद एकात्मता'
    },
    {
      en: 'Cerebral Palsy and multiple disabilities',
      mr: 'सेरेब्रल पाल्सी व बहु-अपंगत्व (Multiple Disabilities)',
      tagEn: 'Physiotherapy & Mobility Care',
      tagMr: 'फिजिओथेरपी व हालचाल साहाय्य'
    },
    {
      en: 'Learning & Communication challenges',
      mr: 'अध्ययन व भाषा संवाद अक्षमता',
      tagEn: 'Speech Therapy & Audio-Visuals',
      tagMr: 'स्पीच थेरपी व भाषा विकास'
    },
    {
      en: 'Behavioural and emotional adjustments',
      mr: 'वर्तणूक आणि भावनिक समायोजन आव्हाने',
      tagEn: 'Positive Behavior Modification',
      tagMr: 'सकारात्मक मानसशास्त्रीय समुपदेशन'
    },
    {
      en: 'Children requiring continuous special educational support',
      mr: 'सतत विशेष शैक्षणिक साहाय्याची गरज असलेली बालके',
      tagEn: 'Diksha Education Coursework',
      tagMr: 'दीक्षा शैक्षणिक अभ्यासक्रम'
    },
  ];

  // Single Pie Chart Data: Option 1 - Care & Daily Development Allocation (Holistic Care Model)
  const singlePieChartData = [
    {
      id: 'education',
      titleEn: 'Academic & Diksha Education',
      titleMr: 'शैक्षणिक व दीक्षा अभ्यासक्रम',
      percentage: 30,
      color: '#059669',
      hoverColor: '#047857',
      bgLight: 'bg-emerald-50',
      textClass: 'text-emerald-800',
      borderClass: 'border-emerald-200',
      icon: GraduationCap,
      descEn: 'Individualized cognitive learning plans, Diksha coursework grading, and foundational literacy skills.',
      descMr: 'प्रत्येक मुलासाठी वैयक्तिक अध्ययन आराखडा, दीक्षा अभ्यासक्रम श्रेणी आणि मूलभूत साक्षरता कौशल्ये.'
    },
    {
      id: 'therapies',
      titleEn: 'Multi-Disciplinary Therapies',
      titleMr: 'तज्ज्ञ थेरपी व उपचार',
      percentage: 25,
      color: '#2563EB',
      hoverColor: '#1D4ED8',
      bgLight: 'bg-blue-50',
      textClass: 'text-blue-800',
      borderClass: 'border-blue-200',
      icon: Stethoscope,
      descEn: 'Specialized speech therapy, pediatric physiotherapy, occupational therapy, and sensory integration.',
      descMr: 'तज्ज्ञ स्पीच थेरपी, बाल फिजिओथेरपी, ऑक्युपेशनल थेरपी आणि संवेदी एकत्रीकरण उपचार.'
    },
    {
      id: 'adl',
      titleEn: 'Daily Living Skills (ADL)',
      titleMr: 'दैनंदिन जीवन कौशल्ये व स्वावलंबन',
      percentage: 25,
      color: '#D97706',
      hoverColor: '#B45309',
      bgLight: 'bg-amber-50',
      textClass: 'text-amber-800',
      borderClass: 'border-amber-200',
      icon: Briefcase,
      descEn: 'Personal self-care routines, daily hygiene habits, dining etiquette, and practical life independence.',
      descMr: 'दैनंदिन वैयक्तिक स्वच्छता, स्वतंत्र जेवणाचे शिष्टाचार, स्वतःची काळजी आणि स्वावलंबन सराव.'
    },
    {
      id: 'recreation',
      titleEn: 'Sports, Yoga & Cultural Arts',
      titleMr: 'क्रीडा, योग व सांस्कृतिक कला',
      percentage: 20,
      color: '#7C3AED',
      hoverColor: '#6D28D9',
      bgLight: 'bg-purple-50',
      textClass: 'text-purple-800',
      borderClass: 'border-purple-200',
      icon: TrendingUp,
      descEn: 'Daily morning yoga, rhythmic musical activities, gentle sports, and cultural arts.',
      descMr: 'दैनंदिन सकाळचा योग, तालबद्ध संगीत सत्रे, क्रीडा आणि सांस्कृतिक कला उपक्रम.'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-8 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ======================================================== */}
        {/* 1. BREADCRUMB */}
        {/* ======================================================== */}
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-stone-500"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) {
                onNavigateHome();
              } else {
                window.location.reload();
              }
            }}
            className="hover:text-[#0B4D3C] transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            {language === 'mr' ? 'मुखपृष्ठ' : 'Home'}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-bold text-[#0B4D3C] bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200/60">
            {language === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
          </span>
        </motion.nav>

        {/* ======================================================== */}
        {/* 2. TOP HERO SECTION */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-[#0B4D3C] text-xs font-bold tracking-wide">
              <Leaf className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>{language === 'mr' ? 'महाराष्ट्र शासन मान्यताप्राप्त निवासी संस्था' : 'Govt. Recognized Residential Special School'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B4D3C] tracking-tight leading-tight">
              {language === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0B4D3C] leading-snug">
              {language === 'mr'
                ? 'एक सुरक्षित परिसर. एक उज्ज्वल भविष्य.'
                : 'A Safe Space. A Brighter Tomorrow.'}
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              {language === 'mr'
                ? 'श्री साई सेवा निवासी मतिमंद विद्यालयात आमचा ठाम विश्वास आहे की प्रत्येक मुलामध्ये अद्वितीय क्षमता, स्वतंत्र व्यक्तिमत्त्व आणि अफाट सामर्थ्य असते. मतिमंदत्व व विकासात्मक दिव्यांगत्व असलेल्या मुलांना प्रेमळ, सुरक्षित, शिस्तबद्ध व पोषक वातावरणात शिकवून, वाढवून त्यांना अधिक स्वावलंबी आणि परिपूर्ण जीवन जगण्यास सक्षम करणे हे आमचे मुख्य ध्येय आहे.'
                : 'At Shree Sai Seva Niwasi Matimand School, we believe that every child has unique abilities, a distinct personality and immeasurable potential. Our mission is to provide a loving, structured and stimulating environment where children with intellectual and developmental disabilities can learn, grow, and lead more independent and fulfilling lives.'}
            </p>

            {/* Quick Informational Highlights (3 Pillars) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-stone-900">
                    {language === 'mr' ? '२४/७ निवासी संगोपन' : '24/7 Residential'}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {language === 'mr' ? 'सुरक्षित व पोषक निवास' : 'Safe & Nurturing Care'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-stone-900">
                    {language === 'mr' ? 'तज्ज्ञ थेरपी सुविधा' : 'Multi-Therapy Unit'}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {language === 'mr' ? 'स्पीच, फिजिओ.' : 'Speech, Physio.'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-amber-300 hover:shadow-xs transition-all">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-stone-900">
                    {language === 'mr' ? '१:५ वैयक्तिक लक्ष' : '1:5 Student Ratio'}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {language === 'mr' ? 'दीक्षा अभ्यासक्रम' : 'Diksha Coursework'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image with Clean Frame & Organic Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-50 aspect-4/3 max-h-[380px] sm:max-h-[420px] w-full transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="/home.png"
                alt={language === 'mr' ? 'श्री साई सेवा निवासी मतिमंद विद्यालय' : 'Shree Sai Seva Niwasi Matimand School'}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Organic Floating Badge: "Different Abilities Brighter Futures ❤️" */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="absolute -top-4 -right-3 sm:-top-6 sm:-right-4 bg-[#E2EFE7] border-2 border-white text-[#0B4D3C] rounded-full py-4 px-5 sm:py-5 sm:px-6 shadow-lg text-center transform rotate-6 cursor-pointer z-10 flex flex-col items-center justify-center leading-tight transition-shadow hover:shadow-xl select-none"
            >
              <span className="font-serif italic font-bold text-sm sm:text-base text-emerald-900 tracking-tight">Different</span>
              <span className="font-serif italic font-bold text-base sm:text-lg text-emerald-900 tracking-tight">Abilities</span>
              <span className="font-serif italic font-bold text-base sm:text-xl text-[#0B4D3C] tracking-tight">Brighter</span>
              <span className="font-serif italic font-bold text-sm sm:text-base text-[#0B4D3C] flex items-center gap-1 justify-center">
                Futures <span className="text-red-600 not-italic text-sm animate-pulse">❤️</span>
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* 3. OUR STORY SECTION */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Our Story text with rich milestone details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B4D3C]">
                  {language === 'mr' ? 'आमची यशोगाथा' : 'Our Story'}
                </h2>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
                <span>{language === 'mr'
                  ? 'करुणा, चिकाटी आणि समर्पणाचा एक प्रेरणादायी प्रवास'
                  : 'A Journey of Compassion, Resilience & Commitment'}</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                <p>
                  {language === 'mr'
                    ? 'श्री साई सेवा निवासी मतिमंद विद्यालयाची स्थापना ग्रामीण व निमशहरी भागातील विशेष मुलांना सर्वसमावेशक, सुरक्षित व सन्माननीय जीवन जगण्याचा अधिकार मिळवून देण्याच्या उदात्त ध्येयाने झाली. अनेक पालकांना विशेष बालकांसाठी योग्य शाळा व मार्गदर्शन उपलब्ध नसल्याने होणाऱ्या हालअपेष्टा पाहून या संस्थेची मुहूर्तमेढ रोवली गेली.'
                    : 'Shree Sai Seva Niwasi Matimand School was established to bridge the critical gap in rural and semi-urban care for children with intellectual, developmental, and neurological special needs, offering their families dependable solace and professional guidance.'}
                </p>
                <p>
                  {language === 'mr'
                    ? 'केवळ एका छोट्या खोलीपासून प्रेमाने सुरू झालेला हा उपक्रम आज एका सर्वसोयींयुक्त मान्यताप्राप्त निवासी संस्थेत रूपांतरित झाला आहे. येथे विशेष शिक्षण, तज्ज्ञ थेरपी, हस्तकला, संगीत, खेळ आणि दैनंदिन स्वावलंबनाचे प्रशिक्षण उच्च दर्जाच्या मानकांनुसार दिले जाते.'
                    : 'What began as a humble community initiative rooted in deep compassion has grown into a recognized residential institution providing round-the-clock shelter, nutritious meals, speech & occupational therapies, vocational craft workshops, and sensory enrichment.'}
                </p>
                <p>
                  {language === 'mr'
                    ? 'आमचा अढळ विश्वास आहे की प्रत्येक मूल शिकू शकते, स्वतःच्या भावना व्यक्त करू शकते आणि समाजात सन्मानाने उभे राहू शकते. योग्य प्रेम, चिकाटी आणि तांत्रिक साहाय्य दिल्यास कोणताही अडथळा पार करता येतो.'
                    : 'Over 16+ continuous years, our guiding conviction remains unwavering: every child can learn, communicate, build meaningful relationships, and live with dignity when surrounded by unconditional encouragement.'}
                </p>
              </div>
            </div>

            {/* Impact metric bar at bottom of Story Card */}
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>{language === 'mr' ? '१६+ वर्षांची अखंड सेवा' : '16+ Years of Dedicated Service'}</span>
              </div>
              <span className="text-[11px] font-semibold text-stone-500">
                {language === 'mr' ? '१००+ बालकांचे पुनर्वसन' : '100+ Lives Transformed'}
              </span>
            </div>
          </motion.div>

          {/* Middle Column: School Building Photo with interactive hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 h-full"
          >
            <div className="rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg bg-stone-100 h-full min-h-[340px] sm:min-h-[400px] relative group transition-all duration-300">
              <img
                src="/school1.jpg"
                alt={language === 'mr' ? 'श्री साई सेवा निवासी मतिमंद विद्यालय इमारत' : 'Shree Sai Seva Niwasi Matimand School building'}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-emerald-900/80 backdrop-blur-xs text-emerald-100 border border-emerald-400/40 text-[11px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-300" />
                    {language === 'mr' ? 'मुख्य शैक्षणिक संकुल' : 'Main Campus Facade'}
                  </span>
                  <span className="bg-black/50 backdrop-blur-xs text-white/90 text-[11px] font-medium px-2 py-0.5 rounded-md">
                    24/7 Monitored
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm">
                    {language === 'mr' ? 'श्री साई सेवा निवासी मतिमंद विद्यालय परिसर' : 'Shree Sai Seva Residential School Campus'}
                  </h4>
                  <p className="text-[11px] text-stone-200 line-clamp-2 leading-relaxed font-light">
                    {language === 'mr'
                      ? 'हवेशीर वर्गखोल्या, सुरक्षित वसतिगृह, मोकळे क्रीडांगण व सुरक्षित परिसराने सुसज्ज'
                      : 'Equipped with airy classrooms, safe dormitories, recreational grounds, and sensory therapy units.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Properly Aligned Quote + Key Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5 flex flex-col justify-between"
          >
            {/* Quote Card with properly aligned quotation marks */}
            <div className="bg-[#EDF7F2] border border-emerald-200/80 rounded-2xl p-5 relative overflow-hidden shadow-2xs hover:shadow-sm hover:border-emerald-300 transition-all">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-medium text-stone-800 italic leading-relaxed">
                  <span className="text-lg font-serif text-emerald-800 not-italic font-black mr-1 select-none leading-none">“</span>
                  {language === 'mr'
                    ? 'प्रत्येक मूल हे एका वेगळ्या प्रकारच्या फुलासारखे असते, आणि एकत्र येऊन ते या जगाला एक सुंदर बगीचा बनवतात.'
                    : 'Every child is a different kind of flower, and together, they make this world a beautiful garden.'}
                  <span className="text-lg font-serif text-emerald-800 not-italic font-black ml-1 select-none leading-none">”</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-emerald-200/60">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  {language === 'mr' ? 'आमची विचारसरणी' : 'Core Philosophy'}
                </span>
                <Leaf className="w-4 h-4 text-emerald-700 opacity-80" />
              </div>
            </div>

            {/* Key Information Card with rich verified details */}
            <div className="bg-[#FCFAF7] border border-amber-200/80 rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-all space-y-3.5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h4 className="text-sm font-extrabold text-stone-900 flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'mr' ? 'महत्त्वाची संस्थात्मक माहिती' : 'Key Information'}</span>
                </h4>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Row 1: Established */}
                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-stone-100/60 transition-colors">
                  <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      {language === 'mr' ? 'स्थापना वर्ष' : 'Established'}
                    </div>
                    <div className="text-stone-600 font-medium text-[11px]">
                      {schoolInfo.establishedYearPlaceholder || '2010'} (16+ {language === 'mr' ? 'वर्षे' : 'Years'})
                    </div>
                  </div>
                </div>

                {/* Row 2: Type */}
                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-stone-100/60 transition-colors">
                  <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                    <School className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      {language === 'mr' ? 'शाळेचा प्रकार' : 'Type'}
                    </div>
                    <div className="text-stone-600 font-medium text-[11px]">
                      {language === 'mr' ? 'निवासी विशेष मतिमंद विद्यालय' : 'Residential Special School'}
                    </div>
                  </div>
                </div>


                {/* Row 4: Affiliation / Recognition */}
                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-stone-100/60 transition-colors">
                  <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      {language === 'mr' ? 'शासकीय मान्यता' : 'Affiliation & Status'}
                    </div>
                    <div className="text-stone-600 font-medium leading-tight text-[11px]">
                      {language === 'mr'
                        ? 'दिव्यांग कल्याण आयुक्तालय, महाराष्ट्र शासन मान्यताप्राप्त'
                        : 'Recognized by Dept. of Persons with Disabilities, Govt. of Maharashtra'}
                    </div>
                  </div>
                </div>

                {/* Row 5: Location */}
                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-stone-100/60 transition-colors">
                  <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      {language === 'mr' ? 'स्थान व परिसर' : 'Location'}
                    </div>
                    <div className="text-stone-600 font-medium leading-tight text-[11px]">
                      {schoolInfo.addressPlaceholder || 'District Beed / Chhatrapati Sambhajinagar, Maharashtra'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* 4. THREE CARDS: MISSION, VISION, PHILOSOPHY */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-[#EAF6EE] border border-emerald-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-300 text-[#0B4D3C] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6 transition-colors" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded-md">
                  Action & Commitment
                </span>
                <h3 className="text-xl font-black text-[#0B4D3C] mt-1">
                  {language === 'mr' ? 'आमचे ध्येय (Mission)' : 'Our Mission'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {language === 'mr'
                  ? 'प्रत्येक विशेष बालकाला अर्थपूर्ण शिक्षण, प्रेमळ संगोपन, दैनंदिन जीवन कौशल्ये आणि अधिकाधिक स्वावलंबनासाठी आवश्यक सर्व संधी उपलब्ध करून देणे.'
                  : 'To provide every child with meaningful education, loving care, vital life skills and continuous opportunities for self-reliance and dignity.'}
              </p>
            </div>

            {/* 3 Concrete Action Pillars inside Mission */}
            <div className="pt-3 border-t border-emerald-200/80 space-y-1.5 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{language === 'mr' ? 'कार्यात्मक साक्षरता व दैनंदिन स्वावलंबन' : 'Functional Literacy & Daily Living (ADL)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{language === 'mr' ? 'स्पीच, फिजिओ व ऑक्युपेशनल थेरपी' : 'Speech, Physio & Occupational Therapies'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{language === 'mr' ? 'व्यावसायिक हस्तकला व कौशल्य प्रशिक्षण' : 'Vocational Craft & Livelihood Skills'}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#EDF5FC] border border-blue-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-blue-300 text-[#1E429F] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Eye className="w-6 h-6 transition-colors" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-200/60 px-2 py-0.5 rounded-md">
                  Long-Term Horizon
                </span>
                <h3 className="text-xl font-black text-[#1E429F] mt-1">
                  {language === 'mr' ? 'आमचा दृष्टिकोन (Vision)' : 'Our Vision'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {language === 'mr'
                  ? 'असे सर्वसमावेशक समाज वातावरण निर्माण करणे जिथे प्रत्येक विशेष मुलाचा सन्मान होईल, त्याला संपूर्ण आधार मिळेल आणि समाजात अर्थपूर्ण सहभागासाठी सक्षम केले जाईल.'
                  : 'To create an inclusive society where every individual with intellectual disabilities is embraced with dignity, equal opportunities, and lifelong supportive belonging.'}
              </p>
            </div>

            {/* 3 Concrete Aspiration Pillars inside Vision */}
            <div className="pt-3 border-t border-blue-200/80 space-y-1.5 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{language === 'mr' ? 'भेदभावमुक्त व आदरयुक्त समाज निर्मिती' : 'Zero Discrimination & Social Acceptance'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{language === 'mr' ? 'अडथळामुक्त सामाजिक एकात्मता' : 'Barrier-Free Community Integration'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{language === 'mr' ? 'पालक व कुटुंबांना निरंतर मानसिक आधार' : 'Lifelong Family & Parental Counseling'}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Our Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#FDF0F3] border border-rose-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs hover:shadow-lg hover:border-rose-400 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-rose-300 text-[#BE185D] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                <Heart className="w-6 h-6 fill-current transition-colors" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 bg-rose-200/60 px-2 py-0.5 rounded-md">
                  Guiding Principles
                </span>
                <h3 className="text-xl font-black text-[#BE185D] mt-1">
                  {language === 'mr' ? 'आमचे तत्त्वज्ञान (Philosophy)' : 'Our Philosophy'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {language === 'mr'
                  ? 'आम्ही बाल-केंद्रित आणि सर्वांगीण दृष्टिकोन स्वीकारतो; प्रत्येक मुलाची वैयक्तिकता, क्षमता आणि शिकण्याची गती यांचा आदर करतो. आम्ही कमतरतांवर नव्हे तर क्षमतेवर लक्ष केंद्रित करतो.'
                  : 'We follow a child-centred holistic philosophy, cherishing every learner’s pace and individuality. We actively focus on abilities, strengths, and joy rather than limits.'}
              </p>
            </div>

            {/* 3 Guiding Tenets inside Philosophy */}
            <div className="pt-3 border-t border-rose-200/80 space-y-1.5 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>{language === 'mr' ? 'मुलाच्या नैसर्गिक गतीनुसार शिक्षण' : 'Learning at the Child’s Natural Pace'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>{language === 'mr' ? 'कमतरतांवर नव्हे तर क्षमतेवर भर' : 'Nurturing Latent Talents & Creativity'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>{language === 'mr' ? 'निःस्वार्थ प्रेम, संयम व आत्मीयता' : 'Unconditional Empathy, Warmth & Care'}</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* 5. WHO WE SERVE & OUR VALUES */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT BLOCK: WHO WE SERVE */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="h-full bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                    {language === 'mr' ? 'आम्ही कोणाची सेवा करतो?' : 'Who We Serve'}
                  </h2>
                </div>
                <p className="text-xs font-bold text-emerald-800 pt-0.5">
                  {language === 'mr'
                    ? 'विविध गरजांना पाठबळ, अद्वितीय क्षमतेची जोपासना'
                    : 'Supporting Diverse Needs, Nurturing Unique Potential'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {language === 'mr'
                  ? 'आमच्या शाळेत खालील विशेष गरजा असलेल्या बालकांना दर्जेदार विशेष शिक्षण, थेरपी, सुरक्षित निवास व पोषक आहार दिला जातो:'
                  : 'We provide individualized education, comprehensive therapy, round-the-clock boarding, and care for children with:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Checklist Column with interactive micro-hover */}
                <div className="sm:col-span-7 space-y-2">
                  {whoWeServeList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="flex items-start gap-2.5 p-1.5 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200/60 transition-all cursor-default group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug block">
                          {language === 'mr' ? item.mr : item.en}
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium block pt-0.5">
                          {language === 'mr' ? item.tagMr : item.tagEn}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Photo of child learning / growth with exact square ratio */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-square w-full max-w-[200px] group relative bg-white flex items-center justify-center">
                    <img
                      src="/growth.png"
                      alt={language === 'mr' ? 'प्रगती व शिकण्याचा आनंद' : 'Student growth and progress'}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  
                  {/* Badge underneath photo */}
                  <div className="mt-3 text-center space-y-1">
                    <span className="font-serif italic font-bold text-xs sm:text-sm text-[#0B4D3C] inline-flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                      Small Steps Make Big Progress <span className="not-italic">💚</span>
                    </span>
                    <div className="text-[10px] font-semibold text-stone-500">
                      {language === 'mr' ? 'प्रवेश वयोगट: ६ ते १८ वर्षे' : 'Age Group: 6 to 18 Years'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT BLOCK: OUR VALUES & THE PIE CHART (Filling the exact gap before Leadership, ending exactly with Who We Serve) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {/* 1. Our Values Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow space-y-3.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-[#2E7D32]" />
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                      {language === 'mr' ? 'आमची जीवनमूल्ये' : 'Our Values'}
                    </h2>
                  </div>
                  <p className="text-xs font-bold text-emerald-800 pt-0.5">
                    {language === 'mr'
                      ? 'आम्हाला मार्गदर्शन करणारी मूलभूत मानवी व शैक्षणिक तत्त्वे'
                      : 'The Principles That Guide Our Everyday Care'}
                  </p>
                </div>

                <div className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full self-start sm:self-auto">
                  {language === 'mr' ? '८ संस्थात्मक मूल्ये' : '8 Guiding Pillars'}
                </div>
              </div>

              {/* 8 Value Cards in 4x2 Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-0.5">
                {coreValues.map((val) => {
                  const IconComponent = val.icon;
                  return (
                    <motion.div
                      key={val.id}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className={`${val.bg} ${val.hoverBg} border ${val.border} ${val.hoverBorder} rounded-2xl p-2.5 sm:p-3 space-y-2 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group cursor-default`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-1 rounded-lg bg-white/80 backdrop-blur-xs shadow-2xs group-hover:scale-105 transition-transform">
                          <IconComponent className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${val.iconColor}`} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 leading-tight group-hover:text-[#0B4D3C] transition-colors">
                          {language === 'mr' ? val.titleMr : val.titleEn}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-stone-600 leading-normal font-medium">
                          {language === 'mr' ? val.descMr : val.descEn}
                        </p>
                      </div>

                      <div className="pt-1.5 border-t border-black/5 text-[9px] sm:text-[9.5px] font-semibold text-stone-600 leading-snug">
                        {language === 'mr' ? val.practiceMr : val.practiceEn}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* 2. IN THE GAP: ONLY THE PIE CHART (Reactive Self-Loading Pie Chart with Vertical One-After-Another Items) */}
            <ReactiveHolisticPieChart language={language} data={singlePieChartData} />
          </div>
        </section>

        {/* ======================================================== */}
        {/* 7. MESSAGES FROM OUR FOUNDERS */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Founder / President Message (Dr. Pramod Bhalerao) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0B4D3C] flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>{language === 'mr'
                  ? 'संस्थापक / अध्यक्ष महोदयांचे मनोगत'
                  : 'Message from Our Founder / President'}</span>
              </h3>
              <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                {language === 'mr' ? 'संस्थापक दृष्टिकोन' : 'Founder’s Vision'}
              </span>
            </div>

            <div className="bg-[#FCFAF7] border border-amber-200/90 hover:border-amber-300 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start group">
              {/* Founder Portrait Photo with hover zoom */}
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden shadow-xs border-2 border-amber-200 shrink-0 bg-stone-100 relative">
                <img
                  src="/founder.jpg"
                  alt={language === 'mr' ? 'संस्थापक अध्यक्ष डॉ. प्रमोद भालेराव' : 'Founder and President Dr. Pramod Bhalerao'}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Message Content with properly aligned quotes */}
              <div className="space-y-3 flex-1">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  <span className="text-base sm:text-lg font-serif text-amber-600 font-black not-italic mr-0.5 select-none leading-none">“</span>
                  {language === 'mr'
                    ? 'आमचा प्रवास नेहमीच एका साध्या आणि पवित्र विश्वासाने प्रेरित राहिला आहे – प्रत्येक बालकाला प्रेम, सन्मान, शिक्षण आणि स्वाभिमानाने जगण्याचा हक्क मिळायला हवा. विशेष बालकांचे संगोपन करताना समाजाचे दातृत्व आणि शिक्षकांचे समर्पण हेच आमचे खरे सामर्थ्य आहे. दिव्यांग बालकांना परावलंबी न ठेवता स्वावलंबी बनवणे हेच आमचे जीवनध्येय आहे.'
                    : 'Our journey has always been guided by a simple belief – that every child deserves love, respect, education and an opportunity to live with dignity. We remain committed to building a more inclusive society where children with intellectual disabilities are accepted with open arms, nurtured with genuine care, and empowered to stand on their own feet.'}
                  <span className="text-base sm:text-lg font-serif text-amber-600 font-black not-italic ml-0.5 select-none leading-none">”</span>
                </p>

                <div className="pt-2 border-t border-amber-200/70 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-900">
                      {language === 'mr' ? 'डॉ. प्रमोद भालेराव' : 'Dr. Pramod Bhalerao'}
                    </h4>
                    <p className="text-[11px] font-semibold text-emerald-800">
                      {language === 'mr' ? 'संस्थापक व अध्यक्ष, श्री साई सेवा ट्रस्ट' : 'Founder & President, Shree Sai Seva Trust'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Founder Message (Mr. Prashant Deshmukh) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0B4D3C] flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-700 fill-emerald-700" />
                <span>{language === 'mr'
                  ? 'संस्थापकांचे मनोगत'
                  : 'Message from Our Founder'}</span>
              </h3>
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                {language === 'mr' ? 'संस्थापक दृष्टिकोन' : 'Founder’s Vision'}
              </span>
            </div>

            <div className="bg-[#FCFAF7] border border-amber-200/90 hover:border-amber-300 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start group">
              {/* Founder Portrait Photo with hover zoom */}
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden shadow-xs border-2 border-amber-200 shrink-0 bg-stone-100 relative">
                <img
                  src="/founder1.jpg"
                  alt={language === 'mr' ? 'संस्थापक श्री. प्रशांत देशमुख' : 'Founder Mr. Prashant Deshmukh'}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Message Content with properly aligned quotes */}
              <div className="space-y-3 flex-1">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  <span className="text-base sm:text-lg font-serif text-amber-600 font-black not-italic mr-0.5 select-none leading-none">“</span>
                  {language === 'mr'
                    ? 'आमच्या शाळेत प्रत्येक मुलासाठी दीक्षा शैक्षणिक अभ्यासक्रम (Diksha Education Coursework) राबवून त्याच्या गरजेनुसार विशेष अध्यापन केले जाते. निवासी वसतिगृहातील स्वच्छतेपासून ते दैनंदिन स्वावलंबनापर्यंत, आमचे शिक्षक व आया-मावशी अत्यंत मायेने आणि शिस्तीने मुलांवर संस्कार करतात. प्रत्येक लहान प्रगती हा आमच्यासाठी मोठा विजय असतो.'
                    : 'At our school, we formulate customized Diksha education coursework for every child, tailored to their distinct learning speed. From sensory stimulation and self-grooming to joyful art and sports, our devoted team works with endless patience. Every tiny milestone our students achieve fills our hearts with pride.'}
                  <span className="text-base sm:text-lg font-serif text-amber-600 font-black not-italic ml-0.5 select-none leading-none">”</span>
                </p>

                <div className="pt-2 border-t border-amber-200/70 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-900">
                      {language === 'mr' ? 'श्री. प्रशांत देशमुख' : 'Mr. Prashant Deshmukh'}
                    </h4>
                    <p className="text-[11px] font-semibold text-emerald-800">
                      {language === 'mr' ? 'संस्थापक, श्री साई सेवा ट्रस्ट' : 'Founder, Shree Sai Seva Trust'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* 8. TOGETHER, WE CAN CREATE BRIGHTER TOMORROWS (CTA) */}
        {/* ======================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#EDF7F2] border border-emerald-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
        >
          {/* Contribution Thumbnail Photo in Exact Aspect Ratio Without Cropping */}
          <div className="w-36 sm:w-44 md:w-52 aspect-[5/4] rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0 bg-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <img
              src="/contribution.png"
              alt={language === 'mr' ? 'एकत्र येऊन उज्ज्वल भविष्य घडवूया' : 'Together, We Can Create Brighter Tomorrows'}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Center Text with Ways to Support */}
          <div className="space-y-2 flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B4D3C] tracking-tight">
              {language === 'mr'
                ? 'एकत्र येऊन आपण घडवूया एक उज्ज्वल उद्या!'
                : 'Together, We Can Create Brighter Tomorrows'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              {language === 'mr'
                ? 'आमच्या या सेवाभावी प्रवासाचा भाग व्हा. मुलांचे शिक्षण प्रायोजित करा, थेरपी साहित्य किंवा पौष्टिक आहार पुरवण्यासाठी दातृत्व दाखवा अथवा शाळेला भेट देऊन मुलांचा आत्मविश्वास वाढवा.'
                : 'Be a vital part of our journey. Sponsor a child’s education and therapy, donate learning equipment, celebrate birthdays with our children, or volunteer your skills.'}
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="text-[10px] font-bold bg-white text-emerald-900 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                {language === 'mr' ? '✓ करसवलत ८०G उपलब्ध' : '✓ 80G Tax Exemption Eligible'}
              </span>
              <span className="text-[10px] font-bold bg-white text-emerald-900 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                {language === 'mr' ? '✓ पारदर्शक व्यवस्थापन' : '✓ 100% Transparent Audited Trust'}
              </span>
              <span className="text-[10px] font-bold bg-white text-emerald-900 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                {language === 'mr' ? '✓ पालक व अभ्यागतांचे स्वागत' : '✓ Visitors Warmly Welcomed'}
              </span>
            </div>
          </div>

          {/* Action Button & Handwritten Motto */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <motion.button
              id="about-cta-support-btn"
              type="button"
              onClick={handleSupportClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3.5 rounded-2xl bg-[#0B4D3C] hover:bg-[#07392c] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all cursor-pointer group/btn"
            >
              <Heart className="w-4 h-4 text-emerald-300 fill-emerald-300 group-hover/btn:animate-ping" />
              <span>{language === 'mr' ? 'मुलांना साहाय्य करा' : 'Support Our Children'}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>

            {/* Handwritten script badge */}
            <div className="hidden lg:flex flex-col items-center justify-center font-serif italic text-xs text-[#0B4D3C] font-bold leading-tight pl-2 select-none">
              <span className="tracking-wide">Inclusion Today</span>
              <span className="inline-flex items-center gap-0.5 text-emerald-800">
                A Kinder Tomorrow <span className="not-italic text-red-500">💚</span>
              </span>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
