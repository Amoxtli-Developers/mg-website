import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import '@/styles/globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SocialLinks from '@/components/ui/SocialLinks';
import PrivacyPolicyDialog from '@/components/ui/PrivacyPolicyDialog';
import { PrivacyPolicyProvider } from '@/context/PrivacyPolicyContext';
import { Providers } from './providers';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    title: 'MG Servicio Inmobiliario | Expertos en Propiedades en México',
    description: 'Empresa especializada en propiedades inmobiliarias con más de 40 años de experiencia en el mercado mexicano. Asesoramiento para compra, venta y renta de propiedades.',
    keywords: 'inmobiliaria, propiedades, bienes raíces, casas en venta, departamentos en renta, servicios inmobiliarios, asesores inmobiliarios',
    authors: [{ name: 'MG Servicio Inmobiliario' }],
    category: 'Real Estate',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'MG Servicio Inmobiliario | Expertos en Propiedades en México',
        description: 'Empresa especializada en propiedades inmobiliarias con más de 40 años de experiencia en el mercado mexicano.',
        url: 'https://mgservicioinmobiliario.com',
        siteName: 'MG Servicio Inmobiliario',
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MG Servicio Inmobiliario | Expertos en Propiedades',
        description: 'Empresa especializada en propiedades inmobiliarias con más de 40 años de experiencia en el mercado mexicano.',
    },
    icons: {
        icon: '/images/logo-icon.svg',
        apple: '/images/logo-icon.svg',
    },
};

export const viewport = {
    themeColor: '#B40039',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es" className={`${inter.variable} scroll-smooth`}>
            <head>
                {/* Estilos para Swiper */}
                <style>
                    {`
          /* Sobrescribir por completo los estilos de Swiper */
          .swiper-button-next, .swiper-button-prev {
            color: #B40039 !important;
          }
          
          .swiper-pagination-bullet {
            background: #cccccc !important;
            opacity: 0.6 !important;
          }
          
          .swiper-pagination-bullet-active {
            background: #B40039 !important;
            opacity: 1 !important;
          }
          `}
                </style>
            </head>
            <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
                <Providers>
                    <PrivacyPolicyProvider>
                        <div className="flex flex-col min-h-screen overflow-x-hidden">
                            <Header />
                            <main className="flex-1">{children}</main>
                            <Footer />
                            <WhatsAppButton />
                            <SocialLinks />
                            <PrivacyPolicyDialog />
                        </div>
                    </PrivacyPolicyProvider>
                </Providers>
            </body>
        </html>
    );
}