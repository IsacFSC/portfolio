import { Project, Testimonial } from '@/types';

export const projects: Project[] = [
  {
    id: 'premium-personal',
    title: 'Studio Premium Personal',
    description:
      'Landing page premium para um studio de treino personalizado, focado em performance, estética e conversão de clientes via WhatsApp.',
    category: 'Landing Page',
    image: '/projects/personal.png',
    link: 'https://personal-premium-studio.vercel.app/',
    tags: ['Next.js', 'Tailwind 4', 'WhatsApp API', 'Vercel'],
    problem:
      'Negócios locais de treino personalizado geralmente não possuem presença digital estruturada, dificultando captação de clientes e agendamentos diretos.',
    decisions: [
      'Uso de Next.js App Router para garantir performance, SEO e estrutura escalável de páginas.',
      'Design focado em conversão com CTAs diretos para WhatsApp em pontos estratégicos da jornada do usuário.',
      'UI responsiva com Tailwind 4 priorizando mobile-first, já que a maior parte do tráfego vem de dispositivos móveis.',
    ],
  },
  {
    id: 'mercadomais',
    title: 'Mercado +Mais',
    description:
      'Plataforma digital para rede de mercados locais com foco em descoberta de unidades e contato rápido via WhatsApp.',
    category: 'E-commerce / Local Commerce',
    image: '/projects/mercadomais.png',
    link: 'https://mercadomais.vercel.app/',
    tags: ['Next.js', 'Tailwind 4', 'WhatsApp', 'Leaflet', 'Vercel'],
    problem:
      'Pequenos mercados locais precisam de uma presença digital simples, rápida e acessível para facilitar o contato com clientes e direcionar para unidades físicas sem fricção.',
    decisions: [
      'Arquitetura baseada em Next.js App Router para rotas rápidas, SEO e escalabilidade de páginas de categorias e ofertas.',
      'Integração com WhatsApp dinâmica por unidade para facilitar conversão direta sem necessidade de cadastro.',
      'Uso de Leaflet para exibição de mapa interativo das unidades, melhorando descoberta geográfica.',
      'UI otimizada para mobile-first com foco em navegação rápida e baixa fricção do usuário até o contato.',
    ],
  },
  {
    id: 'escala-de-musicos',
    title: 'Escala Music',
    description:
      'Plataforma para músicos colaborarem e gerarem escalas com agilidade.',
    category: 'Saas',
    image: '/projects/escala-music.png',
    link: 'https://escala-music.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Asaas API', 'Vercel', 'Uploadthing'],
    problem:
      'Criar uma interface fluida para músicos acessarem escalas, gerenciar conteúdo e compartilhar com equipes sem perder performance.',
    decisions: [
      'Arquitetura server-side com Next.js para carregamento instantâneo e SEO técnico.',
      'Banco SQL para organizar escalas, usuários e arquivos de áudio com consistência.',
      'Integração de Uploadthing para upload seguro de material multimídia.',
    ],
  },
  {
    id: 'nutri-nine',
    title: 'Nutricionista Evellyn L.',
    description:
      'Presença digital profissional e otimizada para captação de pacientes.',
    category: 'Institucional',
    image: '/projects/nutri.png',
    link: 'https://nutricionistaevellynlopes.vercel.app/',
    tags: ['Next.js', 'Vercel', 'SEO'],
    problem:
      'Transformar um site institucional em uma vitrine de autoridade, aumentando a confiança e geração de leads para serviços de nutrição.',
    decisions: [
      'Design minimalista com foco em leitura e conversão para públicos mobile e desktop.',
      'Otimização SEO on-page e performance para rápido carregamento em dispositivos lentos.',
      'Copy clara e direcionada para serviços de avaliação nutricional e consultoria.',
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery Simple',
    description:
      'Solução de entrega moderna para restaurantes e clientes locais.',
    category: 'Saas',
    image: '/projects/delivery.png',
    link: 'https://delivery-simple-two.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Asaas API', 'Vercel', 'Uploadthing'],
    problem:
      'Reduzir a fricção do pedido online em entregas locais, mantendo o processo simples e confiável.',
    decisions: [
      'Fluxo de checkout enxuto para reduzir abandono e acelerar conversões.',
      'Uso de APIs financeiras para pagamentos e confirmações de pedidos em tempo real.',
      'Estrutura de dados escalável para suportar menus, entregas e rastreamento.',
    ],
  },
  {
    id: 'ong',
    title: 'Amendoeira do Cerrado',
    description:
      'Site institucional para conectar projetos sociais a apoiadores e doadores.',
    category: 'Institucional',
    image: '/projects/ong-amendoeira.png',
    link: 'https://amendoeira-do-cerrado.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'Vercel', 'Uploadthing'],
    problem:
      'Dar voz ao projeto social com uma experiência clara que facilite doações e parcerias.',
    decisions: [
      'Narrativa visual forte para comunicar impacto e credibilidade.',
      'Layout responsivo otimizado para captação de doadores via desktop e mobile.',
      'Estrutura simples que destaca missão, ações e resultados com rapidez.',
    ],
  },
];

export const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Stripe',
  'Jest',
  'Better Auth',
  'AbacatePay',
  'Resend',
  'AWS',
  'Docker',
  'Google Social',
  'JWT',
  'S3 UploadThing',
  'Tailwind',
  'React Native',
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

// services and pricingPlans removed per project simplification
