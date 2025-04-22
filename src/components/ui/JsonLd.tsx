'use client';
import Script from 'next/script';
import { FC } from 'react';

interface JsonLdProps {
  data: any;
}

/**
 * Componente para generar JSON-LD estructurado para SEO
 */
const JsonLd: FC<JsonLdProps> = ({ data }) => {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
};

export default JsonLd;

/**
 * Generar datos estructurados para la organización
 */
/**
 * Función que se puede llamar tanto del lado del cliente como del servidor
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'MG Servicio Inmobiliario',
    url: 'https://mgservicioinmobiliario.com',
    logo: 'https://mgservicioinmobiliario.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52 55 1234 5678',
      contactType: 'customer service',
      areaServed: 'MX',
      availableLanguage: ['Spanish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Principal 123',
      addressLocality: 'Ciudad de México',
      postalCode: '04000',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://www.facebook.com/mgservicioinmobiliario',
      'https://www.instagram.com/mgservicioinmobiliario',
      'https://www.linkedin.com/company/mgservicioinmobiliario',
    ],
  };
};

/**
 * Generar datos estructurados para una propiedad inmobiliaria
 */
export const generatePropertySchema = (property: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: property.title,
    description: property.description,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    image: property.images[0],
    brand: {
      '@type': 'Brand',
      name: 'MG Servicio Inmobiliario',
    },
  };
};