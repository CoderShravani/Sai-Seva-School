import React, { useState } from 'react';
import {
  Globe,
  Phone,
  Sun,
  ChevronDown,
  Menu,
  X,
  Heart,
  GraduationCap,
  Building,
  Users,
  Image as ImageIcon,
  Trophy,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdmission: () => void;
  onOpenDonate: () => void;
  onOpenAccessibility: () => void;
  onOpenAdminModal: () => void;
  onSelectProgram?: (programId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdmission,
  onOpenDonate,
  onOpenAccessibility,
  onOpenAdminModal,
  onSelectProgram,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      {/* 1. TOP UTILITY BAR (Deep Green #0B4D3C) */}
      <div className="bg-[#0B4D3C] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#083a2d]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Language Selection */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                id="topbar-lang-dropdown-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-medium text-emerald-100 hover:text-white transition-colors"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-300" />
                <span>{language === 'mr' ? 'मराठी' : 'English'}</span>
                <ChevronDown className="w-3 h-3 text-emerald-300" />
              </button>

              {langDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-32 bg-white text-stone-900 rounded-lg shadow-lg border border-stone-200 py-1 z-50 animate-in fade-in">
                  <button
                    id="lang-select-en"
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      language === 'en' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-50'
                    }`}
                  >
                    <span>English</span>
                    {language === 'en' && <span className="text-emerald-700">✓</span>}
                  </button>
                  <button
                    id="lang-select-mr"
                    onClick={() => {
                      setLanguage('mr');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      language === 'mr' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-50'
                    }`}
                  >
                    <span>मराठी</span>
                    {language === 'mr' && <span className="text-emerald-700">✓</span>}
                  </button>
                </div>
              )}
            </div>

            <span className="text-emerald-500/60 hidden sm:inline">|</span>
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="text-emerald-200 hover:text-white font-medium text-[11px] hidden sm:inline"
            >
              {language === 'en' ? 'मराठी' : 'English'}
            </button>
          </div>

          {/* Right: Empty spacer or clean topbar */}
          <div></div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* School Brand & Emblem */}
          <button
            id="main-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-hidden"
          >
            {/* School Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-xs border border-emerald-900/10 shrink-0 flex items-center justify-center p-0.5">
              <img
                src="/school_logo.jpg"
                alt="Shree Sai Seva School Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm sm:text-base md:text-lg font-black tracking-tight sm:tracking-wide text-[#0B4D3C] uppercase leading-tight font-serif">
                  SHREE SAI SEVA
                </h1>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-stone-800 tracking-wide uppercase leading-tight">
                NIWASI MATIMAND SCHOOL
              </p>
              <p className="text-[9.5px] sm:text-[10px] text-orange-600 font-semibold tracking-wide mt-0.5 flex items-center gap-1.5 leading-none">
                <span>Care</span>
                <span className="w-1 h-1 rounded-full bg-orange-500 inline-block"></span>
                <span>Education</span>
                <span className="w-1 h-1 rounded-full bg-orange-500 inline-block"></span>
                <span>Independence</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'home'
                  ? 'text-[#0B4D3C] font-bold'
                  : 'text-stone-700 hover:text-[#0B4D3C]'
              }`}
            >
              <span>{t('home')}</span>
              {activeTab === 'home' && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B4D3C] rounded-full"></span>
              )}
            </button>

            <button
              id="nav-about"
              onClick={() => handleNavClick('about')}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'about'
                  ? 'text-[#0B4D3C] font-bold'
                  : 'text-stone-700 hover:text-[#0B4D3C]'
              }`}
            >
              <span>{t('about')}</span>
              {activeTab === 'about' && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B4D3C] rounded-full"></span>
              )}
            </button>

            {/* Our Programs Dropdown */}
            <div className="relative group">
              <button
                id="nav-programs-dropdown"
                onClick={() => handleNavClick('programs')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                  activeTab === 'programs'
                    ? 'text-[#0B4D3C] font-bold'
                    : 'text-stone-700 hover:text-[#0B4D3C]'
                }`}
              >
                <span>{t('programs')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#0B4D3C] transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-xl border border-stone-200/80 p-2 hidden group-hover:block transition-all z-50">
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('academic');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '१. विशेष शैक्षणिक वर्ग व दीक्षा अभ्यासक्रम' : '1. Academic Education & Diksha Coursework'}
                </button>
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('therapy');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '२. उपचार, वाणी व संवेदी पुनर्वसन' : '2. Therapeutic and Speech Support'}
                </button>
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('lifeskills');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '३. जीवन कौशल्य व स्वावलंबन' : '3. Life Skills Training'}
                </button>
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('vocational');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '४. पूर्व-व्यावसायिक प्रशिक्षण' : '4. Pre-Vocational Training'}
                </button>
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('cocurricular');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '५. कला, क्रीडा व उपक्रम' : '5. Co-curricular Activities'}
                </button>
                <button
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram('counselling');
                    else handleNavClick('programs');
                    setProgramsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors"
                >
                  {language === 'mr' ? '६. समुपदेशन व मानसिक आधार' : '6. Counselling & Care'}
                </button>
              </div>
            </div>

            <button
              id="nav-facilities"
              onClick={() => handleNavClick('facilities')}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'facilities'
                  ? 'text-[#0B4D3C] font-bold'
                  : 'text-stone-700 hover:text-[#0B4D3C]'
              }`}
            >
              <span>{t('facilities')}</span>
              {activeTab === 'facilities' && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B4D3C] rounded-full"></span>
              )}
            </button>

            <button
              id="nav-admissions"
              onClick={() => handleNavClick('admissions')}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'admissions'
                  ? 'text-[#0B4D3C] font-bold'
                  : 'text-stone-700 hover:text-[#0B4D3C]'
              }`}
            >
              <span>{t('admissions')}</span>
              {activeTab === 'admissions' && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B4D3C] rounded-full"></span>
              )}
            </button>

            {/* More ⌄ Dropdown */}
            <div className="relative group">
              <button
                id="nav-more-dropdown"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                  ['gallery', 'achievements', 'donate', 'faq'].includes(activeTab)
                    ? 'text-[#0B4D3C] font-bold'
                    : 'text-stone-700 hover:text-[#0B4D3C]'
                }`}
              >
                <span>{language === 'mr' ? 'अधिक' : 'More'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#0B4D3C] transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-xl shadow-xl border border-stone-200/80 p-2 hidden group-hover:block transition-all z-50">
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors flex items-center gap-2"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t('gallery')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('achievements')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors flex items-center gap-2"
                >
                  <Trophy className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t('achievements')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('donate')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors flex items-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-600" />
                  <span>{t('donate')}</span>
                </button>
                <button
                  onClick={() => handleNavClick('faq')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-stone-800 hover:bg-emerald-50 hover:text-[#0B4D3C] transition-colors flex items-center gap-2"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t('faq')}</span>
                </button>
              </div>
            </div>

            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact')}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'contact'
                  ? 'text-[#0B4D3C] font-bold'
                  : 'text-stone-700 hover:text-[#0B4D3C]'
              }`}
            >
              <span>{t('contact')}</span>
              {activeTab === 'contact' && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B4D3C] rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Right Action: Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Hamburger Button */}
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 border border-stone-200 shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-stone-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#057a55] text-white text-center shadow-xs"
            >
              {language === 'mr' ? 'प्रवेश चौकशी' : 'Admission Enquiry'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#EA580C] text-white text-center shadow-xs"
            >
              {t('donate')}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {[
              { id: 'home', label: t('home'), icon: Building },
              { id: 'about', label: t('about'), icon: Users },
              { id: 'programs', label: t('programs'), icon: BookOpen },
              { id: 'facilities', label: t('facilities'), icon: Heart },
              { id: 'admissions', label: t('admissions'), icon: GraduationCap },
              { id: 'gallery', label: t('gallery'), icon: ImageIcon },
              { id: 'achievements', label: t('achievements'), icon: Trophy },
              { id: 'faq', label: t('faq'), icon: HelpCircle },
              { id: 'contact', label: t('contact'), icon: Phone },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-[#0B4D3C] font-bold border border-emerald-200'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <item.icon className="w-4 h-4 text-[#0B4D3C]" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

