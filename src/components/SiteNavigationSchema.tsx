import React from 'react';
import { Head } from 'vike-react/Head';

export default function SiteNavigationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    'name': 'Byalance Primary Services',
    'hasPart': [
      {
        '@type': 'WebPage',
        'name': 'Accounting & Bookkeeping Services',
        'url': 'https://byalance.com/services/accounting-bookkeeping',
        'description': 'Comprehensive accounting, bookkeeping, and compliant invoicing services for Indian businesses.'
      },
      {
        '@type': 'WebPage',
        'name': 'GST Filing & Compliance',
        'url': 'https://byalance.com/services/gst-services',
        'description': 'End-to-end GST registration, monthly GSTR files reconciliation, and secure input tax credits matching.'
      },
      {
        '@type': 'WebPage',
        'name': 'ITR Returns Filing',
        'url': 'https://byalance.com/services/itr-services',
        'description': 'Hassle-free corporate and personal Income Tax Return filing under experts and tax lawyers.'
      },
      {
        '@type': 'WebPage',
        'name': 'Payroll Processing & HR compliance',
        'url': 'https://byalance.com/services/payroll-processing',
        'description': 'Automated employee salary calculations, provident funds PF, and ESI benefits processing.'
      },
      {
        '@type': 'WebPage',
        'name': 'TDS Return Filing',
        'url': 'https://byalance.com/services/tds-services',
        'description': 'Accurate tax deductions at source computations, quarterly 24Q/26Q filings, and TRACES forms.'
      },
      {
        '@type': 'WebPage',
        'name': 'Employer of Record (EOR) India',
        'url': 'https://byalance.com/services/eor-services-india',
        'description': 'Hire remote employees in India legally without setting up a local entity. Byalance acts as the legal employer, managing payroll, PF, ESI, and tax compliance.'
      }
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}
