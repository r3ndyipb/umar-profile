import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const plusJakartaSans = localFont({
  src: '../../public/fonts/plus-jakarta-sans.woff2',
  display: 'swap',
});

const siteUrl = 'https://umar-profile.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hai, I am Umar Syarif — Executive Portfolio',
    template: '%s | Umar Syarif',
  },
  description:
    'Official Executive Portfolio of Umar Syarif — Visionary Leadership, Strategic Innovation, Human Capital Transformation & Sustainable Digital Value Creation.',
  keywords: [
    'Umar Syarif',
    'Executive Portfolio',
    'Board Advisory',
    'Strategic Innovation',
    'Digital Transformation',
    'Human Capital Engineering',
    'Corporate Governance',
    'C-Level Executive',
    'Indonesia Leadership',
    'M&A Advisory',
  ],
  authors: [{ name: 'Umar Syarif', url: 'https://www.linkedin.com/in/umar-syarif-912b4753/' }],
  creator: 'Umar Syarif',
  publisher: 'Umar Syarif',
  alternates: {
    canonical: '/',
  },
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
    type: 'profile',
    firstName: 'Umar',
    lastName: 'Syarif',
    gender: 'male',
    username: 'umar-syarif',
    title: 'Hai, I am Umar Syarif — Executive Portfolio',
    description:
      'Official Executive Portfolio of Umar Syarif — Visionary Leadership, Strategic Innovation, Human Capital Transformation & Digital Value Creation.',
    url: siteUrl,
    siteName: 'Umar Syarif — Executive Portfolio',
    locale: 'id_ID',
    images: [
      {
        url: '/UMAR.png',
        width: 800,
        height: 1000,
        alt: 'Umar Syarif - Executive Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hai, I am Umar Syarif — Executive Portfolio',
    description:
      'Official Executive Portfolio of Umar Syarif — Visionary Leadership, Strategic Innovation & Digital Transformation.',
    images: ['/UMAR.png'],
    creator: '@umarsyarif',
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Umar Syarif',
      givenName: 'Umar',
      familyName: 'Syarif',
      url: siteUrl,
      image: `${siteUrl}/UMAR.png`,
      sameAs: [
        'https://www.linkedin.com/in/umar-syarif-912b4753/',
        'https://wa.me/628170034354',
      ],
      jobTitle: 'Executive Leader & Strategic Advisor',
      description:
        'Executive Leader & Strategic Advisor specializing in digital transformation, corporate governance, human capital engineering, and sustainable value creation.',
      knowsAbout: [
        'Executive Leadership',
        'Strategic Innovation',
        'Digital Transformation',
        'Human Capital & Culture Engineering',
        'Corporate Finance & Value Creation',
        'Board Advisory & Governance',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Hai, I am Umar Syarif — Executive Portfolio',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Umar Syarif Executive Portfolio',
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      description:
        'Official Executive Portfolio of Umar Syarif — Visionary Leadership, Strategic Innovation & Digital Transformation.',
      inLanguage: 'id-ID',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
