import React, { useState } from 'react';
import {
  UserCheck,
  BookOpen,
  Briefcase,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Activity,
  Palette,
  Trophy,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROGRAMS_DATA } from '../data/schoolData';
import { ProgramItem } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';

interface ProgramsPageProps {
  onOpenAdmission: () => void;
  onSelectProgram: (programId: string) => void;
  onNavigateHome?: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onOpenAdmission,
  onSelectProgram,
  onNavigateHome,
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Programs', labelMr: 'सर्व अभ्यासक्रम' },
    { id: 'education', labelEn: 'Academic Education & Diksha Coursework', labelMr: 'शैक्षणिक वर्ग व दीक्षा अभ्यासक्रम' },
    { id: 'therapy', labelEn: 'Therapeutic & Speech Support', labelMr: 'उपचार व थेरपी सेवा' },
    { id: 'lifeskills', labelEn: 'Life Skills Training', labelMr: 'जीवन कौशल्ये' },
    { id: 'vocational', labelEn: 'Pre-Vocational', labelMr: 'पूर्व-व्यावसायिक' },
    { id: 'cocurricular', labelEn: 'Co-Curricular', labelMr: 'कला व क्रीडा' },
    { id: 'counselling', labelEn: 'Counselling & Care', labelMr: 'समुपदेशन' },
  ];

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS_DATA
      : PROGRAMS_DATA.filter((p) => p.category === activeCategory);

  // Map program id to detailed program id
  const getDetailId = (item: ProgramItem): string => {
    return item.id;
  };

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return BookOpen;
      case 'Activity':
        return Activity;
      case 'UserCheck':
      case 'Sparkles':
        return UserCheck;
      case 'Palette':
      case 'Briefcase':
        return Palette;
      case 'Trophy':
        return Trophy;
      case 'Heart':
      case 'HeartHandshake':
        return Heart;
      default:
        return BookOpen;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'education':
        return language === 'mr' ? 'अभ्यासक्रम' : 'Curriculum';
      case 'therapy':
        return language === 'mr' ? 'उपचार पद्धती' : 'Therapy';
      case 'lifeskills':
        return language === 'mr' ? 'स्वावलंबन' : 'Independence';
      case 'vocational':
        return language === 'mr' ? 'व्यावसायिक' : 'Vocational';
      case 'cocurricular':
        return language === 'mr' ? 'कला व क्रीडा' : 'Creativity';
      case 'counselling':
        return language === 'mr' ? 'कल्याण व आधार' : 'Wellbeing';
      default:
        return category;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Our Programs"
        currentMr="शैक्षणिक उपक्रम"
        onNavigateHome={onNavigateHome}
      />

      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0B4D3C] bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300/60">
          {t('programs')}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          {t('programsTitle')}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t('programsSub')}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#0B4D3C] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-emerald-50 hover:text-[#0B4D3C]'
            }`}
          >
            {language === 'mr' ? cat.labelMr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Thumbnail-Associated Grid of Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPrograms.map((prog) => {
          const IconComp = getProgramIcon(prog.iconName);
          const detailId = getDetailId(prog);

          return (
            <div
              key={prog.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image Header */}
                <div className="relative aspect-[16/9] sm:aspect-[16/9] overflow-hidden bg-stone-100">
                  <img
                    src={prog.image}
                    alt={language === 'mr' ? prog.titleMr : prog.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {getCategoryLabel(prog.category)}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 text-[#0B4D3C] shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-50 transition-all duration-300">
                    <IconComp className="w-5 h-5 text-[#047857]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#0B4D3C] transition-colors">
                    {language === 'mr' ? prog.titleMr : prog.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {language === 'mr' ? prog.descriptionMr : prog.descriptionEn}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <p className="text-xs font-bold text-stone-900">
                      {language === 'mr' ? 'प्रमुख उद्दिष्टे व वैशिष्ट्ये:' : 'Key Objectives & Highlights:'}
                    </p>
                    {(language === 'mr' ? prog.highlightsMr : prog.highlightsEn).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Opens dedicated Program Detail Page */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProgram(detailId)}
                  className="w-full py-3 px-4 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>{language === 'mr' ? 'सविस्तर अभ्यासक्रम व योजना पहा' : 'View In-Depth Program Details'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Admission Banner */}
      <div className="bg-gradient-to-r from-[#0B4D3C] to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">
            {language === 'mr' ? 'आपल्या पाल्यासाठी योग्य अभ्यासक्रमाची निवड करा' : 'Find the Right Program for Your Child'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
            {language === 'mr'
              ? 'आमचे तज्ज्ञ विशेष शिक्षक मुलाच्या क्षमतेचे मूल्यांकन करून योग्य शैक्षणिक व पुनर्वसन वर्ग सुचवतात.'
              : 'Our RCI-certified special educators and therapists assess each child to determine the ideal individualized learning plan.'}
          </p>
        </div>
        <button
          onClick={onOpenAdmission}
          className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#0B4D3C] font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <GraduationCap className="w-4 h-4 text-[#0B4D3C]" />
          <span>{language === 'mr' ? 'प्रवेशासाठी संपर्क साधा' : 'Enquire for Admission'}</span>
        </button>
      </div>
    </div>
  );
};
