import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquareHeart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_DATA } from '../data/schoolData';
import { Breadcrumb } from '../components/Breadcrumb';

interface FaqPageProps {
  onOpenAdmissionModal: () => void;
  onNavigateHome?: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenAdmissionModal, onNavigateHome }) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelMr: 'सर्व प्रश्न' },
    { id: 'programmes', labelEn: 'Educational Programmes', labelMr: 'शैक्षणिक उपक्रम' },
    { id: 'admission', labelEn: 'Admissions', labelMr: 'प्रवेश' },
    { id: 'donations', labelEn: 'Donations & Volunteering', labelMr: 'देणगी व स्वयंसेवा' },
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      faq.questionEn.toLowerCase().includes(query) ||
      faq.questionMr.toLowerCase().includes(query) ||
      faq.answerEn.toLowerCase().includes(query) ||
      faq.answerMr.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="FAQ"
        currentMr="वारंवार विचारले जाणारे प्रश्न"
        onNavigateHome={onNavigateHome}
      />

      {/* HERO SECTION WITH FAQ.png AS BACKGROUND */}
      <section className="relative isolate min-h-[300px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md sm:min-h-[360px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/FAQ.png"
            alt="FAQ"
            className="h-full w-full object-cover object-center opacity-85"
          />
          {/* Subtle gradient wash: keeps the image vividly visible while ensuring high text contrast on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/20" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex min-h-[300px] flex-col justify-center px-6 py-8 sm:min-h-[360px] sm:px-10 md:max-w-xl lg:max-w-2xl lg:px-12">
          <span className="mb-2.5 inline-flex w-fit items-center rounded-full bg-amber-50/95 border border-amber-300/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 shadow-xs">
            {language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions'}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            FAQ
          </h1>
          <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-stone-800 sm:text-base">
            {language === 'mr'
              ? 'प्रवेश प्रक्रिया, शालेय सुरक्षा, शैक्षणिक उपक्रम आणि देणगी विषयी विचारल्या जाणाऱ्या महत्त्वाच्या प्रश्नांची उत्तरे.'
              : 'Find clear answers regarding admissions, school safety, academic programmes, and supporting our children.'}
          </p>
        </div>
      </section>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={language === 'mr' ? 'प्रश्नांमध्ये शोधा (उदा. प्रवेश, दीक्षा, कौशल्ये, देणगी...)' : 'Search questions (e.g. programmes, admission, life skills, donate)...'}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-xs sm:text-sm text-stone-900 shadow-xs"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-amber-50'
            }`}
          >
            {language === 'mr' ? cat.labelMr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:text-amber-800"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0"></span>
                    <span>{language === 'mr' ? faq.questionMr : faq.questionEn}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in">
                    {language === 'mr' ? faq.answerMr : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-white rounded-2xl border border-stone-200 text-stone-500 text-xs">
            {language === 'mr' ? 'कोणताही प्रश्न आढळला नाही. कृपया दुसरा शब्द शोधा.' : 'No matching questions found. Try another search keyword.'}
          </div>
        )}
      </div>

      {/* Bottom Still Have Questions CTA */}
      <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-center space-y-3">
        <h3 className="text-base font-bold text-stone-900">
          {language === 'mr' ? 'आपल्याकडे अजून काही वेगळा प्रश्न आहे का?' : 'Have a Specific Question About Your Child?'}
        </h3>
        <p className="text-xs text-stone-600 max-w-lg mx-auto">
          {language === 'mr'
            ? 'आमचे समन्वयक व विशेष शिक्षक आपल्याला मार्गदर्शन करण्यास नेहमी तत्पर आहेत.'
            : 'Feel free to get in touch with our school administration team directly.'}
        </p>
        <button
          onClick={onOpenAdmissionModal}
          className="px-6 py-2.5 rounded-xl bg-amber-700 text-white font-bold text-xs hover:bg-amber-800 shadow-xs"
        >
          {t('enquiryFormTitle')}
        </button>
      </div>
    </div>
  );
};
