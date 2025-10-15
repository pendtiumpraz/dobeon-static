'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FloatingIcons from './FloatingIcons';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  gradient?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  gradient = true,
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`relative overflow-hidden ${gradient ? 'gradient-mesh' : 'bg-gray-50'} pt-32 pb-20 md:pt-40 md:pb-32`}>
      {/* Gradient Background */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-cyan-500 opacity-95"></div>
      )}

      {/* Floating Icons - elegant and subtle */}
      {gradient && <FloatingIcons count={12} />}

      {/* Subtle decorative blob - reduced from 3 to 1 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl blob-shape"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Staggered text animation */}
          {subtitle && (
            <p
              className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-4 opacity-0 ${
                mounted ? 'animate-slide-down' : ''
              } ${gradient ? 'text-white/90' : 'text-primary'}`}
            >
              {subtitle}
            </p>
          )}

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 ${
              mounted ? 'animate-fade-in-up stagger-1' : ''
            } ${gradient ? 'text-white' : 'text-gray-900'}`}
          >
            {title}
          </h1>

          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed opacity-0 ${
              mounted ? 'animate-fade-in-up stagger-2' : ''
            } ${gradient ? 'text-white/90' : 'text-gray-600'}`}
          >
            {description}
          </p>

          {/* Animated CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 ${
            mounted ? 'animate-fade-in-up stagger-3' : ''
          }`}>
            <Link
              href={ctaLink}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover-shine relative overflow-hidden ${
                gradient
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              <span className="relative z-10">{ctaText}</span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </Link>

            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 transform hover:scale-105 ${
                  gradient
                    ? 'border-white text-white hover:bg-white/20'
                    : 'border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 ${
        mounted ? 'animate-fade-in stagger-4' : ''
      }`}>
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className={`text-sm ${gradient ? 'text-white/70' : 'text-gray-500'}`}>Scroll</span>
          <svg
            className={`w-6 h-6 ${gradient ? 'text-white/70' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
