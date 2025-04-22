'use client';
import { FC } from 'react';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  width = '100%',
  height = '100%',
  className = '',
  text = '',
  bgColor = 'from-gray-900 via-gray-800 to-brand-primary',
  textColor = 'text-white'
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-r ${bgColor} ${className} overflow-hidden`}
      style={{ width, height }}
    >
      {text && (
        <div className={`text-center ${textColor} px-4`}>
          <p className="text-base sm:text-xl font-semibold break-words">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;