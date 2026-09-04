import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

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
      className={`fixed top-0 left-0 right-0 z-[1000] w-full bg-white/[0.98] backdrop-blur-[14px] border-b border-gray-100 transition-all duration-200 select-none h-[76px] lg:h-[80px] ${
        isScrolled
          ? 'shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        
        {/* ========================================================
            LEFT ZONE: BRAND LOCKUP
            [RAPID VALVES Logo] | [ALWAYS IN CONTROL]
           ======================================================== */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="flex items-center space-x-3 sm:space-x-3.5 group cursor-pointer">
            <img
              src="/images/rapid-logo-header.png"
              alt="RAPID VALVES"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="h-5 sm:h-6 w-[1px] bg-gray-300 hidden sm:block" />
            <span className="font-poppins font-medium text-[11px] sm:text-[12px] md:text-[12.5px] tracking-[0.16em] sm:tracking-[0.18em] text-[#4B5563] uppercase whitespace-nowrap hidden sm:inline-block">
              ALWAYS IN CONTROL
            </span>
          </a>
        </div>

        {/* ========================================================
            DESKTOP NAVIGATION (lg and up)
            Links + Dropdowns + Search + Contact CTA
           ======================================================== */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 min-w-0">
          
          <nav className="flex items-center space-x-1.5 xl:space-x-3.5 whitespace-nowrap">
            
            {/* 1. About ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#about"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span>About</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'about' ? 'rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </a>

              {/* About Dropdown */}
              {activeMenu === 'about' && (
                <div
                  className="absolute left-0 top-full mt-1 w-[380px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    ABOUT RAPPID VALVES
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "About Rappid", desc: "NSE-listed valve engineering leader", href: "#about" },
                      { name: "Our Heritage", desc: "Decades of critical fluid control innovations", href: "#about" },
                      { name: "Vision & Leadership", desc: "Setting benchmarks in high-pressure fluid systems", href: "#about" },
                      { name: "Manufacturing Infrastructure", desc: "45,000 sq.ft. modern production plant", href: "#manufacturing" },
                      { name: "Quality & Testing", desc: "100% hydrostatic and pneumatic test protocols", href: "#process" },
                      { name: "Certifications", desc: "ABS, DNV, CE, TÜV & Lloyd's approvals", href: "#products" },
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

            {/* 2. Products ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#products"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span>Products</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'products' ? 'rotate-180 text-[#D71920]' : ''
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

            {/* 3. Industries ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#industries"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span>Industries</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'industries' ? 'rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </a>

              {/* Industries Dropdown */}
              {activeMenu === 'industries' && (
                <div
                  className="absolute left-[-100px] xl:left-[-30px] top-full mt-1 w-[520px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
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

            {/* 4. Marine & Defence ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('marine')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#industries"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span className="whitespace-nowrap">Marine & Defence</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'marine' ? 'rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </a>

              {/* Marine & Defence Dropdown */}
              {activeMenu === 'marine' && (
                <div
                  className="absolute left-[-80px] xl:left-[-20px] top-full mt-1 w-[360px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('marine')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    MARINE & DEFENCE SPECIALTY
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: "Marine Control Valves", desc: "Hull penetration & seawater isolation" },
                      { name: "Naval Applications", desc: "Frigates, destroyers & stealth corvettes" },
                      { name: "Submarine Systems", desc: "High-shock qualified & vibration certified" },
                      { name: "Shipbuilding Yards", desc: "Commercial cargo & container vessel yards" },
                      { name: "Approvals & Standards", desc: "ABS, DNV, IRS & Lloyd's Type Approvals" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href="#industries"
                        onClick={() => setActiveMenu(null)}
                        className="block px-2.5 py-1.5 rounded-sm hover:bg-red-50/70 group/m transition-colors"
                      >
                        <div className="text-[12.5px] font-poppins font-semibold text-[#171A1F] group-hover/m:text-[#D71920] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#767B85]">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Engineering */}
            <a
              href="#media-solutions"
              className="text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 py-4 px-1.5 cursor-pointer whitespace-nowrap"
            >
              Engineering
            </a>

            {/* 6. Manufacturing */}
            <a
              href="#manufacturing"
              className="text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 py-4 px-1.5 cursor-pointer whitespace-nowrap"
            >
              Manufacturing
            </a>

            {/* 7. Investors ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('investors')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#investors"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span>Investors</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'investors' ? 'rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </a>

              {/* Investors Dropdown */}
              {activeMenu === 'investors' && (
                <div
                  className="absolute right-0 top-full mt-1 w-[380px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('investors')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    INVESTOR RELATIONS
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { name: "Investor Overview", desc: "Corporate disclosures & company profile", href: "#investors" },
                      { name: "Financial Results", desc: "Audited financial statements & quarterly results", href: "#investors" },
                      { name: "Shareholding", desc: "Promoter & institutional holdings details", href: "#investors" },
                      { name: "Announcements", desc: "Exchange disclosures & media statements", href: "#investors" },
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

            {/* 8. Resources ▼ */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#process"
                className="flex items-center text-[12.5px] xl:text-[13.5px] font-poppins font-medium text-[#111418] hover:text-[#D71920] tracking-tight transition-colors duration-150 group cursor-pointer whitespace-nowrap py-1 px-1.5"
              >
                <span>Resources</span>
                <ChevronDown
                  size={11}
                  className={`ml-1 text-gray-400 group-hover:text-[#D71920] transition-transform duration-150 ${
                    activeMenu === 'resources' ? 'rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </a>

              {/* Resources Dropdown */}
              {activeMenu === 'resources' && (
                <div
                  className="absolute right-0 top-full mt-1 w-[380px] bg-white rounded-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[1100] animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-[10px] font-poppins font-bold uppercase tracking-[0.16em] text-[#D71920] mb-2 px-1">
                    TECHNICAL RESOURCES
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { name: "Brochures", desc: "Full PDF specifications" },
                      { name: "Datasheets", desc: "Pressure & temperature" },
                      { name: "Technical Docs", desc: "Material & trim standards" },
                      { name: "Blogs & Insights", desc: "Severe service metallurgy" },
                      { name: "Videos", desc: "Hydrostatic test labs" },
                      { name: "FAQs", desc: "Technical queries" },
                    ].map((res) => (
                      <a
                        key={res.name}
                        href="#process"
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

          <div className="h-4 w-[1px] bg-gray-200 mx-1 flex-shrink-0" />

          {/* Search Icon / Input */}
          <div className="relative flex items-center flex-shrink-0">
            {searchOpen ? (
              <div className="flex items-center bg-white border border-gray-300 rounded-[5px] px-2.5 py-1 w-[160px] shadow-xs animate-fadeIn">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onOpenSearch();
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Search..."
                  className="w-full bg-transparent text-xs text-[#171A1F] placeholder-gray-400 focus:outline-none font-poppins"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-700 ml-1"
                >
                  <X size={13} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-[#111418] hover:text-[#D71920] hover:bg-gray-100 p-1.5 transition-all duration-150 rounded-full flex items-center justify-center cursor-pointer"
                title="Search products & resources"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Primary CTA: "CONTACT →" */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center space-x-1.5 bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-[12px] xl:text-[12.5px] uppercase tracking-[0.4px] rounded-[5px] shadow-xs hover:shadow transition-all duration-150 cursor-pointer whitespace-nowrap flex-shrink-0 px-4 h-[38px] group"
          >
            <span>CONTACT</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-150" />
          </button>

        </div>

        {/* ========================================================
            MOBILE HEADER (< lg)
           ======================================================== */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <a href="#" className="flex items-center space-x-2.5">
            <img
              src="/images/rapid-logo-header.png"
              alt="RAPID VALVES"
              className="h-8 w-auto object-contain"
            />
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
            <span className="font-poppins font-medium text-[10px] tracking-[0.14em] text-[#4B5563] uppercase whitespace-nowrap hidden sm:inline-block">
              ALWAYS IN CONTROL
            </span>
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
        <div className="lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-white z-[1100] overflow-y-auto px-6 py-8 border-t border-gray-100 font-poppins flex flex-col justify-between">
          <div className="space-y-4">
            
            <div className="border-b border-gray-100 pb-3">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                About
              </a>
            </div>

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
                </div>
              )}
            </div>

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
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Naval Applications</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-1">Submarine Systems</a>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-3">
              <a
                href="#media-solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                Engineering
              </a>
            </div>

            <div className="border-b border-gray-100 pb-3">
              <a
                href="#manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                Manufacturing
              </a>
            </div>

            <div className="border-b border-gray-100 pb-3">
              <a
                href="#investors"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                Investors
              </a>
            </div>

            <div className="border-b border-gray-100 pb-3">
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-poppins font-semibold text-[#111418] block"
              >
                Resources
              </a>
            </div>

          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-xs uppercase tracking-wider rounded-[6px] transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
