'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Logo from './Logo';
import NavLink from './NavLink';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#services' },
  { name: 'Historia', href: '#history' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Actualizar estado de scroll
  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(scrollY.get() > 50);
    };

    const unsubscribe = scrollY.onChange(updateScrolled);
    updateScrolled(); // Llamar inicialmente

    return () => unsubscribe();
  }, [scrollY]);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Cerrar el menú móvil cuando se hace scroll
  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => setIsOpen(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo variant={scrolled ? 'dark' : 'light'} />

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:flex items-center">
          <NavigationMenu.List className="flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  asChild
                  className={`text-sm font-medium transition hover:text-brand-primary ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  <NavLink href={item.href}>
                    {item.name}
                  </NavLink>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button
            className={`block ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden max-h-[75vh] overflow-y-auto"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}