import React, { useState, useRef, useEffect } from 'react';
import {
  Phone,
  Mail,
  X,
  Send,
  Search,
  GitCompare,
  Sigma,
  Globe,
  Download,
  Wrench,
  Paperclip,
  Image as ImageIcon,
  FileText,
  Mic,
  Moon,
  MoreHorizontal,
  Maximize2,
  ChevronDown,
  RotateCcw,
  User
} from 'lucide-react';

interface FloatingDockProps {
  onOpenContact: () => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time?: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenContact }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (hasStartedChat) {
      scrollToBottom();
    }
  }, [chatMessages, isTyping, hasStartedChat]);

  const quickActions = [
    {
      id: 'find',
      icon: Search,
      title: 'Find the Right Valve',
      desc: 'Guided selection',
      prompt: 'Help me find the right valve for my operating conditions.',
      response: 'To find your optimal valve, please specify:\n1. Operating Media (Steam, Seawater, Crude, Chemical, Cryogenic)\n2. Pressure Class (Class 150 to 2500 / PN10 to PN420)\n3. Temperature Range (-196°C to +550°C)\n4. Body Material preference (Carbon Steel WCB, Stainless CF8M, Super Duplex, or Inconel).'
    },
    {
      id: 'compare',
      icon: GitCompare,
      title: 'Compare Products',
      desc: 'Side-by-side',
      prompt: 'Compare Gate Valves vs Ball Valves for isolation duties.',
      response: 'Key Comparisons for Isolation Duties:\n• Gate Valves (API 600): Linear wedge design, zero pressure drop in fully open position, bi-directional seal, ideal for heavy steam and crude lines.\n• Ball Valves (API 6D): Quarter-turn (90°) fast operation, fire-safe trunnion design, superior bubble-tight shutoff, suited for offshore and high-cycling lines.'
    },
    {
      id: 'specs',
      icon: Sigma,
      title: 'Technical Specifications',
      desc: 'Sizes, class, trim',
      prompt: 'What are the technical specifications for RAPPID Marine Valves?',
      response: 'RAPPID Marine Valves Technical Specs:\n• Standards: ABS, DNV, IRS & Lloyd\'s Register Type Approved\n• Size Range: DN15 (1/2") to DN1200 (48")\n• Trim: Monel, Cu-Ni 90/10, Bronze, Stellite hardfacing\n• Qualifications: MIL-STD-901D Shock Qualified, MIL-STD-167-1 Vibration Tested.'
    },
    {
      id: 'industries',
      icon: Globe,
      title: 'Industries We Serve',
      desc: 'Marine to pharma',
      prompt: 'Which critical industries do you supply valves to?',
      response: 'RAPPID supplies critical fluid control valves across 10 global sectors:\n1. Shipbuilding & Commercial Yards\n2. Defence & Indian Navy Warships\n3. Offshore & Onshore Oil & Gas\n4. Thermal & Nuclear Power Plants\n5. Chemical & Petrochemical\n6. Water Treatment & Desalination\n7. Steel, Pharmaceutical, Distillery, & Renewable Energy.'
    },
    {
      id: 'catalogues',
      icon: Download,
      title: 'Download Catalogues',
      desc: 'Datasheets & brochures',
      prompt: 'Where can I download product catalogues and CAD datasheets?',
      response: 'You can download comprehensive engineering documentation directly:\n• Full Industrial Valve Catalogue (PDF)\n• Marine & Naval Type Approval Certificates (ABS/DNV/IRS)\n• 3D CAD / Step Models for engineering piping layout.\nOur technical sales desk will also dispatch hardbound catalogues upon request.'
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: 'Installation & Maintenance',
      desc: 'Field guidance',
      prompt: 'What are the recommended torque and installation guidelines?',
      response: 'General Installation & Field Guidance:\n1. Pipeline Flushing: Ensure pipelines are flushed free of weld spatter and debris prior to valve commissioning.\n2. Flange Bolt Torquing: Tighten cross-pattern in 3 successive steps (30%, 70%, 100% nominal torque).\n3. Gland Packing: Live-loaded gland packing requires minimal field adjustment and zero emission leakage.'
    }
  ];

  const handleActionClick = (action: typeof quickActions[0]) => {
    setHasStartedChat(true);
    const userMsg: Message = { sender: 'user', text: action.prompt, time: 'Just now' };
    setChatMessages([userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [
        ...prev,
        { sender: 'bot', text: action.response, time: 'Just now' }
      ]);
    }, 600);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText('');
    setHasStartedChat(true);

    const userMsg: Message = { sender: 'user', text: query, time: 'Just now' };
    setChatMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "Thank you for consulting Rappid AI Engineer. A technical flow specialist will review your inquiry immediately. You can reach our sales engineering desk directly at +91 (22) 2580-XXXX or email sales@rappidvalves.in.";
      const lower = query.toLowerCase();

      if (lower.includes("price") || lower.includes("quote") || lower.includes("cost")) {
        reply = "For an immediate commercial quotation, please specify the valve type (Gate, Globe, Check, Ball), nominal size (DN/NPS), pressure rating (Class 150–2500), and body material (WCB, CF8M, Super Duplex).";
      } else if (lower.includes("marine") || lower.includes("navy") || lower.includes("ship")) {
        reply = "Our marine valves hold Type Approvals from ABS, DNV, and Indian Register of Shipping (IRS), with high-shock MIL-S-901D ratings for naval warships, destroyers, and submarines.";
      } else if (lower.includes("lead time") || lower.includes("delivery") || lower.includes("stock")) {
        reply = "Standard carbon steel (WCB) and stainless (CF8M) valves are available on ex-stock or 2–3 weeks. Custom exotic alloy valves (Duplex, Monel, Inconel) typically require 6–8 weeks.";
      } else if (lower.includes("standard") || lower.includes("api") || lower.includes("bs")) {
        reply = "All valves are engineered and pressure tested in strict adherence to API 600, BS 1873, API 594, API 6D, API 609, and ISO 15848 low-fugitive emission standards.";
      }

      setChatMessages(prev => [
        ...prev,
        { sender: 'bot', text: reply, time: 'Just now' }
      ]);
    }, 700);
  };

  return (
    <>
      {/* ========================================================
          AESTHETIC FLOATING VERTICAL DOCK ON RIGHT EDGE
          Redesigned to look integrated, modern, and aesthetic
         ======================================================== */}
      <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 p-1.5 rounded-[16px] bg-white/85 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200/70 select-none">
        
        {/* 1. WhatsApp Button (Authentic WhatsApp Green + SVG Icon) */}
        <a
          href="https://wa.me/919820012345?text=Hello%20Rappid%20Valves,%20I%20have%20an%20inquiry%20regarding%20industrial%20valves"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-[12px] bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-sm hover:scale-105 hover:shadow-md transition-all group relative cursor-pointer"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          {/* Tooltip on left */}
          <span className="absolute right-full mr-2.5 px-2.5 py-1 bg-[#111418] text-white text-[11px] font-poppins font-medium rounded-[6px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* 2. Phone Call Button (Rappid Red) */}
        <a
          href="tel:+912225801234"
          className="w-10 h-10 rounded-[12px] bg-[#D71920] hover:bg-[#B8141A] text-white flex items-center justify-center shadow-sm hover:scale-105 hover:shadow-md transition-all group relative cursor-pointer"
          title="Call Sales Desk"
          aria-label="Call"
        >
          <Phone size={18} />
          {/* Tooltip on left */}
          <span className="absolute right-full mr-2.5 px-2.5 py-1 bg-[#111418] text-white text-[11px] font-poppins font-medium rounded-[6px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Sales Desk
          </span>
        </a>

        {/* 3. Email Button (Sleek Dark Industrial) */}
        <button
          onClick={onOpenContact}
          className="w-10 h-10 rounded-[12px] bg-[#111418] hover:bg-[#1E232B] text-white flex items-center justify-center shadow-sm hover:scale-105 hover:shadow-md transition-all group relative cursor-pointer"
          title="Email Sales Department"
          aria-label="Email"
        >
          <Mail size={18} />
          {/* Tooltip on left */}
          <span className="absolute right-full mr-2.5 px-2.5 py-1 bg-[#111418] text-white text-[11px] font-poppins font-medium rounded-[6px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Request a Quote / Email
          </span>
        </button>

      </div>

      {/* ========================================================
          BOTTOM-RIGHT FLOATING AI BOT LAUNCHER WITH VALVE ICON
         ======================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 select-none">
        
        {/* Greeting Tooltip Bubble */}
        {!chatOpen && showTooltip && (
          <div className="hidden sm:flex items-center bg-white border border-gray-200 text-[#111418] text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative animate-bounce font-poppins">
            <span>Hi! How can we help you today?</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-2.5 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-200 rotate-45" />
          </div>
        )}

        {/* AI Bot Launcher Button (With Valve Icon) */}
        <button
          onClick={() => {
            setChatOpen(!chatOpen);
            setShowTooltip(false);
          }}
          className="w-14 h-14 rounded-full bg-[#111418] hover:bg-[#1E232B] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group border-2 border-white cursor-pointer hover:scale-105 p-1 overflow-hidden"
          aria-label="Open Rappid AI Engineer"
          title="Open Rappid AI Engineer"
        >
          {chatOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <>
              {/* Bronze Valve Avatar with Red Wheel */}
              <img
                src="/images/ai-valve-launcher.png"
                alt="Rappid Valve AI Engineer"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
              />
              {/* Status Dot */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D71920] rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-xs">
                1
              </span>
            </>
          )}
        </button>

      </div>

      {/* ========================================================
          INTERACTIVE AI BOT MODAL (EXACT REFERENCE: media_1788469089219.png)
         ======================================================== */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[360px] sm:w-[410px] max-h-[85vh] h-[640px] bg-white rounded-[22px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-gray-200/80 overflow-hidden flex flex-col animate-fadeIn font-poppins">
          
          {/* 1. Header (Dark Navy/Graphite) */}
          <div className="bg-[#111418] px-4 py-3 text-white flex items-center justify-between border-b border-gray-800 flex-shrink-0">
            {/* Left: Avatar + Title + Status */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1A181C] border border-gray-700 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/ai-valve-header.png"
                  alt="Rappid AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <h4 className="font-poppins font-bold text-xs tracking-wide text-white">
                  Rappid AI Engineer
                </h4>
                <div className="text-[10px] text-gray-400 flex items-center font-poppins mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mr-1.5 animate-pulse" />
                  Online · engineering mode
                </div>
              </div>
            </div>

            {/* Right: Controls (EN, Dark mode, More, Maximize, Close) */}
            <div className="flex items-center space-x-2 text-gray-400">
              <button className="flex items-center text-[11px] text-gray-300 hover:text-white px-1.5 py-0.5 rounded hover:bg-gray-800 transition-colors cursor-pointer">
                <span>EN</span>
                <ChevronDown size={11} className="ml-0.5" />
              </button>
              <button className="p-1 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer" title="Theme">
                <Moon size={13} />
              </button>
              <button className="p-1 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer" title="Options">
                <MoreHorizontal size={13} />
              </button>
              <button className="p-1 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer" title="Expand">
                <Maximize2 size={12} />
              </button>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 hover:text-red-400 hover:bg-gray-800 rounded transition-colors cursor-pointer"
                title="Close"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* 2. Body Area (Initial Welcome State OR Interactive Chat Messages) */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#FAFBFD] space-y-4 text-xs">
            
            {!hasStartedChat ? (
              /* INITIAL HERO STATE (Exact layout from media_1788469089219.png) */
              <div className="flex flex-col items-center pt-2 pb-1 text-center">
                
                {/* Center Valve Avatar */}
                <div className="w-20 h-20 rounded-full bg-[#1A181C] p-1 shadow-md border-2 border-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/ai-valve-avatar.png"
                    alt="Rappid AI Engineer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-poppins font-bold text-lg text-[#111418] mt-3">
                  Rappid AI Engineer
                </h3>
                <p className="font-poppins text-xs text-gray-500 max-w-[260px] mx-auto mt-1 leading-snug">
                  Your intelligent valve selection & engineering assistant
                </p>

                {/* 2-Column × 3-Row Quick Action Cards Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full mt-5">
                  {quickActions.map((act) => {
                    const IconComp = act.icon;
                    return (
                      <button
                        key={act.id}
                        onClick={() => handleActionClick(act)}
                        className="bg-white hover:bg-red-50/40 border border-gray-200/90 hover:border-red-300 rounded-[14px] p-3 text-left transition-all hover:shadow-xs group cursor-pointer flex flex-col justify-between min-h-[90px]"
                      >
                        <div className="w-7 h-7 rounded-[8px] bg-red-50 text-[#D71920] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <IconComp size={15} strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="font-poppins font-bold text-[12px] text-[#111418] leading-tight group-hover:text-[#D71920] transition-colors">
                            {act.title}
                          </div>
                          <div className="font-poppins text-[10px] text-gray-400 mt-0.5">
                            {act.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

              </div>
            ) : (
              /* ACTIVE CHAT CONVERSATION */
              <div className="space-y-3 pt-1">
                {/* Reset to Menu button */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium">Engineering Consultation</span>
                  <button
                    onClick={() => setHasStartedChat(false)}
                    className="inline-flex items-center text-[10.5px] font-semibold text-[#D71920] hover:underline cursor-pointer"
                  >
                    <RotateCcw size={11} className="mr-1" />
                    Back to Menu
                  </button>
                </div>

                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-[#1A181C] overflow-hidden flex items-center justify-center flex-shrink-0 mt-0.5">
                        <img src="/images/ai-valve-header.png" alt="AI" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-[14px] max-w-[84%] text-xs leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-[#D71920] text-white font-medium rounded-tr-xs'
                          : 'bg-white text-gray-800 border border-gray-200/80 shadow-xs rounded-tl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5">
                        <User size={12} />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[#1A181C] overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img src="/images/ai-valve-header.png" alt="AI" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white border border-gray-200/80 p-2.5 rounded-[14px] flex items-center space-x-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-bounce delay-200" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

          </div>

          {/* 3. Bottom Input Bar (Exact Layout from media_1788469089219.png) */}
          <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
            <form
              onSubmit={handleSendMessage}
              className="border border-red-200 hover:border-red-300 focus-within:border-[#D71920] rounded-[24px] p-1.5 pl-3 flex items-center bg-white shadow-xs transition-all"
            >
              {/* Attachment Icons */}
              <div className="flex items-center space-x-2 text-gray-400 mr-2 flex-shrink-0">
                <button type="button" className="hover:text-gray-700 transition-colors" title="Attach file">
                  <Paperclip size={15} />
                </button>
                <button type="button" className="hover:text-gray-700 transition-colors" title="Attach image">
                  <ImageIcon size={15} />
                </button>
                <button type="button" className="hover:text-gray-700 transition-colors" title="Attach document">
                  <FileText size={15} />
                </button>
                <button type="button" className="hover:text-gray-700 transition-colors" title="Voice input">
                  <Mic size={15} />
                </button>
              </div>

              {/* Input */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask anything technical..."
                className="flex-1 text-xs text-[#111418] placeholder-gray-400 focus:outline-none bg-transparent font-poppins min-w-0"
              />

              {/* Red Rounded Send Button */}
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-red-100 hover:bg-[#D71920] text-[#D71920] hover:text-white flex items-center justify-center transition-colors flex-shrink-0 ml-1 cursor-pointer"
                title="Send message"
              >
                <Send size={14} className="ml-0.5" />
              </button>
            </form>
          </div>

          {/* 4. Footer Micro-copy */}
          <div className="py-1.5 px-4 bg-white text-center text-[10px] text-gray-400 border-t border-gray-50 flex-shrink-0 font-poppins">
            Prototype experience · responses are illustrative · English
          </div>

        </div>
      )}
    </>
  );
};
