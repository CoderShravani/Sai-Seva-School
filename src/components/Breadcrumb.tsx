import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface BreadcrumbProps {
  currentEn: string;
  currentMr: string;
  onNavigateHome?: () => void;
  intermediate?: {
    labelEn: string;
    labelMr: string;
    onClick: () => void;
  };
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentEn,
  currentMr,
  onNavigateHome,
  intermediate,
}) => {
  const { language } = useLanguage();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.reload();
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs sm:text-sm text-stone-500"
    >
      <a
        href="/"
        onClick={handleHomeClick}
        className="hover:text-[#0B4D3C] transition-colors font-medium flex items-center gap-1 cursor-pointer"
      >
        {language === 'mr' ? 'मुखपृष्ठ' : 'Home'}
      </a>
      {intermediate && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <button
            type="button"
            onClick={intermediate.onClick}
            className="hover:text-[#0B4D3C] transition-colors font-medium cursor-pointer"
          >
            {language === 'mr' ? intermediate.labelMr : intermediate.labelEn}
          </button>
        </>
      )}
      <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
      <span className="font-bold text-[#0B4D3C] bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200/60">
        {language === 'mr' ? currentMr : currentEn}
      </span>
    </motion.nav>
  );
};
