import React, { useState } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight, Volume2, Maximize2, Settings } from 'lucide-react';

interface VideoMediaSectionProps {
  onPlayVideo: (title: string, videoId: string) => void;
}

interface MediaItem {
  id: string;
  num: string;
  title: string;
  image: string;
  tag: string;
}

export const VideoMediaSection: React.FC<VideoMediaSectionProps> = ({ onPlayVideo }) => {
  const [activeVideo, setActiveVideo] = useState({
    title: "ENGINEERING EXCELLENCE.",
    highlight: "DELIVERING CONFIDENCE.",
    desc: "Precision engineered valve solutions for a safer, stronger and sustainable world.",
    image: "/images/hero-film-valve.jpg",
    tag: "COMPANY FILM"
  });

  const mediaCards: MediaItem[] = [
    {
      id: "marine-control",
      num: "01",
      title: "MARINE CONTROL VALVES",
      image: "/images/card-marine-valve.jpg",
      tag: "NAVAL SYSTEMS"
    },
    {
      id: "automated-valves",
      num: "02",
      title: "AUTOMATED VALVES",
      image: "/images/card-butterfly-valve.jpg",
      tag: "PRECISION AUTOMATION"
    },
    {
      id: "actuators",
      num: "03",
      title: "ACTUATORS",
      image: "/images/video-valve3.jpg",
      tag: "DIGITAL CONTROLS"
    },
    {
      id: "critical-flow",
      num: "04",
      title: "CRITICAL FLOW SOLUTIONS",
      image: "/images/about-card-valve.jpg",
      tag: "HIGH PRESSURE"
    },
    {
      id: "mfg-excellence",
      num: "05",
      title: "MANUFACTURING EXCELLENCE",
      image: "/images/factory.jpg",
      tag: "CNC & VMC PLANT"
    },
    {
      id: "precision-eng",
      num: "06",
      title: "PRECISION ENGINEERING",
      image: "/images/video-valve6.jpg",
      tag: "QUALITY TESTING"
    }
  ];



  const handleCardClick = (card: MediaItem) => {
    setActiveVideo({
      title: card.title,
      highlight: card.tag,
      desc: `High-precision solutions engineered for critical performance in ${card.title.toLowerCase()}.`,
      image: card.image,
      tag: card.tag
    });
  };

  return (
    <section id="media-showcase" className="pt-14 lg:pt-16 pb-6 lg:pb-8 bg-[#FAFAFA] border-t border-gray-200 select-none font-poppins relative overflow-hidden">
      
      {/* Extremely subtle technical grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#58585A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            TOP MEDIA ROW: ASYMMETRIC 54% HERO VIDEO + 46% MEDIA GRID
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-0">
          
          {/* LEFT: HERO VIDEO CARD (~54% width) */}
          <div className="lg:col-span-6 xl:col-span-7 relative rounded-[20px] overflow-hidden shadow-xl bg-[#0B0F14] group min-h-[440px] sm:min-h-[500px] flex flex-col justify-between border border-gray-800">
            
            {/* Cinematic Background Image */}
            <img
              src={activeVideo.image}
              alt={activeVideo.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out opacity-85"
            />

            {/* Dark Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

            {/* Top-Right Engineered Diagonal Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <polygon points="0 0, 100 0, 100 100" fill="#0B0F14" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="#D71920" strokeWidth="3" />
              </svg>
            </div>

            {/* Top Bar inside Video */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <div className="inline-flex items-center space-x-2 bg-[#D71920] text-white px-3.5 py-1 rounded-[4px] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="font-poppins font-bold text-[11px] uppercase tracking-wider">
                  {activeVideo.tag}
                </span>
              </div>
            </div>

            {/* Visual Center Large Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div
                onClick={() => onPlayVideo(activeVideo.title, "company-video")}
                className="pointer-events-auto cursor-pointer group/btn relative flex items-center justify-center"
              >
                {/* Outer expanding halo */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 group-hover/btn:scale-125 transition-transform duration-500 ease-out" />
                
                {/* Main circular button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover/btn:scale-105 group-hover/btn:bg-[#D71920] transition-all duration-300">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#D71920] group-hover/btn:bg-white flex items-center justify-center transition-colors">
                    <Play size={20} className="text-white group-hover/btn:text-[#D71920] ml-1 fill-current transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content & Custom Player Controls */}
            <div className="relative z-10 p-6 sm:p-8 pt-0">
              
              {/* Headline */}
              <div className="max-w-xl mb-6">
                <h3 className="font-poppins font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] text-white leading-[1.0] tracking-[-0.03em] mb-1">
                  {activeVideo.title}
                </h3>
                <h4 className="font-poppins font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] text-[#D71920] leading-[1.0] tracking-[-0.03em] mb-3">
                  {activeVideo.highlight}
                </h4>
                <p className="font-poppins text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
                  {activeVideo.desc}
                </p>
              </div>

              {/* Action Button & Subtle Corporate Scrubber */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/15">
                <button
                  onClick={() => onPlayVideo(activeVideo.title, "company-video")}
                  className="inline-flex items-center space-x-2 bg-[#D71920] hover:bg-[#B8141A] text-white text-xs font-poppins font-bold uppercase tracking-wider px-5 py-3 rounded-[6px] transition-all duration-200 shadow-sm group/w cursor-pointer"
                >
                  <Play size={13} className="fill-current" />
                  <span>WATCH COMPANY VIDEO</span>
                  <ArrowRight size={13} className="group-hover/w:translate-x-1 transition-transform" />
                </button>

                {/* Subtle Corporate Scrubber UI */}
                <div className="hidden sm:flex items-center space-x-3 text-white/70 text-[11px] font-poppins font-mono">
                  <span>01:24</span>
                  <div className="w-24 sm:w-32 h-1 bg-white/20 rounded-full overflow-hidden flex">
                    <div className="w-2/5 h-full bg-[#D71920]" />
                  </div>
                  <span>03:45</span>
                  <div className="flex items-center space-x-2 ml-2 text-white/60">
                    <Volume2 size={14} className="hover:text-white cursor-pointer" />
                    <Settings size={14} className="hover:text-white cursor-pointer" />
                    <Maximize2 size={14} className="hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT: INNOVATION IN MOTION MEDIA GRID (~46% width) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
            
            {/* Header with Heading & Circular Carousel Nav */}
            <div className="mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                <div>
                  <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-1">
                    PROJECT & SOLUTIONS
                  </span>
                  <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#58585A] uppercase tracking-tight">
                    INNOVATION <span className="text-[#D71920]">IN MOTION</span>
                  </h3>
                </div>

                {/* Circular Nav Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-[#D71920] text-white flex items-center justify-center hover:bg-[#B8141A] transition-colors shadow-2xs cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Sub-tagline banner matching reference */}
              <div className="bg-white border-l-4 border-[#D71920] border-y border-r border-gray-200/80 px-4 py-2 rounded-r-[6px] text-xs font-poppins text-[#3F4448]">
                <strong className="text-[#58585A] font-bold">Advanced Engineering.</strong> Smarter Solutions. Stronger Tomorrow.
              </div>
            </div>

            {/* 3x2 Media Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {mediaCards.map((card) => {
                const isCurrent = activeVideo.title === card.title;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    className={`group relative h-36 sm:h-40 rounded-[12px] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-black border ${
                      isCurrent ? "border-[#D71920] ring-2 ring-[#D71920]/30" : "border-gray-200"
                    }`}
                  >
                    {/* Background Photo with smooth hover zoom */}
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />

                    {/* Dark gradient for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                    {/* Center Circular Play Trigger on hover */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs border border-white/40 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D71920] group-hover:border-[#D71920] transition-all duration-200 shadow-sm">
                        <Play size={12} className="ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Title & Red Indicator */}
                    <div className="absolute inset-x-0 bottom-0 p-3 z-10">
                      <h5 className="font-poppins font-bold text-[11px] sm:text-[11.5px] text-white leading-tight uppercase group-hover:text-red-200 transition-colors flex items-center justify-between">
                        <span>{card.title}</span>
                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D71920]" />
                      </h5>
                      <div className="w-5 h-[1.5px] bg-[#D71920] mt-1 group-hover:w-10 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
