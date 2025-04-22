import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo: FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  // Utilizamos rutas absolutas para las imágenes
  const logoSrc = variant === 'light' 
    ? '/images/logo-white.svg' 
    : '/images/logo-color.svg';

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image 
        src={logoSrc} 
        alt="MG Servicio Inmobiliario" 
        width={90} 
        height={40}
        priority
      />
    </Link>
  );
};

export default Logo;