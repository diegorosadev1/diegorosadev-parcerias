import { ServiceItem, ProcessStep, PortfolioProject, AgencyBenefit } from '../types';

export const WHATSAPP_NUMBER = '5519998382005'; // Diego Rosa WhatsApp (19) 99838-2005
export const WHATSAPP_DEFAULT_URL = 'https://wa.me/5519998382005?text=Ol%C3%A1%20Diego!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';
export const GITHUB_URL = 'https://github.com/diegorosadev1?tab=repositories';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/diegodossantosrosa/';
export const PORTFOLIO_LIVE_URL = 'https://www.diegorosadev.com.br/projetos';
export const WHATSAPP_FLOATING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Diego! Vi sua página de parcerias e gostaria de falar sobre um projeto.')}`;

export function getWhatsAppServiceUrl(serviceTitle: string, price: string): string {
  const text = encodeURIComponent(`Olá Diego! Gostaria de um orçamento para "${serviceTitle}" (${price}). Podemos conversar?`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppPartnerUrl(): string {
  const text = encodeURIComponent('Olá Diego! Represento uma agência/empresa e tenho interesse em estabelecer uma parceria de desenvolvimento.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppProjectUrl(projectTitle: string): string {
  const text = encodeURIComponent(`Olá Diego! Vi o projeto "${projectTitle}" no seu portfólio e gostaria de algo semelhante para o meu negócio.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-pages',
    title: 'Landing Page & Hotsite',
    description: 'Páginas para campanhas, lançamentos, captação de leads e ações comerciais.',
    startingPrice: 'R$ 900+',
    deliveryTime: '3 – 5 dias úteis',
    icon: 'rocket',
    accentColor: '#a855f7',
  },
  {
    id: 'sites-institucionais',
    title: 'Site Institucional',
    description: 'Presença digital completa para sua empresa, com design moderno e foco em conversão.',
    startingPrice: 'R$ 1.500+',
    deliveryTime: '3 – 7 dias úteis',
    icon: 'monitor',
    accentColor: '#a855f7',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Lojas virtuais com catálogo, pagamentos e integrações para o seu negócio.',
    startingPrice: 'R$ 3.500+',
    deliveryTime: '5 – 10 dias úteis',
    icon: 'cart',
    accentColor: '#a855f7',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Briefing',
    description: 'Entendo a demanda, objetivos e referências.',
    icon: 'calendar',
  },
  {
    step: 2,
    title: 'Desenvolvimento',
    description: 'Crio o projeto com foco em performance e qualidade.',
    icon: 'code',
  },
  {
    step: 3,
    title: 'Aprovação',
    description: 'Você revisa, solicita ajustes e aprova o projeto.',
    icon: 'check',
  },
  {
    step: 4,
    title: 'Go-live',
    description: 'Colocamos no ar e acompanhamos o início.',
    icon: 'rocket',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'auto-shopping',
    title: 'Auto Shopping da Cidade',
    category: 'Site Institucional',
    tagline: 'Portal automotivo multimarcas de alto padrão',
    description: 'Plataforma institucional moderna com busca inteligente de estoque, catálogo com filtros por marca, modelo e ano, e integração direta com WhatsApp para propostas de financiamento e vendas.',
    accent: '#3b82f6',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Filtro Dinâmico', 'SEO Local'],
    features: [
      'Catálogo interativo com mais de 200 veículos',
      'Filtros instantâneos por faixa de preço, câmbio e carroceria',
      'Páginas de detalhes otimizadas para conversão e tempo de carregamento < 1s',
      'Integração direta com o CRM de atendimento dos consultores'
    ],
    mockupType: 'automotive'
  },
  {
    id: 'canaa-motors',
    title: 'Canaa Motors',
    category: 'Landing Page',
    tagline: 'Landing page focada em conversão para concessionária de seminovos',
    description: 'Landing page projetada com foco em captação de leads e campanhas de anúncios pagos (Google Ads e Meta Ads). Visual escuro elegante com detalhes em dourado e formulários ágeis.',
    accent: '#f59e0b',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    tags: ['Landing Page', 'Alta Conversão', 'Design Escuro Premium', 'Meta Pixel'],
    features: [
      'Copywriting estratégico orientado à conversão',
      'Formulário em 2 etapas com taxa de conclusão superior a 14%',
      'Carregamento ultra-rápido pontuando 98+ no Google PageSpeed',
      'Rastreamento completo de eventos de conversão e cliques'
    ],
    mockupType: 'dealership'
  },
  {
    id: 'bruno-fitness',
    title: 'Bruno Fitness',
    category: 'Site Institucional',
    tagline: 'Plataforma para personal trainer e consultoria fitness',
    description: 'Ambiente digital para treinador pessoal de elite, destacando planos de consultoria online, transformações de alunos, metodologia personalizada e botão de agendamento imediato.',
    accent: '#ef4444',
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
    tags: ['Fitness', 'Branding', 'Vídeo Hero', 'Área de Membros'],
    features: [
      'Apresentação dinâmica dos planos de consultoria personalizada',
      'Galeria comparativa de antes/depois com depoimentos reais',
      'Calculadora de IMC e ingestão calórica integrada',
      'Checkout e conexão direta com plataforma de pagamentos'
    ],
    mockupType: 'fitness'
  },
  {
    id: 'gotracker',
    title: 'GoTracker',
    category: 'Landing Page',
    tagline: 'Solução SaaS para rastreamento e telemetria veicular',
    description: 'Página de produto com visual hi-tech para empresa de tecnologia e rastreamento GPS via satélite. Elementos visuais em verde neon e demonstração interativa do aplicativo móvel.',
    accent: '#10b981',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    tags: ['SaaS Tech', 'IoT / Telemetria', 'UI Hi-Tech', 'Simulador'],
    features: [
      'Apresentação interativa do painel mobile e web de monitoramento',
      'Calculadora de economia de frotas e cotação em tempo real',
      'Seção de perguntas frequentes com busca interativa',
      'Integração com WhatsApp comercial e agendamento de testes'
    ],
    mockupType: 'iot'
  },
];

export const AGENCY_BENEFITS: AgencyBenefit[] = [
  { text: 'Entrega no prazo' },
  { text: 'Comunicação direta e ágil' },
  { text: 'Código limpo e escalável' },
  { text: 'Suporte após a entrega' },
  { text: 'Possibilidade de projetos contínuos' },
];
