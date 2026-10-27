import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const plusJakartaSans = localFont({
  src: '../../public/fonts/plus-jakarta-sans.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hai, I am Umar Syarif — Executive Portfolio',
  description: 'Official Executive Portfolio of Umar Syarif — Visionary Leadership, Strategic Innovation & Digital Transformation.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
