import React from 'react';
import {
  X,
  Type,
  SunMoon,
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  Eye,
  Sliders
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';

interface AccessibilityToolbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({ isOpen, onClose }) => {
  const {
    highContrast,
    textSize,
    dyslexicFont,
    reducedMotion,
    setTextSize,
    toggleHighContrast,
    toggleDyslexicFont,
    toggleReducedMotion,
    resetAccessibility,
    readAloud,
    stopReading,
    isSpeaking,
  } = useAccessibility();

  const { language, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const handleReadCurrentPage = () => {
    if (isSpeaking) {
      stopReading();
    } else {
      const mainContent = document.querySelector('main')?.innerText || document.body.innerText;
      const snippet = mainContent.substring(0, 800);
      readAloud(snippet);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-panel-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 w-full max-w-md p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2.5 text-amber-900">
            <Sliders className="w-5 h-5 text-amber-700" />
            <h2 id="accessibility-panel-heading" className="text-lg font-bold">
              {t('accessibilityTitle')}
            </h2>
          </div>
          <button
            id="close-a11y-panel-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-100 transition-colors"
            aria-label="Close accessibility options"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Text Size Scale */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
            <Type className="w-4 h-4 text-amber-700" />
            <span>{t('fontSize')}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              id="text-size-normal-btn"
              onClick={() => setTextSize('normal')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                textSize === 'normal'
                  ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              Default (100%)
            </button>
            <button
              id="text-size-large-btn"
              onClick={() => setTextSize('large')}
              className={`py-2 px-3 rounded-lg text-sm font-semibold border transition-all ${
                textSize === 'large'
                  ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              Large (115%)
            </button>
            <button
              id="text-size-larger-btn"
              onClick={() => setTextSize('larger')}
              className={`py-2 px-3 rounded-lg text-base font-bold border transition-all ${
                textSize === 'larger'
                  ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              Extra (125%)
            </button>
          </div>
        </div>

        {/* High Contrast Mode */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
          <div className="flex items-center gap-2.5">
            <SunMoon className="w-4 h-4 text-amber-700" />
            <div>
              <p className="text-xs font-bold text-stone-800">{t('highContrast')}</p>
              <p className="text-[11px] text-stone-500">
                {language === 'mr' ? 'काळ्या पार्श्वभूमीवर स्पष्ट पांढरे मजकूर' : 'Black & high contrast highlights'}
              </p>
            </div>
          </div>
          <button
            id="toggle-high-contrast-btn"
            onClick={toggleHighContrast}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
              highContrast ? 'bg-amber-700 justify-end' : 'bg-stone-300 justify-start'
            }`}
            aria-pressed={highContrast}
          >
            <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
          </button>
        </div>

        {/* Dyslexia-Friendly Font */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
          <div className="flex items-center gap-2.5">
            <Eye className="w-4 h-4 text-amber-700" />
            <div>
              <p className="text-xs font-bold text-stone-800">{t('dyslexicFont')}</p>
              <p className="text-[11px] text-stone-500">
                {language === 'mr' ? 'मोकळा व वाचायला सोपा फॉन्ट' : 'Generous letter spacing & weighted shapes'}
              </p>
            </div>
          </div>
          <button
            id="toggle-dyslexic-font-btn"
            onClick={toggleDyslexicFont}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
              dyslexicFont ? 'bg-amber-700 justify-end' : 'bg-stone-300 justify-start'
            }`}
            aria-pressed={dyslexicFont}
          >
            <span className="w-4 h-4 rounded-full bg-white shadow-md"></span>
          </button>
        </div>

        {/* Speech Reader (Text to Speech) */}
        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {isSpeaking ? (
              <Volume2 className="w-4 h-4 text-amber-800 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-amber-700" />
            )}
            <div>
              <p className="text-xs font-bold text-amber-950">
                {language === 'mr' ? 'मजकूर ऑडिओ वाचन' : 'Screen Reader Audio Guide'}
              </p>
              <p className="text-[11px] text-amber-800">
                {isSpeaking
                  ? (language === 'mr' ? 'आता वाचन चालू आहे...' : 'Reading aloud currently...')
                  : (language === 'mr' ? 'पृष्ठाचा मजकूर ऐका' : 'Listen to page summary')}
              </p>
            </div>
          </div>
          <button
            id="read-aloud-btn"
            onClick={handleReadCurrentPage}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
              isSpeaking
                ? 'bg-rose-600 text-white hover:bg-rose-700'
                : 'bg-amber-700 text-white hover:bg-amber-800'
            }`}
          >
            {isSpeaking ? (language === 'mr' ? 'थांबवा' : 'Stop') : (language === 'mr' ? 'वाचा' : 'Play')}
          </button>
        </div>

        {/* Reset and Close Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <button
            id="reset-a11y-settings-btn"
            onClick={resetAccessibility}
            className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('resetSettings')}</span>
          </button>
          <button
            id="apply-a11y-done-btn"
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-lg hover:bg-stone-800 shadow-xs"
          >
            {language === 'mr' ? 'लागू करा व बंद करा' : 'Apply & Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
