'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/images/logo-color.svg'; // Ensure the file exists in the public/assets folder

export default function HistorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const milestones = [
    {
      year: '2002',
      title: 'Fundación de MG Servicio Inmobiliario',
      description: 'Iniciamos operaciones con un pequeño equipo de profesionales dedicados a la asesoría inmobiliaria personalizada en la Ciudad de México.',
    },
    {
      year: '2007',
      title: 'Expansión de Servicios',
      description: 'Ampliamos nuestra oferta para incluir avalúos profesionales, asesoría legal y administración de propiedades en renta.',
    },
    {
      year: '2012',
      title: 'Desarrollo de Plataforma Digital',
      description: 'Implementamos nuestra primera plataforma digital para facilitar la búsqueda de propiedades y mejorar la experiencia de nuestros clientes.',
    },
    {
      year: '2018',
      title: 'Expansión Regional',
      description: 'Abrimos nuevas oficinas en ciudades estratégicas de México para atender mejor a nuestros clientes en diferentes regiones del país.',
    },
    {
      year: '2023',
      title: 'Innovación Tecnológica',
      description: 'Incorporamos herramientas avanzadas como tours virtuales y análisis de mercado con inteligencia artificial para ofrecer un servicio de máxima calidad.',
    },
  ];

  return (
    <section id="history" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Desde 2002, MG Servicio Inmobiliario ha trabajado con dedicación para convertirse en una referencia en el sector inmobiliario mexicano, guiados por valores de confianza, profesionalismo y mejora continua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[400px]">
              <Image
                src={logo } // Use a fallback image if the logo is unavailable
                alt="Historia de MG Servicio Inmobiliario"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white text-lg font-bold">
                      {milestone.year.substring(2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{milestone.year} - {milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
