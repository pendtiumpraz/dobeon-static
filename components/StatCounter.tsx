'use client';

import { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  gradient?: 'blue' | 'purple' | 'orange' | 'pink' | 'cyan';
  icon?: React.ReactNode;
}

export default function StatCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  description,
  gradient = 'blue',
  icon,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const gradientClasses = {
    blue: 'text-gradient-blue',
    purple: 'text-gradient-purple',
    orange: 'bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent',
    cyan: 'bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div
      ref={counterRef}
      className="text-center group hover:transform hover:scale-105 transition-all duration-300"
    >
      {icon && (
        <div className="mb-4 text-primary flex justify-center transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className={`text-5xl md:text-6xl font-bold mb-2 ${gradientClasses[gradient]}`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{label}</div>
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
    </div>
  );
}
