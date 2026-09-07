import React from 'react';
import {
  Cpu,
  Factory,
  ShieldCheck,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutSectionProps {
  onKnowMore?: () => void;
  onSelectIndustry?: (name: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMore, onSelectIndustry }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  const features = [
    {
      icon: Cpu,
      title: "Advanced Engineering",
      desc: "Innovative design for unmatched performance"
    },
    {
      icon: Factory,
      title: "In-House Manufacturing",
      desc: "Integrated facilities for precision control"
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Quality",
      desc: "Tested to global standards"
    },
    {
      icon: Globe,
      title: "Global Presence",
      desc: "Serving clients worldwide"
    }
  ];

  const cards = [
    {
      id: 1,
      title: "Marine & Defence",
      subtitle: "Naval Shock-Rated Systems",
      image: "/images/about-card-naval.jpg",
      industry: "Defence & Naval",
      delay: "delay-[280ms]"
    },
    {
      id: 2,
      title: "Precision Valves",
      subtitle: "Critical High-Pressure Service",
      image: "/images/about-card-valve.jpg",
      industry: "Products",
      delay: "delay-[380ms]"
    },
    {
      id: 3,
      title: "Oil & Gas Offshore",
      subtitle: "Subsea & Wellhead Isolation",
      image: "/images/about-card-offshore.jpg",
      industry: "Oil & Gas",
      delay: "delay-[480ms]"
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none font-poppins"
    >
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN (~50% width on Desktop)
              - Staggered entrance: Heading (0ms) -> Para (120ms) -> Badges (220ms) -> CTA (300ms)
             ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Section Header */}
            <div>
              <h2
                className={`font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.14] tracking-[-0.02em] transform-gpu transition-all duration-700 ease-apple ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-[#58585A]">ABOUT </span>
                <span className="text-[#D71920]">RAPID VALVES</span>
              </h2>

              <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />
            </div>

            {/* Company Bio Text */}
            <p
              className={`font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl transform-gpu transition-all duration-700 delay-100 ease-apple ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <strong className="text-[#58585A] font-semibold">Rappid Valves</strong> — We are an Engineering company which builds Valve solutions across sectors as per Industry standards. Our technical solutions build precision control systems to ensure longevity in various conditions. Our International standard factory manufactures and exports valves for critical applications in industries such as Hydrocarbon, Marine, Shipbuilding, Distillery, Brewery, Chemical, Power, Mining & General industry. We can meet your biggest challenges in Fluid motion control with our inbuilt Product quality, Design & Development Expertise in engineering, project management, and efficient service.
            </p>

            {/* 4 Feature Badges in a Row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 pt-2 transform-gpu transition-all duration-700 delay-200 ease-apple ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="flex flex-col items-start space-y-2 group">
                    {/* Circular Red Outline Icon with micro hover bounce */}
                    <div className="w-11 h-11 rounded-full border border-red-200 bg-red-50/50 flex items-center justify-center text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-all duration-200 shadow-xs group-hover:scale-105">
                      <IconComponent size={20} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <div className="text-[13px] font-poppins font-bold text-[#58585A] leading-tight">
                      {feat.title}
                    </div>

                    {/* Subtitle */}
                    <div className="text-[11px] font-poppins text-[#767B85] leading-snug">
                      {feat.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Link: Know More About Us → */}
            <div
              className={`pt-2 transform-gpu transition-all duration-700 delay-300 ease-apple ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={onKnowMore}
                className="inline-flex items-center space-x-2 text-sm font-poppins font-bold text-[#58585A] hover:text-[#D71920] transition-colors group cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight size={15} className="text-[#D71920] group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

          </div>


          {/* ========================================================
              RIGHT COLUMN (3 Tall Photographic Cards)
              Sequential settling reveal: opacity 0 -> 1, scale 1.04 -> 1, translateY 8 -> 0
             ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-5 items-stretch">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onSelectIndustry && onSelectIndustry(card.industry)}
                  className={`group relative rounded-[18px] lg:rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 ease-apple aspect-[3/4.6] sm:aspect-[3/5] bg-gray-100 cursor-pointer transform-gpu ${card.delay} ${
                    isVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-[1.04] translate-y-8'
                  }`}
                >
                  {/* Photo with subtle hover zoom */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Circular White Expand Button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#58585A] hover:bg-[#D71920] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110">
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Card Title on Hover */}
                  <div className="absolute bottom-4 left-4 right-16 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="text-[12px] font-poppins font-bold text-white leading-tight drop-shadow-sm">
                      {card.title}
                    </div>
                    <div className="text-[10px] font-poppins text-gray-200 leading-tight drop-shadow-sm">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
