import React, { useState } from 'react';
import {
  Clock,
  Sun,
  Moon,
  Coffee,
  BookOpen,
  Smile,
  UtensilsCrossed,
  Utensils,
  BedDouble,
  Heart,
  Palette,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react';
import { DailyRoutineItem, GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LightboxModal } from './LightboxModal';

interface ResidentialTimetableTimelineProps {
  routineItems: DailyRoutineItem[];
}

const FlagOfIndiaIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 sm:w-5 sm:h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="4" cy="3" r="1" fill="#D97706" />
    <line x1="4" y1="3" x2="4" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="5.5" y="3.5" width="14.5" height="11" rx="1" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 4h13.5v3.3H6z" fill="#FF9933" />
    <path d="M6 10.7h13.5V14H6z" fill="#138808" />
    <circle cx="12.75" cy="8.8" r="1.5" stroke="#000080" strokeWidth="0.8" fill="none" />
    <circle cx="12.75" cy="8.8" r="0.4" fill="#000080" />
    <line x1="12.75" y1="7.3" x2="12.75" y2="10.3" stroke="#000080" strokeWidth="0.5" />
    <line x1="11.25" y1="8.8" x2="14.25" y2="8.8" stroke="#000080" strokeWidth="0.5" />
  </svg>
);

const DevotionalAartiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 sm:w-5 sm:h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M4 14c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5c0-0.5-0.5-1-1.5-1H5.5c-1 0-1.5 0.5-1.5 1z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3c-1.8 2.8-3.2 4.8-3.2 7.2 0 2.2 1.4 3.8 3.2 3.8s3.2-1.6 3.2-3.8c0-2.4-1.4-4.4-3.2-7.2z"
      fill="#F43F5E"
      stroke="#BE123C"
      strokeWidth="1.5"
    />
    <path
      d="M12 7.5c-0.8 1.2-1.4 2.2-1.4 3.3 0 1 0.6 1.7 1.4 1.7s1.4-0.7 1.4-1.7c0-1.1-0.6-2.1-1.4-3.3z"
      fill="#FBBF24"
    />
    <path d="M5 6l2 2M19 6l-2 2M12 1v1.5" stroke="#FB7185" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ResidentialTimetableTimeline: React.FC<ResidentialTimetableTimelineProps> = ({
  routineItems,
}) => {
  const { language } = useLanguage();
  
  // Set of opened activity indices (allows smooth toggling)
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  
  // Lightbox modal for full-screen photo viewing
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const getRoutineIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'Heart': return Heart;
      case 'Coffee': return Coffee;
      case 'BookOpen': return BookOpen;
      case 'Palette': return Palette;
      case 'Utensils': return Utensils;
      case 'Moon': return Moon;
      case 'Music': return Heart;
      case 'Apple': return UtensilsCrossed;
      case 'Smile': return Smile;
      case 'Flame':
      case 'Aarti':
      case 'Devotional':
      case 'HeartHandshake': return DevotionalAartiIcon;
      case 'IndiaFlag':
      case 'Flag': return FlagOfIndiaIcon;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'BedDouble': return BedDouble;
      default: return Clock;
    }
  };

  const handleToggleActivity = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-pink-200/80 shadow-sm space-y-8">
      
      {/* ─────────────────────────────────────────────────────────────
          RESIDENTIAL LIFE HERO BANNER: Full Background Collage with Proper Opacity & Highlighted Text
      ───────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-[24px] border border-stone-200/90 shadow-sm min-h-[260px] sm:min-h-[380px] lg:min-h-[460px] flex items-center bg-[#FAF7F2]">
        
        {/* Full Background Daily Routine Collage Asset - Entire image with proper opacity, no gradient fades */}
        <img
          src="/collage.png"
          alt="Children participating in daily residential school routine"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-25 sm:opacity-30"
        />

        {/* Text Content Area directly on the background image without any extra grid */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-xl lg:max-w-2xl space-y-3">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest text-emerald-900/90">
              {language === 'mr' ? 'निवासी जीवन दिनक्रम' : 'Residential Life'}
            </span>
          </div>

          {/* Large, Bold Heading in Deep Forest Green */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#153E2A] tracking-tight leading-[1.18]">
            {language === 'mr' ? (
              <>
                वेळ विरुद्ध <br />
                <span className="text-[#1A5036]">विद्यार्थ्यांचे दैनंदिन उपक्रम</span>
              </>
            ) : (
              <>
                Time vs. <br />
                <span className="text-[#1A5036]">Daily Activities Schedule</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-stone-800 font-semibold leading-relaxed max-w-md sm:max-w-lg pt-0.5 sm:pt-1">
            {language === 'mr'
              ? 'विद्यार्थ्यांचे शिक्षण, प्रेमळ काळजी आणि दैनंदिन जीवनातील सुंदर क्षण.'
              : 'A glimpse into the rhythm of learning, care, and everyday moments.'}
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          VERTICAL CONTINUOUS TIMELINE IN SHADES OF PINK
      ───────────────────────────────────────────────────────────── */}
      <div className="relative pl-2 sm:pl-8 py-2">
        
        {/* Continuous Vertical Timeline Line in Soft Radiant Pink */}
        <div
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-5 sm:left-9 w-1 sm:w-1.5 bg-linear-to-b from-rose-400 via-pink-500 to-rose-500 rounded-full z-0 shadow-sm shadow-pink-200"
        />

        {/* Timeline Items List */}
        <div className="space-y-6">
          {routineItems.map((item, idx) => {
            const Icon = getRoutineIcon(item.iconName);
            const hasPhotos = Boolean(item.images && item.images.length > 0);
            const isOpen = openIndices.has(idx) && hasPhotos;

            return (
              <div key={idx} className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-6">
                  
                  {/* Node on the Vertical Spine */}
                  <div
                    onClick={() => hasPhotos && handleToggleActivity(idx)}
                    className={`shrink-0 mt-3 sm:mt-4 ${
                      hasPhotos ? 'cursor-pointer group' : 'cursor-default'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 shadow-xs ${
                        isOpen
                          ? 'bg-pink-600 border-white text-white ring-4 ring-pink-300 scale-105 shadow-md shadow-pink-200'
                          : hasPhotos
                            ? 'bg-white border-pink-300 text-pink-600 hover:border-pink-500 hover:bg-pink-50 hover:scale-105'
                            : 'bg-stone-100 border-stone-300 text-stone-500'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Activity Card Along the Timeline */}
                  <div
                    className={`flex-1 rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-linear-to-br from-pink-50/70 via-white to-rose-50/30 border-pink-300/90 shadow-lg shadow-pink-100/70 ring-1 ring-pink-200'
                        : 'bg-stone-50/60 hover:bg-white border-stone-200/90 hover:border-pink-300 hover:shadow-md'
                    }`}
                  >
                    {/* Header Row: Time & Activity */}
                    <div
                      onClick={() => hasPhotos && handleToggleActivity(idx)}
                      className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none ${
                        hasPhotos ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          {/* Time Badge */}
                          <span
                            className={`inline-block px-3 py-1 rounded-xl text-xs font-black tracking-tight ${
                              isOpen
                                ? 'bg-pink-600 text-white shadow-xs'
                                : 'bg-stone-900 text-white'
                            }`}
                          >
                            {item.time}
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-pink-800 bg-pink-100/90 border border-pink-200/70 px-2 py-0.5 rounded-md">
                            {item.category}
                          </span>
                        </div>

                        {/* Activity Label */}
                        <h3
                          className={`text-base sm:text-lg font-bold ${
                            isOpen ? 'text-pink-950 font-black' : 'text-stone-900'
                          }`}
                        >
                          {language === 'mr' ? item.activityMr : item.activityEn}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
                          {language === 'mr' ? item.descriptionMr : item.descriptionEn}
                        </p>
                      </div>

                      {/* Interactive Button */}
                      <div className="shrink-0 flex items-center gap-2">
                        {hasPhotos ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleActivity(idx);
                            }}
                            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                              isOpen
                                ? 'bg-pink-600 text-white ring-2 ring-pink-300 hover:bg-pink-700'
                                : 'bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-400 hover:text-pink-900'
                            }`}
                          >
                            <span>
                              {isOpen
                                ? (language === 'mr' ? 'क्षणचित्रे मिटवा' : 'Close Glimpses')
                                : (language === 'mr' ? 'आनंदाचे क्षण' : 'Glimpses of Joy')}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-3.5 h-3.5 ml-0.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                            )}
                          </button>
                        ) : null}
                      </div>
                    </div>

                    {/* Photo Gallery: Displayed only when opened */}
                    {isOpen && hasPhotos && item.images && (
                      <div className="p-4 sm:p-6 bg-white border-t border-pink-200/90 animate-in fade-in duration-200">
                        {/* Photos Grid */}
                        <div
                          className={`grid gap-4 ${
                            item.images.length === 1
                              ? 'grid-cols-1 max-w-lg'
                              : item.images.length === 2
                              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                              : item.images.length === 4
                              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                          }`}
                        >
                          {item.images.map((imgUrl, imgIdx) => {
                            const captionEn =
                              item.imageCaptionsEn?.[imgIdx] || `${item.activityEn} session`;
                            const captionMr =
                              item.imageCaptionsMr?.[imgIdx] || `${item.activityMr} सत्रातील दृश्य`;

                            return (
                              <div
                                key={imgIdx}
                                onClick={() =>
                                  setLightboxItem({
                                    id: `routine-${idx}-${imgIdx}`,
                                    titleEn: item.activityEn,
                                    titleMr: item.activityMr,
                                    captionEn: captionEn,
                                    captionMr: captionMr,
                                    imageUrl: imgUrl,
                                    category: item.category,
                                  })
                                }
                                className="group relative bg-stone-50 rounded-2xl overflow-hidden border border-pink-100 hover:border-pink-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col"
                              >
                                <div
                                  className={`relative overflow-hidden bg-stone-900 flex items-center justify-center ${
                                    item.images.length === 1
                                      ? 'h-64 sm:h-72 md:h-80'
                                      : item.images.length === 2
                                      ? 'h-56 sm:h-64'
                                      : 'h-48 sm:h-56'
                                  }`}
                                >
                                  {imgUrl.endsWith('.mp4') ? (
                                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                                      <video
                                        src={imgUrl}
                                        playsInline
                                        muted
                                        loop
                                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                                        onMouseLeave={(e) => {
                                          const v = e.currentTarget as HTMLVideoElement;
                                          v.pause();
                                          v.currentTime = 0;
                                        }}
                                        className="max-h-full max-w-full w-auto h-auto object-contain"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/25 group-hover:bg-transparent transition-colors">
                                        <div className="w-11 h-11 rounded-full bg-[#0B4D3C] text-white flex items-center justify-center shadow-lg border border-white/40 group-hover:scale-110 transition-transform">
                                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <>
                                      {/* Soft atmospheric blurred background that fills letterbox margins */}
                                      <img
                                        src={imgUrl}
                                        alt=""
                                        aria-hidden="true"
                                        className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
                                        referrerPolicy="no-referrer"
                                      />
                                      {/* Full uncropped image fitting completely inside the frame */}
                                      <img
                                        src={imgUrl}
                                        alt={language === 'mr' ? captionMr : captionEn}
                                        className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain group-hover:scale-102 transition-transform duration-300"
                                        referrerPolicy="no-referrer"
                                        onError={(e) => {
                                          const target = e.currentTarget;
                                          if (!target.dataset.fallback) {
                                            target.dataset.fallback = 'true';
                                            target.src = '/school4.jpg';
                                          }
                                        }}
                                      />
                                    </>
                                  )}
                                  <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                  </div>
                                </div>
                                <div className="p-3 bg-white border-t border-stone-100 flex-1">
                                  <p className="text-xs text-stone-700 leading-snug">
                                    {language === 'mr' ? captionMr : captionEn}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}

    </div>
  );
};
