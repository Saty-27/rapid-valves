import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean, stable scroll listener with 30px threshold
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 140);
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 select-none ${
        isScrolled
          ? 'bg-white/[0.98] backdrop-blur-[16px] border-b border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-[76px] lg:h-[80px]'
          : 'bg-transparent border-none shadow-none h-[76px] lg:h-[80px]'
      }`}
    >
      {/* Single, continuous premium white gradient: protects logo and navigation with smooth seamless falloff */}
      {!isScrolled && (
        <div 
          className="absolute top-0 left-0 right-0 h-[96px] sm:h-[100px] lg:h-[104px] pointer-events-none z-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 40%, rgba(255,255,255,0.90) 58%, rgba(255,255,255,0.72) 72%, rgba(255,255,255,0.42) 84%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0) 100%)'
          }}
          aria-hidden="true"
        />
      )}

      <div className="w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-10 flex items-center justify-between relative z-10">
        
        {/* ========================================================
            LEFT ZONE: BRAND LOCKUP
            [RAPID VALVES Logo] + [NSE LISTED COMPANY] |
            Directly matching media_1788531335291.png
           ======================================================== */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group cursor-pointer">
            <img
              src="/images/rapid-logo-header.png"
              alt="RAPID VALVES"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="hidden sm:flex flex-col text-left leading-none pl-1">
              <span className="font-poppins font-bold text-[12px] md:text-[13px] text-[#111418] tracking-wider uppercase">
                NSE
              </span>
              <span className="font-poppins font-medium text-[8px] md:text-[8.5px] tracking-[0.14em] text-[#6B7280] uppercase mt-0.5">
                LISTED COMPANY
              </span>
            </div>
            <div className="h-5 sm:h-6 w-[1.5px] bg-gray-300 hidden lg:block ml-1 mr-1" />
          </a>
        </div>

        {/* ========================================================
            CENTER NAVIGATION: 8 Links Exactly Matching Reference
            About ⌵ | Products ⌵ | Industries ⌵ | Marine & Defence ⌵ |
            Engineering | Manufacturing | Investors ⌵ | Resources ⌵
           ======================================================== */}
        <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-6 min-w-0">
          
          <nav className="flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-6 whitespace-nowrap text-[13px] xl:text-[13.5px] 2xl:text-[14px]">
            
            {/* 1. About ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#about"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>About</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'about' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* About Dropdown */}
              {activeMenu === 'about' && (
                <div
                  className="absolute left-[-20px] top-full mt-1 w-[360px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    ABOUT RAPPID VALVES
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "About Us", desc: "NSE-listed valve engineering leader", href: "#about" },
                      { name: "Our Heritage", desc: "Founded in 2002 with 20+ years of operational excellence", href: "#about" },
                      { name: "Leadership & Vision", desc: "Guiding the future of high-integrity fluid systems", href: "#about" },
                      { name: "Manufacturing Infrastructure", desc: "45,000 sq.ft. world-class production plant", href: "#manufacturing" },
                      { name: "Certifications & Standards", desc: "ABS, DNV, CE, TÜV & Lloyd's approvals", href: "#products" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="block px-2.5 py-1.5 rounded-sm hover:bg-red-50/70 group/item transition-colors"
                      >
                        <div className="text-[12.5px] font-poppins font-semibold text-[#171A1F] group-hover/item:text-[#D71920] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#767B85] line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#products"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>Products</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'products' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* Products Mega Dropdown */}
              {activeMenu === 'products' && (
                <div
                  className="absolute left-[-80px] xl:left-[-40px] top-full mt-1 w-[590px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-6 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-12 gap-6 items-stretch">
                    <div className="col-span-7">
                      <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2.5">
                        VALVE SOLUTIONS
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { name: "Gate Valves", desc: "API 600 Wedge & Slide Isolation", href: "#products" },
                          { name: "Globe Valves", desc: "BS 1873 Severe Regulating & Throttling", href: "#products" },
                          { name: "Ball Valves", desc: "API 6D Floating & Trunnion Fire-Safe", href: "#products" },
                          { name: "Check Valves", desc: "API 594 Non-Slam Non-Return", href: "#products" },
                          { name: "Butterfly Valves", desc: "API 609 High Performance", href: "#products" },
                          { name: "Marine Control Valves", desc: "Naval Shock-Rated Actuated", href: "#products" },
                        ].map((prod) => (
                          <a
                            key={prod.name}
                            href={prod.href}
                            onClick={() => setActiveMenu(null)}
                            className="block px-2.5 py-1.5 rounded-sm hover:bg-red-50/70 group/prod transition-colors"
                          >
                            <div className="text-[12.5px] font-poppins font-semibold text-[#171A1F] group-hover/prod:text-[#D71920] transition-colors">
                              {prod.name}
                            </div>
                            <div className="text-[10px] text-[#767B85]">
                              {prod.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 bg-[#FAFAFA] rounded-sm p-4 flex flex-col justify-between border border-gray-100 text-center">
                      <div className="h-28 flex items-center justify-center">
                        <img
                          src="/images/prod-marine-control-valve.png"
                          alt="Rappid Valve Engineering"
                          className="max-h-24 object-contain filter drop-shadow-md"
                        />
                      </div>
                      <div>
                        <div className="text-[9.5px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-1">
                          CRITICAL FLUID CONTROL
                        </div>
                        <p className="text-[10.5px] text-[#5B5F66] font-poppins font-medium leading-snug mb-3">
                          Complete valve portfolio with pressure ratings up to PN900.
                        </p>
                        <a
                          href="#products"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center justify-center w-full py-2 bg-white hover:bg-[#D71920] text-[#171A1F] hover:text-white border border-gray-200 hover:border-[#D71920] text-[10px] font-poppins font-bold uppercase tracking-wider rounded-sm transition-all"
                        >
                          <span>VIEW ALL PRODUCTS →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#industries"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>Industries</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'industries' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* Industries Dropdown */}
              {activeMenu === 'industries' && (
                <div
                  className="absolute left-[-80px] xl:left-[-30px] top-full mt-1 w-[520px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    CRITICAL INDUSTRY SECTORS
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { name: "Shipbuilding & Marine", core: true },
                      { name: "Defence & Naval", core: true },
                      { name: "Oil & Gas", core: false },
                      { name: "Steel Industry", core: false },
                      { name: "Water Treatment", core: false },
                      { name: "Distillery", core: false },
                      { name: "Power Generation", core: false },
                      { name: "Chemical Industry", core: false },
                      { name: "Pharma", core: false },
                      { name: "Renewable Energy", core: false },
                    ].map((ind) => (
                      <a
                        key={ind.name}
                        href="#industries"
                        onClick={() => setActiveMenu(null)}
                        className={`px-2.5 py-1.5 rounded-sm transition-all group/ind ${
                          ind.core
                            ? 'bg-[#FAFAFA] border-l-2 border-[#D71920] hover:bg-red-50/70'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className={`text-[12px] font-poppins font-medium transition-colors ${
                          ind.core ? 'text-[#111418] font-semibold group-hover/ind:text-[#D71920]' : 'text-[#33373E] group-hover/ind:text-[#D71920]'
                        }`}>
                          {ind.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Marine & Defence ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('marine')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#industries"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>Marine & Defence</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'marine' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* Marine & Defence Dropdown */}
              {activeMenu === 'marine' && (
                <div
                  className="absolute left-[-60px] top-full mt-1 w-[460px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('marine')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    NAVAL & MARITIME CAPABILITIES
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: "Marine Control Valves", desc: "Shock-rated naval grade valves for combat ships" },
                      { name: "Submarine Ballast & Hull Valves", desc: "High-integrity deep-submergence safety valves" },
                      { name: "Naval Shock-Rated Systems", desc: "NSS I & NSS II compliant high-shock resistance" },
                      { name: "Sea Water & Fire-Fighting Systems", desc: "Cu-Ni and Nickel Bronze anti-corrosion trims" },
                      { name: "Warship & Vessel Outfitting", desc: "Approved by Indian Navy & premier global shipyards" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href="#industries"
                        onClick={() => setActiveMenu(null)}
                        className="block px-3 py-2 rounded-sm hover:bg-red-50/70 group/item transition-colors"
                      >
                        <div className="text-[12.5px] font-poppins font-semibold text-[#111418] group-hover/item:text-[#D71920] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#767B85] line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Engineering (Colored #D71920 as shown in reference) */}
            <a
              href="#process"
              className="font-poppins font-semibold text-[#D71920] hover:text-[#B8141A] tracking-normal transition-colors duration-150 py-4 cursor-pointer whitespace-nowrap"
            >
              Engineering
            </a>

            {/* 6. Manufacturing */}
            <a
              href="#manufacturing"
              className="font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 py-4 cursor-pointer whitespace-nowrap"
            >
              Manufacturing
            </a>

            {/* 7. Investors ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('investors')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#investors"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>Investors</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'investors' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* Investors Dropdown */}
              {activeMenu === 'investors' && (
                <div
                  className="absolute right-[-40px] xl:right-0 top-full mt-1 w-[380px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('investors')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    INVESTOR RELATIONS (NSE: RAPPID)
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "Investor Overview", desc: "Corporate disclosures & company profile", href: "#investors" },
                      { name: "Financial Results", desc: "Audited financial statements & quarterly results", href: "#investors" },
                      { name: "Shareholding Pattern", desc: "Promoter & institutional holdings details", href: "#investors" },
                      { name: "Announcements & Filings", desc: "NSE exchange filings & press statements", href: "#investors" },
                      { name: "Corporate Governance", desc: "Board committees, policies & code of conduct", href: "#investors" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="block px-2.5 py-1.5 rounded-sm hover:bg-red-50/70 group/inv transition-colors"
                      >
                        <div className="text-[12.5px] font-poppins font-semibold text-[#171A1F] group-hover/inv:text-[#D71920] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#767B85] line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 8. Resources ⌵ */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#process"
                className="inline-flex items-center font-poppins font-medium text-[#1E232A] hover:text-[#D71920] tracking-normal transition-colors duration-150 cursor-pointer whitespace-nowrap py-1"
              >
                <span>Resources</span>
                <ChevronDown
                  size={12}
                  strokeWidth={2.2}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === 'resources' ? 'rotate-180 text-[#D71920]' : 'text-gray-400 group-hover:text-[#D71920]'
                  }`}
                />
              </a>

              {/* Resources Dropdown */}
              {activeMenu === 'resources' && (
                <div
                  className="absolute right-0 top-full mt-1 w-[400px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    RESOURCES & DOWNLOADS
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { name: "Quality Approvals", desc: "ABS, DNV, Lloyd's, CE", href: "#products" },
                      { name: "Product Catalogs", desc: "Engineering Data Sheets", href: "#products" },
                      { name: "Testing Standards", desc: "Hydro & Pneumatic Labs", href: "#process" },
                      { name: "Case Studies", desc: "Naval & Energy Projects", href: "#industries" },
                      { name: "Material Trims", desc: "Inconel, Monel, Duplex", href: "#products" },
                      { name: "ISO Certifications", desc: "ISO 9001:2015 & IBR", href: "#process" },
                    ].map((res) => (
                      <a
                        key={res.name}
                        href={res.href}
                        onClick={() => setActiveMenu(null)}
                        className="p-2 rounded-sm hover:bg-red-50/70 group/r transition-colors"
                      >
                        <div className="text-[12px] font-poppins font-semibold text-[#171A1F] group-hover/r:text-[#D71920] transition-colors">
                          {res.name}
                        </div>
                        <div className="text-[9.5px] text-[#767B85] line-clamp-1">
                          {res.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </nav>

        </div>

        {/* ========================================================
            RIGHT ZONE: Search Icon + Red Rectangular CONTACT Button
            Directly matching media_1788531335265.png:
            [🔍] [ CONTACT → ]
           ======================================================== */}
        <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-4 min-w-0 flex-shrink-0">
          
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="text-[#1E232A] hover:text-[#D71920] p-1.5 transition-all duration-150 rounded-full flex items-center justify-center cursor-pointer"
            title="Search products & resources"
            aria-label="Search"
          >
            <Search size={19} strokeWidth={1.9} />
          </button>

          {/* Red Rectangular Button: [ CONTACT → ] */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-[12px] xl:text-[12.5px] uppercase tracking-wider rounded-[6px] px-5 xl:px-6 py-2.5 shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 group"
          >
            <span>CONTACT</span>
            <ArrowRight size={14} strokeWidth={2.5} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

        </div>

        {/* ========================================================
            MOBILE HEADER (< lg)
           ======================================================== */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/images/rapid-logo-header.png"
              alt="RAPID VALVES"
              className="h-8 w-auto object-contain"
            />
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="font-poppins font-bold text-[10px] text-[#111418] uppercase">NSE</span>
              <span className="font-poppins font-medium text-[7px] text-[#6B7280] uppercase tracking-wider">LISTED COMPANY</span>
            </div>
          </a>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-[#111418] hover:text-[#D71920]"
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111418] hover:text-[#D71920] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================
          MOBILE NAVIGATION PANEL
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] sm:top-[80px] bottom-0 bg-white z-[1100] overflow-y-auto px-6 py-8 border-t border-gray-100 font-poppins flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* 1. About */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('about')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span>About</span>
                <span className="text-lg text-gray-400">
                  {mobileExpanded === 'about' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'about' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">About Us</a>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">Our Heritage (Est. 2002)</a>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">Vision & Leadership</a>
                  <a href="#manufacturing" onClick={() => setMobileMenuOpen(false)} className="block py-1">Manufacturing Plant</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Certifications</a>
                </div>
              )}
            </div>

            {/* 2. Products */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('products')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span>Products</span>
                <span className="text-lg text-gray-400">
                  {mobileExpanded === 'products' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'products' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Gate Valves</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Globe Valves</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Ball Valves</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Check Valves</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Butterfly Valves</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#D71920] font-semibold">Marine Control Valves</a>
                </div>
              )}
            </div>

            {/* 3. Industries */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('industries')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span>Industries</span>
                <span className="text-lg text-gray-400">
                  {mobileExpanded === 'industries' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'industries' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-semibold text-[#111418]">Shipbuilding & Marine</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-semibold text-[#111418]">Defence & Naval</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Oil & Gas</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Power Generation</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Chemical & Fertilizer</a>
                </div>
              )}
            </div>

            {/* 4. Marine & Defence */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('marine')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span className="text-[#D71920]">Marine & Defence</span>
                <span className="text-lg text-[#D71920]">
                  {mobileExpanded === 'marine' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'marine' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Marine Control Valves</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Submarine Ballast & Hull Valves</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Naval Shock-Rated Systems</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Sea Water & Fire-Fighting</a>
                </div>
              )}
            </div>

            {/* 5. Engineering */}
            <div className="border-b border-gray-100 pb-3">
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#D71920] block"
              >
                Engineering
              </a>
            </div>

            {/* 6. Manufacturing */}
            <div className="border-b border-gray-100 pb-3">
              <a
                href="#manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                Manufacturing
              </a>
            </div>

            {/* 7. Investors */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('investors')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span>Investors</span>
                <span className="text-lg text-gray-400">
                  {mobileExpanded === 'investors' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'investors' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="block py-1">Investor Overview</a>
                  <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="block py-1">Financial Results</a>
                  <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="block py-1">Shareholding Pattern</a>
                  <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="block py-1">Announcements</a>
                </div>
              )}
            </div>

            {/* 8. Resources */}
            <div className="border-b border-gray-100 pb-3">
              <div
                onClick={() => toggleMobileSubmenu('resources')}
                className="flex justify-between items-center text-base font-poppins font-semibold text-[#111418] cursor-pointer"
              >
                <span>Resources</span>
                <span className="text-lg text-gray-400">
                  {mobileExpanded === 'resources' ? '–' : '+'}
                </span>
              </div>
              {mobileExpanded === 'resources' && (
                <div className="pl-3 mt-2 space-y-2 text-sm text-[#767B85]">
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Quality Approvals</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1">Product Catalogs</a>
                  <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-1">Testing Standards</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Case Studies</a>
                </div>
              )}
            </div>

          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="inline-flex items-center justify-center w-full py-3.5 bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-xs uppercase tracking-wider rounded-[6px] transition-colors shadow-sm cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowRight size={14} strokeWidth={2.5} className="ml-1.5" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
