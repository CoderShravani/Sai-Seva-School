import React, { useState } from 'react';
import {
  X,
  Heart,
  Copy,
  Check,
  QrCode,
  Building,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  BookOpen,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<number | 'custom'>(3000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [purpose, setPurpose] = useState('Annadanam (Day Meal)');
  const [isPledged, setIsPledged] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPledged(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 w-full max-w-2xl my-6 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-700 via-rose-800 to-amber-900 text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Heart className="w-5 h-5 fill-rose-300 text-rose-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-200">
                {language === 'mr' ? 'सेवा व दातृत्व' : 'Empowering Lives'}
              </span>
              <h2 className="text-lg sm:text-xl font-bold">
                {t('supportTitle')}
              </h2>
            </div>
          </div>
          <button
            id="close-donation-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close donation dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Donation Cause Options */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              {language === 'mr' ? 'सेवा प्रकार निवडा' : 'Select Sponsorship Purpose'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedTier(3000);
                  setPurpose('Annadanam (Day Meal)');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTier === 3000
                    ? 'border-rose-600 bg-rose-50/70 shadow-xs ring-1 ring-rose-500'
                    : 'border-stone-200 hover:border-rose-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <UtensilsCrossed className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-rose-700">₹3,000</span>
                </div>
                <p className="text-xs font-bold text-stone-900 mt-2">
                  {language === 'mr' ? 'अन्नछत्र (१ दिवस)' : '1-Day Meals'}
                </p>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {language === 'mr' ? 'सर्व निवासी मुलांसाठी भोजन' : 'Breakfast, lunch & dinner'}
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedTier(1500);
                  setPurpose('Educational & Sensory Kit');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTier === 1500
                    ? 'border-rose-600 bg-rose-50/70 shadow-xs ring-1 ring-rose-500'
                    : 'border-stone-200 hover:border-rose-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-amber-800">₹1,500</span>
                </div>
                <p className="text-xs font-bold text-stone-900 mt-2">
                  {language === 'mr' ? 'शैक्षणिक साहित्य' : 'Learning Kit'}
                </p>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {language === 'mr' ? 'संवेदी खेळणी व हस्तकला' : 'Sensory aids & craft kit'}
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedTier(5000);
                  setPurpose('Monthly Student Care');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTier === 5000
                    ? 'border-rose-600 bg-rose-50/70 shadow-xs ring-1 ring-rose-500'
                    : 'border-stone-200 hover:border-rose-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-emerald-800">₹5,000</span>
                </div>
                <p className="text-xs font-bold text-stone-900 mt-2">
                  {language === 'mr' ? '१ महिन्याचे पालकत्व' : 'Monthly Care'}
                </p>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {language === 'mr' ? 'निवास, पोषण व शिक्षण' : 'Hostel, food & education'}
                </p>
              </button>
            </div>
          </div>

          {/* Bank Transfer Details Section */}
          <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-800" />
                <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                  {t('bankDetailsTitle')}
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                NEFT / RTGS / IMPS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-amber-200/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">{t('accountName')}</p>
                  <p className="font-bold text-stone-900">{schoolInfo.bankDetails.accountNamePlaceholder}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(schoolInfo.bankDetails.accountNamePlaceholder, 'accName')}
                  className="p-1.5 rounded-md hover:bg-stone-100 text-stone-600"
                  title="Copy"
                >
                  {copiedField === 'accName' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-amber-200/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">{t('bankName')}</p>
                  <p className="font-bold text-stone-900">{schoolInfo.bankDetails.bankNamePlaceholder}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(schoolInfo.bankDetails.bankNamePlaceholder, 'bankName')}
                  className="p-1.5 rounded-md hover:bg-stone-100 text-stone-600"
                >
                  {copiedField === 'bankName' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-amber-200/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">{t('accountNumber')}</p>
                  <p className="font-bold text-stone-900">{schoolInfo.bankDetails.accountNumberPlaceholder}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(schoolInfo.bankDetails.accountNumberPlaceholder, 'accNum')}
                  className="p-1.5 rounded-md hover:bg-stone-100 text-stone-600"
                >
                  {copiedField === 'accNum' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-amber-200/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">{t('ifscCode')}</p>
                  <p className="font-bold text-stone-900">{schoolInfo.bankDetails.ifscPlaceholder}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(schoolInfo.bankDetails.ifscPlaceholder, 'ifsc')}
                  className="p-1.5 rounded-md hover:bg-stone-100 text-stone-600"
                >
                  {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* UPI ID Row */}
            <div className="p-2.5 bg-white rounded-lg border border-amber-200/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-purple-700" />
                <div>
                  <p className="text-[10px] text-stone-500 font-medium">{t('upiId')}</p>
                  <p className="font-bold text-purple-900">{schoolInfo.bankDetails.upiIdPlaceholder}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(schoolInfo.bankDetails.upiIdPlaceholder, 'upi')}
                className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-800 text-[11px] font-bold border border-purple-200 hover:bg-purple-100"
              >
                {copiedField === 'upi' ? t('copiedText') : t('copyBtn')}
              </button>
            </div>
          </div>

          {/* Notify School for Receipt / 80G Acknowledgment */}
          {isPledged ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-1">
              <p className="text-xs font-bold">
                {language === 'mr' ? 'आपल्या दातृत्वाबद्दल मनःपूर्वक धन्यवाद!' : 'Heartfelt Thanks for Your Contribution!'}
              </p>
              <p className="text-[11px] text-emerald-800">
                {language === 'mr'
                  ? 'बँक हस्तांतरण पूर्ण झाल्यावर आपल्या व्हॉट्सॲप / ईमेलवर अधिकृत पावती पाठवली जाईल.'
                  : 'Once your bank transfer is verified, our accounts desk will dispatch the official donation receipt.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handlePledgeSubmit} className="space-y-3 pt-1 border-t border-stone-100">
              <p className="text-xs font-bold text-stone-800">
                {language === 'mr' ? 'पावती व कर सवलतीसाठी माहिती नोंदवा' : 'Request Official Receipt (80G Tax Exemption)'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder={language === 'mr' ? 'आपले नाव / संस्थेचे नाव *' : 'Donor Name / Organization *'}
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-stone-300"
                />
                <input
                  type="tel"
                  required
                  placeholder={language === 'mr' ? 'मोबाईल नंबर (WhatsApp) *' : 'WhatsApp Mobile Number *'}
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-stone-300"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-stone-500">
                  {t('taxNotice')}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-rose-700 text-white hover:bg-rose-800 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'पावती नोंदणी करा' : 'Register Donation'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div className="bg-stone-50 p-3 sm:p-4 text-center border-t border-stone-200 shrink-0">
          <p className="text-[11px] text-stone-600 font-medium">
            {language === 'mr'
              ? 'टीप: वरील बँक माहिती अधिकृत असून प्रत्यक्ष देणगी पावती शाळेच्या सील व स्वाक्षरीसह दिली जाते.'
              : 'Note: Donations directly fund residential care, nutritious diet, special educators, and learning aids.'}
          </p>
        </div>
      </div>
    </div>
  );
};
