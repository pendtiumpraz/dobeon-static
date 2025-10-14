'use client';

import { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  featured?: boolean;
  gradient?: 'blue' | 'purple' | 'orange' | 'pink' | 'cyan' | 'green';
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

  const gradientClasses = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/50',
    purple: 'from-purple-500/20 to-violet-500/20 border-purple-500/50',
    orange: 'from-orange-500/20 to-amber-500/20 border-orange-500/50',
    pink: 'from-pink-500/20 to-rose-500/20 border-pink-500/50',
    cyan: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/50',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/50',
  };

  const badgeGradients = {
    blue: 'bg-gradient-blue text-white',
    purple: 'bg-gradient-purple text-white',
    orange: 'bg-gradient-orange text-white',
    pink: 'bg-gradient-pink text-white',
    cyan: 'bg-gradient-cyan text-white',
    green: 'bg-gradient-green text-white',
  };

  return (
    <div
      className={`
        relative group rounded-2xl overflow-hidden
        bg-gradient-to-br ${gradientClasses[gradient]}
        border-2 transition-all duration-500
        hover:shadow-2xl hover:-translate-y-2
        ${featured ? 'bento-featured' : ''}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Background Image/Placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-24 h-24 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${gradientClasses[gradient]} opacity-60`} />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className={`${badgeGradients[gradient]} px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white relative">
        {/* Name and Role */}
        <div className="mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className={`font-semibold text-sm md:text-base ${badgeGradients[gradient]} px-3 py-1 rounded-full inline-block`}>
            {role}
          </p>
        </div>

        {/* Bio - Expandable */}
        <div
          className={`
            text-gray-600 leading-relaxed mb-4 overflow-hidden transition-all duration-300
            ${isExpanded ? 'max-h-96' : 'max-h-20'}
          `}
        >
          {bio}
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {expertise.slice(0, isExpanded ? expertise.length : 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full border border-gray-300 hover:border-primary transition-colors"
            >
              {skill}
            </span>
          ))}
          {!isExpanded && expertise.length > 3 && (
            <span className="px-3 py-1 text-gray-500 text-xs md:text-sm">
              +{expertise.length - 3} more
            </span>
          )}
        </div>

        {/* Expand Indicator */}
        <div className="mt-4 text-center">
          <div className={`inline-flex items-center text-sm font-semibold ${badgeGradients[gradient]} px-4 py-2 rounded-full transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientClasses[gradient]} opacity-30 blur-2xl pointer-events-none`} />
      </div>

      {/* Hover border glow */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 ${gradientClasses[gradient].split(' ')[2]} shadow-lg`} />
    </div>
  );
}
