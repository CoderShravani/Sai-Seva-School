import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Heart,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS_DATA } from '../data/schoolData';
import { TestimonialItem } from '../types';

export const TestimonialCarousel: React.FC = () => {
  const { language } = useLanguage();
  const testimonials = TESTIMONIALS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-play timer (advances automatically every 7 seconds)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentIndex]);

  const currentItem: TestimonialItem = testimonials[currentIndex];

  // Helper to get initials from parent name
  const getInitials = (name?: string) => {
    if (!name) return 'P';
    const parts = name.split('&')[0].trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  };

  return (
    <section
      id="parent-testimonials-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={language === 'mr' ? 'पालकांचे मनोगत व अनुभव' : 'Parent & Guardian Testimonials'}
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-600" />
          <span>
            {language === 'mr' ? 'पालक व कुटुंबियांचे मनोगत' : 'Parent & Guardian Reflections'}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4D3C] tracking-tight">
          {language === 'mr' ? 'पालक काय म्हणतात?' : 'Words of Trust & Gratitude'}
        </h2>
        <div className="w-14 h-1 bg-[#2E7D32] mx-auto rounded-full"></div>
        <p className="text-xs sm:text-sm text-stone-600 pt-1">
          {language === 'mr'
            ? 'शाळेतील प्रेमळ वातावरण, प्रगती आणि सुरक्षिततेविषयी पालकांनी व्यक्त केलेले मनोगत'
            : 'Heartfelt experiences shared by families whose children learn, grow, and reside with us'}
        </p>
      </div>

      {/* Main Carousel Container */}
      <div className="relative bg-gradient-to-br from-stone-50 via-emerald-50/20 to-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <Quote className="absolute top-6 right-8 w-24 h-24 sm:w-32 sm:h-32 text-emerald-900/[0.04] pointer-events-none" />

        {/* Left (Previous) Navigation Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={language === 'mr' ? 'मागील मनोगत' : 'Previous review'}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 text-stone-700 hover:text-[#0B4D3C] hover:bg-emerald-50 border border-stone-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right (Next) Navigation Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label={language === 'mr' ? 'पुढील मनोगत' : 'Next review'}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 text-stone-700 hover:text-[#0B4D3C] hover:bg-emerald-50 border border-stone-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Content with AnimatePresence */}
        <div className="relative px-6 sm:px-12 lg:px-14 min-h-[260px] sm:min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: direction === 'right' ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'right' ? -30 : 30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Top Meta Bar: Rating & Year */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-stone-700 ml-1">
                    5.0 / 5.0
                  </span>
                </div>

                {currentItem.batchOrYear && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium">
                    <Calendar className="w-3 h-3" />
                    <span>{currentItem.batchOrYear}</span>
                  </div>
                )}
              </div>

              {/* The Testimonial Quote */}
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-stone-800 leading-relaxed italic font-serif">
                {language === 'mr' ? currentItem.quoteMr : currentItem.quoteEn}
              </blockquote>

              {/* Author & Student Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B4D3C] to-[#14634f] text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-sm shrink-0">
                    {getInitials(language === 'mr' ? currentItem.parentNameMr : currentItem.parentNameEn)}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-x-2">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                        {language === 'mr' ? currentItem.parentNameMr : currentItem.parentNameEn}
                      </h4>
                      {currentItem.childInfoEn && (
                        <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {language === 'mr' ? currentItem.childInfoMr : currentItem.childInfoEn}
                        </span>
                      )}
                    </div>
                    {currentItem.authorRelationshipEn && (
                      <p className="text-xs text-stone-600 font-medium">
                        {language === 'mr' ? currentItem.authorRelationshipMr : currentItem.authorRelationshipEn}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location Tag */}
                <div className="flex items-center gap-1.5 text-xs text-stone-500 self-start sm:self-center bg-white px-3 py-1.5 rounded-xl border border-stone-200/80 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="font-medium">
                    {language === 'mr' ? currentItem.locationMr : currentItem.locationEn}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
