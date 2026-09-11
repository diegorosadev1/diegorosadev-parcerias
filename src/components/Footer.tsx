import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../data/content';

interface FooterProps {
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout }) => {
  const scrollToSection = (id: string) => {
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
    <footer className="pt-12 pb-12 border-t border-[#E5E5EA] bg-white text-[#62626B] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E5EA]">
          
          {/* Logo Brand matching new brand identity */}
          <div className="flex items-center gap-2.5">
            <svg 
              className="w-6 h-6" 
              viewBox="0 0 34 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 5L2.5 13L9 21" 
                stroke="#38BDF8" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M14.5 21L19.5 5" 
                stroke="#6366F1" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                d="M25 5L31.5 13L25 21" 
                stroke="#A855F7" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-black text-sm text-[#111114] tracking-wide uppercase font-sans leading-none">
                DIEGO ROSA
              </span>
              <span className="text-[8.5px] font-bold text-[#62626B] tracking-[0.16em] uppercase mt-0.5 font-sans leading-none">
                ENGENHEIRO DE SOFTWARE
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#62626B]">
            <button
              onClick={() => scrollToSection('servicos')}
              className="hover:text-[#111114] transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-[#111114] transition-colors cursor-pointer"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('para-agencias')}
              className="hover:text-[#111114] transition-colors cursor-pointer"
            >
              Para Agências
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-[#111114] transition-colors cursor-pointer"
            >
              Sobre
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F7F7FA] border border-[#E5E5EA] flex items-center justify-center text-[#62626B] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:bg-white transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F7F7FA] border border-[#E5E5EA] flex items-center justify-center text-[#62626B] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:bg-white transition-all shadow-xs"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#62626B]">
          <div>
            © 2025 Diego Rosa Dev. Todos os direitos reservados.
          </div>
          <div>
            Hortolândia - SP
          </div>
        </div>

      </div>
    </footer>
  );
};
