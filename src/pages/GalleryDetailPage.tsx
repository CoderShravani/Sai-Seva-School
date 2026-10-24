import React from 'react';
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  ArrowRight,
  Camera,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_EVENTS, GalleryEventItem } from '../data/galleryEventsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { EventImagePlaceholder } from '../components/EventImagePlaceholder';

interface GalleryDetailPageProps {
  slug: string;
  onNavigateGallery: () => void;
  onNavigateHome: () => void;
  onSelectEvent: (slug: string) => void;
}

export const GalleryDetailPage: React.FC<GalleryDetailPageProps> = ({
  slug,
  onNavigateGallery,
  onNavigateHome,
  onSelectEvent,
}) => {
  const { language } = useLanguage();

  const event = GALLERY_EVENTS.find((e) => e.slug === slug);

  // If slug is invalid, show friendly Not Found state
  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-800 flex items-center justify-center">
          <Camera className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          {language === 'mr' ? 'हा कार्यक्रम सापडला नाही' : 'Event Story Not Found'}
        </h1>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          {language === 'mr'
            ? 'आपण शोधत असलेला कार्यक्रम उपलब्ध नाही किंवा त्याचा पत्ता बदलला असावा.'
            : 'The celebration story you are looking for is not listed or has been moved.'}
        </p>
        <button
          onClick={onNavigateGallery}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? 'गॅलरीकडे परत जा' : 'Return to Gallery'}</span>
        </button>
      </div>
    );
  }

  // Find 3 other events to recommend at the bottom
  const otherEvents = GALLERY_EVENTS.filter((e) => e.slug !== slug).slice(0, 3);

  // Array of additional placeholders for the gallery area
  const additionalPlaceholders = Array.from(
    { length: event.galleryPlaceholderCount },
    (_, idx) => ({
      id: idx,
      imgUrl: event.galleryImages?.[idx],
    })
  );

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* 1. Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumb
          currentEn={event.titleEn}
          currentMr={event.titleMr}
          onNavigateHome={onNavigateHome}
        />

        <button
          onClick={onNavigateGallery}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200/90 text-stone-700 hover:text-amber-800 hover:border-amber-300 text-xs font-bold transition-all shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'mr' ? 'सर्व उत्सव पहा' : 'Back to All Celebrations'}</span>
        </button>
      </div>

      {/* 2. Article Header */}
      <header className="space-y-4 text-left">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-900 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
            {language === 'mr' ? event.categoryMr : event.categoryEn}
          </span>
          {event.verifiedDate && (
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{event.verifiedDate}</span>
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
          {language === 'mr' ? event.titleMr : event.titleEn}
        </h1>

        <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed max-w-3xl">
          {language === 'mr'
            ? event.article.introParagraphMr
            : event.article.introParagraphEn}
        </p>
      </header>

      {/* 3. Prominent Main Image / Placeholder */}
      <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-[16/9] sm:aspect-[16/9] lg:aspect-[16/9]">
        <EventImagePlaceholder
          imageUrl={event.mainImage}
          altText={`${event.titleEn} featured photograph`}
          aspectRatio="h-full w-full"
          className="w-full h-full"
          badgeLabel={language === 'mr' ? 'मुख्य छायाचित्र' : 'Featured Photograph'}
        />
      </div>

      {/* 4. Detailed Engaging Article Body */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 shadow-sm space-y-8 text-stone-800">
        {event.article.sections.map((section, idx) => (
          <section key={idx} className="space-y-3">
            {section.headingEn && (
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                {language === 'mr'
                  ? section.headingMr || section.headingEn
                  : section.headingEn}
              </h2>
            )}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed text-justify">
              {language === 'mr'
                ? section.contentMr || section.contentEn
                : section.contentEn}
            </p>
          </section>
        ))}

        {/* 5. Thoughtful Closing Paragraph */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>{language === 'mr' ? 'चिंतन व सांगता' : 'Community Reflection'}</span>
          </span>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
            {language === 'mr'
              ? event.article.closingParagraphMr
              : event.article.closingParagraphEn}
          </p>
        </div>
      </div>

      {/* 6. Dedicated Photo Gallery Section for this Event */}
      <section className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-800">
            <Camera className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {language === 'mr' ? 'छायाचित्र संग्रह' : 'Event Photo Gallery'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900">
            {language === 'mr'
              ? `${event.titleMr} : छायाचित्रे`
              : `Glimpses of ${event.titleEn}`}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {language === 'mr'
              ? 'या कार्यक्रमातील काही क्षणचित्रे व स्मृती संग्रह.'
              : 'Photographs from this event will be updated here as our school archive expands.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {additionalPlaceholders.map((ph, i) => (
            <div
              key={ph.id}
              className="rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all group"
            >
              <EventImagePlaceholder
                imageUrl={ph.imgUrl}
                altText={`${event.titleEn} gallery photo ${i + 1}`}
                aspectRatio="aspect-[4/3]"
                className="w-full"
                badgeLabel={language === 'mr' ? `क्षणचित्र ${i + 1}` : `Photo ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom Navigation & Explore More Stories */}
      <footer className="space-y-6 pt-6 border-t border-stone-200">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              {language === 'mr' ? 'इतर उत्सव व उपक्रम' : 'Explore More Celebrations'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'mr'
                ? 'आमच्या शाळेतील इतर सण, परंपरा व कार्यक्रमांविषयी वाचा.'
                : 'Read about other cherished occasions and community traditions.'}
            </p>
          </div>

          <button
            onClick={onNavigateGallery}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
          >
            <span>{language === 'mr' ? 'सर्व १० उत्सव पहा' : 'View All 10 Celebrations'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {otherEvents.map((oe) => (
            <div
              key={oe.id}
              onClick={() => {
                onSelectEvent(oe.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2.5">
                <div className="rounded-xl overflow-hidden">
                  <EventImagePlaceholder
                    imageUrl={oe.mainImage}
                    altText={oe.titleEn}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                  {language === 'mr' ? oe.categoryMr : oe.categoryEn}
                </span>
                <h4 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                  {language === 'mr' ? oe.titleMr : oe.titleEn}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {language === 'mr' ? oe.shortIntroMr : oe.shortIntroEn}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-amber-900">
                <span>{language === 'mr' ? 'वाचा' : 'Read Story'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </footer>
    </article>
  );
};
