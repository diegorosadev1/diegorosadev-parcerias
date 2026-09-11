import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/content';

interface HeaderProps {
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA]/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo matching image in light mode */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          id="header-brand-logo"
        >
          {/* Gradient Code Bracket Icon </> */}
          <div className="shrink-0 flex items-center justify-center">
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8" 
              viewBox="0 0 34 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="slashGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              {/* Left bracket < */}
              <path 
                d="M9 5L2.5 13L9 21" 
                stroke="#38BDF8" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Slash / */}
              <path 
                d="M14.5 21L19.5 5" 
                stroke="url(#slashGrad)" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              {/* Right bracket > */}
              <path 
                d="M25 5L31.5 13L25 21" 
                stroke="#A855F7" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Stacked Name & Title in Light Mode */}
          <div className="flex flex-col text-left justify-center">
            <span className="text-base sm:text-[17px] font-black text-[#111114] tracking-wide leading-tight uppercase font-sans">
              DIEGO ROSA
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#62626B] tracking-[0.18em] leading-tight uppercase mt-0.5 font-sans">
              ENGENHEIRO DE SOFTWARE
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Actions */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* Parcerias Nav Item with Active Purple Underline Indicator */}
          <button
            onClick={() => scrollToSection('para-agencias')}
            className="relative py-1 text-sm font-semibold text-[#111114] hover:text-[#7C3AED] transition-colors cursor-pointer group"
            id="nav-link-parcerias"
          >
            <span>Parcerias</span>
            {/* Active purple bar underneath */}
            <div className="absolute -bottom-2.5 left-0 right-0 h-[2.5px] bg-[#7C3AED] rounded-full" />
          </button>

          {/* Secondary Nav links */}
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-sm font-medium text-[#62626B] hover:text-[#111114] transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm font-medium text-[#62626B] hover:text-[#111114] transition-colors cursor-pointer"
          >
            Portfólio
          </button>

          {/* WhatsApp CTA Button in Pill with border */}
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-[#111114] hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-sm transition-all shadow-xs active:scale-95 ml-2"
            id="header-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-[#7C3AED]" />
            <span>Falar comigo</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111114] hover:text-[#7C3AED] focus:outline-none"
            aria-label="Abrir menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-[#E5E5EA] px-6 py-6 space-y-4 backdrop-blur-xl shadow-lg">
          <button
            onClick={() => scrollToSection('para-agencias')}
            className="flex items-center justify-between w-full text-left py-2 text-base font-semibold text-[#111114] hover:text-[#7C3AED]"
          >
            <span>Parcerias</span>
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="block w-full text-left py-2 text-base font-medium text-[#62626B] hover:text-[#111114]"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left py-2 text-base font-medium text-[#62626B] hover:text-[#111114]"
          >
            Portfólio
          </button>

          <div className="pt-4 border-t border-[#E5E5EA]">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full border border-[#7C3AED] bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Falar comigo no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

