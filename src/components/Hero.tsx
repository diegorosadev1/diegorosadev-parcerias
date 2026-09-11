import React from 'react';
import { Monitor, Code2, MessageCircle } from 'lucide-react';

import AutoshoppingDesktopPrev from '../assets/autoshopping-desktop-preview.png';
import AutoshoppingMobilePrev from '../assets/autoshopping-mobile-preview.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Subtle technological dot grid */}
      <div
        className="absolute top-12 left-4 sm:left-12 w-72 h-72 opacity-[0.25] pointer-events-none -z-10"
        style={{
          backgroundImage:
            'radial-gradient(#94a3b8 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Discrete geometric contour circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-purple-200/35 pointer-events-none -z-10" />

      <div className="absolute top-16 right-4 sm:right-16 w-[540px] h-[540px] rounded-full border border-slate-200/50 pointer-events-none -z-10" />

      {/* Tech crosshair accents */}
      <span className="absolute top-28 left-[48%] text-slate-300/70 font-mono text-xs select-none pointer-events-none -z-10">
        +
      </span>

      <span className="absolute top-1/2 left-8 text-slate-300/70 font-mono text-xs select-none pointer-events-none -z-10">
        +
      </span>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[550px] bg-gradient-to-tr from-purple-500/10 via-blue-500/8 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="absolute top-1/3 left-1/4 w-[420px] h-[400px] bg-purple-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Smooth transition to Services */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#F1F3F8] pointer-events-none -z-10" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}

          <div className="lg:col-span-6 flex flex-col justify-center text-left z-10">

            {/* Label */}
            <div className="mb-3.5">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
                PARCERIAS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111114] tracking-tight leading-[1.12] mb-5">
              Você cuida da estratégia.
              <br />
              Eu cuido do{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">
                desenvolvimento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#62626B] font-normal leading-relaxed max-w-lg mb-10">
              Braço de desenvolvimento para agências e parceiros que precisam
              entregar projetos web com qualidade, agilidade e foco em
              resultados.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">

              {/* Sites */}
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

              {/* Código */}
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

              {/* Comunicação */}
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

          {/* =====================================================
              RIGHT COLUMN — MOCKUPS
          ====================================================== */}

          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">

            {/* =================================================
                HANDWRITTEN ANNOTATION
            ================================================== */}

            <div className="absolute -top-12 sm:-top-10 right-2 sm:right-6 z-30 flex flex-col items-end pointer-events-none select-none">

              <span className="font-handwriting text-2xl sm:text-3xl text-[#7C3AED] tracking-wide text-right leading-tight rotate-[-4deg]">
                Projetos que
                <br />
                geram resultados.
              </span>

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

            {/* =================================================
                MOCKUP STAGE
            ================================================== */}

            <div className="relative w-full max-w-[620px] aspect-[16/11] flex items-center justify-center">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#7C3AED]/18 via-[#2563EB]/14 to-indigo-500/10 rounded-full blur-3xl -z-10" />

              {/* =================================================
                  LAPTOP
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  w-[84%]
                  sm:w-[82%]
                  -left-4
                  sm:-left-6
                  top-2
                  rounded-xl
                  sm:rounded-2xl
                  border
                  border-slate-700
                  bg-[#0b0e17]
                  shadow-2xl
                  shadow-slate-900/20
                  overflow-hidden
                  transform
                  hover:-translate-y-1
                  transition-transform
                  duration-500
                "
              >

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

                {/* =================================================
                    DESKTOP SCREEN — REAL IMAGE
                ================================================== */}

                <div className="relative aspect-[16/10] overflow-hidden bg-[#060810]">

                  <img
                    src={AutoshoppingDesktopPrev}
                    alt="Preview do site Auto Shopping da Cidade"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-top
                      block
                    "
                    draggable={false}
                  />

                  {/* Subtle screen overlay */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />

                </div>

                {/* Laptop bottom lip */}
                <div className="h-2 bg-[#1a1f2e] border-t border-white/10 flex items-center justify-center">

                  <div className="w-16 h-1 bg-white/20 rounded-full" />

                </div>

              </div>

              {/* =================================================
                  SMARTPHONE
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-2
                  sm:bottom-0
                  right-0
                  sm:right-2
                  z-20
                  w-[110px]
                  sm:w-[135px]
                  aspect-[9/18.5]
                  rounded-[22px]
                  sm:rounded-[28px]
                  border-[2px]
                  border-slate-600
                  bg-[#090c14]
                  shadow-2xl
                  shadow-slate-900/30
                  p-1.5
                  transform
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              >

                {/* Phone screen */}
                <div className="relative w-full h-full rounded-[17px] sm:rounded-[23px] overflow-hidden bg-[#0d111b] border border-white/10">

                  {/* Real mobile screenshot */}
                  <img
                    src={AutoshoppingMobilePrev}
                    alt="Preview mobile do site Auto Shopping da Cidade"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-top
                      block
                    "
                    draggable={false}
                  />

                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-7 sm:w-9 h-1.5 sm:h-2 bg-black rounded-full z-20" />

                  {/* Screen reflection */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.04] via-transparent to-transparent z-10" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};