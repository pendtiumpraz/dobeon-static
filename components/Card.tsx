'use client';

import { ReactNode } from 'react';
import { useInView, getAnimationClasses } from '@/lib/animations';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  gradient?: boolean | 'blue' | 'purple' | 'orange' | 'pink' | 'cyan' | 'green';
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

  const gradientClasses = {
    blue: 'gradient-blue text-white',
    purple: 'gradient-purple text-white',
    orange: 'gradient-orange text-white',
    pink: 'gradient-pink text-white',
    cyan: 'gradient-cyan text-white',
    green: 'gradient-green text-white',
  };

  const getGradientClass = () => {
    if (typeof gradient === 'string') {
      return gradientClasses[gradient as keyof typeof gradientClasses];
    }
    if (gradient === true) {
      return 'gradient-primary text-white';
    }
    return 'bg-white border border-gray-200';
  };

  const isGradient = gradient !== false;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        relative p-6 md:p-8 rounded-xl transition-all duration-500 group
        ${getGradientClass()}
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : ''}
        ${getAnimationClasses(animationVariant, isInView)}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon && (
        <div className={`mb-4 transform transition-all duration-300 ${hover ? 'group-hover:scale-110 group-hover:rotate-3' : ''} ${isGradient ? 'text-white' : 'text-primary'}`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${description ? 'mb-3' : ''} ${isGradient ? 'text-white' : 'text-gray-900 group-hover:text-primary'}`}>
        {title}
      </h3>
      {description && (
        <p className={`leading-relaxed ${isGradient ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
      )}

      {/* Decorative animated border on hover */}
      {hover && !isGradient && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary-light/20 blur-sm"></div>
        </div>
      )}

      {/* Glow effect for gradient cards */}
      {hover && isGradient && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none blur-xl bg-gradient-to-r from-white/20 to-white/5"></div>
      )}
    </div>
  );
}
