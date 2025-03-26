// Types pour les données MVP
export interface MVPFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface MVPStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface MVPFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface MVPProject {
  id: number;
  title: string;
  description: string;
  stats: string;
  image: string;
  category: string;
}

export interface MVPData {
  title: string;
  subtitle: string;
  description: string;
  features: MVPFeature[];
  steps: MVPStep[];
  faqs: MVPFAQ[];
  featuredProjects: MVPProject[];
  philosophy: string;
}

// Données pour la page MVP
export const mvpData: MVPData = {
  title: "Un MVP Full-Stack en 15 jours max",
  subtitle: "Débloquez votre projet sans code, mais avec du code sur-mesure",
  description: "NextJS, Expo, Flutter + IA. Design minimaliste, publication garantie sur les Stores. Prix fixe : 2000€. Code 100% vôtre.",
  
  features: [
    {
      id: 1,
      title: "MVP clé en main",
      description: "Solution complète avec NextJS, Expo, ou Flutter selon vos besoins spécifiques.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Backend instantané",
      description: "Infrastructure robuste via Supabase, Firebase, ou MongoDB pour un démarrage rapide.",
      icon: "Database"
    },
    {
      id: 3,
      title: "Publication assurée",
      description: "Déploiement garanti sur l'App Store et Google Play pour une visibilité immédiate.",
      icon: "Store"
    },
    {
      id: 4,
      title: "Code propre, modifiable",
      description: "Droits commerciaux inclus, code documenté et facilement extensible.",
      icon: "FileCode"
    }
  ],
  
  steps: [
    {
      id: 1,
      title: "Contact",
      description: "15min pour cerner votre besoin et définir les fonctionnalités essentielles de votre MVP.",
      icon: "Calendar"
    },
    {
      id: 2,
      title: "Validation",
      description: "Récapitulatif immédiat par email avec timeline précise et stack technique recommandée.",
      icon: "CheckCircle"
    },
    {
      id: 3,
      title: "Livraison",
      description: "Remise du code + documentation en vidéo pour modification autonome et guide Growth Hacking post-MVP.",
      icon: "Package"
    }
  ],
  
  faqs: [
    {
      id: 1,
      question: "Pourquoi 2000€ et pas moins ?",
      answer: "Un MVP cheap = code spaghetti. Ici, vous payez un expert IA/Full-Stack pour un système scalable. Exemple : ChatGPT intégré en 2 jours grâce à mon expérience RAG/LLM."
    },
    {
      id: 2,
      question: "Puis-je modifier le MVP moi-même après ?",
      answer: "Oui. Le code est documenté, avec des librairies standards (React, TypeScript). Vous pouvez même le confier à votre équipe plus tard."
    },
    {
      id: 3,
      question: "Combien de temps faut-il pour livrer le MVP ?",
      answer: "Entre 10 et 15 jours selon la complexité. La timeline est définie dès le début : J1-3: Setup tech, J4-10: Dev, J11-15: Tests/Publication."
    },
    {
      id: 4,
      question: "Quelles technologies utilisez-vous ?",
      answer: "Pour le web: NextJS, React, TypeScript, Supabase. Pour le mobile: React Native, Flutter. Pour l'IA: LangChain, OpenAI, RAG. Le choix dépend de vos besoins spécifiques."
    }
  ],
  
  featuredProjects: [
    {
      id: 1,
      title: "AI SKOOL",
      description: "Tuteur IA personnel alimenté par Llama 3.1 70B",
      stats: "MVP livré en 12 jours – 15k utilisateurs en 1 mois",
      image: "https://res.cloudinary.com/dwg6ny1kj/image/upload/t_600x400/v1741687750/AISKOOL_ruh99h.png",
      category: "web"
    },
    {
      id: 2,
      title: "PDFToChat",
      description: "Application pour discuter avec vos PDFs via IA",
      stats: "Déployé en 10 jours – 8k utilisateurs actifs",
      image: "https://res.cloudinary.com/dwg6ny1kj/image/upload/t_600x400/v1741687857/pdftochat_coss1k.png",
      category: "web"
    },
    {
      id: 5,
      title: "Coaching-FIT",
      description: "Application de coaching fitness personnalisé",
      stats: "App mobile marque blanche déployée sur l'App Store en 10 jours",
      image: "https://res.cloudinary.com/dkq9wz00t/image/upload/v1742994420/Brown_Beige_Skincare_New_Product_Instagram_Post_bq51je.png",
      category: "mobile"
    }
  ],
  
  philosophy: "L'IA comme allié, pas comme dictateur. Un code sans chaînes, pensé pour votre liberté."
};

// Comparaison MVP cheap vs MVP pro
export const mvpComparison = [
  {
    category: "Qualité du code",
    cheap: "Code spaghetti, difficile à maintenir",
    pro: "Architecture propre, modulaire et documentée"
  },
  {
    category: "Évolutivité",
    cheap: "Limité, nécessite souvent une réécriture",
    pro: "Conçu pour évoluer, facilement extensible"
  },
  {
    category: "Performance",
    cheap: "Lente, non optimisée",
    pro: "Rapide, optimisée pour l'utilisateur final"
  },
  {
    category: "Sécurité",
    cheap: "Vulnérabilités potentielles",
    pro: "Bonnes pratiques de sécurité intégrées"
  },
  {
    category: "Support",
    cheap: "Minimal ou inexistant",
    pro: "Documentation complète + vidéo explicative"
  }
];

// Timeline du projet
export const mvpTimeline = [
  {
    day: "J1-J3",
    phase: "Setup technique",
    tasks: ["Architecture", "Configuration", "Préparation des environnements"]
  },
  {
    day: "J4-J10",
    phase: "Développement",
    tasks: ["Frontend", "Backend", "Intégration API", "Tests unitaires"]
  },
  {
    day: "J11-J15",
    phase: "Finalisation",
    tasks: ["Tests utilisateurs", "Corrections", "Déploiement", "Publication"]
  }
]; 