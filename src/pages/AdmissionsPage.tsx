
import React, { useState } from 'react';
import {
  GraduationCap,
  FileCheck,
  CheckCircle2,
  Download,
  AlertCircle,
  Phone,
  HelpCircle,
  ClipboardList,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import {
  ADMISSION_STEPS,
  REQUIRED_DOCUMENTS,
  DOWNLOADABLE_DOCS
} from '../data/schoolData';
import { Breadcrumb } from '../components/Breadcrumb';

interface AdmissionsPageProps {
  onOpenAdmissionModal: () => void;
  onNavigateHome?: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenAdmissionModal, onNavigateHome }) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  // Document checklist readiness tracker in state
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Admissions"
        currentMr="प्रवेश प्रक्रिया"
        onNavigateHome={onNavigateHome}
      />

      {/* Admissions & Enrollment Title Banner — Full Background Photograph Without Cropping */}
      <div className="relative isolate w-full aspect-[3/2] min-h-[260px] overflow-hidden rounded-3xl border border-stone-200/80 shadow-xs bg-[#FAF8F5]">
        <img
          src="/admissions.png"
          alt={language === 'mr' ? 'पालक व विद्यार्थ्यांचे शाळेत प्रेमळ स्वागत' : 'Parents and new student being warmly welcomed to our school by teachers and senior students'}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-top opacity-35 sm:opacity-45"
        />

        {/* Soft, warm gradient for text readability over the faint background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FAF8F5]/70 via-[#FAF8F5]/25 via-35% to-transparent sm:from-[#FAF8F5]/60 sm:via-[#FAF8F5]/15 sm:to-transparent"
        />

        {/* Title positioned over the photograph */}
        <div className="relative z-10 flex h-full items-center px-6 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-2.5 sm:space-y-3.5 text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-950 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full shadow-2xs">
              {t('admissions')}
            </span>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-950 leading-tight tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]">
              {t('admissionsTitle')}
            </h1>

            <p className="max-w-md text-xs sm:text-sm lg:text-base text-stone-950 font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]">
              {t('admissionsSub')}
            </p>
          </div>
        </div>
      </div>

      {/* 1. Who Can Apply Banner */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
            {language === 'mr' ? 'पात्रता निकष' : 'Eligibility & Welcome Criteria'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold leading-tight">
            {language === 'mr'
              ? 'कोणास प्रवेश दिला जातो?'
              : 'Who Can Apply for Residential Special Education?'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            {language === 'mr'
              ? '६ ते १८ वर्षे वयोगटातील मतिमंदत्व, विकासात्मक विलंब, डाऊन सिन्ड्रोम किंवा विशेष शैक्षणिक गरजा असणाऱ्या मुला-मुलींना प्रवेश दिला जातो. स्वावलंबन व निवासी संगोपनासाठी आमचे दरवाजे नेहमी उघडे आहेत.'
              : 'We welcome children and adolescents between ages 6 to 18 years with intellectual disabilities, developmental delays, autism spectrum needs, or Down syndrome who will benefit from structured residential care and individualized skill development.'}
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col gap-3">
          <button
            id="admissions-page-enquiry-btn"
            onClick={onOpenAdmissionModal}
            className="w-full py-3 px-5 rounded-xl bg-white text-stone-950 font-bold text-xs hover:bg-amber-100 shadow-md text-center"
          >
            {t('enquiryFormTitle')}
          </button>
          <a
            href={`tel:${schoolInfo.phonePlaceholder}`}
            className="w-full py-2.5 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs border border-white/20 hover:bg-white/20 text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{schoolInfo.phonePlaceholder}</span>
          </a>
        </div>
      </div>

      {/* 2. Visual 6-Step Admission Workflow */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            {language === 'mr' ? 'आमच्या परिवारात आपले स्वागत' : 'Joining Our School Family'}
          </span>
          <h2 className="text-2xl font-bold text-stone-900">
            {t('admissionProcessTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADMISSION_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs space-y-3 relative hover:border-amber-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center font-extrabold text-xs">
                    0{step.stepNumber}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-stone-900 leading-snug">
                  {language === 'mr' ? step.titleMr : step.titleEn}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'mr' ? step.descriptionMr : step.descriptionEn}
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-stone-100 text-[11px] text-stone-700">
                {(language === 'mr' ? step.detailPointsMr : step.detailPointsEn).map((pt, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Required Documents Checklist (With Print Support) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-md space-y-6 print-area">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {language === 'mr' ? 'कागदपत्रे तपासणी सूची' : 'Document Checklist'}
            </span>
            <h2 className="text-2xl font-bold text-stone-900 mt-1">
              {t('requiredDocsTitle')}
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              {language === 'mr'
                ? 'शाळेत येण्यापूर्वी खालील कागदपत्रांची तयारी करा. आपण येथे टिक करून आपली तयारी तपासू शकता.'
                : 'Check off the documents below as you gather them for your campus visit.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {REQUIRED_DOCUMENTS.map((doc) => {
            const isChecked = !!checkedDocs[doc.id];
            return (
              <div
                key={doc.id}
                onClick={() => toggleDoc(doc.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400'
                    : 'bg-stone-50/70 border-stone-200 hover:bg-white hover:border-amber-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 shrink-0"
                />
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                      {language === 'mr' ? doc.nameMr : doc.nameEn}
                    </h4>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        doc.isMandatory
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {doc.isMandatory ? t('mandatoryTag') : t('optionalTag')}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {language === 'mr' ? doc.descriptionMr : doc.descriptionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <p className="font-medium">
            {t('docsNotice')}
          </p>
        </div>
      </div>

      {/* 4. Transparent Fee Policy Section */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          {language === 'mr' ? 'शुल्क व सवलत धोरण' : 'Fee Transparency'}
        </span>
        <h2 className="text-2xl font-bold text-stone-900">
          {t('feeTransparencyTitle')}
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
          {t('feeTransparencyDesc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
            <h4 className="text-xs font-bold text-stone-900">
              {language === 'mr' ? 'निवासी व भोजन व्यवस्था' : 'Hostel & Nutritional Mess'}
            </h4>
            <p className="text-[11px] text-stone-500">
              {language === 'mr' ? 'शाळा व्यवस्थापनाकडून पारदर्शक माहिती' : 'Provided on official schedule'}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
            <h4 className="text-xs font-bold text-stone-900">
              {language === 'mr' ? 'विशेष शिक्षण व साहित्य' : 'Special Education & Kits'}
            </h4>
            <p className="text-[11px] text-stone-500">
              {language === 'mr' ? 'साहित्याचा समावेश' : 'Multisensory aids included'}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
            <h4 className="text-xs font-bold text-stone-900">
              {language === 'mr' ? 'गरीब कुटुंबांसाठी शिष्यवृत्ती' : 'Need-Based Sponsorships'}
            </h4>
            <p className="text-[11px] text-stone-500">
              {language === 'mr' ? 'देणगीदारांच्या सहकार्याने सवलत' : 'Extended via donor support'}
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-stone-600 italic">
          ⓘ {t('feeContactNotice')}
        </div>
      </div>

      {/* 5. Downloadable Documents Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            {language === 'mr' ? 'दस्तऐवज संग्रह' : 'Downloads'}
          </span>
          <h2 className="text-2xl font-bold text-stone-900">
            {t('downloadsTitle')}
          </h2>
          <p className="text-xs text-stone-600">
            {t('downloadsSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {DOWNLOADABLE_DOCS.map((d) => (
            <div
              key={d.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shadow-2xs">
                  PDF
                </div>
                <a
                  href={d.downloadUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-bold text-stone-900 leading-snug hover:text-amber-800 transition-colors"
                >
                  {language === 'mr' ? d.titleMr : d.titleEn}
                </a>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'mr' ? d.descriptionMr : d.descriptionEn}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-3.5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-stone-400">{d.fileSize}</span>
                <a
                  href={d.downloadUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline decoration-amber-400 underline-offset-2 hover:decoration-amber-700 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('downloadBtn')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
