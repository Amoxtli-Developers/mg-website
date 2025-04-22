import { FC, ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
}

const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  id,
  as: Component = 'div',
  fullWidth = false,
}) => {
  return (
    <Component
      id={id}
      className={`w-full ${fullWidth ? '' : 'container mx-auto px-4 md:px-6 lg:px-8'} ${className}`}
    >
      {children}
    </Component>
  );
};

export default ResponsiveContainer;