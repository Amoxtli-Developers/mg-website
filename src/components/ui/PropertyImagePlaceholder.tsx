'use client';
import { FC } from 'react';

interface PropertyImagePlaceholderProps {
  propertyName?: string;
  width?: string;
  height?: string;
  index?: number;
  type?: 'interior' | 'exterior' | 'general';
  className?: string;
}

const PropertyImagePlaceholder: FC<PropertyImagePlaceholderProps> = ({
  propertyName = 'Propiedad',
  width = '100%',
  height = '250px',
  index = 1,
  type = 'general',
  className = '',
}) => {
  // Colores diferentes para diferentes tipos
  const colors = {
    interior: 'from-indigo-800 to-indigo-500',
    exterior: 'from-green-800 to-green-500',
    general: 'from-gray-800 to-brand-primary',
  };

  return (
    <div 
      className={`flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br ${colors[type]} ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-white p-4">
        <p className="text-lg font-semibold">{propertyName}</p>
        <p className="text-sm opacity-70">
          {type === 'interior' ? 'Vista Interior' : type === 'exterior' ? 'Vista Exterior' : 'Vista General'}
        </p>
        <p className="text-xs opacity-50 mt-1">Imagen {index}</p>
      </div>
    </div>
  );
};

export default PropertyImagePlaceholder;