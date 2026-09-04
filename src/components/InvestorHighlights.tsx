import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Globe2,
  Building2,
  Handshake,
  Cpu,
  Factory,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react';

interface InvestorHighlightsProps {
  onOpenContact?: () => void;
}

export const InvestorHighlights: React.FC<InvestorHighlightsProps> = ({ onOpenContact }) => {
  const [activeMarket, setActiveMarket] = useState<string>("UAE");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Counter animations state
  const [counts, setCounts] = useState({ exp: 0, valves: 0, sqft: 0, regions: 0, countries: 0, partners: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1400; // ms
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              exp: Math.floor(easeOut * 20),
              valves: Math.floor(easeOut * 4500),
              sqft: Math.floor(easeOut * 45000),
              regions: Math.floor(easeOut * 8),
              countries: Math.floor(easeOut * 100),
              partners: Math.floor(easeOut * 500),
            });

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts({
                exp: 20,
                valves: 4500,
                sqft: 45000,
                regions: 8,
                countries: 100,
                partners: 500,
              });
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Revenue Bars Data (FY20 -> FY25)
  const chartData = [
    { year: "FY20", val: 32, height: "35%", color: "bg-[#9CA3AF]" },
    { year: "FY21", val: 45, height: "48%", color: "bg-[#6B7280]" },
    { year: "FY22", val: 58, height: "60%", color: "bg-[#4B5563]" },
    { year: "FY23", val: 78, height: "75%", color: "bg-[#374151]" },
    { year: "FY24", val: 98, height: "88%", color: "bg-[#991B1B]" },
    { year: "FY25", val: 124, height: "100%", color: "bg-[#D71920]" },
  ];

  // Global Map Destinations & Great-Circle Routes from India HQ (x: 620, y: 195 in a 1000x420 viewBox)
  const mapNodes = [
    { id: "UAE", name: "UAE", label: "MARINE & INDUSTRIAL", flag: "🇦🇪", x: 550, y: 185, path: "M 620 195 Q 585 165, 550 185", market: "Middle East Hub (Dubai & Abu Dhabi)" },
    { id: "Saudi Arabia", name: "Saudi Arabia", label: "OIL & GAS EXTRACTION", flag: "🇸🇦", x: 520, y: 190, path: "M 620 195 Q 570 165, 520 190", market: "Aramco & Petrochemical Facilities" },
    { id: "Europe", name: "Europe", label: "ENGINEERING PARTNERS", flag: "🇪🇺", x: 440, y: 110, path: "M 620 195 Q 530 85, 440 110", market: "Rotterdam & Hamburg Marine Spares" },
    { id: "USA", name: "USA", label: "GLOBAL MARKET", flag: "🇺🇸", x: 180, y: 145, path: "M 620 195 Q 390 35, 180 145", market: "Gulf Coast Offshore & Naval Supply" },
    { id: "Singapore", name: "Singapore", label: "MARITIME NETWORK", flag: "🇸🇬", x: 715, y: 235, path: "M 620 195 Q 675 205, 715 235", market: "Southeast Asia Bunkering & Shipyards" },
    { id: "Sri Lanka", name: "Sri Lanka", label: "SHIPBUILDING SUPPLY", flag: "🇱🇰", x: 630, y: 240, path: "M 620 195 Q 628 215, 630 240", market: "Colombo Dockyard Auxiliaries" },
    { id: "Australia", name: "Australia", label: "GLOBAL DELIVERY", flag: "🇦🇺", x: 820, y: 330, path: "M 620 195 Q 735 295, 820 330", market: "Naval & Industrial Resource Projects" },
    { id: "Africa", name: "Africa", label: "OFFSHORE ENERGY", flag: "🌍", x: 480, y: 310, path: "M 620 195 Q 540 265, 480 310", market: "Nigeria & Offshore Oil Fields" },
  ];

  const keyMarkets = [
    { name: "India (HQ)", flag: "🇮🇳", isHQ: true },
    { name: "USA", flag: "🇺🇸" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Africa", flag: "🌍" },
  ];

  return (
    <section ref={sectionRef} id="investors" className="w-full bg-white select-none font-poppins relative overflow-hidden">
      
      {/* =========================================================================
          PART 1: INVESTOR HIGHLIGHTS (STEP 1, 2, 3)
         ========================================================================= */}
      <div className="py-20 lg:py-24 max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative">
        
        {/* Subtle Valve Blueprint Watermark on Right */}
        <div className="absolute right-4 top-12 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-black">
            <circle cx="100" cy="100" r="75" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="40" strokeWidth="2" />
            <line x1="20" y1="100" x2="180" y2="100" strokeWidth="1.5" />
            <line x1="100" y1="20" x2="100" y2="180" strokeWidth="1.5" />
            <rect x="75" y="35" width="50" height="20" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Top Grid: Heading + Metrics + Chart + Credibility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Col 1: Heading & Intro (~4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
                INVESTOR HIGHLIGHTS
              </span>

              <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] leading-[1.14] tracking-[-0.02em]">
                <span className="text-[#111418] block">STRONG PERFORMANCE.</span>
                <span className="text-[#D71920] block">SUSTAINABLE GROWTH.</span>
              </h2>

              <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />
            </div>

            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-md">
              Delivering consistent value backed by scale, experience and a clear vision for high-margin marine and critical defence markets.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center space-x-2 bg-[#D71920] hover:bg-[#B8141A] text-white text-[12px] font-poppins font-bold uppercase tracking-wider px-6 py-3 rounded-[6px] shadow-xs hover:shadow transition-all group cursor-pointer"
              >
                <span>INVESTOR RELATIONS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Col 2: Performance Metrics (~2.5 cols) */}
          <div className="lg:col-span-3 space-y-6 lg:border-l lg:border-gray-200 lg:pl-8">
            
            {/* Metric 1 */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-[8px] bg-red-50 border border-red-100 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[28px] sm:text-[32px] text-[#D71920] leading-none">
                  {counts.exp}+
                </div>
                <div className="font-poppins font-semibold text-[11px] uppercase tracking-wider text-[#3F4448] mt-1">
                  YEARS OF EXPERIENCE
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-[8px] bg-red-50 border border-red-100 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Cpu size={20} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[28px] sm:text-[32px] text-[#D71920] leading-none">
                  {counts.valves.toLocaleString()}+
                </div>
                <div className="font-poppins font-semibold text-[11px] uppercase tracking-wider text-[#3F4448] mt-1">
                  VALVES PER MONTH
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-[8px] bg-red-50 border border-red-100 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Factory size={20} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[28px] sm:text-[32px] text-[#D71920] leading-none">
                  {counts.sqft.toLocaleString()}+
                </div>
                <div className="font-poppins font-semibold text-[11px] uppercase tracking-wider text-[#3F4448] mt-1">
                  SQ.FT. FACILITY
                </div>
              </div>
            </div>

          </div>

          {/* Col 3: Revenue Growth Bar Chart (~3.5 cols) */}
          <div className="lg:col-span-3 bg-white p-5 sm:p-6 rounded-[14px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(17,20,24,0.04)]">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
              <span className="font-poppins font-bold text-[12px] uppercase tracking-wider text-[#111418]">
                REVENUE GROWTH (₹ CR)
              </span>
              <span className="font-poppins font-extrabold text-[12px] tracking-wider text-[#D71920]">
                CAGR +26%
              </span>
            </div>

            {/* Chart Graphic */}
            <div className="h-40 flex items-end justify-between gap-2 pt-4 px-2 border-b border-gray-200">
              {chartData.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <span className="text-[10px] font-poppins font-bold text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                    {bar.val}
                  </span>
                  <div
                    style={{
                      height: hasAnimated ? bar.height : "0%",
                      transitionDelay: hasAnimated ? `${idx * 130}ms` : '0ms'
                    }}
                    className={`w-full max-w-[28px] ${bar.color} rounded-t-[3px] transition-all duration-800 ease-apple`}
                  />
                  <span className="text-[10px] font-poppins font-semibold text-[#6B7280] mt-2">
                    {bar.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Corporate Export & Footprint Stats (~1.5 cols) */}
          <div className="lg:col-span-2 space-y-5 lg:border-l lg:border-gray-200 lg:pl-6">
            <div>
              <div className="flex items-center space-x-2 text-[#D71920] mb-1">
                <Globe2 size={16} />
                <span className="font-poppins font-bold text-[13px] text-[#111418]">Export Business 3%+</span>
              </div>
              <p className="text-[11px] font-poppins text-[#6B7280]">Growing overseas reach</p>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#D71920] mb-1">
                <Users size={16} />
                <span className="font-poppins font-bold text-[13px] text-[#111418]">Customers 100+</span>
              </div>
              <p className="text-[11px] font-poppins text-[#6B7280]">Marquee PSU & defence clients</p>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[#D71920] mb-1">
                <TrendingUp size={16} />
                <span className="font-poppins font-bold text-[13px] text-[#111418]">Countries Served 12+</span>
              </div>
              <p className="text-[11px] font-poppins text-[#6B7280]">Global operational footprint</p>
            </div>
          </div>

        </div>

      </div>

      {/* FULL-WIDTH CLEAN DIVIDER */}
      <div className="w-full border-t border-gray-200" />

      {/* =========================================================================
          PART 2: GLOBAL PRESENCE & REAL WORLD MAP (STEP 4 TO 11)
         ========================================================================= */}
      <div className="py-20 lg:py-24 max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              GLOBAL PRESENCE
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#111418] leading-[1.14] tracking-[-0.02em]">
              DELIVERING RELIABILITY<br />
              <span className="text-[#111418]">ACROSS THE WORLD</span>
            </h2>
            <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />
            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed">
              Building partnerships worldwide with critical installations across marine, defence, industrial and energy sectors.
            </p>
          </div>

          <div className="md:pb-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 text-[12px] font-poppins font-bold uppercase tracking-wider text-[#D71920] hover:text-[#B8141A] transition-colors group cursor-pointer"
            >
              <span>Explore Global Reach</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Global Stats + World Map + Key Markets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3 Technical Stats on Left (Col 1-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Globe2 size={22} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[26px] text-[#D71920] leading-none">
                  {counts.regions}+
                </div>
                <div className="font-poppins font-bold text-[12px] uppercase text-[#111418] mt-0.5">
                  REGIONS
                </div>
                <div className="text-[11px] text-[#6B7280]">Worldwide Presence</div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Building2 size={22} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[26px] text-[#D71920] leading-none">
                  {counts.countries}+
                </div>
                <div className="font-poppins font-bold text-[12px] uppercase text-[#111418] mt-0.5">
                  COUNTRIES
                </div>
                <div className="text-[11px] text-[#6B7280]">Trusted Globally</div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-[#D71920] flex-shrink-0">
                <Handshake size={22} />
              </div>
              <div>
                <div className="font-poppins font-extrabold text-[26px] text-[#D71920] leading-none">
                  {counts.partners}+
                </div>
                <div className="font-poppins font-bold text-[12px] uppercase text-[#111418] mt-0.5">
                  PARTNERS
                </div>
                <div className="text-[11px] text-[#6B7280]">Strong Global Network</div>
              </div>
            </div>
          </div>

          {/* REAL GEOGRAPHIC WORLD MAP (Col 4-10 ~ 65% width) */}
          <div className="lg:col-span-6 xl:col-span-6 relative rounded-[16px] overflow-hidden border border-gray-100 bg-[#FAFAFA] min-h-[360px] sm:min-h-[420px] flex items-center justify-center shadow-xs">
            
            {/* Real World Geographic Map Image */}
            <img
              src="/images/world-map-clean.png"
              alt="Real World Geographic Map"
              className="absolute inset-0 w-full h-full object-contain filter contrast-[1.05] opacity-85 pointer-events-none"
            />

            {/* Interactive SVG Great Circle Arc Routes from India HQ (viewBox 1000 x 420) */}
            <svg
              viewBox="0 0 1000 420"
              className="absolute inset-0 w-full h-full pointer-events-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D71920" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D71920" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Dynamic Great Circle Curved Routes radiating out from India HQ (620, 195) */}
              {mapNodes.map((node, idx) => {
                const isSelected = activeMarket === node.id || hoveredNode === node.id;
                return (
                  <path
                    key={node.id}
                    d={node.path}
                    fill="none"
                    stroke="#D71920"
                    strokeWidth={isSelected ? "2.2" : "1.0"}
                    strokeDasharray="350"
                    strokeDashoffset={hasAnimated ? 0 : 350}
                    style={{
                      transition: `stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 110}ms, opacity 0.3s ease, stroke-width 0.3s ease`,
                    }}
                    className={`${
                      isSelected ? "opacity-100" : "opacity-35"
                    }`}
                  />
                );
              })}

              {/* Central India HQ Node (x: 620, y: 195) */}
              <g className="cursor-pointer" onClick={() => setActiveMarket("India (HQ)")}>
                <circle cx="620" cy="195" r="14" fill="#D71920" opacity="0.2" className="animate-map-pulse" />
                <circle cx="620" cy="195" r="8" fill="#D71920" opacity="0.35" />
                <circle cx="620" cy="195" r="4.5" fill="#D71920" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="620" y="214" textAnchor="middle" fill="#111418" fontSize="10" fontWeight="800" fontFamily="Poppins">
                  INDIA HQ
                </text>
              </g>

              {/* Destination Nodes */}
              {mapNodes.map((node, idx) => {
                const isSelected = activeMarket === node.id || hoveredNode === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveMarket(node.id)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      transition: `opacity 0.6s ease ${idx * 120 + 400}ms, transform 0.6s ease ${idx * 120 + 400}ms`,
                      opacity: hasAnimated ? 1 : 0,
                    }}
                  >
                    {/* Pulsing ring on active */}
                    {isSelected && (
                      <circle cx={node.x} cy={node.y} r="10" fill="#D71920" opacity="0.25" className="animate-map-pulse" />
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? "5" : "3.5"}
                      fill="#D71920"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      className="transition-all duration-200"
                    />

                    {/* Subtle label */}
                    <text
                      x={node.x}
                      y={node.y - 8}
                      textAnchor="middle"
                      fill={isSelected ? "#D71920" : "#4B5563"}
                      fontSize="9"
                      fontWeight={isSelected ? "700" : "500"}
                      fontFamily="Poppins"
                      className="transition-all"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Active Market Info Tooltip overlay in corner */}
            {activeMarket && (() => {
              const info = mapNodes.find((m) => m.id === activeMarket);
              if (!info) return null;
              return (
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-[6px] border border-gray-200 shadow-sm text-xs font-poppins z-20">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{info.flag}</span>
                    <strong className="text-[#111418] font-bold">{info.name}</strong>
                    <span className="text-[10px] text-[#D71920] font-semibold uppercase">{info.label}</span>
                  </div>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">{info.market}</p>
                </div>
              );
            })()}

          </div>

          {/* KEY MARKETS PANEL (Col 10-12 ~ 25% width) */}
          <div className="lg:col-span-3 xl:col-span-3 bg-white rounded-[16px] border border-[#E5E7EB] p-5 shadow-xs">
            <h4 className="font-poppins font-bold text-[13px] uppercase tracking-wider text-[#111418] pb-3 border-b border-gray-100 mb-3">
              KEY MARKETS
            </h4>

            <div className="space-y-2">
              {keyMarkets.map((m) => {
                const isActive = activeMarket === m.name;
                return (
                  <div
                    key={m.name}
                    onClick={() => setActiveMarket(m.name)}
                    className={`flex items-center justify-between p-2.5 rounded-[6px] cursor-pointer transition-all duration-200 text-xs font-poppins ${
                      isActive
                        ? "bg-red-50/70 border-l-4 border-[#D71920] text-[#111418] font-bold shadow-2xs"
                        : "hover:bg-gray-50 text-[#4B5563]"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-base leading-none">{m.flag}</span>
                      <span>{m.name}</span>
                    </div>
                    {m.isHQ && (
                      <span className="text-[9px] font-bold uppercase bg-[#D71920] text-white px-1.5 py-0.5 rounded-[3px]">
                        HQ
                      </span>
                    )}
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
