import React, { useState } from 'react';
import { ArrowRight, Check, Gift, MessageCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS, WHATSAPP_DEFAULT_URL, PORTFOLIO_LIVE_URL, getWhatsAppPartnerUrl } from '../data/content';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const partnerUrl = getWhatsAppPartnerUrl();

  const openFirstProject = () => {
    if (PORTFOLIO_PROJECTS.length > 0) {
      setSelectedProject(PORTFOLIO_PROJECTS[0]);
    }
  };

  const scrollToProcess = () => {
    const el = document.getElementById('processo') || document.getElementById('para-agencias');
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.open(partnerUrl, '_blank');
    }
  };

  return (
    <section id="para-agencias" className="pt-12 md:pt-16 pb-0 relative bg-[#F7F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-10 sm:mb-14">
        
        {/* Main "PARA AGÊNCIAS" Rounded Banner matching image.png */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1e103f] via-[#1a1453] to-[#2563EB] p-7 sm:p-9 lg:p-10 shadow-2xl relative overflow-hidden text-white border border-indigo-900/30">
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
            
            {/* Column 1: Eyebrow, Title & Paragraph */}
            <div className="lg:col-span-4 flex flex-col justify-start text-left">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#c084fc] uppercase block mb-3">
                PARA AGÊNCIAS
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.2] mb-4">
                Mais que desenvolvimento.<br />
                <span className="text-[#c084fc]">É uma </span>
                <span className="text-[#38bdf8]">parceria.</span>
              </h2>

              <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed max-w-sm">
                Trabalhamos de forma próxima, com comunicação clara e processos bem definidos. Assim, sua agência mantém o relacionamento com o cliente e eu cuido de toda a parte técnica.
              </p>
            </div>

            {/* Column 2: 5-Item Checklist */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-3.5 text-left">
              
              {/* Item 1: White-label */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#a855f7] bg-purple-950/50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] text-white">
                  White-label <span className="text-slate-300">(sua marca, meu trabalho)</span>
                </span>
              </div>

              {/* Item 2: Comunicação direta */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#a855f7] bg-purple-950/50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] text-white">
                  Comunicação direta e ágil
                </span>
              </div>

              {/* Item 3: Projetos sob demanda */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#a855f7] bg-purple-950/50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] text-white">
                  Projetos sob demanda
                </span>
              </div>

              {/* Item 4: Desenvolvimento para clientes */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#a855f7] bg-purple-950/50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] text-white">
                  Desenvolvimento para clientes da agência
                </span>
              </div>

              {/* Item 5: Desenvolvimento do próprio site da agência */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#a855f7] bg-purple-950/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-[13px] text-white leading-tight">
                  <span>Desenvolvimento do próprio site da agência</span>
                  <span className="block text-slate-300 text-[11.5px] mt-0.5">(sem custo para a agência parceira)</span>
                </div>
              </div>

            </div>

            {/* Column 3: "BENEFÍCIO PARA PARCEIROS" Card with Glassmorphism */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl border border-white/20 bg-white/[0.05] backdrop-blur-sm p-6 sm:p-7 shadow-lg text-left">
                
                {/* Card Header: Gift Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7c3aed] flex items-center justify-center text-white shadow-sm shrink-0">
                    <Gift className="w-5 h-5 text-white stroke-[2]" />
                  </div>
                  <div className="px-3 py-1 rounded-full border border-blue-400/40 bg-blue-500/20 text-[10px] font-bold tracking-wider text-blue-200 uppercase">
                    BENEFÍCIO PARA PARCEIROS
                  </div>
                </div>

                {/* Main Text */}
                <h3 className="text-lg sm:text-[21px] font-bold text-white tracking-tight leading-snug mb-2">
                  O site da sua agência<br />
                  pode sair por minha conta.
                </h3>

                {/* Subtext */}
                <p className="text-xs sm:text-[13px] text-slate-300 mb-5 leading-relaxed">
                  Desenvolvimento sem custo para agências parceiras.
                </p>

                {/* Asterisk Disclaimer */}
                <p className="text-[10px] text-slate-400 leading-tight">
                  *Hospedagem, domínio, ferramentas e serviços<br />
                  de terceiros não estão inclusos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Empresas e Parceiros Strip - Juntos em grandes projetos (Full Width with exact matching background #F5F7FD, zero borders) */}
      <div 
        className="w-full bg-[#F5F7FD] py-9 sm:py-11 border-0 shadow-none my-0"
        id="empresas-e-parceiros"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            {/* Left Info: Tag, Title, Subtitle */}
            <div className="text-left shrink-0">
              <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.18em] text-[#7C3AED] uppercase block">
                EMPRESAS E PARCEIROS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111114] tracking-tight mt-1 leading-snug">
                Juntos em grandes projetos
              </h3>
              <p className="text-xs sm:text-[13px] text-[#62626B] mt-1 font-normal">
                Projetos desenvolvidos em parceria com empresas e agências.
              </p>
            </div>

            {/* Right Logos: Auradata, Marko, Lumo */}
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-6 sm:gap-8 lg:gap-9">
              
              {/* AURADATA */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="auraLeft" x1="6" y1="26" x2="16" y2="6" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                      <linearGradient id="auraRight" x1="16" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M7.5 25L16 6.5" 
                      stroke="url(#auraLeft)" 
                      strokeWidth="4.2" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M16 6.5L24.5 25" 
                      stroke="url(#auraRight)" 
                      strokeWidth="4.2" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M10.8 19H21.2" 
                      stroke="#38BDF8" 
                      strokeWidth="3.6" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-[15px] tracking-[0.14em] text-slate-800 uppercase font-sans">
                  AURADATA
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-[#D9DEF2]" />

              {/* ASSESSORIA MARKO */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M6 25V9L16 18.5L26 9V25" 
                      stroke="#0F2837" 
                      strokeWidth="3.6" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M10.5 25V14L16 19.2L21.5 14V25" 
                      stroke="#0EA5E9" 
                      strokeWidth="2.6" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-500 tracking-[0.18em] uppercase leading-tight font-sans">
                    ASSESSORIA
                  </span>
                  <span className="text-sm sm:text-[15px] font-black text-[#0F2837] tracking-wider uppercase leading-none font-sans">
                    MARKO
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-[#D9DEF2]" />

              {/* LUMO */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* 8 rays radiating from center */}
                    <line x1="16" y1="4" x2="16" y2="10" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="16" y1="22" x2="16" y2="28" stroke="#A855F7" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="4" y1="16" x2="10" y2="16" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="22" y1="16" x2="28" y2="16" stroke="#A855F7" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="7.5" y1="7.5" x2="11.8" y2="11.8" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="20.2" y1="20.2" x2="24.5" y2="24.5" stroke="#C084FC" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="24.5" y1="7.5" x2="20.2" y2="11.8" stroke="#A855F7" strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="11.8" y1="20.2" x2="7.5" y2="24.5" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-black text-sm sm:text-[15px] tracking-[0.22em] text-[#111114] uppercase font-sans">
                  LUMO
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* Showcase Section matching image: Left Column (Copy + Ver portfólio completo) & Right Column (Laptop + Phone Mockups) */}
        <div id="portfolio" className="pt-8 sm:pt-12 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-24">
          
          {/* Left Column: Eyebrow, Heading, Subtitle & Pill Button */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#7C3AED] uppercase block mb-2.5">
              QUER VER O QUE JÁ DESENVOLVI?
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111114] tracking-tight leading-[1.12] mb-3.5">
              Meu portfólio está aqui.
            </h3>

            <p className="text-xs sm:text-sm text-[#62626B] leading-relaxed mb-6 max-w-sm">
              Conheça meu trabalho, projetos e experiências digitais desenvolvidas para diferentes segmentos.
            </p>

            <div>
              <a
                href={PORTFOLIO_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-md shadow-purple-500/25 hover:shadow-purple-500/35 active:scale-95 cursor-pointer group"
                id="btn-ver-portfolio"
              >
                <span>Ver portfólio</span>
                <span className="group-hover:translate-x-0.5 transition-transform font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Devices Presentation (Laptop + Smartphone + Floating Hand-drawn Note) */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-6 sm:pt-8 pb-4">
            
            {/* Soft decorative angled backdrop */}
            <div className="absolute inset-y-1 sm:inset-y-3 -right-2 -left-2 sm:left-8 rounded-3xl bg-[#EEF0FF]/80 sm:bg-[#EDE9FE]/60 transform -skew-x-6 sm:-skew-x-12 -z-0 pointer-events-none" />

            {/* Floating Hand-Drawn Annotation "Esse é o meu site principal!" with curving arrow */}
            <div className="absolute -top-3 sm:-top-5 right-2 sm:right-6 z-30 flex flex-col items-center pointer-events-none">
              <span className="font-sans italic font-bold text-xs sm:text-[13.5px] text-[#6366F1] rotate-[-7deg] whitespace-nowrap tracking-tight drop-shadow-xs">
                Esse é o meu<br />site principal!
              </span>
              <svg className="w-7 h-9 text-[#6366F1] mt-0.5 ml-2 -rotate-12" viewBox="0 0 36 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 2 C 30 14, 26 28, 10 38" />
                <path d="M18 35 L 10 38 L 12 28" />
              </svg>
            </div>

            {/* Laptop Mockup (MacBook Pro) linking to live portfolio */}
            <a 
              href={PORTFOLIO_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] cursor-pointer group transition-transform duration-300 hover:scale-[1.02] block"
              title="Acessar portfólio completo em diegorosadev.com.br/projetos"
            >
              {/* Laptop Screen Top Bezel */}
              <div className="bg-[#181a22] rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2 border border-slate-700/60 shadow-2xl relative overflow-hidden">
                {/* Webcam dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-1 opacity-80" />

                {/* Screen Display Content */}
                <div className="bg-[#060810] rounded-t-lg sm:rounded-t-xl overflow-hidden relative aspect-[16/10] text-white flex flex-col justify-between p-3 sm:p-4 select-none">
                  
                  {/* Subtle Background Glow & 3D Artwork */}
                  <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none overflow-hidden flex items-center justify-end">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                      alt="Experiências digitais"
                      className="w-full h-full object-cover object-center opacity-85 mix-blend-screen"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060810] via-[#060810]/75 to-transparent" />
                  </div>

                  {/* Top Web Nav */}
                  <div className="flex items-center justify-between z-10 relative">
                    <span className="font-extrabold text-[11px] sm:text-xs tracking-wider text-white">
                      DDR
                    </span>
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[7px] sm:text-[8px] text-slate-300 font-medium">
                      <span className="text-white font-semibold">Portfólio</span>
                      <span>Sobre</span>
                      <span>Serviços</span>
                      <span>Contato</span>
                    </div>
                  </div>

                  {/* Hero Text on Laptop Screen */}
                  <div className="z-10 max-w-[58%] text-left my-auto">
                    <h4 className="text-[13px] sm:text-[16px] font-extrabold text-white tracking-tight leading-[1.15]">
                      Transformando<br />ideias em<br />experiências digitais.
                    </h4>
                    <p className="text-[6.5px] sm:text-[7.5px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      Desenvolvimento web, aplicações e soluções personalizadas para o seu negócio.
                    </p>
                    <div className="mt-2 sm:mt-2.5">
                      <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[7px] sm:text-[8px] font-bold px-3 py-1 rounded-full shadow-sm group-hover:opacity-95 transition-opacity">
                        Ver projetos
                      </span>
                    </div>
                  </div>

                  {/* Bottom Stats Row on Laptop Screen */}
                  <div className="z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-left">
                    <div>
                      <span className="block text-[10px] sm:text-xs font-black text-white leading-none">5+</span>
                      <span className="text-[6px] sm:text-[6.5px] text-slate-400 uppercase tracking-tight">Anos de experiência</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-black text-white leading-none">20+</span>
                      <span className="text-[6px] sm:text-[6.5px] text-slate-400 uppercase tracking-tight">Projetos entregues</span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-black text-white leading-none">10+</span>
                      <span className="text-[6px] sm:text-[6.5px] text-slate-400 uppercase tracking-tight">Clientes satisfeitos</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Laptop Aluminum Base */}
              <div className="bg-gradient-to-b from-[#d1d5db] via-[#cbd0d8] to-[#9ca3af] h-2 sm:h-2.5 rounded-b-lg sm:rounded-b-xl relative shadow-lg">
                <div className="w-12 sm:w-16 h-1 bg-[#4b5563]/50 mx-auto rounded-b" />
              </div>
              {/* Laptop Shadow underneath */}
              <div className="h-2 w-[92%] mx-auto bg-black/25 blur-md rounded-full mt-0.5" />
            </a>

            {/* Smartphone Mockup (iPhone with responsive mobile version) */}
            <a 
              href={PORTFOLIO_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-2 sm:-bottom-3 right-0 sm:right-4 z-20 w-[95px] sm:w-[125px] aspect-[9/18.5] bg-[#1a1d24] border-[2.5px] border-[#374151] rounded-[22px] sm:rounded-[28px] p-1 sm:p-1.5 shadow-2xl cursor-pointer group hover:scale-105 transition-transform duration-300 block"
              title="Acessar portfólio completo em diegorosadev.com.br/projetos"
            >
              {/* Screen inside smartphone */}
              <div className="bg-[#060810] rounded-[18px] sm:rounded-[24px] h-full overflow-hidden text-white flex flex-col justify-between p-2 text-center relative select-none">
                
                {/* Dynamic Island */}
                <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-black rounded-full mx-auto mb-1 z-10" />

                {/* Mobile Top Bar */}
                <div className="flex items-center justify-between text-[7px] text-slate-300 px-0.5 z-10">
                  <span className="font-bold text-white text-[8px]">DDR</span>
                  <div className="w-2.5 h-1.5 flex flex-col justify-between">
                    <span className="w-full h-0.5 bg-white/70 rounded" />
                    <span className="w-full h-0.5 bg-white/70 rounded" />
                  </div>
                </div>

                {/* Mobile Hero Content */}
                <div className="my-auto z-10 py-1">
                  <h5 className="text-[8.5px] sm:text-[10.5px] font-extrabold text-white leading-tight">
                    Transformando<br />ideias em<br />experiências<br />digitais.
                  </h5>
                  <p className="text-[5px] sm:text-[6px] text-slate-400 mt-1 line-clamp-2">
                    Desenvolvimento web e soluções personalizadas.
                  </p>
                  <div className="mt-1.5">
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[5.5px] sm:text-[7px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      Ver projetos
                    </span>
                  </div>
                </div>

                {/* Mobile Stats */}
                <div className="grid grid-cols-2 gap-1 pt-1 border-t border-white/10 text-[6px] sm:text-[7px] text-slate-400 z-10">
                  <div>
                    <strong className="block text-white font-black text-[7.5px] sm:text-[9px]">5+</strong>
                    <span>Anos</span>
                  </div>
                  <div>
                    <strong className="block text-white font-black text-[7.5px] sm:text-[9px]">20+</strong>
                    <span>Projetos</span>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="w-6 h-0.5 bg-white/40 rounded-full mx-auto mt-0.5" />

              </div>
            </a>

          </div>

        </div>

      </div>

      {/* CTA Final - Full Width exactly matching user image */}
      <div 
        className="w-full bg-[#0A061D] text-white py-12 sm:py-14 mt-12 sm:mt-16 relative overflow-hidden border-t border-purple-950/40" 
        id="cta-final"
      >
        {/* Subtle decorative glow and delicate geometric line at top right matching screenshot */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-indigo-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 border border-purple-500/10 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 text-left">
            
            {/* Left: Eyebrow, Heading, Subtitle */}
            <div className="text-left max-w-xl">
              <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.18em] text-[#C084FC] uppercase block mb-1.5">
                VAMOS CONVERSAR?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
                Tem uma demanda chegando?
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-400 mt-2 font-normal leading-relaxed">
                Me conta sobre o projeto e vamos ver como posso te ajudar.
              </p>
            </div>

            {/* Right: Pill Gradient Button matching image */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#A855F7] hover:from-[#4338CA] hover:via-[#4F46E5] hover:to-[#9333EA] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-950/40 hover:shadow-purple-900/50 active:scale-95 transition-all cursor-pointer group"
                id="btn-falar-comigo-cta"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
                <span>Falar comigo</span>
                <span className="font-bold text-sm group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Portfolio Gallery Modal when clicking "Ver portfólio completo" */}
      {portfolioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white border border-[#E5E5EA] text-[#111114] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E5E5EA] pb-4 mb-6">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-1">
                  PORTFÓLIO DE PROJETOS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111114]">
                  Projetos Recentes & Cases
                </h3>
              </div>
              <button
                onClick={() => setPortfolioModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F7F7FA] hover:bg-[#E5E5EA] border border-[#E5E5EA] flex items-center justify-center text-[#62626B] hover:text-[#111114] transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {PORTFOLIO_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setPortfolioModalOpen(false);
                    setSelectedProject(project);
                  }}
                  className="group cursor-pointer rounded-xl bg-[#F7F7FA] border border-[#E5E5EA] hover:border-[#7C3AED]/50 p-4 transition-all duration-300 hover:-translate-y-1 text-left hover:shadow-soft"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <span className="text-[11px] text-[#7C3AED] font-semibold group-hover:underline">
                      Ver detalhes →
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111114] group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#7C3AED] font-medium mt-0.5">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-[#62626B] mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white text-[#62626B] border border-[#E5E5EA]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="flex justify-end pt-4 border-t border-[#E5E5EA]">
              <button
                onClick={() => setPortfolioModalOpen(false)}
                className="px-5 py-2 text-xs font-semibold text-[#111114] hover:bg-[#F7F7FA] rounded-full border border-[#E5E5EA]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Specific Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

