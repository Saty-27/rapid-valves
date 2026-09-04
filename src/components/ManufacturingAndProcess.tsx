import React, { useState, useEffect } from 'react';
import {
  FileText,
  Compass,
  FileCheck,
  ThumbsUp,
  Cog,
  Award,
  ArrowRight,
  Activity,
  ChevronDown
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ManufacturingAndProcessProps {
  onTourClick?: () => void;
  onOpenContact?: () => void;
}

export const ManufacturingAndProcess: React.FC<ManufacturingAndProcessProps> = ({ onTourClick, onOpenContact }) => {
  // Master Workflow Timeline: 0 -> 1 -> 2 -> 3 -> 4 -> 5 (Quality Panel Highlight) -> 0
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Master timeline timer: advances step every 1400ms (7.0s total cycle)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  const processSteps = [
    {
      num: "01",
      icon: FileText,
      title: "QUOTATION",
      desc: "Detailed technical specification review and commercially viable bid response."
    },
    {
      num: "02",
      icon: Compass,
      title: "DRAWINGS SUBMISSION",
      desc: "Comprehensive 2D cross-sections and material datasheets provided for scrutiny."
    },
    {
      num: "03",
      icon: FileCheck,
      title: "GAD SUBMISSION",
      desc: "General Arrangement Drawings generated for interface validation (if required)."
    },
    {
      num: "04",
      icon: ThumbsUp,
      title: "CUSTOMER APPROVAL",
      desc: "Sign-off on all manufacturing drawings, QAP, and testing protocols."
    },
    {
      num: "05",
      icon: Cog,
      title: "COMMENCE PRODUCTION",
      desc: "Precision machining, hydrostatic testing, painting and certified dispatch."
    }
  ];

  return (
    <div id="manufacturing" className="bg-[#FAFAFA] font-poppins relative select-none overflow-hidden">
      
      {/* Background Subtle Blueprint Grid Line Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111418 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* SECTION K: PROCESS TIMELINE "FROM REQUIREMENT TO DELIVERY" */}
      <section id="process" ref={ref} className="py-16 lg:py-24 relative z-10">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-8 xl:px-14">
          
          {/* ========================================================
              HEADER ROW
             ======================================================== */}
          <div
            className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-14 gap-6 transform-gpu transition-all duration-700 ease-apple ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="max-w-2xl">
              <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
                FROM REQUIREMENT TO DELIVERY
              </span>

              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.05] tracking-[-0.035em]">
                <span className="text-[#111418] block sm:inline">TRANSPARENT 5-STEP </span>
                <span className="text-[#111418] block sm:inline">ENGINEERING </span>
                <span className="text-[#D71920]">WORKFLOW</span>
              </h2>

              <div className="w-10 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />

              <p className="font-poppins text-[#6B7280] text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-xl">
                A structured, traceable process that ensures every valve meets the highest standards of quality, safety and performance.
              </p>
            </div>

            <div className="lg:pb-2">
              <button
                onClick={onTourClick || onOpenContact}
                className="inline-flex items-center space-x-2 bg-white hover:bg-[#D71920] text-[#D71920] hover:text-white border border-[#D71920] text-[12px] font-poppins font-bold uppercase tracking-wider px-6 py-3 rounded-[6px] shadow-2xs hover:shadow transition-all group cursor-pointer"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* ========================================================
              MAIN WORKFLOW CONTAINER:
              - Left (~78% width): 5 Steps with continuous connected pipeline & badges
              - Right (~22% width): Dark Quality Panel with curved pipeline intake
             ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-10">
            
            {/* 5-STEP WORKFLOW COLUMN (lg:col-span-9 xl:col-span-9) */}
            <div className="lg:col-span-9 flex flex-col justify-between relative">
              
              {/* DESKTOP CONNECTED PIPELINE (Floating Above the Cards) */}
              <div className="hidden lg:block relative mb-6 pt-4">
                
                {/* Background Connecting Pipe */}
                <div className="absolute top-[38px] left-[10%] right-[10%] h-[2.5px] bg-[#E5E7EB] z-0" />

                {/* Animated Glowing Red Flow Line */}
                <div
                  className="absolute top-[38px] left-[10%] h-[2.5px] bg-gradient-to-r from-[#D71920] to-[#FF4D55] transition-all duration-700 ease-out z-0 shadow-[0_0_12px_rgba(215,25,32,0.6)]"
                  style={{
                    width: `${Math.min(100, Math.max(0, currentStep * 25))}%`
                  }}
                />

                {/* The 5 Number Badges & Interconnecting Animated Chevrons */}
                <div className="grid grid-cols-5 relative z-10">
                  {processSteps.map((step, idx) => {
                    const isActive = currentStep === idx;
                    const isPassed = currentStep > idx;

                    return (
                      <div key={step.num} className="flex items-center justify-center relative">
                        
                        {/* Number Circle Badge */}
                        <div
                          onClick={() => setActiveStep(idx)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-sm transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "bg-white text-[#D71920] border-2 border-[#D71920] shadow-[0_0_22px_rgba(215,25,32,0.45)] scale-110 ring-4 ring-red-100/80"
                              : isPassed
                              ? "bg-[#D71920] text-white border-2 border-[#D71920] shadow-sm"
                              : "bg-white text-[#6B7280] border-2 border-[#E5E7EB] hover:border-gray-400"
                          }`}
                        >
                          {step.num}
                        </div>

                        {/* Animated Interconnecting Chevrons (between circles) */}
                        {idx < 4 && (
                          <div className="absolute left-[62%] right-[-38%] flex items-center justify-center space-x-0.5 text-red-500/80 pointer-events-none">
                            <span className={`text-xs font-bold transition-opacity duration-300 ${isActive ? "opacity-100 animate-pulse text-[#D71920]" : "opacity-35"}`}>›</span>
                            <span className={`text-xs font-bold transition-opacity duration-300 ${isActive ? "opacity-100 animate-pulse text-[#D71920] delay-100" : "opacity-35"}`}>›</span>
                            <span className={`text-xs font-bold transition-opacity duration-300 ${isActive ? "opacity-100 animate-pulse text-[#D71920] delay-200" : "opacity-35"}`}>›</span>
                            <span className={`text-xs font-bold transition-opacity duration-300 ${isActive ? "opacity-100 animate-pulse text-[#D71920] delay-300" : "opacity-35"}`}>›</span>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

                {/* Curved Connection Pipe Exiting Step 05 toward Quality Panel */}
                <div className="absolute top-[38px] right-[-32px] w-[50px] h-[70px] pointer-events-none hidden xl:block">
                  <svg viewBox="0 0 50 70" fill="none" className="w-full h-full">
                    <path
                      d="M 0 0 C 35 0, 45 20, 45 70"
                      stroke={currentStep >= 4 ? "#D71920" : "#E5E7EB"}
                      strokeWidth="2.5"
                      strokeDasharray={currentStep >= 4 ? "none" : "4 4"}
                      className="transition-colors duration-500"
                    />
                  </svg>
                  {/* Downward Chevrons */}
                  <div className="absolute top-6 right-[0px] flex flex-col items-center text-[#D71920] animate-bounce">
                    <ChevronDown size={14} className={currentStep === 4 || currentStep === 5 ? "opacity-100" : "opacity-30"} />
                  </div>
                </div>

              </div>

              {/* 5 CARDS ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 flex-1">
                {processSteps.map((step, idx) => {
                  const IconC = step.icon;
                  const isActive = currentStep === idx;

                  return (
                    <div
                      key={step.num}
                      onMouseEnter={() => setHoveredStep(idx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => setActiveStep(idx)}
                      style={{
                        transitionDelay: isVisible ? `${idx * 80}ms` : '0ms'
                      }}
                      className={`relative bg-white rounded-[16px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-700 ease-apple cursor-pointer text-left group transform-gpu ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      } ${
                        isActive
                          ? "border-2 border-[#D71920] shadow-[0_12px_32px_rgba(215,25,32,0.1)] -translate-y-1 bg-gradient-to-b from-white to-red-50/20"
                          : "border border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-md"
                      }`}
                    >
                      {/* Mobile Badge View */}
                      <div className="lg:hidden flex items-center justify-between mb-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-poppins font-extrabold text-xs ${
                          isActive ? "bg-[#D71920] text-white" : "bg-gray-100 text-gray-600"
                        }`}>
                          {step.num}
                        </span>
                        <span className="text-[11px] font-bold text-[#D71920]">STEP {step.num}</span>
                      </div>

                      {/* Icon Container */}
                      <div>
                        <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center mb-5 transition-all duration-300 ${
                          isActive
                            ? "bg-red-50 text-[#D71920] border border-red-200 scale-105"
                            : "bg-gray-50 text-[#111418] border border-gray-100 group-hover:text-[#D71920] group-hover:bg-red-50/50"
                        }`}>
                          <IconC size={22} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h4 className="font-poppins font-bold text-[13px] sm:text-[14px] uppercase text-[#111418] mb-2 leading-tight tracking-tight">
                          {step.title}
                        </h4>

                        {/* Description */}
                        <p className="font-poppins text-[11.5px] sm:text-[12px] text-[#6B7280] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Status Indicator */}
                      <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className={`font-poppins font-semibold text-[11px] transition-colors ${
                          isActive ? "text-[#D71920] font-bold" : "text-[#6B7280]"
                        }`}>
                          {isActive ? "In Progress" : "In Progress"}
                        </span>
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#D71920] shadow-[0_0_8px_#D71920] animate-ping"
                            : "bg-[#D71920]"
                        }`} />
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: DARK QUALITY CONTROL PANEL (lg:col-span-3 xl:col-span-3) */}
            <div className="lg:col-span-3">
              <div className={`h-full bg-[#0E1318] rounded-[18px] p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-500 border ${
                currentStep === 5
                  ? "border-[#D71920] ring-2 ring-red-500/40 shadow-[0_10px_35px_rgba(215,25,32,0.25)]"
                  : "border-gray-800"
              }`}>
                
                {/* Red Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D71920]" />

                {/* Subtle Linework in Card Background */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-white">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Badge Icon */}
                  <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center mb-6 transition-all duration-500 ${
                    currentStep === 5
                      ? "bg-[#D71920] text-white shadow-[0_0_20px_rgba(215,25,32,0.8)] scale-110"
                      : "bg-red-950/40 text-[#D71920] border border-red-900/40"
                  }`}>
                    <Award size={24} strokeWidth={2} />
                  </div>

                  {/* Headline */}
                  <h3 className="font-poppins font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight">
                    QUALITY.
                    <br />
                    PRECISION.
                    <br />
                    <span className="text-[#D71920]">ON TIME.</span>
                  </h3>

                  {/* Thin Red Accent Divider */}
                  <div className="w-8 h-[2px] bg-[#D71920] mt-3.5 mb-4" />

                  {/* Body Copy */}
                  <p className="font-poppins text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                    Every valve undergoes hydrostatic, pneumatic, and non-destructive examination prior to shipment.
                  </p>
                </div>

                {/* Bottom Inspection Badge */}
                <div className="pt-6 mt-6 border-t border-gray-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="font-poppins font-extrabold text-white uppercase text-[11px] tracking-wider flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
                    <span>100% INSPECTED</span>
                  </span>
                  <ArrowRight size={14} className="text-[#D71920]" />
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================
              LOWER PROCESS TRACKING BAR (Exact Blueprint from Reference)
              - Left: Heartbeat / Activity Pulse Icon + PROCESS TRACKING
              - Center: 5 Interactive Nodes with travelling red pulse
              - Right: QUALITY ASSURED AT EVERY STEP Badge
             ======================================================== */}
          <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(17,20,24,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left Pulse Section */}
            <div className="flex items-center space-x-3.5 lg:w-48 flex-shrink-0">
              <div className="w-10 h-10 rounded-[10px] bg-red-50 text-[#D71920] flex items-center justify-center flex-shrink-0 border border-red-100 shadow-2xs">
                <Activity size={20} className="animate-pulse" />
              </div>
              <div>
                <h5 className="font-poppins font-extrabold text-[12px] uppercase tracking-wider text-[#111418] leading-tight">
                  PROCESS
                </h5>
                <h5 className="font-poppins font-extrabold text-[12px] uppercase tracking-wider text-[#D71920] leading-tight">
                  TRACKING
                </h5>
              </div>
            </div>

            {/* Center Timeline Nodes (5 Stages) */}
            <div className="flex-1 relative px-2 sm:px-6">
              
              {/* Timeline Horizontal Line */}
              <div className="absolute top-2 left-6 right-6 h-[1.5px] bg-[#E5E7EB] hidden sm:block" />
              
              {/* Active Animated Progress Line */}
              <div
                className="absolute top-2 left-6 h-[1.5px] bg-[#D71920] transition-all duration-700 ease-out hidden sm:block shadow-[0_0_8px_#D71920]"
                style={{
                  width: `${Math.min(100, Math.max(0, currentStep * 25))}%`
                }}
              />

              {/* 5 Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
                {processSteps.map((step, idx) => {
                  const isActive = currentStep === idx;
                  const isPassed = currentStep > idx;

                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveStep(idx)}
                      className="flex flex-col items-center text-center cursor-pointer group"
                    >
                      {/* Node Dot */}
                      <div className="relative mb-2 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#D71920] ring-4 ring-red-100 scale-125 shadow-[0_0_10px_#D71920]"
                            : isPassed
                            ? "bg-[#D71920]"
                            : "bg-[#E5E7EB] group-hover:bg-gray-400"
                        }`} />
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-[#D71920] animate-ping opacity-60" />
                        )}
                      </div>

                      {/* Step Code */}
                      <span className={`font-poppins font-bold text-[11px] uppercase transition-colors ${
                        isActive ? "text-[#D71920]" : "text-[#111418]"
                      }`}>
                        STEP {step.num}
                      </span>

                      {/* Step Name */}
                      <span className="font-poppins text-[10.5px] text-[#6B7280] line-clamp-1">
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Quality Seal Note */}
            <div className="lg:w-60 flex-shrink-0 flex items-center space-x-2.5 lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse flex-shrink-0" />
              <span className="font-poppins font-bold text-[11px] uppercase tracking-wider text-[#111418]">
                QUALITY ASSURED AT EVERY STEP
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
