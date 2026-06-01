import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { MobileBottomNav } from '@/components/layout/navFooter';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://isacdev.vercel.app/',
  ),
  title: 'Isac Freitas | Portfólio',
  description: 'Portfólio premium com estilo terminal e interface SaaS.',
  icons: {
    icon: '/brand/brand.svg',
  },
  openGraph: {
    title: 'Isac Freitas | Portfólio',
    description: 'Portfólio premium com estilo terminal e interface SaaS.',
    type: 'website',
    images: ['/brand/brand.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isac Freitas | Portfólio',
    description: 'Portfólio premium com estilo terminal e interface SaaS.',
    images: ['/brand/brand.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-surface-400 text-primary min-h-screen antialiased">
        <Navbar />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
