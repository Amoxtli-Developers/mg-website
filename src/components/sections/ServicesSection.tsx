'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import { 
  Home, 
  Building, 
  Calculator, 
  Users, 
  ClipboardCheck, 
  FileText, 
  Scale
} from 'lucide-react';

// Servicios listados en el PDF
const services = [
  {
    icon: <Home className="h-10 w-10" />,
    title: 'Compra-Venta-Renta de Inmuebles',
    description: 'Asesoramiento especializado en operaciones de compra, venta y renta de propiedades para obtener el mejor valor en el mercado.',
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: 'Administración de Inmuebles',
    description: 'Gestión profesional de propiedades individuales y condominios, incluyendo mantenimiento, selección de inquilinos y cobro de rentas.',
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: 'Avalúos',
    description: 'Realizamos avalúos profesionales y estudios de mercado para determinar el valor real de tu propiedad, permitiéndote tomar decisiones informadas.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Contacto con Inversionistas',
    description: 'Contamos con una amplia red de inversionistas interesados en propiedades para renta, ofreciéndote las mejores opciones para tu inmueble.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: 'Gestorías',
    description: 'Ofrecemos servicios de gestoría para remodelaciones, licencias de construcción, trámites ante SEDUVI, INVEA y gestión de créditos INFONAVIT, ISSSTE y bancarios.',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: 'Trámites Notariales',
    description: 'Te apoyamos con testamentos, adjudicaciones y escrituraciones, asegurando que todos tus documentos estén en orden.',
  },
  {
    icon: <Scale className="h-10 w-10" />,
    title: 'Asesoría Legal',
    description: 'Brindamos asesoría legal en cesión de derechos, hipotecas, intestados, desalojos, recuperación de cartera y todo tipo de contratos relacionados con bienes raíces.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="services" backgroundColor="#F9FAFB" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gray-900">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            En MG Servicio Inmobiliario ofrecemos soluciones integrales diseñadas para satisfacer todas tus necesidades inmobiliarias con profesionalismo y eficiencia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-[280px]"
            >
              <div className="text-brand-primary mb-4 flex justify-center lg:justify-start">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">{service.title}</h3>
              <p className="text-gray-600 text-center lg:text-left flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}