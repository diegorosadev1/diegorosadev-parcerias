import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_BENEFITS, getWhatsAppPartnerUrl } from '../data/content';

export const AgencySection: React.FC = () => {
  const partnerUrl = getWhatsAppPartnerUrl();

  return (
    <section id="para-agencias" className="py-16 md:py-24 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Distinct Container with Purple/Indigo Dark Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#17102e]/90 via-[#0d1226]/90 to-[#0b1428]/90 border border-purple-500/20 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl shadow-purple-950/30">
          
          {/* Subtle Ambient Radial Glow inside the card */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-purple-400 uppercase block mb-3">
                PARA AGÊNCIAS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
                Você cuida da estratégia.<br />
                Eu cuido do desenvolvimento.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
                Atuo como braço de desenvolvimento para agências e parceiros, entregando sites, landing pages e e-commerces para seus clientes — inclusive em modelo white-label.
              </p>

              <div>
                <a
                  href={partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-700/25 hover:shadow-purple-700/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  id="agency-btn-parceiro"
                >
                  <span>Quero ser um parceiro</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist + Handwritten Annotation */}
            <div className="lg:col-span-5 relative flex flex-col sm:flex-row items-start lg:items-center justify-between gap-6">
              
              {/* Benefits Checklist */}
              <div className="space-y-4 text-left">
                {AGENCY_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-purple-400/40 bg-purple-950/60 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-200 font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Handwritten Annotation: "Juntos entregamos mais." */}
              <div className="relative mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center select-none pointer-events-none">
                <span className="font-handwriting text-2xl sm:text-3xl text-purple-400 tracking-wide text-center leading-tight rotate-[-2deg]">
                  Juntos<br />entregamos<br />mais.
                </span>
                {/* Hand-drawn underline */}
                <svg 
                  className="w-24 h-4 text-purple-400 -mt-1 overflow-visible" 
                  viewBox="0 0 100 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 8C30 3 70 3 96 7C80 10 50 11 30 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
