import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Navigation,
  Sliders,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenAdmission: () => void;
  onOpenDonate: () => void;
  onOpenAdminModal: () => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenAdmission,
  onOpenDonate,
  onOpenAdminModal,
  onOpenAccessibility,
}) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#053B2F] text-stone-200 pt-14 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: About Us */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              {language === 'mr'
                ? 'श्री साई सेवा निवासी मतिमंद विद्यालय हे विशेष गरजा असलेल्या मुलांना सुरक्षित, सर्वसमावेशक आणि प्रेमळ वातावरणात गुणवत्तापूर्ण शिक्षण, पुनर्वसन आणि स्वावलंबनाच्या संधी देण्यासाठी समर्पित आहे.'
                : 'Shree Sai Seva Niwasi Matimand School is dedicated to providing quality education, care and opportunities to children with special needs in a safe and inclusive environment.'}
            </p>

            {/* Authentic Social Media Brand Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook Official Icon */}
              <a
                href="https://www.facebook.com/share/1BuJxyNLpw/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
                  <circle cx="18" cy="18" r="18" fill="#1877F2" />
                  <path
                    d="M22.68 18.97l.64-4.2h-4.03v-2.73c0-1.15.56-2.28 2.38-2.28h1.84V6.18c-1.13-.18-2.26-.27-3.41-.26-3.48 0-5.75 2.11-5.75 5.94v3.06h-3.69v4.2h3.69V30.3c.75.12 1.51.18 2.28.18s1.53-.06 2.28-.18V18.97h3.76z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

              {/* Instagram Official Icon */}
              <a
                href="https://www.instagram.com/shreesaiseva12345?obrf=MWNndWYyeWdvNWlwbQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <defs>
                    <radialGradient id="ig-radial" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <circle cx="18" cy="18" r="18" fill="url(#ig-radial)" />
                  <g fill="#FFFFFF">
                    <path d="M18 11.2c2.21 0 2.47.01 3.35.05.81.04 1.25.17 1.54.28.39.15.67.33.96.62.29.29.47.57.62.96.11.29.24.73.28 1.54.04.88.05 1.14.05 3.35s-.01 2.47-.05 3.35c-.04.81-.17 1.25-.28 1.54a2.58 2.58 0 01-.62.96c-.29.29-.57.47-.96.62-.29.11-.73.24-1.54.28-.88.04-1.14.05-3.35.05s-2.47-.01-3.35-.05c-.81-.04-1.25-.17-1.54-.28a2.58 2.58 0 01-.96-.62 2.58 2.58 0 01-.62-.96c-.11-.29-.24-.73-.28-1.54C11.21 20.47 11.2 20.21 11.2 18s.01-2.47.05-3.35c.04-.81.17-1.25.28-1.54.15-.39.33-.67.62-.96.29-.29.57-.47.96-.62.29-.11.73-.24 1.54-.28.88-.04 1.14-.05 3.35-.05m0-1.8c-2.25 0-2.53.01-3.41.05-.88.04-1.48.18-2 .38a4.38 4.38 0 00-1.58 1.03c-.5.5-.83 1.05-1.03 1.58-.2.52-.34 1.12-.38 2-.04.88-.05 1.16-.05 3.41s.01 2.53.05 3.41c.04.88.18 1.48.38 2 .2.53.53 1.08 1.03 1.58.5.5 1.05.83 1.58 1.03.52.2 1.12.34 2 .38.88.04 1.16.05 3.41.05s2.53-.01 3.41-.05c.88-.04 1.48-.18 2-.38.53-.2 1.08-.53 1.58-1.03.5-.5.83-1.05 1.03-1.58.2-.52.34-1.12.38-2 .04-.88.05-1.16.05-3.41s-.01-2.53-.05-3.41c-.04-.88-.18-1.48-.38-2a4.38 4.38 0 00-1.03-1.58 4.38 4.38 0 00-1.58-1.03c-.52-.2-1.12-.34-2-.38-.88-.04-1.16-.05-3.41-.05z" />
                    <path d="M18 14.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4z" />
                    <circle cx="22.2" cy="13.8" r="0.9" />
                  </g>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/918380041500"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <img
                  src="/image3.avif"
                  alt="WhatsApp"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'mr' ? 'महत्त्वाचे दुवे' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'शैक्षणिक अभ्यासक्रम' : 'Our Programs'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'निवासी वसतिगृह' : 'Residential Facilities'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'प्रवेश प्रक्रिया' : 'Admissions'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'छायाचित्रे' : 'Gallery'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('achievements')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'यश व गौरव' : 'Achievements'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'mr' ? 'साहाय्य व मदत' : 'Support'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  id="footer-donate-btn"
                  onClick={onOpenDonate}
                  className="relative hover:text-amber-300 transition-colors inline-flex items-center text-amber-200 font-semibold text-left group"
                >
                  <Heart className="w-3 h-3 text-orange-400 fill-orange-400 shrink-0 absolute -left-4 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform" />
                  <span>{language === 'mr' ? 'देणगी / साहाय्य' : 'Support Us / Donate'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">
                  {language === 'mr' ? 'संपर्क साधा' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'mr' ? 'संपर्क माहिती' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${schoolInfo.phonePlaceholder || '+918380041500'}`} className="hover:text-white font-medium">
                  {schoolInfo.phonePlaceholder || '+91 8380041500'}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${schoolInfo.emailPlaceholder || 'shreesaiseva.shivane.pune@gmail.com'}`} className="hover:text-white truncate">
                  {schoolInfo.emailPlaceholder || 'shreesaiseva.shivane.pune@gmail.com'}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Sai Seva Niwasi Matimand School, Dangat Industrial Estate, Shivane, Pune - 411023
                </p>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sai+Seva+Niwasi+Matimand+School+Dangat+Industrial+Estate+Shivane+Pune+411023"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#053B2F] font-bold text-xs hover:bg-emerald-50 transition-all shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#053B2F]" />
                  <span>{language === 'mr' ? 'नकाशा मार्ग पहा' : 'Get Directions'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300/80">
          <p>
            © {new Date().getFullYear()} Sai Seva Niwasi Matimand School. {language === 'mr' ? 'सर्व हक्क राखीव.' : 'All Rights Reserved.'}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-white underline transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-emerald-700">|</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-white underline transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

