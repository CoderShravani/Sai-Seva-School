import React from 'react';
import {
  ArrowRight,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenDonate: () => void;
  onNavigateAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmission,
  onOpenDonate,
  onNavigateAbout,
}) => {
  const { language } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const heroImage = '/school_homepage.jpg';

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] min-h-[460px] sm:min-h-[480px] lg:min-h-[540px] flex items-center py-10 sm:py-14 md:py-16 lg:py-20 border-b border-stone-200/60">
      {/* 1. Full-span Background Hero Image for BOTH Mobile and Desktop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={heroImage}
          alt={language === 'mr' ? 'विशेष शिक्षक व विद्यार्थी' : 'Special Education Teacher and Students'}
          className="w-full h-full object-cover object-[70%_center] sm:object-center opacity-85"
          referrerPolicy="no-referrer"
        />
        {/* Soft background gradient mask that seamlessly covers mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/95 via-[#FAFAF8]/85 to-[#FAFAF8]/40 md:from-[#FAFAF8] md:via-[#FAFAF8]/80 md:to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8]/60 via-transparent to-transparent" />
      </div>

      {/* 2. Left Botanical Watermark Leaf Graphics (Desktop) */}
      <div className="hidden md:block absolute top-0 left-0 w-32 sm:w-44 h-full pointer-events-none opacity-20 overflow-hidden z-0">
        <svg viewBox="0 0 200 400" className="w-full h-full text-emerald-700 fill-current">
          <path d="M0,50 Q40,80 20,140 Q0,200 40,240 Q10,320 0,380 Z" opacity="0.4" />
          <path d="M10,20 C30,70 70,90 20,160 C-10,220 50,280 15,350" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* 3. Foreground Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl xl:max-w-2xl space-y-6 text-left">
          
          {/* Main Headline with high contrast & crisp text rendering */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-stone-950 tracking-tight leading-[1.18] font-serif drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            {language === 'mr' ? (
              <>
                प्रत्येक विशेष मुलाचे{' '}
                <span className="text-[#064e3b] font-black">काळजी, शिक्षण</span> आणि सन्मानासह सक्षमीकरण
              </>
            ) : (
              <>
                Empowering Every Child With{' '}
                <span className="text-[#064e3b] font-black">Care, Education</span> & Dignity
              </>
            )}
          </h1>

          {/* Subheadline with high contrast */}
          <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed max-w-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            {language === 'mr' ? (
              'श्री साई सेवा निवासी मतिमंद विद्यालय हे एक सुरक्षित, प्रेमळ आणि पोषक वातावरण निर्माण करण्यासाठी कटिबद्ध आहे, जेथे प्रत्येक मूल शिकू शकते, वाढू शकते आणि अधिक स्वावलंबी बनू शकते.'
            ) : (
              'Shree Sai Seva Niwasi Matimand School is committed to creating a safe, caring and supportive environment where every child can learn, grow and become more independent.'
            )}
          </p>

          {/* 3 Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {/* 1. Admission Enquiry Button */}
              <button
                id="hero-admission-enquiry-btn"
                onClick={onOpenAdmission}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#047857] hover:bg-[#065f46] text-white shadow-sm transition-all transform active:scale-95"
              >
                <span>{language === 'mr' ? 'प्रवेश चौकशी' : 'Admission Enquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 2. Learn About Our School Button */}
              <button
                id="hero-learn-about-school-btn"
                onClick={onNavigateAbout}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold bg-white text-[#0B4D3C] border border-stone-300 hover:bg-stone-50 hover:border-emerald-700 transition-all shadow-2xs"
              >
                <span>{language === 'mr' ? 'शाळेविषयी माहिती' : 'Learn About Our School'}</span>
              </button>
            </div>

            {/* 3. Support Our Children Button */}
            <div>
              <button
                id="hero-support-children-btn"
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white/90 backdrop-blur-xs text-orange-700 border border-amber-300 hover:bg-amber-50 transition-all shadow-2xs"
              >
                <Heart className="w-4 h-4 text-orange-600 fill-orange-500" />
                <span>{language === 'mr' ? 'मुलांच्या सेवेसाठी साहाय्य / देणगी' : 'Support Our Children'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

