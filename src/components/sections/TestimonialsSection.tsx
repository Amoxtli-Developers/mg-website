'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Define testimonial type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
};

// Sample testimonials data inspired by MG Servicio Inmobiliario
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Laura Jiménez',
    role: 'Compradora',
    content: 'Recibí un servicio absolutamente personalizado. El equipo de MG me acompañó durante todo el proceso de compra, brindándome asesoría profesional y ayudándome a encontrar exactamente lo que buscaba. Su atención al detalle y conocimiento del mercado fueron invaluables.',
    avatar: '/avatar-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ricardo Fuentes',
    role: 'Inversionista',
    content: 'Como inversionista, valoro enormemente la transparencia y el profesionalismo. MG Servicio Inmobiliario ha superado mis expectativas en cada proyecto. Su análisis detallado del mercado y su enfoque estratégico me han permitido maximizar el retorno de mis inversiones inmobiliarias.',
    avatar: '/avatar-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Alejandra Gómez',
    role: 'Vendedora',
    content: 'Vendí mi propiedad en tiempo récord y a un excelente precio gracias a la estrategia de marketing implementada por MG. Su conocimiento del mercado y su red de contactos hicieron toda la diferencia. El proceso fue sencillo y sin complicaciones.',
    avatar: '/avatar-3.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Carlos Méndez',
    role: 'Comprador',
    content: 'Toda mi experiencia con MG fue excelente. Me guiaron con paciencia hasta encontrar la casa perfecta para mi familia. Su asesoría en el proceso de financiamiento fue clave para concretar la compra en las mejores condiciones posibles. Recomiendo ampliamente sus servicios.',
    avatar: '/avatar-4.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Gabriela Torres',
    role: 'Inversionista',
    content: 'He trabajado con MG Servicio Inmobiliario en múltiples proyectos durante los últimos años. Su profesionalismo, conocimiento del mercado y capacidad para identificar oportunidades de inversión han sido fundamentales para el crecimiento de mi portafolio inmobiliario.',
    avatar: '/avatar-5.jpg',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            En MG Servicio Inmobiliario nos enorgullece la satisfacción de nuestros clientes. 
            Sus testimonios reflejan nuestro compromiso con la excelencia y el servicio personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper h-[350px]" // Altura fija para el Swiper
          >
            {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-full" style={{paddingBottom: '10px'}}>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  <div className="mb-auto overflow-y-auto">
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center pt-4 mt-auto border-t border-gray-200">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}