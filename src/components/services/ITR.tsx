import SEO from '../SEO';
import React from 'react';
import { FileText, Check, ArrowRight, TrendingDown, Percent, Sparkles, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { itrFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';

function ItrIllustration() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      title: "Regime Optimization",
      subtitle: "Instant parallel calculations comparing Old vs New tax slabs for maximum savings.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Old vs New Regime Selection">
          <rect width="440" height="220" rx="16" fill="#FBF9FF" />

          {/* Old scheme */}
          <g transform="translate(15, 20)">
            <rect width="195" height="180" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect width="195" height="28" rx="12" fill="#64748B" />
            <text x="15" y="18" fontSize="9.5" fontWeight="bold" fill="#FFFFFF">Old Regime</text>
            
            <g transform="translate(15, 42)" fill="#374151" fontSize="7.5">
              <text x="0" y="10">80C LIC & PF</text>
              <text x="165" y="10" textAnchor="end" fontWeight="bold" fill="#EF4444">- ₹1,50,000</text>
              <line x1="0" y1="14" x2="165" y2="14" stroke="#F1F5F9" />

              <text x="0" y="26">80D Health Premiums</text>
              <text x="165" y="26" textAnchor="end" fontWeight="bold" fill="#EF4444">- ₹25,000</text>
              <line x1="0" y1="30" x2="165" y2="30" stroke="#F1F5F9" />

              <text x="0" y="42">Sec 24b Home Interest</text>
              <text x="165" y="42" textAnchor="end" fontWeight="bold" fill="#EF4444">- ₹2,00,000</text>
              
              <rect y="54" width="165" height="42" rx="4" fill="#FEF2F2" />
              <text x="10" y="67" fontSize="7" fontWeight="bold" fill="#991B1B">Est. Tax Payable</text>
              <text x="10" y="82" fontSize="11" fontWeight="black" fill="#B91C1C">₹1,14,400</text>
            </g>
          </g>

          {/* New Scheme */}
          <g transform="translate(230, 20)">
            <rect width="195" height="180" rx="12" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
            <rect width="195" height="28" rx="12" fill="#4F46E5" />
            <text x="15" y="18" fontSize="9.5" fontWeight="extrabold" fill="#FFFFFF">New Regime</text>

            <g transform="translate(15, 42)" fill="#374151" fontSize="7.5">
              <text x="0" y="10">Claims (80C, 80D)</text>
              <text x="165" y="10" textAnchor="end" fontWeight="bold" fill="#64748B">₹0 (Disallowed)</text>
              <line x1="0" y1="14" x2="165" y2="14" stroke="#F1F5F9" />

              <text x="0" y="26">Standard Deduction</text>
              <text x="165" y="26" textAnchor="end" fontWeight="bold" fill="#059669">- ₹75,000</text>
              <line x1="0" y1="30" x2="165" y2="30" stroke="#F1F5F9" />

              <text x="0" y="42">Progressive Slabs</text>
              <text x="165" y="42" textAnchor="end" fontWeight="bold" fill="#4F46E5">Lower Tax Slabs</text>

              <rect y="54" width="165" height="42" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="0.5" />
              <text x="10" y="67" fontSize="7.5" fontWeight="black" fill="#065F46">Est. Tax Payable</text>
              <text x="10" y="84" fontSize="12" fontWeight="black" fill="#047857">₹85,800 ✓</text>
              <text x="155" y="81" fontSize="7" fontWeight="black" fill="#047857" textAnchor="end">Save ₹28.6K!</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Multi-Source Incomes",
      subtitle: "Consolidating revenues seamlessly across salary, business profit, stocks, and rentals.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Income Source Breakdown">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          
          <g transform="translate(40, 30)">
            <rect width="160" height="150" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 0 32 L 160 32" stroke="#F1F5F9" />
            <text x="15" y="20" fontSize="10" fontWeight="bold" fill="#0F172A">Earnings Breakdown</text>
            
            <g transform="translate(15, 45)" fontSize="8" fill="#334155">
              <text x="0" y="15">💼 Salaried Income</text>
              <text x="130" y="15" textAnchor="end" fontWeight="bold">₹15,40,000</text>
              <line x1="0" y1="22" x2="130" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">📈 Capital Gains (STCG)</text>
              <text x="130" y="38" textAnchor="end" fontWeight="bold">₹1,85,000</text>
              <line x1="0" y1="45" x2="130" y2="45" stroke="#F1F5F9" />

              <text x="0" y="61">💰 Interest & Dividends</text>
              <text x="130" y="61" textAnchor="end" fontWeight="bold">₹42,500</text>
              <line x1="0" y1="68" x2="130" y2="68" stroke="#F1F5F9" />

              <text x="0" y="84" fontWeight="bold" fill="#4F46E5">Gross Income</text>
              <text x="130" y="84" textAnchor="end" fontWeight="black" fill="#4F46E5">₹17,67,500</text>
            </g>
          </g>

          <g transform="translate(240, 35)">
            <circle cx="80" cy="70" r="50" fill="none" stroke="#E2E8F0" strokeWidth="20" />
            <circle cx="80" cy="70" r="50" fill="none" stroke="#4F46E5" strokeWidth="20" strokeDasharray="314" strokeDashoffset="45" />
            <circle cx="80" cy="70" r="50" fill="none" stroke="#06B6D4" strokeWidth="20" strokeDasharray="314" strokeDashoffset="260" />
            <circle cx="80" cy="70" r="50" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="314" strokeDashoffset="300" />
            
            <text x="80" y="74" fontSize="11" fontWeight="black" fill="#0F172A" textAnchor="middle">₹17.67L</text>
          </g>
        </svg>
      )
    },
    {
      title: "26AS & AIS Verification",
      subtitle: "Validating reported Form 26AS tax credits with active Annual Information Statements.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="AIS verification matching">
          <rect width="440" height="220" rx="16" fill="#F0FDF4" />
          
          <g transform="translate(40, 35)">
            <rect width="150" height="140" rx="12" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1" />
            <text x="15" y="22" fontSize="9.5" fontWeight="bold" fill="#065F46">Form 26AS Records</text>
            
            <g transform="translate(15, 42)" fontSize="8" fill="#334155">
              <text x="0" y="15">TDS (Employer)</text>
              <text x="120" y="15" textAnchor="end" fontWeight="bold" fill="#059669">₹1,18,400</text>
              <line x1="0" y1="21" x2="120" y2="21" stroke="#F1F5F9" />

              <text x="0" y="35">TDS (HDFC Bank)</text>
              <text x="120" y="35" textAnchor="end" fontWeight="bold" fill="#059669">₹8,500</text>
              <line x1="0" y1="41" x2="120" y2="41" stroke="#F1F5F9" />

              <text x="0" y="55">TDS (Rental Broker)</text>
              <text x="120" y="55" textAnchor="end" fontWeight="bold" fill="#059669">₹24,000</text>
            </g>
          </g>

          <g transform="translate(250, 35)">
            <rect width="150" height="140" rx="12" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.2" />
            <text x="15" y="22" fontSize="9.5" fontWeight="bold" fill="#1E1B4B">Annual Statement (AIS)</text>
            
            <g transform="translate(15, 42)" fontSize="8" fill="#334155">
              <text x="0" y="15" fill="#4F46E5" fontWeight="bold">Salary matching</text>
              <text x="120" y="15" textAnchor="end" fontWeight="bold" fill="#4F46E5">₹1,18,400</text>
              <line x1="0" y1="21" x2="120" y2="21" stroke="#EEF2FF" />

              <text x="0" y="35" fill="#4F46E5" fontWeight="bold">FD Interest matching</text>
              <text x="120" y="35" textAnchor="end" fontWeight="bold" fill="#4F46E5">₹8,500</text>
              <line x1="0" y1="41" x2="120" y2="41" stroke="#EEF2FF" />

              <text x="0" y="55" fill="#4F46E5" fontWeight="bold">Rent received matching</text>
              <text x="120" y="55" textAnchor="end" fontWeight="bold" fill="#4F46E5">₹24,000</text>
            </g>
          </g>

          <circle cx="220" cy="100" r="14" fill="#10B981" />
          <path d="M 215 100 L 219 104 L 226 96" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "e-Verification Receipt",
      subtitle: "Obtain valid, officially verified digital acknowledgment files from the Income Tax department.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="ITR Filing success receipt">
          <rect width="440" height="220" rx="16" fill="#F5F3FF" />
          
          <g transform="translate(70, 25)">
            <rect width="300" height="170" rx="14" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1" />
            <path d="M 0 14 Q 0 0 14 0 L 286 0 Q 300 0 300 14 L 300 38 L 0 38 Z" fill="#4F46E5" />
            <text x="20" y="23" fontSize="10" fontWeight="bold" fill="#FFFFFF">INCOME TAX ACKNOWLEDGMENT (ITR-V)</text>
            
            <g transform="translate(18, 55)" fontSize="8" fill="#334155">
              <text x="0" y="15">Assessment Year (AY)</text>
              <text x="264" y="15" fontWeight="black" textAnchor="end">2026 - 2027</text>
              <line x1="0" y1="21" x2="264" y2="21" stroke="#F1F5F9" />

              <text x="0" y="35">e-Filing Date & Time</text>
              <text x="264" y="35" fontWeight="bold" textAnchor="end">23-Jun-2026 11:24 AM</text>
              <line x1="0" y1="41" x2="264" y2="41" stroke="#F1F5F9" />

              <text x="0" y="55">Acknowledgment No.</text>
              <text x="264" y="55" fontWeight="mono" fill="#4F46E5" textAnchor="end">294018269018442</text>
              <line x1="0" y1="61" x2="264" y2="61" stroke="#F1F5F9" />

              <rect y="75" width="264" height="26" rx="4" fill="#ECFDF5" />
              <text x="132" y="91" fontSize="7.5" fontWeight="bold" fill="#047857" textAnchor="middle">✓ Verified via Aadhaar OTP (EVC Code Generated)</text>
            </g>
          </g>
        </svg>
      )
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full max-w-[480px] mx-auto overflow-hidden rounded-2xl flex items-center justify-center">
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto"
      >
        {slides[activeSlide].svg}
      </motion.div>
    </div>
  );
}

const ITR = () => {
  const { t, language } = useLanguage();
  const data = t.serviceDetail?.itr || translations.en.serviceDetail.itr;
  const common = t.common || translations.en.common;
  const services = t.services?.items || translations.en.services.items;

  const backText = {
    en: 'Back to Services',
    hi: 'सेवाओं पर वापस जाएं',
    kn: 'ಸೇವೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
    te: 'సేవలకు తిరిగి వెళ్ళండి',
    mr: 'सेवांवर वापस जा',
    ta: 'சேவைகளுக்குத் திரும்பு'
  }[language as string] || 'Back to Services';

  return (
    <>
      <SEO
        title="ITR Filing Services in India | Income Tax Return | Byalance"
        description="File your Income Tax Return accurately and on time with Byalance. Expert ITR filing for salaried individuals, freelancers, businesses, and companies across India. Starting ₹999."
        keywords="ITR filing India, income tax return filing, ITR services Bengaluru, file ITR online, ITR for salaried, ITR for freelancers, Form 26AS, income tax notice response, Section 80C deductions, old vs new tax regime"
        canonical="https://byalance.com/services/itr-services"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: data.title || "ITR Filing Services", url: "/services/itr-services" }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Link
                to="/#itr-services"
                className="inline-flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-700 bg-blue-50/70 hover:bg-blue-100/70 rounded-xl transition-all shadow-sm hover:shadow"
                aria-label={backText}
                title={backText}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="block md:block"><ItrIllustration /></div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{common.whatsIncluded}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
              {data.whyDesc.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-gray-600 mb-4 last:mb-0">{para}</p>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whoTitle}</h2>
              <ul className="space-y-3">
                {data.whoItems.map((w: string) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />{w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-4">{data.ctaDesc}</p>
              <a href="https://wa.me/917406296116" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-3">
                {common.chatWhatsapp}
              </a>
              <a href="/#contact"
                className="block w-full text-center border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                {common.sendEnquiry}
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{common.relatedServices}</h3>
              <ul className="space-y-2">
                {[
                  { label: services[0]?.title, to: "/services/accounting-bookkeeping" },
                  { label: services[2]?.title, to: "/services/gst-services" },
                  { label: services[3]?.title, to: "/services/tds-services" },
                  { label: services[4]?.title, to: "/services/payroll-processing" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <a href={to} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FAQSchema faqs={itrFAQs} title="ITR Filing — Frequently Asked Questions" />
        </div>
      </div>
    </>
  );
};

export default ITR;