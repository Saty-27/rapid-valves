import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CertItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  scope: string;
  authority?: string;
  regStatus: string;
  validity?: string;
  auditingBody?: string;
}

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.12 });

  const certifications: CertItem[] = [
    {
      id: "iso",
      name: "ISO 9001:2015",
      subtitle: "Quality Management System",
      image: "/images/cert-iso.png",
      authority: "International Organization for Standardization",
      scope: "Design, Development, Precision Manufacturing, Metallurgy Testing, and Global Export of Industrial, Marine, and High-Pressure Valves.",
      regStatus: "Audited & Certified"
    },
    {
      id: "msme",
      name: "MSME",
      subtitle: "Micro, Small & Medium Enterprises",
      image: "/images/cert-msme.png",
      authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
      scope: "Recognized Manufacturing Enterprise for High-Precision Engineering and Defense Supply Chain Component Production.",
      regStatus: "Govt. Registered"
    },
    {
      id: "gst",
      name: "GST",
      subtitle: "Goods and Services Tax Registered",
      image: "/images/cert-gst.png",
      authority: "Central Board of Indirect Taxes and Customs, Govt. of India",
      scope: "Compliant Taxpayer and Registered Industrial Manufacturer for Domestic Supply and International Bonded Exports.",
      regStatus: "Verified & Compliant"
    },
    {
      id: "iec",
      name: "IEC",
      subtitle: "International Electrotechnical Commission",
      image: "/images/cert-iec.png",
      authority: "Directorate General of Foreign Trade (DGFT) / IEC Standards",
      scope: "Authorized Importer-Exporter Code and International Standardization for Flow Control Equipment and Valve Automation.",
      regStatus: "Valid Global Authorization"
    },
    {
      id: "incorporation",
      name: "INCORPORATION",
      subtitle: "Ministry of Corporate Affairs (MCA)",
      image: "/images/cert-incorporation.png",
      regStatus: "NSE Listed Public Entity",
      scope: "Public Limited Entity Registered under the Companies Act, 2013",
      validity: "Active Corporate Entity",
      auditingBody: "Registrar of Companies (RoC), Mumbai"
    },
    {
      id: "ibr",
      name: "IBR APPROVED",
      subtitle: "Indian Boiler Regulations Certified",
      image: "/images/cert-ibr.png",
      regStatus: "Certified for High-Pressure Steam",
      scope: "Design and Manufacture of Valves for High-Pressure Steam and Boiler Services",
      validity: "Regularly Inspected & Approved",
      auditingBody: "Central Boilers Board (CBB)"
    }
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FBFBFC] relative select-none font-poppins border-t border-b border-gray-100 overflow-hidden"
    >
      
      {/* Background World Map Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-8 right-12 lg:right-24 w-[580px] lg:w-[720px] h-[320px] opacity-[0.25] select-none">
          <svg viewBox="0 0 1000 500" fill="none" className="w-full h-full text-gray-400">
            <circle cx="240" cy="140" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="260" cy="155" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="220" cy="180" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="280" cy="190" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="340" cy="320" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="360" cy="350" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="510" cy="120" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="530" cy="135" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="500" cy="150" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="520" cy="240" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="550" cy="280" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="560" cy="360" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="680" cy="160" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="700" cy="190" r="2.5" fill="#D71920" />
            <circle cx="740" cy="210" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="780" cy="170" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="820" cy="220" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="840" cy="360" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="880" cy="390" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="510" cy="120" r="3.5" fill="#D71920" />
            <circle cx="700" cy="190" r="4.5" fill="#D71920" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 xl:px-14 relative z-10">
        
        {/* ========================================================
            HEADER ROW
           ======================================================== */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="font-poppins font-bold text-[12px] uppercase tracking-[0.18em] text-[#D71920] block mb-2">
              CERTIFICATIONS & APPROVALS
            </span>

            {/* Main Headline */}
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.14] tracking-[-0.02em]">
              <span className="text-[#111418] block sm:inline">COMMITTED TO GLOBAL </span>
              <span className="text-[#111418] block sm:inline">QUALITY </span>
              <span className="text-[#D71920]">STANDARDS</span>
            </h2>

            {/* Red Accent Line under Heading */}
            <div className="w-9 h-[2.5px] bg-[#D71920] mt-3.5 mb-3.5" />

            {/* Supporting Copy */}
            <p className="font-poppins text-[#6B7280] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              Rappid Valves adhere to internationally recognized certifications and approvals that ensure safety, reliability, and compliance across global industries.
            </p>
          </div>

          <div className="lg:pb-3">
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 font-poppins font-bold text-[12px] uppercase tracking-[0.06em] text-[#D71920] hover:text-[#B8141A] transition-colors group"
            >
              <span className="border-b border-transparent group-hover:border-[#D71920] transition-all">VIEW ALL CERTIFICATES</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* ========================================================
            UNIFIED PREMIUM CERTIFICATION PANEL (Verified Credentials)
            Left-to-right 80ms sequential reveal
           ======================================================== */}
        <div
          className={`bg-white border border-[#E5E7EB] rounded-[18px] shadow-[0_12px_40px_rgba(17,20,24,0.06)] overflow-hidden transform-gpu transition-all duration-700 ease-apple ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                style={{
                  transitionDelay: isVisible ? `${idx * 80}ms` : '0ms',
                }}
                className={`group relative p-6 sm:p-7 flex flex-col items-center text-center cursor-pointer transition-all duration-600 ease-apple hover:bg-[#FAFAFA] transform-gpu ${
                  isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-4'
                }`}
              >
                {/* Logo Container with gentle scale emphasis */}
                <div className="w-full h-20 sm:h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-16 sm:max-h-20 max-w-[110px] object-contain drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Certificate Name */}
                <h3 className="font-poppins font-bold text-[13px] sm:text-[14px] uppercase text-[#111418] group-hover:text-[#D71920] transition-colors mb-1.5 leading-snug">
                  {cert.name}
                </h3>

                {/* Short Subtitle */}
                <p className="font-poppins text-[#6B7280] text-[11px] leading-relaxed max-w-[150px]">
                  {cert.subtitle}
                </p>

                {/* Subtle Red Bottom Indicator on Hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#D71920] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PREMIUM BOTTOM MICRO-LINE TRUST STATEMENT
           ======================================================== */}
        <div
          className={`mt-8 text-center transform-gpu transition-all duration-700 delay-500 ease-apple ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-poppins font-semibold text-[11px] tracking-[0.2em] uppercase text-[#6B7280]">
            QUALITY ASSURED &nbsp;•&nbsp; STANDARDS DRIVEN &nbsp;•&nbsp; ENGINEERED FOR TRUST
          </p>
        </div>

      </div>

      {/* ========================================================
          CERTIFICATE DETAIL MODAL
         ======================================================== */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[16px] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border-t-4 border-[#D71920] animate-scaleIn">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#111418] text-xl font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-100">
              <div className="w-20 h-20 rounded-[12px] bg-gray-50 border border-gray-100 p-2 flex items-center justify-center flex-shrink-0 shadow-xs">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>

              <div>
                <span className="font-poppins font-bold text-[10px] uppercase tracking-wider text-[#D71920] bg-red-50 px-2 py-0.5 rounded-[4px]">
                  {selectedCert.regStatus}
                </span>
                <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-[#111418] mt-1.5 leading-tight">
                  {selectedCert.name}
                </h3>
                <p className="font-poppins text-xs text-[#6B7280]">
                  {selectedCert.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs font-poppins mb-6">
              <div>
                <span className="font-bold text-[#111418] block mb-1">Accreditation Authority:</span>
                <p className="text-[#5B5F66] leading-relaxed bg-gray-50 p-3 rounded-[6px] border border-gray-100">
                  {selectedCert.authority}
                </p>
              </div>

              <div>
                <span className="font-bold text-[#111418] block mb-1">Certified Scope & Compliance:</span>
                <p className="text-[#5B5F66] leading-relaxed bg-gray-50 p-3 rounded-[6px] border border-gray-100">
                  {selectedCert.scope}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-1.5 text-xs text-[#059669] font-medium font-poppins">
                <CheckCircle2 size={15} />
                <span>Active & Compliant Standing</span>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 bg-[#111418] hover:bg-[#D71920] text-white text-xs font-poppins font-bold uppercase tracking-wider rounded-[6px] transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
