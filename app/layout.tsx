import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap'
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-urbanist',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Gestral — Gestión de obra simple y potente',
  description: 'Planos, tareas y avances en un solo lugar.',
  metadataBase: new URL('https://www.gestral.cl'),
  openGraph: {
    title: 'Gestral — Gestión de obra simple y potente',
    description: 'Planos, tareas y avances en un solo lugar.',
    url: 'https://www.gestral.cl',
    siteName: 'Gestral',
    images: [
      {
        url: '/gestral_og_from_user_logo.png',
        width: 1200,
        height: 630,
        alt: 'Gestral logo'
      }
    ],
    locale: 'es_CL',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestral — Gestión de obra simple y potente',
    description: 'Planos, tareas y avances en un solo lugar.',
    images: ['/gestral_og_from_user_logo.png']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${urbanist.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
