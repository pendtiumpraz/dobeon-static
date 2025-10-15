'use client';

import { ReactNode } from 'react';

interface HUDCardProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'minimal';
  className?: string;
  glowOnHover?: boolean;
}

export default function HUDCard({
  children,
  variant = 'primary',
  className = '',
  glowOnHover = true,
}: HUDCardProps) {
  const variants = {
    primary: `
      relative group
      bg-black/80 backdrop-blur-md
      border-2 border-blue-500
      shadow-[0_0_40px_rgba(59,130,246,0.8),inset_0_0_30px_rgba(59,130,246,0.2)]
      hover:shadow-[0_0_80px_rgba(59,130,246,1),inset_0_0_50px_rgba(59,130,246,0.4)]
      transition-all duration-500
      ${glowOnHover ? 'hover:border-cyan-400 hover:scale-105' : ''}
    `,
    secondary: `
      relative group
      bg-black/70 backdrop-blur-md
      border-2 border-cyan-500/80
      shadow-[0_0_35px_rgba(6,182,212,0.7),inset_0_0_25px_rgba(6,182,212,0.2)]
      hover:shadow-[0_0_70px_rgba(6,182,212,1),inset_0_0_40px_rgba(6,182,212,0.4)]
      transition-all duration-500
      ${glowOnHover ? 'hover:border-blue-400 hover:scale-105' : ''}
    `,
    minimal: `
      relative group
      bg-black/60 backdrop-blur-sm
      border-2 border-blue-400/50
      shadow-[0_0_25px_rgba(59,130,246,0.5)]
      hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]
      hover:border-cyan-400/80
      transition-all duration-300
    `,
  };

  return (
    <div className={`${variants[variant]} rounded-lg overflow-hidden ${className}`}>
      {/* Corner decorations with glow */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>

      {/* Animated scan lines - multiple */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan-line" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="25,0 50,14.43 50,28.87 25,43.3 0,28.87 0,14.43" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover glow effect - stronger */}
      {glowOnHover && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      )}

      {/* Tech grid lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  );
}
