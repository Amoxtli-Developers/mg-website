'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Linkedin, X, Globe } from 'lucide-react';

const socialLinks = [
  {
    name: 'Google',
    url: 'https://www.google.com/maps?rlz=1C5CHFA_enMX1166MX1166&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KTXO2m-X_9GFMZxHLlmL5ixV&daddr=Av.+Coyoacan+1435,+Centro+Urbano+Presidente,+Miguel+Aleman+Edificio+H,+Avenida,+del+Valle,+03100+Ciudad+de+M%C3%A9xico,+CDMX',
    icon: <Search size={18} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/mg-servicio-inmobiliario/posts/?feedView=all',
    icon: <Linkedin size={18} />,
  },
];

export default function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40">
      <motion.button
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-brand-primary rounded-full shadow-lg text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Redes sociales"
      >
        {isOpen ? (
          <X size={20} className="sm:h-6 sm:w-6" />
        ) : (
          <Globe size={20} className="sm:h-6 sm:w-6" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-0 bottom-16 sm:bottom-20 flex flex-col gap-2 sm:gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-200 rounded-full shadow-lg text-gray-600 hover:text-brand-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}