import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mgservicioinmobiliario.com';

  // Rutas estáticas
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/privacidad`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/terminos`, lastModified: new Date(), priority: 0.5 },
  ];

  // Rutas dinámicas para propiedades
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/propiedades/${property.id}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes];
}