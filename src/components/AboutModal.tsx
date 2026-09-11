import React from 'react';
import { X, Code, CheckCircle, MessageCircle, MapPin, Zap, Award } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/content';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#E5E5EA] rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5EA] bg-[#F7F7FA]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] flex items-center justify-center font-bold text-white text-xs shadow-xs">
              DDR
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111114]">
                Diego Rosa — Desenvolvimento Web
              </h3>
              <p className="text-xs text-[#62626B] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#7C3AED]" /> Hortolândia, SP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#62626B] hover:text-[#111114] hover:bg-[#E5E5EA] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <div>
            <h4 className="text-lg font-bold text-[#111114] mb-2">
              Desenvolvimento sob medida com foco em performance e conversão
            </h4>
            <p className="text-sm text-[#62626B] leading-relaxed">
              Com sólida experiência em engenharia de software e desenvolvimento web moderno, atuo criando soluções digitais estratégicas para empresas e agências que buscam resultados reais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl bg-[#F7F7FA] border border-[#E5E5EA]">
              <div className="flex items-center gap-2 mb-1 text-[#7C3AED] font-semibold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Performance Máxima
              </div>
              <p className="text-xs text-[#62626B]">
                Sites rápidos com pontuações 95+ no Google PageSpeed, garantindo menor taxa de rejeição e melhor rankeamento orgânico.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F7F7FA] border border-[#E5E5EA]">
              <div className="flex items-center gap-2 mb-1 text-[#2563EB] font-semibold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" /> Parcerias White-Label
              </div>
              <p className="text-xs text-[#62626B]">
                Atuação confiável para agências de publicidade, marketing digital e estúdios de design, entregando código com seu selo de qualidade.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#62626B] block mb-2">
              Tecnologias & Ferramentas
            </span>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Headless CMS', 'Vite', 'SEO Avançado', 'Figma', 'Integrações de Pagamento'].map((tech) => (
                <span key={tech} className="text-xs px-2.5 py-1 rounded bg-[#F7F7FA] border border-[#E5E5EA] text-[#111114]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#62626B]">
              Pronto para elevar o padrão digital do seu projeto?
            </span>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all shrink-0 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
