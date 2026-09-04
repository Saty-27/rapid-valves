import React, { useState } from 'react';
import { ArrowRight, Shield, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductItem {
  id: string;
  num: string;
  name: string[];
  type: string;
  image: string;
  pressure: string;
  sizeRange: string;
  application: string;
  configuration: string;
  standards: string;
  materials: string;
  description: string;
}

interface ProductsSectionProps {
  onSelectProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const products: ProductItem[] = [
    {
      id: "gate",
      num: "01",
      name: ["GATE", "VALVES"],
      type: "WEDGE / PARALLEL SLIDE",
      image: "/images/card-gate-valve.jpg",
      pressure: "PN 10 – PN 40 / Class 150–2500",
      sizeRange: "DN 50 – DN 2000 (2\"–80\")",
      application: "Marine / Industrial",
      configuration: "Manual / Actuated",
      standards: "API 600, BS 1414, ISO 10434",
      materials: "WCB, CF8M, Duplex, Super Duplex, Monel, Inconel",
      description: "Heavy-duty bi-directional isolation gate valves engineered for low pressure drop and full bore laminar flow in high-temperature steam, marine pipelines, and hydrocarbon lines."
    },
    {
      id: "globe",
      num: "02",
      name: ["GLOBE", "VALVES"],
      type: "STRAIGHT / ANGLE",
      image: "/images/card-globe-valve.jpg",
      pressure: "PN 10 – PN 40 / Class 150–2500",
      sizeRange: "DN 15 – DN 600 (1/2\"–24\")",
      application: "Marine / Industrial",
      configuration: "Manual / Actuated",
      standards: "BS 1873, API 623, ASME B16.34",
      materials: "Cast Carbon Steel, Forged F316, Hastelloy, Titanium",
      description: "Engineered for precise throttling, fluid regulation, and tight shutoff under severe cavitation and thermal cyclic operating conditions in marine and process industries."
    },
    {
      id: "check",
      num: "03",
      name: ["CHECK", "VALVES"],
      type: "DUAL PLATE / SWING / NON-RETURN",
      image: "/images/card-check-valve.jpg",
      pressure: "PN 10 – PN 40 / Class 150–2500",
      sizeRange: "DN 15 – DN 1200 (1/2\"–48\")",
      application: "Marine / Industrial",
      configuration: "Non-Return Flow",
      standards: "API 594, BS 1868, ASME B16.34",
      materials: "WCB, Bronze, Super Duplex, Alloy 20",
      description: "Critical backflow prevention valves preventing water hammer, surge reversals, and pump damage in critical high-velocity marine ballast and industrial cooling systems."
    },
    {
      id: "ball",
      num: "04",
      name: ["BALL", "VALVES"],
      type: "FLOATING / TRUNNION MOUNTED",
      image: "/images/card-ball-valve.jpg",
      pressure: "PN 10 – PN 100 / Class 150–2500",
      sizeRange: "DN 15 – DN 900 (1/2\"–36\")",
      application: "Marine / Industrial",
      configuration: "2-Way / 3-Way / 4-Way",
      standards: "API 6D, ISO 17292, BS 5351",
      materials: "A105, F316, Inconel 625, Hastelloy C",
      description: "Quarter-turn high-integrity bubble-tight shutoff ball valves certified firesafe to API 607 for extreme-pressure sour gas, hydrocarbons, and severe industrial chemicals."
    },
    {
      id: "butterfly",
      num: "05",
      name: ["BUTTERFLY", "VALVES"],
      type: "TRIPLE OFFSET / HIGH PERFORMANCE",
      image: "/images/card-butterfly-valve.jpg",
      pressure: "PN 10 – PN 40 / Class 150–600",
      sizeRange: "DN 50 – DN 2400 (2\"–96\")",
      application: "Marine / Industrial",
      configuration: "Wafer / Lugged / Flanged",
      standards: "API 609 Cat B, EN 593, ISO 10631",
      materials: "Ductile Iron, WCB, CF8M, Aluminium Bronze",
      description: "Low-torque zero-leakage bidirectional metal-seated triple offset butterfly valves delivering compact flow isolation across large-diameter sea lines and plant manifolds."
    },
    {
      id: "marine",
      num: "06",
      name: ["MARINE", "VALVES"],
      type: "NAVAL DEFENCE & SHIPBOARD",
      image: "/images/card-marine-valve.jpg",
      pressure: "PN 6 – PN 40 / Special Naval Classes",
      sizeRange: "DN 15 – DN 800 (1/2\"–32\")",
      application: "Defence / Shipbuilding",
      configuration: "Quick-Closing / Storm / Hose",
      standards: "JIS, DIN, BS, Naval Shock Def-Stan",
      materials: "Gunmetal, Nickel Aluminium Bronze (NAB), Monel",
      description: "Shock-qualified, non-magnetic, and corrosion-immune shipboard valves engineered specifically for Indian Navy destroyers, submarines, and commercial container vessels."
    }
  ];

  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);

  // Helper to render single product card
  const renderCard = (prod: ProductItem, idx: number) => (
    <div
      key={prod.id}
      onClick={() => onSelectProduct(prod.name.join(' '))}
      style={{
        transitionDelay: isVisible ? `${(idx % 3) * 110 + (idx >= 3 ? 180 : 0)}ms` : '0ms',
      }}
      className={`group relative h-[390px] sm:h-[415px] lg:h-[435px] rounded-[16px] lg:rounded-[18px] overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-700 ease-apple hover:-translate-y-2 cursor-pointer bg-white transform-gpu ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
      }`}
    >
      {/* ========================================================
          RIGHT SIDE: LARGE PRODUCT PHOTOGRAPHY
         ======================================================== */}
      <div className="absolute top-0 right-0 bottom-0 w-[58%] sm:w-[62%] h-full overflow-hidden bg-gray-50 pointer-events-none">
        <img
          src={prod.image}
          alt={prod.name.join(' ')}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Soft Right vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* ========================================================
          DIAGONAL WHITE OVERLAY & RED ACCENT LINE
         ======================================================== */}
      <div
        className="absolute inset-0 z-10 bg-white pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 65% 0, 52% 100%, 0 100%)'
        }}
      />

      {/* Subtle Hairline Red Accent along the diagonal cut with SVG draw effect */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1="65"
          y1="0"
          x2="52"
          y2="100"
          stroke="#D71920"
          strokeWidth="0.8"
          strokeDasharray="120"
          strokeDashoffset={isVisible ? 0 : 120}
          strokeLinecap="round"
          className="opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-apple"
        />
      </svg>

      {/* ========================================================
          LEFT SIDE: INFORMATION PANEL CONTENT
         ======================================================== */}
      <div className="relative z-30 w-full max-w-[55%] sm:max-w-[51%] p-5 sm:p-6 pr-3 sm:pr-4 flex flex-col justify-between h-full pointer-events-none">
        <div>
          {/* Product Number: Pops in first */}
          <div
            className={`font-poppins font-bold text-[28px] sm:text-[32px] text-[#D71920] leading-none mb-2.5 transform-gpu transition-all duration-500 ease-apple ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'
            }`}
          >
            {prod.num}
          </div>

          {/* Product Title: Poppins 800 ExtraBold */}
          <h3 className="font-poppins font-extrabold text-[23px] sm:text-[26px] lg:text-[28px] leading-[0.98] tracking-[-0.025em] text-[#111418] group-hover:text-[#D71920] transition-colors mb-1.5">
            {prod.name.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h3>

          {/* Subtitle */}
          <p className="font-poppins font-medium text-[9.5px] sm:text-[10.5px] text-[#4B5563] uppercase tracking-wider mb-2 leading-tight">
            {prod.type}
          </p>

          {/* Red Detail Line */}
          <div className="w-8 h-[2px] bg-[#D71920] mb-3 sm:mb-3.5 group-hover:w-12 transition-all duration-300" />

          {/* Technical Specifications: Spacious, un-congested layout with zero word collisions */}
          <div className="space-y-2 text-[11px] sm:text-[11.5px] font-poppins pt-0.5">
            <div className="flex items-baseline justify-between gap-3 border-b border-gray-100/90 pb-1.5">
              <span className="font-medium text-[#6B7280] text-[10px] sm:text-[10.5px] uppercase tracking-wider flex-shrink-0">
                Pressure
              </span>
              <span className="font-semibold text-[#111418] text-right">
                {prod.pressure.split('/')[0].trim()}
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-3 border-b border-gray-100/90 pb-1.5">
              <span className="font-medium text-[#6B7280] text-[10px] sm:text-[10.5px] uppercase tracking-wider flex-shrink-0">
                Size Range
              </span>
              <span className="font-semibold text-[#111418] text-right">
                {prod.sizeRange.split('(')[0].trim()}
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-3 border-b border-gray-100/90 pb-1.5">
              <span className="font-medium text-[#6B7280] text-[10px] sm:text-[10.5px] uppercase tracking-wider flex-shrink-0">
                Application
              </span>
              <span className="font-semibold text-[#111418] text-right leading-tight">
                {prod.application}
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-3 pb-0.5">
              <span className="font-medium text-[#6B7280] text-[10px] sm:text-[10.5px] uppercase tracking-wider flex-shrink-0">
                Configuration
              </span>
              <span className="font-semibold text-[#111418] text-right leading-tight">
                {prod.configuration}
              </span>
            </div>
          </div>
        </div>

        {/* CTA: EXPLORE SYSTEM → */}
        <div className="pt-2">
          <span className="inline-flex items-center space-x-1.5 font-poppins font-bold text-[11px] sm:text-[12px] tracking-[0.06em] text-[#D71920] uppercase group-hover:text-[#B8141A]">
            <span>EXPLORE SYSTEM</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 lg:py-28 bg-white select-none font-poppins overflow-hidden"
    >
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14">
        
        {/* ========================================================
            HEADER ROW: Composition matching user's reference
           ======================================================== */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 lg:mb-16 pb-8 border-b border-gray-100 transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              OUR PRODUCTS
            </span>
            <h2 className="font-poppins font-extrabold text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.95] tracking-[-0.04em]">
              <span className="text-[#111418] block">ENGINEERED</span>
              <span className="text-[#D71920] block">FOR CONTROL</span>
            </h2>
          </div>

          {/* Middle Column: 06 SYSTEMS Info Block with Vertical Divider */}
          <div className="lg:col-span-3 lg:border-l lg:border-gray-200 lg:pl-8">
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="font-poppins font-extrabold text-[28px] sm:text-[32px] text-[#D71920] leading-none">
                06
              </span>
              <span className="font-poppins font-bold text-[14px] uppercase tracking-[0.14em] text-[#111418]">
                SYSTEMS
              </span>
            </div>
            <p className="font-poppins text-[#5B5F66] text-[13px] sm:text-[14px] leading-relaxed max-w-xs">
              Precision valve systems engineered for reliability, safety, and performance in the harshest marine and industrial environments.
            </p>
          </div>

          {/* Right Column: Large Cinematic Maritime Warship (~40% width) */}
          <div className="lg:col-span-5 relative h-[180px] sm:h-[220px] lg:h-[240px] rounded-[14px] overflow-hidden">
            <img
              src="/images/about-card-naval.jpg"
              alt="Marine Vessel Operating in Heavy Seas"
              className="w-full h-full object-cover object-center filter saturate-[1.05]"
            />
            {/* Soft fade into white background toward the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent w-full" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/40 to-transparent" />
          </div>

        </div>

        {/* ========================================================
            ROW 1: 01 GATE, 02 GLOBE, 03 CHECK VALVES
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {firstRow.map((prod, idx) => renderCard(prod, idx))}
        </div>

        {/* ========================================================
            CENTER STATEMENT BANNER
            "CONTROL HAS NO ROOM FOR COMPROMISE."
           ======================================================== */}
        <div className="relative my-8 py-7 px-8 bg-white border border-[#E5E7EB] rounded-[14px] overflow-hidden shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Subtle Technical linework in background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" className="w-full h-full text-black">
              <circle cx="100" cy="50" r="40" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="200" y2="50" strokeWidth="1" />
              <line x1="100" y1="0" x2="100" y2="100" strokeWidth="1" />
            </svg>
          </div>

          {/* Left: Shield Badge */}
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 rounded-[8px] bg-[#D71920] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Shield size={22} />
            </div>
            <div>
              <div className="font-poppins font-bold text-[11px] uppercase tracking-[0.12em] text-[#111418]">
                BUILT FOR CRITICAL APPLICATIONS.
              </div>
              <div className="font-poppins font-semibold text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">
                ENGINEERED TO PERFORM.
              </div>
            </div>
          </div>

          {/* Center: Main Statement */}
          <div className="text-center md:text-left">
            <h4 className="font-poppins font-extrabold text-[22px] sm:text-[26px] leading-tight">
              <span className="text-[#111418]">CONTROL HAS NO ROOM </span>
              <span className="text-[#D71920]">FOR COMPROMISE.</span>
            </h4>
          </div>

          {/* Right: Micro Statement */}
          <div className="text-center md:text-right">
            <p className="font-poppins text-[12px] text-[#6B7280] leading-snug">
              Engineered for critical applications.<br />
              <strong className="text-[#111418] font-medium">Built to perform. Always.</strong>
            </p>
          </div>

        </div>

        {/* ========================================================
            ROW 2: 04 BALL, 05 BUTTERFLY, 06 MARINE CONTROL VALVES
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondRow.map((prod, idx) => renderCard(prod, idx + 3))}
        </div>

      </div>

      {/* ========================================================
          FULL TECHNICAL SPECIFICATIONS MODAL
         ======================================================== */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[16px] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border-t-4 border-[#D71920] animate-scaleIn">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#111418] text-xl font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <div className="w-36 h-36 bg-gray-50 border border-gray-100 rounded-[12px] overflow-hidden flex items-center justify-center flex-shrink-0 shadow-xs">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.name.join(' ')}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-poppins font-bold uppercase tracking-wider text-[#D71920] bg-red-50 px-2.5 py-1 rounded-[4px]">
                  {selectedProductModal.num} • {selectedProductModal.type}
                </span>
                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl uppercase text-[#111418] mt-2 leading-none">
                  {selectedProductModal.name.join(' ')}
                </h3>
                <p className="font-poppins text-xs text-[#5B5F66] mt-2 leading-relaxed">
                  {selectedProductModal.description}
                </p>
              </div>
            </div>

            {/* Spec Table */}
            <div className="bg-gray-50 rounded-[10px] p-4 border border-gray-200 text-xs space-y-2.5 mb-6 font-poppins">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-[#6B7280]">Size Range:</span>
                <span className="font-bold text-[#111418]">{selectedProductModal.sizeRange}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-[#6B7280]">Pressure Rating:</span>
                <span className="font-bold text-[#111418]">{selectedProductModal.pressure}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-[#6B7280]">Design Standards:</span>
                <span className="font-bold text-[#111418]">{selectedProductModal.standards}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#6B7280]">Standard Metallurgy:</span>
                <span className="font-bold text-[#111418]">{selectedProductModal.materials}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProductModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-poppins font-bold text-[#6B7280] hover:text-[#111418] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const pName = selectedProductModal.name.join(' ');
                  setSelectedProductModal(null);
                  onSelectProduct(pName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D71920] hover:bg-[#B8141A] text-white text-xs font-poppins font-bold uppercase tracking-wider px-6 py-3 rounded-[6px] transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Quotation for {selectedProductModal.name.join(' ')}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
