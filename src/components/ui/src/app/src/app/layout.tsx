import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'GCS Paint Worx | Professional Painting Services in Pretoria, Witbank & Bronkhorstpruit',
  description:
    'GCS Paint Worx offers expert building painting, roof waterproofing, wall repairs, pavement painting and more. Serving Pretoria, Witbank & Bronkhorstpruit. Call 076 778 4726 for a FREE quote today!',
  keywords: [
    'painting services Pretoria',
    'painting contractor Witbank',
    'roof waterproofing Pretoria',
    'wall repairs Bronkhorstpruit',
    'exterior painting South Africa',
    'interior painting Equestria',
    'pavement painting Pretoria',
    'GCS Paint Worx',
    'professional painters Pretoria East',
    'building painting services',
  ],
  authors: [{ name: 'GCS Paint Worx' }],
  creator: 'GCS Paint Worx',
  publisher: 'GCS Paint Worx',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://gcspaintworx.com',
    siteName: 'GCS Paint Worx',
    title: 'GCS Paint Worx | Professional Painting & Property Transformation',
    description:
      'We Paint. We Protect. We Perfect. Expert painting services across Pretoria, Witbank & Bronkhorstpruit. Get your FREE quote via WhatsApp: 076 778 4726',
    images: [
      {
        url: 'https://raw.createusercontent.com/c817f9d3-fd08-4fea-8f5a-0235fcb36e09/',
        width: 1200,
        height: 630,
        alt: 'GCS Paint Worx - Professional Painting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCS Paint Worx | Professional Painting Services',
    description:
      'Expert painting, waterproofing & wall repairs across Pretoria, Witbank & Bronkhorstpruit. FREE quotes available!',
    images: ['https://raw.createusercontent.com/c817f9d3-fd08-4fea-8f5a-0235fcb36e09/'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://gcspaintworx.com',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://gcspaintworx.com/#business',
      name: 'GCS Paint Worx',
      description:
        'Professional painting and property transformation services in Witbank, Bronkhorstpruit, and Pretoria. Building painting, roofs, waterproofing, wall repairs, pavement painting and more.',
      url: 'https://gcspaintworx.com',
      telephone: '+27767784726',
      email: 'ntsika96@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '901 Libertas Avenue',
        addressLocality: 'Equestria',
        addressRegion: 'Pretoria East',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -25.8216,
        longitude: 28.3462,
      },
      areaServed: [
        { '@type': 'City', name: 'Pretoria' },
        { '@type': 'City', name: 'Witbank' },
        { '@type': 'City', name: 'Bronkhorstpruit' },
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '14:00',
        },
      ],
      image: 'https://raw.createusercontent.com/c817f9d3-fd08-4fea-8f5a-0235fcb36e09/',
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Painting & Property Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building Painting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Waterproofing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wall Repairs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pavement Painting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fence & Wall Painting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paving Brick Sealing' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer free quotes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! GCS Paint Worx offers completely free, no-obligation quotes. Simply WhatsApp us on 076 778 4726 or fill in our contact form and we will visit your property to assess the job.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which areas do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We proudly serve Pretoria (including Equestria, Pretoria East), Witbank, and Bronkhorstpruit. Contact us if you are unsure whether your area is covered.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, GCS Paint Worx is fully insured. We carry comprehensive liability insurance so you can have complete peace of mind when we work on your property.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a painting project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project duration depends on the size and scope of the work. A standard residential exterior paint can take 2–5 days. We provide a detailed timeline with every quote.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#001F3F" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Pretoria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
