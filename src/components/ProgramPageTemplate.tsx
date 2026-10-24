import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  UserCheck,
  BookOpen,
  Palette,
  Activity,
  HeartHandshake,
  CheckCircle2,
  Trophy,
  Users,
  Target,
  Clock,
  Award,
  CalendarCheck,
  Layers,
  FileText,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Heart,
  Lightbulb,
  Check,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DETAILED_PROGRAMS_DATA, DetailedProgram } from '../data/detailedProgramsData';
import { ProgramStudentSkit } from './ProgramSkit';
import { Breadcrumb } from './Breadcrumb';

export interface ProgramPageTemplateProps {
  programId: string;
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (id: string) => void;
}

export const ProgramPageTemplate: React.FC<ProgramPageTemplateProps> = ({
  programId,
  onBack,
  onNavigateHome,
  onNavigatePrograms,
  onOpenAdmission,
  onSelectOtherProgram,
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'methodology' | 'milestones' | 'interventions'>('all');

  // Find program by ID or fallback
  const program: DetailedProgram =
    DETAILED_PROGRAMS_DATA.find((p) => p.id === programId) || DETAILED_PROGRAMS_DATA[0];

  const otherPrograms = DETAILED_PROGRAMS_DATA.filter((p) => p.id !== program.id);

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      case 'Trophy':
        return <Trophy className={className} />;
      case 'HeartHandshake':
      case 'Heart':
        return <HeartHandshake className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-8 sm:py-12 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* 1. TOP BREADCRUMB */}
        <Breadcrumb
          currentEn={program.titleEn}
          currentMr={program.titleMr}
          onNavigateHome={onNavigateHome}
          intermediate={{
            labelEn: 'Our Programs',
            labelMr: 'शैक्षणिक उपक्रम',
            onClick: () => {
              if (onNavigatePrograms) {
                onNavigatePrograms();
              } else if (onBack) {
                onBack();
              } else if (onNavigateHome) {
                onNavigateHome();
              }
            },
          }}
        />

        {/* 2. NAVIGATION BAR (Back to Home / Back to Programs) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onNavigateHome) {
                  onNavigateHome();
                } else if (onBack) {
                  onBack();
                } else {
                  window.location.reload();
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-stone-700 hover:text-[#0B4D3C] border border-stone-200/90 shadow-2xs text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'मुख्यपृष्ठावर परत जा' : 'Back to Home'}</span>
            </button>

            {onNavigatePrograms && (
              <button
                onClick={onNavigatePrograms}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-stone-700 hover:text-[#0B4D3C] border border-stone-200/90 shadow-2xs text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>{language === 'mr' ? 'सर्व अभ्यासक्रम पहा' : 'All Programs'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. HERO BANNER */}
        <div className="relative bg-gradient-to-br from-[#0B4D3C] via-[#116952] to-[#08382c] text-white rounded-3xl overflow-hidden shadow-xl border border-emerald-700/50 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug drop-shadow-xs">
                {language === 'mr' ? program.titleMr : program.titleEn}
              </h1>

              <p className="text-sm sm:text-base text-emerald-100 italic font-medium leading-relaxed">
                "{language === 'mr' ? program.taglineMr : program.taglineEn}"
              </p>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed pt-1">
                {language === 'mr' ? program.descriptionMr : program.descriptionEn}
              </p>

              {/* Quick Specification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                  <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold mb-1">
                    <Users className="w-4 h-4 text-emerald-300" />
                    <span>{language === 'mr' ? 'शिक्षक-विद्यार्थी प्रमाण' : 'Staff-Student Ratio'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-white">{program.staffStudentRatio}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                  <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold mb-1">
                    <Clock className="w-4 h-4 text-emerald-300" />
                    <span>{language === 'mr' ? 'साप्ताहिक तास' : 'Weekly Intensity'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-white">{program.weeklyHours}</p>
                </div>
              </div>

              {/* Call to action in banner */}
              {onOpenAdmission && (
                <div className="pt-2">
                  <button
                    onClick={onOpenAdmission}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>{language === 'mr' ? 'प्रवेश चौकशी करा' : 'Inquire for Admission'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group bg-stone-900 w-full">
                <img
                  src={program.image}
                  alt={language === 'mr' ? program.titleMr : program.titleEn}
                  className="w-full h-auto block object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 text-xs text-white font-medium drop-shadow-sm flex items-center justify-between pointer-events-none">
                  <span className="line-clamp-2">
                    {program.heroCaptionEn
                      ? (language === 'mr' ? (program.heroCaptionMr || program.heroCaptionEn) : program.heroCaptionEn)
                      : (language === 'mr' ? 'ज्ञानाच्या व स्वावलंबनाच्या वाटेवर प्रत्येक मुलाला प्रेमाने मार्गदर्शन' : 'Dedicated teacher gently guiding students on the path of knowledge and confidence')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. CORE OBJECTIVES & LEARNING GOALS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B4D3C] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
              {language === 'mr' ? 'प्रमुख उद्दिष्टे' : 'Key Objectives'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
              {language === 'mr' ? 'अभ्यासक्रमाची मुख्य उद्दिष्टे व ध्येये' : 'Core Curriculum Goals & Developmental Targets'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {language === 'mr'
                ? 'प्रत्येक विशेष मुलाच्या नैसर्गिक क्षमतांना वाव देऊन त्याला स्वावलंबी बनवण्यासाठी आखलेली उद्दिष्टे.'
                : 'Scientific milestones tailored to unlock every child’s cognitive potential and personal dignity.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {(language === 'mr' ? program.objectivesMr : program.objectivesEn).map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/70 hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#0B4D3C] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-relaxed">
                    {obj}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. IN-DEPTH 5-STEP PEDAGOGICAL METHODOLOGY */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B4D3C] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
              {program.id === 'vocational'
                ? (language === 'mr' ? 'हस्तकला शिकण्याचा प्रवास' : 'Learning Through Art & Craft')
                : (language === 'mr' ? 'शिकण्याचा सोपा प्रवास' : 'The Learning Journey')}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
              {program.id === 'vocational'
                ? (language === 'mr' ? 'हस्तकला व कौशल्यांचे सोपे आणि प्रेमळ टप्पे' : 'Step-by-Step Learning Through Art & Creativity')
                : (language === 'mr' ? 'चरणबद्ध शिक्षण व प्रगतीचा सोपा प्रवास' : 'The Step-by-Step Journey of Learning & Growth')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {program.id === 'vocational'
                ? (language === 'mr'
                    ? 'आमचे शिक्षक प्रत्येक मुलाला आपुलकीने आणि कौतुकाने हस्तकला शिकवून आत्मविश्वास कसा देतात.'
                    : 'How our caring teachers guide each student with warmth, patience, and joyful encouragement.')
                : (language === 'mr'
                    ? 'प्रत्येक मुलाला समजून घेऊन हळूहळू स्वावलंबनाकडे नेणारी प्रेमळ शिक्षण पद्धती.'
                    : 'How our caring educators guide everyday learning with patience, warmth, and encouragement.')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {program.pedagogicalSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl bg-stone-50/70 border border-stone-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0B4D3C] text-white flex items-center justify-center font-black text-base shrink-0 shadow-xs">
                  {step.stepNumber}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {language === 'mr' ? step.titleMr : step.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {language === 'mr' ? step.descriptionMr : step.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. EXPECTED DEVELOPMENTAL OUTCOMES & MILESTONES */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B4D3C] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
              {language === 'mr' ? 'अपेक्षित प्रगती' : 'Developmental Outcomes'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
              {language === 'mr' ? 'कालावधीनुसार अपेक्षित प्रगती टप्पे' : 'Timeline-Based Measurable Growth Milestones'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {language === 'mr'
                ? 'मुलाच्या शिकण्यातील प्रगतीचे मोजमाप करण्यासाठी निश्चित केलेले टप्पे.'
                : 'Concrete milestones parents can expect as their child participates in this curriculum.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.expectedOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-emerald-50/60 rounded-2xl p-5 sm:p-6 border border-emerald-200/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-[#0B4D3C] text-white">
                    {language === 'mr' ? outcome.timelineMr : outcome.timelineEn}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-relaxed">
                    {language === 'mr' ? outcome.milestoneMr : outcome.milestoneEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. DAILY INTERVENTIONS & EVALUATION PROTOCOL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Routine Interventions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#0B4D3C] pb-2 border-b border-stone-100">
              <CalendarCheck className="w-5 h-5 text-[#0B4D3C]" />
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                {program.id === 'vocational'
                  ? (language === 'mr' ? 'दैनिक हस्तकला सराव व आनंददायी कृती' : 'Daily Workshop Routine & Creative Activities')
                  : (language === 'mr' ? 'दैनिक वर्गातील कृती व सराव' : 'Daily Classroom & Therapy Routine')}
              </h3>
            </div>
            <ul className="space-y-3">
              {(language === 'mr' ? program.dailyInterventionsMr : program.dailyInterventionsEn).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment & Parent Bridge */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5 text-[#0B4D3C] pb-2 border-b border-stone-100">
              <Award className="w-5 h-5 text-[#0B4D3C]" />
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                {language === 'mr' ? 'मूल्यांकन व पालक सहकार्य' : 'Assessment & Parent Home Bridge'}
              </h3>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {language === 'mr' ? 'मूल्यांकन पद्धती:' : 'Assessment Standards:'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                {language === 'mr' ? program.assessmentMethodMr : program.assessmentMethodEn}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {language === 'mr' ? 'पालकांची भूमिका:' : 'Parent Partnership:'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                {language === 'mr' ? program.parentRoleMr : program.parentRoleEn}
              </p>
            </div>
          </div>
        </div>

        {/* 8. STUDENT PERSPECTIVE / AARAV'S SKIT */}
        <ProgramStudentSkit
          program={program}
          onOpenAdmission={onOpenAdmission || (() => {})}
        />

        {/* EXPLORE OTHER SPECIALIZED PROGRAMS */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {language === 'mr' ? 'इतर विशेष अभ्यासक्रम पहा' : 'Explore Other Specialized Programs'}
            </h2>
            <p className="text-xs text-stone-600">
              {language === 'mr'
                ? 'मुलाच्या सर्वांगीण विकासासाठी उपलब्ध असलेले इतर विभाग'
                : 'Click any program to open its complete in-depth curriculum and milestones'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherPrograms.map((op) => (
              <button
                key={op.id}
                onClick={() => {
                  if (onSelectOtherProgram) {
                    onSelectOtherProgram(op.id);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0B4D3C] flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-100 transition-all">
                    {renderIcon(op.iconName, 'w-5 h-5')}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#0B4D3C] transition-colors leading-snug line-clamp-2">
                    {language === 'mr' ? op.titleMr : op.titleEn}
                  </h3>
                  <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                    {language === 'mr' ? op.taglineMr : op.taglineEn}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 mt-3 flex items-center justify-between text-xs font-bold text-[#0B4D3C]">
                  <span>{language === 'mr' ? 'सविस्तर वाचा' : 'Read Page'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
