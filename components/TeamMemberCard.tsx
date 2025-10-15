'use client';

import { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  featured?: boolean;
  gradient?: 'blue';
  delay?: number;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  expertise,
  image,
  featured = false,
  gradient = 'blue',
  delay = 0,
}: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`
        relative group rounded-lg overflow-hidden
        bg-black/85 backdrop-blur-md
        border-2 border-blue-500
        shadow-[0_0_50px_rgba(59,130,246,0.8),inset_0_0_30px_rgba(59,130,246,0.2)]
        hover:shadow-[0_0_100px_rgba(59,130,246,1),inset_0_0_60px_rgba(6,182,212,0.4)]
        hover:border-cyan-400
        transition-all duration-700
        hover:-translate-y-2 hover:scale-105
        ${featured ? 'bento-featured' : ''}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* HUD Corner decorations with glow */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.9)]"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.9)]"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.9)]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.9)]"></div>

      {/* Animated scan lines - multiple */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan-line" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`tech-grid-${name}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#tech-grid-${name})`} />
        </svg>
      </div>
      {/* Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 p-6 md:p-8">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-2xl animate-float-gentle"></div>
        </div>

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id={`dots-${name}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#dots-${name})`} />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Profile placeholder/avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
              ) : (
                <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              )}
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
            {name}
          </h3>

          {/* Featured Badge */}
          {featured && (
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Featured Expert
              </span>
            </div>
          )}

          {/* Role */}
          <p className="text-center text-white/95 text-sm md:text-base font-medium px-4">
            {role}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-black/90 relative">
        {/* Bio Section - Collapsed by default */}
        <div className={`mb-3 transition-all duration-500 ${isExpanded ? 'mb-4' : ''}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">About</h4>
          </div>
          <div
            className={`
              text-gray-300 leading-relaxed text-xs overflow-hidden transition-all duration-500 relative
              ${isExpanded ? 'max-h-96' : 'max-h-12'}
            `}
          >
            {bio}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
            )}
          </div>
        </div>

        {/* Divider */}
        {isExpanded && <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-3 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>}

        {/* Expertise Section */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Expertise</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {expertise.slice(0, isExpanded ? expertise.length : 2).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 text-cyan-300 text-xs rounded-lg border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all duration-300 font-medium backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
            {!isExpanded && expertise.length > 2 && (
              <span className="px-2 py-1 text-gray-400 text-xs font-medium">
                +{expertise.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="flex justify-center pt-1">
          <button
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300 hover:-translate-y-0.5 border border-cyan-400/50"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span>{isExpanded ? 'Less' : 'More'}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl pointer-events-none"></div>
      </div>

      {/* Hover glow effect - STRONGER */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
