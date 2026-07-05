import SEO from '../SEO';
import React from 'react';
import { Calculator, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { accountingFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';
import { ServiceBackgroundDoodle } from '../ServiceBackgroundDoodle';

function AccountingIllustration() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      title: "Double-Entry Ledger",
      subtitle: "Organized journals categorizing transactional debits & credits automatically.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Accounting Ledger Sheet">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          <path d="M 40 40 L 400 40" stroke="#E2E8F0" strokeWidth="1.5" />
          
          <g transform="translate(40, 20)">
            <rect x="0" y="30" width="170" height="130" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 0 60 L 170 60" stroke="#F1F5F9" strokeWidth="1.2" />
            <text x="20" y="50" fontSize="10" fontWeight="bold" fill="#0F172A">Debits (Dr)</text>
            <text x="150" y="50" fontSize="9" fontWeight="bold" fill="#3B82F6" textAnchor="end">₹1,44,200</text>
            
            {/* Ledger lines */}
            <rect x="20" y="75" width="80" height="5" rx="2" fill="#E2E8F0" />
            <rect x="20" y="95" width="60" height="5" rx="2" fill="#E2E8F0" />
            <rect x="20" y="115" width="95" height="5" rx="2" fill="#E2E8F0" />
            <circle cx="20" cy="140" r="4" fill="#10B981" />
            <rect x="30" y="138" width="40" height="5" rx="2" fill="#10B981" />
          </g>

          <g transform="translate(230, 20)">
            <rect x="0" y="30" width="170" height="130" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 0 60 L 170 60" stroke="#F1F5F9" strokeWidth="1.2" />
            <text x="20" y="50" fontSize="10" fontWeight="bold" fill="#0F172A">Credits (Cr)</text>
            <text x="150" y="50" fontSize="9" fontWeight="bold" fill="#10B981" textAnchor="end">₹1,44,200</text>
            
            {/* Ledger lines */}
            <rect x="20" y="75" width="90" height="5" rx="2" fill="#E2E8F0" />
            <rect x="20" y="95" width="70" height="5" rx="2" fill="#E2E8F0" />
            <rect x="20" y="115" width="50" height="5" rx="2" fill="#E2E8F0" />
            <circle cx="20" cy="140" r="4" fill="#10B981" />
            <rect x="30" y="138" width="40" height="5" rx="2" fill="#10B981" />
          </g>
          
          <path d="M 210 100 L 230 100" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: "Bank Reconciliation",
      subtitle: "Effortless verification matching ledger entries with actual bank records.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Book Reconciliation">
          <rect width="440" height="220" rx="16" fill="#F0F9FF" />
          
          <g transform="translate(60, 45)">
            <rect x="0" y="0" width="140" height="110" rx="12" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1" />
            <text x="15" y="25" fontSize="10" fontWeight="bold" fill="#1E3A8A">Company Books</text>
            
            <g transform="translate(15, 45)">
              <rect x="0" y="0" width="110" height="18" rx="4" fill="#EFF6FF" />
              <rect x="8" y="6" width="40" height="6" rx="2" fill="#2563EB" />
              <text x="100" y="12" fontSize="8" fill="#1E3A8A" textAnchor="end">₹12,500</text>

              <rect x="0" y="24" width="110" height="18" rx="4" fill="#EFF6FF" />
              <rect x="8" y="30" width="30" height="6" rx="2" fill="#2563EB" />
              <text x="100" y="36" fontSize="8" fill="#1E3A8A" textAnchor="end">₹8,400</text>
            </g>
          </g>

          <g transform="translate(240, 45)">
            <rect x="0" y="0" width="140" height="110" rx="12" fill="#FFFFFF" stroke="#34D399" strokeWidth="1" />
            <text x="15" y="25" fontSize="10" fontWeight="bold" fill="#064E3B">Bank Statement</text>
            
            <g transform="translate(15, 45)">
              <rect x="0" y="0" width="110" height="18" rx="4" fill="#ECFDF5" />
              <rect x="8" y="6" width="40" height="6" rx="2" fill="#059669" />
              <text x="100" y="12" fontSize="8" fill="#064E3B" textAnchor="end">₹12,500</text>

              <rect x="0" y="24" width="110" height="18" rx="4" fill="#ECFDF5" />
              <rect x="8" y="30" width="30" height="6" rx="2" fill="#059669" />
              <text x="100" y="36" fontSize="8" fill="#064E3B" textAnchor="end">₹8,400</text>
            </g>
          </g>

          {/* Connectors and validation */}
          <path d="M 183 95 L 235 95" stroke="#34D399" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 183 113 L 235 113" stroke="#34D399" strokeWidth="2" strokeDasharray="3 3" />
          
          <circle cx="210" cy="104" r="14" fill="#10B981" />
          <path d="M 205 104 L 209 108 L 216 100" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Compliant Billing",
      subtitle: "Accurate invoices prepared with complete tax breakups and terms.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Compliant Invoice structure">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          <g transform="translate(120, 20)">
            <rect x="0" y="0" width="200" height="180" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <text x="20" y="25" fontSize="10" fontWeight="bold" fill="#0F172A">TAX INVOICE</text>
            <text x="180" y="25" fontSize="8" fill="#64748B" textAnchor="end">#INV-2026-89</text>
            
            <line x1="20" y1="35" x2="180" y2="35" stroke="#F1F5F9" strokeWidth="1" />
            
            {/* Table Header */}
            <text x="20" y="52" fontSize="7.5" fontWeight="bold" fill="#475569">Item Summary</text>
            <text x="180" y="52" fontSize="7.5" fontWeight="bold" fill="#475569" textAnchor="end">Amount</text>
            <line x1="20" y1="58" x2="180" y2="58" stroke="#E2E8F0" strokeWidth="1" />

            {/* Table Row */}
            <text x="20" y="72" fontSize="7.5" fill="#1e293b">Professional Services</text>
            <text x="180" y="72" fontSize="7.5" fontWeight="bold" fill="#1e293b" textAnchor="end">₹50,000</text>
            
            <text x="20" y="86" fontSize="7" fill="#64748B">CGST @ 9%</text>
            <text x="180" y="86" fontSize="7" fill="#64748B" textAnchor="end">₹4,500</text>
            
            <text x="20" y="98" fontSize="7" fill="#64748B">SGST @ 9%</text>
            <text x="180" y="98" fontSize="7" fill="#64748B" textAnchor="end">₹4,500</text>
            
            <line x1="20" y1="108" x2="180" y2="108" stroke="#F1F5F9" strokeWidth="1" />
            
            {/* Grand Total */}
            <rect x="20" y="118" width="160" height="24" rx="4" fill="#EFF6FF" />
            <text x="30" y="133" fontSize="8" fontWeight="bold" fill="#1E40AF">Grand Total</text>
            <text x="170" y="133" fontSize="9.5" fontWeight="black" fill="#1E40AF" textAnchor="end">₹59,000</text>
            
            <text x="100" y="165" fontSize="7" fontWeight="bold" fill="#10B981" textAnchor="middle">✓ Digital Signature Verified</text>
          </g>
        </svg>
      )
    },
    {
      title: "Profit & Loss Reports",
      subtitle: "Simple and transparent monthly monitoring of corporate revenues & expenses.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Monthly P&L reporting charts">
          <rect width="440" height="220" rx="16" fill="#F5F3FF" />
          
          <g transform="translate(50, 40)">
            {/* Grid Lines */}
            <line x1="40" y1="20" x2="350" y2="20" stroke="#E9D5FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="60" x2="350" y2="60" stroke="#E9D5FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="100" x2="350" y2="100" stroke="#D8B4FE" strokeWidth="1.2" />

            {/* Income Card Representation (Green columns) */}
            <text x="100" y="125" fontSize="8" fontWeight="bold" fill="#6B21A8" textAnchor="middle">Q1</text>
            <rect x="85" y="40" width="12" height="60" rx="3" fill="#10B981" />
            <rect x="101" y="70" width="12" height="30" rx="3" fill="#F43F5E" />

            <text x="180" y="125" fontSize="8" fontWeight="bold" fill="#6B21A8" textAnchor="middle">Q2</text>
            <rect x="165" y="30" width="12" height="70" rx="3" fill="#10B981" />
            <rect x="181" y="65" width="12" height="35" rx="3" fill="#F43F5E" />

            <text x="260" y="125" fontSize="8" fontWeight="bold" fill="#6B21A8" textAnchor="middle">Q3</text>
            <rect x="245" y="20" width="12" height="80" rx="3" fill="#10B981" />
            <rect x="261" y="72" width="12" height="28" rx="3" fill="#F43F5E" />

            {/* Chart Legend */}
            <rect x="40" y="142" width="8" height="8" rx="1.5" fill="#10B981" />
            <text x="52" y="149" fontSize="8" fill="#4B5563">Business Revenue</text>

            <rect x="160" y="142" width="8" height="8" rx="1.5" fill="#F43F5E" />
            <text x="172" y="149" fontSize="8" fill="#4B5563">Operating Cost</text>
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

const Accounting = () => {
  const { t, language } = useLanguage();
  const data = t.serviceDetail?.accounting || translations.en.serviceDetail.accounting;

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
        title="Accounting & Bookkeeping Services India | Byalance"
        description={data.desc}
        keywords="accounting services India, bookkeeping services Bengaluru, Remote accounting firm, small business accounting India, Tally bookkeeping, Zoho Books accountant, bank reconciliation, P&L statement India, balance sheet preparation, accounting for startups India"
        canonical="https://byalance.in/services/accounting-bookkeeping"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: data.title, url: "/services/accounting-bookkeeping" }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
          <ServiceBackgroundDoodle service="accounting" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Link
                to="/#accounting-bookkeeping"
                className="inline-flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-700 bg-blue-50/70 hover:bg-blue-100/70 rounded-xl transition-all shadow-sm hover:shadow"
                aria-label={backText}
                title={backText}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-100">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">{t.services.title}</p>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mt-4 leading-relaxed">
                    {data.desc}
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="block md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AccountingIllustration />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* What's Included */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.common.whatsIncluded}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why It Matters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
              <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                {data.whyDesc}
              </div>
            </motion.div>

            {/* Who Is This For */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whoTitle}</h2>
              <ul className="space-y-4">
                {data.whoItems.map((w: string) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-blue-600" />
                    </div>
                    {w}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl border-2 border-blue-600 p-6 sticky top-24 shadow-xl shadow-blue-100/50"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {data.ctaDesc || "Book a free consultation. We'll review your current setup and recommend the right plan."}
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/917406296116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp Contact Logo" 
                    className="w-5 h-5 brightness-0 invert" 
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                  {t.common.chatWhatsapp}
                </a>
                <a
                  href="/#contact"
                  className="block w-full text-center border border-slate-200 text-slate-900 px-4 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all font-sans"
                >
                  {t.common.sendEnquiry}
                </a>
              </div>
            </motion.div>

            {/* Related Services */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.common.relatedServices}</h3>
              <ul className="space-y-3 font-sans">
                {[
                  { label: t.serviceDetail?.gst?.title || "GST Services",      to: "/services/gst-services"       },
                  { label: t.serviceDetail?.tds?.title || "TDS Services",       to: "/services/tds-services"       },
                  { label: t.serviceDetail?.payroll?.title || "Payroll Processing", to: "/services/payroll-processing" },
                  { label: t.serviceDetail?.itr?.title || "ITR Services",       to: "/services/itr-services"       },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <a href={to} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FAQSchema faqs={accountingFAQs} title="Accounting & Bookkeeping — Frequently Asked Questions" />
        </div>
      </div>
    </>
  );
};

export default Accounting;
