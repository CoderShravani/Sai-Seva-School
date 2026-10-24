import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
  HeartHandshake,
  Database,
  Cookie,
  UserCheck,
  RefreshCw,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  EyeOff,
  Heart,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface PrivacyAndChildProtectionPageProps {
  onNavigateHome?: () => void;
}

export const PrivacyAndChildProtectionPage: React.FC<PrivacyAndChildProtectionPageProps> = ({ onNavigateHome }) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();

  const isMarathi = language === 'mr';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Privacy Policy"
        currentMr="गोपनीयता धोरण"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Page Header */}
      <header className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          {isMarathi ? 'माहिती संरक्षण व पारदर्शकता' : 'Data Protection & Transparency'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          {isMarathi ? 'गोपनीयता व माहिती संरक्षण धोरण' : 'Privacy Policy & Data Protection'}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {isMarathi
            ? 'श्री साई सेवा निवासी मतिमंद विद्यालयाच्या संकेतस्थळावर आपल्या वैयक्तिक माहितीचे आणि विशेष विद्यार्थ्यांच्या प्रतिष्ठेचे कशा प्रकारे रक्षण केले जाते, याबद्दलची सविस्तर माहिती.'
            : 'How Shree Sai Seva Niwasi Matimand School collects, handles, and protects information submitted through this website, along with our safeguarding standards for children.'}
        </p>
     
      </header>

      {/* Section A: Introduction & Scope */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१. प्रस्तावना व धोरणाची व्याप्ती' : '1. Introduction & Scope'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'हे गोपनीयता धोरण श्री साई सेवा निवासी मतिमंद विद्यालय यांच्या अधिकृत संकेतस्थळाला भेट देणाऱ्या सर्व नागरिकांना, पालकांना, देणगीदारांना व स्वयंसेवकांना लागू आहे.'
              : 'This Privacy Policy applies to visitors, parents, guardians, donors, and volunteers who interact with the official website of Shree Sai Seva Niwasi Matimand School.'}
          </p>
          <p>
            {isMarathi
              ? 'आम्ही आमच्या संकेतस्थळावर पारदर्शकतेचे पालन करतो. हे धोरण स्पष्ट करते की आम्ही संकेतस्थळावरील विविध फॉर्म्सद्वारे कोणती माहिती गोळा करतो, तिचा वापर कशासाठी होतो, आणि ती माहिती कशी सुरक्षित ठेवली जाते.'
              : 'We believe in complete transparency. This policy clearly explains what information you provide when using our website, how that information is utilized to assist you, how it is communicated to our school administration, and how we uphold the dignity and privacy of every child.'}
          </p>
        </div>
      </section>

      {/* Section B: Information We Collect */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '२. आम्ही कोणती माहिती गोळा करतो' : '2. Information We Collect'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {isMarathi
            ? 'आमचे संकेतस्थळ केवळ आपण स्वतःहून फॉर्म्सद्वारे सादर केलेली माहिती गोळा करते. खालील श्रेणींनुसार माहिती प्राप्त केली जाते:'
            : 'Our website only collects personal details that you voluntarily submit through our interactive forms. We collect information through the following specific channels:'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Admission Form */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              {isMarathi ? 'प्रवेश चौकशी व पूर्व-नोंदणी फॉर्म' : 'Admission & Pre-Enrollment Enquiry Form'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'विद्यार्थ्याचे नाव, जन्मतारीख, वय, लिंग, दिव्यांगाचा प्रकार, UDID प्रमाणपत्र स्थिती, वसतिगृह गरज, दैनंदिन स्वावलंबन पातळी, वैद्यकीय नोंदी; तसेच पालकांचे नाव, नाते, संपर्क क्रमांक, पर्यायी फोन, ई-मेल, गाव/शहर आणि पालकांची संमती.'
                : 'Student name, date of birth, age, gender, category of disability, UDID certificate status, residential boarding requirement, daily living independence, medical/dietary notes; and parent/guardian name, relationship, phone number, alternate phone, email address, city/village, and parental consent.'}
            </p>
          </div>

          {/* Donation Form */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              {isMarathi ? 'देणगी व सहकार्य माहिती फॉर्म' : 'Donation & Support Enquiry Form'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'देणगीदाराचे पूर्ण नाव, फोन नंबर, ई-मेल, निवडलेला उपक्रम (उदा. अन्नदान, शैक्षणिक संच, एका मुलाचे पालकत्व, धान्य/किराणा किंवा नवीन कपडे), देणगीचा प्रकार, प्रायोजकत्व कालावधी आणि ऐच्छिक संदेश.'
                : 'Donor full name, phone number, email address, chosen support initiative (e.g., Annadanam meal, sensory kit, child education sponsorship, in-kind grains/groceries, or brand new clothes), donation category, preferred sponsorship duration, and optional coordination message.'}
            </p>
          </div>

          {/* Contact / Visit Form */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              {isMarathi ? 'शाळा भेट व संपर्क फॉर्म' : 'Campus Visit & Contact Enquiry Form'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'अभ्यागताचे नाव, फोन नंबर, ई-मेल पत्ता, चौकशीचा विषय (उदा. कॅम्पस भेट, प्रवेश माहिती किंवा सर्वसाधारण विचारणा) आणि संदेश मजकूर.'
                : 'Visitor full name, phone number, email address, subject of enquiry (such as scheduling a campus visit, admissions inquiry, or general question), and message text.'}
            </p>
          </div>

          {/* Volunteer Form */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              {isMarathi ? 'स्वयंसेवक अर्ज फॉर्म' : 'Volunteer Application Form'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'स्वयंसेवकाचे नाव, संपर्क क्रमांक, ई-मेल, शहर, कौशल्याचे क्षेत्र (उदा. अध्यापन, कला/संगीत, थेरपी मदत, क्रीडा), उपलब्ध वेळ आणि सहभागाचा उद्देश.'
                : 'Applicant name, telephone number, email, city of residence, skill area (e.g., teaching, arts/crafts, therapeutic support, sports assistance), schedule availability, and personal note of interest.'}
            </p>
          </div>
        </div>

        {/* Technical request data notice */}
        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
          <span className="font-bold text-stone-800">
            {isMarathi ? 'तांत्रिक माहिती (तांत्रिक सुरक्षिततेसाठी): ' : 'Technical Request Information: '}
          </span>
          {isMarathi
            ? 'जेव्हा आपण संकेतस्थळाचा वापर करता, तेव्हा स्पॅम रोखण्यासाठी आणि सर्व्हर सुरक्षिततेसाठी इंटरनेट प्रोटोकॉल (IP) पत्ता आणि ब्राउझर हेडरची तपासणी स्वयंचलितरीत्या केली जाते. यात लपविलेले स्पॅम प्रतिबंधक (Honeypot) तंत्रज्ञान समाविष्ट आहे.'
            : 'Standard web server requests transmit basic technical metadata (such as IP address, request origin, and browser type) to detect automated spam bots and maintain security. We also employ hidden honeypot validation to discard fraudulent bot submissions.'}
        </div>
      </section>

      {/* Section C: How We Use Your Information */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '३. आपल्या माहितीचा वापर कसा केला जातो' : '3. How We Use Your Information'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {isMarathi
            ? 'आपण सादर केलेल्या माहितीचा वापर केवळ शाळेच्या प्रत्यक्ष व अधिकृत कामकाजासाठी केला जातो. यामध्ये खालील उद्दिष्टांचा समावेश होतो:'
            : 'Personal information submitted through our website is used strictly for legitimate school operations and communication purposes, specifically:'}
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-stone-700 list-disc list-inside pl-1 leading-relaxed">
          <li>
            <strong className="text-stone-900">{isMarathi ? 'प्रवेश प्रक्रियेचे नियोजन:' : 'Admissions Assessment & Counselling:'}</strong>{' '}
            {isMarathi
              ? 'पालकांनी पाठवलेल्या प्रवेश अर्जाची पडताळणी करणे, विशेष शिक्षकांशी चर्चा करणे आणि पालकांशी संपर्क साधून मुलाच्या मुलाखतीची वेळ निश्चित करणे.'
              : 'Reviewing special education needs, consulting our educators and therapists, and contacting parents or guardians to arrange an initial guidance session and campus visit.'}
          </li>
          <li>
            <strong className="text-stone-900">{isMarathi ? 'देणगी व सहकार्य समन्वय:' : 'Donation & In-Kind Coordination:'}</strong>{' '}
            {isMarathi
              ? 'देणगीदारांनी व्यक्त केलेल्या इच्छेनुसार बँक हस्तांतरण, धनादेश किंवा नवीन साहित्याच्या वितरणाचे नियोजन करणे व अधिकृत पावती/आभारपत्र देणे.'
              : 'Connecting with prospective donors to coordinate bank transfers (NEFT/RTGS/IMPS), direct cheque contributions, or delivery of brand-new grocery/in-kind essentials, and issuing official trust receipts.'}
          </li>
          <li>
            <strong className="text-stone-900">{isMarathi ? 'शाळा भेट व सर्वसाधारण चौकशी:' : 'Campus Visits & Inquiries:'}</strong>{' '}
            {isMarathi
              ? 'अभ्यागतांच्या प्रश्नांना उत्तरे देणे आणि शाळेच्या कामाच्या वेळेत (सोमवार ते शनिवार, सकाळी ९:०० ते संध्याकाळी ५:३०) कॅम्पस भेटीची वेळ निश्चित करणे.'
              : 'Answering questions regarding our residential facilities, therapies, or daily routines, and scheduling visits during school visiting hours.'}
          </li>
          <li>
            <strong className="text-stone-900">{isMarathi ? 'स्वयंसेवक उपक्रम:' : 'Volunteer Coordination:'}</strong>{' '}
            {isMarathi
              ? 'मुलांना शिकवण्यासाठी किंवा त्यांच्या कला-क्रीडा उपक्रमांत मदत करण्यासाठी स्वयंसेवकांच्या अर्जांची छाननी करून त्यांच्याशी संपर्क साधणे.'
              : 'Evaluating volunteer applications, matching skills with our curriculum, and scheduling safe, supervised engagement sessions.'}
          </li>
          <li>
            <strong className="text-stone-900">{isMarathi ? 'सुरक्षितता व स्पॅम प्रतिबंध:' : 'Website Security & Abuse Prevention:'}</strong>{' '}
            {isMarathi
              ? 'संकेतस्थळाचा गैरवापर, बॉट स्पॅम आणि सायबर हल्ले रोखण्यासाठी फॉर्म्सची सुरक्षितता तपासणे.'
              : 'Protecting our web forms against automated spam, fraudulent entries, and unauthorized system access.'}
          </li>
        </ul>
      </section>

      {/* Section D: How We Store and Protect Information */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Database className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '४. माहिती साठवणूक व संरक्षण पद्धती' : '4. How We Handle, Store & Protect Information'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-800 space-y-1.5">
            <h4 className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-800" />
              {isMarathi ? 'संकेतस्थळावर कोणताही डेटाबेस नाही' : 'No Public Database Storage on This Website'}
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              {isMarathi
                ? 'हे संकेतस्थळ आपल्या फॉर्ममधील माहिती कोणत्याही सार्वजनिक किंवा ऑनलाइन डेटाबेसमध्ये साठवून ठेवत नाही. आपण सबमिट केलेली माहिती सुरक्षित सर्व्हरलेस फंक्शनद्वारे तात्काळ शाळेच्या अधिकृत ई-मेल इनबॉक्सकडे (shreesaiseva.shivane.pune@gmail.com) पाठवली जाते.'
                : 'This website does not store form submissions in an online user database. When you submit any form on this site, your details are packaged securely and dispatched directly to the school administration’s verified email inbox (shreesaiseva.shivane.pune@gmail.com).'}
            </p>
          </div>

          <p>
            <strong className="text-stone-900">{isMarathi ? 'तांत्रिक सुरक्षेचे उपाय:' : 'Technical & Operational Safeguards:'}</strong>{' '}
            {isMarathi
              ? 'आपला डेटा संकेतस्थळावरून पाठवला जात असताना आधुनिक TLS/HTTPS एनक्रिप्शन तंत्रज्ञानाने सुरक्षित केला जातो. शाळेचा ई-मेल इनबॉक्स पासवर्ड आणि दुहेरी प्रमाणीकरणाने (Two-Factor Authentication) संरक्षित असून केवळ अधिकृत प्रशासकीय कर्मचाऱ्यांनाच त्याचा वापर करण्याची परवानगी आहे.'
              : 'Information transmitted between your browser and our servers is encrypted in transit using industry-standard TLS (HTTPS). Access to the receiving school email inbox is restricted strictly to authorized administrative staff with password and two-factor protections.'}
          </p>

          <p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
            <strong className="text-stone-800">{isMarathi ? 'महत्त्वाची नोंद:' : 'Security Disclaimer:'}</strong>{' '}
            {isMarathi
              ? 'आम्ही आपल्या माहितीचे संरक्षण करण्यासाठी सर्व वाजवी काळजी घेत असलो, तरी इंटरनेटवरील कोणतीही इलेक्ट्रॉनिक संप्रेषण प्रणाली १००% सुरक्षित असल्याची संपूर्ण हमी देऊ शकत नाही. म्हणूनच आपण संवेदनशील आर्थिक माहिती (उदा. पासवर्ड किंवा कार्ड क्रमांक) फॉर्ममध्ये लिहू नये.'
              : 'While we implement reasonable administrative and technical safeguards to protect your personal details, no method of electronic transmission over the internet or email storage can be guaranteed to be absolutely secure. We urge visitors not to send unprompted sensitive payment credentials through open message fields.'}
          </p>
        </div>
      </section>

      {/* Section E: Third-Party Providers */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '५. तृतीय-पक्ष पुरवठादार' : '5. Service Providers'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              <strong className="text-stone-900">{isMarathi ? 'वेब होस्टिंग सेवा:' : 'Cloud & Web Hosting Infrastructure:'}</strong>{' '}
              {isMarathi
                ? 'आमचे संकेतस्थळ आधुनिक व सुरक्षित क्लाउड होस्टिंग प्लॅटफॉर्मवर चालते, जे हाय-स्पीड कार्यक्षमता आणि सुरक्षित ट्रॅफिक व्यवस्थापन पुरवते.'
                : 'Our website files and serverless API endpoints are hosted on high-availability cloud infrastructure designed to serve web content securely over HTTPS.'}
            </li>
          </ul>
          <p className="text-xs text-stone-600">
            {isMarathi
              ? 'आम्ही कोणत्याही जाहिरात कंपन्या, डेटा ब्रोकर्स किंवा विपणन एजन्सींना आपला डेटा विकत किंवा भाड्याने देत नाही.'
              : 'We do not engage advertising networks, data brokers, or commercial marketing syndicates, and we never monetize your contact details.'}
          </p>
        </div>
      </section>

      {/* Section F: Cookies and Similar Technologies */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Cookie className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '६. कुकीज व स्थानिक साठवणूक (Local Storage)' : '6. Cookies & Browser Storage'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आमच्या संकेतस्थळावर अभ्यागतांचा माग काढणाऱ्या (Tracking Cookies), जाहिरात देणाऱ्या किंवा वापरकर्त्यांच्या सवयींचा अभ्यास करणाऱ्या कोणत्याही तृतीय-पक्ष कुकीज वापरल्या जात नाहीत.'
              : 'Our website does not use third-party tracking cookies, behavioral profiling tools, or commercial advertising pixels (such as Google Analytics or social media trackers).'}
          </p>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900">
              {isMarathi ? 'स्थानिक ब्राउझर साठवणूक (Local Storage):' : 'Functional Local Storage:'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'आम्ही केवळ आपल्या सोयीसाठी आपल्या ब्राउझरच्या लोकल स्टोरेजचा वापर करतो. यामध्ये आपली भाषा निवड (मराठी/इंग्रजी) आणि सुलभता टूलबार सेटिंग्ज (उदा. फॉन्ट साईज किंवा कॉन्ट्रास्ट) सेव्ह केली जातात. यात कोणताही वैयक्तिक डेटा नसतो आणि तो आपल्याच डिव्हाइसवर मर्यादित राहतो.'
                : 'We utilize your browser’s built-in local storage purely for user-interface preferences on your own device—specifically your selected language preference (English/Marathi) and accessibility adjustments (such as high-contrast display or font size). This data remains strictly within your browser and contains zero personal information.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section G: Information Sharing */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <UserCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '७. माहितीची देवाणघेवाण व प्रकटीकरण' : '7. Information Sharing & Disclosure'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'श्री साई सेवा निवासी मतिमंद विद्यालय आपली वैयक्तिक माहिती अत्यंत गोपनीय ठेवते. आम्ही आपली माहिती बाहेरील कोणाशीही विकत, भाड्याने किंवा देवाणघेवाण करत नाही, केवळ खालील अपवादात्मक परिस्थिती वगळता:'
              : 'Shree Sai Seva Niwasi Matimand School treats personal information as confidential. We do not sell, trade, or transfer your details to outside parties, except in the following limited and necessary situations:'}
          </p>
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              <strong className="text-stone-900">{isMarathi ? 'अधिकृत कर्मचारी व समन्वयक:' : 'Authorized School Personnel:'}</strong>{' '}
              {isMarathi
                ? 'प्रवेश शिक्षक, वसतिगृह अधीक्षक, लेखापाल किंवा स्वयंसेवक समन्वयक जे आपल्या चौकशीला उत्तर देण्यासाठी नियुक्त आहेत.'
                : 'School administrators, special educators, therapists, or donation coordinators who need your contact information to reply to your specific request.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'तांत्रिक सेवा पुरवठादार:' : 'Direct Service Providers:'}</strong>{' '}
              {isMarathi
                ? 'वर नमूद केलेले तांत्रिक सेवा व वेब होस्टिंग पुरवठादार जे संकेतस्थळ चालवण्यासाठी तांत्रिक पायाभूत सेवा देतात.'
                : 'Direct technical infrastructure and hosting providers operating under standard terms strictly to maintain and serve our website.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'कायदेशीर आवश्यकता:' : 'Legal Compliance:'}</strong>{' '}
              {isMarathi
                ? 'जर भारतीय कायदा, न्यायालयीन आदेश किंवा शासकीय दिव्यांग कल्याण विभागाकडून कायदेशीर मागणी केली गेली, तर आवश्यक ती माहिती उघड करणे बंधनकारक राहील.'
                : 'When required to comply with applicable Indian laws, statutory reporting guidelines, court orders, or official inquiries from government regulatory authorities.'}
            </li>
          </ul>
        </div>
      </section>

      {/* Section H: Data Retention */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '८. माहितीचा साठवणूक कालावधी (Data Retention)' : '8. Data Retention'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आम्ही आपल्या फॉर्मच्या नोंदी केवळ शाळेच्या प्रशासकीय संवादासाठी आणि आवश्यक कायदेशीर कामांसाठी लागणाऱ्या कालावधीपर्यंतच ई-मेल दप्तरात जतन करतो:'
              : 'Because form submissions are delivered directly to the school’s email inbox, information is retained in administrative correspondence only for the period necessary to fulfill its operational purpose:'}
          </p>
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              <strong className="text-stone-900">{isMarathi ? 'प्रवेश चौकशी:' : 'Admission Inquiries:'}</strong>{' '}
              {isMarathi
                ? 'शैक्षणिक वर्षभरात प्रवेश प्रक्रिया पूर्ण होईपर्यंत किंवा पालकांसोबत पुढील समुपदेशन सुरू असेपर्यंत माहिती ठेवली जाते.'
                : 'Retained during the active academic enrollment cycle to evaluate placement, facilitate parent counselling, and prepare physical school records if admission is confirmed.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'देणगी नोंदी:' : 'Donation Communications:'}</strong>{' '}
              {isMarathi
                ? 'देणगीदारांचे नाव, संपर्क व पावती तपशील हे भारतीय ट्रस्ट ॲक्ट आणि प्राप्तिकर नियमावलीनुसार लेखापरीक्षण (Audit) पूर्ण होईपर्यंत नियमानुसार जतन केले जातात.'
                : 'Donor contact records and receipt references are maintained in accordance with institutional accounting and statutory trust audit requirements under applicable Indian laws.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'सर्वसाधारण संपर्क व स्वयंसेवक अर्ज:' : 'General Inquiries & Volunteer Data:'}</strong>{' '}
              {isMarathi
                ? 'विचारलेल्या प्रश्नाचे निराकरण झाल्यानंतर किंवा स्वयंसेवक उपक्रम पूर्ण झाल्यानंतर अनावश्यक माहिती नियमितपणे काढून टाकली जाते.'
                : 'Routine questions and inquiries are archived or cleared periodically after the requested information or visit has concluded.'}
            </li>
          </ul>
        </div>
      </section>

      {/* Section I: Your Privacy Rights */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '९. आपले अधिकार व संपर्क विनंत्या' : '9. Your Privacy Rights & Choices'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आपण आमच्या शाळेकडे कोणती माहिती सादर केली आहे हे जाणून घेण्याचा आणि त्यात दुरुस्ती करण्याचा आपल्याला पूर्ण अधिकार आहे. आपण खालील विनंत्या करू शकता:'
              : 'Visitors and parents have practical control over the personal information they provide to us. You may contact our administrative office at any time to:'}
          </p>
          <ul className="space-y-2 list-disc list-inside pl-1">
            <li>
              <strong className="text-stone-900">{isMarathi ? 'माहितीची पाहणी व माहिती विचारणे:' : 'Access & Review:'}</strong>{' '}
              {isMarathi
                ? 'आपण सादर केलेल्या संपर्काची माहिती तपासून पाहण्याची विनंती करू शकता.'
                : 'Request a summary of the contact information we hold in our email records regarding your enquiry.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'दुरुस्ती किंवा बदल:' : 'Correction & Updates:'}</strong>{' '}
              {isMarathi
                ? 'जर आपला फोन नंबर, पत्ता किंवा ई-मेल बदलला असेल, तर तो अद्ययावत करण्याची विनंती करू शकता.'
                : 'Request corrections if your phone number, email address, or submitted details have changed or contain errors.'}
            </li>
            <li>
              <strong className="text-stone-900">{isMarathi ? 'माहिती हटवण्याची विनंती (Deletion):' : 'Deletion / Opt-Out:'}</strong>{' '}
              {isMarathi
                ? 'जर आपण शाळेकडून पुढील संपर्क नको असल्यास, आपले संपर्क तपशील आमच्या ईमेल नोंदीतून काढून टाकण्याची विनंती करू शकता (कायदेशीर व लेखापरीक्षण आवश्यकता वगळता).'
                : 'Request that we delete your submitted contact records from our active correspondence, subject to any statutory accounting or trust documentation obligations.'}
            </li>
          </ul>
          <p className="text-xs text-stone-600">
            {isMarathi
              ? 'या अधिकारांचा वापर करण्यासाठी आपण आम्हाला थेट shreesaiseva.shivane.pune@gmail.com वर ई-मेल करू शकता किंवा शाळेच्या कार्यालयीन वेळेत +91 8380041500 वर फोन करू शकता.'
              : 'To exercise any of these options, simply write to us at shreesaiseva.shivane.pune@gmail.com or call our office at +91 8380041500 during working hours.'}
          </p>
        </div>
      </section>

      {/* Section J: Children's Privacy & Safeguarding */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-emerald-900 border-b border-emerald-100 pb-3">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१०. बाल संरक्षण, प्रतिष्ठा व वैद्यकीय नोंदींची गोपनीयता' : '10. Children’s Privacy, Safeguarding & Dignity'}
          </h2>
        </div>
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आमची शाळा विशेष गरजा असणाऱ्या (बौद्धिक व विकासात्मक दिव्यांग) मुलांसाठी काम करणारी निवासी संस्था आहे. त्यामुळे प्रत्येक विद्यार्थ्याची प्रतिष्ठा आणि सुरक्षितता आमच्यासाठी सर्वोच्च प्राधान्याची आहे.'
              : 'Because our institution is dedicated to caring for and educating children with intellectual and developmental challenges, safeguarding their dignity, physical security, and confidential records is central to our mission.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {/* Parental Submissions Only */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
              <h4 className="font-bold text-emerald-950 text-xs sm:text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-700" />
                {isMarathi ? 'केवळ पालकांमार्फत अर्ज' : 'Parental & Guardian Consent Only'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                {isMarathi
                  ? 'आम्ही कोणत्याही बालकाकडून परस्पर माहिती गोळा करत नाही. प्रवेशासंबंधित सर्व माहिती केवळ आई-वडील किंवा कायदेशीर पालकांच्या प्रत्यक्ष संमतीनेच स्वीकारली जाते.'
                  : 'We never solicit or accept direct personal information from minors online. All admission inquiries and child details must be submitted exclusively by parents or authorized legal guardians.'}
              </p>
            </div>

            {/* Dignity in Photography */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
              <h4 className="font-bold text-amber-950 text-xs sm:text-sm flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-amber-700" />
                {isMarathi ? 'स्वाभिमान व छायाचित्र धोरण' : 'Dignity in Media & Photography'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                {isMarathi
                  ? 'संकेतस्थळावरील सर्व छायाचित्रे केवळ शिक्षण, कला आणि क्रीडा क्षेत्रातील मुलांचा आनंद व यश दर्शवण्यासाठी पालकांच्या संमतीने वापरली जातात. लाचार किंवा अनुकंपा निर्माण करणाऱ्या छायाचित्रांना सक्त मनाई आहे.'
                  : 'We strictly reject pity-inducing or undignified media. All photographs published across our website celebrate genuine developmental milestones, learning, and sports victories, taken solely with informed parental consent.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-stone-700" />
              {isMarathi ? 'वैद्यकीय व शैक्षणिक नोंदींची पूर्ण गोपनीयता' : 'Confidentiality of Assessment & Medical Records'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isMarathi
                ? 'प्रत्येक विद्यार्थ्याचे दिव्यांग प्रमाणपत्र (UDID), वैद्यकीय इतिहास, मानसशास्त्रीय चाचण्या आणि दीक्षा अभ्यासक्रमाच्या प्रगती नोंदी अत्यंत गोपनीय ठेवल्या जातात. ही माहिती कोणत्याही सार्वजनिक संकेतस्थळावर प्रकाशित केली जात नाही आणि केवळ अधिकृत शिक्षक, डॉक्टर व पालकांसाठीच मर्यादित असते.'
                : 'Every enrolled child’s disability evaluation, medical diagnostics, therapy journals, and academic progress records are maintained under strict institutional confidentiality. These developmental files are never published on this website and remain accessible exclusively to assigned special educators, examining medical specialists, and parents.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section K: External Links */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <ExternalLink className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '११. बाह्य संकेतस्थळांचे दुवे (External Links)' : '11. External Links'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'आमच्या संकेतस्थळावर अभ्यागतांच्या सोयीसाठी गुगल मॅप्स (शाळेचा नकाशा व मार्ग) किंवा शासकीय संकेतस्थळांचे दुवे असू शकतात. आम्ही या बाह्य संकेतस्थळांचे नियंत्रण करत नाही.'
              : 'Our website may provide helpful external links, such as Google Maps to assist visitors with campus navigation and route planning. Please note that external websites operate under their own independent terms and privacy notices.'}
          </p>
          <p className="text-xs text-stone-600">
            {isMarathi
              ? 'आपण अशा बाह्य संकेतस्थळांना भेट देताना त्यांच्या स्वतःच्या गोपनीयता धोरणाची तपासणी करावी. त्यांच्या गोपनीयता पद्धतींसाठी श्री साई सेवा विद्यालय जबाबदार नाही.'
              : 'We encourage you to review the privacy policies of any third-party websites you visit. Shree Sai Seva Niwasi Matimand School is not responsible for the privacy practices or content of third-party platforms.'}
          </p>
        </div>
      </section>

      {/* Section L: Changes to This Privacy Policy */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <RefreshCw className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१२. या धोरणातील बदल (Policy Updates)' : '12. Updates to This Privacy Policy'}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'शाळेच्या प्रशासकीय पद्धतींमध्ये किंवा शासकीय नियमांमध्ये बदल झाल्यास हे गोपनीयता धोरण वेळोवेळी अद्ययावत केले जाऊ शकते. जेव्हा धोरणात कोणताही बदल केला जाईल, तेव्हा या पृष्ठावरील "शेवटचे अद्यतन" तारीख बदलली जाईल.'
              : 'We may update this Privacy Policy from time to time to reflect modifications in our operational procedures, technical infrastructure, or applicable regulatory guidelines. Any updates will be posted directly to this page with a revised "Last Updated" date.'}
          </p>
          <p className="text-xs text-stone-600">
            {isMarathi
              ? 'आम्ही अभ्यागतांना व पालकांना वेळोवेळी या पृष्ठास भेट देऊन अद्यतनांची माहिती घेण्याचे आवाहन करतो.'
              : 'We encourage visitors and parents to review this page periodically to stay informed about how we safeguard personal data.'}
          </p>
        </div>
      </section>

      {/* Section M: Official Contact Information */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-stone-900 border-b border-stone-100 pb-3">
          <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-lg font-bold">
            {isMarathi ? '१३. संपर्क व गोपनीयता विचारणा केंद्र' : '13. Official Contact for Privacy Inquiries'}
          </h2>
        </div>
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            {isMarathi
              ? 'या गोपनीयता धोरणाबद्दल, आपल्या मुलाच्या प्रवेश चौकशीबद्दल किंवा आपल्या वैयक्तिक माहितीबद्दल काहीही प्रश्न असल्यास आपण खालील अधिकृत संपर्क साधनांद्वारे थेट संपर्क साधू शकता:'
              : 'If you have any questions regarding this Privacy Policy, your submitted form inquiries, or the handling of personal data, please reach out to our administration office through any of our verified contact channels:'}
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
                  {isMarathi ? 'ई-मेलद्वारे पाठवलेल्या चौकशीला त्वरित उत्तर दिले जाते.' : 'Monitored daily by administrative staff.'}
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
          {isMarathi ? 'कायदेशीर नोंद व अधिकृत माहिती:' : 'Institutional Disclaimer & Attribution:'}
        </p>
        <p className="leading-relaxed">
          {isMarathi
            ? 'हे संकेतस्थळ श्री साई सेवा निवासी मतिमंद विद्यालयाचे अधिकृत माहिती केंद्र आहे. प्रवेश, सुविधा आणि विशेष मुलांच्या संगोपनाचे सर्व नियम संस्थात्मक धोरण आणि महाराष्ट्र शासन दिव्यांग कल्याण आयुक्तालयाच्या नियमांनुसार चालवले जातात.'
            : 'This website is the official informational and community engagement portal for Shree Sai Seva Niwasi Matimand School. All details regarding admissions, infrastructure, boarding care, and special educational routines are governed by institutional guidelines and applicable welfare directives.'}
        </p>
      </footer>
    </div>
  );
};
