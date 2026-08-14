import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  category?: string;
  providerName?: string;
  providerUrl?: string;
  areaServed?: string;
  offers?: {
    priceCurrency?: string;
    price?: string;
    description?: string;
  };
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      name: string;
      description: string;
    }>;
  };
}

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  category = "Business Operations & Procurement",
  providerName = "Byalance",
  providerUrl = "https://byalance.in",
  areaServed = "IN",
  offers,
  hasOfferCatalog,
}: ServiceSchemaProps) {
  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': name,
    'description': description,
    'url': url,
    'serviceType': serviceType,
    'category': category,
    'provider': {
      '@type': 'Organization',
      'name': providerName,
      'url': providerUrl,
      'logo': `${providerUrl}/brandlogowhite_opt.webp`,
      'sameAs': [
        'https://www.linkedin.com/company/byalance',
        'https://x.com/byalance_in',
        'https://www.instagram.com/byalance.in'
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560078',
        'addressCountry': 'IN'
      }
    },
    'areaServed': {
      '@type': 'Country',
      'name': areaServed === 'IN' ? 'India' : areaServed
    }
  };

  if (offers) {
    jsonLd.offers = {
      '@type': 'Offer',
      'priceCurrency': offers.priceCurrency || 'INR',
      'price': offers.price || 'Contact for Quote',
      'description': offers.description || 'Custom landed-cost quotation including all customs, FX and taxes'
    };
  }

  if (hasOfferCatalog) {
    jsonLd.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      'name': hasOfferCatalog.name,
      'itemListElement': hasOfferCatalog.itemListElement.map((item, index) => ({
        '@type': 'OfferCatalog',
        'name': item.name,
        'description': item.description,
        'position': index + 1
      }))
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
