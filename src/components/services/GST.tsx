import SEO from '../SEO';
import React from 'react';
import { FileText, Check, ArrowRight, ShieldCheck, RefreshCw, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { gstFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';
import { ServiceBackgroundDoodle } from '../ServiceBackgroundDoodle';

function GstIllustration() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      title: "Outward Sales Record (GSTR-1)",
      subtitle: "Preparing business invoices and sales datasets sorted clearly by client categories.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="GSTR1 Sales Entry">
          <rect width="440" height="220" rx="16" fill="#F0F9FF" />
          
          <g transform="translate(40, 30)">
            <rect width="160" height="150" rx="12" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1" />
            <rect width="160" height="32" rx="12" fill="#0284C7" />
            <text x="15" y="20" fontSize="10" fontWeight="bold" fill="#FFFFFF">Sales Invoice Registry</text>
            
            <g transform="translate(15, 45)" fontSize="8.5" fill="#334155">
              <text x="0" y="15" fontWeight="bold">INV-928 (GSTR-1B)</text>
              <text x="130" y="15" textAnchor="end" fontWeight="extrabold" fill="#0284C7">₹1,45,000</text>
              <line x1="0" y1="22" x2="130" y2="22" stroke="#F1F5F9" strokeWidth="1" />

              <text x="0" y="38" fontWeight="bold">INV-929 (GSTR-1B)</text>
              <text x="130" y="38" textAnchor="end" fontWeight="extrabold" fill="#0284C7">₹82,400</text>
              <line x1="0" y1="45" x2="130" y2="45" stroke="#F1F5F9" strokeWidth="1" />

              <text x="0" y="61" fontWeight="bold">INV-930 (GSTR-1B)</text>
              <text x="130" y="61" textAnchor="end" fontWeight="extrabold" fill="#0284C7">₹2,10,000</text>
              <line x1="0" y1="68" x2="130" y2="68" stroke="#F1F5F9" strokeWidth="1" />
            </g>
          </g>

          <g transform="translate(240, 30)">
            <rect width="160" height="150" rx="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <rect width="160" height="32" rx="12" fill="#0F172A" />
            <text x="15" y="20" fontSize="10" fontWeight="bold" fill="#FFFFFF">GSTR-1 Return Draft</text>
            
            <g transform="translate(15, 52)" fontSize="8" fill="#1e293b">
              <rect width="130" height="36" rx="6" fill="#F0F9FF" stroke="#E2E8F0" strokeWidth="1" />
              <text x="10" y="16" fontWeight="bold">B2B Core Invoices</text>
              <text x="10" y="26" fontSize="7" fill="#64748B">3 Records Synced</text>
              <text x="120" y="22" textAnchor="end" fontWeight="black" fill="#0F172A">₹4.37L</text>

              <rect y="46" width="130" height="36" rx="6" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" strokeDasharray="2 2" />
              <text x="10" y="62" fontWeight="bold" fill="#065F46">Export Taxes (0-rated)</text>
              <text x="10" y="72" fontSize="7" fill="#047857">1 Record Selected</text>
              <text x="120" y="68" textAnchor="end" fontWeight="black" fill="#047857">₹1.10L</text>
            </g>
          </g>

          <path d="M 206 100 L 234 100" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: "Input Tax Credit reconciliation (GSTR-2B)",
      subtitle: "Reconciling matching dynamic credit ledgers with external supplier entries.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="GSTR-2B ITC Matching">
          <rect width="440" height="220" rx="16" fill="#F0FDF4" />
          
          <g transform="translate(30, 40)">
            <rect width="160" height="110" rx="12" fill="#FFFFFF" stroke="#BBF7D0" strokeWidth="1" />
            <text x="15" y="22" fontSize="9.5" fontWeight="bold" fill="#14532D">Purchases Ledger</text>
            
            <g transform="translate(15, 38)" fontSize="8" fill="#1E293B">
              <text x="0" y="15">Raw Material A</text>
              <text x="130" y="15" textAnchor="end" fontWeight="bold">₹18,000 ITC</text>
              <line x1="0" y1="21" x2="130" y2="21" stroke="#F1F5F9" />

              <text x="0" y="35">Office Assets</text>
              <text x="130" y="35" textAnchor="end" fontWeight="bold">₹6,200 ITC</text>
              <line x1="0" y1="41" x2="130" y2="41" stroke="#F1F5F9" />

              <text x="0" y="55">Server Hosting</text>
              <text x="130" y="55" textAnchor="end" fontWeight="bold">₹2,400 ITC</text>
            </g>
          </g>

          <g transform="translate(250, 40)">
            <rect width="160" height="110" rx="12" fill="#FFFFFF" stroke="#34D399" strokeWidth="1.5" />
            <text x="15" y="22" fontSize="9.5" fontWeight="bold" fill="#064E3B">Auto-Drafted (GSTR-2B)</text>
            
            <g transform="translate(15, 38)" fontSize="8" fill="#0F172A">
              <text x="0" y="15" fill="#047857" fontWeight="medium">Matched (Supplier Filed)</text>
              <text x="130" y="15" textAnchor="end" fontWeight="bold" fill="#10B981">₹18,000</text>
              <line x1="0" y1="21" x2="130" y2="21" stroke="#E8F5E9" />

              <text x="0" y="35" fill="#047857" fontWeight="medium">Matched (Supplier Filed)</text>
              <text x="130" y="35" textAnchor="end" fontWeight="bold" fill="#10B981">₹6,200</text>
              <line x1="0" y1="41" x2="130" y2="41" stroke="#E8F5E9" />

              <text x="0" y="55" fill="#047857" fontWeight="medium">Matched (Supplier Filed)</text>
              <text x="130" y="55" textAnchor="end" fontWeight="bold" fill="#10B981">₹2,400</text>
            </g>
          </g>

          <path d="M 195 95 L 245 95" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="220" cy="95" r="12" fill="#10B981" />
          <path d="M 215 95 L 218 98 L 225 91" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          
          <text x="220" y="175" fontSize="9.5" fontWeight="black" fill="#15803D" textAnchor="middle">✓ 100% ITC Reconciliation Complete</text>
        </svg>
      )
    },
    {
      title: "Tax Settlement Offset (GSTR-3B)",
      subtitle: "Compiles final outward taxes minus input tax credit balances in perfect compliance.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="GSTR3B tax offset computation">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          
          <g transform="translate(80, 30)">
            <rect width="280" height="150" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            
            <g transform="translate(20, 20)" fontSize="9" fill="#111827">
              <text x="0" y="15" fontWeight="medium" fill="#4B5563">Forward tax dues (Output Tax)</text>
              <text x="240" y="15" textAnchor="end" fontWeight="bold">₹64,800</text>
              <line x1="0" y1="24" x2="240" y2="24" stroke="#F1F5F9" />

              <text x="0" y="42" fontWeight="medium" fill="#4B5563">Input credit utilized (ITC)</text>
              <text x="240" y="42" textAnchor="end" fontWeight="bold" fill="#10B981">- ₹26,600</text>
              <line x1="0" y1="51" x2="240" y2="51" stroke="#F1F5F9" />

              <text x="0" y="69" fontWeight="medium" fill="#4B5563">Reverse Charge Claim (RCM)</text>
              <text x="240" y="69" textAnchor="end" fontWeight="bold">₹0</text>
              
              <rect y="84" width="240" height="34" rx="6" fill="#EFF6FF" />
              <text x="15" y="104" fontSize="10" fontWeight="extrabold" fill="#1E40AF">Net GST Payable</text>
              <text x="225" y="104" fontSize="11" fontWeight="black" fill="#1E40AF" textAnchor="end">₹38,200</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "ARN Submission Success",
      subtitle: "Confirmed submission status directly synced with secure portal nodes.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="ARN Receipt confirmation">
          <rect width="440" height="220" rx="16" fill="#F0F9FF" />
          
          <g transform="translate(60, 25)">
            <rect width="320" height="170" rx="14" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
            <path d="M 0 14 Q 0 0 14 0 L 306 0 Q 320 0 320 14 L 320 38 L 0 38 Z" fill="#0284C7" />
            <text x="20" y="24" fontSize="10.5" fontWeight="bold" fill="#FFFFFF">GST e-Filing Success Transcript</text>
            
            <g transform="translate(20, 55)" fontSize="8.5" fill="#334155">
              <text x="0" y="15">Filing Status</text>
              <text x="280" y="15" fontWeight="bold" fill="#10B981" textAnchor="end">SUCCESS (ARN ACTIVE)</text>
              <line x1="0" y1="22" x2="280" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">Application Reference (ARN)</text>
              <text x="280" y="38" fontWeight="mono" fill="#0F172A" textAnchor="end">AA290626084920K</text>
              <line x1="0" y1="45" x2="280" y2="45" stroke="#F1F5F9" />

              <text x="0" y="61">Date of Submission</text>
              <text x="280" y="61" fontWeight="bold" textAnchor="end">23-June-2026</text>
              <line x1="0" y1="68" x2="280" y2="68" stroke="#F1F5F9" />

              <rect y="76" width="280" height="24" rx="4" fill="#ECFDF5" />
              <text x="140" y="91" fontSize="8" fontWeight="bold" fill="#047857" textAnchor="middle">✓ Filed successfully. GSTR-3B matching completed.</text>
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

const GST = () => {
  const { t, language } = useLanguage();
  const data = t.serviceDetail?.gst || translations.en.serviceDetail.gst;
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
        title="GST Services in India | GST Filing & Compliance | Byalance"
        description="Complete GST compliance for Indian businesses — registration, GSTR-1, GSTR-3B, GSTR-9 filing, ITC reconciliation, e-invoicing, and notice resolution. Expert GST services in Bengaluru and across India."
        keywords="GST services India, GST filing Bengaluru, GSTR-1 GSTR-3B filing, GST registration India, input tax credit reconciliation, e-invoicing setup, GST annual return GSTR-9, GST notice response, GST compliance Karnataka, Remote GST consultant India"
        canonical="https://byalance.in/services/gst-services"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: data.title || "GST Services", url: "/services/gst-services" }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
          <ServiceBackgroundDoodle service="gst" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Link
                to="/#gst-services"
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
              <div className="block md:block"><GstIllustration /></div>
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
                  { label: services[3]?.title, to: "/services/tds-services" },
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
          <FAQSchema faqs={gstFAQs} title="GST Services — Frequently Asked Questions" />
        </div>
      </div>
    </>
  );
};

export default GST;
