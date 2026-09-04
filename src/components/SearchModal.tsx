import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const catalogItems = [
    { type: "Product", title: "Gate Valves", section: "products", desc: "API 600 Wedge & Parallel Slide Isolation, Class 150-2500" },
    { type: "Product", title: "Globe Valves", section: "products", desc: "BS 1873 Regulating Throttling, High Temp & Pressure" },
    { type: "Product", title: "Check Valves", section: "products", desc: "API 594 Dual Plate & Swing Non-Return Non-Slam" },
    { type: "Product", title: "Ball Valves", section: "products", desc: "API 6D Floating & Trunnion Mounted Fire-Safe" },
    { type: "Product", title: "Butterfly Valves", section: "products", desc: "API 609 Wafer, Lugged & Double Eccentric High Performance" },
    { type: "Product", title: "Marine Control Valves", section: "products", desc: "Naval Shock-Rated Actuated Valves, ABS/DNV Approved" },
    { type: "Industry", title: "Shipbuilding & Marine", section: "industries", desc: "Commercial vessels, container carriers & shipyard installations" },
    { type: "Industry", title: "Defence & Naval", section: "industries", desc: "Warships, submarine hull valves & shock-qualified equipment" },
    { type: "Industry", title: "Oil & Gas", section: "industries", desc: "Offshore platforms, FPSOs, refineries & pipelines" },
    { type: "Cert", title: "ABS & DNV Type Approvals", section: "products", desc: "American Bureau of Shipping & Det Norske Veritas approvals" },
    { type: "Cert", title: "ISO 9001:2015", section: "about", desc: "Quality management system audited for full cycle manufacturing" },
    { type: "Investor", title: "Financial Reports & NSE Share Details", section: "investors", desc: "NSE: INE0MV000102, Market Cap, Audited Earnings" },
    { type: "Facility", title: "45,000 Sq.Ft. Manufacturing Plant", section: "manufacturing", desc: "CNC, VMC multi-axis machining and hydrostatic testing bays" },
  ];

  const filtered = catalogItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-sm max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center space-x-3 bg-gray-50">
          <Search size={20} className="text-brand-red flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products, pressure classes, materials, approvals, industries..."
            className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-700 text-xs font-semibold px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-gray-100">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onNavigate(item.section);
                  onClose();
                }}
                className="p-3 hover:bg-red-50/60 rounded-xs cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-xs ${
                      item.type === 'Product' ? 'bg-red-100 text-brand-red' :
                      item.type === 'Industry' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'Cert' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.type}
                    </span>
                    <h5 className="font-heading font-bold text-sm text-gray-900 group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400 text-xs">
              No direct matches found for "{searchTerm}". You can talk directly with our sales desk.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
          <span>Tip: Filter by standard (e.g. <em>API 600</em>, <em>ABS</em>, <em>PN900</em>)</span>
          <span className="font-mono">ESC to close</span>
        </div>

      </div>
    </div>
  );
};
