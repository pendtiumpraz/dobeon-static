'use client';

import { useInView, getAnimationClasses } from '@/lib/animations';

interface LogoLineProps {
  variant?: 'wave' | 'curve' | 'flow' | 'abstract';
  flip?: boolean;
  className?: string;
}

export default function LogoLine({
  variant = 'wave',
  flip = false,
  className = ''
}: LogoLineProps) {
  const { ref, isInView } = useInView();

  const renderDivider = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className={`w-full h-20 md:h-28 ${flip ? 'transform rotate-180' : ''}`}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C240,20 360,100 720,60 C1080,20 1200,100 1440,60 L1440,120 L0,120 Z"
              fill="url(#waveGradient)"
            />
            <path
              d="M0,60 C240,20 360,100 720,60 C1080,20 1200,100 1440,60"
              fill="none"
              stroke="#0066ff"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        );

      case 'curve':
        return (
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className={`w-full h-16 md:h-24 ${flip ? 'transform rotate-180' : ''}`}
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8f9fa" />
                <stop offset="50%" stopColor="#e9ecef" />
                <stop offset="100%" stopColor="#f8f9fa" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
              fill="url(#curveGradient)"
            />
            <path
              d="M0,40 Q360,0 720,40 T1440,40"
              fill="none"
              stroke="#0066ff"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        );

      case 'flow':
        return (
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className={`w-full h-20 md:h-28 ${flip ? 'transform rotate-180' : ''}`}
          >
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C300,30 500,90 720,50 C940,10 1140,70 1440,50 L1440,100 L0,100 Z"
              fill="url(#flowGradient1)"
            />
            <path
              d="M0,50 C300,20 500,70 720,40 C940,10 1140,50 1440,40 L1440,100 L0,100 Z"
              fill="url(#flowGradient2)"
            />
          </svg>
        );

      case 'abstract':
        return (
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className={`w-full h-24 md:h-32 ${flip ? 'transform rotate-180' : ''}`}
          >
            <defs>
              <linearGradient id="abstractGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.1" />
              </linearGradient>
              <filter id="abstractGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Multiple organic curves */}
            <path
              d="M0,60 C180,20 360,90 540,50 C720,10 900,80 1080,45 C1260,10 1350,70 1440,50 L1440,120 L0,120 Z"
              fill="url(#abstractGradient)"
            />
            <path
              d="M0,50 C180,25 360,75 540,45 C720,15 900,65 1080,40 C1260,15 1350,60 1440,45"
              fill="none"
              stroke="#0066ff"
              strokeWidth="2"
              opacity="0.4"
              filter="url(#abstractGlow)"
            />
            {/* Decorative accent dots */}
            <circle cx="360" cy="75" r="3" fill="#0066ff" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="720" cy="10" r="3" fill="#7C3AED" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="1080" cy="65" r="3" fill="#00D9FF" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`logoline logoline--divider relative w-full overflow-hidden ${className} ${getAnimationClasses('fadeIn', isInView)}`}
    >
      {renderDivider()}
    </div>
  );
}
