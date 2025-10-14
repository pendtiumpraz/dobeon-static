import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Starburst Icon */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Center circle */}
          <circle cx="16" cy="16" r="2.5" fill="currentColor" className="text-primary"/>

          {/* Rays - 8 directions */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <g key={angle} transform={`rotate(${angle} 16 16)`}>
              <rect
                x="14"
                y="4"
                width="4"
                height="9"
                rx="2"
                fill="currentColor"
                className="text-primary"
                style={{
                  transformOrigin: '16px 16px',
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              />
            </g>
          ))}
        </svg>

        {/* Animated ring on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-wider ${textSizeClasses[size]} text-gray-900 group-hover:text-primary transition-colors duration-300`}>
          DOBEON
        </span>
      )}
    </Link>
  );
}
