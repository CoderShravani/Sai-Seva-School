import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:ring-2 focus:ring-amber-500"
          aria-label="Close full view"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-16/10 sm:aspect-16/9 bg-black flex items-center justify-center">
          {item.isVideo || item.imageUrl.endsWith('.mp4') || (item.videoUrl && item.videoUrl.length > 0) ? (
            <video
              src={item.videoUrl || item.imageUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={item.imageUrl}
              alt={language === 'mr' ? item.titleMr : item.titleEn}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-800">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {language === 'mr' ? item.titleMr : item.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
              {language === 'mr' ? item.captionMr : item.captionEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
