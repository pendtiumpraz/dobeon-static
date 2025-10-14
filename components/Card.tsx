import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  gradient?: boolean;
  hover?: boolean;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  gradient = false,
  hover = true,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        p-6 md:p-8 rounded-xl transition-all duration-300
        ${gradient ? 'gradient-primary text-white' : 'bg-white border border-gray-200'}
        ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {icon && (
        <div className={`mb-4 ${gradient ? 'text-white' : 'text-primary'}`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${gradient ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
