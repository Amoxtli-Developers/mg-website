'use client';
import { FC, ReactNode, MouseEvent } from 'react';
import Link from 'next/link';
import useScrollTo from '@/hooks/useScrollTo';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  offset?: number;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  offset = 80, // Valor por defecto para compensar el header fijo
}) => {
  const scrollTo = useScrollTo();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Solo manejamos la navegación interna (enlaces que comienzan con #)
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href, { offset });
      
      // Si hay una función onClick adicional, la ejecutamos
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;