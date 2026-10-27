import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
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
