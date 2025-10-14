import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function Section({
  children,
  title,
  subtitle,
  description,
  id,
  className = '',
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            {subtitle && (
              <p className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-3 ${dark ? 'text-primary-light' : 'text-primary'}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
