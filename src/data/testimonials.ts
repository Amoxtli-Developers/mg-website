export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number; // De 1 a 5
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carolina Mendoza',
    position: 'Compradora',
    content: 'El servicio de MG Servicio Inmobiliario fue excepcional. Me ayudaron a encontrar la casa perfecta para mi familia y estuvieron conmigo en cada paso del proceso. Su atención personalizada y profesionalismo destacan en el mercado inmobiliario.',
    image: '/images/testimonials/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Roberto Sánchez',
    position: 'Vendedor',
    content: 'Gracias a MG Servicio Inmobiliario pude vender mi propiedad en tiempo récord y a un excelente precio. Su estrategia de marketing y la exposición que le dieron a mi inmueble superó todas mis expectativas. ¡Altamente recomendados!',
    image: '/images/testimonials/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana García',
    position: 'Inversionista',
    content: 'Como inversionista inmobiliario, valoro la capacidad de MG Servicio Inmobiliario para identificar oportunidades de alto rendimiento. Su conocimiento del mercado y su asesoramiento han sido clave para diversificar mi portafolio de propiedades.',
    image: '/images/testimonials/testimonial-3.jpg',
    rating: 4
  },
  {
    id: 4,
    name: 'Juan Carlos Martínez',
    position: 'Comprador',
    content: 'El equipo de MG Servicio Inmobiliario entendió perfectamente lo que estaba buscando. Me mostraron opciones que realmente se ajustaban a mis necesidades y presupuesto. La negociación fue transparente y todo el proceso fue muy fluido.',
    image: '/images/testimonials/testimonial-4.jpg',
    rating: 5
  },
  {
    id: 5,
    name: 'Mariana López',
    position: 'Vendedora',
    content: 'Mi experiencia con MG Servicio Inmobiliario fue muy positiva. Su equipo se encargó de todo el proceso de venta, desde la valoración inicial hasta el cierre del trato. Su profesionalismo y conocimiento del mercado me dieron confianza en todo momento.',
    image: '/images/testimonials/testimonial-5.jpg',
    rating: 5
  }
];