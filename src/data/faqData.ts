/**
 * FAQ DATA — SEO + AEO + GEO Optimized
 * =====================================
 * All questions are phrased as real search queries.
 * Structured for Schema.org (JSON-LD) and visual Accordion UI.
 *
 * Pages using this data:
 *  - Homepage       → homeFAQs
 *  - GST Services   → gstFAQs
 *  - ITR Services   → itrFAQs
 *  - TDS Services   → tdsFAQs
 *  - Payroll        → payrollFAQs
 *  - Accounting     → accountingFAQs
 *  - EOR Services   → eorFAQs
 *  - Procurement    → procurementFAQs
 */

export interface FAQItem {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────
// HOMEPAGE FAQs
// ─────────────────────────────────────────────
export const homeFAQs: FAQItem[] = [
  {
    question: 'What services does Byalance offer?',
    answer:
      'Byalance offers end-to-end Global Procurement & Import Compliance, accounting, tax compliance, and business operations services for Indian startups, MSMEs, and global enterprises(EOR India Only). Our core solutions include Procurement, Accounting & Bookkeeping, GST Filing & Compliance, TDS Management, Income Tax Return (ITR) Filing, Payroll Processing, Employer of Record (EOR India). We serve clients across India and globally from our base in Bengaluru, Karnataka.',
  },
  {
    question: 'How much does Byalance charge per month?',
    answer:
      'Byalance pricing is transparent: Starter Plan starts at ₹1,999/month (GST & basic bookkeeping), Growth Plan ranges from ₹7,499–₹14,999/month (GST, TDS, full accounting & financial reports), and Pro Plan is ₹15,499–₹20,000+/month (GST, TDS, payroll & dedicated priority support). EOR India service is a flat $89/employee/month. Global Procurement offers itemized landed cost quotes in INR with 100% GST Tax Invoice pass-through.',
  },
  {
    question: 'Is Byalance a accounting firm?',
    answer:
      'Yes. Byalance is a accounting and business operations firm. All services are delivered online — you share documents via WhatsApp, email, or secure folder, and our certified team handles reconciliations, filings, payroll, EOR, and procurement compliance. You get enterprise-grade execution at transparent pricing without physical office visits.',
  },
  {
    question: 'Which cities and countries does Byalance serve?',
    answer:
      'Headquartered in Bengaluru (Karnataka), Byalance serves businesses across India (Mumbai, Delhi NCR, Hyderabad, Chennai, Pune, and Tier 2/3 cities) as well as international clients from the US, UK, Europe, UAE, Singapore, and beyond seeking EOR or procurement in India. All filings are done online through official portals (GSTN, Income Tax Portal, EPFO, TRACES, Customs).',
  },
  {
    question: 'Can Byalance handle accounting, payroll, and procurement for my startup?',
    answer:
      'Absolutely. Byalance specializes in startups, hardware innovators, R&D labs, and growing SMEs. We set up your books from scratch, handle GST/TDS registrations, manage monthly payroll, hire local talent legally via EOR, and procure global parts or components with customs clearance — so you can focus on scale instead of administrative hurdles.',
  },
  {
    question: 'How does Byalance Employer of Record (EOR India) work?',
    answer:
      'Byalance EOR enables foreign startups and global companies to legally hire remote employees in India without setting up a local entity. We manage employment contracts under our corporate entity, process monthly payroll in INR, deposit statutory PF, ESI, TDS, and PT, and handle HR compliance for a flat $89/employee/month fee.',
  },
  {
    question: 'How does Byalance Global Procurement & Import Compliance work?',
    answer:
      'Byalance acts as your outsourced global procurement operations team. Indian startups and R&D labs share a product link, BOM, or part number (from DigiKey, Mouser, global OEMs), and we provide a total landed cost quote in INR, handle international wire payments, customs clearance, HSN classification, and deliver to your doorstep with a valid GST Tax Invoice for Input Tax Credit (ITC).',
  },
  {
    question: 'Does Byalance work with Tally, Zoho, or QuickBooks?',
    answer:
      'Yes. Byalance works seamlessly with Tally Prime, Zoho Books, QuickBooks Online, and Excel setups. We adapt to your current workflow or help you set up the ideal accounting software for your business size and budget at no additional charge.',
  },
  {
    question: 'How do I get started with Byalance?',
    answer:
      'Getting started is simple. WhatsApp us at +91 74062 96116 or submit a inquiry form on the website. We schedule a free 15-minute consultation to understand your business, current compliance status, and recommend the right plan. Onboarding typically takes 2–3 working days.',
  },
];

// ─────────────────────────────────────────────
// GST SERVICES FAQs
// ─────────────────────────────────────────────
export const gstFAQs: FAQItem[] = [
  {
    question: 'Who needs to register for GST in India?',
    answer:
      'GST registration is mandatory if your annual turnover exceeds ₹40 lakh (goods) or ₹20 lakh (services), or ₹10 lakh in special category states. It is also compulsory for e-commerce sellers, inter-state suppliers, and businesses making taxable supplies regardless of turnover. Byalance handles the entire registration process — from document collection to GSTIN issuance.',
  },
  {
    question: 'What is the penalty for late GST filing in India?',
    answer:
      'Late GST filing attracts a penalty of ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, with a maximum of ₹10,000 per return. For nil returns, the late fee is ₹20/day (₹10 each). Additionally, unpaid tax attracts 18% annual interest. Byalance files all returns before due dates to ensure you never pay unnecessary penalties.',
  },
  {
    question: 'What is GSTR-2B and why does it matter?',
    answer:
      'GSTR-2B is the auto-generated Input Tax Credit (ITC) statement available on the GSTN portal. It shows the ITC you are eligible to claim based on your suppliers\' GSTR-1 filings. If you claim ITC not reflected in GSTR-2B, you risk interest and penalties during audits. Byalance reconciles your purchase records against GSTR-2B every month to ensure you claim only valid credits.',
  },
  {
    question: 'What is the difference between GSTR-1, GSTR-3B, and GSTR-9?',
    answer:
      'GSTR-1 reports outward supplies (sales) — filed monthly or quarterly. GSTR-3B is a monthly summary return showing tax liability and ITC claimed — payment is made here. GSTR-9 is the annual GST return reconciling the whole financial year\'s data. Byalance files all three accurately and ensures GSTR-1 and GSTR-3B are reconciled before each submission.',
  },
  {
    question: 'Can I claim Input Tax Credit on all my purchases?',
    answer:
      'No. ITC can only be claimed on business-related purchases where the supplier has filed their GSTR-1 and the amount appears in your GSTR-2B. ITC is blocked on personal expenses, motor vehicles (with exceptions), food and beverages, and certain other categories under Section 17(5). Byalance reviews your purchase register monthly to maximise legitimate ITC and flag blocked credits.',
  },
  {
    question: 'What is e-invoicing and does my business need it?',
    answer:
      'E-invoicing is mandatory for businesses with turnover above ₹5 crore. It requires generating invoices through the IRP (Invoice Registration Portal), which assigns a unique IRN and QR code. Byalance configures your e-invoicing setup, integrates with your accounting software, and ensures every invoice is IRP-compliant before it reaches your customer.',
  },
  {
    question: 'How do I switch from Composition Scheme to Regular GST?',
    answer:
      'To switch from Composition to Regular GST, you must file Form GST CMP-04 on the GSTN portal and begin filing GSTR-1 and GSTR-3B from the next month. You will also need to reverse ITC on opening stock. Byalance manages the entire transition — filing the withdrawal application, restructuring your compliance calendar, and updating your invoice format.',
  },
  {
    question: 'What GST services does Byalance provide in Bengaluru and across India?',
    answer:
      'Byalance provides complete GST compliance services across India — including GST registration, monthly GSTR-1 and GSTR-3B filing, GSTR-9 annual return, ITC reconciliation (2B vs books), e-invoicing setup, e-way bill management, and resolution of GST notices and demands. We serve clients in JP Nagar, Koramangala, Whitefield, HSR Layout, Mumbai, Delhi, Hyderabad, and all parts of India.',
  },
];

// ─────────────────────────────────────────────
// ITR SERVICES FAQs
// ─────────────────────────────────────────────
export const itrFAQs: FAQItem[] = [
  {
    question: 'Who is required to file an Income Tax Return in India?',
    answer:
      'ITR filing is mandatory if your income exceeds the basic exemption limit (₹3 lakh under new regime / ₹2.5 lakh under old regime), if you have foreign assets, if TDS has been deducted and you want a refund, or if you want to carry forward losses. It is also mandatory for companies and LLPs regardless of profit. Byalance first checks your exact applicability before filing.',
  },
  {
    question: 'What is the last date to file ITR in India?',
    answer:
      'For salaried individuals and businesses not requiring audit, the ITR due date is 31st July of the assessment year. For businesses requiring a tax audit (turnover above ₹1 crore for business / ₹50 lakh for professionals), the deadline is 31st October. A belated return can be filed until 31st December. Byalance tracks all deadlines and sends you reminders to ensure timely filing.',
  },
  {
    question: 'What is the penalty for not filing ITR on time?',
    answer:
      'A late filing fee of ₹5,000 applies if you file after the due date (reduced to ₹1,000 if income is below ₹5 lakh). Beyond this, you lose the ability to carry forward business losses, and interest at 1% per month applies on unpaid tax under Section 234A. Byalance files your return before the deadline every year to avoid these costs.',
  },
  {
    question: 'Which ITR form should I file?',
    answer:
      'The correct ITR form depends on your income type: ITR-1 (Sahaj) for salaried individuals with income up to ₹50 lakh; ITR-2 for individuals with capital gains or foreign income; ITR-3 for business income; ITR-4 (Sugam) for presumptive taxation; ITR-5 for firms/LLPs; ITR-6 for companies; ITR-7 for trusts and political parties. Filing the wrong form results in a defective return notice. Byalance selects the correct form based on your income profile.',
  },
  {
    question: 'What is Form 26AS, AIS, and TIS and why match them before filing?',
    answer:
      'Form 26AS is a tax statement showing TDS deducted, advance tax paid, and self-assessment tax. AIS (Annual Information Statement) and TIS (Taxpayer Information Summary) track interest, dividends, stock trades, and crypto transactions. The Income Tax Department matches your ITR against these reports — any mismatch can trigger a scrutiny notice. Byalance cross-checks all three before filing.',
  },
  {
    question: 'What deductions can I claim to reduce my income tax?',
    answer:
      'Key deductions include: Section 80C (up to ₹1.5 lakh for PPF, ELSS, LIC, home loan principal); Section 80D (health insurance premiums up to ₹25,000–₹50,000); Section 24(b) (home loan interest up to ₹2 lakh); HRA exemption for rent paid; Section 80G for donations. Note these are available under the old tax regime. Byalance advises on the optimal regime (old vs new) for your income profile every year.',
  },
  {
    question: 'I received an income tax notice — how can Byalance help?',
    answer:
      'Do not ignore an income tax notice. Common notices include Section 143(1) for minor mismatches, Section 139(9) for defective returns, and Section 143(2) for scrutiny. Byalance reviews the notice, identifies the cause, prepares the response with supporting documents, and files it on the income tax portal within the due date.',
  },
  {
    question: 'Can freelancers and self-employed professionals file ITR with Byalance?',
    answer:
      'Yes. Byalance specialises in ITR filing for freelancers, consultants, doctors, lawyers, architects, and other self-employed professionals. We compute your net income after deducting legitimate business expenses, check TDS deducted by clients against Form 26AS, advise on advance tax obligations, and file the correct ITR form (typically ITR-3 or ITR-4) before the due date.',
  },
];

// ─────────────────────────────────────────────
// TDS SERVICES FAQs
// ─────────────────────────────────────────────
export const tdsFAQs: FAQItem[] = [
  {
    question: 'What is TDS and who needs to deduct it?',
    answer:
      'TDS (Tax Deducted at Source) is a mechanism where the payer deducts tax at specified rates before making certain payments — such as salary, rent, contractor fees, professional charges, and interest. Any business or individual whose accounts are audited, or who pays rent above ₹2.4 lakh/year, must deduct TDS. Byalance determines your exact TDS obligations and sets up a compliance system from day one.',
  },
  {
    question: 'What is the penalty for not deducting or depositing TDS?',
    answer:
      'If you fail to deduct TDS, you are liable for interest at 1% per month from the date TDS was due to be deducted. If TDS is deducted but not deposited to the government, interest is 1.5% per month. Additionally, the expense on which TDS was not deducted may be disallowed by the Income Tax Department under Section 40(a)(ia), increasing your tax liability significantly.',
  },
  {
    question: 'When is TDS due to be deposited to the government?',
    answer:
      'TDS deducted in any month (except March) must be deposited to the government by the 7th of the following month. For March deductions, the due date is 30th April. TDS returns (Form 24Q for salary, 26Q for non-salary) are filed quarterly — due on 31st July, 31st October, 31st January, and 31st May respectively. Byalance manages all challan payments and quarterly filings.',
  },
  {
    question: 'What are Form 16 and Form 16A?',
    answer:
      'Form 16 is the TDS certificate issued by an employer to an employee for TDS deducted on salary — it contains salary details and tax computation. Form 16A is the TDS certificate for non-salary payments (contractor fees, rent, professional charges, etc.). Both must be issued within specified deadlines after the end of the financial year. Byalance generates both forms and ensures they are issued to payees on time.',
  },
  {
    question: 'What is TAN and how do I apply for one?',
    answer:
      'TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number mandatory for every entity required to deduct TDS. Without TAN, you cannot file TDS returns or deposit TDS challans. Applications are made through the NSDL portal using Form 49B. Byalance handles the entire TAN application process and typically secures your TAN within 7–10 working days.',
  },
  {
    question: 'I have a TDS default from a previous year — can Byalance fix it?',
    answer:
      'Yes. Byalance specialises in resolving prior TDS defaults — including unpaid interest, late filing fees under Section 234E, and demand notices from TRACES. We file correction statements, compute outstanding interest, assist with voluntary payment, and help respond to intimations from the Assessing Officer.',
  },
  {
    question: 'What is Section 194N cash withdrawal TDS?',
    answer:
      'Section 194N requires banks and co-operative societies to deduct TDS at 2% on cash withdrawals exceeding ₹1 crore in a financial year (or 2% on amounts above ₹20 lakh if ITR has not been filed for 3 years). Byalance advises on managing cash withdrawal patterns and ensures your ITR filing history is up to date to avoid higher TDS rates.',
  },
  {
    question: 'Can Byalance help obtain a Lower TDS Deduction Certificate under Section 197?',
    answer:
      'Yes. If your total income tax liability is lower than the default TDS rate, Byalance can prepare and file Form 13 on the Income Tax Portal to obtain a Lower or Nil TDS Deduction Certificate from your Assessing Officer under Section 197.',
  },
];

// ─────────────────────────────────────────────
// PAYROLL SERVICES FAQs
// ─────────────────────────────────────────────
export const payrollFAQs: FAQItem[] = [
  {
    question: 'What does payroll processing include?',
    answer:
      'Payroll processing covers salary computation, statutory deductions (PF, ESI, Professional Tax, LWF), TDS on salary, payslip generation, payroll register preparation, Form 16 issuance, and statutory return filings (EPF, ESI, PT returns). Byalance handles every step of this monthly cycle so you never miss a deadline or make a calculation error.',
  },
  {
    question: 'Is PF registration mandatory for all businesses in India?',
    answer:
      'EPF (Employee Provident Fund) registration is mandatory for businesses with 20 or more employees. Once registered, all employees earning up to ₹15,000/month must be enrolled. Employer contribution is 12% of basic salary + DA; employee contribution is also 12%. Byalance handles EPF registration, monthly ECR (Electronic Challan cum Return) filing, and UAN activation for new employees.',
  },
  {
    question: 'What is ESI and which businesses need to register?',
    answer:
      'ESI (Employees\' State Insurance) is a social security scheme for employees earning up to ₹21,000/month. It is mandatory for businesses with 10 or more employees (20 in some states). Employee contribution is 0.75% and employer contribution is 3.25% of gross wages. Byalance manages ESI registration, monthly contributions, and half-yearly return filing.',
  },
  {
    question: 'How much does payroll outsourcing cost with Byalance?',
    answer:
      'Byalance offers payroll processing as part of the Growth Plan (₹7,499–₹14,999/month) and Pro Plan (₹15,499–₹20,000+/month), or as a standalone service. Pricing depends on employee count and statutory filing requirements. For a custom quote based on your headcount and compliance obligations, WhatsApp us at +91 74062 96116.',
  },
  {
    question: 'What is Professional Tax and which states require it?',
    answer:
      'Professional Tax (PT) is a state-level tax on salaried employees and self-employed individuals. It is applicable in Karnataka, Maharashtra, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, and several other states. In Karnataka, the employer deducts PT from employee salaries and remits it to the state government monthly. Byalance handles PT registration, monthly deduction, and return filing for all applicable states.',
  },
  {
    question: 'What is Full and Final Settlement (F&F) in payroll?',
    answer:
      'Full and Final Settlement is the process of computing and paying all amounts owed to an employee on their last working day — including pending salary, earned leave encashment, gratuity (if applicable), reimbursements, and deduction of any advances. Byalance prepares the F&F computation statement, ensures tax is correctly deducted on the terminal payout, and issues the relieving documents.',
  },
  {
    question: 'Can Byalance handle payroll for remote or contractual employees?',
    answer:
      'Yes. Byalance manages payroll for all employee types — full-time, part-time, contractual, and remote workers. For contractors, we handle TDS under Section 194C on fees paid, ensuring 26Q compliance. For remote employees across states, we account for varying PT slabs and ensure PF/ESI applicability is correctly assessed for each individual.',
  },
  {
    question: 'How does Byalance ensure statutory compliance for monthly payroll?',
    answer:
      'Byalance computes all statutory deductions using automated compliance rules updated for latest government mandates. We file monthly EPF ECR returns, ESI monthly payments, PT challans, and 24Q quarterly TDS returns on time, eliminating compliance penalties for your company.',
  },
];

// ─────────────────────────────────────────────
// ACCOUNTING & BOOKKEEPING FAQs
// ─────────────────────────────────────────────
export const accountingFAQs: FAQItem[] = [
  {
    question: 'What is the difference between accounting and bookkeeping?',
    answer:
      'Bookkeeping is the systematic recording of daily financial transactions — sales, purchases, payments, receipts. Accounting is the broader process of summarising, interpreting, and reporting that data — producing P&L statements, balance sheets, and tax-ready financials. Byalance handles both: clean bookkeeping on a monthly basis and formal accounting reports for compliance and business decisions.',
  },
  {
    question: 'How often should a small business do bookkeeping?',
    answer:
      'Small businesses should ideally do bookkeeping monthly. Quarterly or annual bookkeeping leads to backlogs, missed GST reconciliations, incorrect TDS filings, and poor cash flow visibility. Byalance works on a monthly cadence — all entries are recorded, bank statements reconciled, and reports shared within the first 10 working days of each month.',
  },
  {
    question: 'What accounting software does Byalance use?',
    answer:
      'Byalance works with Tally Prime, Zoho Books, QuickBooks Online, and Excel-based setups. We adapt to your existing software rather than forcing a change. If you are starting from scratch, we recommend and set up the right tool based on your turnover, GST obligations, and team size — at no extra cost.',
  },
  {
    question: 'What is bank reconciliation and why is it important?',
    answer:
      'Bank reconciliation is the process of matching your accounting records with your bank statement to identify discrepancies — such as unrecorded transactions, bounced cheques, or bank charges. Without monthly reconciliation, your books may show incorrect cash balances leading to wrong GST filings or cash flow mismanagement. Byalance performs bank reconciliation every month as standard.',
  },
  {
    question: 'What financial reports does Byalance prepare?',
    answer:
      'Byalance prepares the full set of standard financial statements: Profit & Loss Account (Income Statement), Balance Sheet, Cash Flow Statement, Trial Balance, Accounts Receivable Aging, Accounts Payable Aging, and Bank Reconciliation Report. Growth and Pro plan clients also receive monthly MIS (Management Information System) reports for business performance tracking.',
  },
  {
    question: 'How does Byalance handle data security for my financial records?',
    answer:
      'Byalance treats client financial data with strict confidentiality. Documents are shared through encrypted channels (WhatsApp or email with password protection), and access is restricted to the assigned accountant. We follow a strict data handling policy — you can review our full Data Handling Policy on the website. We do not share your data with third parties under any circumstances.',
  },
  {
    question: 'Can Byalance clean up messy books from previous years?',
    answer:
      'Yes. Byalance offers data cleanup and catch-up bookkeeping services for businesses with incomplete, incorrect, or backlogged accounts. We reconstruct entries from bank statements, invoices, and receipts, reconcile the books against filed GST and TDS returns, and bring your accounts up to date.',
  },
  {
    question: 'Does Byalance assist during statutory or tax audits?',
    answer:
      'Yes. Byalance prepares audit-ready schedules, trial balances, fixed asset registers, and ledger reconciliations for your statutory auditor or Tax Auditor, ensuring smooth audit completion without delays.',
  },
];

// ─────────────────────────────────────────────
// EMPLOYER OF RECORD (EOR) FAQs
// ─────────────────────────────────────────────
export const eorFAQs: FAQItem[] = [
  {
    question: 'What is Byalance Employer of Record (EOR India)?',
    answer:
      'Byalance EOR is a complete legal and HR infrastructure service that allows international companies to hire, onboard, and pay remote full-time employees in India without incorporating a local legal entity. Byalance acts as the official employer of record, taking full responsibility for local employment contracts, monthly payroll, and statutory taxes.',
  },
  {
    question: 'Why do all payments have to flow through Byalance instead of direct to the employee?',
    answer:
      'Since Byalance acts as the legal Employer of Record (EOR) in India, all employment contracts, statutory filings (PF, ESI, TDS, PT), and payroll are managed under our corporate entity. Under Indian labor laws, the legal employer of record must be the sole entity dispersing salaries and depositing statutory contributions. Direct client-to-employee payments bypass this legal framework, creating compliance violations and joint-employment risks.',
  },
  {
    question: 'Who carries the legal compliance liability for the employees in India?',
    answer:
      'Byalance assumes 100% of the statutory employer liability for your hires in India. We register the employee under our corporate EPFO, ESIC, Professional Tax, and Income Tax (TDS) codes. We guarantee that your employment contracts, monthly payroll filings, and full-and-final settlements strictly comply with Indian central and state labor regulations, fully protecting your foreign entity.',
  },
  {
    question: 'What is the timeline to onboard an employee in India under Byalance EOR?',
    answer:
      'Onboarding typically takes between 3 to 5 business days. Once the Master Services Agreement (MSA) is signed and the refundable security deposit is cleared, we draft and sign the employment agreement with the employee, verify their identity and bank credentials (PAN, Aadhaar, Bank IFSC), set up their PF UAN, and prepare their payroll profiles.',
  },
  {
    question: 'What happens to the refundable security deposit when a contract ends?',
    answer:
      'The refundable security deposit (equivalent to 1–2 months of employee CTC) is held securely to shield against international wire settlement delays. Upon natural termination or end of the employment contract, the deposit is either fully returned to the client or adjusted against the final month\'s billing, once all final settlements (F&F) and statutory filings are processed.',
  },
  {
    question: 'What happens if the client\'s monthly payment is delayed?',
    answer:
      'Because Indian labor laws mandate that salaries must be paid by the 7th of the month and PF contributions filed by the 15th, Byalance cannot delay disbursements without triggering severe penalties. In case of payment delays from the client, we utilize the refundable security deposit to cover these statutory commitments.',
  },
];

// ─────────────────────────────────────────────
// PROCUREMENT & IMPORT COMPLIANCE FAQs
// ─────────────────────────────────────────────
export const procurementFAQs: FAQItem[] = [
  {
    question: 'What is Byalance Procurement & Import Compliance service?',
    answer:
      'Byalance acts as your outsourced global procurement and import team. We are a business operations company that helps Indian startups, R&D labs, manufacturers, and SMEs procure products from anywhere in the world (DigiKey, Mouser, global OEMs, etc.) and handles the complete import process, customs clearance, HSN classification, supplier payments, and domestic delivery with a GST tax invoice.',
  },
  {
    question: 'How does the product procurement process work?',
    answer:
      'It works in 6 simple steps: 1. You share a product link, BOM (Bill of Materials), or part number. 2. We send you a final landed cost quote in INR. 3. You approve and pay in INR. 4. We procure globally from the supplier. 5. We handle customs clearance, HSN classification, import duty, and compliance paperwork. 6. Delivered directly to your doorstep anywhere in India with a valid GST Tax Invoice.',
  },
  {
    question: 'Do I need an IEC (Import Export Code) or prior import experience?',
    answer:
      'No prior import experience or IEC is required. Byalance manages the entire import lifecycle under our compliant operational setup. You don\'t have to deal with customs officers, DHL/FedEx/UPS clearance desks, international wire transfers, or complicated shipping documentation. You simply send us a link and receive the product at your door.',
  },
  {
    question: 'Can I claim GST Input Tax Credit (ITC) on imported products?',
    answer:
      'Yes! When you procure through Byalance, we provide a valid GST Tax Invoice containing all itemized details. This enables your business to claim 100% Input Tax Credit (ITC) on the GST portion of the invoice, reducing your net operational procurement costs.',
  },
  {
    question: 'What platforms or suppliers can Byalance procure from?',
    answer:
      'We procure from global electronics and industrial platforms including DigiKey, Mouser Electronics, Arrow, Farnell, McMaster-Carr, Element14, industrial suppliers, international OEMs, and specialized global component suppliers across the US, Europe, Japan, China, Taiwan, and beyond.',
  },
  {
    question: 'Who is this procurement service designed for?',
    answer:
      'Our procurement and import service is custom-built for Indian startups, R&D labs, robotics companies, electronics firms, manufacturers, industrial automation companies, universities, engineering teams, and MSMEs needing components, prototypes, testing gear, or specialized equipment without international procurement friction.',
  },
  {
    question: 'How are customs duty, forex conversion, and shipping handled?',
    answer:
      'Byalance calculates exact HSN customs duty rates, handles foreign exchange conversions compliant with RBI/FEMA guidelines, manages customs documentation at Indian ports, and delivers the cleared shipment directly to your facility with full transparency.',
  },
];
