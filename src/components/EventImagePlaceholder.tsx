import React from 'react';
import { Camera, Maximize2, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventImagePlaceholderProps {
  imageUrl?: string;
  isVideo?: boolean;
  videoUrl?: string;
  altText?: string;
  aspectRatio?: string; // default "aspect-[4/3]"
  className?: string;
  badgeLabel?: string;
  onClick?: () => void;
  onZoom?: () => void;
  showZoomIcon?: boolean;
}

export const EventImagePlaceholder: React.FC<EventImagePlaceholderProps> = ({
  imageUrl,
  isVideo = false,
  videoUrl,
  altText = 'Event photograph',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  badgeLabel,
  onClick,
  onZoom,
  showZoomIcon = false,
}) => {
  const { language } = useLanguage();
  const isMediaVideo = isVideo || imageUrl?.endsWith('.mp4') || !!videoUrl;
  const mediaSrc = isMediaVideo ? (videoUrl || imageUrl) : imageUrl;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Play video only when the user is in its row; pause/stop when scrolling down or away
  React.useEffect(() => {
    if (!isMediaVideo || !containerRef.current) return;

    const targetEl = containerRef.current;
    const videoEl = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoEl) return;
          // Play only when user is in the row (intersecting with threshold)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Auto-play restrictions handled gracefully
              });
            }
          } else {
            // Automatically stop/pause when user scrolls down or out of the row
            videoEl.pause();
          }
        });
      },
      {
        root: null,
        threshold: [0, 0.2, 0.35, 0.6, 0.8],
      }
    );

    observer.observe(targetEl);

    return () => {
      observer.disconnect();
      if (videoEl) {
        videoEl.pause();
      }
    };
  }, [isMediaVideo]);

  const handleContainerClick = () => {
    if (onZoom) {
      onZoom();
    } else if (onClick) {
      onClick();
    }
  };

  if (mediaSrc) {
    return (
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className={`relative overflow-hidden bg-stone-900 ${aspectRatio} ${className} ${
          onZoom || onClick ? 'cursor-pointer group' : ''
        }`}
      >
        {isMediaVideo ? (
          <div className="relative w-full h-full flex items-center justify-center bg-stone-950 overflow-hidden">
            {/* Ambient blurred backdrop for seamless fit */}
            <video
              src={mediaSrc}
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none select-none"
              aria-hidden="true"
            />
            {/* Full uncropped video fitting cleanly into the grid */}
            <video
              ref={videoRef}
              src={mediaSrc}
              muted
              loop
              playsInline
              className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
            {/* Video label tag */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-xs backdrop-blur-xs pointer-events-none">
              <Play className="w-3 h-3 fill-white" />
              <span>{language === 'mr' ? 'व्हिडिओ' : 'Video'}</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-stone-950 overflow-hidden">
            {/* Ambient blurred backdrop so letterboxing is soft and coherent with the photo */}
            <img
              src={mediaSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none select-none"
            />
            {/* Full uncropped photo fitting cleanly into the grid without cropping */}
            <img
              src={mediaSrc}
              alt={altText}
              className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Zoom button */}
        {onZoom && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onZoom();
            }}
            className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900/80 hover:bg-stone-950 text-white text-xs font-semibold shadow-lg backdrop-blur-xs transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            title={language === 'mr' ? 'पूर्ण स्क्रीन झूम करा' : 'Zoom full screen'}
            aria-label={language === 'mr' ? 'पूर्ण स्क्रीन झूम करा' : 'Zoom full screen'}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{language === 'mr' ? 'झूम' : 'Zoom'}</span>
          </button>
        )}
      </div>
    );
  }

  // Elegant, subtle placeholder matching website design system
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-100/90 border border-stone-200/90 flex flex-col items-center justify-center p-6 text-center select-none ${aspectRatio} ${className} ${
        onClick ? 'cursor-pointer hover:border-amber-300 transition-colors' : ''
      }`}
    >
      {/* Decorative subtle background pattern rings */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/80 border border-stone-200/70 shadow-2xs flex items-center justify-center text-stone-400 mb-2.5 group-hover:text-amber-700 transition-colors">
        <Camera className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
      </div>

      <p className="text-xs font-semibold text-stone-500 tracking-tight">
        {language === 'mr' ? 'छायाचित्र लवकरच जोडले जाईल' : 'Event photograph to be added'}
      </p>
      <span className="text-[10px] text-stone-400 mt-0.5">
        {language === 'mr' ? 'शालेय गॅलरी संकलन' : 'School Archive'}
      </span>
    </div>
  );
};
