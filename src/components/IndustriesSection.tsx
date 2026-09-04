import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface IndustryItem {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  description: string;
  applications: string[];
}

export const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // The exact 10 industries with authentic industrial engineering photography
  const industries: IndustryItem[] = [
    {
      id: "shipbuilding",
      name: "Shipbuilding & Marine",
      image: "/images/ind-shipbuilding-real.jpg",
      subtitle: "Commercial vessels, container carriers & shipyards",
      description: "High-integrity marine valves and flow control equipment engineered to withstand severe seawater corrosion and demanding conditions at sea.",
      applications: ["Sea water cooling lines", "Bilge & ballast systems", "Cargo oil handling", "Fuel oil bunkering"]
    },
    {
      id: "defence",
      name: "Defence & Naval",
      image: "/images/ind-defence-real.jpg",
      subtitle: "Naval frigates, destroyers & submarines",
      description: "Naval shock-qualified and vibration-certified valves engineered for frontline naval frigates, destroyers, and submarine hull penetration.",
      applications: ["High-shock qualified valves", "Submarine hull penetration", "Fire main systems", "Propulsion cooling circuits"]
    },
    {
      id: "oilgas",
      name: "Oil & Gas",
      image: "/images/ind-oilgas-real.jpg",
      subtitle: "Offshore rigs, FPSOs, refineries & pipelines",
      description: "Severe-service forged valves for high-pressure hydrocarbon extraction, offshore drilling platforms, FPSOs, and critical pipeline transmission.",
      applications: ["Wellhead manifold isolation", "Hydrocarbon transmission", "Sour gas H2S duty", "Cryogenic LNG handling"]
    },
    {
      id: "steel",
      name: "Steel Industry",
      image: "/images/ind-steel-real.jpg",
      subtitle: "Blast furnaces, rolling mills & coking plants",
      description: "Extreme-temperature blast furnace isolation and abrasive cooling water valves engineered for continuous heavy industrial cycles.",
      applications: ["High-temperature blast air", "Cooling water circulation", "Oxygen lance service", "Slag granulated slurry"]
    },
    {
      id: "water",
      name: "Water Treatment",
      image: "/images/ind-water-real.jpg",
      subtitle: "Municipal water, desalination & effluent plants",
      description: "High-pressure reverse osmosis, desalination, and municipal distribution valves delivering zero-leakage fluid isolation.",
      applications: ["Reverse osmosis high pressure", "Intake isolation gates", "Potable water distribution", "Sludge regulation"]
    },
    {
      id: "distillery",
      name: "Distillery",
      image: "/images/ind-distillery-real.jpg",
      subtitle: "Ethanol, grain processing & fermentation",
      description: "Sanitary CIP-compliant and high-temperature steam regulation valves for grain ethanol, brewing, and distillation systems.",
      applications: ["Steam header manifolds", "Wash column regulation", "Spent wash evaporators", "Sanitary CIP routing"]
    },
    {
      id: "power",
      name: "Power Generation",
      image: "/images/ind-power-real.jpg",
      subtitle: "Thermal, nuclear & combined-cycle plants",
      description: "Engineered boiler feedwater, superheated steam, and turbine bypass control valves rated up to Class 600 / PN900.",
      applications: ["Boiler feedwater control", "Superheated steam valves", "Turbine bypass systems", "Condenser cooling loop"]
    },
    {
      id: "chemical",
      name: "Chemical Industry",
      image: "/images/industry-chemical.jpg",
      subtitle: "Fertilizers, polymers & specialty acids",
      description: "Special alloy and acid-resistant valves engineered to safely control hazardous, toxic, and highly exothermic chemical processes.",
      applications: ["Corrosive acid isolation", "Exothermic reactor valves", "Chlor-alkali services", "Hazardous solvent transfer"]
    },
    {
      id: "pharma",
      name: "Pharma",
      image: "/images/ind-pharma-real.jpg",
      subtitle: "Active pharmaceutical ingredients (API) & biotech",
      description: "Ultra-clean stainless steel and sanitary steam valves designed to meet zero-deadleg sterile bioprocess requirements.",
      applications: ["High-purity stainless valves", "Clean steam sterilization", "WFI water loops", "Zero-deadleg designs"]
    },
    {
      id: "renewable",
      name: "Renewable Energy",
      image: "/images/industry-renewable.jpg",
      subtitle: "Green hydrogen, solar thermal & biomass",
      description: "Specialized flow control valves for green hydrogen electrolyzers, solar thermal molten salt loops, and geothermal steam piping.",
      applications: ["Electrolyzer gas manifolds", "Molten salt heat transfer", "Biofuel refining loops", "Geothermal steam piping"]
    }
  ];

  return (
    <section
      id="industries"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-[#F7F8FA] border-t border-b border-gray-200 select-none font-poppins"
    >
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14">
        
        {/* ========================================================
            HEADER ROW: Standardized Design System
           ======================================================== */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              SECTORS & APPLICATIONS
            </span>

            {/* Main Headline */}
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] leading-[1.0] tracking-[-0.035em]">
              <span className="text-[#111418]">INDUSTRIES </span>
              <span className="text-[#D71920]">WE SERVE</span>
            </h2>

            {/* Red Accent Line */}
            <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />

            {/* Supporting Copy */}
            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              Engineered flow control systems custom-tailored for critical reliability across marine, energy, defence and industrial processing plants worldwide.
            </p>
          </div>

          <div className="lg:pb-3">
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 font-poppins font-bold text-[12px] uppercase tracking-[0.06em] text-[#D71920] hover:text-[#B8141A] transition-colors group"
            >
              <span className="border-b border-transparent group-hover:border-[#D71920] transition-all">VIEW ALL INDUSTRIES</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* ========================================================
            5-COLUMN × 2-ROW GRID (10 TILES TOTAL)
            Sequential 65ms staggered reveal + micro hover elevation
           ======================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              onClick={() => setActiveIndustry(ind)}
              style={{
                transitionDelay: isVisible ? `${idx * 65}ms` : '0ms',
              }}
              className={`group relative h-64 sm:h-72 lg:h-[290px] xl:h-[310px] rounded-[16px] lg:rounded-[18px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-600 ease-apple hover:-translate-y-2 cursor-pointer bg-[#0B0F14] transform-gpu ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-[0.97]'
              }`}
            >
              {/* Photo matching reference with smooth scale zoom */}
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Cinematic Dark Gradient for High Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:from-black/98 group-hover:via-black/55 transition-all duration-300" />

              {/* Red Accent line on top on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D71920] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Hover icon top-right */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 hover:bg-[#D71920] backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm group-hover:scale-105">
                <ArrowUpRight size={16} />
              </div>

              {/* Caption Bottom: Subtle upward float on hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end z-10 transform-gpu transition-transform duration-300 group-hover:-translate-y-1">
                {/* Title */}
                <h3 className="text-white font-poppins font-bold text-base sm:text-lg lg:text-[19px] leading-snug group-hover:text-red-200 transition-colors drop-shadow-sm">
                  {ind.name}
                </h3>

                {/* Subtitle with smooth popup fade */}
                <p className="text-[11.5px] sm:text-[12px] text-gray-200 font-poppins line-clamp-2 mt-1 leading-snug drop-shadow-xs opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                  {ind.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================
          POPUP MODAL WITH APPLICATION DETAILS & INQUIRY CTA
         ======================================================== */}
      {activeIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[16px] max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-scaleIn">
            <div className="relative h-56 bg-[#0B0F14]">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <button
                onClick={() => setActiveIndustry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] block mb-1">
                  SECTOR SPECIFICATIONS
                </span>
                <h3 className="text-white font-poppins font-bold text-2xl leading-tight">
                  {activeIndustry.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[#5B5F66] text-sm leading-relaxed mb-6 font-poppins">
                {activeIndustry.description}
              </p>

              <div className="mb-6">
                <div className="text-[11px] font-poppins font-bold uppercase tracking-[0.14em] text-[#171A1F] mb-3">
                  Key Valve Applications:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {activeIndustry.applications.map((app, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-[#33373E]">
                      <CheckCircle2 size={14} className="text-[#D71920] flex-shrink-0" />
                      <span className="font-poppins font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setActiveIndustry(null)}
                  className="px-4 py-2 text-xs font-poppins font-semibold text-[#5B5F66] hover:text-[#171A1F]"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveIndustry(null)}
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#D71920] hover:bg-[#B8141A] text-white text-xs font-poppins font-bold uppercase tracking-wider rounded-[6px] transition-colors shadow-sm"
                >
                  <span>Request Sector Specs</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
