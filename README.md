src/ ├── app/ │ ├── layout.tsx # Root layout com Navbar + Footer │ ├──
page.tsx # Home │ ├── globals.css # Variáveis CSS, reset, tipografia │ ├──
services/ │ │ └── page.tsx │ ├── projects/ │ │ └── page.tsx │ ├── about/ │ │ └──
page.tsx │ ├── contact/ │ │ └── page.tsx │ └── pricing/ │ └── page.tsx │ ├──
components/ │ ├── ui/ # Primitivos reutilizáveis │ │ ├── Button.tsx │ │ ├──
Card.tsx │ │ ├── Badge.tsx │ │ ├── Input.tsx │ │ ├── Textarea.tsx │ │ └──
Separator.tsx │ │ │ ├── effects/ # Efeitos visuais │ │ ├── AuroraBackground.tsx
│ │ ├── BeamEffect.tsx │ │ ├── GrainOverlay.tsx │ │ ├── SpotlightCard.tsx │ │
└── RetroLines.tsx │ │ │ ├── sections/ # Sections da Home │ │ ├──
HeroSection.tsx │ │ ├── ServicesSection.tsx │ │ ├── ProjectsSection.tsx │ │ ├──
TechStackSection.tsx │ │ ├── AutomationSection.tsx │ │ ├──
TestimonialsSection.tsx │ │ ├── DifferentialsSection.tsx │ │ └── CTASection.tsx
│ │ │ ├── layout/ │ │ ├── Navbar.tsx │ │ ├── Footer.tsx │ │ └── PageHeader.tsx │
│ │ └── shared/ │ ├── AnimatedCard.tsx │ ├── MarqueeSection.tsx │ ├──
BentoGrid.tsx │ ├── ProjectCard.tsx │ ├── ServiceCard.tsx │ ├──
TestimonialCard.tsx │ └── SectionTitle.tsx │ ├── lib/ │ ├── utils.ts # cn(),
formatters │ ├── constants.ts # dados estáticos (services, projects, etc.) │ └──
motion.ts # variantes Framer Motion reutilizáveis │ └── types/ └── index.ts #
tipos globais
