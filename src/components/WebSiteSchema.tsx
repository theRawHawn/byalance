import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
}

export default function WebSiteSchema({
  name = 'Byalance',
  url = 'https://byalance.in',
}: WebSiteSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': name,
    'url': url,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
