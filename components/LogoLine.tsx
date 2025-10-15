'use client';

import { useInView, getAnimationClasses } from '@/lib/animations';

interface LogoLineProps {
  variant?: 'solid' | 'gradient' | 'dotted' | 'double' | 'curve';
  className?: string;
}

export default function LogoLine({
  variant = 'gradient',
  className = ''
}: LogoLineProps) {
  const { ref, isInView } = useInView();

  const renderDivider = () => {
    switch (variant) {
      case 'solid':
        return (
          <div className="w-full max-w-5xl mx-auto">
            <div className="h-1 bg-blue-500 rounded-full"></div>
          </div>
        );

      case 'gradient':
        return (
          <div className="w-full max-w-5xl mx-auto">
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        );

      case 'dotted':
        return (
          <div className="w-full max-w-5xl mx-auto flex items-center gap-2">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-blue-500/50 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-blue-500/50 rounded-full"></div>
          </div>
        );

      case 'double':
        return (
          <div className="w-full max-w-5xl mx-auto space-y-2">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rounded-full"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rounded-full"></div>
          </div>
        );

      case 'curve':
        return (
          <div className="w-full max-w-6xl mx-auto">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-16">
              <defs>
                <linearGradient id="curveLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0" />
                  <stop offset="25%" stopColor="#0066ff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="75%" stopColor="#0066ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,30 Q300,10 600,30 T1200,30"
                fill="none"
                stroke="url(#curveLineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`logoline py-12 md:py-16 ${className} ${getAnimationClasses('fadeIn', isInView)}`}
    >
      {renderDivider()}
    </div>
  );
}
