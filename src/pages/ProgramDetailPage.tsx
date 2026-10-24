import React from 'react';
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
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DETAILED_PROGRAMS_DATA, DetailedProgram } from '../data/detailedProgramsData';
import { ProgramStudentSkit } from '../components/ProgramSkit';
import { Breadcrumb } from '../components/Breadcrumb';

interface ProgramDetailPageProps {
  programId: string;
  onBack: () => void;
  onOpenAdmission: () => void;
  onSelectOtherProgram: (id: string) => void;
  onNavigateHome?: () => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({
  programId,
  onBack,
  onOpenAdmission,
  onSelectOtherProgram,
  onNavigateHome,
}) => {
  const { language } = useLanguage();

  // Find program by ID or fallback to first
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
      case 'Sparkles':
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
    <div className="bg-sky-50/60 min-h-screen py-8 sm:py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Breadcrumb */}
        <Breadcrumb
          currentEn={program.titleEn}
          currentMr={program.titleMr}
          onNavigateHome={onNavigateHome}
          intermediate={{
            labelEn: 'Our Programs',
            labelMr: 'शैक्षणिक उपक्रम',
            onClick: onBack,
          }}
        />

        {/* Navigation Breadcrumb / Back Button */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white hover:bg-sky-100 text-sky-900 border border-sky-200/90 shadow-xs text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{language === 'mr' ? 'सर्व अभ्यासक्रमांकडे परत जा' : 'Back to All Programs'}</span>
          </button>
        </div>

        {/* Top Hero Banner with Image & Key Credentials - Sky Blue Theme */}
        <div className="relative bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 text-white rounded-3xl overflow-hidden shadow-xl border border-sky-400/40 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug drop-shadow-xs">
                {language === 'mr' ? program.titleMr : program.titleEn}
              </h1>

              <p className="text-sm sm:text-base text-sky-100 italic font-medium max-w-2xl">
                "{language === 'mr' ? program.taglineMr : program.taglineEn}"
              </p>

              {/* Quick Spec Pills (Target Age / Eligibility removed as requested) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
                <div className="bg-white/15 backdrop-blur-xs p-3.5 rounded-xl border border-white/20 hover:bg-white/25 transition-all">
                  <div className="flex items-center gap-2 text-sky-100 text-xs font-bold mb-1">
                    <Users className="w-4 h-4 text-white" />
                    <span>{language === 'mr' ? 'शिक्षक-विद्यार्थी प्रमाण' : 'Staff-Student Ratio'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-white">{program.staffStudentRatio}</p>
                </div>

                <div className="bg-white/15 backdrop-blur-xs p-3.5 rounded-xl border border-white/20 hover:bg-white/25 transition-all">
                  <div className="flex items-center gap-2 text-sky-100 text-xs font-bold mb-1">
                    <Clock className="w-4 h-4 text-white" />
                    <span>{language === 'mr' ? 'साप्ताहिक तास' : 'Weekly Intensity'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-white">{program.weeklyHours}</p>
                </div>
              </div>
            </div>

            {/* Program Representative Image */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 group bg-stone-900 w-full">
                <img
                  src={program.image}
                  alt={language === 'mr' ? program.titleMr : program.titleEn}
                  className="w-full h-auto block object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/75 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/95 font-semibold drop-shadow-xs pointer-events-none">
                  {language === 'mr' ? 'श्री साई सेवा निवासी मतिमंद विद्यालय परिसर' : 'Shree Sai Seva Residential Special Campus'}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Student-Led Interactive Story / Skit for All Programs */}
        <ProgramStudentSkit
          program={program}
          onOpenAdmission={onOpenAdmission}
        />

        {/* Explore Other Programs Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 className="text-2xl font-black text-sky-900">
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
                  onSelectOtherProgram(op.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                    {renderIcon(op.iconName, 'w-5 h-5')}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                    {language === 'mr' ? op.titleMr : op.titleEn}
                  </h3>
                  <p className="text-[11px] text-stone-600 line-clamp-2">
                    {language === 'mr' ? op.taglineMr : op.taglineEn}
                  </p>
                </div>
                <div className="pt-3 border-t border-sky-50 mt-3 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>{language === 'mr' ? 'सविस्तर पहा' : 'View Page'}</span>
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
