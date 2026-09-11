import React from 'react';
import { X, ExternalLink, CheckCircle2, MessageCircle, Layers, Sparkles } from 'lucide-react';
import { PortfolioProject } from '../types';
import { getWhatsAppProjectUrl } from '../data/content';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappUrl = getWhatsAppProjectUrl(project.title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#E5E5EA] rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5EA] bg-[#F7F7FA]">
          <div className="flex items-center gap-2.5">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${project.badgeColor}`}>
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#111114]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#62626B] hover:text-[#111114] hover:bg-[#E5E5EA] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Tagline */}
          <div>
            <h4 className="text-xl font-bold text-[#111114] mb-2">
              {project.tagline}
            </h4>
            <p className="text-sm text-[#62626B] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features highlight */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] block mb-3">
              Destaques e Funcionalidades
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#62626B]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#62626B] block mb-2.5">
              Tecnologias Utilizadas
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 rounded-md bg-[#F7F7FA] border border-[#E5E5EA] text-[#111114] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA inside modal */}
          <div className="pt-4 border-t border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#62626B] text-center sm:text-left">
              Gostou do estilo deste projeto? Podemos desenvolver uma versão sob medida para sua empresa.
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all shrink-0 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero um projeto assim</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
