'use client';

import { useInView, getAnimationClasses } from '@/lib/animations';

interface PlaceholderImageProps {
  type?: 'healthcare' | 'tech' | 'data' | 'team' | 'service' | 'abstract';
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4';
  className?: string;
  showIcon?: boolean;
}

export default function PlaceholderImage({
  type = 'abstract',
  aspectRatio = '16/9',
  className = '',
  showIcon = true,
}: PlaceholderImageProps) {
  const { ref, isInView } = useInView();

  const getGradient = () => {
    switch (type) {
      case 'healthcare':
        return 'from-blue-400 via-cyan-400 to-teal-400';
      case 'tech':
        return 'from-purple-400 via-blue-400 to-cyan-400';
      case 'data':
        return 'from-orange-400 via-pink-400 to-purple-400';
      case 'team':
        return 'from-blue-500 via-blue-400 to-cyan-400';
      case 'service':
        return 'from-blue-400 via-purple-400 to-pink-400';
      default:
        return 'from-blue-500 via-cyan-400 to-blue-300';
    }
  };

  const getIcon = () => {
    if (!showIcon) return null;

    const iconClass = "w-16 h-16 md:w-24 md:h-24 text-white/80";

    switch (type) {
      case 'healthcare':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        );
      case 'tech':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        );
      case 'data':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        );
      case 'team':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        );
      case 'service':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
          </svg>
        );
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`placeholder-image relative overflow-hidden rounded-xl ${className} ${getAnimationClasses('scaleIn', isInView)}`}
      style={{ aspectRatio }}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} animate-gradient-shift`}>
        {/* Animated shapes overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-float-gentle"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${type}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
          </svg>
        </div>

        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {getIcon()}
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-slow"></div>
      </div>

      {/* Placeholder text */}
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
        <span className="text-white/90 text-xs font-medium">Image Placeholder</span>
      </div>
    </div>
  );
}
