'use client';
import { FC } from 'react';

interface TestimonialImagePlaceholderProps {
  name?: string;
  position?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const TestimonialImagePlaceholder: FC<TestimonialImagePlaceholderProps> = ({
  name = 'Cliente',
  position = 'Posición',
  width = 120,
  height = 120,
  className = '',
}) => {
  // Generar iniciales para el avatar
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div 
      className={`flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-brand-primary to-purple-600 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-white">
        <p className="text-2xl font-bold">{initials}</p>
      </div>
    </div>
  );
};

export default TestimonialImagePlaceholder;