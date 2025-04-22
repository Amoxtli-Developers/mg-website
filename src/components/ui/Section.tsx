import { forwardRef, ReactNode } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  id,
  containerClassName = '',
  fullWidth = false,
  backgroundColor = 'transparent',
}, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`py-16 md:py-24 ${className}`}
      style={{ backgroundColor }}
    >
      <ResponsiveContainer className={containerClassName} fullWidth={fullWidth}>
        {children}
      </ResponsiveContainer>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;