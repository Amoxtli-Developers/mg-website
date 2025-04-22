'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePrivacyPolicy } from '@/context/PrivacyPolicyContext';

export default function PrivacyPolicyDialog() {
  const { isPrivacyPolicyOpen, closePrivacyPolicy } = usePrivacyPolicy();
  
  return (
    <AnimatePresence>
      {isPrivacyPolicyOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={closePrivacyPolicy}
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-10 bg-white z-50 rounded-lg overflow-hidden flex flex-col max-h-[90vh] max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="bg-brand-primary p-4 text-white flex justify-between items-center shadow-md">
              <h2 className="text-xl font-bold">Aviso de Privacidad</h2>
              <button 
                onClick={closePrivacyPolicy}
                className="p-1 rounded-full hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Content - Scrollable */}
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="space-y-6 max-w-3xl mx-auto">
                <div>
                  <p className="mb-4">
                    De conformidad con lo previsto en la Ley Federal de Protección de Datos Personales en 
                    Posesión de los Particulares, nos permitimos solicitarle leer cuidadosamente los 
                    Términos y Condiciones contenidos en el presente aviso de privacidad, para todos los 
                    productos, servicios, programas, y/o sitios web, etc. que tenga MG Servicio Inmobiliario, 
                    ("La Inmobiliaria") y todas las empresas relacionadas con la Sociedad mencionada quien 
                    podrá publicar nuevos Avisos de Privacidad específicos o actualizaciones, para los
                    cuales se podrá requerir o no, el consentimiento expreso del titular de los Datos 
                    Personales, sin embargo a través de esta página de internet se hacen del 
                    conocimiento público y de nuestros clientes las políticas de privacidad aplicables a los 
                    Datos Personales que nos hayan sido otorgados.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">DOMICILIO DEL RESPONSABLE</h3>
                  <p>
                    Av. Coyoacán 1435, Centro Urbano Presidente Alemán, Edificio H, Despacho 60-B, Col. 
                    Del Valle, C.P. 03100 en la Ciudad México, exactamente en la Esquina de Parroquia y 
                    Coyoacán, Planta Baja del Centro Urbano Presidente Alemán.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">DE LOS DATOS PERSONALES</h3>
                  <p>
                    Para efectos de la divulgación y tratamiento de los Datos Personales que Usted haya 
                    divulgado o pudiera llegar a divulgar, a través de diversos medios y formas incluyendo 
                    nuestros sitios de Internet, herramientas tecnológicas, o directamente a nuestros 
                    representantes u oficina, con motivo de la relación comercial o de servicio, así como 
                    cualquier otra o actividad relacionada, se considerará que el responsable es MG Servicio 
                    Inmobiliario, quien es una sociedad constituida de conformidad con las leyes de la
                    República Mexicana, con domicilio en Av. Coyoacán 1435, Centro Urbano Presidente 
                    Alemán, Edificio H, Despacho 60-B, Col. Del Valle, C.P. 03100 en la Ciudad México, 
                    exactamente en la Esquina de Parroquia y Coyoacán, Planta Baja del Centro Urbano 
                    Presidente Alemán.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">¿Cómo puede limitar el uso o divulgación de su información personal?</h3>
                  <p>
                    Usted puede limitar el uso y divulgación de su información personal a través de los 
                    siguientes medios que hemos instrumentado:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Presentando su solicitud personalmente en nuestro domicilio dirigida a la persona 
                    encargada de la privacidad en esta oficina.</li>
                    <li>Enviando correo electrónico a las siguientes direcciones electrónica: 
                    <a href="mailto:contacto@mgsi.mx" className="text-brand-primary hover:underline ml-1">contacto@mgsi.mx</a></li>
                    <li>Llamando a los números 55-24-87-80 y 55-34-59-44 de lunes a viernes, de 9:30 a 14:30 y 
                    de 15:30 a 18:00 horas.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">¿Cómo acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales?</h3>
                  <p>
                    El ejercicio de los derechos de acceso, rectificación, cancelación y oposición o la revocación 
                    del consentimiento, podrán efectuarse presentado solicitud por escrito en nuestro domicilio 
                    dirigida a la persona o departamento de privacidad, o bien, vía correo electrónico 
                    <a href="mailto:contacto@mgsi.mx" className="text-brand-primary hover:underline mx-1">contacto@mgsi.mx</a>
                    o llamando a los números 55-24-87-80 y 55-34-59-44 de lunes a viernes, 
                    de 9:30 a 14:30 y de 15:30 a 18:00 horas.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-200 p-4 flex justify-end">
              <button 
                onClick={closePrivacyPolicy}
                className="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-primary/90 transition"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}