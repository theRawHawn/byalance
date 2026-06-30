import SEO from '../SEO';
import React from 'react';
import { Users, Check, ArrowRight, Award, CirclePercent, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { payrollFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';

function PayrollIllustration() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      title: "Salary Component Sheet",
      subtitle: "Complete breaks including Basic, HRA, PF allowances and professional deductions.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Salary Breakdown slip">
          <rect width="440" height="220" rx="16" fill="#ECFDF5" />
          
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#D1FAE5" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#047857" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">Salary Payslip Summary</text>
            
            <g transform="translate(15, 45)" fontSize="7.5" fill="#334155">
              <rect width="380" height="18" rx="4" fill="#E6F4EA" />
              <text x="8" y="12" fontWeight="bold" fill="#065F46">Gross Earnings (Basic + HRA)</text>
              <text x="372" y="12" fontWeight="extrabold" fill="#047857" textAnchor="end">₹1,12,000</text>

              <text x="8" y="32" fill="#475569">Employee PF Contribution (12%)</text>
              <text x="372" y="32" fontWeight="bold" fill="#EF4444" textAnchor="end">- ₹1,800</text>
              <line x1="8" y1="38" x2="372" y2="38" stroke="#F1F5F9" />

              <text x="8" y="48" fill="#475569">Professional Tax (PT Slab)</text>
              <text x="372" y="48" fontWeight="bold" fill="#EF4444" textAnchor="end">- ₹200</text>
              <line x1="8" y1="54" x2="372" y2="54" stroke="#F1F5F9" />

              <text x="8" y="64" fill="#475569">Statutory TDS (Tax Deducted Sec 192)</text>
              <text x="372" y="64" fontWeight="bold" fill="#EF4444" textAnchor="end">- ₹3,500</text>
              
              <rect y="75" width="380" height="22" rx="4" fill="#ECFDF5" />
              <text x="8" y="89" fontSize="9" fontWeight="extrabold" fill="#047857">Net Disbursed Take-home Salary</text>
              <text x="372" y="89" fontSize="10" fontWeight="black" fill="#047857" textAnchor="end">₹1,06,500 ✓</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "EPF & ESI Challans",
      subtitle: "Accurate monthly returns prepared with employee and matches fully sorted.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="EPF Contributions breakdown">
          <rect width="440" height="220" rx="16" fill="#F8FAFC" />
          
          <g transform="translate(40, 30)">
            <rect width="160" height="150" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect width="160" height="30" rx="12" fill="#0F172A" />
            <text x="15" y="19" fontSize="9.5" fontWeight="bold" fill="#FFFFFF">EPF (Provident Fund)</text>
            
            <g transform="translate(15, 45)" fontSize="8" fill="#475569">
              <text x="0" y="15">Salaried employee share</text>
              <text x="130" y="15" textAnchor="end" fontWeight="bold">₹24,800</text>
              <line x1="0" y1="22" x2="130" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">Employer matching share</text>
              <text x="130" y="38" textAnchor="end" fontWeight="bold">₹24,800</text>
              <line x1="0" y1="45" x2="130" y2="45" stroke="#F1F5F9" />

              <text x="0" y="61">Pension funds (EPS)</text>
              <text x="130" y="61" textAnchor="end" fontWeight="bold" fill="#059669">Included</text>
              
              <rect y="74" width="130" height="22" rx="4" fill="#EFF6FF" />
              <text x="6" y="88" fontSize="8" fontWeight="bold" fill="#1E40AF">Total ECR Filed</text>
              <text x="124" y="88" fontSize="8" fontWeight="black" fill="#1E40AF" textAnchor="end">₹49,600</text>
            </g>
          </g>

          <g transform="translate(240, 30)">
            <rect width="160" height="150" rx="12" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1" />
            <rect width="160" height="30" rx="12" fill="#059669" />
            <text x="15" y="19" fontSize="9.5" fontWeight="bold" fill="#FFFFFF">ESI (Health Scheme)</text>
            
            <g transform="translate(15, 45)" fontSize="8" fill="#475569">
              <text x="0" y="15">Employee Contribution</text>
              <text x="130" y="15" textAnchor="end" fontWeight="bold">₹1,450</text>
              <line x1="0" y1="22" x2="130" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">Employer Contribution</text>
              <text x="130" y="38" textAnchor="end" fontWeight="bold">₹6,280</text>
              <line x1="0" y1="45" x2="130" y2="45" stroke="#F1F5F9" />

              <rect y="60" width="130" height="36" rx="4" fill="#ECFDF5" />
              <text x="10" y="75" fontSize="7.5" fontWeight="bold" fill="#065F46">ESI Challan Status</text>
              <text x="10" y="86" fontSize="8" fontWeight="black" fill="#047857">PROCESSED ✓</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "State Professional Taxes",
      subtitle: "Full tracking of PT schedules applied compliant to specific regional laws.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Professional Tax state scales">
          <rect width="440" height="220" rx="16" fill="#F0FDF4" />
          
          <g transform="translate(60, 35)">
            <rect width="320" height="142" rx="12" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1" />
            <text x="20" y="25" fontSize="10" fontWeight="bold" fill="#111827">PT State Slabs (Monthly Earnings)</text>
            
            <g transform="translate(20, 42)" fontSize="8.5" fill="#374151">
              <text x="0" y="15">Earnings ≤ ₹15,000</text>
              <text x="280" y="15" textAnchor="end" fontWeight="bold">Nil (exempt)</text>
              <line x1="0" y1="21" x2="280" y2="21" stroke="#F1F5F9" />

              <text x="0" y="35">Earnings ₹15,001 - ₹25,000</text>
              <text x="280" y="35" textAnchor="end" fontWeight="bold">₹150 / month</text>
              <line x1="0" y1="41" x2="280" y2="41" stroke="#F1F5F9" />

              <text x="0" y="55">Earnings &gt; ₹25,000</text>
              <text x="280" y="55" textAnchor="end" fontWeight="bold" fill="#059669">₹200 / month ✓</text>
              <line x1="0" y1="61" x2="280" y2="61" stroke="#F1F5F9" />

              <text x="0" y="75" fontWeight="bold" fill="#047857">Maharashtra / Karnataka Slabs matched</text>
              <text x="280" y="75" textAnchor="end" fontWeight="bold" fill="#047857">Fully OK</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Corporate Salary Dispatch",
      subtitle: "Automated, verified bank transfer logs ensuring flawless paydays on time.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Bank Salary remittance status">
          <rect width="440" height="220" rx="16" fill="#F0FDF4" />
          
          <g transform="translate(50, 30)">
            <rect width="340" height="160" rx="14" fill="#FFFFFF" stroke="#34D399" strokeWidth="1.2" />
            <rect width="340" height="32" rx="14" fill="#059669" />
            <text x="20" y="20" fontSize="11.5" fontWeight="bold" fill="#FFFFFF">Direct Remittance Ledger (HDFC Corporate Node)</text>
            
            <g transform="translate(20, 52)" fontSize="8.5" fill="#334155">
              <text x="0" y="15">Remittance Batch</text>
              <text x="300" y="15" fontWeight="bold" textAnchor="end" fill="#059669">COMPLETED (24 Salaries Cleared)</text>
              <line x1="0" y1="22" x2="300" y2="22" stroke="#F1F5F9" />

              <text x="0" y="38">Processed Volume</text>
              <text x="300" y="38" fontWeight="bold" textAnchor="end">₹18,44,200</text>
              <line x1="0" y1="45" x2="300" y2="45" stroke="#F1F5F9" />

              <text x="0" y="61">Security Verification Code</text>
              <text x="300" y="61" fontWeight="mono" textAnchor="end">HDFCPAY230626K72</text>
              <line x1="0" y1="68" x2="300" y2="68" stroke="#F1F5F9" />

              <rect y="78" width="300" height="22" rx="4" fill="#ECFDF5" />
              <text x="150" y="92" fontSize="8" fontWeight="bold" fill="#047857" textAnchor="middle">✓ Form 16, EPF matched &amp; Bank salary wire completed.</text>
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

const Payroll = () => {
  const { t, language } = useLanguage();
  const data = t.serviceDetail?.payroll || translations.en.serviceDetail.payroll;
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
        title="Payroll Processing Services India | PF ESI PT Compliance | Byalance"
        description="Outsource your payroll to Byalance — accurate salary processing, PF/ESI/PT return filing, Form 16 generation, and full statutory compliance for businesses across India. Starting ₹7,499/month."
        keywords="payroll processing India, payroll services Bengaluru, PF ESI filing, professional tax Karnataka, salary processing outsourcing, payroll compliance MSME, EPF return filing, ESI return filing, Form 16 generation, payroll for startups India"
        canonical="https://byalance.com/services/payroll-processing"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: data.title || "Payroll Processing", url: "/services/payroll-processing" }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Link
                to="/#payroll-processing"
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
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="block md:block"><PayrollIllustration /></div>
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
                  { label: services[1]?.title, to: "/services/itr-services" },
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
          <FAQSchema faqs={payrollFAQs} title="Payroll Processing — Frequently Asked Questions" />
        </div>
      </div>
    </>
  );
};

export default Payroll;