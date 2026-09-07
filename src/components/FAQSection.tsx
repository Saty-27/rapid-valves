import React, { useState } from 'react';
import {
  Layers,
  Factory,
  ShieldCheck,
  Wrench,
  Truck,
  Settings,
  Award,
  PhoneCall,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQItem {
  num: string;
  topicId: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  // Question 01 is open by default on initial page load
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTopic, setActiveTopic] = useState<string>("all");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const topics = [
    { id: "products", label: "Products & Solutions", icon: Layers },
    { id: "industries", label: "Industries & Applications", icon: Factory },
    { id: "quality", label: "Quality & Standards", icon: ShieldCheck },
    { id: "customization", label: "Customization", icon: Wrench },
    { id: "orders", label: "Orders & Delivery", icon: Truck },
    { id: "maintenance", label: "Installation & Maintenance", icon: Settings },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const faqData: FAQItem[] = [
    {
      num: "01",
      topicId: "products",
      question: "What types of valves does RAPPID manufacture?",
      answer: "RAPPID manufactures a wide range of high-quality industrial and marine valves including Gate, Globe, Check, Ball, Butterfly, Plug, and Control Valves. Our valves are engineered for reliability, durability, and optimal performance in demanding environments."
    },
    {
      num: "02",
      topicId: "industries",
      question: "Which industries do you serve?",
      answer: "We supply mission-critical flow control systems to Naval Defence, Marine Shipbuilding, Oil & Gas upstream/downstream, Petrochemicals, Steel manufacturing, Thermal Power, and Process Plants globally."
    },
    {
      num: "03",
      topicId: "industries",
      question: "Are your valves suitable for marine applications?",
      answer: "Yes. RAPPID specializes in marine and naval-grade valve systems certified to IRS and DNV standards, engineered using sea-water resistant alloys including Bronze, Cupronickel, and Super Duplex stainless steel."
    },
    {
      num: "04",
      topicId: "products",
      question: "What materials are used in your valves?",
      answer: "We cast and machine in Cast Iron, Ductile Iron, Cast Carbon Steel (WCB), Stainless Steel (CF8, CF8M, CF3M), Super Duplex (UNS S32750), Hastelloy, Monel, Inconel, and naval bronze alloys."
    },
    {
      num: "05",
      topicId: "customization",
      question: "Do you offer customized valve solutions?",
      answer: "Absolutely. Our in-house CAD/CAM and finite element analysis (FEA) engineering teams design custom end-connections, extended bonnets for cryogenic service, high-temperature trims, and automated actuator packages."
    },
    {
      num: "06",
      topicId: "quality",
      question: "What are your quality standards?",
      answer: "Our manufacturing operates under ISO 9001:2015, IBR (Indian Boiler Regulations), MSME, IEC, and undergoes rigorous hydrostatic and pneumatic testing to API 598, ASME B16.34, and BS EN 12266-1 standards."
    },
    {
      num: "07",
      topicId: "orders",
      question: "Do you provide global shipping?",
      answer: "Yes. RAPPID valves are exported to over 12 countries worldwide including the USA, UAE, Singapore, Sri Lanka, Nigeria, Australia, and European maritime hubs with complete export logistics."
    },
    {
      num: "08",
      topicId: "orders",
      question: "What is your lead time for orders?",
      answer: "Standard catalog valves ship within 1 to 3 weeks. Custom engineered configurations, specialized metallurgy, or large project valve packages typically range between 4 to 8 weeks depending on project specifications."
    },
    {
      num: "09",
      topicId: "maintenance",
      question: "Do you provide installation support?",
      answer: "Yes, we provide comprehensive technical documentation, on-site commissioning supervision, valve installation guidelines, and spare parts support through our certified field engineering team."
    },
    {
      num: "10",
      topicId: "maintenance",
      question: "How do I maintain RAPPID valves?",
      answer: "We recommend periodic stem lubrication, packing tightness inspections, and annual seat leak checks. Full operation and preventive maintenance manuals (O&M) are supplied with each valve shipment."
    },
    {
      num: "11",
      topicId: "certifications",
      question: "Are your valves certified?",
      answer: "Yes, all valves carry ISO 9001:2015, IBR, and class certification approvals. We provide EN 10204 3.1 material test certificates, PMI reports, and hydrostatic test inspection logs."
    },
    {
      num: "12",
      topicId: "quality",
      question: "Can I get technical documentation?",
      answer: "Yes. 2D dimension GA drawings, 3D CAD step files, flow coefficient (Cv) calculation sheets, and torque data are readily supplied upon request for engineering consultants and EPC contractors."
    },
    {
      num: "13",
      topicId: "orders",
      question: "How can I request a quotation?",
      answer: "You can submit an inquiry via our online Quick Inquiry form, email sales@rapidvalves.com, or contact our sales team directly with your line size, pressure rating, medium, and metallurgy."
    },
    {
      num: "14",
      topicId: "maintenance",
      question: "Do you provide after-sales support?",
      answer: "Our dedicated after-sales service division handles technical queries, on-site diagnostics, OEM warranty claims, and scheduled refurbishment across domestic and overseas installations."
    },
    {
      num: "15",
      topicId: "customization",
      question: "How can I become a distributor?",
      answer: "We welcome global channel partners and industrial distributors. Reach out through our contact form or contact our corporate office in Mumbai to discuss commercial dealership agreements."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTopicClick = (topicId: string) => {
    setActiveTopic(topicId);
    // Find the first question matching this topic and open it
    const matchIdx = faqData.findIndex(item => item.topicId === topicId);
    if (matchIdx !== -1) {
      setOpenIndex(matchIdx);
    }
  };

  return (
    <section
      id="faqs"
      ref={ref}
      className="py-20 lg:py-28 bg-white select-none font-poppins relative overflow-hidden border-t border-gray-200"
    >
      
      {/* Background Subtle Technical Grid (2–4% opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#58585A 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Subtle Upper-Right Industrial Valve Technical Blueprint Line Drawing */}
      <div className="absolute right-4 lg:right-16 top-6 w-[480px] h-[340px] opacity-[0.06] pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 300" fill="none" stroke="#58585A" strokeWidth="1.2" className="w-full h-full">
          {/* Handwheel */}
          <ellipse cx="200" cy="50" rx="75" ry="18" strokeDasharray="3 2" />
          <circle cx="200" cy="50" r="10" />
          <line x1="125" y1="50" x2="275" y2="50" />
          {/* Stem & Yoke */}
          <line x1="195" y1="50" x2="195" y2="130" />
          <line x1="205" y1="50" x2="205" y2="130" />
          <path d="M 170 110 L 195 130 L 205 130 L 230 110" />
          {/* Bonnet & Flange */}
          <rect x="160" y="130" width="80" height="20" rx="3" />
          <circle cx="170" cy="140" r="2.5" fill="#58585A" />
          <circle cx="230" cy="140" r="2.5" fill="#58585A" />
          {/* Valve Body */}
          <path d="M 140 150 C 140 220, 260 220, 260 150 Z" />
          {/* Left Flange & Pipe */}
          <rect x="80" y="165" width="20" height="70" rx="2" />
          <rect x="100" y="175" width="45" height="50" />
          <circle cx="90" cy="180" r="2.5" fill="#58585A" />
          <circle cx="90" cy="220" r="2.5" fill="#58585A" />
          {/* Right Flange & Pipe */}
          <rect x="300" y="165" width="20" height="70" rx="2" />
          <rect x="255" y="175" width="45" height="50" />
          <circle cx="310" cy="180" r="2.5" fill="#58585A" />
          <circle cx="310" cy="220" r="2.5" fill="#58585A" />
          {/* Centerline & Measurement Grid */}
          <line x1="50" y1="200" x2="350" y2="200" strokeDasharray="6 4" stroke="#D71920" strokeWidth="0.8" opacity="0.4" />
          <line x1="200" y1="20" x2="200" y2="260" strokeDasharray="6 4" stroke="#D71920" strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            HERO / HEADER ROW (Left Title + Right Engineering Badge)
           ======================================================== */}
        <div
          className={`flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 lg:mb-16 gap-6 relative transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          
          {/* Left: Heading & Description */}
          <div className="max-w-xl">
            {/* Small Red Eyebrow */}
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              FAQS
            </span>

            {/* Main Heading */}
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.14] tracking-[-0.02em] text-[#58585A]">
              <span>FREQUENTLY ASKED </span>
              <span className="text-[#D71920] block sm:inline">QUESTIONS.</span>
            </h2>

            {/* Red Underline */}
            <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />

            {/* Description */}
            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              Find answers to common questions about our products, applications, quality standards and services.
            </p>
          </div>

          {/* Right: Circular Technical Badge + Micro Copy */}
          <div className="hidden md:flex items-center space-x-6 lg:mr-4">
            
            {/* Circular Engineering Badge */}
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border border-dashed border-gray-400/80 bg-white/90 shadow-2xs flex flex-col items-center justify-center text-center p-2 backdrop-blur-xs flex-shrink-0">
              <span className="font-poppins font-bold text-[7.5px] tracking-wider text-gray-500 uppercase leading-none">
                ENGINEERED
              </span>
              <div className="text-[#D71920] text-base my-0.5 font-bold leading-none">
                ✦
              </div>
              <span className="font-poppins font-extrabold text-[7.5px] tracking-wider text-[#58585A] uppercase leading-none">
                FOR
              </span>
              <span className="font-poppins font-bold text-[7px] tracking-wider text-gray-500 uppercase leading-none mt-0.5">
                EXCELLENCE
              </span>
            </div>

            {/* Micro Copy */}
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-[10.5px] tracking-[0.15em] text-[#D71920] uppercase leading-tight">
                PRECISION.
              </span>
              <span className="font-poppins font-bold text-[10.5px] tracking-[0.15em] text-[#D71920] uppercase leading-tight">
                RELIABILITY.
              </span>
              <span className="font-poppins font-bold text-[10.5px] tracking-[0.15em] text-[#D71920] uppercase leading-tight">
                PERFORMANCE.
              </span>
              <div className="w-8 h-[2px] bg-[#D71920] mt-1.5" />
            </div>

          </div>

        </div>

        {/* ========================================================
            MAIN FAQ AREA: 2-COLUMN LAYOUT
            Left Column (~28%): Topics Navigation + Still Have Questions
            Right Column (~72%): 15 FAQ Accordion Cards
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9 items-start">
          
          {/* ========================================================
              LEFT COLUMN: TOPICS PANEL + STILL HAVE QUESTIONS
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* TOPICS CARD */}
            <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[12px] p-5 shadow-2xs">
              
              {/* Header */}
              <div className="mb-3.5 pb-2 border-b border-gray-200/80">
                <span className="font-poppins font-bold text-[12px] uppercase tracking-wider text-[#D71920] block">
                  TOPICS
                </span>
                <div className="w-6 h-[2px] bg-[#D71920] mt-1" />
              </div>

              {/* Topics List */}
              <div className="divide-y divide-gray-200/70">
                {topics.map((topic) => {
                  const IconC = topic.icon;
                  const isActive = activeTopic === topic.id;

                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicClick(topic.id)}
                      className={`w-full flex items-center space-x-3.5 py-3.5 px-3 transition-all text-left group cursor-pointer ${
                        isActive
                          ? "bg-white border-l-[3.5px] border-l-[#D71920] text-[#58585A] shadow-2xs font-semibold"
                          : "hover:bg-gray-100/70 text-[#4B5563]"
                      }`}
                    >
                      <div className={`transition-colors ${isActive ? "text-[#D71920]" : "text-[#767B85] group-hover:text-[#D71920]"}`}>
                        <IconC size={18} strokeWidth={isActive ? 2.2 : 1.8} />
                      </div>
                      <span className="font-poppins text-[13px] leading-tight flex-1">
                        {topic.label}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* STILL HAVE QUESTIONS? CARD */}
            <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[12px] p-6 shadow-2xs">
              <div className="flex items-center space-x-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#D71920] flex items-center justify-center flex-shrink-0">
                  <PhoneCall size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-poppins font-extrabold text-[15px] leading-tight text-[#58585A]">
                    STILL HAVE <span className="text-[#D71920]">QUESTIONS?</span>
                  </h4>
                </div>
              </div>

              <p className="font-poppins text-xs text-[#6B7280] leading-relaxed mb-5">
                Our engineering team is ready to help you with the right valve solution for your specific application.
              </p>

              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#D71920] hover:bg-[#B8141A] text-white font-poppins font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-[6px] shadow-sm hover:shadow transition-all group cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: 15 FAQ ACCORDION ITEMS
             ======================================================== */}
          <div className="lg:col-span-8 flex flex-col space-y-2.5">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.num}
                  style={{
                    transitionDelay: isVisible ? `${Math.min(idx * 35, 450)}ms` : '0ms'
                  }}
                  className={`border rounded-[8px] transition-all duration-300 overflow-hidden transform-gpu ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${
                    isOpen
                      ? "bg-white border-[#E5E7EB] border-l-[4px] border-l-[#D71920] shadow-[0_6px_20px_rgba(17,20,24,0.05)]"
                      : "bg-white border-[#E5E7EB] hover:border-[#D71920]/50"
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5 sm:space-x-4 pr-3">
                      {/* Question Number */}
                      <span className="font-poppins font-bold text-[14px] sm:text-[15px] text-[#D71920] w-6 flex-shrink-0">
                        {item.num}
                      </span>

                      {/* Question Text */}
                      <span className="font-poppins font-semibold text-[14px] sm:text-[15.5px] text-[#58585A] group-hover:text-[#D71920] transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Plus / Minus Indicator with smooth 180deg rotation */}
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-[#D71920]">
                      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        {isOpen ? (
                          <Minus size={20} strokeWidth={2.2} />
                        ) : (
                          <Plus size={20} strokeWidth={2.2} className="group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Answer Content with smooth CSS Grid height transition */}
                  <div
                    className={`grid transition-all duration-300 ease-apple ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-5 pt-0 text-[#6B7280] font-poppins text-xs sm:text-[13.5px] leading-relaxed border-t border-gray-100/80">
                        <div className="pt-3 pl-9 sm:pl-10">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
