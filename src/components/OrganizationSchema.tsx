import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export default function OrganizationSchema({
  name = 'Byalance',
  url = 'https://byalance.in',
  logo = 'https://byalance.in/brandlogo%20(1).svg',
  sameAs = [
    'https://www.facebook.com/byalance',
    'https://www.linkedin.com/company/byalance'
  ],
}: OrganizationSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': name,
    'url': url,
    'logo': logo,
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
