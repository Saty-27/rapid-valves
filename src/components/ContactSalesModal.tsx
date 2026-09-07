import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const ContactSalesModal: React.FC<ContactSalesModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Shipbuilding & Marine',
    product: defaultProduct || 'Gate Valves',
    size: 'DN 50 (2")',
    pressure: 'Class 150 / PN16',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-brand-red relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#58585A] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-heading font-black text-3xl uppercase text-brand-charcoal">
              RF Quote Submitted
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.product}</strong> has been logged with reference ID <span className="font-mono font-bold text-brand-red">RV-2026-{(Math.random() * 10000).toFixed(0)}</span>. Our application engineers will revert within 4 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-brand-navy hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red block mb-1">
                COMMERCIAL & TECHNICAL INQUIRY
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-brand-charcoal uppercase tracking-tight">
                Request Product Quotation
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Direct factory engineering dispatch. Full documentation, mill certs & class type approvals provided.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Mazagon Dock / Larsen & Toubro"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 XXXXX"
                    className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Valve Category
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full border border-gray-300 rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-brand-red bg-white"
                  >
                    <option value="Gate Valves">Gate Valves</option>
                    <option value="Globe Valves">Globe Valves</option>
                    <option value="Check Valves">Check Valves</option>
                    <option value="Ball Valves">Ball Valves</option>
                    <option value="Butterfly Valves">Butterfly Valves</option>
                    <option value="Marine Control Valves">Marine Control Valves</option>
                    <option value="Custom Engineering">Custom Flow Solution</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Target Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full border border-gray-300 rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-brand-red bg-white"
                  >
                    <option value="Shipbuilding & Marine">Shipbuilding & Marine</option>
                    <option value="Defence & Naval">Defence & Naval</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Steel Industry">Steel Industry</option>
                    <option value="Power Generation">Power Generation</option>
                    <option value="Chemical">Chemical Industry</option>
                    <option value="Pharma">Pharmaceuticals</option>
                    <option value="Water Treatment">Water Treatment</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                    Pressure Rating
                  </label>
                  <select
                    value={formData.pressure}
                    onChange={(e) => setFormData({ ...formData, pressure: e.target.value })}
                    className="w-full border border-gray-300 rounded-sm px-2.5 py-2 text-xs focus:outline-none focus:border-brand-red bg-white"
                  >
                    <option value="Class 150 / PN16">Class 150 / PN16</option>
                    <option value="Class 300 / PN40">Class 300 / PN40</option>
                    <option value="Class 600 / PN100">Class 600 / PN100</option>
                    <option value="Class 900 / PN150">Class 900 / PN150</option>
                    <option value="Class 1500 to 2500">Class 1500 - 2500</option>
                    <option value="Special Severe Service">Severe Service / PN900</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider text-[10px]">
                  Project Specifications, Fluid Medium & Quantities
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention fluid type (seawater, steam, crude, chemical), operating temperature, body & trim material requirement..."
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center text-[11px] text-gray-500">
                  <span className="text-green-600 mr-1 font-bold">🔒</span> ISO 9001:2015 Assured Confidentiality
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm shadow-md transition-all"
                >
                  <span>Submit Inquiry</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
