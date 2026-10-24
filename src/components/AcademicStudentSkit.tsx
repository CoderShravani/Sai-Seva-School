import React, { useState } from 'react';
import {
  Heart,
  Smile,
  CheckCircle2,
  Clock,
  Award,
  FileText,
  Layers,
  CalendarCheck,
  HeartHandshake,
  GraduationCap,
  ChevronRight,
  Eye,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { DetailedProgram } from '../data/detailedProgramsData';
import { useLanguage } from '../context/LanguageContext';
import { PROGRAM_STUDENT_DIALOGUES } from '../data/programStudentDialogues';

interface ProgramStudentSkitProps {
  program: DetailedProgram;
  onOpenAdmission: () => void;
}

type AspectKey = 'campus' | 'crucial' | 'objectives' | 'methodology' | 'expectancies' | 'routine';

export const ProgramStudentSkit: React.FC<ProgramStudentSkitProps> = ({
  program,
  onOpenAdmission,
}) => {
  const { language } = useLanguage();
  const [activeAspect, setActiveAspect] = useState<AspectKey>('campus');
  const [showAllForParents, setShowAllForParents] = useState<boolean>(false);

  // Load custom student dialogues and highlights for this specific program
  const programData =
    PROGRAM_STUDENT_DIALOGUES[program.id] || PROGRAM_STUDENT_DIALOGUES.academic;

  const aspects: {
    id: AspectKey;
    icon: React.ReactNode;
    titleEn: string;
    titleMr: string;
    cloudBadgeEn: string;
    cloudBadgeMr: string;
    studentQuoteEn: string;
    studentQuoteMr: string;
    shortTakeawayEn: string;
    shortTakeawayMr: string;
  }[] = [
    {
      id: 'campus',
      icon: <Eye className="w-5 h-5 text-sky-600" />,
      titleEn: programData.dialogues.campus.titleEn,
      titleMr: programData.dialogues.campus.titleMr,
      cloudBadgeEn: programData.dialogues.campus.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.campus.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.campus.studentQuoteEn,
      studentQuoteMr: programData.dialogues.campus.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.campus.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.campus.shortTakeawayMr,
    },
    {
      id: 'crucial',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      titleEn: programData.dialogues.crucial.titleEn,
      titleMr: programData.dialogues.crucial.titleMr,
      cloudBadgeEn: programData.dialogues.crucial.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.crucial.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.crucial.studentQuoteEn,
      studentQuoteMr: programData.dialogues.crucial.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.crucial.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.crucial.shortTakeawayMr,
    },
    {
      id: 'objectives',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      titleEn: programData.dialogues.objectives.titleEn,
      titleMr: programData.dialogues.objectives.titleMr,
      cloudBadgeEn: programData.dialogues.objectives.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.objectives.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.objectives.studentQuoteEn,
      studentQuoteMr: programData.dialogues.objectives.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.objectives.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.objectives.shortTakeawayMr,
    },
    {
      id: 'methodology',
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      titleEn: programData.dialogues.methodology.titleEn,
      titleMr: programData.dialogues.methodology.titleMr,
      cloudBadgeEn: programData.dialogues.methodology.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.methodology.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.methodology.studentQuoteEn,
      studentQuoteMr: programData.dialogues.methodology.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.methodology.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.methodology.shortTakeawayMr,
    },
    {
      id: 'expectancies',
      icon: <CalendarCheck className="w-5 h-5 text-teal-600" />,
      titleEn: programData.dialogues.expectancies.titleEn,
      titleMr: programData.dialogues.expectancies.titleMr,
      cloudBadgeEn: programData.dialogues.expectancies.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.expectancies.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.expectancies.studentQuoteEn,
      studentQuoteMr: programData.dialogues.expectancies.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.expectancies.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.expectancies.shortTakeawayMr,
    },
    {
      id: 'routine',
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      titleEn: programData.dialogues.routine.titleEn,
      titleMr: programData.dialogues.routine.titleMr,
      cloudBadgeEn: programData.dialogues.routine.cloudBadgeEn,
      cloudBadgeMr: programData.dialogues.routine.cloudBadgeMr,
      studentQuoteEn: programData.dialogues.routine.studentQuoteEn,
      studentQuoteMr: programData.dialogues.routine.studentQuoteMr,
      shortTakeawayEn: programData.dialogues.routine.shortTakeawayEn,
      shortTakeawayMr: programData.dialogues.routine.shortTakeawayMr,
    },
  ];

  const currentAspect = aspects.find((a) => a.id === activeAspect) || aspects[0];
  const currentIndex = aspects.findIndex((a) => a.id === activeAspect);

  const handleNextAspect = () => {
    const nextIdx = (currentIndex + 1) % aspects.length;
    setActiveAspect(aspects[nextIdx].id);
  };

  return (
    <div className="space-y-10">
      
      {/* 🎭 THE SKIT STAGE: Student at the Center with Thought Clouds */}
      <div className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-white rounded-3xl p-6 sm:p-10 border-2 border-sky-200/90 shadow-md overflow-hidden">
        
        {/* Soft Background Accent for Desktop & Tablet - Preserved Exactly */}
        <div className="hidden sm:block absolute sm:top-5 sm:right-5 lg:top-8 lg:right-8 text-sky-200/60 pointer-events-none">
          <Smile className="sm:w-10 sm:h-10 lg:w-16 lg:h-16" />
        </div>

        {/* Mobile View: Dedicated cheerful smiley positioned cleanly above text so it is prominent and never overshadowed */}
        <div className="sm:hidden flex justify-center mb-3 text-sky-500" aria-hidden="true">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100/90 border border-sky-200 text-sky-600 shadow-2xs">
            <Smile className="w-5 h-5" />
          </div>
        </div>

        {/* Stage Header Note - Empathetic connection */}
        <div className="text-center max-w-2xl mx-auto mb-7 px-3 sm:px-12 lg:px-0">
          <p className="text-sm sm:text-base text-stone-700 font-semibold leading-relaxed">
            {language === 'mr'
              ? 'आरवच्या मनातील कोणत्याही विचारावर स्पर्श करा: त्याचा अनुभव आणि आमच्या शाळेत मुलांचा शिकण्याचा प्रवास कसा बदलतो ते त्याच्याच शब्दांत जाणून घ्या!'
              : 'Choose any thought bubble around Aarav to hear his real journey and understand how our school nurtures children at every step.'}
          </p>
        </div>

        {/* ☁️ FLOATING THOUGHT CLOUDS: Arranged around the student */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          {aspects.map((aspect) => {
            const isSelected = activeAspect === aspect.id;
            return (
              <button
                key={aspect.id}
                onClick={() => {
                  setActiveAspect(aspect.id);
                  setShowAllForParents(false);
                }}
                className={`relative p-3 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-sky-500 shadow-lg ring-2 ring-sky-400/40 -translate-y-1'
                    : 'bg-white/80 hover:bg-white border-sky-100 hover:border-sky-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Cloud Puff Indicator */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected ? 'bg-sky-500 text-white' : 'bg-sky-100/80 text-sky-800'
                    }`}
                  >
                    {aspect.icon}
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-sky-700 block">
                    {language === 'mr' ? aspect.cloudBadgeMr : aspect.cloudBadgeEn}
                  </span>
                  <p className="text-xs font-black text-stone-800 line-clamp-2 leading-snug mt-0.5">
                    {language === 'mr' ? aspect.titleMr : aspect.titleEn}
                  </p>
                </div>

                {/* Cloud Tail Dot */}
                {isSelected && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-sky-400 rotate-45"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* 👦 CENTER STAGE: Student Avatar & Live Dialogue Cloud */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Student Character Image (Lively_boy.png) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-3">
            <div className="relative group">
              {/* Pulsing Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full opacity-30 blur-md group-hover:opacity-50 transition-opacity"></div>
              
              {/* Avatar Frame with Lively_boy.png */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-sky-200 via-sky-100 to-white border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src="/Lively_boy.png"
                  alt="Aarav - Student Host"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Student Name Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-sky-900 text-white text-[11px] font-black px-3 py-1 rounded-full border-2 border-white shadow-md whitespace-nowrap flex items-center gap-1.5">
                <Smile className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'mr' ? 'आरव (आमचा विशेष विद्यार्थी)' : 'Aarav (Special Student)'}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                {language === 'mr' ? 'श्री साई सेवा निवासी विद्यालय' : 'Shree Sai Seva Residential School'}
              </span>
            </div>
          </div>

          {/* 💬 Live Dialogue Thought Cloud */}
          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-300 shadow-xl space-y-4">
              
              {/* Comic Speech Cloud Bubble Tip pointing to student */}
              <div className="hidden lg:block absolute -left-3 top-12 w-6 h-6 bg-white border-l-2 border-b-2 border-sky-300 rotate-45 transform"></div>

              {/* Header inside bubble */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                    💬
                  </span>
                  <div>
                    <h3 className="text-xs font-extrabold text-sky-900 uppercase tracking-wide">
                      {language === 'mr' ? 'आरव सांगतोय...' : 'Aarav is explaining to you...'}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-semibold">
                      {language === 'mr' ? currentAspect.titleMr : currentAspect.titleEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNextAspect}
                    className="text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3.5 py-1.5 rounded-xl border border-sky-200 transition-colors flex items-center gap-1.5 hover:shadow-xs cursor-pointer"
                  >
                    <span>{language === 'mr' ? 'पुढील अनुभव ऐका' : 'Explore Next Chapter'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* The heartfelt dialogue in simplest possible words */}
              <div className="space-y-3">
                <blockquote className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium bg-sky-50/50 p-4 rounded-2xl border border-sky-100/80 italic">
                  "{language === 'mr' ? currentAspect.studentQuoteMr : currentAspect.studentQuoteEn}"
                </blockquote>

                {/* Takeaway badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-sky-900 bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>{language === 'mr' ? 'थोडक्यात सारांश: ' : 'Quick Takeaway: '}</strong>
                    {language === 'mr' ? currentAspect.shortTakeawayMr : currentAspect.shortTakeawayEn}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>


      {/* 📖 THE UNFOLDED GRID: Simplified parent-friendly information for this aspect */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm space-y-8">
        
        {/* Aspect Section Switcher & Parent View All Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-100">
          <div>
            <span className="text-xs font-extrabold text-sky-700 uppercase tracking-wider block mb-1">
              {language === 'mr' ? 'पालकांसाठी सविस्तर माहिती' : 'Simplified Information for Parents'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {language === 'mr' ? currentAspect.titleMr : currentAspect.titleEn}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAllForParents(!showAllForParents)}
              className="text-xs font-bold px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 bg-stone-50 hover:bg-sky-50 text-stone-700 hover:text-sky-800 border-stone-200 hover:border-sky-200"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>
                {showAllForParents
                  ? (language === 'mr' ? 'फक्त निवडलेला भाग दाखवा' : 'Show Single Section')
                  : (language === 'mr' ? 'सर्व विभाग एकत्र उघडा' : 'Expand All Sections for Parents')}
              </span>
            </button>
          </div>
        </div>

        {/* SECTION 1: Campus Life & Real Visuals */}
        {(activeAspect === 'campus' || showAllForParents) && (
          <div className="space-y-6">
            <div className="bg-sky-50/70 p-4 sm:p-5 rounded-2xl border border-sky-100 flex items-start gap-3.5">
              <span className="text-2xl">📸</span>
              <div className="space-y-1">
                <h3 className="text-xs font-extrabold text-sky-900 uppercase tracking-wide">
                  {language === 'mr' ? 'आरव सांगतो:' : 'Aarav says:'}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-relaxed">
                  "{program.id === 'vocational'
                    ? (language === 'mr'
                      ? 'अहो, बघा आमचे विविध उपक्रम: आमच्या हस्तकला वस्तूंचे प्रदर्शन, मार्गदर्शकांच्या सूचनेनुसार व्यायाम आणि मुलांचे पारंपरिक लोकनृत्य सादरीकरण!'
                      : 'Take a look at our student activities: our handicraft exhibition, guided exercise under instructor directions, and cultural folklore performances!')
                    : program.id === 'cocurricular'
                    ? (language === 'mr'
                      ? 'अहो, बघा आमचा क्रीडा व खेळांचा आनंद: वार्षिक क्रीडा महोत्सवातील धावण्याच्या शर्यती आणि मैदानावरील मित्रांसोबतची मज्जा!'
                      : 'Look at the joy of our sports and games: track races on sports day and joyful playground recreation with friends!')
                    : program.id === 'therapy'
                    ? (language === 'mr'
                      ? 'अहो, आमचे थेरपिस्ट आणि सकाळचे व्यायाम बघा: थेरपिस्ट आम्हाला शांत करतात, श्वासाचे व्यायाम शिकवतात आणि आमचा तोल सुधारतात!'
                      : 'Take a peek at our therapy and morning routines: our therapists calm us down whenever we need, teach us breathing exercises, relaxation, and mindful balance!')
                    : program.id === 'lifeskills'
                    ? (language === 'mr'
                      ? 'अहो, आमचे दैनंदिन जीवन आणि स्वावलंबन बघा: मार्गदर्शनाखाली हात धुणे, कपडे घडी करणे आणि प्रेमाने एकत्र बसून जेवणे!'
                      : 'Take a peek at our daily life skills routines: guided hand washing, clothes folding, and sharing warm meals together with love!')
                    : (language === 'mr'
                      ? 'अहो, आमच्या विद्यालयातील मज्जा आणि आमचा दिवस कसा असतो ते अगदी जवळून बघा! इथे कोणालाही न्यूनगंड वाटत नाही.'
                      : 'Hey, peek at the life we have in the campus! Here, every corner is designed for joy, safety, and mutual encouragement.')}"
                </p>
              </div>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${(program.galleryImages && program.galleryImages.length === 4) ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 sm:gap-6`}>
              {(program.galleryImages && program.galleryImages.length > 0
                ? program.galleryImages
                : [program.image, program.image, program.image]
              ).map((imgUrl, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden border border-sky-100 bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-sky-50">
                    <img
                      src={imgUrl}
                      alt={
                        program.galleryCaptionsEn && program.galleryCaptionsEn[i]
                          ? program.galleryCaptionsEn[i]
                          : `${program.titleEn} exhibition ${i + 1}`
                      }
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  </div>
                  <div className="p-3.5 bg-white border-t border-sky-100 flex items-center justify-between text-xs font-bold text-stone-700">
                    <span className="group-hover:text-sky-700 transition-colors">
                      {program.galleryCaptionsEn && program.galleryCaptionsEn[i]
                        ? (language === 'mr' && program.galleryCaptionsMr && program.galleryCaptionsMr[i]
                            ? program.galleryCaptionsMr[i]
                            : program.galleryCaptionsEn[i])
                        : (i === 0
                            ? language === 'mr'
                              ? 'प्रत्यक्ष अध्यापन व मार्गदर्शन'
                              : 'Interactive Classroom Instruction'
                            : i === 1
                            ? language === 'mr'
                              ? 'संवेदी व प्रायोगिक साधने'
                              : 'Multisensory Tool Exercises'
                            : language === 'mr'
                            ? 'मित्रांसोबत सराव व शिकणे'
                            : 'Peer Collaboration & Friendly Learning')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed campus infrastructure highlights for parents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {programData.campusHighlights.map((hl, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-sky-50/50 border border-sky-100 space-y-1">
                  <span className="text-xs font-black text-sky-900 block flex items-center gap-1.5">
                    <span>{hl.icon}</span>
                    <span>{language === 'mr' ? hl.titleMr : hl.titleEn}</span>
                  </span>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {language === 'mr' ? hl.descriptionMr : hl.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: Why This Program is Crucial (Importance) */}
        {(activeAspect === 'crucial' || showAllForParents) && (
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700 uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>{language === 'mr' ? 'अभ्यासक्रमाचे महत्त्व व संकल्पना' : 'Core Philosophy & Significance'}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-stone-900">
                  {language === 'mr'
                    ? 'हा अभ्यासक्रम मुलाच्या सर्वांगीण विकासासाठी अत्यंत मूलभूत का आहे?'
                    : 'Why Individualized Training is Essential for Special Children'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify">
                  {language === 'mr' ? program.descriptionMr : program.descriptionEn}
                </p>
              </div>

              <div className="lg:col-span-5 bg-sky-50/80 rounded-2xl p-5 border border-sky-200/80 space-y-3">
                <h4 className="text-xs font-extrabold text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{language === 'mr' ? 'पालकांसाठी सोपे सार:' : 'Key Takeaway for Parents:'}</span>
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
                  {language === 'mr'
                    ? programData.philosophyHighlights.parentSummaryMr
                    : programData.philosophyHighlights.parentSummaryEn}
                </p>

                <div className="bg-white/90 p-3 rounded-xl border border-sky-100 text-[11px] text-stone-600 space-y-1.5">
                  {(language === 'mr'
                    ? programData.philosophyHighlights.pointsMr
                    : programData.philosophyHighlights.pointsEn
                  ).map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: Key Pedagogical Objectives */}
        {(activeAspect === 'objectives' || showAllForParents) && (
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700 uppercase tracking-wider">
                <Award className="w-4 h-4 text-sky-600" />
                <span>{language === 'mr' ? 'अभ्यासक्रमाची प्रमुख उद्दिष्टे' : 'What We Aim to Accomplish'}</span>
              </div>
              <span className="text-[11px] font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200 self-start sm:self-auto">
                {language === 'mr' ? 'व्यावहारिक व दैनंदिन कौशल्यांवर भर' : 'Practical & Daily Living Competencies'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(language === 'mr' ? program.objectivesMr : program.objectivesEn).map((obj, idx) => (
                <div
                  key={idx}
                  className="bg-sky-50/50 hover:bg-white rounded-2xl p-4 border border-sky-100 hover:border-sky-300 transition-all flex items-start gap-3 shadow-2xs hover:shadow-md"
                >
                  <span className="w-7 h-7 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                      {obj}
                    </p>
                    <span className="text-[10px] text-sky-700 font-semibold inline-block">
                      •{' '}
                      {language === 'mr'
                        ? programData.objectiveCategoriesMr[idx % programData.objectiveCategoriesMr.length]
                        : programData.objectiveCategoriesEn[idx % programData.objectiveCategoriesEn.length]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: 5-Step Methodology */}
        {(activeAspect === 'methodology' || showAllForParents) && (
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-sky-600" />
              <span>
                {program.id === 'vocational'
                  ? (language === 'mr'
                      ? 'प्रगती व नवनिर्मितीचा यशस्वी प्रवास'
                      : 'The Successful Journey of Creative Progression')
                  : (language === 'mr'
                      ? `${program.pedagogicalSteps.length} टप्प्यांचा यशस्वी प्रगती प्रवास`
                      : 'The Successful Journey of Learning & Progression')}
              </span>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${program.pedagogicalSteps.length === 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-5'} gap-4`}>
              {program.pedagogicalSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-sky-50/40 hover:bg-white rounded-2xl p-4 border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-black shadow-xs group-hover:scale-110 transition-transform">
                      {step.stepNumber}
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 leading-snug group-hover:text-sky-800 transition-colors">
                      {language === 'mr' ? step.titleMr : step.titleEn}
                    </h4>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {language === 'mr' ? step.descriptionMr : step.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: Timeline Expectancies for Parents */}
        {(activeAspect === 'expectancies' || showAllForParents) && (
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700 uppercase tracking-wider">
              <CalendarCheck className="w-4 h-4 text-sky-600" />
              <span>{language === 'mr' ? '१२ महिन्यांचे प्रगती टप्पे' : 'What Parents Can Expect Over 12 Months'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {program.expectedOutcomes.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 border border-sky-100 bg-gradient-to-b from-white to-sky-50/50 shadow-xs hover:shadow-md hover:border-sky-300 hover:-translate-y-1 transition-all space-y-3"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-sky-100 text-sky-800 border border-sky-200">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{language === 'mr' ? exp.timelineMr : exp.timelineEn}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {language === 'mr' ? exp.milestoneMr : exp.milestoneEn}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {language === 'mr'
                      ? programData.timelineDetailsMr[idx % programData.timelineDetailsMr.length]
                      : programData.timelineDetailsEn[idx % programData.timelineDetailsEn.length]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6: Daily Routine, Evaluation & Parent Role */}
        {(activeAspect === 'routine' || showAllForParents) && (
          <div className="space-y-6 pt-4 border-t border-sky-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Routine list */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-sky-700 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>
                    {program.id === 'vocational'
                      ? (language === 'mr' ? 'दैनिक हस्तकला सराव व कृती' : 'Daily Workshop Routine & Creative Practice')
                      : (language === 'mr' ? 'दैनिक वेळापत्रक' : 'Daily Classroom & Training Routine')}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {(language === 'mr' ? program.dailyInterventionsMr : program.dailyInterventionsEn).map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-sky-50/40 border border-sky-100 text-xs font-medium text-stone-800 flex items-start gap-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-sky-200/80 text-sky-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Assessment & Parents */}
              <div className="lg:col-span-6 bg-sky-50/40 rounded-2xl p-6 border border-sky-100 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-extrabold text-sky-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-sky-600" />
                      <span>{language === 'mr' ? 'मूल्यांकन पद्धती:' : 'Evaluation Method:'}</span>
                    </h4>
                    <p className="text-xs text-stone-700 bg-white p-3 rounded-xl border border-sky-100 font-medium leading-relaxed">
                      {language === 'mr' ? program.assessmentMethodMr : program.assessmentMethodEn}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-sky-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4 text-sky-600" />
                      <span>{language === 'mr' ? 'पालकांची भूमिका:' : 'Parent Collaboration:'}</span>
                    </h4>
                    <p className="text-xs text-stone-700 bg-white p-3 rounded-xl border border-sky-100 font-medium leading-relaxed">
                      {language === 'mr' ? program.parentRoleMr : program.parentRoleEn}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAdmission}
                    className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{language === 'mr' ? 'या अभ्यासक्रमासाठी प्रवेश अर्ज करा' : 'Apply for Admission in this Program'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};

// Export as AcademicStudentSkit as well to preserve backward compatibility
export const AcademicStudentSkit = ProgramStudentSkit;
