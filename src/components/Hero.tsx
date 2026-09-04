import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { WaveTransition } from './WaveTransition';
import heroVideo from '../assets/video/RappidValues.mp4';

interface HeroProps {
  onExploreProducts?: () => void;
  onTalkExperts?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Safe Parallax: Only zooms in slightly (1.00 -> 1.04), NEVER shrinks below 1.00
  const videoScale = 1 + Math.min((scrollY / 1800) * 0.04, 0.04);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[580px] max-w-none m-0 p-0 border-none overflow-hidden select-none bg-white"
      style={{
        width: '100%',
        maxWidth: 'none',
      }}
    >
      {/* Fallback neutral background while video initialises - NO black frame */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#111418] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #1E232A 0%, #111418 100%)'
        }}
      />

      {/* True Full-Bleed Video Background */}
      <video
        ref={videoRef}
        src={heroVideo || "/video/RappidValues.mp4"}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform-gpu transition-opacity duration-700 ease-out ${
          isVideoLoaded ? 'opacity-100' : 'opacity-95'
        }`}
        style={{
          transform: `scale(${videoScale})`,
          transformOrigin: 'center center',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />

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
