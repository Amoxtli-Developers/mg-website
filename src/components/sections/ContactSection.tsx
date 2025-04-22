'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { usePrivacyPolicy } from '@/context/PrivacyPolicyContext';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Por favor ingresa un email válido' }),
  phone: z.string().min(8, { message: 'Por favor ingresa un número de teléfono válido' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  
  // Usar el contexto de privacidad
  const { openPrivacyPolicy } = usePrivacyPolicy();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: result.message || 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
        });
        reset();
      } else {
        setFormStatus({
          type: 'error',
          message: result.error || 'Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.',
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Hubo un error al procesar la solicitud. Por favor, inténtalo más tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contáctanos</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Danos la oportunidad de conocerte, estamos seguros de poder ayudarte. 
            Completa el formulario y nuestro equipo de expertos se pondrá en contacto contigo a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h3>

              {formStatus.type && (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tu número de teléfono"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="¿En qué podemos ayudarte?"
                      {...register('message')}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <input
                      id="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                      required
                    />
                    <label htmlFor="privacy-policy" className="ml-2 text-sm text-gray-700">
                      He leído y acepto el{' '}
                      <button
                        type="button"
                        onClick={openPrivacyPolicy}
                        className="text-brand-primary hover:underline"
                      >
                        Aviso de Privacidad
                      </button>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full"
          >
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Dirección</h4>
                    <p className="text-gray-600 mt-1">
                      Av. Coyoacán 1435, Centro Urbano Presidente Alemán, Edificio H, Despacho 60-B,<br />
                      Col. Del Valle, C.P. 03100, Ciudad de México<br />
                      (Esquina de Parroquia y Coyoacán, Planta Baja del Centro Urbano Presidente Alemán)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Teléfonos</h4>
                    <p className="text-gray-600 mt-1">55-34-24-93</p>
                    <p className="text-gray-600">55-34-59-44</p>
                    <p className="text-gray-600">55-24-87-80</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:contacto@mgsi.mx" className="hover:text-brand-primary transition-colors">
                        contacto@mgsi.mx
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Horario de Atención</h4>
                    <p className="text-gray-600 mt-1">Lunes a Viernes: 9:30 AM - 2:30 PM y 3:30 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Síguenos en Redes Sociales</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div 
          ref={mapRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-lg relative"
        >
          <div className="relative w-full pb-[56.25%]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9409607168614!2d-99.1712587!3d19.371708899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff976fdace35%3A0x552ce68b592e479c!2sMG%20Servicio%20Inmobiliario!5e0!3m2!1ses!2smx!4v1745350203844!5m2!1ses!2smx" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de MG Servicio Inmobiliario"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}