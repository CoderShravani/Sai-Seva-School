import React, { useState } from 'react';
import { X, Save, RotateCcw, Settings, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useSchoolData } from '../context/SchoolDataContext';
import { useLanguage } from '../context/LanguageContext';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({ isOpen, onClose }) => {
  const { schoolInfo, updateSchoolInfo, resetSchoolInfo } = useSchoolData();
  const { language } = useLanguage();

  const [localConfig, setLocalConfig] = useState({
    nameEn: schoolInfo.nameEn,
    nameMr: schoolInfo.nameMr,
    phonePlaceholder: schoolInfo.phonePlaceholder,
    emergencyPhonePlaceholder: schoolInfo.emergencyPhonePlaceholder,
    addressPlaceholder: schoolInfo.addressPlaceholder,
    cityDistrictPlaceholder: schoolInfo.cityDistrictPlaceholder,
    emailPlaceholder: schoolInfo.emailPlaceholder,
    yearsOfService: schoolInfo.stats.yearsOfService,
    studentsSupported: schoolInfo.stats.studentsSupported,
    staffMembers: schoolInfo.stats.staffMembers,
    residentialCapacity: schoolInfo.stats.residentialCapacity,
    bankName: schoolInfo.bankDetails.bankNamePlaceholder,
    accountNumber: schoolInfo.bankDetails.accountNumberPlaceholder,
    ifsc: schoolInfo.bankDetails.ifscPlaceholder,
    upiId: schoolInfo.bankDetails.upiIdPlaceholder,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalConfig({ ...localConfig, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSchoolInfo({
      nameEn: localConfig.nameEn,
      nameMr: localConfig.nameMr,
      phonePlaceholder: localConfig.phonePlaceholder,
      emergencyPhonePlaceholder: localConfig.emergencyPhonePlaceholder,
      addressPlaceholder: localConfig.addressPlaceholder,
      cityDistrictPlaceholder: localConfig.cityDistrictPlaceholder,
      emailPlaceholder: localConfig.emailPlaceholder,
      stats: {
        yearsOfService: localConfig.yearsOfService,
        studentsSupported: localConfig.studentsSupported,
        staffMembers: localConfig.staffMembers,
        residentialCapacity: localConfig.residentialCapacity,
      },
      bankDetails: {
        ...schoolInfo.bankDetails,
        bankNamePlaceholder: localConfig.bankName,
        accountNumberPlaceholder: localConfig.accountNumber,
        ifscPlaceholder: localConfig.ifsc,
        upiIdPlaceholder: localConfig.upiId,
      },
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    if (confirm(language === 'mr' ? 'सर्व मूळ माहिती पूर्ववत करायची आहे का?' : 'Reset all details to default?')) {
      resetSchoolInfo();
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-amber-300 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                {language === 'mr' ? 'संस्था माहिती व आकडेवारी थेट संपादन' : 'School Content & Info Live Editor'}
              </h2>
              <p className="text-[11px] text-amber-200">
                {language === 'mr' ? 'शाळेचे संपर्क क्रमांक, आकडे व बँक माहिती येथे सहज बदला' : 'Customize institutional contacts, statistics, and banking credentials'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs flex-1">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'mr' ? 'माहिती यशस्वीरीत्या जतन झाली!' : 'Details successfully updated across website!'}</span>
            </div>
          )}

          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-amber-950 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              {language === 'mr'
                ? 'हे पॅनेल शाळा प्रशासनासाठी असून, येथे केलेली दुरुस्ती संपूर्ण वेबसाईटवर त्वरित दिसेल.'
                : 'This quick administration panel allows the school management to update placeholders without modifying code.'}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-1">
              {language === 'mr' ? '१. संपर्क व पत्ता माहिती' : '1. Contacts & Location'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phonePlaceholder"
                  value={localConfig.phonePlaceholder}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Emergency Helpline</label>
                <input
                  type="text"
                  name="emergencyPhonePlaceholder"
                  value={localConfig.emergencyPhonePlaceholder}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Campus Address</label>
                <input
                  type="text"
                  name="addressPlaceholder"
                  value={localConfig.addressPlaceholder}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">City / District</label>
                <input
                  type="text"
                  name="cityDistrictPlaceholder"
                  value={localConfig.cityDistrictPlaceholder}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
            </div>
          </div>

          {/* Institutional Statistics */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-1">
              {language === 'mr' ? '२. ठळक आकडेवारी (Statistics)' : '2. Key Statistics Highlights'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Years of Service</label>
                <input
                  type="text"
                  name="yearsOfService"
                  value={localConfig.yearsOfService}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Students</label>
                <input
                  type="text"
                  name="studentsSupported"
                  value={localConfig.studentsSupported}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Staff Members</label>
                <input
                  type="text"
                  name="staffMembers"
                  value={localConfig.staffMembers}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Residential Capacity</label>
                <input
                  type="text"
                  name="residentialCapacity"
                  value={localConfig.residentialCapacity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
            </div>
          </div>

          {/* Bank Credentials */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-1">
              {language === 'mr' ? '३. देणगी बँक तपशील' : '3. Donation Banking Credentials'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={localConfig.bankName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={localConfig.accountNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">IFSC Code</label>
                <input
                  type="text"
                  name="ifsc"
                  value={localConfig.ifsc}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-stone-700 mb-1">UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  value={localConfig.upiId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'मूळ स्थितीत आणा' : 'Reset Defaults'}</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100"
              >
                {language === 'mr' ? 'बंद करा' : 'Close'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg font-bold bg-amber-700 text-white hover:bg-amber-800 shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{language === 'mr' ? 'बदल जतन करा' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
