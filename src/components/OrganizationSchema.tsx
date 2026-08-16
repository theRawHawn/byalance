import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  founderName?: string;
  founderUrl?: string;
}

export default function OrganizationSchema({
  name = 'Byalance',
  url = 'https://byalance.in',
  logo = 'https://byalance.in/brandlogo_opt.png',
  sameAs = [
    'https://www.facebook.com/byalance',
    'https://x.com/Byalance_in',
    'https://www.instagram.com/byalance.in',
    'https://www.linkedin.com/company/byalance'
  ],
  founderName = 'Rohan Kulakarni',
  founderUrl = 'https://www.linkedin.com/in/rohann-kulakarni/', // Replace with Rohan's exact LinkedIn URL
}: OrganizationSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': name,
    'url': url,
    'logo': logo,
    'founder': {
      '@type': 'Person',
      'name': founderName,
      'jobTitle': 'Founder',
      'sameAs': [founderUrl]
    },
    'sameAs': sameAs,
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+91-7406296116',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
