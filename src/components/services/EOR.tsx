import SEO from '../SEO';
import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight, Award, DollarSign, ArrowLeft, Building2, UserCheck, HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage, translations } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { eorFAQs } from '../../data/faqData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';

function EORIllustration() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Client Funds in USD",
      desc: "Client transfers net salary + statutory contributions (PF/ESI/PT) + $89 fee to Byalance's business account in USD.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="EOR USD Funding Flow">
          <rect width="440" height="220" rx="16" fill="#EFF6FF" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#1D4ED8" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">Stage 1: International Payout Funding</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="10" y="20" fontWeight="bold" fill="#1D4ED8" fontSize="9">Client (Foreign Entity)</text>
              <text x="10" y="45" fill="#64748B">Pre-funds Monthly:</text>
              <text x="10" y="60" fontWeight="bold">• Employee Net CTC</text>
              <text x="10" y="75" fontWeight="bold">• Statutory Matches</text>
              <text x="10" y="90" fontWeight="bold">• Flat EOR Fee ($89)</text>

              {/* Animated Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#10B981" />
                <text x="34" y="0" fontSize="7.5" fontWeight="black" fill="#10B981" textAnchor="middle">USD Transfer</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#EFF6FF" stroke="#BFDBFE" />
              <text x="240" y="20" fontWeight="bold" fill="#1E40AF" fontSize="9">Byalance Secure A/C</text>
              <text x="240" y="45" fill="#475569">Funds held in USD</text>
              <text x="240" y="65" fill="#475569">and legally cleared</text>
              <text x="240" y="80" fill="#475569">for local compliance</text>
              <rect x="240" y="90" width="120" height="14" rx="3" fill="#3B82F6" />
              <text x="300" y="100" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">SECURE BANK PORTAL</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "2. Compliant Disbursement",
      desc: "Byalance acts as the legal employer, converting funds to INR and disbursing net salary directly to the employee.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="EOR INR Disbursement Flow">
          <rect width="440" height="220" rx="16" fill="#ECFDF5" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#D1FAE5" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#047857" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">Stage 2: Compliant Local Salary Release</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#ECFDF5" stroke="#A7F3D0" />
              <text x="10" y="20" fontWeight="bold" fill="#065F46" fontSize="9">Byalance (Legal Employer)</text>
              <text x="10" y="45" fill="#34D399" fontSize="8" fontWeight="bold">CONVERSION NODE</text>
              <text x="10" y="65" fill="#475569">USD converted to INR</text>
              <text x="10" y="80" fill="#475569">using official bank rates</text>
              <text x="10" y="95" fontWeight="bold" fill="#047857">100% Tax Compliant</text>

              {/* Animated Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#059669" />
                <text x="34" y="0" fontSize="7.5" fontWeight="black" fill="#059669" textAnchor="middle">Disburse Net (INR)</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="240" y="20" fontWeight="bold" fill="#1E293B" fontSize="9">Indian Employee</text>
              <text x="240" y="45" fill="#475569">Receives salary on-time</text>
              <text x="240" y="60" fill="#475569">via direct bank wire.</text>
              <text x="240" y="75" fontWeight="bold" fill="#059669">• Bank SMS Triggered</text>
              <text x="240" y="90" fontWeight="bold" fill="#059669">• Compliant Payslip Sent</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "3. Direct Government Filing",
      desc: "Byalance directly deposits PF, ESI, Professional Tax, and TDS with government departments under our own codes.",
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="EOR Statutory Filings Flow">
          <rect width="440" height="220" rx="16" fill="#FFFBEB" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#FEF3C7" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#D97706" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">Stage 3: Direct Tax & Statutory Deposits</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#FFFBEB" stroke="#FDE68A" />
              <text x="10" y="20" fontWeight="bold" fill="#B45309" fontSize="9">Byalance Compliance</text>
              <text x="10" y="45" fill="#64748B">Deducts & Files monthly:</text>
              <text x="10" y="60" fontWeight="bold" fill="#D97706">• EPF (Provident Fund)</text>
              <text x="10" y="75" fontWeight="bold" fill="#D97706">• ESIC (Health Insurance)</text>
              <text x="10" y="90" fontWeight="bold" fill="#D97706">• TDS (Tax) & PT (State)</text>

              {/* Animated Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#D97706" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#D97706" />
                <text x="34" y="0" fontSize="7" fontWeight="black" fill="#D97706" textAnchor="middle">Portal Returns</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="240" y="20" fontWeight="bold" fill="#1E293B" fontSize="9">Government of India</text>
              <text x="240" y="45" fill="#475569">EPFO, ESIC, NSDL, and</text>
              <text x="240" y="60" fill="#475569">state revenue portals.</text>
              <rect x="240" y="75" width="120" height="24" rx="4" fill="#D97706" />
              <text x="300" y="89" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">CHALLAN GENERATED ✓</text>
            </g>
          </g>
        </svg>
      )
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden p-4">
      <div className="mb-4">
        {steps[activeStep].svg}
      </div>
      <div className="px-2 pb-2 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all uppercase tracking-wider ${
                idx === activeStep 
                  ? "bg-blue-600 text-white shadow" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">{steps[activeStep].title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed h-[40px] overflow-hidden">{steps[activeStep].desc}</p>
      </div>
    </div>
  );
}

export default function EOR() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="EOR Services for India | Employer of Record India | Byalance"
        description="Hire software engineers, product managers, and remote staff in India legally without an Indian entity. Byalance manages payroll, PF, ESI, TDS, and employment compliance. Flat $89/employee/month."
        keywords="Employer of Record India, EOR India services, hire remote employees in India legally, payroll compliance India EOR, global PEO India, professional employer organization Bengaluru, remote staff hiring India, Byalance EOR"
        canonical="https://byalance.com/services/eor-services-india"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "EOR Services for India", url: "/services/eor-services-india" }
        ]}
      />
      
      <div className="min-h-screen bg-slate-50/50 pt-20">
        
        {/* HERO HEADER */}
        <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50 pt-8 pb-16 md:pt-10 md:pb-24 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 md:mb-5">
              <Link
                to="/#services"
                className="inline-flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-700 bg-white border border-slate-100 hover:bg-slate-50 rounded-xl transition-all shadow-sm hover:shadow-md"
                aria-label="Back to Services"
                title="Back to Services"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Compliant Remote Hiring
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-none mb-6">
                  Hire & Pay in India Legally <br className="hidden md:inline" />
                  <span className="text-blue-600">Without an Indian Entity</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Byalance acts as your trusted Employer of Record (EOR) in India. We legally onboard your talent, register them under our statutory compliance codes, and handle monthly PF, ESI, PT, and TDS filings. You retain complete operational control, while we shoulder 100% of the local employer liability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-stretch max-w-xl">
                  <div className="sm:flex-1 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <span className="text-2xl md:text-3xl font-black text-slate-900 shrink-0">$89</span>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Flat Service Fee</p>
                      <p className="text-xs text-slate-500 font-medium">per employee / month (USD)</p>
                    </div>
                  </div>
                  <div className="sm:flex-1 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <span className="text-2xl md:text-3xl font-black text-green-600 shrink-0">3-5 Days</span>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Onboarding SLA</p>
                      <p className="text-xs text-slate-500 font-medium">fast, smooth, digital setup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <EORIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON CALLOUT */}
        <section className="py-8 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Competitive Positioning</span>
              <p className="text-lg font-medium text-slate-200 mt-1">
                "Typical global EOR platforms charge upwards of $299 to $599/month with rigid, automated support. Byalance delivers identical compliance safety for a flat <span className="text-green-400 font-extrabold">$89/month</span>, paired with dedicated, hands-on WhatsApp support."
              </p>
            </div>
            <a
              href="https://wa.me/917406296116"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold uppercase text-[10px] tracking-[0.2em] px-8 py-3.5 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all shrink-0 text-center"
            >
              Consult with EOR Expert
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              How Our EOR Fund & Compliance Flow Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg mb-16">
              To guarantee bulletproof tax compliance and legal liability insulation, Indian law mandates that all payroll funds must flow directly through the legal employer. Here is our seamless 6-step flow:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              
              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Structure the CTC</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We customize the employee's Cost-to-Company (CTC) parameters, breaking down Basic, HRA, PF allowances, Professional Tax, and TDS variables strictly optimized for Indian labor code compliance.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Onboard & Sign</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Byalance signs the Master Services Agreement (MSA) with you, and a localized, fully compliant employment contract is signed directly between Byalance and the employee in India.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Refundable Deposit</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We require a refundable security deposit (equivalent to 1–2 months of employee CTC). This acts as a buffer to secure salary timelines against international banking and wire settlement lags.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Client Funds (USD)</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Each month, in advance, the client wires the full monthly cost (Employee Net Salary + Employer PF/ESI matches + our $89 EOR service fee) to Byalance's corporate business account in USD.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Salary & Tax Remittance</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Byalance acts as the legal employer, converts the currency, disburses the net take-home salary to the employee's bank account, and deposits taxes and PF/ESI to government departments under our codes.
                </p>
              </div>

              <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  6
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">Compliant Records</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Each month, you receive a complete payroll register, government challans, and salary payslips to maintain seamless corporate records and demonstrate absolute compliance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT YOU FUND vs WHAT WE DO */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
                Transparent Cost Structure
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                We make cost sharing and billing 100% clear. You pay the exact cost of your employee plus our flat service fee. No hidden margins, no markup on payroll variables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* CLIENT FUNDS CARD */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">What you fund as the Client</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">Pass-through direct costs</p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Employee Net Take-Home Salary (negotiated with candidate).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Employer-side PF contributions (12% of basic salary).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Employer-side ESI, Professional Tax, and LWF (if applicable).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Any performance bonuses, appraisals, or hardware allowances.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400">COMMITTED TO</p>
                  <p className="text-sm font-bold text-slate-700">100% direct pass-through at cost</p>
                </div>
              </div>

              {/* INCLUDED IN SERVICE FEE CARD */}
              <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-md relative flex flex-col justify-between">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  Flat $89 / Month
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">What is included in our Service Fee</h3>
                  <p className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-6">Fully covered administration</p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Drafting compliant employment contracts in line with Indian state codes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Monthly payroll computation, gross salary, and TDS deductions on salary.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Filing and processing of EPF, ESIC, and State Professional Taxes under our codes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Form 16 generation, annual tax declarations, and employee query help desk.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Dedicated support desk for both client HR and the local employees over WhatsApp.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs font-semibold text-blue-500">NO TERMINATION FEE</p>
                  <p className="text-sm font-bold text-slate-700">Cancel any time with 30-day notice</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQS - SEO & AI Bot optimized */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> Answering your Queries
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions — India EOR Services
              </h2>
              <p className="text-slate-500 text-sm mt-3">
                Clear, direct answers to common compliance, timeline, and deposit questions.
              </p>
            </div>

            <div className="space-y-4">
              {eorFAQs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/20 hover:border-blue-100 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                    >
                      <span className="font-display font-bold text-slate-900 text-base md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.2),transparent_50%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-none mb-6 text-white">
              Ready to Hire Your Indian Team Legally?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed">
              Don't spend thousands of dollars and months of delay setting up a local entity. Get up and running in 3 days under Byalance EOR for just $89/employee/month. Our onboarding experts will walk you through the contracts and CTC calculations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold uppercase text-xs tracking-[0.2em] px-10 py-4 rounded-xl shadow-lg transition-all text-center"
              >
                Chat on WhatsApp
              </a>
              <a
                href="/#contact"
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-bold uppercase text-xs tracking-[0.2em] px-10 py-4 rounded-xl transition-all text-center"
              >
                Send an Enquiry
              </a>
            </div>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-6">
              ★ NO INITIAL OBLIGATION • CHAT DIRECTLY WITH A CHARTERED ACCOUNTANT
            </p>
          </div>
        </section>

      </div>
      
      {/* Dynamic JSON-LD structured data for indexers and crawlers */}
      <FAQSchema faqs={eorFAQs} title="Frequently Asked Questions — Byalance EOR India" />
    </>
  );
}
