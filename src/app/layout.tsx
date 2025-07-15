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

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
			</head>
            <body>
                <Providers>
                    <PrivacyPolicyProvider>
                        <div>
                            <Header />
                            <main>{children}</main>
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