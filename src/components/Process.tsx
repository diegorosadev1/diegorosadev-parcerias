import React from 'react';
import { Calendar, Code, Check, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Calendar className="w-5 h-5 text-[#7C3AED] stroke-[1.85]" />;
      case 2:
        return <Code className="w-5 h-5 text-[#7C3AED] stroke-[2.2]" />;
      case 3:
        return <Check className="w-5 h-5 text-[#7C3AED] stroke-[2.5]" />;
      case 4:
        return <Rocket className="w-5 h-5 text-[#7C3AED] stroke-[1.85]" />;
      default:
        return <Code className="w-5 h-5 text-[#7C3AED]" />;
    }
  };

  return (
    <section 
      id="processo" 
      className="w-full bg-[#F5F7FD] py-16 md:py-20 relative scroll-mt-20 overflow-hidden border-0 border-none shadow-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Eyebrow, Title & Subtitle matching image */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#7C3AED] uppercase block mb-2.5">
              PROCESSO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111114] tracking-tight leading-tight mb-3">
              Como funciona
            </h2>
            <p className="text-xs sm:text-[13px] text-[#62626B] font-normal leading-relaxed max-w-sm">
              Um fluxo simples e eficiente para que seu projeto entregue o melhor resultado.
            </p>
          </div>

          {/* Right Column: 4 Steps Flow with Arrows matching image */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-3 items-start">
              {PROCESS_STEPS.map((stepItem, idx) => {
                const isLast = idx === PROCESS_STEPS.length - 1;
                const icon = getStepIcon(stepItem.step);

                return (
                  <div key={stepItem.step} className="flex flex-col items-start text-left relative group">
                    
                    {/* Top Row: 01/02/03/04 + Circle with gradient ring + Arrow */}
                    <div className="flex items-center w-full mb-3.5 pt-4">
                      {/* Step Circle Container with Number badge at top */}
                      <div className="relative shrink-0">
                        {/* Tiny Step Number at top-left: 01, 02, etc. */}
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#8B5CF6] absolute -top-4 left-0 leading-none">
                          0{stepItem.step}
                        </span>

                        {/* White circle with subtle purple gradient border/arc */}
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full p-[1.5px] bg-gradient-to-tr from-[#C084FC]/30 via-[#8B5CF6] to-[#7C3AED] shadow-[0_2px_10px_rgba(124,58,237,0.08)] group-hover:scale-105 transition-transform duration-200">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            {icon}
                          </div>
                        </div>
                      </div>

                      {/* Subtle Arrow between steps (desktop / tablet) */}
                      {!isLast && (
                        <div className="hidden sm:flex flex-1 items-center justify-center pl-2 pr-1">
                          <span className="text-base font-bold text-[#818CF8]/90">
                            →
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Step Title: Briefing, Desenvolvimento, etc. */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#111114] tracking-tight leading-snug mb-1">
                      {stepItem.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#62626B] font-normal leading-relaxed max-w-[170px]">
                      {stepItem.description}
                    </p>

                    {/* Mobile Down-Arrow between steps */}
                    {!isLast && (
                      <div className="sm:hidden flex items-center justify-start my-2 pl-4 text-purple-400 font-bold">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

