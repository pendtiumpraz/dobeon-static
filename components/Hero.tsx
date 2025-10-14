import Link from 'next/link';

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
  return (
    <section className={`relative overflow-hidden ${gradient ? 'gradient-hero' : 'bg-gray-50'} pt-32 pb-20 md:pt-40 md:pb-32`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {subtitle && (
            <p className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-4 ${gradient ? 'text-white/90' : 'text-primary'}`}>
              {subtitle}
            </p>
          )}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${gradient ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaLink}
              className={`px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                gradient
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className={`px-8 py-4 rounded-lg font-semibold transition-all border-2 ${
                  gradient
                    ? 'border-white text-white hover:bg-white/10'
                    : 'border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
