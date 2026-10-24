import React, { useState } from 'react';
import {
  CalendarDays,
  Copy,
  CheckCircle2,
  Utensils,
  BookOpen,
  GraduationCap,
  Gift,
  Shirt,
  Mail,
  Phone,
  UserRound,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSchoolData } from '../context/SchoolDataContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface DonatePageProps {
  onOpenDonateModal?: () => void;
  onOpenVolunteerModal: () => void;
  onNavigateHome?: () => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({
  onOpenVolunteerModal,
  onNavigateHome,
}) => {
  const { language, t } = useLanguage();
  const { schoolInfo } = useSchoolData();
  const isMarathi = language === 'mr';

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedCause, setSelectedCause] = useState('');
  const [donationType, setDonationType] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const causes = [
    {
      value: 'One Day Special Meal (Annadanam)',
      label: 'One Day Special Meal (Annadanam)',
      mr: 'एका दिवसाचे विशेष भोजन (अन्नदान)',
      bgImage: '/26.jpg',
      icon: Utensils,
      color: '#d94819',
      bgColor: 'bg-[#fffaf6]',
      borderColor: 'border-orange-200/60',
      hoverBorder: 'hover:border-orange-400',
      iconBg: 'bg-[#d94819]',
      descriptionEn:
        'Sponsor wholesome, nutritious breakfast, lunch, and dinner for all residential children on a special occasion or birthday.',
      descriptionMr:
        'विशेष प्रसंगी किंवा वाढदिवसानिमित्त निवासी मुलांसाठी पौष्टिक नाश्ता, दुपारचे व रात्रीचे जेवण प्रायोजित करा.',
    },
    {
      value: 'Educational & Sensory Learning Kit',
      label: 'Educational & Sensory Learning Kit',
      mr: 'शैक्षणिक व संवेदी साहित्य संच',
      bgImage: '/educational.png',
      icon: BookOpen,
      color: '#c2185b',
      bgColor: 'bg-[#fff7fa]',
      borderColor: 'border-pink-200/60',
      hoverBorder: 'hover:border-pink-400',
      iconBg: 'bg-[#c2185b]',
      descriptionEn:
        'Provide multisensory wooden blocks, flashcards, puzzle sets, and learning materials for early intervention and cognitive motor training.',
      descriptionMr:
        'विशेष मुलांच्या बौद्धिक व ज्ञानेंद्रिय विकासासाठी संवेदी साहित्य, शैक्षणिक खेळणी व प्रशिक्षण साहित्य उपलब्ध करून द्या.',
    },
    {
      value: "Sponsor a Child's Education",
      label: "Sponsor a Child's Education",
      mr: 'मुलाच्या शिक्षणासाठी प्रायोजकत्व',
      bgImage: '/sponsor.png',
      icon: GraduationCap,
      color: '#0d7a5b',
      bgColor: 'bg-[#f5fbf7]',
      borderColor: 'border-emerald-200/60',
      hoverBorder: 'hover:border-emerald-400',
      iconBg: 'bg-[#0d7a5b]',
      descriptionEn:
        'Support a child’s complete education, therapy, medical care, and daily boarding needs for your chosen duration.',
      descriptionMr:
        'एका मुलाचे संपूर्ण शिक्षण, थेरपी आणि निवासाचा खर्च उचलून त्यांच्या उज्ज्वल भविष्यासाठी प्रायोजक बना.',
    },
    {
      value: 'In-Kind Donations (Grains, Groceries & Daily Essentials)',
      label: 'In-Kind Donations (Grains, Groceries & Daily Essentials)',
      mr: 'धान्य, किराणा व दैनंदिन गरजेच्या वस्तू',
      bgImage: '/inkind.png',
      icon: Gift,
      color: '#b45309',
      bgColor: 'bg-[#fffdf5]',
      borderColor: 'border-amber-200/60',
      hoverBorder: 'hover:border-amber-400',
      iconBg: 'bg-[#b45309]',
      descriptionEn:
        'Contribute essential items such as grains, groceries, hygiene products, and daily provisions for our hostel mess.',
      descriptionMr:
        'शाळेच्या वसतिगृहासाठी लागणारे धान्य, किराणा माल आणि दैनंदिन वापराच्या वस्तू थेट दान करा.',
    },
    {
      value: 'New Clothes for Our Children',
      label: 'New Clothes for Our Children',
      mr: 'मुलांसाठी नवीन कपडे',
      bgImage: '/new.png',
      icon: Shirt,
      color: '#1d4ed8',
      bgColor: 'bg-[#f7faff]',
      borderColor: 'border-blue-200/60',
      hoverBorder: 'hover:border-blue-400',
      iconBg: 'bg-[#1d4ed8]',
      descriptionEn:
        'Help us provide comfortable, dignified, and festive new clothes for our residential students.',
      descriptionMr:
        'निवासी मुलांसाठी सण-उत्सव आणि दैनंदिन वापरासाठी नवीन, आरामदायी कपड्यांची भेट द्या.',
    },
  ];

  const durations = [
    {
      value: '1 month',
      title: 'One Month',
      mr: 'एक महिना',
      desc: "Support a child's education and care for one month.",
      descMr: 'एका महिन्यासाठी शिक्षण व संगोपनासाठी मदत करा.',
    },
    {
      value: '3 months',
      title: 'Three Months',
      mr: 'तीन महिने',
      desc: "Support a child's education and care for three months.",
      descMr: 'तीन महिन्यांसाठी शिक्षण व संगोपनासाठी मदत करा.',
    },
    {
      value: '6 months',
      title: 'Six Months',
      mr: 'सहा महिने',
      desc: "Support a child's education and care for six months.",
      descMr: 'सहा महिन्यांसाठी शिक्षण व संगोपनासाठी मदत करा.',
    },
    {
      value: '1 year',
      title: 'One Year',
      mr: 'एक वर्ष',
      desc: "Support a child's education and care for one year.",
      descMr: 'एका वर्षासाठी शिक्षण व संगोपनासाठी मदत करा.',
    },
  ];

  const inKindCategories = [
    {
      titleEn: 'Grains & Food Supplies',
      titleMr: 'धान्य आणि अन्नधान्य',
      detailsEn:
        'Wheat, rice, lentils, pulses, cooking oil, spices, and daily nutritional grains required for nutritious meals.',
      detailsMr:
        'गहू, तांदूळ, डाळी, कडधान्ये, खाद्यतेल, मसाले व दैनंदिन पौष्टिक धान्य.',
    },
    {
      titleEn: 'Groceries & Daily Essentials',
      titleMr: 'किराणा आणि दैनंदिन गरजेच्या वस्तू',
      detailsEn:
        'Bath soaps, washing powders, toothpaste, toothbrushes, hair oil, hygiene products, and sanitizing supplies.',
      detailsMr:
        'अंघोळीचे साबण, कपड्यांचे पावडर, टूथपेस्ट, ब्रश, खोबरेल तेल व स्वच्छता साहित्य.',
    },
    {
      titleEn: 'New Clothes & Apparel',
      titleMr: 'नवीन कपडे',
      detailsEn:
        'Brand new, unworn shirts, t-shirts, trousers, nightwear, sweaters, and socks for residential boys and girls.',
      detailsMr:
        'निवासी मुलामुलींसाठी पूर्णपणे नवीन कपडे, टी-शर्ट, पँट, स्वेटर व मोजे.',
    },
    {
      titleEn: 'Stationery, Books & Sensory Materials',
      titleMr: 'शैक्षणिक साहित्य आणि वह्या-पुस्तके',
      detailsEn:
        'Drawing books, notebooks, crayons, non-toxic colors, craft paper, wooden educational puzzles, and sensory learning aids.',
      detailsMr:
        'चित्रकला वह्या, रंग, पेन्सिल, शैक्षणिक खेळणी, पझल्स व संवेदी शिक्षण साहित्य.',
    },
  ];

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      window.setTimeout(() => setCopiedField(null), 1600);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSelectCause = (causeValue: string) => {
    setSelectedCause(causeValue);
    setDonationType(causeValue);
    const formElem = document.getElementById('donate-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitEnquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      cause: String(formData.get('cause') || '').trim(),
      donationType: String(formData.get('donationType') || '').trim(),
      duration: String(formData.get('duration') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      website: String(formData.get('website') || '').trim(),
    };

    try {
      const response = await fetch('/api/donation-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || 'Unable to submit your enquiry right now.'
        );
      }

      setStatus(
        isMarathi
          ? 'धन्यवाद! तुमची चौकशी शाळेला ईमेलद्वारे पाठवली गेली आहे.'
          : 'Thank you! Your donation enquiry has been submitted to the school by email.'
      );
      form.reset();
      setSelectedCause('');
      setDonationType('');
      setDuration('');
    } catch {
      setStatus(
        isMarathi
          ? 'चौकशी पाठवता आली नाही. कृपया पुन्हा प्रयत्न करा किंवा शाळेशी थेट संपर्क साधा.'
          : 'We could not send your enquiry. Please try again or contact the school directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const bank = schoolInfo.bankDetails;

  return (
    <main className="donate-page mx-auto max-w-[1440px] space-y-6 px-3 pb-12 pt-2 sm:px-5 lg:px-8 font-sans">
      <Breadcrumb
        currentEn="Support Us / Donate"
        currentMr="देणगी / सहकार्य"
        onNavigateHome={onNavigateHome}
      />

      {/* HERO SECTION WITH contribution.png AS TRUE BACKGROUND IMAGE (WHITE CARD) */}
      <section className="relative isolate min-h-[360px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md sm:min-h-[420px]">
        {/* Background image: clearly visible, darker and rich across the entire container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/contribution.png"
            alt="Your support creates brighter futures"
            className="h-full w-full object-cover object-center opacity-85"
          />
          {/* Subtle gradient wash: keeps the image vividly visible and darker while ensuring high text contrast on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/20" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex min-h-[360px] flex-col justify-center px-6 py-10 sm:px-10 md:max-w-2xl lg:max-w-3xl lg:px-14 sm:min-h-[420px]">
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-amber-50/95 border border-amber-300/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 shadow-xs">
            {isMarathi ? 'उज्ज्वल भविष्यासाठी एकत्र' : 'Together for a brighter tomorrow'}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            {isMarathi ? 'तुमचे सहकार्य' : 'Your Support'}{' '}
            <span className="block text-[#d94819]">
              {isMarathi ? 'घडवते उज्ज्वल भविष्य' : 'Creates Brighter Futures'}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-stone-800 sm:text-base">
            {isMarathi
              ? 'प्रत्येक लहान-मोठे योगदान आमच्या विशेष मुलांना योग्य काळजी, दर्जेदार शिक्षण आणि सुरक्षित वातावरण देण्यास मदत करते. त्यांच्या पंखांना बळ देऊन त्यांना स्वावलंबी बनवण्यासाठी हातमिळवणी करा.'
              : 'Every contribution helps us provide care, specialized education, therapy, and a nurturing environment for children with special needs. Together, we can give them opportunities to learn, grow, and live with dignity and independence.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#donate-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#d94819] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#b83810] hover:shadow-lg cursor-pointer"
            >
              <span>{isMarathi ? 'देणगी नोंदवा' : 'Make a Contribution'}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CHOOSE A CAUSE TO SUPPORT - ANIMATED GRID WITH BACKGROUND IMAGES */}
      <section className="relative pt-2">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#ffe8ed] px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-[#c2185b]">
            {isMarathi ? 'मदतीचे मार्ग' : 'Ways to Support'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#075a45] sm:text-3xl">
            {isMarathi ? 'मदतीचा पर्याय निवडा' : 'Choose a Cause to Support'}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
            {isMarathi
              ? 'तुमच्या आवडीनुसार आणि इच्छेनुसार खालीलपैकी कोणत्याही उपक्रमात थेट सहकार्य करू शकता.'
              : 'Your contribution helps us provide comprehensive care, therapy, and essential provisions. Select a cause that resonates with you.'}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {causes.map((cause, index) => (
            <article
              key={cause.value}
              onClick={() => handleSelectCause(cause.value)}
              className={`group relative isolate flex min-h-[230px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl ${
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              } ${cause.bgColor} ${cause.borderColor} ${cause.hoverBorder} ${
                selectedCause === cause.value ? 'ring-2 ring-stone-900 shadow-md' : ''
              }`}
            >
              {/* Designated Background Image - fits the entire card without blank space */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={cause.bgImage}
                  alt={cause.label}
                  className="h-full w-full object-cover object-center opacity-30 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-40"
                />
                <div
                  className={`absolute inset-0 ${cause.bgColor}/50 bg-white/20`}
                />
              </div>

              {/* Card Content with Crisp Legible Typography */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 ${cause.iconBg}`}
                  >
                    <cause.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold leading-snug text-stone-900 transition-colors duration-200 group-hover:text-stone-950">
                    {isMarathi ? cause.mr : cause.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-700">
                    {isMarathi ? cause.descriptionMr : cause.descriptionEn}
                  </p>
                </div>

                {index === 4 && (
                  <div className="mt-3">
                    <span className="inline-block rounded-md border border-blue-200 bg-blue-100/90 px-2.5 py-1 text-[11px] font-bold text-blue-900">
                      {isMarathi ? 'टीप: फक्त नवीन कपडे स्वीकारले जातात.' : 'Note: We accept only new clothes.'}
                    </span>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-stone-200/60 pt-2.5">
                  <span className="text-[11px] font-semibold text-stone-600 group-hover:text-stone-900">
                    {isMarathi ? 'निवडण्यासाठी येथे क्लिक करा' : 'Click to select this cause'}
                  </span>
                  <span className="text-xs font-bold text-stone-800 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPONSORSHIP DURATION SECTION */}
      <section className="relative overflow-hidden rounded-2xl border border-pink-200/70 bg-[#fff5f7] p-5 sm:p-7 shadow-sm">
        <div className="mb-2 inline-block rounded-full bg-[#fde2e8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#c2185b]">
          {isMarathi ? 'पालकत्व / प्रायोजकत्व' : 'Sponsor a Child'}
        </div>
        <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          {isMarathi ? 'प्रायोजकत्वाचा कालावधी निवडा' : 'Choose a Sponsorship Duration'}
        </h2>
        <p className="mb-4 text-xs text-stone-600 sm:text-sm">
          {isMarathi
            ? 'तुमच्या सोयीनुसार विद्यार्थ्याच्या शैक्षणिक व संगोपन खर्चासाठी कालावधी निवडा.'
            : 'Support a child’s education, specialized care, and daily nourishment for a duration that suits your preference.'}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {durations.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                setDuration(item.value);
                setSelectedCause("Sponsor a Child's Education");
                setDonationType("Sponsor a Child's Education");
                const formElem = document.getElementById('donate-form');
                if (formElem) {
                  formElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-pressed={duration === item.value}
              className={`group flex flex-col justify-between rounded-xl border bg-white p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg cursor-pointer ${
                duration === item.value
                  ? 'border-[#c2185b] ring-2 ring-[#c2185b]/30 shadow-sm'
                  : 'border-stone-200/80'
              }`}
            >
              <div>
                <span className="flex items-center gap-2 text-sm font-bold text-stone-900 transition-colors group-hover:text-[#c2185b]">
                  <CalendarDays className="h-4 w-4 shrink-0 text-[#c2185b] transition-transform duration-300 group-hover:scale-110" />
                  {isMarathi ? item.mr : item.title}
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-stone-600">
                  {isMarathi ? item.descMr : item.desc}
                </span>
              </div>
              <span className="mt-3 block text-[11px] font-semibold text-[#c2185b]">
                {duration === item.value ? '✓ Selected' : 'Select'}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* BANK TRANSFER SECTION */}
      <section id="bank-details" className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-[#f2faf5] p-5 sm:p-7 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-[#d6f5e3] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0d7a5b]">
              {isMarathi ? 'थेट बँक देणगी' : 'Direct Bank Transfer'}
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-[#075a45] sm:text-2xl">
              {isMarathi
                ? 'थेट बँक खात्यात देणगी (NEFT / RTGS / IMPS)'
                : 'Direct Bank Transfer (NEFT / RTGS / IMPS)'}
            </h2>
            <p className="mb-4 text-xs text-stone-600 sm:text-sm">
              {isMarathi
                ? 'शाळेच्या अधिकृत बँक खात्यात थेट देणगी जमा करण्यासाठी खालील तपशील वापरा.'
                : 'You can make a direct contribution to our official school bank account.'}
            </p>

            <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              {[
                ['Account Name', bank.accountHolderPlaceholder, 'name'],
                ['Bank Name', bank.bankNamePlaceholder, 'bank'],
                ['Account Number', bank.accountNumberPlaceholder, 'acc'],
                ['IFSC Code', bank.ifscPlaceholder, 'ifsc'],
                ['UPI ID', bank.upiIdPlaceholder, 'upi'],
              ].map(([label, value, key]) => (
                <div
                  key={key}
                  className="flex min-h-10 items-center justify-between gap-3 border-b border-stone-100 px-4 py-2.5 transition-colors duration-150 hover:bg-stone-50 last:border-b-0"
                >
                  <span className="text-xs font-medium text-stone-600">{label}</span>
                  <span className="ml-auto break-all text-right text-xs font-bold text-stone-900">
                    {value}
                  </span>
                  <button
                    type="button"
                    onClick={() => copy(value, key)}
                    aria-label={`Copy ${label}`}
                    title={`Copy ${label}`}
                    className="ml-1 rounded p-1.5 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
                  >
                    {copiedField === key ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="group flex h-full flex-col items-center justify-between rounded-xl border border-emerald-100 bg-white p-4 sm:p-5 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
            <h3 className="text-sm font-bold text-[#075a45]">
              {isMarathi ? 'स्कॅन करून देणगी द्या' : 'Scan & Donate'}
            </h3>
            <div className="my-3 flex w-full flex-1 items-center justify-center">
              <img
                src="/QR.jpg"
                alt="School UPI payment QR code"
                className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] rounded-lg border border-stone-200 bg-white p-1.5 object-contain shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <p className="break-all text-xs font-bold text-stone-800">
                {bank.upiIdPlaceholder}
              </p>
              <p className="mt-1.5 text-xs text-stone-500">
                GPay · PhonePe · Paytm · BHIM · Any UPI App
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN-KIND DONATIONS - ITEMS WE ACCEPT WITH contribution.png BACKGROUND COVERING THE SECTION */}
      <section className="relative isolate overflow-hidden rounded-2xl border border-amber-200/70 bg-[#fffdf5] p-5 sm:p-8 shadow-sm">
        {/* Full background contribution.png covering the section - 2 shades darker and clearly visible */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/contribution.png"
            alt="Items we accept background"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-[#fffdf5]/55" />
        </div>

        <div className="relative z-10">
          <span className="inline-block rounded-full bg-[#fdecc4] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
            {isMarathi ? 'वस्तू स्वरूपात मदत' : 'In-Kind Donations'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {isMarathi ? 'स्वीकारल्या जाणाऱ्या वस्तू' : 'Items We Accept'}
          </h2>
          <p className="mt-1 max-w-3xl text-xs leading-relaxed text-stone-600 sm:text-sm">
            {isMarathi
              ? 'आमच्या निवासी विद्यार्थ्यांच्या दैनंदिन गरजा आणि पोषणासाठी आपण थेट वस्तू स्वरूपात मदत करू शकता.'
              : 'You can contribute essential provisions that directly support the daily nourishment, hygiene, and learning needs of our residential children.'}
          </p>

          {/* Vertical structured layout with clean text, no icon components or gimmicky symbols, without accepted labels */}
          <div className="mt-6 space-y-3.5">
            {inKindCategories.map((item, idx) => (
              <div
                key={item.titleEn}
                className="group relative flex flex-col justify-between rounded-xl border border-amber-200/80 bg-white/90 backdrop-blur-xs p-4 sm:p-5 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:translate-x-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 transition-colors duration-200 group-hover:text-amber-900 sm:text-base">
                      {isMarathi ? item.titleMr : item.titleEn}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600 sm:text-sm">
                      {isMarathi ? item.detailsMr : item.detailsEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* PLEASE NOTE CARD (Prominent notice regarding old/used items) */}
            <div className="group relative rounded-xl border-2 border-rose-300/80 bg-[#fff1f2] p-4 sm:p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-200 text-xs font-bold text-rose-800">
                    !
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-rose-900 sm:text-base">
                      {isMarathi ? 'कृपया नोंद घ्या (महत्त्वाची सूचना)' : 'Please Note (Important Policy)'}
                    </h3>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-stone-800 sm:text-sm">
                      {isMarathi
                        ? 'आम्ही कोणत्याही प्रकारचे जुने किंवा वापरलेले साहित्य (उदा. जुने कपडे, जुनी वह्या-पुस्तके, जुने स्टेशनरी साहित्य किंवा इतर कोणत्याही वापरलेल्या वस्तू) स्वीकारत नाही. मुलांच्या स्वच्छता, आरोग्य आणि सन्मानासाठी सर्व दान केलेल्या वस्तू पूर्णपणे नवीन आणि चांगल्या दर्जाच्या असणे आवश्यक आहे.'
                        : 'We strictly do not accept old or used items of any kind (whether clothes, stationery, books, or any other supplies). To uphold hygiene, dignity, and care for our residential children, all donated items must be brand new.'}
                    </p>
                  </div>
                </div>
                <span className="self-start whitespace-nowrap rounded-md bg-rose-700 px-3 py-1 text-[11px] font-bold text-white sm:self-center">
                  {isMarathi ? 'केवळ नवीन वस्तू' : 'Brand New Only'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONOR ENQUIRY FORM */}
      <section id="donate-form" className="relative overflow-hidden rounded-2xl border border-sky-200/70 bg-[#f4f9ff] p-5 sm:p-8 shadow-sm">
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-[#dbeafe] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1e40af]">
            {isMarathi ? 'तुमचे सहकार्य नोंदवा' : 'Share Your Support'}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {isMarathi ? 'देणगी माहिती फॉर्म' : 'Donate Now / Enquiry Form'}
          </h2>
          <p className="mb-6 text-xs text-stone-600 sm:text-sm">
            {isMarathi
              ? 'कृपया आपले तपशील भरा जेणेकरून आम्ही आपले आभार मानू शकू आणि आपल्या सहकार्याचे नियोजन करू शकू.'
              : 'Please fill in your details so that our school administration can acknowledge your contribution and coordinate with you.'}
          </p>

          <form onSubmit={submitEnquiry} className="space-y-4">
            {/* Hidden anti-spam honeypot */}
            <div
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px overflow-hidden"
            >
              <label htmlFor="donor-website">Leave this field empty</label>
              <input
                id="donor-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="block text-xs font-medium text-stone-700">
                Full Name <span className="text-red-600">*</span>
                <span className="mt-1 flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 shadow-xs focus-within:border-sky-500">
                  <UserRound className="h-4 w-4 text-stone-400" />
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="min-w-0 flex-1 bg-transparent text-xs text-stone-900 outline-none placeholder:text-stone-400"
                  />
                </span>
              </label>

              <label className="block text-xs font-medium text-stone-700">
                Phone Number <span className="text-red-600">*</span>
                <span className="mt-1 flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 shadow-xs focus-within:border-sky-500">
                  <Phone className="h-4 w-4 text-stone-400" />
                  <input
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="min-w-0 flex-1 bg-transparent text-xs text-stone-900 outline-none placeholder:text-stone-400"
                  />
                </span>
              </label>

              <label className="block text-xs font-medium text-stone-700">
                Email Address <span className="text-red-600">*</span>
                <span className="mt-1 flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 shadow-xs focus-within:border-sky-500">
                  <Mail className="h-4 w-4 text-stone-400" />
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 bg-transparent text-xs text-stone-900 outline-none placeholder:text-stone-400"
                  />
                </span>
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="block text-xs font-medium text-stone-700">
                Select Cause to Support <span className="text-red-600">*</span>
                <select
                  name="cause"
                  required
                  value={selectedCause}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedCause(val);
                    if (val) {
                      setDonationType(val);
                    }
                  }}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs text-stone-900 shadow-xs outline-none focus:border-sky-500"
                >
                  <option value="">Choose a cause</option>
                  {causes.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                  <option value="General Monetary Donation">
                    General Monetary Donation
                  </option>
                </select>
              </label>

              <label className="block text-xs font-medium text-stone-700">
                Donation Type <span className="text-red-600">*</span>
                <select
                  name="donationType"
                  required
                  value={donationType}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDonationType(val);
                    if (causes.some((c) => c.value === val)) {
                      setSelectedCause(val);
                    }
                  }}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs text-stone-900 shadow-xs outline-none focus:border-sky-500"
                >
                  <option value="">Select donation type</option>
                  <optgroup label="Selected Causes">
                    {causes.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="General Categories">
                    <option value="Monetary Donation">Monetary Donation</option>
                    <option value="In-Kind Donation">In-Kind Donation</option>
                  </optgroup>
                </select>
              </label>

              <label className="block text-xs font-medium text-stone-700">
                Preferred Sponsorship Duration (if applicable)
                <select
                  name="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs text-stone-900 shadow-xs outline-none focus:border-sky-500"
                >
                  <option value="">Select duration</option>
                  {durations.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-xs font-medium text-stone-700">
              Message (Optional)
              <span className="mt-1 flex items-start gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 shadow-xs focus-within:border-sky-500">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share any specific details (e.g., special occasion, in-kind delivery coordination, questions, etc.)"
                  className="min-w-0 flex-1 resize-y bg-transparent text-xs text-stone-900 outline-none placeholder:text-stone-400"
                />
              </span>
            </label>

            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#d94819] px-7 py-3 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#b83810] hover:shadow disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? 'Submitting…' : 'Submit Donation Details'}
              </button>
              <p className="text-xs text-stone-600">
                We will review your details and contact you promptly to coordinate your contribution.
              </p>
            </div>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-lg border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-medium text-emerald-900"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* VOLUNTEER ACTION SECTION */}
      <section className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#075a45] p-6 text-white sm:flex-row shadow-sm">
        <div>
          <h2 className="text-lg font-bold">{t('volunteerTitle')}</h2>
          <p className="mt-1 text-xs text-emerald-100">
            {t('volunteerSub')}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenVolunteerModal}
          className="rounded-full bg-white px-6 py-2.5 text-xs font-bold text-[#075a45] shadow-sm transition hover:bg-emerald-50 cursor-pointer"
        >
          {t('volunteerBtn')}
        </button>
      </section>
    </main>
  );
};

export default DonatePage;
