'use client';

import { ReactNode } from 'react';
import { useInView, getAnimationClasses } from '@/lib/animations';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  gradient?: boolean;
  hover?: boolean;
  className?: string;
  animationVariant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
}

export default function Card({
  title,
  description,
  icon,
  gradient = false,
  hover = true,
  className = '',
  animationVariant = 'slideUp',
  delay = 0,
}: CardProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        p-6 md:p-8 rounded-xl transition-all duration-500 group
        ${gradient ? 'gradient-primary text-white' : 'bg-white border border-gray-200'}
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : ''}
        ${getAnimationClasses(animationVariant, isInView)}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon && (
        <div className={`mb-4 transform transition-all duration-300 ${hover ? 'group-hover:scale-110 group-hover:rotate-3' : ''} ${gradient ? 'text-white' : 'text-primary'}`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${description ? 'mb-3' : ''} ${gradient ? 'text-white' : 'text-gray-900 group-hover:text-primary'}`}>
        {title}
      </h3>
      {description && (
        <p className={`leading-relaxed ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
      )}

      {/* Decorative animated border on hover */}
      {hover && !gradient && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary-light/20 blur-sm"></div>
        </div>
      )}
    </div>
  );
}
