import React, { createContext, useContext, useState, useEffect } from 'react';
import { AccessibilitySettings, TextSize } from '../types';

interface AccessibilityContextType extends AccessibilitySettings {
  setTextSize: (size: TextSize) => void;
  toggleHighContrast: () => void;
  toggleDyslexicFont: () => void;
  toggleReducedMotion: () => void;
  resetAccessibility: () => void;
  readAloud: (text: string) => void;
  stopReading: () => void;
  isSpeaking: boolean;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  textSize: 'normal',
  dyslexicFont: false,
  reducedMotion: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('school_a11y');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultSettings;
  });

  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('school_a11y', JSON.stringify(settings));
    } catch {
      // fallback
    }

    const root = document.documentElement;
    const body = document.body;

    // Apply high contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('text-size-large', 'text-size-larger');
    if (settings.textSize === 'large') {
      root.style.fontSize = '18px';
    } else if (settings.textSize === 'larger') {
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }

    // Apply dyslexic font
    if (settings.dyslexicFont) {
      body.classList.add('font-dyslexic');
    } else {
      body.classList.remove('font-dyslexic');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('motion-reduce');
    } else {
      root.classList.remove('motion-reduce');
    }
  }, [settings]);

  const setTextSize = (size: TextSize) => {
    setSettings((prev) => ({ ...prev, textSize: size }));
  };

  const toggleHighContrast = () => {
    setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleDyslexicFont = () => {
    setSettings((prev) => ({ ...prev, dyslexicFont: !prev.dyslexicFont }));
  };

  const toggleReducedMotion = () => {
    setSettings((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const resetAccessibility = () => {
    setSettings(defaultSettings);
    stopReading();
  };

  const readAloud = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setTextSize,
        toggleHighContrast,
        toggleDyslexicFont,
        toggleReducedMotion,
        resetAccessibility,
        readAloud,
        stopReading,
        isSpeaking,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
