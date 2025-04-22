'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavLink from '../ui/NavLink';
import { ArrowDown, Building, Home, MapPin } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Efecto de parallax
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Estado para stats con contador ascendente
  const [stats, setStats] = useState({
    propiedades: 0,
    clientes: 0,
    años: 0
  });

  // Efecto para contador ascendente
  useEffect(() => {
    const targetStats = {
      propiedades: 250,
      clientes: 1500,
      años: 40 // Actualizado a 40 años de experiencia según el PDF
    };
    
    const intervals = {
      propiedades: null as NodeJS.Timeout | null,
      clientes: null as NodeJS.Timeout | null,
      años: null as NodeJS.Timeout | null
    };
    
    // Función para iniciar los contadores
    const startCounters = () => {
      intervals.propiedades = setInterval(() => {
        setStats(prev => {
          const newValue = prev.propiedades + Math.ceil(targetStats.propiedades / 50);
          if (newValue >= targetStats.propiedades) {
            if (intervals.propiedades) clearInterval(intervals.propiedades);
            return {...prev, propiedades: targetStats.propiedades};
          }
          return {...prev, propiedades: newValue};
        });
      }, 50);
      
      intervals.clientes = setInterval(() => {
        setStats(prev => {
          const newValue = prev.clientes + Math.ceil(targetStats.clientes / 50);
          if (newValue >= targetStats.clientes) {
            if (intervals.clientes) clearInterval(intervals.clientes);
            return {...prev, clientes: targetStats.clientes};
          }
          return {...prev, clientes: newValue};
        });
      }, 50);
      
      intervals.años = setInterval(() => {
        setStats(prev => {
          const newValue = prev.años + 1;
          if (newValue >= targetStats.años) {
            if (intervals.años) clearInterval(intervals.años);
            return {...prev, años: targetStats.años};
          }
          return {...prev, años: newValue};
        });
      }, 100);
    };
    
    // Iniciar los contadores después de un breve retraso
    const timer = setTimeout(startCounters, 800);
    
    return () => {
      clearTimeout(timer);
      Object.values(intervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background gradient con efecto parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#3c0013] to-brand-primary opacity-90" />
        
        {/* Patrón de puntos sutiles para añadir textura */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" />
      </motion.div>

      {/* Líneas decorativas */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-0 right-0 top-1/3 h-px bg-white"></div>
        <div className="absolute left-0 right-0 top-2/3 h-px bg-white"></div>
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10 text-white px-4 sm:px-6 pt-24 pb-12 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-4 inline-block"
            >
              <span className="px-4 py-1 border-2 border-brand-primary text-brand-primary text-sm font-bold tracking-widest uppercase rounded-full">
                Expertos Inmobiliarios
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Encuentra tu </span>
              <span className="text-brand-primary">propiedad ideal</span>
              <span className="text-white"> en México</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
            >
              Asesoría personalizada para comprar, vender o rentar 
              propiedades con soluciones adaptadas a tus necesidades.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <NavLink
                href="#portfolio"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-center text-lg shadow-lg hover:shadow-xl hover:transform hover:scale-105"
              >
                Ver Propiedades
              </NavLink>
              <NavLink
                href="#contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-lg transition duration-300 text-center text-lg"
              >
                Contáctanos
              </NavLink>
            </motion.div>
            
            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <Building className="h-10 w-10 text-brand-primary mx-auto mb-3" />
                <div className="text-4xl font-bold mb-1 text-white">{stats.propiedades}+</div>
                <div className="text-gray-200">Propiedades Disponibles</div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <Home className="h-10 w-10 text-brand-primary mx-auto mb-3" />
                <div className="text-4xl font-bold mb-1 text-white">{stats.clientes}+</div>
                <div className="text-gray-200">Clientes Satisfechos</div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <MapPin className="h-10 w-10 text-brand-primary mx-auto mb-3" />
                <div className="text-4xl font-bold mb-1 text-white">{stats.años}+</div>
                <div className="text-gray-200">Años de Experiencia</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator mejorado - Ahora perfectamente centrado */}
      <div className="absolute bottom-10 inset-x-0 mx-auto w-full flex justify-center items-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-white text-sm font-medium mb-2">Descubre más</p>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <ArrowDown className="h-5 w-5 text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}