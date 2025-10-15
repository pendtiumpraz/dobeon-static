'use client';

import { useInView, getAnimationClasses } from '@/lib/animations';

interface LogoLineProps {
  variant?: 'solid' | 'gradient' | 'dotted' | 'double' | 'curve';
  className?: string;
}

export default function LogoLine({
  variant = 'gradient',
  className = ''
}: LogoLineProps) {
  const { ref, isInView } = useInView();

  const renderDivider = () => {
    switch (variant) {
      case 'solid':
        return (
          <div className="w-full max-w-5xl mx-auto">
            <div className="h-1 bg-blue-500 rounded-full"></div>
          </div>
        );

      case 'gradient':
        return (
          <div className="w-full max-w-5xl mx-auto relative">
            <svg viewBox="0 0 1000 10" preserveAspectRatio="none" className="w-full h-3">
              <defs>
                <linearGradient id="gradientLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1">
                    <animate attributeName="stop-color" values="#06b6d4; #0066ff; #06b6d4" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="1000" height="10" fill="url(#gradientLineGradient)" rx="5" />

              {/* Animated glow dots */}
              <circle cx="250" cy="5" r="3" fill="#0066ff" opacity="0.6">
                <animate attributeName="cx" values="250;750;250" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="5" r="2.5" fill="#06b6d4" opacity="0.5">
                <animate attributeName="cx" values="500;200;800;500" dur="7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        );

      case 'dotted':
        return (
          <div className="w-full max-w-5xl mx-auto relative">
            <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className="w-full h-5">
              <defs>
                <linearGradient id="dottedLeftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7">
                    <animate attributeName="stop-color" values="#06b6d4; #0066ff; #06b6d4" dur="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                <linearGradient id="dottedRightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7">
                    <animate attributeName="stop-color" values="#06b6d4; #0066ff; #06b6d4" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Left line */}
              <rect x="0" y="8" width="470" height="4" fill="url(#dottedLeftGradient)" rx="2" />

              {/* Right line */}
              <rect x="530" y="8" width="470" height="4" fill="url(#dottedRightGradient)" rx="2" />

              {/* Center animated dot */}
              <circle cx="500" cy="10" r="6" fill="#0066ff" opacity="0.8">
                <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                <animate attributeName="fill" values="#0066ff; #06b6d4; #0066ff" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Orbiting dots */}
              <circle r="3" fill="#06b6d4" opacity="0.6">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 500 10"
                  to="360 500 10"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#orbitPath"/>
                </animateMotion>
              </circle>

              <circle r="2.5" fill="#0066ff" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="180 500 10"
                  to="540 500 10"
                  dur="5s"
                  repeatCount="indefinite"
                />
                <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s">
                  <mpath href="#orbitPath"/>
                </animateMotion>
              </circle>

              {/* Hidden orbit path */}
              <path id="orbitPath" d="M 500,10 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0" fill="none" stroke="none" />
            </svg>
          </div>
        );

      case 'double':
        return (
          <div className="w-full max-w-5xl mx-auto space-y-2">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rounded-full"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rounded-full"></div>
          </div>
        );

      case 'curve':
        return (
          <div className="w-full max-w-6xl mx-auto relative">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-16">
              <defs>
                <linearGradient id="curveLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066ff" stopOpacity="0">
                    <animate attributeName="stop-color" values="#0066ff; #06b6d4; #0066ff" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="25%" stopColor="#0066ff" stopOpacity="0.8">
                    <animate attributeName="stop-color" values="#0066ff; #06b6d4; #0066ff" dur="4s" begin="0.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1">
                    <animate attributeName="stop-color" values="#06b6d4; #0066ff; #06b6d4" dur="4s" begin="1s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="75%" stopColor="#0066ff" stopOpacity="0.8">
                    <animate attributeName="stop-color" values="#0066ff; #06b6d4; #0066ff" dur="4s" begin="1.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#0066ff" stopOpacity="0">
                    <animate attributeName="stop-color" values="#0066ff; #06b6d4; #0066ff" dur="4s" begin="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>

              {/* Main curve line */}
              <path
                d="M0,30 Q300,10 600,30 T1200,30"
                fill="none"
                stroke="url(#curveLineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Animated moving dots */}
              <circle r="4" fill="#0066ff" opacity="0.8">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#curvePath"/>
                </animateMotion>
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle r="3" fill="#06b6d4" opacity="0.6">
                <animateMotion dur="8s" repeatCount="indefinite" begin="2s">
                  <mpath href="#curvePath"/>
                </animateMotion>
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>

              <circle r="3.5" fill="#0066ff" opacity="0.7">
                <animateMotion dur="7s" repeatCount="indefinite" begin="4s">
                  <mpath href="#curvePath"/>
                </animateMotion>
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Hidden path for motion */}
              <path id="curvePath" d="M0,30 Q300,10 600,30 T1200,30" fill="none" stroke="none" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`logoline py-12 md:py-16 ${className} ${getAnimationClasses('fadeIn', isInView)}`}
    >
      {renderDivider()}
    </div>
  );
}
