import Image from 'next/image';
import { FC } from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  type?: 'property' | 'testimonial';
}

const PlaceholderImage: FC<PlaceholderImageProps> = ({
  width,
  height,
  text,
  className = '',
  backgroundColor = '#F1F1F1',
  textColor = '#333333',
  type = 'property',
}) => {
  // Generar una URL de placeholder con texto personalizado
  const displayText = text || (type === 'property' ? 'Propiedad' : 'Testimonio');
  
  // Al ser un componente de placeholder, utilizamos una imagen externa como ejemplo
  // Para producción, deberías reemplazar esto con imágenes reales
  const placeholderUrl = `https://via.placeholder.com/${width}x${height}/${backgroundColor.replace('#', '')}/${textColor.replace('#', '')}?text=${displayText}`;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center bg-gray-200"
        style={{ backgroundColor }}
      >
        <span 
          className="text-lg font-medium"
          style={{ color: textColor }}
        >
          {displayText}
        </span>
      </div>
      
      {/* Alternativa: si prefieres usar Image de Next.js */ }
      {/* 
      <Image
        src={placeholderUrl}
        alt={displayText}
        width={width}
        height={height}
        className="object-cover"
      />
      */}
    </div>
  );
};

export default PlaceholderImage;