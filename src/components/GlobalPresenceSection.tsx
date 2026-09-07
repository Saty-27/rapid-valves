import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface GlobalPresenceProps {
  onExploreGlobal: () => void;
}

export const GlobalPresenceSection: React.FC<GlobalPresenceProps> = ({ onExploreGlobal }) => {
  const [activeLocation, setActiveLocation] = useState<string | null>("India");

  const locations = [
    { name: "India (HQ)", x: "68%", y: "48%", role: "Corporate HQ, Design & 45,000 Sq.Ft. Plant", flag: "🇮🇳" },
    { name: "USA", x: "22%", y: "36%", role: "North American Marine Supply & Distribution", flag: "🇺🇸" },
    { name: "UAE", x: "61%", y: "44%", role: "Middle East Oil & Gas Distribution", flag: "🇦🇪" },
    { name: "Sri Lanka", x: "69%", y: "56%", role: "Commercial Maritime Shipyard Partnerships", flag: "🇱🇰" },
    { name: "Nigeria", x: "50%", y: "54%", role: "West African Energy & Offshore Services", flag: "🇳🇬" },
    { name: "Singapore", x: "78%", y: "57%", role: "Southeast Asia Marine Hub & Bunkering", flag: "🇸🇬" },
    { name: "Europe", x: "51%", y: "30%", role: "Rotterdam & Hamburg Maritime Spares", flag: "🇪🇺" },
    { name: "Australia", x: "85%", y: "76%", role: "Resources & Naval Auxiliary Support", flag: "🇦🇺" },
  ];

  return (
    <section id="global-presence" className="py-20 bg-[#F7F8FA] border-t border-gray-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red block mb-1">
              GLOBAL PRESENCE
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-brand-charcoal uppercase tracking-tight">
              DELIVERING RELIABILITY ACROSS THE WORLD
            </h2>
            <p className="text-sm text-brand-body mt-2">
              Building partnerships worldwide with critical installations across marine, defence and chemical sectors.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onExploreGlobal}
              className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm shadow-sm transition-all group"
            >
              <span>Explore Global Reach</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Part Layout: Map (Center), Country List (Right), 2 Stacked Photo Cards (Far Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Dotted World Map Graphic with Pulsing Red Markers (~7 cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-sm border border-gray-200 shadow-sm relative min-h-[300px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
            
            {/* World Map Dotted Pattern Graphic */}
            <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-35 select-none" fill="#8E9199">
              <g fill="#A0A5B0">
                <ellipse cx="200" cy="150" rx="90" ry="60" />
                <ellipse cx="160" cy="210" rx="40" ry="30" />
                <ellipse cx="280" cy="110" rx="60" ry="35" />
                <ellipse cx="280" cy="330" rx="55" ry="90" />
                <ellipse cx="510" cy="140" rx="50" ry="40" />
                <ellipse cx="560" cy="160" rx="40" ry="35" />
                <ellipse cx="520" cy="270" rx="70" ry="85" />
                <ellipse cx="680" cy="180" rx="110" ry="70" />
                <ellipse cx="690" cy="270" rx="35" ry="45" />
                <ellipse cx="800" cy="230" rx="60" ry="50" />
                <ellipse cx="850" cy="380" rx="75" ry="45" />
              </g>
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#E2E5EB" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="#E2E5EB" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="#E2E5EB" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="750" y1="0" x2="750" y2="500" stroke="#E2E5EB" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>

            {/* Pulsing Red Location Markers */}
            {locations.map((loc) => (
              <div
                key={loc.name}
                style={{ left: loc.x, top: loc.y }}
                onClick={() => setActiveLocation(loc.name)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-brand-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-red border-2 border-white shadow-md" />
                </div>

                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-20 pointer-events-none">
                  <div className="bg-brand-navy text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-lg whitespace-nowrap border border-gray-700">
                    <span>{loc.flag} {loc.name}</span>
                  </div>
                  <div className="w-2 h-2 bg-brand-navy rotate-45 -mt-1 border-r border-b border-gray-700" />
                </div>
              </div>
            ))}

            {activeLocation && (() => {
              const current = locations.find(l => l.name === activeLocation);
              if (!current) return null;
              return (
                <div className="absolute bottom-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-sm border border-gray-700 text-xs flex items-center space-x-2">
                  <MapPin size={14} className="text-brand-red flex-shrink-0" />
                  <span><strong>{current.name}</strong>: {current.role}</span>
                </div>
              );
            })()}

          </div>

          {/* Plain Text List of Countries (~2 cols) */}
          <div className="lg:col-span-2 bg-white p-5 rounded-sm border border-gray-200 shadow-sm">
            <h4 className="font-heading font-black text-sm uppercase text-[#58585A] border-b border-gray-200 pb-2 mb-3 tracking-wider">
              KEY MARKETS
            </h4>
            <ul className="space-y-2.5">
              {locations.map((loc) => (
                <li
                  key={loc.name}
                  onClick={() => setActiveLocation(loc.name)}
                  className={`flex items-center justify-between text-xs font-semibold cursor-pointer transition-colors ${
                    activeLocation === loc.name ? 'text-brand-red' : 'text-gray-700 hover:text-brand-red'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="mr-1.5">{loc.flag}</span>
                    {loc.name}
                  </span>
                  {loc.name.includes("HQ") && (
                    <span className="text-[9px] font-bold bg-red-100 text-brand-red px-1 rounded">
                      HQ
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Two Small Stacked Photo Cards (~3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            
            {/* Handshake Photo Card */}
            <div className="relative h-44 rounded-sm overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src="/images/handshake.jpg"
                alt="Global Corporate Client Partnerships"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white text-xs font-bold uppercase tracking-wider block">
                  Trusted Partnerships
                </span>
                <span className="text-[11px] text-gray-300">
                  Supplying Tier-1 naval shipyards & petrochemical giants
                </span>
              </div>
            </div>

            {/* Container Cargo Ship Photo Card */}
            <div className="relative h-44 rounded-sm overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src="/images/cargo-ship.jpg"
                alt="Worldwide Maritime Shipping Logistics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white text-xs font-bold uppercase tracking-wider block">
                  Export Ready Logistics
                </span>
                <span className="text-[11px] text-gray-300">
                  Fast turnaround dispatch to maritime ports globally
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
