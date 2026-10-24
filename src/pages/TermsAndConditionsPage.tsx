import React from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  Heart,
  ExternalLink,
  Scale,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Clock,
  Lock,
  Eye,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface TermsAndConditionsPageProps {
  onNavigateHome?: () => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const isMarathi = language === 'mr';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Terms & Conditions"
        currentMr="नियम व अटी"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Page Header */}
      <header className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          {isMarathi ? 'संकेतस्थळ वापर नियम व मार्गदर्शक तत्त्वे' : 'Website Usage Guidelines & Terms'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          {isMarathi ? 'नियम व अटी' : 'Terms & Conditions'}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {isMarathi
            ? 'श्री साई सेवा निवासी मतिमंद विद्यालयाच्या संकेतस्थळाचा वापर करताना पाळावयाचे नियम, अटी आणि कायदेशीर मार्गदर्शक तत्त्वे.'
            : 'Welcome to the official website of Shree Sai Seva Niwasi Matimand School. Please review these terms governing your access and use of our digital informational portal.'}
        </p>
      </header>

      {/* 1. Introduction and Acceptance of Terms */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१. प्रस्तावना व अटींची स्वीकृती' : '1. Introduction & Acceptance of Terms'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे संकेतस्थळ श्री साई सेवा निवासी मतिमंद विद्यालय (नोंदणी क्रमांक: MAH/1428/2010/TRUST, पत्ता: दांगट इंडस्ट्रियल इस्टेट, शिवणे, पुणे - ४११०२३, महाराष्ट्र) यांच्यामार्फत चालवले जाते.'
              : 'This website is operated by Shree Sai Seva Niwasi Matimand School (Registration: MAH/1428/2010/TRUST, located at Dangat Industrial Estate, Shivane, Pune - 411023, Maharashtra, India).'}
          </p>
          <p>
            {isMarathi
              ? 'या संकेतस्थळाचा वापर करून किंवा त्यावरील माहिती पाहून आपण या नियम व अटींचे पालन करण्यास सहमती दर्शवता. जर आपण या अटींशी सहमत नसाल, तर कृपया या संकेतस्थळाचा वापर करू नये.'
              : 'By browsing, accessing, or submitting information through this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using this website.'}
          </p>
          <p>
            {isMarathi
              ? 'हे नियम केवळ संकेतस्थळाच्या वापरास लागू आहेत. वैयक्तिक माहितीच्या संरक्षणासाठी कृपया आमचे "गोपनीयता धोरण" (Privacy Policy) स्वतंत्रपणे वाचावे.'
              : 'These Terms & Conditions govern your general use of this website. For information on how we handle personal data and safeguarding, please refer to our separate Privacy Policy.'}
          </p>
        </div>
      </section>

      {/* 2. About the Sai Seva Website */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <GraduationCap className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '२. संकेतस्थळाचे स्वरूप व उद्देश' : '2. Purpose of the Website'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे संकेतस्थळ केवळ माहिती, जनजागृती आणि सामाजिक संवादासाठी तयार करण्यात आलेले अधिकृत डिजिटल केंद्र आहे. यावर शाळेचे शैक्षणिक अभ्यासक्रम (दीक्षा अभ्यासक्रम), थेरपी व पुनर्वसन सेवा, निवासी वसतिगृह सुविधा, क्रीडा व कला यश आणि देणगीच्या संधी याबद्दल माहिती दिली जाते.'
              : 'This website functions as an institutional informational and community outreach portal for Shree Sai Seva Niwasi Matimand School. Its purpose is to provide parents, guardians, donors, volunteers, and the public with clear information regarding our special education programs, residential care, therapeutic services, student achievements, and community support opportunities.'}
          </p>
        </div>
      </section>

      {/* 3. Permitted and Lawful Use */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '३. संकेतस्थळाचा कायदेशीर व योग्य वापर' : '3. Permitted & Lawful Use'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आपण या संकेतस्थळाचा वापर केवळ कायदेशीर, नैतिक आणि वैयक्तिक हेतूंसाठीच करू शकता. वापरकर्त्यांना खालील गोष्टी करण्यास सक्त मनाई आहे:'
              : 'You agree to use this website solely for lawful, respectful, and bona fide purposes. In using this website, you agree not to:'}
          </p>
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              {isMarathi
                ? 'संकेतस्थळाच्या कार्यक्षमतेत अडथळा आणणे किंवा अनधिकृतपणे प्रवेश करण्याचा प्रयत्न करणे.'
                : 'Interfere with, disrupt, or compromise the security, integrity, or accessibility of the website or its underlying hosting infrastructure.'}
            </li>
            <li>
              {isMarathi
                ? 'ऑनलाइन फॉर्म्समध्ये चुकीची, खोटी किंवा दिशाभूल करणारी माहिती सादर करणे.'
                : 'Submit false, fabricated, or misleading information through any of our enquiry forms.'}
            </li>
            <li>
              {isMarathi
                ? 'स्वयंचलित बॉट्स, स्पॅम किंवा दुर्भावनायुक्त सॉफ्टवेअर (Malware) द्वारे संकेतस्थळावर आक्रमण करणे.'
                : 'Transmit automated spam, malicious scripts, viruses, or unsolicited commercial communications.'}
            </li>
            <li>
              {isMarathi
                ? 'विशेष गरजा असणाऱ्या मुलांची किंवा शाळेच्या कर्मचाऱ्यांची छायाचित्रे अनुचित कारणांसाठी वापरणे किंवा विकृत स्वरूपात प्रसिद्ध करणे.'
                : 'Misuse, copy, or distribute photographs or media of our special children in an undignified, commercial, or unauthorized manner.'}
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Accuracy of Website Information */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '४. माहितीची अचूकता व मर्यादा' : '4. Accuracy & Timeliness of Information'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'शाळा या संकेतस्थळावरील माहिती (उदा. शैक्षणिक उपक्रम, दिनचर्या, संपर्क क्रमांक व वेळापत्रक) अद्ययावत व अचूक ठेवण्याचा प्रामाणिक प्रयत्न करते. तथापि, सर्व माहिती कोणत्याही पूर्वसूचनेशिवाय बदलू शकते.'
              : 'We strive to ensure that all information on this website—including program highlights, daily routines, campus facilities, and contact details—is accurate and current. However, institutional details and schedules may be updated from time to time.'}
          </p>
          <p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
            {isMarathi
              ? 'पालकांनी किंवा देणगीदारांनी प्रवेश किंवा मोठ्या देणगीचे नियोजन करताना शाळेच्या कार्यालयाशी प्रत्यक्ष संपर्क साधून अधिकृत माहितीची खात्री करून घ्यावी.'
              : 'Parents and well-wishers are encouraged to confirm specific enrollment requirements, daily schedules, or visiting arrangements directly with the school administration.'}
          </p>
        </div>
      </section>

      {/* 5. Admission Enquiries and Communication */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '५. प्रवेश चौकशी व मार्गदर्शन' : '5. Admission Enquiries & Pre-Enrollment'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'संकेतस्थळावरील प्रवेश चौकशी फॉर्म (Admission Enquiry Form) केवळ पूर्व-नोंदणी व समुपदेशनासाठी आहे. हा फॉर्म भरल्याने विद्यार्थ्याचा शाळेत प्रत्यक्ष प्रवेश निश्चित होत नाही.'
              : 'Submitting an Admission Enquiry Form through this website serves as a preliminary expression of interest and pre-enrollment contact. It does not constitute a guaranteed admission or confirmed school enrollment.'}
          </p>
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              <strong className="text-stone-900">{isMarathi ? 'वैयक्तिक मूल्यांकन:' : 'Individual Evaluation:'}</strong>{' '}
              {isMarathi
                ? 'प्रत्येक विशेष मुलाची बौद्धिक, संवेदी आणि वैद्यकीय पातळी समजून घेण्यासाठी विशेष शिक्षक व तज्ज्ञांमार्फत मुलाखत व मूल्यांकन केले जाते.'
                : 'Admission to our residential and day programs requires an in-person assessment by our special educators, therapists, and medical advisors to ensure the child can be safely and effectively supported.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'पालकांची उपस्थिती:' : 'Parental Consultation:'}</strong>{' '}
              {isMarathi
                ? 'प्रवेशापूर्वी पालकांशी प्रत्यक्ष चर्चा केली जाते आणि आवश्यक अधिकृत कागदपत्रांची (उदा. UDID कार्ड, वैद्यकीय नोंदी) तपासणी केली जाते.'
                : 'Final enrollment decisions depend on seat availability, residential boarding capacity, and verification of authentic documentation (such as UDID disability certificate and medical reports).'}
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Donations and Contribution Enquiries */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Heart className="w-5 h-5 text-rose-600 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '६. देणगी व मदत समन्वय' : '6. Donations & Contribution Enquiries'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-800 space-y-1.5">
            <h4 className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-800" />
              {isMarathi ? 'संकेतस्थळावर थेट पेमेंट गेटवे नाही' : 'No Direct Online Payment Gateway'}
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              {isMarathi
                ? 'आमचे संकेतस्थळ थेट ऑनलाइन क्रेडिट/डेबिट कार्ड व्यवहार प्रक्रिया करत नाही. संकेतस्थळावरील देणगी फॉर्म हा केवळ देणगीदाराचे सहकार्य नोंदवण्यासाठी आणि समन्वय साधण्यासाठी आहे.'
                : 'This website does not directly process debit/credit card transactions or automated payment gateways. The donation form serves exclusively to record your intent to contribute, allowing our administrative office to connect with you directly.'}
            </p>
          </div>

          <p>
            <strong className="text-stone-900">{isMarathi ? 'अधिकृत हस्तांतरण:' : 'Official Transfer Channels:'}</strong>{' '}
            {isMarathi
              ? 'आर्थिक देणग्या केवळ शाळेच्या अधिकृत बँक खात्यात (NEFT/RTGS/IMPS/धनादेश) किंवा अधिकृत ट्रस्ट UPI खात्यावर स्वीकारल्या जातात. प्रत्येक देणगीसाठी अधिकृत ट्रस्ट पावती दिली जाते.'
              : 'Financial contributions are made directly through official school bank transfers (NEFT, RTGS, IMPS, or account payee cheques) or verified institutional UPI. Official trust receipts are issued upon receipt of funds.'}
          </p>

          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
            <p className="font-bold">
              {isMarathi ? 'केवळ नवीन वस्तूंची देणगी धोरण:' : 'Brand New Items Only (Hygiene & Dignity Policy):'}
            </p>
            <p className="text-stone-700 leading-relaxed">
              {isMarathi
                ? 'मुलांच्या स्वच्छता, आरोग्य आणि सन्मानासाठी आम्ही कोणत्याही प्रकारच्या जुन्या किंवा वापरलेल्या वस्तू (उदा. जुने कपडे, जुनी पुस्तके) स्वीकारत नाही. वस्तू स्वरूपातील सर्व दान पूर्णपणे नवीन असणे आवश्यक आहे.'
                : 'To maintain hygiene, health, and dignity for our residential children, we strictly do not accept old, second-hand, or used items of any kind (such as used clothing or discarded stationery). All in-kind donations must be brand new.'}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Use of Website Forms & Communication */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '७. फॉर्म्स व संवादाचे नियम' : '7. Use of Website Forms & Submissions'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'जेव्हा आपण संकेतस्थळावरील संपर्क फॉर्म, प्रवेश फॉर्म, देणगी फॉर्म किंवा स्वयंसेवक फॉर्म भरता, तेव्हा आपण आपल्या अचूक संपर्क माहितीची खात्री देणे आवश्यक आहे.'
              : 'When you submit information through our contact, admission, donation, or volunteer forms, you confirm that the contact details provided are accurate and belong to you.'}
          </p>
          <p>
            {isMarathi
              ? 'आमचे समन्वयक आपल्या चौकशीला उत्तर देण्यासाठी ई-मेल किंवा फोनद्वारे संपर्क साधू शकतात. कोणत्याही फॉर्ममध्ये आक्षेपार्ह, अपमानास्पद किंवा अयोग्य भाषा वापरल्यास संदेश दुर्लक्षित केला जाईल.'
              : 'Submissions through our forms are forwarded directly to the school’s administrative inbox. Any form submission containing offensive, abusive, or unlawful content will be discarded immediately.'}
          </p>
        </div>
      </section>

      {/* 8. Intellectual Property & Respectful Media Usage */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Eye className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '८. बौद्धिक संपदा व बाल छायाचित्रांची सुरक्षितता' : '8. Intellectual Property & Child Privacy'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'या संकेतस्थळावरील मजकूर, लोगो, बोधचिन्ह आणि विशेष विद्यार्थ्यांची छायाचित्रे ही श्री साई सेवा निवासी मतिमंद विद्यालयाची बौद्धिक संपदा आहेत.'
              : 'All content on this website—including the school logo, text descriptions, program curricula, and event photographs—is the property of Shree Sai Seva Niwasi Matimand School and is protected by applicable copyright and intellectual property laws.'}
          </p>
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-stone-700 space-y-1.5">
            <h4 className="font-bold text-emerald-950 text-xs sm:text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              {isMarathi ? 'विद्यार्थ्यांच्या छायाचित्रांचे संरक्षण' : 'Protection of Student Photographs'}
            </h4>
            <p className="leading-relaxed">
              {isMarathi
                ? 'आमच्या विशेष विद्यार्थ्यांची छायाचित्रे पालकांच्या संमतीने केवळ त्यांच्या शैक्षणिक व क्रीडा यशाचा गौरव करण्यासाठी वापरली जातात. या छायाचित्रांचा कोणत्याही व्यावसायिक, जाहिरात किंवा अनुचित कामासाठी पुनर्वापर करण्यास सक्त मनाई आहे.'
                : 'Photographs of our special students are displayed solely with parental and guardian consent to celebrate genuine learning, sportsmanship, and creative milestones. Downloading, republishing, or distributing photographs of our students for commercial, sensational, or unauthorized purposes is strictly prohibited.'}
            </p>
          </div>
        </div>
      </section>

      {/* 9. External Links & Third-Party Platforms */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <ExternalLink className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '९. बाह्य संकेतस्थळांचे दुवे' : '9. External Links & Third-Party Services'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आमच्या संकेतस्थळावर अभ्यागतांच्या सोयीसाठी गुगल मॅप्स (Google Maps दिशादर्शन) किंवा अधिकृत सामाजिक माध्यमांचे दुवे असू शकतात.'
              : 'This website may include hyperlinks to external third-party services, such as Google Maps for campus navigation or official school social media channels.'}
          </p>
          <p className="text-xs text-stone-600">
            {isMarathi
              ? 'आम्ही या बाह्य संकेतस्थळांच्या माहितीचे किंवा गोपनीयतेचे नियंत्रण करत नाही. त्या संकेतस्थळांच्या वापरासाठी त्यांचे स्वतःचे नियम लागू होतात.'
              : 'These external platforms operate under their own independent terms and privacy notices. Shree Sai Seva Niwasi Matimand School does not control and is not responsible for the content, security, or availability of third-party platforms.'}
          </p>
        </div>
      </section>

      {/* 10. Website Availability and Technical Maintenance */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१०. संकेतस्थळाची उपलब्धता व तांत्रिक देखभाल' : '10. Website Availability & Maintenance'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे संकेतस्थळ सतत उपलब्ध राहावे यासाठी आम्ही सर्वतोपरी प्रयत्न करतो. तथापि, तांत्रिक देखभाल, सर्व्हर अद्यतन किंवा अनपेक्षित तांत्रिक बिघाडामुळे संकेतस्थळ तात्पुरते अनुपलब्ध होऊ शकते.'
              : 'We strive to keep the website available 24/7 without interruption. However, access may be temporarily suspended without notice in cases of technical maintenance, server upgrades, or unforeseen network disruptions.'}
          </p>
        </div>
      </section>

      {/* 11. Limitation of Institutional Liability */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Scale className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '११. जबाबदारीची मर्यादा (Limitation of Liability)' : '11. Limitation of Institutional Liability'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे संकेतस्थळ "जसे आहे तसे" (As-Is) तत्त्वावर पुरवले जाते. श्री साई सेवा निवासी मतिमंद विद्यालय संकेतस्थळाच्या वापरामुळे किंवा तांत्रिक अडचणींमुळे उद्भवणाऱ्या कोणत्याही अप्रत्यक्ष नुकसानीसाठी जबाबदार असणार नाही.'
              : 'The informational content on this website is provided on an "as is" and "as available" basis. To the maximum extent permitted under applicable law, Shree Sai Seva Niwasi Matimand School and its trustees, staff, and representatives shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.'}
          </p>
        </div>
      </section>

      {/* 12. Modifications & Updates to These Terms */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <RefreshCw className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१२. नियमांमध्ये बदल (Updates to Terms)' : '12. Modifications to These Terms'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'शाळेच्या धोरणानुसार किंवा प्रशासकीय गरजांनुसार या नियमांमध्ये वेळोवेळी सुधारणा करण्याचा अधिकार शाळा राखून ठेवते. सुधारित नियम या पृष्ठावर प्रसिद्ध केल्यापासून तात्काळ लागू होतील.'
              : 'Shree Sai Seva Niwasi Matimand School reserves the right to amend or update these Terms & Conditions as necessary to reflect operational, legal, or administrative changes. Updated terms become effective immediately upon posting to this page.'}
          </p>
        </div>
      </section>

      {/* 13. Governing Law & Jurisdiction */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Scale className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१३. लागू कायदा व कार्यक्षेत्र' : '13. Governing Law & Jurisdiction'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे नियम व अटी भारताच्या कायद्यांनुसार नियंत्रित व अर्थान्वित केल्या जातील. या संकेतस्थळाच्या वापरासंदर्भात कोणताही वाद उद्भवल्यास त्याचे कार्यक्षेत्र केवळ पुणे, महाराष्ट्र येथील सक्षम न्यायालयांचे राहील.'
              : 'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.'}
          </p>
        </div>
      </section>

      {/* 14. Official Contact Information */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१४. संपर्क व विचारणा केंद्र' : '14. Contact for Terms Inquiries'}
          </h2>
        </div>
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'या नियम व अटींसंदर्भात काही प्रश्न किंवा अधिक स्पष्टीकरण हवे असल्यास आपण शाळेच्या कार्यालयाशी थेट संपर्क साधू शकता:'
              : 'If you have any questions or require further clarification regarding these Terms & Conditions, please contact the school administration office through our verified institutional channels:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Campus Address */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                {isMarathi ? 'शाळेचा पत्ता' : 'School Campus Location'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {schoolInfo.nameEn || 'Shree Sai Seva Niwasi Matimand School'}
                <br />
                {schoolInfo.addressPlaceholder || 'Dangat Industrial Estate, Shivane'}, {schoolInfo.cityDistrictPlaceholder || 'Pune'}
                <br />
                {schoolInfo.state || 'Maharashtra'} - {schoolInfo.pinCodePlaceholder || '411023'}
              </p>
            </div>

            {/* Email Address */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                {isMarathi ? 'अधिकृत ई-मेल' : 'Official Trust Email'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                <a
                  href={`mailto:${schoolInfo.emailPlaceholder || 'shreesaiseva.shivane.pune@gmail.com'}`}
                  className="text-emerald-700 hover:underline font-medium break-all"
                >
                  {schoolInfo.emailPlaceholder || 'shreesaiseva.shivane.pune@gmail.com'}
                </a>
                <br />
                <span className="text-[11px] text-stone-500">
                  {isMarathi ? 'कार्यालयीन वेळेत नियमित तपासले जाते.' : 'Monitored daily by administration.'}
                </span>
              </p>
            </div>

            {/* Phone & Visiting Hours */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                {isMarathi ? 'फोन व कार्यालयीन वेळ' : 'Telephone & Hours'}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                <a
                  href={`tel:${schoolInfo.phonePlaceholder?.replace(/\s+/g, '') || '+918380041500'}`}
                  className="text-emerald-700 hover:underline font-bold"
                >
                  {schoolInfo.phonePlaceholder || '+91 8380041500'}
                </a>
                <br />
                <span className="text-[11px] text-stone-500 flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 shrink-0" />
                  {isMarathi ? schoolInfo.officeHoursMr : schoolInfo.officeHoursEn}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Legal Attribution Banner */}
      <footer className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-500 space-y-1 text-center sm:text-left">
        <p className="font-bold text-stone-700">
          {isMarathi ? 'संस्थात्मक माहिती व नोंद:' : 'Institutional Disclaimer & Attribution:'}
        </p>
        <p className="leading-relaxed">
          {isMarathi
            ? 'हे संकेतस्थळ श्री साई सेवा निवासी मतिमंद विद्यालयाचे अधिकृत माहिती केंद्र आहे. शाळेचे सर्व उपक्रम आणि निवासी वसतिगृह नियम संस्थेच्या अधिकृत धोरणांनुसार चालवले जातात.'
            : 'This website is the official informational and community engagement portal for Shree Sai Seva Niwasi Matimand School. All details regarding admissions, infrastructure, facilities, and academic routines are subject to institutional policies and governmental guidelines.'}
        </p>
      </footer>
    </div>
  );
};
