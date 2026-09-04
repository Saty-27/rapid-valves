import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Settings,
  Globe,
  Headphones
} from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer id="footer" className="w-full bg-[#080D12] text-gray-300 font-poppins select-none relative">
      
      {/* ========================================================
          LAYER 1: WHITE BREATHING AREA + RAISED RED BRAND HEADER
          (Matching IMAGE 2 Blueprint)
         ======================================================== */}
      <div className="w-full bg-white pt-12 sm:pt-16">
        
        {/* Horizontal Red Band - Pure brand red (#D71920) matching tab */}
        <div
          className="relative w-full h-24 sm:h-28 lg:h-[122px] bg-[#D71920] flex items-center justify-between px-6 sm:px-12 xl:px-20 shadow-xl overflow-visible"
        >
          
          {/* Left Side Statement: PRECISION ENGINEERED. PERFORMANCE ASSURED. */}
          <div className="hidden lg:flex items-center space-x-3 text-white font-poppins text-xs sm:text-[13.5px] font-semibold tracking-[0.04em] z-10">
            <span className="w-[1px] h-4 bg-white/40" />
            <span>Precision Engineered. Performance Assured.</span>
            <span className="w-[1px] h-4 bg-white/40" />
          </div>

          {/* CENTER RAISED LOGO CAPSULE / TAB
              Generously sized (~320-360px) and exact same #D71920 red so it seamlessly merges and satisfies the section */}
          <div
            className="absolute -top-12 sm:-top-14 lg:-top-16 xl:-top-[70px] left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 lg:w-[320px] xl:w-[360px] h-20 sm:h-24 lg:h-[110px] xl:h-[120px] rounded-t-[34px] sm:rounded-t-[42px] lg:rounded-t-[48px] bg-[#D71920] flex items-center justify-center pt-2 sm:pt-3 px-6 shadow-none z-20"
          >
            
            {/* Smooth Concave Transition Fillets on Left and Right */}
            <div 
              className="absolute -bottom-[1px] -left-6 w-6 h-6 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top left, transparent 24px, #D71920 24px)'
              }}
            />
            <div 
              className="absolute -bottom-[1px] -right-6 w-6 h-6 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top right, transparent 24px, #D71920 24px)'
              }}
            />

            {/* Prominently Sized Vector Brand Crown Logo */}
            <div className="flex flex-col items-center justify-center cursor-pointer group w-full px-2">
              <img
                src="/images/footer-crown-logo.png"
                alt="Rappid Valves - Always In Control"
                className="h-14 sm:h-16 md:h-18 lg:h-[74px] xl:h-[82px] w-auto max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-200 filter drop-shadow-xs"
              />
            </div>
          </div>

          {/* Right Side Statement: FLOW CONTROL SOLUTIONS FOR CRITICAL APPLICATIONS. */}
          <div className="hidden lg:flex items-center space-x-3 text-white font-poppins text-xs sm:text-[13.5px] font-semibold tracking-[0.04em] ml-auto z-10">
            <span className="w-[1px] h-4 bg-white/40" />
            <span>Flow Control Solutions for Critical Applications.</span>
            <span className="w-[1px] h-4 bg-white/40" />
          </div>

        </div>

      </div>

      {/* ========================================================
          LAYER 2: LARGE DARK MAIN FOOTER (Background #080D12)
          Target visual height ~480-520px, desktop max-w 1280-1340px
         ======================================================== */}
      <div className="w-full bg-[#080D12] relative overflow-hidden">
        
        {/* Very subtle engineering CAD blueprint watermark in bottom-right (opacity 0.035) */}
        <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-[0.035] z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor">
            <circle cx="100" cy="100" r="80" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="50" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="20" strokeWidth="2" />
            <line x1="100" y1="0" x2="100" y2="200" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="0" y1="100" x2="200" y2="100" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 40 100 L 160 100 M 100 40 L 100 160" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-20 pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0">
            
            {/* ----------------------------------------------------
                COLUMN 1: BRAND & COMPANY INFO
               ---------------------------------------------------- */}
            <div className="lg:pr-8 xl:pr-12 space-y-4">
              
              {/* Prominent Logo */}
              <div className="inline-block">
                <img
                  src="/images/rappid-logo-footer-cropped.png"
                  alt="Rappid Valves"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* Bio Paragraph */}
              <p className="font-poppins text-sm text-[#AEB5BD] leading-[1.65] max-w-[310px]">
                NSE-listed industrial valve engineering company serving marine, defence, oil & gas, and process industries worldwide with precision and certified reliability.
              </p>

              {/* Thin Red Horizontal Line */}
              <div className="w-10 h-[2px] bg-[#D71920] my-4" />

              {/* Corporate Filings */}
              <div className="font-poppins text-xs text-[#8E96A0] space-y-1.5 leading-relaxed">
                <div>
                  <strong className="text-gray-300 font-semibold">CIN:</strong> L29253MH2002PLC137452
                </div>
                <div>
                  <strong className="text-gray-300 font-semibold">NSE:</strong> INE0MV000102 <span className="text-gray-600 px-1">|</span> <strong className="text-gray-300 font-semibold">BSE:</strong> 544273
                </div>
              </div>

              {/* Social Icon Buttons (44px × 44px, #101722, 1px border) */}
              <div className="flex items-center space-x-3 pt-3">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-[8px] bg-[#101722] hover:bg-[#D71920] border border-white/10 hover:border-[#D71920] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  aria-label="LinkedIn"
                >
                  <span className="font-poppins font-bold text-xs tracking-tight">in</span>
                </a>

                {/* X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-[8px] bg-[#101722] hover:bg-[#D71920] border border-white/10 hover:border-[#D71920] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  aria-label="X Twitter"
                >
                  <span className="font-poppins font-bold text-xs">𝕏</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-[8px] bg-[#101722] hover:bg-[#D71920] border border-white/10 hover:border-[#D71920] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  aria-label="YouTube"
                >
                  <span className="text-xs">▶</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:sales@rappidvalves.in"
                  className="w-11 h-11 rounded-[8px] bg-[#101722] hover:bg-[#D71920] border border-white/10 hover:border-[#D71920] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>

            </div>

            {/* ----------------------------------------------------
                COLUMN 2: COMPANY with vertical separator
               ---------------------------------------------------- */}
            <div className="lg:border-l lg:border-white/10 lg:px-6 xl:px-8">
              <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-white">
                COMPANY
              </h4>
              <div className="w-8 h-[2px] bg-[#D71920] mt-3 mb-5" />
              
              <ul className="space-y-4 font-poppins text-[13.5px] xl:text-sm text-[#AEB5BD]">
                <li>
                  <a href="#about" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>About Rappid Valves</span>
                  </a>
                </li>
                <li>
                  <a href="#investors" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Investor Relations & Filings</span>
                  </a>
                </li>
                <li>
                  <a href="#manufacturing" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Engineering & Infrastructure</span>
                  </a>
                </li>
                <li>
                  <a href="#manufacturing" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Quality Assurance Manual</span>
                  </a>
                </li>
                <li>
                  <a href="#investors" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Global Export Network</span>
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Board of Directors</span>
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Careers at Rappid</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* ----------------------------------------------------
                COLUMN 3: PRODUCT RANGE with vertical separator
               ---------------------------------------------------- */}
            <div className="lg:border-l lg:border-white/10 lg:px-6 xl:px-8">
              <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-white">
                PRODUCT RANGE
              </h4>
              <div className="w-8 h-[2px] bg-[#D71920] mt-3 mb-5" />
              
              <ul className="space-y-4 font-poppins text-[13.5px] xl:text-sm text-[#AEB5BD]">
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Gate Valves (API 600)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Globe Valves (BS 1873)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Check Valves (API 594)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Ball Valves (API 6D)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Butterfly Valves (API 609)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Marine & Naval Valves</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Pneumatic Actuated Valves</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* ----------------------------------------------------
                COLUMN 4: KEY SECTORS with vertical separator
               ---------------------------------------------------- */}
            <div className="lg:border-l lg:border-white/10 lg:px-6 xl:px-8">
              <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-white">
                KEY SECTORS
              </h4>
              <div className="w-8 h-[2px] bg-[#D71920] mt-3 mb-5" />
              
              <ul className="space-y-4 font-poppins text-[13.5px] xl:text-sm text-[#AEB5BD]">
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Shipbuilding & Shipyards</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Defence & Indian Navy</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Oil & Gas Offshore / Onshore</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Thermal & Nuclear Power</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Chemical & Petrochemical</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Water & Wastewater Treatment</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-200 group whitespace-nowrap">
                    <span className="opacity-0 group-hover:opacity-100 text-[#D71920] mr-1.5 transition-opacity">›</span>
                    <span>Pharmaceutical & Biotech</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* ----------------------------------------------------
                COLUMN 5: GET IN TOUCH (Strong Emphasis)
               ---------------------------------------------------- */}
            <div className="lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8 space-y-4">
              <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-white">
                GET IN TOUCH
              </h4>
              <div className="w-8 h-[2px] bg-[#D71920] mt-3 mb-5" />
              
              <ul className="space-y-4 font-poppins text-sm text-[#AEB5BD]">
                {/* Location */}
                <li className="flex items-start space-x-3.5">
                  <MapPin size={18} className="text-[#D71920] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Plot No. 17/18, Sector 1, Industrial Area, Thane / Navi Mumbai, Maharashtra 400705, India
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center space-x-3.5">
                  <Phone size={18} className="text-[#D71920] flex-shrink-0" />
                  <a href="tel:+912225801234" className="hover:text-white transition-colors whitespace-nowrap">
                    +91 (22) 2580-XXXX / +91 98200 XXXXX
                  </a>
                </li>

                {/* Email */}
                <li className="flex items-center space-x-3.5">
                  <Mail size={18} className="text-[#D71920] flex-shrink-0" />
                  <a href="mailto:sales@rappidvalves.in" className="hover:text-white transition-colors">
                    sales@rappidvalves.in
                  </a>
                </li>
              </ul>

              {/* REQUEST A QUOTE Button */}
              <div className="pt-3">
                <button
                  onClick={onContactClick}
                  className="w-full h-13 sm:h-[54px] inline-flex items-center justify-center space-x-2 bg-[#D71920] hover:bg-[#E01E25] text-white font-poppins font-bold text-sm uppercase tracking-wider rounded-[4px] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowUpRight size={17} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================
          LAYER 3: ENGINEERING TRUST / CAPABILITY STRIP (Height ~105px)
          Background #0B1118 with border-top/bottom
         ======================================================== */}
      <div className="w-full bg-[#0B1118] border-t border-b border-white/[0.08] py-7 sm:py-8">
        <div className="max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            
            {/* Block 1: Quality Assured */}
            <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
              <div className="w-12 h-12 rounded-[10px] bg-[#D71920]/15 border border-[#D71920]/25 text-[#D71920] flex items-center justify-center flex-shrink-0 shadow-xs">
                <ShieldCheck size={24} strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <h5 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
                  QUALITY ASSURED
                </h5>
                <p className="font-poppins text-xs text-[#8F97A3] mt-1">
                  Tested. Certified. Trusted.
                </p>
              </div>
            </div>

            {/* Block 2: Engineered Precision */}
            <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#D71920]/15 border border-[#D71920]/25 text-[#D71920] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Settings size={24} strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <h5 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
                  ENGINEERED PRECISION
                </h5>
                <p className="font-poppins text-xs text-[#8F97A3] mt-1">
                  For Critical Applications.
                </p>
              </div>
            </div>

            {/* Block 3: Global Presence */}
            <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#D71920]/15 border border-[#D71920]/25 text-[#D71920] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Globe size={24} strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <h5 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
                  GLOBAL PRESENCE
                </h5>
                <p className="font-poppins text-xs text-[#8F97A3] mt-1">
                  Delivering Worldwide.
                </p>
              </div>
            </div>

            {/* Block 4: Expert Support */}
            <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-[10px] bg-[#D71920]/15 border border-[#D71920]/25 text-[#D71920] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Headphones size={24} strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <h5 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
                  EXPERT SUPPORT
                </h5>
                <p className="font-poppins text-xs text-[#8F97A3] mt-1">
                  Always On Flow Control.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================
          LAYER 4: BOTTOM LEGAL BAR (Height ~70px, Background #05080C)
         ======================================================== */}
      <div className="w-full bg-[#05080C] py-5 px-6 sm:px-10 lg:px-12 text-xs text-[#7F8791] font-poppins">
        <div className="max-w-[1620px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Rappid Valves (India) Limited. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <span className="text-gray-700">|</span>
            <a href="https://www.nseindia.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">NSE Listing</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
