import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_EVENTS, GalleryEventItem } from '../data/galleryEventsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { EventImagePlaceholder } from '../components/EventImagePlaceholder';
import { LightboxModal } from '../components/LightboxModal';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onNavigateHome?: () => void;
  onOpenLightbox?: (item: any) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigateHome,
  onOpenLightbox,
}) => {
  const { language, t } = useLanguage();
  const [localLightboxItem, setLocalLightboxItem] = useState<GalleryItem | null>(null);

  const handleZoom = (event: GalleryEventItem) => {
    const item: GalleryItem = {
      id: event.id,
      titleEn: event.titleEn,
      titleMr: event.titleMr,
      category: event.categoryEn,
      imageUrl: event.mainImage || '',
      captionEn: event.shortIntroEn,
      captionMr: event.shortIntroMr,
      isVideo: event.isVideo,
      videoUrl: event.videoUrl,
    };
    if (onOpenLightbox) {
      onOpenLightbox(item);
    } else {
      setLocalLightboxItem(item);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* 1. Breadcrumb */}
      <Breadcrumb
        currentEn="Gallery"
        currentMr="गॅलरी"
        onNavigateHome={onNavigateHome}
      />

      {/* 2. Main Page Header: Celebrations & Special Moments */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 text-center max-w-4xl mx-auto p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Background Image with Proper Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/activities.png"
            alt="Activities & Celebrations"
            className="w-full h-full object-cover object-center opacity-45 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-amber-50/50 to-white/75" />
        </div>

        {/* Header Content */}
        <div className="relative z-10 space-y-3.5 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-stone-900 leading-tight tracking-tight">
            {language === 'mr' ? 'शालेय उत्सव व विशेष क्षण' : 'Celebrations & Special Moments'}
          </h1>

          <p className="text-base sm:text-lg text-amber-900 font-semibold leading-relaxed">
            {language === 'mr'
              ? 'आमच्या शाळेतील सण, परंपरा आणि सर्वांना एकत्र आणणाऱ्या लहान-मोठ्या आनंदाच्या क्षणांची एक सुंदर झलक.'
              : 'A glimpse into the celebrations, traditions, and little moments that bring our school community together.'}
          </p>

          <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            {language === 'mr'
              ? 'श्री साई सेवा निवासी विद्यालयात आम्ही राष्ट्रीय प्रसंग, भारतीय सण, सांस्कृतिक परंपरा आणि विशेष दिवस मोठ्या आपुलकीने साजरे करतो. या उपक्रमांमुळे विशेष मुलांना प्रत्यक्ष सहभागी होण्याची, मित्र व शिक्षकांशी जोडले जाण्याची आणि आनंदाचे क्षण अनुभवण्याची सुंदर संधी मिळते.'
              : 'At Shree Sai Seva Residential School, our calendar is woven with national occasions, Indian festivals, cultural traditions, and special days that give our children meaningful opportunities to participate, connect with their school community, and enjoy shared experiences. Each celebration is thoughtfully adapted to nurture a sense of belonging, joy, and collective pride in an atmosphere of warmth, dignity, and unconditional acceptance.'}
          </p>
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {GALLERY_EVENTS.map((event) => (
          <div
            key={event.id}
            className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Image Placeholder / Photo / Video with Zoom */}
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
              <EventImagePlaceholder
                imageUrl={event.mainImage}
                isVideo={event.isVideo}
                videoUrl={event.videoUrl}
                altText={language === 'mr' ? event.titleMr : event.titleEn}
                aspectRatio="h-full w-full"
                className="w-full h-full"
                onZoom={() => handleZoom(event)}
              />
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-start">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                {language === 'mr' ? event.titleMr : event.titleEn}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {language === 'mr' ? event.shortIntroMr : event.shortIntroEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Bottom Community Note */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-100 via-amber-50/50 to-stone-100 border border-stone-200/80 text-center max-w-3xl mx-auto space-y-2">
        <HeartHandshake className="w-6 h-6 text-amber-700 mx-auto" />
        <h3 className="text-sm sm:text-base font-bold text-stone-900">
          {language === 'mr' ? 'सामूहिक एकात्मता आणि आनंद' : 'Celebrating Together as One Family'}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {language === 'mr'
            ? 'आमच्या शाळेत साजरे होणारे सर्व सण व कार्यक्रम हे मुलांना समाजात मानाचे स्थान मिळवून देण्यासाठी आणि त्यांच्यात आत्मविश्वास निर्माण करण्यासाठी आहेत.'
            : 'Every occasion celebrated on our campus strengthens the circle of care, reminding our children that their laughter, presence, and contributions are deeply cherished by the entire community.'}
        </p>
      </div>

      {/* Lightbox Modal for Full Screen Image/Video View */}
      {localLightboxItem && (
        <LightboxModal
          item={localLightboxItem}
          onClose={() => setLocalLightboxItem(null)}
        />
      )}
    </div>
  );
};
