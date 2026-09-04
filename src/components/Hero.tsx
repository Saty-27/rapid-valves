import React, { useRef, useState, useEffect } from 'react';
import { WaveTransition } from './WaveTransition';

interface HeroProps {
  onExploreProducts?: () => void;
  onTalkExperts?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Set video speed to 3x and guarantee autoplay on all browsers (plays once on initial load)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 3.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (videoRef.current) videoRef.current.playbackRate = 3.0;
          })
          .catch(() => {
            // Autoplay policy fallback
          });
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 1200) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When user hovers anywhere on the banner, replay the video
  const handleBannerHover = () => {
    if (videoRef.current) {
      if (videoRef.current.ended || videoRef.current.paused) {
        videoRef.current.currentTime = 0;
      }
      videoRef.current.playbackRate = 3.0;
      videoRef.current.play().catch(() => {});
    }
  };

  // Safe Parallax: slight scale (1.01 -> 1.05) from center, never reveals edges
  const videoScale = 1.01 + Math.min((scrollY / 1800) * 0.04, 0.04);

  return (
    <section
      id="hero"
      onMouseEnter={handleBannerHover}
      onClick={handleBannerHover}
      className="relative w-full h-[105vh] min-h-[720px] lg:min-h-[850px] xl:min-h-[920px] max-w-none m-0 p-0 border-none overflow-hidden select-none bg-white cursor-pointer"
      style={{
        width: '100%',
        maxWidth: 'none',
      }}
    >
      {/* Fallback clean neutral background while video initialises */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#1A1F26] pointer-events-none"
      />

      {/* True Full-Bleed Edge-to-Edge Video at 3x Speed (plays once, replays on banner hover) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 3.0;
        }}
        onPlay={(e) => {
          e.currentTarget.playbackRate = 3.0;
        }}
        className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] object-cover object-center pointer-events-none transform-gpu"
        style={{
          transform: `scale(${videoScale})`,
          transformOrigin: 'center center',
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src="/video/RappidValues.mp4" type="video/mp4" />
      </video>

      {/* ========================================================
          HERO WAVE TRANSITION (Hero → About Section)
          Seamlessly overlays the bottom of the video, connecting directly to White About
         ======================================================== */}
      <WaveTransition position="bottom" fillColor="#FFFFFF" showAccentLine={true} />
    </section>
  );
};
