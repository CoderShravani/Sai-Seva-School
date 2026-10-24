import React from 'react';
import {
  Calendar,
  Users,
  Home,
  Award,
  BookOpen,
  Palette
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

export const QuickStats: React.FC = () => {
  const { language } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const stats = [
    {
      icon: Calendar,
      number: schoolInfo.stats.yearsOfService || '16+',
      label: language === 'mr' ? 'वर्षे समर्पित सेवा' : 'Years of Service',
      circleBg: 'bg-[#E8F5E9]',
      iconColor: 'text-[#2E7D32]',
    },
    {
      icon: Users,
      number: schoolInfo.stats.studentsSupported || '100+',
      label: language === 'mr' ? 'विद्यार्थी सक्षमीकरण' : 'Students Supported',
      circleBg: 'bg-[#FFF3E0]',
      iconColor: 'text-[#E65100]',
    },
    {
      icon: Home,
      number: language === 'mr' ? '२४/७' : '24/7',
      label: language === 'mr' ? 'निवासी वसतिगृह' : 'Residential Facility',
      circleBg: 'bg-[#E1F5FE]',
      iconColor: 'text-[#0277BD]',
    },
    {
      icon: Award,
      number: schoolInfo.stats.staffMembers || '17',
      label: language === 'mr' ? 'प्रशिक्षित शिक्षक व कर्मचारी' : 'Trained Staff',
      circleBg: 'bg-[#F3E5F5]',
      iconColor: 'text-[#7B1FA2]',
    },
    {
      icon: BookOpen,
      number: '14+',
      label: language === 'mr' ? 'विशेष शैक्षणिक वर्ग' : 'Educational Programs',
      circleBg: 'bg-[#FCE4EC]',
      iconColor: 'text-[#C2185B]',
    },
    {
      icon: Palette,
      number: '25+',
      label: language === 'mr' ? 'हस्तकला व कला उपक्रम' : 'Co-curricular Activities',
      circleBg: 'bg-[#E0F2F1]',
      iconColor: 'text-[#00695C]',
    },
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-200/80 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-stone-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-2 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
            >
              {/* Pastel Icon Circle Badge */}
              <div className={`w-12 h-12 rounded-full ${stat.circleBg} flex items-center justify-center mb-3 shadow-xs`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>

              {/* Number / Value */}
              <p className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-none">
                {stat.number}
              </p>

              {/* Label */}
              <p className="text-xs font-semibold text-stone-600 mt-1.5 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

