import SEO from '../SEO';
import React from 'react';
import { Receipt, Check, ArrowRight, ShieldAlert, CheckCircle, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { tdsFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';

function TdsIllustration() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      title: "Deductions Framework",
      subtitle: "Accurate computation separating payments based on category sections (24Q/26Q/27Q).",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="PAN rate engine matching">
          <rect width="440" height="220" rx="16" fill="#FFF1F2" />
          
          <g transform="translate(15, 20)">
            <rect width="410" height="180" rx="12" fill="#FFFFFF" stroke="#FFE4E6" strokeWidth="1" />
            
            {/* Return Type Badges */}
            <g transform="translate(25, 20)">
              <rect width="165" height="54" rx="8" fill="#FFFBFB" stroke="#FFE4E6" strokeWidth="1" />
              <text x="20" y="24" fontSize="11" fontWeight="bold" fill="#B91C1C">Form 24Q</text>
              <text x="20" y="38" fontSize="8" fill="#4B5563">Salaried Deductions</text>
              <rect x="110" y="16" width="40" height="15" rx="4" fill="#FEE2E2" />
              <text x="130" y="26" fontSize="7.5" fontWeight="bold" fill="#991B1B" textAnchor="middle">Sec 192</text>
            </g>

            <g transform="translate(220, 20)">
              <rect width="165" height="54" rx="8" fill="#FFFBFB" stroke="#FFE4E6" strokeWidth="1" />
              <text x="20" y="24" fontSize="11" fontWeight="bold" fill="#0F172A">Form 26Q</text>
              <text x="20" y="38" fontSize="8" fill="#4B5563">Non-Salaried Vendor</text>
              <rect x="110" y="16" width="40" height="15" rx="4" fill="#F3F4F6" />
              <text x="130" y="26" fontSize="7.5" fontWeight="bold" fill="#374151" textAnchor="middle">Sec 194C</text>
            </g>

            {/* Central matching block */}
            <g transform="translate(15, 95)">
              <rect width="380" height="60" rx="10" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1" />
              
              <circle cx="30" cy="30" r="14" fill="#2563EB" />
              <text x="30" y="34.5" fontSize="12" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">₹</text>
              <text x="55" y="28" fontSize="8" fontWeight="bold" fill="#1E293B">Invoice payment</text>
              <text x="55" y="40" fontSize="7.5" fill="#4B5563">₹1,00,000</text>

              <line x1="145" y1="30" x2="235" y2="30" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
              <text x="190" y="24" fontSize="8" fontWeight="bold" fill="#E11D48" textAnchor="middle">Cut @ 2%</text>

              <circle cx="350" cy="30" r="14" fill="#10B981" />
              <text x="350" y="34.5" fontSize="12" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">₹</text>
              <text x="325" y="28" fontSize="8" fontWeight="bold" fill="#1E293B" textAnchor="end">Net vendor pay</text>
              <text x="325" y="40" fontSize="7.5" fill="#4B5563" textAnchor="end">₹98,000</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "PAN Match Verification",
      subtitle: "Live checking validation ensuring 20% penal rates are avoided with valid PAN profiles.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="PAN Validation ledger">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          
          <g transform="translate(45, 30)">
            <rect width="350" height="155" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect width="350" height="32" rx="12" fill="#0F172A" />
            <text x="15" y="20" fontSize="10.5" fontWeight="bold" fill="#FFFFFF">PAN Validation & Deductee Status</text>
            
            <g transform="translate(15, 48)" fontSize="8.5" fill="#334155">
              <text x="0" y="15">Deductee PAN</text>
              <text x="200" y="15" fontWeight="mono" fill="#0F172A">*****1828K</text>
              <text x="320" y="15" fontWeight="bold" fill="#10B981" textAnchor="end">VALID ✓</text>
              <line x1="0" y1="21" x2="320" y2="21" stroke="#F1F5F9" />

              <text x="0" y="35">Bilateral Section match</text>
              <text x="200" y="35" fill="#0F172A">Section 194J (10%)</text>
              <text x="320" y="35" fontWeight="bold" fill="#10B981" textAnchor="end">MATCH OK</text>
              <line x1="0" y1="41" x2="320" y2="41" stroke="#F1F5F9" />

              <text x="0" y="55">Penal Flag check (Sec 206AA)</text>
              <text x="200" y="55" fill="#64748B">No Invalid profiles</text>
              <text x="320" y="55" fontWeight="bold" fill="#10B981" textAnchor="end">PASS ✓</text>
              
              <rect y="72" width="320" height="24" rx="4" fill="#ECFDF5" />
              <text x="160" y="87" fontSize="8" fontWeight="bold" fill="#047857" textAnchor="middle">✓ Validated successfully. 0 accounts marked for penal rate.</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Challan ITNS 281 Receipt",
      subtitle: "Official tax payment receipt loaded with secure CIN and bank references successfully verified.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="TDS Challan Receipt">
          <rect width="440" height="220" rx="16" fill="#FFF1F2" />
          
          <g transform="translate(60, 25)">
            <rect width="320" height="170" rx="14" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="1" />
            <path d="M 0 14 Q 0 0 14 0 L 306 0 Q 320 0 320 14 L 320 38 L 0 38 Z" fill="#E11D48" />
            <text x="20" y="24" fontSize="10.5" fontWeight="bold" fill="#FFFFFF">Challan ITNS-281 Confirmation</text>
            
            <g transform="translate(20, 55)" fontSize="8.5" fill="#334155">
              <text x="0" y="15">Filing Section dues</text>
              <text x="280" y="15" fontWeight="bold" textAnchor="end">Section 194C / 194J</text>
              <line x1="0" y1="22" x2="280" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">Paid Amount</text>
              <text x="280" y="38" fontWeight="black" fill="#111827" textAnchor="end">₹18,440</text>
              <line x1="0" y1="45" x2="280" y2="45" stroke="#F1F5F9" />

              <text x="0" y="61">Challan Identification (CIN)</text>
              <text x="280" y="61" fontWeight="mono" fill="#B91C1C" textAnchor="end">0281482200626084K</text>
              <line x1="0" y1="68" x2="280" y2="68" stroke="#F1F5F9" />

              <rect y="76" width="280" height="24" rx="4" fill="#ECFDF5" />
              <text x="140" y="91" fontSize="8" fontWeight="bold" fill="#047857" textAnchor="middle">✓ Tax credit deposited to Central NSDL network.</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Form 16A Digital Generation",
      subtitle: "Official certificate files exported from secure TRACES portals ready for deductees.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="TRACES Certificate Extraction">
          <rect width="440" height="220" rx="16" fill="#FFF5F5" />
          
          <g transform="translate(80, 25)">
            <rect width="280" height="170" rx="12" fill="#FFFFFF" stroke="#FDA4AF" strokeWidth="1" />
            <text x="20" y="24" fontSize="10" fontWeight="bold" fill="#111827">TRACES Portal Link</text>
            
            <g transform="translate(20, 42)" fontSize="8">
              <rect width="240" height="34" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <text x="10" y="16" fontWeight="bold" fill="#1E293B">Quarterly PDF Downloads</text>
              <text x="10" y="26" fontSize="7" fill="#64748B">Q1 Returns Verified</text>
              <text x="230" y="22" textAnchor="end" fontWeight="black" fill="#10B981">Active ✓</text>

              <rect y="44" width="240" height="34" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <text x="10" y="60" fontWeight="bold" fill="#1E293B">Form 16A PDF Generation</text>
              <text x="10" y="70" fontSize="7" fill="#64748B">24 Certificates Exported</text>
              <text x="230" y="66" textAnchor="end" fontWeight="black" fill="#10B981">Active ✓</text>

              <rect y="84" width="240" height="24" rx="4" fill="#FFF1F2" />
              <text x="120" y="99" fontSize="7.5" fontWeight="bold" fill="#E11D48" textAnchor="middle">✓ All TRACES certificates digitally signed &amp; ready.</text>
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

const TDS = () => {
  const { t, language } = useLanguage();
  const data = t.serviceDetail?.tds || translations.en.serviceDetail.tds;
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
        title="TDS Filing & Compliance Services India | Form 24Q 26Q | Byalance"
        description="Expert TDS compliance services for Indian businesses — TAN registration, Form 24Q/26Q filing, Form 16/16A generation, and default resolution. Never miss a TDS deadline with Byalance."
        keywords="TDS services India, TDS filing Bengaluru, Form 24Q 26Q filing, TAN registration, Form 16 Form 16A, TDS default resolution, TRACES TDS, TDS on rent, TDS on contractor payment, TDS compliance India"
        canonical="https://byalance.com/services/tds-services"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: data.title || "TDS Return Filing", url: "/services/tds-services" }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Link
                to="/#tds-services"
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
                    <Receipt className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="block md:block"><TdsIllustration /></div>
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
                  { label: services[1]?.title, to: "/services/itr-services" },
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
          <FAQSchema faqs={tdsFAQs} title="TDS Services — Frequently Asked Questions" />
        </div>
      </div>
    </>
  );
};

export default TDS;