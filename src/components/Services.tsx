import React from 'react';
import { Rocket, Monitor, ShoppingCart, Clock, Calendar } from 'lucide-react';
import { SERVICES, getWhatsAppServiceUrl } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket':
        return <Rocket className="w-8 h-8 text-[#7C3AED] stroke-[1.8]" />;
      case 'monitor':
        return <Monitor className="w-8 h-8 text-[#7C3AED] stroke-[1.8]" />;
      case 'cart':
        return <ShoppingCart className="w-8 h-8 text-[#7C3AED] stroke-[1.8]" />;
      default:
        return <Rocket className="w-8 h-8 text-[#7C3AED] stroke-[1.8]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 relative bg-[#F1F3F8] border-t border-[#E5E7EB]/70 overflow-hidden">
      {/* Subtle technological dot grid in the background */}
      <div 
        className="absolute inset-0 opacity-[0.32] pointer-events-none -z-10" 
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }} 
      />

      {/* Soft large circles / subtle outlines for visual depth */}
      <div className="absolute -top-24 right-12 w-[540px] h-[540px] rounded-full border border-purple-200/40 pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-16 w-[580px] h-[580px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-16 w-[480px] h-[480px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-1/4 w-[460px] h-[460px] rounded-full border border-blue-200/35 pointer-events-none -z-10" />

      {/* Discrete geometric lines and tech crosshair accents */}
      <div className="absolute top-12 left-1/3 w-36 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent pointer-events-none -z-10" />
      <span className="absolute top-20 right-1/3 text-slate-400/60 font-mono text-xs select-none pointer-events-none -z-10">+</span>
      <span className="absolute bottom-20 left-12 text-slate-400/60 font-mono text-xs select-none pointer-events-none -z-10">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title on left, Estimated Deadlines Note on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12 md:mb-16">
          
          {/* Left Column: Category Label & Main Title */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-3">
              SERVIÇOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111114] tracking-tight leading-[1.15]">
              Soluções digitais para<br />
              diferentes necessidades.
            </h2>
          </div>

          {/* Right Column: Clock Icon + Disclaimer Note */}
          <div className="lg:col-span-5 flex items-start gap-3.5 lg:pt-3">
            <div className="shrink-0 mt-0.5 text-[#62626B]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
            </div>
            <p className="text-xs sm:text-[13px] text-[#62626B] leading-relaxed">
              <span className="font-bold text-[#111114]">Prazos estimados em dias úteis</span>, considerando o recebimento de todas as informações, conteúdos e materiais necessários. Projetos com maior complexidade ou integrações podem ter prazo diferenciado.
            </p>
          </div>

        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const whatsappUrl = getWhatsAppServiceUrl(service.title, service.startingPrice);
            return (
              <a
                key={service.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E5E5EA] hover:border-[#7C3AED]/50 hover:shadow-card-hover transition-all duration-300 shadow-soft hover:-translate-y-1"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Bare Stroke Icon in Purple */}
                  <div className="mb-5 group-hover:scale-105 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111114] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#62626B] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer with Price on left and Delivery Time on right */}
                <div className="mt-8 pt-5 border-t border-[#E5E5EA] flex items-center justify-between">
                  {/* Price */}
                  <span className="text-base sm:text-lg font-bold text-[#7C3AED] tracking-tight">
                    {service.startingPrice}
                  </span>

                  {/* Delivery Time with Calendar Icon */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#62626B] font-medium">
                    <Calendar className="w-4 h-4 text-[#7C3AED] stroke-[1.8]" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Pricing disclaimer note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-[#62626B]">
          <Clock className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
          <span>Os valores apresentados são iniciais e podem variar conforme o escopo, quantidade de páginas, integrações e complexidade do projeto.</span>
        </div>

      </div>
    </section>
  );
};
