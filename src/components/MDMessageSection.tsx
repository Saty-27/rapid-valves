import React from 'react';
import { User } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const MDMessageSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.12 });

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-20 lg:py-28 bg-[#F7F8F9] select-none font-poppins relative overflow-hidden border-t border-gray-200"
    >
      
      {/* Background Subtle Blueprint Grid & Measurement Linework */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111418 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Blueprint Schematic Linework in Background */}
      <div className="absolute left-[-60px] bottom-[-40px] w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-black">
          <circle cx="100" cy="100" r="80" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="50" strokeWidth="1.5" />
          <line x1="20" y1="100" x2="180" y2="100" strokeWidth="2" />
          <line x1="100" y1="20" x2="100" y2="180" strokeWidth="2" />
          <rect x="70" y="70" width="60" height="60" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            LEADERSHIP COMPOSITION (PORTRAIT + MESSAGE)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: DIRECTOR PORTRAIT PANEL (~38% width) */}
          <div
            className={`lg:col-span-5 relative transform-gpu transition-all duration-800 ease-apple ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[1.03] translate-y-6'
            }`}
          >
            
            {/* Engineered Red Frame Offset Behind Portrait */}
            <div className="absolute -top-4 -left-4 w-[92%] h-[92%] rounded-[28px] bg-[#D71920] z-0 hidden sm:block overflow-hidden">
              {/* Technical Diagonal Hatching */}
              <div 
                className="w-full h-full opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 8px)'
                }}
              />
            </div>

            {/* Main Portrait Card with subtle 4px lift on hover */}
            <div className="relative z-10 rounded-[26px] overflow-hidden bg-white shadow-2xl border border-gray-200/80 group hover:-translate-y-1 transition-all duration-500">
              
              {/* Blueprint Valve Sketch Behind Person */}
              <div className="absolute top-4 right-4 w-48 h-48 opacity-[0.06] pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-black">
                  <circle cx="50" cy="50" r="40" strokeWidth="1.5" strokeDasharray="3 3" />
                  <rect x="25" y="45" width="50" height="10" strokeWidth="1.5" />
                  <line x1="50" y1="10" x2="50" y2="45" strokeWidth="2" />
                  <line x1="30" y1="10" x2="70" y2="10" strokeWidth="3" />
                </svg>
              </div>

              {/* Portrait Image */}
              <div className="w-full h-[480px] sm:h-[560px] lg:h-[620px] xl:h-[650px] overflow-hidden bg-[#ECEEF2] flex items-center justify-center">
                <img
                  src="/images/gaurav-dalal-real.jpg"
                  alt="Gaurav Dalal - Promoter & Managing Director"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Director Identity Card */}
              <div
                className={`absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-[#111418] rounded-[14px] p-3.5 sm:p-4 shadow-2xl border-l-4 border-[#D71920] z-20 flex items-center space-x-3.5 backdrop-blur-xs transform-gpu transition-all duration-700 delay-300 ease-apple ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-red-950/60 text-[#D71920] flex items-center justify-center flex-shrink-0 border border-red-900/50">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
                    Gaurav Dalal
                  </h4>
                  <p className="font-poppins font-medium text-[10.5px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
                    Promoter & Managing Director
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: LEADERSHIP EDITORIAL MESSAGE (~62% width) */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center relative transform-gpu transition-all duration-700 delay-150 ease-apple ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            
            {/* Header Area */}
            <div className="mb-6">
              <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
                LEADERSHIP VISION
              </span>

              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.14] tracking-[-0.02em]">
                <span className="text-[#111418] block sm:inline">MANAGING DIRECTOR’S </span>
                <span className="text-[#D71920] block sm:inline">MESSAGE</span>
              </h2>

              <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />
            </div>

            {/* Leadership Quote Box */}
            <div
              className={`relative bg-white border border-[#E5E7EB] rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(17,20,24,0.03)] mb-6 transform-gpu transition-all duration-700 delay-200 ease-apple ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              
              {/* Large Red Opening Quote */}
              <span className="text-4xl sm:text-5xl text-[#D71920] font-serif leading-none absolute -top-3 left-4 select-none">
                “
              </span>

              {/* Quote Content */}
              <p className="font-poppins font-semibold text-sm sm:text-[15.5px] lg:text-[16.5px] text-[#1F2937] leading-relaxed pt-2 px-1">
                RAPPID Valves, founded in 2002 & commenced operations in 2007 by Mr. Gaurav Dalal has become a leading technology company known for its innovative and groundbreaking products manufactured for Marine & other diverse industries. At the helm of this renowned organization is its CEO, a visionary leader who possesses exceptional sales expertise, a profound understanding of technology, and a strong growth vision for the company. CEO's sales acumen, the company's technological advancements, and their ambitious growth vision for the organization.
              </p>

              {/* Red Closing Quote */}
              <span className="text-4xl sm:text-5xl text-[#D71920] font-serif leading-none absolute -bottom-6 right-4 select-none">
                ”
              </span>
            </div>

            {/* Company Vision & Engineering Editorial Narrative */}
            <div className="space-y-4 text-[#4B5563] font-poppins text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mb-8">
              <p>
                Since our inception, RAPPID Valves has been driven by a relentless focus on engineering excellence, precision manufacturing, and customer-first execution. What started as an ambitious manufacturing venture has grown into a trusted partner for India's premier naval defense dockyards, global marine fleets, and critical process industries.
              </p>
              <p>
                We remain committed to building long-term partnerships through transparency, technical capability, and uncompromising standards. As we continue expanding our footprint worldwide, our core mission remains unchanged: delivering zero-compromise flow control engineering that our clients can depend on in the most critical environments.
              </p>
            </div>

            {/* Director Signature & Technical Mark Row */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200/80">
              
              {/* Left: Signature & Title */}
              <div>
                <div className="mb-2">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#111418] font-bold tracking-wide select-none">
                    Gaurav Dalal
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-poppins font-bold text-[11px] sm:text-xs text-[#D71920] tracking-wider uppercase">
                    PROMOTER & MANAGING DIRECTOR
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="font-poppins text-[11px] text-gray-500 uppercase tracking-wider">
                    RAPPID VALVES (INDIA) LTD.
                  </span>
                </div>
              </div>

              {/* Right: Circular Technical Leadership Mark */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                {/* Rotating Outer Track */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 animate-spin-slow" />
                
                {/* Center Badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-200 flex flex-col items-center justify-center text-center p-1">
                  <span className="text-[10px] text-[#D71920]">✦</span>
                  <span className="font-poppins font-extrabold text-[6.5px] sm:text-[7px] tracking-wider text-[#111418] uppercase leading-tight">
                    LEADERSHIP
                  </span>
                  <span className="font-poppins font-bold text-[6.5px] tracking-[0.12em] text-gray-500 uppercase">
                    COMMITMENT
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
