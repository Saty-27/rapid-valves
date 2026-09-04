import React from 'react';

interface WaveTransitionProps {
  position?: 'bottom' | 'top';
  fillColor?: string;
  className?: string;
  showAccentLine?: boolean;
}

export const WaveTransition: React.FC<WaveTransitionProps> = ({
  position = 'bottom',
  fillColor = '#FFFFFF',
  className = '',
  showAccentLine = true,
}) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${
        position === 'bottom'
          ? 'absolute -bottom-[1px] left-0 right-0 z-20'
          : 'absolute top-0 left-0 right-0 z-20'
      } ${className}`}
      aria-hidden="true"
    >
      {/* 
        Responsive Wave Container:
        Desktop: 65px - 75px
        Tablet: 40px - 50px
        Mobile: 25px - 32px
      */}
      <div className="relative w-full h-[32px] sm:h-[48px] md:h-[60px] lg:h-[76px] xl:h-[84px] overflow-hidden">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-full block transform-gpu animate-subtle-wave"
          style={{
            transformOrigin: 'bottom center',
          }}
        >
          <defs>
            {/* Engineering Flow Line: Rappid Red accent fading into subtle gray and vanishing at edges */}
            <linearGradient id="flowLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D71920" stopOpacity="0" />
              <stop offset="12%" stopColor="#D71920" stopOpacity="0.15" />
              <stop offset="35%" stopColor="#D71920" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#D71920" stopOpacity="0.75" />
              <stop offset="78%" stopColor="#9CA3AF" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0" />
            </linearGradient>

            {/* Subtle under-glow / soft depth shadow along the wave crest */}
            <linearGradient id="waveDepthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(17,20,24,0.06)" />
              <stop offset="40%" stopColor="rgba(17,20,24,0.02)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
          </defs>

          {/* Layer 0: Subtle atmospheric shadow under the wave for realistic depth */}
          <path
            d="M 0,38 C 240,68 440,18 720,48 C 1000,78 1200,28 1440,53 L 1440,100 L 0,100 Z"
            fill="url(#waveDepthGradient)"
          />

          {/* Layer 1: Solid Primary Wave Body (Seamlessly connects to White Canvas) */}
          <path
            d="M 0,35 C 240,65 440,15 720,45 C 1000,75 1200,25 1440,50 L 1440,100 L 0,100 Z"
            fill={fillColor}
          />

          {/* Layer 2: Precision Engineering Flow Line (~15% to ~85% width) */}
          {showAccentLine && (
            <path
              d="M 180,31 C 360,18 540,52 720,45 C 900,38 1080,60 1260,32"
              fill="none"
              stroke="url(#flowLineGradient)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>

      <style>{`
        @keyframes subtleWaveMotion {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.05);
          }
        }
        .animate-subtle-wave {
          animation: subtleWaveMotion 11s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
