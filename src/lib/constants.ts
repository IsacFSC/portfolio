import { Bot, Globe, Layout, Workflow } from 'lucide-react';
import { Service, Project, Testimonial, PricingPlan } from '@/types';

export const services: Service[] = [
  {
    id: 'process-automation',
    title: 'Automação de Processos',
    description:
      'Elimine tarefas repetitivas e otimize seu fluxo de trabalho com sistemas inteligentes.',
    icon: Workflow,
    tags: ['N8N', 'NodeJS', 'Python'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages Premium',
    description:
      'Páginas de alta conversão com design sofisticado e performance extrema.',
    icon: Layout,
    tags: ['Next.js', 'Conversion', 'UX'],
  },
  {
    id: 'ai-agents',
    title: 'Agentes de IA',
    description:
      'Desenvolvimento de agentes autônomos personalizados para suporte ou vendas.',
    icon: Bot,
    tags: ['OpenAI', 'LangChain', 'RAG'],
  },
  {
    id: 'institutional-sites',
    title: 'Sites Institucionais',
    description:
      'Presença digital de autoridade para empresas que buscam se destacar no mercado.',
    icon: Globe,
    tags: ['Next.js', 'SEO', 'Performance'],
  },
];

export const projects: Project[] = [
  {
    id: 'escala-de-musicos',
    title: 'Escala Music',
    description: 'Sua Escala em Perfeita Harmonia',
    category: 'Saas',
    image: '/projects/escala-music.png',
    link: 'https://escala-music.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Asaas API', 'Vercel', 'Uploadthing'],
  },
  {
    id: 'nutri-nine',
    title: 'Nutricionista Evellyn L.',
    description: 'Nutrição Personalizada para uma Vida Saudável',
    category: 'institucional',
    image: '/projects/nutri.png',
    link: 'https://my-nutri-nine.vercel.app/',
    tags: ['Next.js', 'Vercel', 'SEO'],
  },
  {
    id: 'delivery',
    title: 'Delivery Simple',
    description: 'Saas de entrega rápida e eficiente simplificado',
    category: 'Saas',
    image: '/projects/delivery.png',
    link: 'https://delivery-simple-two.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Asaas API', 'Vercel', 'Uploadthing'],
  },
  {
    id: 'ong',
    title: 'Amendoeira do cerrado',
    description:
      'Desenvolvemos iniciativas para apoiar famílias, aprendizado e desenvolvimento humano.',
    category: 'institucional',
    image: '/projects/ong-amendoeira.png',
    link: 'https://amendoeira-do-cerrado.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Vercel', 'Uploadthing'],
  },
];

export const techStack = [
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'Framer Motion',
  'OpenAI',
  'N8N',
  'Make.com',
  'Python',
  'PostgreSQL',
  'Supabase',
  'Vercel',
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Ferreira',
    role: 'CEO na TechSolutions',
    content:
      'A automação implementada pelo Studio reduziu nosso tempo de resposta em 70%. O ROI foi quase imediato.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: '2',
    name: 'Juliana Santos',
    role: 'Diretora de Marketing',
    content:
      'O design da nossa landing page superou todas as expectativas. A estética retro-futurista nos deu uma autoridade absurda.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Ricardo Mendes',
    role: 'Fundador da Alpha Agency',
    content:
      'O agente de IA é impecável. Parece que temos uma equipe inteira cuidando do triagem de leads 24 horas por dia.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: 'A partir de R$ 2.500',
    description:
      'Ideal para lançamentos e produtos únicos que precisam de alta conversão.',
    features: [
      'Design Exclusivo',
      'Otimização de Performance',
      'SEO Local',
      'Integração com WhatsApp',
      'Focado em vendas',
    ],
    cta: 'Solicitar Orçamento',
  },
  {
    id: 'automation',
    name: 'Automação + IA',
    price: 'A partir de R$ 4.000',
    description:
      'Transforme seu operacional com agentes de IA e workflows inteligentes.',
    features: [
      'Agente de IA Personalizado',
      'Workflows com n8n',
      'Integração com APIs',
      'Painel de Controle Customizado',
      'Suporte Prioritário',
    ],
    cta: 'Escalar meu Negócio',
    highlighted: true,
  },
  {
    id: 'full-experience',
    name: 'Full Experience',
    price: 'Sob Consulta',
    description:
      'Estratégia completa de ponta a ponta: Web + Automação + Design System.',
    features: [
      'Site Institucional Multi-páginas',
      'Ecossistema Completo de IA',
      'Consultoria Estratégica',
      'Manutenção e Evolução',
      'Treinamento de Equipe',
    ],
    cta: 'Falar com Especialista',
  },
];
