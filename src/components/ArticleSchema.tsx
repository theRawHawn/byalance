import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  headline: string;
  authorName?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  description?: string;
}

export default function ArticleSchema({
  headline,
  authorName = 'Byalance Experts',
  datePublished,
  dateModified,
  image = 'https://byalance.in/brandlogo_opt.png',
  description,
}: ArticleSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': headline,
    'image': [image],
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Organization',
      'name': authorName,
      'url': 'https://byalance.in'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Byalance',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://byalance.in/brandlogo_opt.png'
      }
    },
    'description': description
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
