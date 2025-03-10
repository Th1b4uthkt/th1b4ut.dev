// Types pour les projets
export type ProjectCategory = "web" | "mobile" | "java";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  category: ProjectCategory;
  tech: string; // Technologie principale
  featured: boolean; // Si le projet doit être mis en avant
}

// Technologies par catégorie
export const techStacks: Record<ProjectCategory, string[]> = {
  web: ["NextJS", "React", "TypeScript", "Supabase", "LangChain", "PostgreSQL"],
  mobile: ["React Native", "Flutter", "Swift UI", "Firebase", "GraphQL", "Expo"],
  java: ["Spring Boot", "Hibernate", "Microservices", "AWS", "Docker", "Kubernetes"]
};

// Liste complète des projets
export const projects: Project[] = [
  // Projets Web
  {
    id: 1,
    title: "App de gestion SaaS avec NextJS et IA",
    description: "Plateforme SaaS permettant aux entreprises de gérer leurs projets avec assistance IA",
    image: "/project1.jpg",
    tags: ["NextJS", "React", "LangChain", "Supabase"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/1",
    category: "web",
    tech: "NextJS",
    featured: true
  },
  {
    id: 2,
    title: "Plateforme e-commerce optimisée SEO",
    description: "Site e-commerce avec optimisation SEO avancée et performances exceptionnelles",
    image: "/project2.jpg",
    tags: ["NextJS", "React", "SEO", "Stripe"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/2",
    category: "web",
    tech: "React",
    featured: true
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Tableau de bord d'analyse de données avec visualisations interactives",
    image: "/project3.jpg",
    tags: ["TypeScript", "D3.js", "React", "Firebase"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/3",
    category: "web",
    tech: "TypeScript",
    featured: true
  },
  
  // Projets Mobile
  {
    id: 4,
    title: "FitCoach",
    description: "Application mobile de coaching fitness personnalisé avec suivi de progression",
    image: "/mobile1.jpg",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/4",
    category: "mobile",
    tech: "React Native",
    featured: true
  },
  {
    id: 5,
    title: "YogaSkool",
    description: "Application d'apprentissage du yoga avec vidéos et suivi de progression",
    image: "/mobile2.jpg",
    tags: ["Flutter", "Firebase", "BLoC", "Video Streaming"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/5",
    category: "mobile",
    tech: "Flutter",
    featured: true
  },
  {
    id: 6,
    title: "BreathWorking",
    description: "Application de méditation et exercices de respiration guidés",
    image: "/mobile3.jpg",
    tags: ["Swift UI", "Core Animation", "HealthKit", "CloudKit"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/6",
    category: "mobile",
    tech: "Swift UI",
    featured: true
  },
  
  // Projets Java
  {
    id: 7,
    title: "Real Estate Dashboard",
    description: "Système de gestion immobilière avec analyse prédictive des prix",
    image: "/java1.jpg",
    tags: ["Spring Boot", "Hibernate", "PostgreSQL", "Thymeleaf"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/7",
    category: "java",
    tech: "Spring Boot",
    featured: true
  },
  {
    id: 8,
    title: "ChatBOT RAG",
    description: "Chatbot intelligent utilisant la technique RAG pour des réponses précises",
    image: "/java2.jpg",
    tags: ["Java", "LangChain", "OpenAI", "Elasticsearch"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/8",
    category: "java",
    tech: "Java + LangChain",
    featured: true
  },
  {
    id: 9,
    title: "Enterprise CRM",
    description: "Système CRM d'entreprise avec architecture microservices",
    image: "/java3.jpg",
    tags: ["Java Microservices", "Spring Cloud", "Kubernetes", "React"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/9",
    category: "java",
    tech: "Java Microservices",
    featured: true
  }
];

// Fonction utilitaire pour obtenir les projets par catégorie
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(project => project.category === category);
}

// Fonction utilitaire pour obtenir les projets mis en avant
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

// Fonction utilitaire pour obtenir un projet par ID
export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
} 