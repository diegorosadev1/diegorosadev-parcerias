import React from 'react';
import { Info, MessageCircle } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/content';

export const PriceNoticeAndCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-14 relative bg-[#F7F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Horizontal Container */}
        <div className="rounded-2xl bg-white border border-[#E5E5EA] p-6 sm:p-8 lg:p-10 shadow-soft flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Pricing disclaimer notice */}
          <div className="flex items-center gap-4 text-left lg:max-w-[48%]">
            <div className="w-10 h-10 rounded-full border border-[#E5E5EA] bg-[#F7F7FA] flex items-center justify-center shrink-0 text-[#7C3AED]">
              <Info className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <p className="text-xs sm:text-sm text-[#62626B] leading-relaxed">
              Os valores apresentados são iniciais e podem variar conforme o escopo, quantidade de páginas, integrações e complexidade do projeto.
            </p>
          </div>

          {/* Vertical subtle divider on desktop */}
          <div className="hidden lg:block w-px h-16 bg-[#E5E5EA]" />

          {/* Right Side: Final CTA "Tem um projeto em mente?" */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full lg:w-auto lg:flex-1 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111114] tracking-tight mb-1">
                Tem um projeto em mente?
              </h3>
              <p className="text-xs sm:text-sm text-[#62626B]">
                Vamos conversar e transformar sua ideia em um grande resultado.
              </p>
            </div>

            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:opacity-95 shadow-md shadow-indigo-500/20 active:scale-95 transition-all shrink-0 w-full sm:w-auto"
              id="final-cta-falar-comigo"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar comigo</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
