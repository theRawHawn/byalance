import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, FileText, Landmark, Users, Receipt, ShieldCheck, 
  Globe, ArrowRight, CheckCircle2, 
  ExternalLink, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  // 0: Procurement, 1: Accounting, 2: ITR, 3: GST, 4: TDS, 5: Payroll, 6: EOR
  const serviceIcons = [Globe, Calculator, FileText, Landmark, Receipt, Users, ShieldCheck];
  const serviceLinks = [
    '/services/procurement-import-compliance',
    '/services/accounting-bookkeeping',
    '/services/itr-services',
    '/services/gst-services',
    '/services/tds-services',
    '/services/payroll-processing',
    '/services/eor-services-india'
  ];

  const serviceStyles = [
    {
      themeColor: 'amber',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      activeTabBg: 'bg-amber-50/80 border-amber-500 text-amber-900',
      accentBorder: 'border-amber-500',
      iconBg: 'bg-amber-100 text-amber-800',
      btnPrimary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200',
      tagBg: 'bg-amber-50 text-amber-800 border-amber-100',
      dotBg: 'bg-amber-600'
    },
    {
      themeColor: 'blue',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      activeTabBg: 'bg-blue-50/80 border-blue-500 text-blue-900',
      accentBorder: 'border-blue-500',
      iconBg: 'bg-blue-100 text-blue-700',
      btnPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-100',
      dotBg: 'bg-blue-600'
    },
    {
      themeColor: 'indigo',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      activeTabBg: 'bg-indigo-50/80 border-indigo-500 text-indigo-900',
      accentBorder: 'border-indigo-500',
      iconBg: 'bg-indigo-100 text-indigo-700',
      btnPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      dotBg: 'bg-indigo-600'
    },
    {
      themeColor: 'sky',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      activeTabBg: 'bg-sky-50/80 border-sky-500 text-sky-900',
      accentBorder: 'border-sky-500',
      iconBg: 'bg-sky-100 text-sky-700',
      btnPrimary: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200',
      tagBg: 'bg-sky-50 text-sky-700 border-sky-100',
      dotBg: 'bg-sky-600'
    },
    {
      themeColor: 'teal',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      activeTabBg: 'bg-teal-50/80 border-teal-500 text-teal-900',
      accentBorder: 'border-teal-500',
      iconBg: 'bg-teal-100 text-teal-700',
      btnPrimary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200',
      tagBg: 'bg-teal-50 text-teal-700 border-teal-100',
      dotBg: 'bg-teal-600'
    },
    {
      themeColor: 'violet',
      badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
      activeTabBg: 'bg-violet-50/80 border-violet-500 text-violet-900',
      accentBorder: 'border-violet-500',
      iconBg: 'bg-violet-100 text-violet-700',
      btnPrimary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-200',
      tagBg: 'bg-violet-50 text-violet-700 border-violet-100',
      dotBg: 'bg-violet-600'
    },
    {
      themeColor: 'emerald',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      activeTabBg: 'bg-emerald-50/80 border-emerald-500 text-emerald-900',
      accentBorder: 'border-emerald-500',
      iconBg: 'bg-emerald-100 text-emerald-700',
      btnPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      dotBg: 'bg-emerald-600'
    }
  ];

  const allServices = t.services.items || [];
  const activeService = allServices[activeTab] || allServices[0];
  const activeStyle = serviceStyles[activeTab] || serviceStyles[0];
  const ActiveIcon = serviceIcons[activeTab] || Globe;

  const toggleMobileExpand = (idx: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
    setActiveTab(idx);
  };

  return (
    <section id="services" className="py-14 sm:py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Radial Glows */}
      <div className="absolute top-1/4 -left-32 w-80 md:w-96 h-80 md:h-96 bg-indigo-50/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 md:w-96 h-80 md:h-96 bg-amber-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-2.5 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* SERVICES HUB */}
        <div>
          {/* MOBILE ONLY (< lg breakpoint): ACCORDION CARD DECK */}
          <div className="block lg:hidden space-y-3">
            {allServices.map((item: any, idx: number) => {
              const isExpanded = mobileExpandedIndex === idx;
              const IconComp = serviceIcons[idx] || Globe;
              const style = serviceStyles[idx] || serviceStyles[0];
              const link = serviceLinks[idx];

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-indigo-500 shadow-lg ring-1 ring-indigo-500/20'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* ACCORDION HEADER TRIGGER */}
                  <button
                    onClick={() => toggleMobileExpand(idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 active:bg-slate-100/60"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isExpanded ? style.iconBg : 'bg-slate-200/70 text-slate-600'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className={`font-bold text-base truncate ${isExpanded ? 'text-indigo-950 font-extrabold' : 'text-slate-800'}`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'bg-slate-200/50 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* EXPANDED CONTENT DRAWER */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-5 pt-2 border-t border-slate-100 space-y-4">
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {item.text}
                          </p>

                          {/* Features Grid */}
                          {item.features && (
                            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 space-y-2">
                              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> Key Deliverables & Scope
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {item.features.map((feat: string, fIdx: number) => (
                                  <div key={fIdx} className="flex items-start gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full ${style.dotBg} mt-1.5 shrink-0`} />
                                    <span className="text-xs text-slate-700 font-medium">{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="pt-1">
                            <Link
                              to={link}
                              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${style.btnPrimary}`}
                            >
                              Service Details <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* DESKTOP ONLY (>= lg breakpoint): DUAL COLUMN COMMAND HUB */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT TAB NAVIGATION */}
            <div className="lg:col-span-5 space-y-2.5">
              {allServices.map((item: any, idx: number) => {
                const isSelected = activeTab === idx;
                const IconComp = serviceIcons[idx] || Globe;
                const style = serviceStyles[idx] || serviceStyles[0];

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 relative border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-white border-indigo-500 shadow-xl text-slate-900 ring-1 ring-indigo-500/20'
                        : 'bg-slate-50/70 border-slate-200/70 hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTabIndicatorDesktop"
                        className="absolute left-0 top-3 bottom-3 w-1.5 bg-indigo-600 rounded-r-full"
                      />
                    )}
                    
                    <div className="flex items-center gap-4 pl-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold transition-all ${
                        isSelected 
                          ? style.iconBg 
                          : 'bg-slate-200/60 text-slate-500 group-hover:text-slate-800'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-base md:text-lg transition-colors ${
                          isSelected ? 'text-slate-900 font-extrabold' : 'text-slate-700'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT SHOWCASE STAGE */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 md:p-10 shadow-xl relative min-h-[520px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${activeStyle.iconBg}`}>
                        <ActiveIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">
                          {activeService.title}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={serviceLinks[activeTab]}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      Full Details <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Service Title & Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight mb-3">
                      {activeService.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                      {activeService.text}
                    </p>
                  </div>

                  {/* Highlights / Features Grid */}
                  {activeService.features && (
                    <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 md:p-6 space-y-3">
                      <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Deliverables & Scope
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.features.map((feat: string, fIdx: number) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${activeStyle.dotBg} mt-2 shrink-0`} />
                            <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      to={serviceLinks[activeTab]}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md ${activeStyle.btnPrimary}`}
                    >
                      Service Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto border-t border-slate-100 pt-8 sm:pt-10">
          <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-2">{t.services.ctaTitle}</h4>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{t.services.ctaText}</p>
          <a
            href="https://wa.me/917406296116?text=Hi%20Byalance,%20I'd%20like%20to%20discuss%20a%20custom%20accounting%20and%20compliance%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-lg shadow-indigo-100 gap-2 group"
          >
            {t.services.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
