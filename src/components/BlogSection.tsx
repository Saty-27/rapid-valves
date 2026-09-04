import React, { useState } from 'react';
import { Calendar, ArrowRight, X, BookOpen, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BlogPost {
  id: string;
  num: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  image: string;
  fullContent?: string;
  keyPoints?: string[];
}

interface BlogSectionProps {
  onOpenContact?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenContact }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const posts: BlogPost[] = [
    {
      id: "marine-flow-control",
      num: "01 / 06",
      category: "Industry Insights",
      date: "May 20, 2026",
      readTime: "4 min read",
      title: "The Future of Flow Control in Marine Applications",
      desc: "Explore the latest advancements shaping marine valve technology for enhanced reliability, safety and performance.",
      image: "/images/blog-marine-future.jpg",
      fullContent: "Modern naval vessels, offshore support ships, and cargo platforms operate under extreme hydrostatic pressures, saline corrosion, and continuous vibration. Advances in non-magnetic alloys, double-eccentric butterfly mechanisms, and remote automated actuators are fundamentally redefining marine flow safety. At RAPPID Valves, our IRS and DNV-compliant valve designs ensure zero-leakage shutoff in mission-critical seawater cooling and bilge ballast systems.",
      keyPoints: [
        "Advanced cupronickel & bronze alloys resistant to marine biofouling",
        "Pneumatic and electro-hydraulic actuation with SIL-2 safety ratings",
        "Certified compliance with international naval defense standards"
      ]
    },
    {
      id: "harsh-environment-materials",
      num: "02 / 06",
      category: "Technical Knowledge",
      date: "May 15, 2026",
      readTime: "5 min read",
      title: "Understanding Valve Materials for Harsh Environments",
      desc: "A comprehensive guide to selecting the right materials for durability, safety, and long-term corrosive resistance.",
      image: "/images/blog-valve-materials.jpg",
      fullContent: "Material degradation remains the leading cause of unexpected valve downtime across petrochemical refineries and offshore topsides. Selecting between Super Duplex stainless steel (UNS S32750), Inconel 625, and Monel requires balancing chloride stress corrosion resistance, yield strength at temperature extremes, and total lifecycle cost. RAPPID maintains 100% positive material identification (PMI) on all forged and cast bodies.",
      keyPoints: [
        "Corrosion resistance limits of 316L vs Super Duplex vs Nickel Alloys",
        "PMI spectroscopic validation prior to precision CNC machining",
        "NACE MR0175 / ISO 15156 sour service compliance"
      ]
    },
    {
      id: "valve-maintenance-practices",
      num: "03 / 06",
      category: "Best Practices",
      date: "May 10, 2026",
      readTime: "6 min read",
      title: "Maintenance Practices That Extend Valve Life",
      desc: "Proven maintenance strategies designed to improve valve performance, operational safety, and overall reliability.",
      image: "/images/blog-valve-maintenance.jpg",
      fullContent: "Preventive valve maintenance cycles consistently reduce unplanned factory outages by upwards of 40%. Routine stem packing adjustments, seat seal lubrication with inert media, and scheduled acoustic leak monitoring allow maintenance engineers to detect micro-cavitation long before seat failure occurs. We share field-tested maintenance protocols used across premier PSU clients.",
      keyPoints: [
        "Ultrasonic testing protocols for detecting seat bypass leakage",
        "Gland packing torque standardization to eliminate fugitive emissions",
        "Scheduled hydrostatic re-testing guidelines during plant turnarounds"
      ]
    },
    {
      id: "global-footprint-expansion",
      num: "04 / 06",
      category: "Company Updates",
      date: "May 05, 2026",
      readTime: "3 min read",
      title: "RAPPID Valves Expands Global Footprint",
      desc: "New partnerships and strategic projects powering our mission to deliver reliable engineering solutions worldwide.",
      image: "/images/blog-global-footprint.jpg",
      fullContent: "With critical valve packages now installed across 12+ nations—including the UAE, Singapore, the United States, and Europe—RAPPID Valves continues to scale its international footprint. Our 45,000 sq.ft. manufacturing and automated testing facility in India supports fast-track export deliveries for Tier-1 EPC contractors and naval shipbuilding programs worldwide.",
      keyPoints: [
        "Expanded direct export logistics with international customs clearance",
        "Strategic channel partnerships established across GCC and Southeast Asia",
        "High-capacity 4,500+ monthly valve manufacturing scalability"
      ]
    },
    {
      id: "intelligent-flow-systems",
      num: "05 / 06",
      category: "Innovation",
      date: "Apr 28, 2026",
      readTime: "5 min read",
      title: "Smart Valves and the Rise of Intelligent Flow Systems",
      desc: "How digitalization, IoT sensors, and smart technologies are transforming modern flow control and predictive maintenance.",
      image: "/images/blog-smart-valves.jpg",
      fullContent: "The convergence of micro-sensors and industrial valve hardware enables real-time telemetry on stem position, cycle counts, operating temperature, and differential pressure. Integrated with industrial SCADA systems, smart valves autonomously flag preventative maintenance alarms before catastrophic failures occur, revolutionizing safety in automated continuous-process plants.",
      keyPoints: [
        "Real-time IoT pressure, temperature and acoustic diagnostic sensors",
        "Modbus and Profibus industrial digital network compatibility",
        "Automated predictive maintenance modeling to avoid plant shutdowns"
      ]
    },
    {
      id: "sustainable-oil-gas-flow",
      num: "06 / 06",
      category: "Industry Trends",
      date: "Apr 22, 2026",
      readTime: "4 min read",
      title: "Sustainability in the Oil & Gas Industry",
      desc: "Building a greener future through efficient flow control, fugitive emissions control, and responsible engineering.",
      image: "/images/blog-sustainability-oilgas.jpg",
      fullContent: "Stringent global environmental regulations demand ultra-low fugitive emissions from industrial valves. RAPPID Valves engineers fire-safe, low-emission valve packings certified to ISO 15848-1 and API 641 standards. By preventing fugitive volatile organic compound (VOC) emissions, our engineered solutions support sustainability and decarbonization objectives across energy operators worldwide.",
      keyPoints: [
        "API 641 and ISO 15848-1 certified low-fugitive emission stem seals",
        "Optimized flow coefficient (Cv) reducing pumping energy requirements",
        "100% recyclable metallic scrap recovery during precision CNC production"
      ]
    }
  ];

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 lg:py-28 bg-white select-none font-poppins relative overflow-hidden border-t border-gray-200"
    >
      
      {/* Background Subtle Blueprint Grid & Linework */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111418 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Blueprint Valve Sketch in Right Background */}
      <div className="absolute right-[-40px] top-10 w-[420px] h-[420px] opacity-[0.035] pointer-events-none hidden xl:block">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-black">
          <circle cx="100" cy="100" r="70" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="30" y1="100" x2="170" y2="100" strokeWidth="2" />
          <line x1="100" y1="30" x2="100" y2="170" strokeWidth="2" />
          <rect x="75" y="75" width="50" height="50" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            HEADER ROW
           ======================================================== */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 lg:mb-16 transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Eyebrow */}
          <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
            OUR BLOG
          </span>

          {/* Main Headline */}
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] leading-[1.0] tracking-[-0.035em]">
            <span className="text-[#111418]">INSIGHTS. INNOVATION. </span>
            <span className="text-[#D71920]">IMPACT.</span>
          </h2>

          {/* Red Accent Line */}
          <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5 mx-auto" />

          {/* Subtitle */}
          <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl mx-auto">
            Stay updated with expert perspectives, industry trends, and engineering insights from the world of flow control.
          </p>
        </div>

        {/* ========================================================
            6 BLOG CARDS (3 Columns x 2 Rows)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-14">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              style={{
                transitionDelay: isVisible ? `${idx * 80}ms` : '0ms'
              }}
              className={`bg-white border border-[#E5E7EB] rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgba(17,20,24,0.03)] hover:-translate-y-2 hover:shadow-xl hover:border-[#D71920]/40 transition-all duration-700 ease-apple flex flex-col justify-between group cursor-pointer transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
              }`}
            >
              <div>
                
                {/* Image Container with 16:9 Aspect Ratio */}
                <div className="relative h-52 sm:h-[220px] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Dark Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Category Badge Floating Top-Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#D71920] text-white font-poppins font-bold text-[10.5px] uppercase tracking-wider px-3 py-1 rounded-[5px] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* Date & Metadata */}
                  <div className="flex items-center space-x-2 text-[#6B7280] text-[11.5px] font-poppins font-medium mb-2.5">
                    <Calendar size={13} className="text-[#D71920]" />
                    <span>{post.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-poppins font-bold text-[17px] sm:text-[18px] text-[#111418] leading-[1.3] tracking-tight group-hover:text-[#D71920] transition-colors mb-2.5 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-xs sm:text-[13px] text-[#6B7280] leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>

              </div>

              {/* Card Footer with READ MORE & Micro Number */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 text-[#D71920] font-poppins font-bold text-[11.5px] uppercase tracking-wider group-hover:text-[#B8141A] transition-colors">
                  <span>READ MORE</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>

                <span className="font-poppins font-semibold text-[10px] text-gray-300">
                  {post.num}
                </span>
              </div>

            </article>
          ))}
        </div>

        {/* ========================================================
            CENTERED BOTTOM CTA: VIEW ALL ARTICLES
           ======================================================== */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 bg-white hover:bg-[#D71920] text-[#D71920] hover:text-white border border-[#D71920] text-[12px] font-poppins font-bold uppercase tracking-wider px-8 py-3.5 rounded-[8px] shadow-2xs hover:shadow transition-all group cursor-pointer"
          >
            <span>VIEW ALL ARTICLES</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>

      {/* ========================================================
          INTERACTIVE ARTICLE READING MODAL
         ======================================================== */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-200">
            
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 overflow-hidden rounded-t-[20px]">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#D71920] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#D71920] text-white font-poppins font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-[4px] inline-block mb-2">
                  {selectedPost.category}
                </span>
                <h2 className="font-poppins font-extrabold text-xl sm:text-2xl leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              
              {/* Metadata */}
              <div className="flex items-center space-x-4 text-xs text-gray-500 pb-4 border-b border-gray-100 mb-6 font-poppins">
                <span className="flex items-center space-x-1.5">
                  <Calendar size={13} className="text-[#D71920]" />
                  <span>{selectedPost.date}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Clock size={13} className="text-[#D71920]" />
                  <span>{selectedPost.readTime}</span>
                </span>
              </div>

              {/* Full Content */}
              <p className="font-poppins text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                {selectedPost.fullContent}
              </p>

              {/* Key Engineering Takeaways */}
              {selectedPost.keyPoints && (
                <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-5 mb-6">
                  <div className="flex items-center space-x-2 text-[#D71920] font-poppins font-bold text-xs uppercase tracking-wider mb-3">
                    <BookOpen size={14} />
                    <span>Key Engineering Considerations</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedPost.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2 font-poppins text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-poppins text-xs text-gray-500">
                  Looking for valve specifications for your project?
                </span>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-[6px] transition-colors cursor-pointer"
                >
                  Consult Engineering Team
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
