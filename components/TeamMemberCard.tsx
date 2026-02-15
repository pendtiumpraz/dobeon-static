'use client';

import { useState } from 'react';
import Image from 'next/image';

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
        relative group rounded-2xl overflow-hidden
        glass-card hover:bg-white/60
        border border-white/50 hover:border-primary/30
        shadow-sm hover:shadow-xl hover:shadow-primary/10
        transition-all duration-700
        hover:-translate-y-2
        ${featured ? 'bento-featured' : ''}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-light p-6 md:p-8">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-light rounded-full blur-[60px] animate-float-gentle"></div>
        </div>

        {/* Decorative dots pattern */}
        <div className="relative z-10">
          {/* Profile photo/avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority={featured}
                />
              ) : (
                <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              )}
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2 drop-shadow-sm">
            {name}
          </h3>

          {/* Featured Badge */}
          {featured && (
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Featured Expert
              </span>
            </div>
          )}

          {/* Role */}
          <p className="text-center text-white/90 text-sm md:text-base font-medium px-4">
            {role}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-white/40 relative">
        {/* Bio Section - Collapsed by default */}
        <div className={`mb-3 transition-all duration-500 ${isExpanded ? 'mb-4' : ''}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">About</h4>
          </div>
          <div
            className={`
              text-gray-700 leading-relaxed text-xs overflow-hidden transition-all duration-500 relative
              ${isExpanded ? 'max-h-96' : 'max-h-12'}
            `}
          >
            {bio}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none"></div>
            )}
          </div>
        </div>

        {/* Divider */}
        {isExpanded && <div className="h-px bg-primary/20 mb-3"></div>}

        {/* Expertise Section */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-secondary rounded-full"></div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Expertise</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {expertise.slice(0, isExpanded ? expertise.length : 2).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-cream text-gray-700 text-xs rounded-lg border border-secondary/30 hover:border-primary/50 hover:shadow-sm transition-all duration-300 font-medium"
              >
                {skill}
              </span>
            ))}
            {!isExpanded && expertise.length > 2 && (
              <span className="px-2 py-1 text-gray-500 text-xs font-medium">
                +{expertise.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="flex justify-center pt-1">
          <button
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
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
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl pointer-events-none"></div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
