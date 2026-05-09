// app/layout.tsx
import type { Metadata } from 'next';
import {
  Playfair_Display,
  DM_Sans,
  Cormorant_Garamond,
  DM_Mono,
} from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuroraBackground } from '@/components/effects/AuroraBackground';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s | Studio',
    default: 'Studio — Presença Digital Premium',
  },
  description:
    'Sites, landing pages, automações e agentes de IA para negócios que querem crescer.',
  keywords: [
    'next.js',
    'automação',
    'agente ia',
    'landing page',
    'site institucional',
    'campo grande',
  ],
  icons: {
    icon: '/brand/brand.jpg',
    shortcut: '/brand/brand.jpg',
    apple: '/brand/brand.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Studio',
    images: [
      {
        url: '/brand/brand.jpg',
        width: 512,
        height: 512,
        alt: 'Studio — Presença Digital Premium',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${dmMono.variable} text-cream bg-[#0E0C0A] antialiased`}
      >
        <AuroraBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
