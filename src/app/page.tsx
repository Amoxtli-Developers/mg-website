'use client';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import JsonLd from '@/components/ui/JsonLd';
import { useGetPropertiesQuery } from '@/store/propertiesApi';

export default function Home() {
    const { data: properties = [], isLoading, error } = useGetPropertiesQuery()

    // opcional: mostrar spinner o mensaje
    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div
                    className="h-16 w-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"
                    aria-label="Loading spinner"
                />
            </div>
        );
    }
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "MG Servicio Inmobiliario",
        "description": "Somos un grupo de profesionistas con más de 40 años de experiencia en el área Inmobiliaria, administrativa y legal, con el propósito de ayudar a nuestros clientes en operaciones de compra, venta, renta y administración inmobiliaria.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Coyoacán 1435, Centro Urbano Presidente Alemán, Edificio H, Despacho 60-B",
            "addressLocality": "Ciudad de México",
            "addressRegion": "CDMX",
            "postalCode": "03100",
            "addressCountry": "MX"
        },
        "telephone": ["55-34-24-93", "55-34-59-44", "55-24-87-80"],
        "email": "contacto@mgsi.mx",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:30",
            "closes": "18:00"
        },
        "priceRange": "$$$",
        "sameAs": [
            "https://www.facebook.com/mgservicioinmobiliario",
            "https://www.instagram.com/mgservicioinmobiliario"
        ]
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            {error ? (
            <p></p>
            ) : (
            <PortfolioSection properties={properties} />
            )}
            <TestimonialsSection />
            <ContactSection />
        </>
    );
}