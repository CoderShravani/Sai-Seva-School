import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  CalendarCheck,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface ContactPageProps {
  onNavigateHome?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Schedule a Campus Visit',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send enquiry to the backend to mail the school
    fetch('/api/enquiry-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error('Failed to submit contact enquiry:', err);
    });

    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Contact Us"
        currentMr="संपर्क"
        onNavigateHome={onNavigateHome}
      />

      {/* HERO SECTION WITH contact.png AS BACKGROUND */}
      <section className="relative isolate min-h-[260px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md sm:min-h-[320px]">
        {/* Background image: 1 shade darker */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/contact.png"
            alt="Get in touch with us"
            className="h-full w-full object-cover object-center opacity-80"
          />
          {/* Subtle gradient wash: keeps the image vividly visible while ensuring Get in touch with us is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/25" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex min-h-[260px] flex-col justify-center px-6 py-8 sm:min-h-[320px] sm:px-10 md:max-w-xl lg:max-w-2xl lg:px-12">
          <span className="mb-2.5 inline-flex w-fit items-center rounded-full bg-amber-50/95 border border-amber-300/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 shadow-xs">
            {t('contact')}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            {t('contactTitle')}
          </h1>
          <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-stone-800 sm:text-base">
            {t('contactSub')}
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Contact Details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              {language === 'mr' ? 'शाळा पत्ता व संपर्क केंद्र' : 'Institutional Campus Location'}
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-stone-900">{language === 'mr' ? 'पत्ता' : 'Campus Address'}</p>
                <p className="leading-relaxed font-medium text-stone-800">
                  Sai Seva Niwasi Matimand School, Dangat Industrial Estate, Shivane, Pune - 411023, Maharashtra, India
                </p>
                <div className="pt-1.5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sai+Seva+Niwasi+Matimand+School+Dangat+Industrial+Estate+Shivane+Pune+411023"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>{language === 'mr' ? 'गुगल मॅपवर दिशा मार्ग पहा (Google Maps)' : 'View Directions on Google Maps'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-stone-900">{language === 'mr' ? 'मोबाईल क्रमांक' : 'Mobile Number'}</p>
                <p>
                  <a href={`tel:${schoolInfo.phonePlaceholder}`} className="hover:underline font-semibold text-amber-900 text-sm">
                    {schoolInfo.phonePlaceholder}
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-stone-900">{language === 'mr' ? 'ईमेल' : 'Official Email'}</p>
                <a href={`mailto:${schoolInfo.emailPlaceholder}`} className="hover:underline text-amber-900">
                  {schoolInfo.emailPlaceholder}
                </a>
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-stone-900">{language === 'mr' ? 'भेट व कार्यालय वेळ' : 'Visiting & Office Hours'}</p>
                <p>{language === 'mr' ? schoolInfo.officeHoursMr : schoolInfo.officeHoursEn}</p>
                <p className="text-[10px] text-amber-800 pt-0.5 font-medium">
                  {language === 'mr' ? 'पालक भेट: रविवारी व पूर्वपरवानगीने' : 'Parent visits welcome with prior appointment'}
                </p>
              </div>
            </div>
          </div>

          {/* Location / Campus Map Simulation Card */}
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <Building className="w-4 h-4 text-emerald-800" />
                <span>{language === 'mr' ? 'शाळेत कसे यावे? (Google Map)' : 'How to Reach & Location Map'}</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sai+Seva+Niwasi+Matimand+School+Dangat+Industrial+Estate+Shivane+Pune+411023"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-900"
              >
                <span>{language === 'mr' ? 'मोठ्या नकाशात उघडा' : 'Open in Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-48 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 relative shadow-inner">
              <iframe
                title="Sai Seva Niwasi Matimand School Location"
                src="https://maps.google.com/maps?q=Dangat+Industrial+Estate,+Shivane,+Pune+411023&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="text-stone-700 leading-relaxed text-[11px]">
              {language === 'mr'
                ? 'शाळा दांगट इंडस्ट्रियल इस्टेट, शिवणे, पुणे (NDA / सिंहगड रोड जवळील परिसर) येथे वसलेली आहे. पुणे स्वारगेट व कात्रज येथून पीएमपीएमएल (PMPML) बस व रिक्षा सेवा उपलब्ध आहे.'
                : 'The campus is located at Dangat Industrial Estate, Shivane, Pune (accessible via NDA / Sinhagad Road corridors). Easily reachable by public transport and city transit.'}
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Send Message / Visit Request Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3 mb-5">
            {language === 'mr' ? 'संदेश पाठवा किंवा भेट निश्चित करा' : 'Send an Enquiry or Request a Campus Visit'}
          </h2>

          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                {language === 'mr' ? 'आपला संदेश प्राप्त झाला!' : 'Thank You! Message Successfully Received.'}
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                {language === 'mr'
                  ? 'आपल्या संदेशासाठी धन्यवाद. आमचे कार्यालय प्रतिनिधी लवकरच आपल्याशी फोन किंवा ईमेलद्वारे संपर्क साधतील.'
                  : 'We have received your enquiry. Our school coordinator will reach out to you within 24 hours.'}
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', subject: 'Schedule a Campus Visit', message: '' });
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white"
              >
                {language === 'mr' ? 'नवीन संदेश पाठवा' : 'Send Another Note'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'आपले नाव *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Shinde"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'मोबाईल नंबर *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'ईमेल पत्ता' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'विषय' : 'Subject'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value="Schedule a Campus Visit">
                      {language === 'mr' ? 'शाळा व वसतिगृह भेट' : 'Schedule a Campus Visit'}
                    </option>
                    <option value="Admission Enquiry">
                      {language === 'mr' ? 'नवीन प्रवेश चौकशी' : 'Admission Enquiry'}
                    </option>
                    <option value="Donation & Sponsorship">
                      {language === 'mr' ? 'देणगी व अन्नदान मदत' : 'Donation & Meal Sponsorship'}
                    </option>
                    <option value="Volunteer Opportunity">
                      {language === 'mr' ? 'स्वयंसेवक सहभाग' : 'Volunteer Opportunity'}
                    </option>
                    <option value="Other Query">
                      {language === 'mr' ? 'इतर माहिती' : 'Other Query'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  {language === 'mr' ? 'आपला संदेश / प्रश्न *' : 'Your Message / Inquiry Details *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'mr' ? 'कृपया आपला प्रश्न येथे सविस्तर लिहा...' : 'Please describe your inquiry, child’s approximate age, or specific guidance needed...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-700 text-white font-bold text-xs hover:bg-amber-800 shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'संदेश पाठवा' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
