import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { WaveTransition } from './WaveTransition';

interface HeroProps {
  onExploreProducts?: () => void;
  onTalkExperts?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Set video speed to 3x and guarantee autoplay on all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 3.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (videoRef.current) videoRef.current.playbackRate = 3.0;
          })
          .catch(() => {
            // Autoplay policy fallback
            setIsPlaying(false);
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

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (isPlaying) {
        videoRef.current.play().then(() => {
          if (videoRef.current) videoRef.current.playbackRate = 3.0;
        }).catch(() => {});
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          if (videoRef.current) videoRef.current.playbackRate = 3.0;
        }).catch(() => {});
      }
    }
  };

  // Safe Parallax: slight scale (1.00 -> 1.04) from center, never reveals edges
  const videoScale = 1.01 + Math.min((scrollY / 1800) * 0.04, 0.04);

  return (
    <section
      id="hero"
      className="relative w-full h-[105vh] min-h-[720px] lg:min-h-[850px] xl:min-h-[920px] max-w-none m-0 p-0 border-none overflow-hidden select-none bg-white"
      style={{
        width: '100%',
        maxWidth: 'none',
      }}
    >
      {/* Fallback clean neutral background while video initialises - NO dark black frame */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#1A1F26] pointer-events-none"
      />

      {/* True Full-Bleed Edge-to-Edge Video at 3x Speed */}
      <video
        ref={videoRef}
        src="/video/RappidValues.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
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

      {/* Floating Video Controls in Bottom-Right Corner (above wave, z-30) */}
      <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 z-30 flex items-center space-x-3">
        {/* Play / Pause Toggle */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#D71920] text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md cursor-pointer shadow-lg"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={17} /> : <Play size={17} className="ml-0.5" />}
        </button>

        {/* Audio Mute / Unmute Toggle */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#D71920] text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md cursor-pointer shadow-lg"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      </div>

      {/* ========================================================
          HERO WAVE TRANSITION (Hero → About Section)
          Seamlessly overlays the bottom of the video, connecting directly to White About
         ======================================================== */}
      <WaveTransition position="bottom" fillColor="#FFFFFF" showAccentLine={true} />
    </section>
  );
};

