'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, CheckCircle, Users, Award } from 'lucide-react';
import Section from '../ui/Section';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Ventajas competitivas del PDF
  const advantages = [
    {
      icon: <Award className="h-6 w-6 text-brand-primary" />,
      title: "Experiencia",
      description: "Contamos con más de 40 años de experiencia en el sector inmobiliario."
    },
    {
      icon: <Building className="h-6 w-6 text-brand-primary" />,
      title: "Capacitación Continua",
      description: "Nuestro equipo se mantiene actualizado con las últimas tendencias del mercado."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Contacto directo con Inversionistas",
      description: "Tenemos relación directa con inversionistas interesados en propiedades."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-primary" />,
      title: "Profesionales Calificados",
      description: "Trabajamos con contadores certificados, abogados especializados y notarios."
    }
  ];

  return (
    <Section id="about" backgroundColor="#ffffff" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Quiénes Somos</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 mb-12"
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Somos un grupo de profesionistas con más de 40 años de experiencia en el área 
              Inmobiliaria, administrativa y legal, con el propósito de ayudar a nuestros clientes 
              en operaciones de compra, venta, renta y administración inmobiliaria, así como en 
              la solución de diversos asuntos legales relacionados con el ámbito inmobiliario.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Sabemos que su propiedad es uno de los patrimonios más importantes que posee, 
              por lo que estamos seguros de poder ayudarle y darle una gama de opciones para 
              sacar el mayor beneficio a su propiedad.
            </p>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-center mb-10 text-gray-900"
          >
            Nuestra Ventaja Competitiva
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow"
              >
                <div className="mr-4 mt-1">
                  {advantage.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}