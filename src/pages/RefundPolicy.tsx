import React from 'react';
import SEO from '../components/SEO';

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-100">
      <SEO 
        title="Refund & Cancellation Policy | Byalance Remote Accounting & Tax"
        description="Read our Refund and Cancellation Policy to understand your cancellation rights, refund eligibility, and subscription terms for Byalance remote accounting services."
        canonical="https://byalance.in/refund-policy"
        keywords="refund policy, cancellation policy, subscription refund, accounting service refund India, refund eligibility Byalance"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="prose lg:prose-xl prose-headings:text-blue-600 max-w-none">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Refund & Cancellation Policy</h1>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> July 1, 2026
              <br />
              <strong>Last Updated:</strong> July 1, 2026
            </p>
            
            <p className="text-gray-700">
              This Refund & Cancellation Policy applies to all services provided by Byalance (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) to clients (&quot;you,&quot; &quot;your&quot;) through our website, WhatsApp, email, or any other channel of engagement.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">1. Nature of Our Services</h2>
            <p className="text-gray-700">
              Byalance provides accounting, bookkeeping, GST, TDS, payroll, and related compliance support services on a <strong>subscription/retainer basis</strong>. Our services are not physical products and are delivered on an ongoing, recurring basis (monthly or as per the agreed engagement terms).
            </p>
            <p className="text-gray-700 mt-2">
              Because our work often involves filings with government portals (GST, TDS/TRACES, EPFO, MCA, etc.), certain actions — once completed — <strong>cannot be reversed or undone</strong>, regardless of any later cancellation request.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">2. Cancellation by the Client</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You may cancel your engagement with Byalance at any time by providing <strong>written notice</strong> (via email to <a href="mailto:contact@byalance.in" className="text-blue-600 hover:underline">contact@byalance.in</a> or WhatsApp) at least <strong>15 days before your next billing cycle</strong>.</li>
              <li>Cancellation requests received after a billing cycle has started will take effect from the <strong>following cycle</strong>; the current cycle&apos;s fee is not refunded, as work for that period has already commenced or been scheduled.</li>
              <li>Upon cancellation, we will share all data, records, and working files relevant to your business that are in our possession, within a reasonable timeframe.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">3. Cancellation by Byalance</h2>
            <p className="text-gray-700">
              We reserve the right to discontinue services with prior written notice (typically 15 days) in cases including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Non-payment of fees beyond the agreed due date</li>
              <li>Failure to provide necessary documents, access, or information required to complete statutory filings</li>
              <li>Misuse of our services or breach of the engagement terms</li>
            </ul>
            <p className="text-gray-700 mt-2">
              In such cases, any fees paid for work already completed or in progress will not be refunded.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">4. Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              As our services are time and effort-based (not product-based), refunds are handled as follows:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Situation</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Refund Eligibility</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 border-r">Cancellation before any work has started in the current billing cycle</td>
                    <td className="px-6 py-4"><strong>100% of the monthly charge</strong> for that cycle</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 border-r">Cancellation after work has started but before filing/submission</td>
                    <td className="px-6 py-4"><strong>50% of the monthly charge</strong>, at our discretion, based on work already completed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 border-r">Cancellation after a statutory filing or submission has been made</td>
                    <td className="px-6 py-4"><strong>No refund</strong> — filings once submitted to government portals (GST, TDS, EPFO, MCA, etc.) cannot be reversed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 border-r">Service quality dispute</td>
                    <td className="px-6 py-4">Reviewed case-by-case (see Section 5)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 border-r">Change of mind / business closure</td>
                    <td className="px-6 py-4">No refund for the current billing cycle; future cycles are not charged</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700">
              Approved refunds, where applicable, will be processed within <strong>7–10 business days</strong> to the original mode of payment (UPI/bank transfer).
            </p>

            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">One-Time Onboarding Deposit</h3>
            <p className="text-gray-700">
              First-time clients are charged a <strong>one-time onboarding deposit of ₹2,000</strong> in addition to their monthly/annual service charge. This deposit covers initial setup, account/document review, and onboarding effort.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li><strong>Cancelled before work begins, or within the first month of service:</strong> The ₹2,000 deposit is <strong>non-refundable</strong>.</li>
              <li><strong>Cancelled after completing at least one full month of active service:</strong> The ₹2,000 deposit will be <strong>refunded, or adjusted against any pending bills</strong>, at the client&apos;s preference.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              The monthly/annual service charge for the cycle in which cancellation occurs is handled separately, as per the refund treatment described in the table above.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">5. Service Quality Disputes</h2>
            <p className="text-gray-700">
              If you&apos;re unsatisfied with the quality or delivery of a service, please reach out to us within <strong>7 days</strong> of the issue at <a href="mailto:contact@byalance.in" className="text-blue-600 hover:underline">contact@byalance.in</a>. We will review the matter and, where we determine an error or delay was on our part, we may offer a corrective fix, partial credit toward your next billing cycle, or a partial refund — at our discretion, based on the specifics of the case.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">6. Annual Subscription Plans</h2>
            <p className="text-gray-700">
              Clients who opt for an <strong>annual subscription</strong> (paid upfront for 12 months) receive a discount compared to the monthly billing rate, as specified in our pricing plans at the time of signup.
            </p>
            <p className="text-gray-700 mt-2">
              If an annual plan is cancelled partway through the term:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>The amount already paid will be <strong>recalculated at the standard monthly rate</strong> for the number of months the service was actually used.</li>
              <li>The <strong>annual discount is forfeited</strong> on cancellation — it only applies when the full 12-month term is honored.</li>
              <li>Any remaining balance after this recalculation will be refunded as per the refund eligibility rules in Section 4 (i.e., the month in which cancellation occurs is treated per the table above; fully completed prior months are not refunded).</li>
              <li>The one-time onboarding deposit is handled as per Section 4 — non-refundable if cancelled within the first month, refundable/adjustable against pending bills if cancelled after at least one full month of service.</li>
            </ul>
            <p className="text-gray-700 mt-3 italic bg-gray-50 p-4 border-l-4 border-blue-600 rounded">
              <strong>Example:</strong> If a client pays for an annual plan at a discounted rate and cancels after 4 months, the first 4 months will be billed at the regular monthly rate (not the discounted annual rate), and the remaining balance will be refunded accordingly.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">7. Founding Member / Promotional Offers</h2>
            <p className="text-gray-700">
              Clients onboarded under special promotional terms (such as a founding member rate lock) are subject to the specific terms shared at the time of that offer. Cancellation under a promotional plan follows the same notice and refund principles above, unless explicitly stated otherwise in the offer terms.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">8. White-Label / CA Partner Engagements</h2>
            <p className="text-gray-700">
              For CA partners engaging Byalance on a white-label basis, cancellation and refund terms are governed by the separate partnership agreement signed at onboarding, not this policy.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this policy from time to time. Continued use of our services after an update constitutes acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700">
              For any cancellation or refund requests, please contact:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> <a href="mailto:contact@byalance.in" className="text-blue-600 hover:underline">contact@byalance.in</a>
              <br />
              <strong>WhatsApp / Mobile:</strong> <a href="https://wa.me/917406296116" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+91 74062 96116</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
