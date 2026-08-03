import React from 'react';
import { Check, Coins, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Top Left Rupee */}
        <div className="absolute left-[2%] sm:left-[3%] top-[4%] sm:top-[5%] block animate-float-3 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Affordable Pricing">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M24,18 L66,18 C70,18 78,26 78,30 L78,62 L50,82 L22,62 L22,30 C22,26 20,18 24,18 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <circle cx="64" cy="30" r="5" stroke="currentColor" strokeWidth="2" />
            <text x="36" y="58" fontFamily="sans-serif" fontWeight="900" fontSize="26" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Top Right Briefcase */}
        <div className="absolute right-[2%] sm:right-[3%] top-[5%] sm:top-[6%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Professional Plans">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <rect x="14" y="36" width="72" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <path d="M36,36 L36,26 C36,22 40,18 50,18 C60,18 64,22 64,26 L64,36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="14" y1="58" x2="86" y2="58" stroke="currentColor" strokeWidth="1.5" />
            <rect x="40" y="52" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            🛡️ Differentiated Operational Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.sections.pricing}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">
            {t.sections.pricingSubtitle}
          </p>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* ============================================================= */}
        {/* DOMESTIC INDIAN COMPLIANCE & ACCOUNTING PLANS                */}
        {/* ============================================================= */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Card */}
            <div className="bg-white border border-slate-200 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-200 to-slate-400"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5 block">Starter Compliance</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">{t.pricing.starter}</h3>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-slate-100 transition-colors">
                    <Coins className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-5 bg-slate-50/70 rounded-2xl p-4 border border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-tight whitespace-nowrap">
                      {t.pricing.starterPrice}
                    </span>
                    <span className="text-slate-500 font-medium text-xs mt-1">/ {t.pricing.perMonth}</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-5"></div>

                <div className="space-y-3">
                  {t.pricing.starterFeatures.map((f: string) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-emerald-600 w-3 h-3" />
                      </div>
                      <span className="text-slate-600 text-xs sm:text-sm leading-normal font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Growth — Recommended Centerpiece */}
            <div className="bg-white border-2 border-blue-600/95 shadow-xl shadow-blue-100/60 hover:shadow-2xl rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full lg:scale-[1.03] z-20">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-b-2xl text-[10px] font-black tracking-widest uppercase shadow-md shadow-blue-500/25">
                🔥 {t.pricing.recommended}
              </div>

              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-5 pt-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-0.5 block">Full Operations</span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">{t.pricing.growth}</h3>
                    </div>
                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-5 bg-blue-50/40 rounded-2xl p-4 border border-blue-100/30">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight leading-tight whitespace-nowrap">
                        {t.pricing.growthPrice}
                      </span>
                      <span className="text-slate-500 font-medium text-xs mt-1">/ {t.pricing.perMonth}</span>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-blue-100/40 mb-5"></div>

                  <div className="space-y-3">
                    {t.pricing.growthFeatures.map((f: string) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-blue-600 w-3 h-3" />
                        </div>
                        <span className="text-slate-700 text-xs sm:text-sm leading-normal font-semibold">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pro / Scale Card */}
            <div className="bg-slate-950 text-white border border-slate-900 shadow-lg hover:shadow-2xl rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5 block">Enterprise Scale</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">{t.pricing.pro}</h3>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-xl text-indigo-400 group-hover:bg-slate-800 transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-5 bg-slate-900/60 rounded-2xl p-4 border border-slate-900">
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight whitespace-nowrap">
                      {t.pricing.proPrice}
                    </span>
                    <span className="text-slate-400 font-medium text-xs mt-1">/ {t.pricing.perMonth}</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-900 mb-5"></div>

                <div className="space-y-3">
                  {t.pricing.proFeatures.map((f: string) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-emerald-400 w-3 h-3" />
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm leading-normal font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="max-w-4xl mx-auto mt-16 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50/80 text-blue-600 border border-blue-100/80 mb-4">
            💡 Custom Workspace Design
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            {t.pricing.notIdeal}
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base">
            {t.pricing.notIdealDesc}
          </p>
          <button 
            onClick={scrollToContact} 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/10 cursor-pointer text-sm uppercase tracking-wider"
          >
            {t.cta.contactCustom}
          </button>
        </div>

      </div>
    </section>
  );
}
