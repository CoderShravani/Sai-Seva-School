import React, { useState } from 'react';
import { X, Sparkles, Heart, CheckCircle2, Send, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    skillCategory: 'Teaching / Educational Activities',
    availability: 'Weekends (Saturday/Sunday)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send application to the backend to mail the school
    fetch('/api/volunteer-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error('Failed to submit volunteer enquiry:', err);
    });

    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-emerald-200" />
            <div>
              <h2 className="text-base sm:text-lg font-bold">{t('volunteerTitle')}</h2>
              <p className="text-[11px] text-emerald-100">{t('volunteerSub')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-600/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                {language === 'mr' ? 'स्वयंसेवक अर्ज प्राप्त झाला!' : 'Volunteer Application Received!'}
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                {language === 'mr'
                  ? 'मुलांच्या सेवेसाठी पुढे आल्याबद्दल मनःपूर्वक धन्यवाद. आमचे समन्वयक लवकरच आपल्याशी संपर्क साधतील.'
                  : 'Thank you for stepping forward to share your warmth and skills with our special children. Our coordinator will connect with you soon.'}
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 mt-2"
              >
                {language === 'mr' ? 'बंद करा' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  {language === 'mr' ? 'आपले पूर्ण नाव *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Patil"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'मोबाईल नंबर *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit phone"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    {language === 'mr' ? 'शहर / गाव' : 'City / Town'}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Kolhapur"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  {language === 'mr' ? 'कोणत्या क्षेत्रात मदत करू इच्छिता?' : 'Area of Interest / Skill'}
                </label>
                <select
                  value={formData.skillCategory}
                  onChange={(e) => setFormData({ ...formData, skillCategory: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                >
                  <option value="Teaching / Educational Activities">
                    {language === 'mr' ? 'शैक्षणिक साहाय्य व वाचन' : 'Teaching & Storytelling'}
                  </option>
                  <option value="Music, Art & Dance Therapy">
                    {language === 'mr' ? 'संगीत, चित्रकला व हस्तकला' : 'Music, Art & Craft'}
                  </option>
                  <option value="Sports & Outdoor Games">
                    {language === 'mr' ? 'मैदानी खेळ व व्यायाम' : 'Sports & Outdoor Play'}
                  </option>
                  <option value="Medical / Physiotherapy Support">
                    {language === 'mr' ? 'वैद्यकीय / फिजिओ सल्लागार' : 'Medical / Physiotherapy Support'}
                  </option>
                  <option value="Festival & Event Coordination">
                    {language === 'mr' ? 'सण व सांस्कृतिक नियोजन' : 'Festival & Event Celebration'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  {language === 'mr' ? 'कधी वेळ देऊ शकता?' : 'Availability'}
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white"
                >
                  <option value="Weekends (Saturday/Sunday)">
                    {language === 'mr' ? 'शनिवार व रविवार (Weekends)' : 'Weekends (Saturday/Sunday)'}
                  </option>
                  <option value="Weekdays (Monday to Friday)">
                    {language === 'mr' ? 'आठवड्याचे दिवस (Weekdays)' : 'Weekdays (Monday to Friday)'}
                  </option>
                  <option value="Monthly Special Events">
                    {language === 'mr' ? 'मासिक विशेष कार्यक्रमांना' : 'Monthly Special Occasions'}
                  </option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg font-medium text-stone-600 hover:bg-stone-100"
                >
                  {language === 'mr' ? 'रद्द करा' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg font-bold bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('volunteerBtn')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
