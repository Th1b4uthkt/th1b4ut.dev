import { StaticImageData } from "next/image";

// Types
export interface WhitelabelTemplate {
  id: string;
  name: string;
  description: string;
  image: string;
  stats: {
    deliveryTime: string;
    activeUsers: string;
    impact: string;
  };
  features: string[];
  demoUrl: string;
}

export interface WhitelabelCase {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  testimonial: string;
  results: {
    downloads: string;
    timeToMarket: string;
    impact: string;
  };
  image: string;
  videoUrl?: string;
}

export interface WhitelabelFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhitelabelPricing {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

// Data
export const whitelabelTemplates: WhitelabelTemplate[] = [
  {
    id: "fitness",
    name: "Coaching-FIT",
    description: "Application de coaching fitness personnalisé avec IA",
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742982833/1_zefofe.png",
    stats: {
      deliveryTime: "12 jours",
      activeUsers: "8k",
      impact: "95% rétention",
    },
    features: [
      "Programmes personnalisés",
      "Suivi des progrès",
      "IA pour ajustement",
      "Communauté intégrée",
    ],
    demoUrl: "/demo/fitness",
  },
  {
    id: "chatbot",
    name: "ChatBot IA",
    description: "Assistant virtuel personnalisé style ChatGPT",
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742997377/1_aqir7g.png",
    stats: {
      deliveryTime: "10 jours",
      activeUsers: "15k",
      impact: "-95% tickets support",
    },
    features: [
      "IA conversationnelle",
      "Base de connaissances",
      "Intégration API",
      "Analytics avancés",
    ],
    demoUrl: "/demo/chatbot",
  },
  {
    id: "travel",
    name: "Traveling",
    description: "Application de voyage et découverte",
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742983240/1_bn0slx.png",
    stats: {
      deliveryTime: "15 jours",
      activeUsers: "3k",
      impact: "200 réservations/mois",
    },
    features: [
      "Carte interactive",
      "Blog de voyage",
      "Réservations",
      "Recommandations IA",
    ],
    demoUrl: "/demo/travel",
  },
  {
    id: "coaching",
    name: "Dev Perso",
    description: "Application de développement personnel et méditation",
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742994420/Brown_Beige_Skincare_New_Product_Instagram_Post_bq51je.png",
    stats: {
      deliveryTime: "14 jours",
      activeUsers: "5k",
      impact: "+40% engagement",
    },
    features: [
      "Méditations guidées",
      "Suivi d'objectifs",
      "Journal personnel",
      "Communauté",
    ],
    demoUrl: "/demo/coaching",
  },
];

export const whitelabelCases: WhitelabelCase[] = [
  {
    id: "fitlife",
    clientName: "Sarah",
    companyName: "FitLife",
    role: "CEO",
    testimonial: "Avec Th1b4uut, on a lancé notre app fitness en 14 jours. Le code est aussi propre que du Tailwind – on a pu ajouter un module de paiement nous-mêmes après !",
    results: {
      downloads: "5k téléchargements",
      timeToMarket: "30 jours",
      impact: "Code modifié 3x",
    },
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742982833/3_dbgnin.png",
    videoUrl: "/videos/testimonial-fitlife.mp4",
  },
  {
    id: "aibot",
    clientName: "Marc",
    companyName: "SupportAI",
    role: "CTO",
    testimonial: "Notre chatbot a réduit les coûts de support de 70%. L'intégration a été ultra rapide et le code est facilement maintenable.",
    results: {
      downloads: "15k utilisateurs",
      timeToMarket: "10 jours",
      impact: "-70% coûts support",
    },
    image: "/images/cases/aibot.webp",
  },
  {
    id: "wanderlust",
    clientName: "Julie",
    companyName: "Wanderlust",
    role: "Fondatrice",
    testimonial: "Notre app de voyage génère maintenant 200 réservations par mois. Le code est si bien structuré qu'on a pu ajouter de nouvelles destinations facilement.",
    results: {
      downloads: "3k utilisateurs actifs",
      timeToMarket: "15 jours",
      impact: "200 réservations/mois",
    },
    image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742983311/2_rioie4.png",
  },
];

export const whitelabelFeatures: WhitelabelFeature[] = [
  {
    id: "design",
    title: "Design 100% Personnalisable",
    description: "Logo, couleurs, contenu - tout est modifiable selon votre marque",
    icon: "🎨",
  },
  {
    id: "backend",
    title: "Backend Clé en Main",
    description: "Infrastructure Supabase/Firebase prête à l'emploi",
    icon: "⚡",
  },
  {
    id: "stores",
    title: "Publication Stores Incluse",
    description: "Déploiement sur App Store et Google Play géré de A à Z",
    icon: "🚀",
  },
  {
    id: "code",
    title: "Code Modifiable à Vie",
    description: "Accès total au code source pour évolutions futures",
    icon: "💻",
  },
];

export const whitelabelPricing: WhitelabelPricing[] = [
  {
    id: "mvp",
    name: "MVP",
    price: "2000€",
    description: "Lancez votre app en 15 jours",
    features: [
      "Template Predefini",
      "Personnalisation basique",
      "Backend inclus",
      "Publication stores",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "4500€",
    description: "Solution complète et personnalisée",
    features: [
      "Tout du MVP",
      "Fonctionnalités custom",
      "IA embarquée",
      "Support 6 mois",
    ],
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sur mesure",
    description: "Pour les projets complexes",
    features: [
      "Tout du Standard",
      "Architecture scalable",
      "API métier",
      "Support illimité",
    ],
  },
];

export const whitelabelFAQ = [
  {
    question: "Pourquoi si peu cher ? C'est du low-code ?",
    answer: "C'est l'inverse : vous réutilisez des systèmes éprouvés que je maintiens depuis des années. Vous payez l'adaptation, pas la R&D.",
  },
  {
    question: "Puis-je vraiment tout modifier après ?",
    answer: "Oui. Exemple : le CEO de Coaching-Dev Perso a ajouté lui-même un module de suivi de sommeil en 2 jours (voir code sur GitHub).",
  },
  {
    question: "Comment se passe la maintenance ?",
    answer: "Le code est 100% vôtre. Vous pouvez le maintenir vous-même ou souscrire à notre support mensuel (inclus 6 mois dans l'offre Standard).",
  },
  {
    question: "Les stores acceptent-ils facilement les apps ?",
    answer: "Oui, car nous suivons toutes les guidelines Apple/Google. Notre taux d'acceptation est de 100% sur les 50 dernières publications.",
  },
];

export const whitelabelManifesto = {
  title: "Libérez Votre Marque, Pas Votre Budget",
  content: [
    "Code ouvert > Solutions enfermantes",
    "IA augmentée > Templates rigides",
    "Liberté de scaling > Abonnements forcés",
  ],
};

export const whitelabelGrowthKit = {
  title: "Kit de Growth Gratuit",
  items: [
    {
      name: "Templates Figma",
      description: "Designs prêts à personnaliser",
      url: "/growth-kit/figma",
    },
    {
      name: "Scripts TikTok",
      description: "Comment j'ai lancé mon app en 15 jours",
      url: "/growth-kit/tiktok",
    },
    {
      name: "Config SEO",
      description: "Automatisation SEO via LangChain",
      url: "/growth-kit/seo",
    },
  ],
}; 