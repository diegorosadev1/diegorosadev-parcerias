import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_FLOATING_URL } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contato via WhatsApp">
      <a
        href={WHATSAPP_FLOATING_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center sm:gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white w-[52px] h-[52px] sm:w-auto sm:h-auto sm:px-4 sm:py-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.14)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 select-none"
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 text-white fill-white shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline font-semibold text-[15px] leading-none whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
