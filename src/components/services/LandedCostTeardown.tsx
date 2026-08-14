import { Check, X, TrendingDown, ArrowRight, Scale } from "lucide-react";

/**
 * LANDED-COST TEARDOWN
 * ---------------------------------------------------------------
 * Shows the same import, priced two ways: through a conventional
 * trading company / broker vs. through Byalance's single delivered
 * line. Numbers below are illustrative (one example SKU) — real
 * quotes are product- and route-specific. Keep the disclaimer.
 *
 * Drop-in usage (inside Procurement.tsx, after the POSITIONING
 * BANNER section and before SERVICES INCLUDED GRID):
 *
 *   import LandedCostTeardown from './LandedCostTeardown';
 *   ...
 *   <LandedCostTeardown />
 */

const UNITS = 500;

const brokerRoute = [
  { label: "Factory price (FOB)", value: "₹735", note: "$8.50 · you never see this invoice" },
  { label: "Broker's margin, baked in (+22%)", value: "₹897" },
  { label: "FX spread on their invoice (+1.5%)", value: "₹910" },
  { label: "Duty: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "charged on their marked-up number" },
];
const brokerLanded = "₹1,162";
const brokerTotal = `₹${(1162 * UNITS).toLocaleString("en-IN")}`;

const byalanceRoute = [
  { label: "Factory price (FOB)", value: "₹735", note: "same factory, honest invoice" },
  { label: "Duty: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "on the honest ₹735, not a padded one" },
  { label: "Freight, forex, GST invoicing, our margin", value: "+₹135", note: "one line, no surprises after" },
];
const byalanceLanded = "₹1,074";
const byalanceTotal = `₹${(1074 * UNITS).toLocaleString("en-IN")}`;

const perUnitSaving = 1162 - 1074;
const pctSaving = Math.round((perUnitSaving / 1162) * 100);
const totalSaving = `₹${(perUnitSaving * UNITS).toLocaleString("en-IN")}`;

export default function LandedCostTeardown() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
            <Scale className="w-3.5 h-3.5" /> Landed-Cost Teardown
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight mb-4">
            Same order. Priced twice.
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            One factory, one 500-unit order of a CNC-machined aluminum enclosure. Watch what the middle adds — and what duty gets charged on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* THROUGH A TRADING COMPANY */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <X className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Through a Trading Company</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {brokerRoute.map((row, idx) => (
                <li key={idx} className="border-b border-slate-200 pb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-bold text-slate-900">{row.value}</span>
                  </div>
                  {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                </li>
              ))}
            </ul>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Landed cost / unit</span>
              <span className="text-2xl font-display font-black text-slate-900">{brokerLanded}</span>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              {UNITS} units · {brokerTotal} total. You pay duty on their margin, and you never see the ₹735.
            </p>
          </div>

          {/* BYALANCE ONE LINE */}
          <div className="bg-slate-900 border border-amber-800/40 rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Byalance · One Line, Delivered</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1 relative z-10">
              {byalanceRoute.map((row, idx) => (
                <li key={idx} className="border-b border-slate-800 pb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{row.label}</span>
                    <span className="font-bold text-white">{row.value}</span>
                  </div>
                  {row.note && <p className="text-xs text-slate-500 mt-0.5">{row.note}</p>}
                </li>
              ))}
            </ul>

            <div className="bg-slate-950/80 border border-amber-700/40 rounded-2xl p-4 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-slate-200">Delivered, duty paid / unit</span>
              <span className="text-2xl font-display font-black text-amber-400">{byalanceLanded}</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 relative z-10">
              {UNITS} units · {byalanceTotal} total. One PO, GST tax invoice, duty on the honest ₹735.
            </p>
          </div>
        </div>

        {/* SAVINGS STRIP */}
        <div className="mt-6 md:mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <TrendingDown className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <p className="text-sm sm:text-base font-semibold text-emerald-900">
              You save <span className="font-black">₹{perUnitSaving}/unit · {pctSaving}%</span> — <span className="font-black">{totalSaving} back</span> on this order.
            </p>
          </div>
          <a
            href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20want%20a%20landed-cost%20teardown%20for%20a%20product%20I%20import."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow transition-all shrink-0 whitespace-nowrap"
          >
            Get My Number <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          Illustrative example. Duty shown as BCD 7.5% + Social Welfare Surcharge + IGST 18%, stacked per current rules. Your number depends on your product's HSN classification and route.
        </p>
      </div>
    </section>
  );
}
