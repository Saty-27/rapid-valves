import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  scope: string;
}

interface ProjectGallerySectionProps {
  onOpenContact?: () => void;
}

export const ProjectGallerySection: React.FC<ProjectGallerySectionProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const projects: ProjectItem[] = [
    {
      id: "marine-offshore",
      category: "MARINE",
      title: "MARINE & OFFSHORE",
      desc: "Engineered for the harshest marine environments.",
      image: "/images/gallery-marine-offshore-clean.jpg",
      scope: "High-integrity marine gate, globe and check valves installed on offshore production platforms and naval aux vessels under DNV/IRS classification."
    },
    {
      id: "industrial-valves",
      category: "INDUSTRIAL",
      title: "INDUSTRIAL VALVE SYSTEMS",
      desc: "Reliable flow control for critical industrial applications.",
      image: "/images/gallery-valve-systems-clean.jpg",
      scope: "Severe service forged and cast steel valve manifolds with pneumatic/electric actuators engineered for uninterrupted continuous factory throughput."
    },
    {
      id: "mfg-excellence",
      category: "MANUFACTURING",
      title: "MANUFACTURING EXCELLENCE",
      desc: "Advanced manufacturing with precision, consistency and quality.",
      image: "/images/gallery-manufacturing-clean.jpg",
      scope: "45,000 sq.ft. facility equipped with high-precision CNC machining centers, automated welding, and coordinate measuring machines."
    },
    {
      id: "oil-gas",
      category: "OIL & GAS",
      title: "OIL & GAS",
      desc: "High-performance valves for upstream and downstream.",
      image: "/images/gallery-oil-gas-clean.jpg",
      scope: "API 6D and fire-safe API 607 certified ball and gate valves deployed across hydrocarbon refineries, pipelines, and storage terminals."
    },
    {
      id: "defence-naval",
      category: "DEFENCE",
      title: "DEFENCE & NAVAL",
      desc: "Mission-critical solutions for defence & naval applications.",
      image: "/images/gallery-defence-naval-clean.jpg",
      scope: "Combat-grade non-magnetic bronze and cupronickel naval sea-water valves certified for frontline frigates, corvettes, and submarine platforms."
    },
    {
      id: "testing-quality",
      category: "MANUFACTURING",
      title: "TESTING & QUALITY ASSURANCE",
      desc: "Every valve is tested to global standards for total reliability.",
      image: "/images/gallery-testing-quality-clean.jpg",
      scope: "100% in-house hydrostatic shell testing, high-pressure pneumatic seat testing, positive material identification (PMI), and ultrasonic examination."
    }
  ];

  const categories = ["ALL", "MARINE", "DEFENCE", "INDUSTRIAL", "OIL & GAS", "MANUFACTURING"];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + projects.length) % projects.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % projects.length);
    }
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="pt-6 lg:pt-8 pb-16 lg:pb-20 bg-white select-none font-poppins relative overflow-hidden"
    >
      
      {/* Extremely subtle engineering linework in background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 1200 600" fill="none" stroke="currentColor" className="w-full h-full text-black">
          <line x1="0" y1="150" x2="1200" y2="150" strokeDasharray="6 6" />
          <line x1="0" y1="450" x2="1200" y2="450" strokeDasharray="6 6" />
          <line x1="380" y1="0" x2="380" y2="600" strokeDasharray="6 6" />
          <line x1="780" y1="0" x2="780" y2="600" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            HEADER ROW
           ======================================================== */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              PROJECTS & SOLUTIONS
            </span>

            {/* Main Headline */}
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.14] tracking-[-0.02em]">
              <span className="text-[#111418] block">ENGINEERING EXCELLENCE.</span>
              <span className="text-[#111418]">DELIVERING </span>
              <span className="text-[#D71920]">REAL SOLUTIONS.</span>
            </h2>

            {/* Red Accent Line */}
            <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />

            {/* Supporting Copy */}
            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              From concept to commissioning – we deliver precision-engineered valve solutions backed by innovation, experience and world-class manufacturing.
            </p>
          </div>

          <div className="lg:pb-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 bg-white hover:bg-[#D71920] text-[#D71920] hover:text-white border border-[#D71920] text-[12px] font-poppins font-bold uppercase tracking-wider px-6 py-3 rounded-[6px] shadow-2xs hover:shadow transition-all group cursor-pointer"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 sm:space-x-4 mb-6 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-poppins text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-[4px] transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-[#D71920] text-white shadow-2xs"
                  : "text-[#6B7280] hover:text-[#111418] hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ========================================================
            ASYMMETRIC EDITORIAL MASONRY GALLERY
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 mb-10 items-stretch">
          
          {/* LEFT FEATURE CARD: MARINE & OFFSHORE (~32% width, spans 2 rows) */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className={`lg:col-span-4 relative h-full min-h-[460px] lg:min-h-full rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 ease-apple cursor-pointer group bg-black flex flex-col justify-end transform-gpu ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
            }`}
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Quick Inspect Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </div>

            {/* Content at Bottom-Left */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="w-6 h-[2px] bg-[#D71920] mb-3 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-red-100 transition-colors">
                {projects[0].title}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-gray-300 max-w-sm mb-4 leading-relaxed">
                {projects[0].desc}
              </p>
              <div className="inline-flex items-center space-x-1.5 font-poppins font-bold text-xs uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                <span>READ MORE</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* RIGHT AREA (~68% width): Top Row 2 cards + Bottom Row 3 cards */}
          <div className="lg:col-span-8 flex flex-col gap-4 lg:gap-5">
            
            {/* TOP ROW: 2 Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              
              {/* Card 2: Industrial Valve Systems */}
              <div
                onClick={() => handleOpenLightbox(1)}
                className={`relative h-64 sm:h-72 lg:h-[285px] rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 delay-100 ease-apple cursor-pointer group bg-black transform-gpu ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                }`}
              >
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <div className="w-5 h-[2px] bg-[#D71920] mb-2 group-hover:w-10 transition-all duration-300" />
                  <h4 className="font-poppins font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-1 group-hover:text-red-100 transition-colors">
                    {projects[1].title}
                  </h4>
                  <p className="font-poppins text-xs text-gray-300 max-w-xs mb-3 leading-snug">
                    {projects[1].desc}
                  </p>
                  <div className="inline-flex items-center space-x-1 font-poppins font-bold text-[11px] uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 3: Manufacturing Excellence */}
              <div
                onClick={() => handleOpenLightbox(2)}
                className={`relative h-64 sm:h-72 lg:h-[285px] rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 delay-200 ease-apple cursor-pointer group bg-black transform-gpu ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                }`}
              >
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <div className="w-5 h-[2px] bg-[#D71920] mb-2 group-hover:w-10 transition-all duration-300" />
                  <h4 className="font-poppins font-bold text-base sm:text-lg text-white uppercase tracking-tight mb-1 group-hover:text-red-100 transition-colors">
                    {projects[2].title}
                  </h4>
                  <p className="font-poppins text-xs text-gray-300 max-w-xs mb-3 leading-snug">
                    {projects[2].desc}
                  </p>
                  <div className="inline-flex items-center space-x-1 font-poppins font-bold text-[11px] uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM ROW: 3 Smaller Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              
              {/* Card 4: Oil & Gas */}
              <div
                onClick={() => handleOpenLightbox(3)}
                className={`relative h-56 sm:h-64 lg:h-[260px] rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 delay-300 ease-apple cursor-pointer group bg-black transform-gpu ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                }`}
              >
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <div className="w-5 h-[2px] bg-[#D71920] mb-2 group-hover:w-10 transition-all duration-300" />
                  <h5 className="font-poppins font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-red-100 transition-colors">
                    {projects[3].title}
                  </h5>
                  <p className="font-poppins text-[11px] text-gray-300 line-clamp-2 mb-2 leading-snug">
                    {projects[3].desc}
                  </p>
                  <div className="inline-flex items-center space-x-1 font-poppins font-bold text-[10px] uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 5: Defence & Naval */}
              <div
                onClick={() => handleOpenLightbox(4)}
                className={`relative h-56 sm:h-64 lg:h-[260px] rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 delay-[380ms] ease-apple cursor-pointer group bg-black transform-gpu ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                }`}
              >
                <img
                  src={projects[4].image}
                  alt={projects[4].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <div className="w-5 h-[2px] bg-[#D71920] mb-2 group-hover:w-10 transition-all duration-300" />
                  <h5 className="font-poppins font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-red-100 transition-colors">
                    {projects[4].title}
                  </h5>
                  <p className="font-poppins text-[11px] text-gray-300 line-clamp-2 mb-2 leading-snug">
                    {projects[4].desc}
                  </p>
                  <div className="inline-flex items-center space-x-1 font-poppins font-bold text-[10px] uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 6: Testing & Quality Assurance */}
              <div
                onClick={() => handleOpenLightbox(5)}
                className={`relative h-56 sm:h-64 lg:h-[260px] rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 delay-[460ms] ease-apple cursor-pointer group bg-black transform-gpu ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                }`}
              >
                <img
                  src={projects[5].image}
                  alt={projects[5].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white/75 group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <div className="w-5 h-[2px] bg-[#D71920] mb-2 group-hover:w-10 transition-all duration-300" />
                  <h5 className="font-poppins font-bold text-sm sm:text-base text-white uppercase tracking-tight mb-1 group-hover:text-red-100 transition-colors">
                    {projects[5].title}
                  </h5>
                  <p className="font-poppins text-[11px] text-gray-300 line-clamp-2 mb-2 leading-snug">
                    {projects[5].desc}
                  </p>
                  <div className="inline-flex items-center space-x-1 font-poppins font-bold text-[10px] uppercase tracking-wider text-[#D71920] group-hover:text-white transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
            </div>

          </div>

        </div>

      </div>

    </div>

      {/* ========================================================
          FULL-SCREEN LIGHTBOX MODAL (Step 21)
         ======================================================== */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer hidden sm:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer hidden sm:flex"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Lightbox Card */}
          <div className="bg-[#111418] border border-gray-800 rounded-[18px] overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[440px] overflow-hidden">
              <img
                src={projects[lightboxIndex].image}
                alt={projects[lightboxIndex].title}
                loading="lazy"
                decoding="async"
                className="max-h-[60vh] w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#15191E] border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                  <span className="font-poppins font-bold text-[11px] uppercase tracking-wider text-[#D71920]">
                    {projects[lightboxIndex].category}
                  </span>
                </div>
                <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-white">
                  {projects[lightboxIndex].title}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                  {projects[lightboxIndex].scope}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="inline-flex items-center space-x-2 bg-[#D71920] hover:bg-[#B8141A] text-white text-xs font-poppins font-bold uppercase tracking-wider px-5 py-3 rounded-[6px] transition-colors cursor-pointer"
                >
                  <span>Request Engineering Specs</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
