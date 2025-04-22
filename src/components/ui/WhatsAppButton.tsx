'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40">
      <div className="relative">
        <motion.a
          href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20BD5C] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chatea por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" fill="white" stroke="white" />
        </motion.a>
        
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 bg-background text-foreground rounded-lg shadow-lg px-4 py-2 whitespace-nowrap border border-border hidden sm:block"
            >
              ¡Chatea con nosotros!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}