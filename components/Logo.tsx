import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeValues = {
    sm: 60,
    md: 80,
    lg: 100,
  };

  const heightValues = {
    sm: 24,
    md: 28,
    lg: 36,
  };

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Dobeon Logo SVG */}
      <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <Image
          src="/logo/dobeon 1.svg"
          alt="Dobeon Logo"
          width={sizeValues[size]}
          height={heightValues[size]}
          className="w-auto h-auto"
          priority
        />
      </div>

      {/* Text - Hidden as logo already contains text */}
      {showText && (
        <span className="font-bold tracking-wider text-2xl text-gray-900 group-hover:text-primary transition-colors duration-300">

        </span>
      )}
    </Link>
  );
}
