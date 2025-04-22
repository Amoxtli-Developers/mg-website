'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define property type
type Property = {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  features: string[];
  image: string;
  type: string;
};

// Sample data for properties inspired by MG Servicio Inmobiliario
const properties: Property[] = [
  {
    id: 1,
    title: 'Residencia en Polanco',
    description: 'Espectacular residencia con acabados de lujo, amplios espacios y excelente ubicación en una de las zonas más exclusivas de la ciudad.',
    price: '$7,950,000',
    location: 'Polanco, CDMX',
    features: ['4 Habitaciones', '5 Baños', 'Piscina', 'Jardín', '420 m²'],
    image: '/property-1.jpg',
    type: 'Venta',
  },
  {
    id: 2,
    title: 'Apartamento Condesa',
    description: 'Moderno apartamento con excelente iluminación natural y acabados contemporáneos en una de las colonias más vibrantes de la ciudad.',
    price: '$28,500/mes',
    location: 'La Condesa, CDMX',
    features: ['2 Habitaciones', '2 Baños', 'Estacionamiento', 'Gimnasio', '110 m²'],
    image: '/property-2.jpg',
    type: 'Renta',
  },
  {
    id: 3,
    title: 'Casa en San Ángel',
    description: 'Hermosa casa estilo colonial mexicano con detalles arquitectónicos únicos y amplios espacios para toda la familia.',
    price: '$12,800,000',
    location: 'San Ángel, CDMX',
    features: ['5 Habitaciones', '4.5 Baños', 'Terraza', 'Jardín', '560 m²'],
    image: '/property-3.jpg',
    type: 'Venta',
  },
  {
    id: 4,
    title: 'Loft en Roma Norte',
    description: 'Espacioso loft con diseño industrial y techos altos, ubicado en una zona con excelente oferta gastronómica y cultural.',
    price: '$19,800/mes',
    location: 'Roma Norte, CDMX',
    features: ['1 Habitación', '1.5 Baños', 'Terraza', 'Pet Friendly', '95 m²'],
    image: '/property-4.jpg',
    type: 'Renta',
  },
  {
    id: 5,
    title: 'Penthouse en Santa Fe',
    description: 'Exclusivo penthouse con vistas panorámicas de la ciudad, acabados de lujo y múltiples amenidades en un prestigioso desarrollo.',
    price: '$15,500,000',
    location: 'Santa Fe, CDMX',
    features: ['3 Habitaciones', '3.5 Baños', 'Terraza', 'Jacuzzi', '290 m²'],
    image: '/property-5.jpg',
    type: 'Venta',
  },
  {
    id: 6,
    title: 'Casa en Coyoacán',
    description: 'Encantadora casa con estilo tradicional mexicano, amplios jardines y espacios llenos de luz natural en una zona tranquila y cultural.',
    price: '$35,000/mes',
    location: 'Coyoacán, CDMX',
    features: ['4 Habitaciones', '3 Baños', 'Jardín', 'Estudio', '350 m²'],
    image: '/property-6.jpg',
    type: 'Renta',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  // Filter types
  const filterTypes = ['Todos', 'Venta', 'Renta'];

  // Handle filter change
  useEffect(() => {
    if (activeFilter === 'Todos') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(properties.filter(property => property.type === activeFilter));
    }
  }, [activeFilter]);

  // Crear referencia para el paginador personalizado
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" className="section-padding bg-gray-50" ref={sectionRef}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Nuestras Propiedades</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Descubre nuestra selección de propiedades exclusivas disponibles en las mejores ubicaciones de la Ciudad de México y sus alrededores.
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-4 mb-10">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-6 py-2 rounded-full transition ${
                  activeFilter === type
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenedor con padding extra para flechas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 mx-auto relative max-w-[90%] xl:max-w-[80%]" // Margen extra para las flechas
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.portfolio-pagination',
              type: 'bullets',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="portfolio-swiper h-[580px]"
          >
            {filteredProperties.map((property) => (
              <SwiperSlide key={property.id} className="h-full">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full flex flex-col mx-auto">
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gray-200">
                      <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm">
                      {property.type}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{property.description}</p>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-600">{property.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-muted text-gray-700 px-2 py-1 rounded-md text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xl font-bold text-brand-primary">{property.price}</span>
                      <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-brand-primary/90 transition">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Elemento personalizado para la paginación */}
          <div className="portfolio-pagination mt-8 flex justify-center" ref={paginationRef}></div>
        </motion.div>
      </div>
    </section>
  );
}