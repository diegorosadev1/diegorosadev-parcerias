import React from 'react';
import { Monitor, Code2, MessageCircle, Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle technological dot grid in empty areas */}
      <div 
        className="absolute top-12 left-4 sm:left-12 w-72 h-72 opacity-[0.25] pointer-events-none -z-10" 
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} 
      />

      {/* Discrete geometric contour circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-purple-200/35 pointer-events-none -z-10" />
      <div className="absolute top-16 right-4 sm:right-16 w-[540px] h-[540px] rounded-full border border-slate-200/50 pointer-events-none -z-10" />

      {/* Subtle tech crosshair accents */}
      <span className="absolute top-28 left-[48%] text-slate-300/70 font-mono text-xs select-none pointer-events-none -z-10">+</span>
      <span className="absolute top-1/2 left-8 text-slate-300/70 font-mono text-xs select-none pointer-events-none -z-10">+</span>

      {/* Ambient background glows behind content and mockups */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[550px] bg-gradient-to-tr from-purple-500/10 via-blue-500/8 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[400px] bg-purple-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Smooth bottom transition gradient into the Services section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#F1F3F8] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Copy & 3 Feature Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Small uppercase label */}
            <div className="mb-3.5">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
                PARCERIAS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111114] tracking-tight leading-[1.12] mb-5">
              Você cuida da estratégia.<br />
              Eu cuido do{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">
                desenvolvimento.
              </span>
            </h1>

            {/* Subtitle paragraph */}
            <p className="text-sm sm:text-base text-[#62626B] font-normal leading-relaxed max-w-lg mb-10">
              Braço de desenvolvimento para agências e parceiros que precisam entregar projetos web com qualidade, agilidade e foco em resultados.
            </p>

            {/* 3 Feature Badges in horizontal row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              
              {/* Badge 1: Sites modernos e responsivos */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-[#E5E5EA] bg-white flex items-center justify-center text-[#7C3AED] shrink-0 shadow-xs group-hover:border-[#7C3AED]/50 group-hover:shadow-sm transition-all">
                  <Monitor className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#111114] leading-tight">
                    Sites modernos
                  </span>
                  <span className="text-xs text-[#62626B] leading-tight">
                    e responsivos
                  </span>
                </div>
              </div>

              {/* Badge 2: Código limpo e escalável */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-[#E5E5EA] bg-white flex items-center justify-center text-[#7C3AED] shrink-0 shadow-xs group-hover:border-[#7C3AED]/50 group-hover:shadow-sm transition-all">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#111114] leading-tight">
                    Código limpo
                  </span>
                  <span className="text-xs text-[#62626B] leading-tight">
                    e escalável
                  </span>
                </div>
              </div>

              {/* Badge 3: Comunicação direta */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-[#E5E5EA] bg-white flex items-center justify-center text-[#7C3AED] shrink-0 shadow-xs group-hover:border-[#7C3AED]/50 group-hover:shadow-sm transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#111114] leading-tight">
                    Comunicação
                  </span>
                  <span className="text-xs text-[#62626B] leading-tight">
                    direta
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Visual Composition with Code Screen, Laptop and Smartphone */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Handwritten Note + Curved Arrow Accent */}
            <div className="absolute -top-12 sm:-top-10 right-2 sm:right-6 z-30 flex flex-col items-end pointer-events-none select-none">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#7C3AED] tracking-wide text-right leading-tight rotate-[-4deg]">
                Projetos que<br />geram resultados.
              </span>
              {/* Hand-drawn curved arrow SVG pointing down toward the phone */}
              <svg 
                className="w-16 h-12 text-[#7C3AED] -rotate-12 mt-1 mr-6 overflow-visible" 
                viewBox="0 0 60 45" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M48 2C36 10 18 18 10 32C8 35 12 33 16 33C10 32 6 36 6 40" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>

            {/* Mockup Stage Container */}
            <div className="relative w-full max-w-[620px] aspect-[16/11] flex items-center justify-center">
              
              {/* Radial Glow Behind Screens */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#7C3AED]/18 via-[#2563EB]/14 to-indigo-500/10 rounded-full blur-3xl -z-10" />

              {/* 1. Background Code Editor Window (Tilted behind Laptop) */}
              <div className="absolute -top-3 right-10 sm:right-16 w-[70%] sm:w-[65%] aspect-[16/11] rounded-xl border border-[#E5E5EA] bg-[#111114] shadow-2xl p-2.5 sm:p-3 font-mono text-[9px] sm:text-[10px] transform rotate-[4deg] opacity-85 pointer-events-none">
                {/* Window top bar */}
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9px] text-slate-400 font-sans">app/projects/page.tsx</span>
                  <div className="w-4" />
                </div>
                {/* Code syntax lines */}
                <div className="space-y-1 text-slate-400">
                  <div><span className="text-[#A78BFA]">import</span> &#123; createClient &#125; <span className="text-[#A78BFA]">from</span> <span className="text-emerald-400">'@diego-dev/core'</span>;</div>
                  <div><span className="text-[#60A5FA]">export async function</span> <span className="text-yellow-300">getProjectData</span>() &#123;</div>
                  <div className="pl-3">const res = <span className="text-[#A78BFA]">await</span> fetch(<span className="text-emerald-400">'/api/lead-capture'</span>);</div>
                  <div className="pl-3">return &#123; speed: <span className="text-purple-300">100</span>, seoScore: <span className="text-purple-300">100</span>, conversion: <span className="text-amber-400">true</span> &#125;;</div>
                  <div>&#125;</div>
                </div>
              </div>

              {/* 2. Main Open Laptop Mockup (Foreground Center) */}
              <div className="relative z-10 w-[84%] sm:w-[82%] -left-4 sm:-left-6 top-2 rounded-xl sm:rounded-2xl border border-[#E5E5EA] bg-[#0b0e17] shadow-2xl shadow-slate-900/15 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                {/* Browser bar */}
                <div className="h-6 sm:h-7 bg-[#131724] border-b border-white/10 px-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="w-40 sm:w-48 h-3.5 bg-black/50 rounded-full flex items-center justify-center px-2">
                    <span className="text-[9px] text-slate-400 font-mono tracking-tight truncate">
                      autoshoppingdacidade.com.br
                    </span>
                  </div>
                  <div className="w-4" />
                </div>

                {/* Laptop Screen Content - Auto Shopping Showcase */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#090d16] via-[#060810] to-[#04060a] min-h-[190px] sm:min-h-[235px] text-left relative overflow-hidden">
                  
                  {/* Mini top navbar */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-[8px] font-bold text-white shadow-xs">
                        A
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight">
                        Auto Shopping da Cidade
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[8px] sm:text-[9px] text-slate-400">
                      <span>Início</span>
                      <span>Estoque</span>
                      <span>Financiamento</span>
                      <span className="px-2 py-0.5 rounded bg-purple-600/20 text-purple-300 border border-purple-500/30">
                        Contato
                      </span>
                    </div>
                  </div>

                  {/* Hero Website Content inside laptop */}
                  <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-7">
                      <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white leading-tight mb-2 tracking-tight">
                        Seu próximo<br />
                        carro está <span className="text-blue-400">aqui.</span>
                      </h3>
                      
                      {/* Search Pill Input Bar */}
                      <div className="bg-[#101422] border border-white/10 rounded-full px-2.5 py-1.5 flex items-center gap-2 max-w-[210px] shadow-xs mb-3">
                        <Search className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="text-[8px] text-slate-400 truncate">
                          Buscar modelo, marca ou ano...
                        </span>
                        <div className="h-4 bg-[#7C3AED] rounded-full px-2 flex items-center text-[7px] font-semibold text-white shrink-0 ml-auto">
                          Buscar
                        </div>
                      </div>

                      {/* Bottom Glowing Feature Pill Cards inside laptop screen */}
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded bg-purple-950/40 border border-purple-500/30 text-[7px] text-purple-300 font-medium">
                          Garantia de 1 Ano
                        </div>
                        <div className="px-2 py-1 rounded bg-blue-950/40 border border-blue-500/30 text-[7px] text-blue-300 font-medium">
                          Financiamento 100%
                        </div>
                      </div>
                    </div>

                    {/* Dark SUV Vehicle Image inside screen */}
                    <div className="col-span-5 relative flex justify-end">
                      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" 
                          alt="Veículo de luxo Auto Shopping" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Laptop Base Lip / Keyboard notch */}
                <div className="h-2 bg-[#1a1f2e] border-t border-white/10 flex items-center justify-center">
                  <div className="w-16 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* 3. Standing Smartphone Mockup (Foreground Right) */}
              <div className="absolute -bottom-2 sm:bottom-0 right-0 sm:right-2 z-20 w-[110px] sm:w-[135px] rounded-2xl sm:rounded-3xl border border-[#E5E5EA] bg-[#090c14] shadow-2xl shadow-slate-900/20 p-1.5 transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#0d111b] overflow-hidden border border-white/10 p-2 text-left">
                  {/* Smartphone camera notch */}
                  <div className="w-8 h-1.5 bg-black rounded-full mx-auto mb-2" />
                  
                  <div className="text-[6px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                    Auto Shopping da Cidade
                  </div>
                  <div className="text-[8px] font-bold text-white leading-tight mb-2">
                    Mais que veículos, realizamos sonhos.
                  </div>

                  {/* Phone car thumbnail */}
                  <div className="w-full h-14 rounded bg-slate-900 border border-white/10 overflow-hidden mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80" 
                      alt="Carro no smartphone" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Phone action button */}
                  <div className="h-3.5 w-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-md flex items-center justify-center text-[7px] text-white font-medium shadow-xs">
                    Ver ofertas
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

