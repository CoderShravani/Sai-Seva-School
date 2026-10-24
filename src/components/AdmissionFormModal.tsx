import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Printer,
  ChevronRight,
  ChevronLeft,
  FileCheck,
  User,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionFormModal: React.FC<AdmissionFormModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    age: '',
    gender: 'Boy',
    disabilityType: 'Intellectual Disability',
    udidStatus: 'Yes',
    parentName: '',
    relation: 'Father',
    phone: '',
    alternatePhone: '',
    email: '',
    villageCity: '',
    residentialNeeded: 'Yes (Residential Hostel)',
    feedingStatus: 'Partially Independent',
    toiletTrained: 'Yes',
    medicalNotes: '',
    parentConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      errs.studentName = language === 'mr' ? 'कृपया विद्यार्थ्याचे नाव प्रविष्ट करा' : 'Student name is required';
    }
    if (!formData.age || parseInt(formData.age, 10) < 4 || parseInt(formData.age, 10) > 30) {
      errs.age = language === 'mr' ? 'कृपया योग्य वय प्रविष्ट करा (४ ते ३० वर्षे)' : 'Please enter a valid age (4–30)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      errs.parentName = language === 'mr' ? 'कृपया पालकांचे नाव प्रविष्ट करा' : 'Parent name is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = language === 'mr' ? 'कृपया १० अंकी वैध मोबाईल क्रमांक टाका' : 'Valid 10-digit mobile number required';
    }
    if (!formData.villageCity.trim()) {
      errs.villageCity = language === 'mr' ? 'कृपया गाव / शहर टाका' : 'City / Village is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentConsent) {
      alert(language === 'mr' ? 'कृपया संमती पर्यायावर टिक करा' : 'Please check the consent agreement');
      return;
    }

    // Send enquiry to the backend to mail the school
    fetch('/api/admission-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error('Failed to submit admission enquiry:', err);
    });

    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-amber-200 w-full max-w-2xl my-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
              {language === 'mr' ? 'प्रवेश व समुपदेशन नोंदणी' : 'Admissions & Guidance'}
            </span>
            <h2 className="text-lg sm:text-xl font-bold mt-0.5">
              {language === 'mr' ? 'प्रवेश चौकशी व पूर्व-नोंदणी अर्ज' : 'Admission Enquiry & Pre-Enrollment'}
            </h2>
          </div>
          <button
            id="close-admission-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-200 hover:text-white hover:bg-amber-700/50 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Submission Confirmation & Print Receipt */
            <div className="space-y-6 text-center py-4 print-area">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {language === 'mr' ? 'अर्ज यशस्वीरीत्या नोंदवला गेला!' : 'Enquiry Successfully Registered!'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto">
                  {language === 'mr'
                    ? 'आपला चौकशी अर्ज शाळेच्या प्रवेश विभागाकडे प्राप्त झाला आहे. आमचे विशेष शिक्षक २४ तासांत आपल्याशी संपर्क साधतील.'
                    : 'Your enquiry has been received by our Admissions Desk. Our educator will contact you within 24 hours to schedule a warm campus meeting.'}
                </p>
              </div>

              {/* Enquiry Summary Slip */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5 font-bold text-amber-950">
                  <span>{language === 'mr' ? 'नोंदणी क्रमांक' : 'Ref Number'}</span>
                  <span>SSSNMS-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-stone-700 pt-1">
                  <div>
                    <span className="font-semibold text-stone-900">{language === 'mr' ? 'विद्यार्थी' : 'Student'}: </span>
                    {formData.studentName} ({formData.age} {language === 'mr' ? 'वर्षे' : 'Yrs'})
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900">{language === 'mr' ? 'पालक' : 'Parent'}: </span>
                    {formData.parentName}
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900">{language === 'mr' ? 'फोन' : 'Phone'}: </span>
                    {formData.phone}
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900">{language === 'mr' ? 'गाव/शहर' : 'City'}: </span>
                    {formData.villageCity}
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-stone-900">{language === 'mr' ? 'सुविधा मागणी' : 'Requirement'}: </span>
                    {formData.residentialNeeded}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 no-print pt-2">
                <button
                  id="print-enquiry-slip-btn"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-amber-700 text-white hover:bg-amber-800 shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>{language === 'mr' ? 'पावती प्रिंट करा' : 'Print / Save Receipt'}</span>
                </button>
                <button
                  id="done-enquiry-modal-btn"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200"
                >
                  {language === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Stepper Progress */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs font-bold text-stone-500">
                <span className={step >= 1 ? 'text-amber-800 font-bold' : ''}>
                  1. {language === 'mr' ? 'विद्यार्थी माहिती' : 'Student Info'}
                </span>
                <span>→</span>
                <span className={step >= 2 ? 'text-amber-800 font-bold' : ''}>
                  2. {language === 'mr' ? 'पालक व संपर्क' : 'Parent Contact'}
                </span>
                <span>→</span>
                <span className={step >= 3 ? 'text-amber-800 font-bold' : ''}>
                  3. {language === 'mr' ? 'विशेष गरजा व संमती' : 'Needs & Review'}
                </span>
              </div>

              {/* Step 1: Student Information */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'mr' ? 'विद्यार्थ्याचे पूर्ण नाव *' : 'Student Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder={language === 'mr' ? 'उदा. अमित संजय कदम' : 'e.g. Rahul Sharma'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    {errors.studentName && (
                      <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.studentName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'वय (वर्षे) *' : 'Age (Years) *'}
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 10"
                        min="4"
                        max="30"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500"
                      />
                      {errors.age && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.age}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'लिंग' : 'Gender'}
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="Boy">{language === 'mr' ? 'मुलगा (Boy)' : 'Boy'}</option>
                        <option value="Girl">{language === 'mr' ? 'मुलगी (Girl)' : 'Girl'}</option>
                        <option value="Other">{language === 'mr' ? 'इतर' : 'Other'}</option>
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'UDID कार्ड उपलब्ध?' : 'UDID Disability Card?'}
                      </label>
                      <select
                        name="udidStatus"
                        value={formData.udidStatus}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="Yes">{language === 'mr' ? 'होय (उपलब्ध आहे)' : 'Yes (Available)'}</option>
                        <option value="In Process">{language === 'mr' ? 'प्रक्रियेत आहे' : 'In Process'}</option>
                        <option value="No / Need Help">{language === 'mr' ? 'नाही / मदतीची गरज' : 'No / Need Guidance'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'mr' ? 'विशेष गरजा प्रवर्ग / स्वरूप' : 'Primary Category of Support'}
                    </label>
                    <select
                      name="disabilityType"
                      value={formData.disabilityType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="Intellectual Disability">
                        {language === 'mr' ? 'मतिमंदत्व / बौद्धिक अक्षमता (Intellectual Disability)' : 'Intellectual Disability'}
                      </option>
                      <option value="Developmental Delay">
                        {language === 'mr' ? 'विकासात्मक विलंब (Developmental Delay)' : 'Developmental Delay'}
                      </option>
                      <option value="Autism Spectrum Support">
                        {language === 'mr' ? 'ऑटिझम / स्वमग्नता (Autism Spectrum)' : 'Autism Spectrum Support'}
                      </option>
                      <option value="Down Syndrome">
                        {language === 'mr' ? 'डाऊन सिन्ड्रोम (Down Syndrome)' : 'Down Syndrome'}
                      </option>
                      <option value="Multiple Support Needs">
                        {language === 'mr' ? 'बहुविध शैक्षणिक गरजा (Multiple Needs)' : 'Multiple Support Needs'}
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Parent & Contact Details */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'पालकांचे पूर्ण नाव *' : 'Parent / Guardian Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder={language === 'mr' ? 'उदा. संजय मारुती कदम' : 'e.g. Sanjay Kadam'}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500"
                      />
                      {errors.parentName && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.parentName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'विद्यार्थ्याशी नाते' : 'Relationship with Child'}
                      </label>
                      <select
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="Father">{language === 'mr' ? 'वडील (Father)' : 'Father'}</option>
                        <option value="Mother">{language === 'mr' ? 'आई (Mother)' : 'Mother'}</option>
                        <option value="Guardian">{language === 'mr' ? 'पालक / नातेवाईक (Guardian)' : 'Legal Guardian'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'मोबाईल नंबर (WhatsApp) *' : 'Mobile / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile"
                        maxLength={10}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'पर्यायी फोन नंबर' : 'Alternate Phone'}
                      </label>
                      <input
                        type="tel"
                        name="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={handleChange}
                        placeholder="Alternate contact"
                        maxLength={10}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'mr' ? 'गाव / तालुका / शहर व जिल्हा *' : 'City / Village & District *'}
                    </label>
                    <input
                      type="text"
                      name="villageCity"
                      value={formData.villageCity}
                      onChange={handleChange}
                      placeholder={language === 'mr' ? 'उदा. कोल्हापूर / सांगली / पुणे' : 'e.g. Pune, Satara, Solapur'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500"
                    />
                    {errors.villageCity && (
                      <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.villageCity}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Daily Care, Medical & Consent */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'निवासी वसतिगृह हवे आहे का?' : 'Residential Hostel Needed?'}
                      </label>
                      <select
                        name="residentialNeeded"
                        value={formData.residentialNeeded}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="Yes (Residential Hostel)">
                          {language === 'mr' ? 'होय (पूर्णतः निवासी वसतिगृह)' : 'Yes (Full Residential)'}
                        </option>
                        <option value="Day Scholar (If near campus)">
                          {language === 'mr' ? 'डे स्कॉलर (जवळ राहणारे असल्यास)' : 'Day Scholar'}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {language === 'mr' ? 'जेवणातील स्वावलंबन' : 'Feeding Independence'}
                      </label>
                      <select
                        name="feedingStatus"
                        value={formData.feedingStatus}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="Independent">{language === 'mr' ? 'स्वतः जेवतो/जेवते' : 'Eats Independently'}</option>
                        <option value="Partially Independent">{language === 'mr' ? 'काही मदतीची गरज लागते' : 'Needs Partial Assistance'}</option>
                        <option value="Needs Full Support">{language === 'mr' ? 'पूर्ण मदतीची गरज लागते' : 'Needs Full Assistance'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'mr' ? 'औषधोपचार किंवा विशेष आरोग्याची माहिती (लागू असल्यास)' : 'Ongoing Medical Conditions / Medications'}
                    </label>
                    <textarea
                      name="medicalNotes"
                      value={formData.medicalNotes}
                      onChange={handleChange}
                      rows={2}
                      placeholder={language === 'mr' ? 'उदा. फेफरे/फिट्सची औषधे, ऍलर्जी किंवा विशिष्ट सूचना...' : 'Any regular medications, allergies, or specific instructions...'}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-stone-300"
                    ></textarea>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="parentConsentCheck"
                      name="parentConsent"
                      checked={formData.parentConsent}
                      onChange={handleChange}
                      className="mt-0.5 rounded text-amber-700 focus:ring-amber-500"
                    />
                    <label htmlFor="parentConsentCheck" className="text-[11px] text-amber-950 leading-relaxed font-medium">
                      {language === 'mr'
                        ? 'मी सहमत आहे की वरील सर्व माहिती सत्य असून शाळेच्या प्रवेश समुपदेशनासाठी प्रतिनिधींनी माझ्याशी फोनवर संपर्क साधण्यास माझी संमती आहे.'
                        : 'I declare that the information provided is accurate and consent to the school admissions team contacting me regarding this enquiry.'}
                    </label>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{language === 'mr' ? 'मागे' : 'Back'}</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold bg-amber-700 text-white hover:bg-amber-800 shadow-xs"
                  >
                    <span>{language === 'mr' ? 'पुढील पायरी' : 'Next Step'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>{language === 'mr' ? 'चौकशी अर्ज सादर करा' : 'Submit Enquiry'}</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
