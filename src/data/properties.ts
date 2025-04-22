export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // en metros cuadrados
  images: string[];
  featured: boolean;
  type: 'venta' | 'renta';
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Casa moderna con jardín',
    description: 'Hermosa casa moderna con amplios espacios, acabados de lujo y un hermoso jardín. Perfecta para familias que buscan comodidad y elegancia.',
    price: 4500000,
    location: 'Polanco, Ciudad de México',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 180,
    images: ['/images/properties/property-1-1.jpg', '/images/properties/property-1-2.jpg', '/images/properties/property-1-3.jpg'],
    featured: true,
    type: 'venta'
  },
  {
    id: 2,
    title: 'Apartamento de lujo en zona exclusiva',
    description: 'Apartamento de lujo con vistas panorámicas, acabados de primera y amenidades premium en el edificio. Ubicado en la mejor zona de la ciudad.',
    price: 3200000,
    location: 'Condesa, Ciudad de México',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    images: ['/images/properties/property-2-1.jpg', '/images/properties/property-2-2.jpg'],
    featured: true,
    type: 'venta'
  },
  {
    id: 3,
    title: 'Penthouse con terraza privada',
    description: 'Espectacular penthouse con terraza privada, techos altos, amplios ventanales y una vista impresionante de la ciudad. Lujo en cada detalle.',
    price: 6800000,
    location: 'Lomas de Chapultepec, Ciudad de México',
    bedrooms: 3,
    bathrooms: 3.5,
    area: 230,
    images: ['/images/properties/property-3-1.jpg', '/images/properties/property-3-2.jpg', '/images/properties/property-3-3.jpg'],
    featured: true,
    type: 'venta'
  },
  {
    id: 4,
    title: 'Apartamento amueblado en zona céntrica',
    description: 'Apartamento completamente amueblado y equipado, listo para habitar. Ubicado cerca de restaurantes, tiendas y transporte público.',
    price: 18000,
    location: 'Roma Norte, Ciudad de México',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    images: ['/images/properties/property-4-1.jpg', '/images/properties/property-4-2.jpg'],
    featured: false,
    type: 'renta'
  },
  {
    id: 5,
    title: 'Casa con alberca en fraccionamiento privado',
    description: 'Amplia casa con alberca privada, jardín y áreas comunes en exclusivo fraccionamiento con seguridad 24/7. Ideal para familias.',
    price: 5300000,
    location: 'Interlomas, Estado de México',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    images: ['/images/properties/property-5-1.jpg', '/images/properties/property-5-2.jpg', '/images/properties/property-5-3.jpg'],
    featured: false,
    type: 'venta'
  },
  {
    id: 6,
    title: 'Oficina ejecutiva en distrito financiero',
    description: 'Oficina ejecutiva con diseño moderno, salas de juntas equipadas y excelente ubicación en el corazón del distrito financiero.',
    price: 32000,
    location: 'Reforma, Ciudad de México',
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    images: ['/images/properties/property-6-1.jpg', '/images/properties/property-6-2.jpg'],
    featured: false,
    type: 'renta'
  }
];