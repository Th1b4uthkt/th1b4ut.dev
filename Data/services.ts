export interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  features: string[];
  price: string;
  ctaLink: string;
  benefits?: string[]; // Avantages spécifiques
  useCases?: string[]; // Cas d'utilisation
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Développement Full-Stack",
    description: "Applications web modernes, performantes et évolutives avec les meilleures technologies du marché.",
    iconPath: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
    features: [
      "Sites web et applications SaaS",
      "E-commerce et plateformes de vente",
      "Dashboards et applications métier",
      "APIs et architectures micro-services"
    ],
    price: "à partir de 3500€",
    ctaLink: "/contact?service=fullstack",
    benefits: [
      "Augmentez votre efficacité opérationnelle",
      "Réduisez vos coûts de maintenance",
      "Améliorez l'expérience utilisateur"
    ],
    useCases: [
      "Automatisation de processus métier",
      "Centralisation des données clients",
      "Optimisation des flux de travail"
    ]
  },
  {
    id: "ai",
    title: "Intégration IA/ML",
    description: "Intégration de solutions d'intelligence artificielle pour rendre vos applications plus intelligentes et efficaces.",
    iconPath: "M12 2v8 M4.93 10.93l1.41 1.41 M2 18h2 M20 18h2 M19.07 10.93-1.41 1.41 M22 22H2 M16 6-4 4-4-4 M16 18a4 4 0 0 0-8 0",
    features: [
      "Chatbots et assistants intelligents",
      "Systèmes de recommandation",
      "Analyse et visualisation de données",
      "Automatisation intelligente"
    ],
    price: "à partir de 4500€",
    ctaLink: "/contact?service=ai",
    benefits: [
      "Automatisez les tâches répétitives",
      "Obtenez des insights précieux de vos données",
      "Personnalisez l'expérience de vos utilisateurs"
    ],
    useCases: [
      "Service client automatisé",
      "Prédiction des comportements utilisateurs",
      "Optimisation des processus décisionnels"
    ]
  },
  {
    id: "mobile",
    title: "Applications Mobiles en Marque Blanche",
    description: "Solutions mobiles personnalisables et adaptables à votre identité de marque pour une présence mobile immédiate.",
    iconPath: "M12 18h.01 M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
    features: [
      "Applications iOS et Android",
      "Personnalisation complète",
      "Intégration avec vos systèmes existants",
      "Maintenance et mises à jour incluses"
    ],
    price: "à partir de 5000€",
    ctaLink: "/contact?service=mobile",
    benefits: [
      "Lancez votre application mobile rapidement",
      "Réduisez les coûts de développement",
      "Bénéficiez d'une solution éprouvée et stable"
    ],
    useCases: [
      "E-commerce mobile",
      "Applications de fidélité client",
      "Services de livraison et logistique"
    ]
  }
];

export const workProcess = [
  {
    step: 1,
    title: "Consultation",
    description: "Analyse approfondie de vos besoins et définition des objectifs"
  },
  {
    step: 2,
    title: "Planification",
    description: "Élaboration d'une stratégie et d'un calendrier détaillé"
  },
  {
    step: 3,
    title: "Développement",
    description: "Création itérative avec validations régulières"
  },
  {
    step: 4,
    title: "Livraison & Support",
    description: "Mise en production et accompagnement continu"
  }
];

export const testimonials = [
  {
    name: "Alice Renaud",
    position: "CEO, TechStart SAS",
    initials: "AR",
    content: "Th1b4ut a complètement transformé notre application. L'intégration de l'IA a permis d'automatiser des tâches qui prenaient des heures à notre équipe. Le projet a été livré dans les délais et avec une qualité exceptionnelle.",
    rating: 5
  },
  {
    name: "Marc Bertrand",
    position: "Directeur Marketing, EcoShop",
    initials: "MB",
    content: "L'audit SEO réalisé par Th1b4ut a été un véritable révélateur pour notre e-commerce. Les recommandations étaient claires et pratiques. Après leur mise en œuvre, notre trafic organique a augmenté de 45% en seulement 3 mois.",
    rating: 5
  }
];

export const benefits = [
  {
    title: "Expertise technique",
    description: "Des solutions à la pointe de la technologie pour des performances optimales",
    icon: "rocket"
  },
  {
    title: "Approche sur mesure",
    description: "Chaque projet est unique et mérite une solution adaptée à vos besoins spécifiques",
    icon: "settings"
  },
  {
    title: "Support continu",
    description: "Un accompagnement de qualité tout au long du projet et après la livraison",
    icon: "headphones"
  }
]; 