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
  web: ["NextJS", "React", "TypeScript", "Supabase", "LangChain", "PostgreSQL", "RAG", "OpenAI", "Automatisation"],
  mobile: ["React Native", "Flutter", "Swift UI", "Firebase", "GraphQL", "Marque Blanche", "IA Embarquée", "Systèmes Autonomes"],
  java: ["Spring Boot", "Hibernate", "Microservices", "AWS", "Docker", "Kubernetes", "Machine Learning", "Algorithmes"]
};

// Liste complète des projets
export const projects: Project[] = [
  // Projets Web
  {
    id: 1,
    title: "LlamaTutor - AI Personal Tutor",
    description: "An open source AI personal tutor powered by Llama 3.1 70B. Helps users learn any topic with personalized tutoring.",
    image: "/llamatutor.jpg",
    tags: ["NextJS", "Tailwind", "LLM", "Llama 3.1", "Together.ai"],
    githubUrl: "https://github.com/Nutlope/llamatutor",
    demoUrl: "https://aiskool-com.vercel.app/",
    category: "web",
    tech: "NextJS + Llama 3.1",
    featured: true
  },
  {
    id: 2,
    title: "PDFToChat - Chat with your PDFs",
    description: "An open source application that allows users to chat with their PDF documents using AI. Powered by Together AI and MongoDB Atlas.",
    image: "/pdftochat.jpg",
    tags: ["NextJS", "LangChain", "RAG", "Mixtral", "MongoDB"],
    githubUrl: "https://github.com/Nutlope/pdftochat",
    demoUrl: "https://ai-consultant.fr/",
    category: "web",
    tech: "RAG + LangChain",
    featured: true
  },
  {
    id: 3,
    title: "Financial Agent UI",
    description: "A generative UI financial agent that uses Vercel's AI SDK and LangChain agents to dynamically answer questions and render UI with real-time stock data.",
    image: "/financial-agent.jpg",
    tags: ["TypeScript", "Vercel AI SDK", "LangChain", "Financial Data", "Generative UI"],
    githubUrl: "https://github.com/virattt/financial-agent-ui",
    demoUrl: "/projets/3",
    category: "web",
    tech: "Generative UI + LangChain",
    featured: true
  },
  {
    id: 4,
    title: "Doctor AI Appointment",
    description: "Voice-enabled AI assistant that allows patients to schedule appointments with healthcare providers through phone calls, with SMS confirmations.",
    image: "/doctor-ai.jpg",
    tags: ["Python", "Flask", "Twilio", "OpenAI", "Voice AI"],
    githubUrl: "https://github.com/swapp1990/doctor-ai-appointment",
    demoUrl: "/projets/4",
    category: "web",
    tech: "Voice AI + Twilio",
    featured: false
  },
  
  // Projets Mobile - Marque Blanche
  {
    id: 5,
    title: "Coaching-FIT - Solution Marque Blanche",
    description: "Application de coaching fitness personnalisé avec suivi de progression et plans d'entraînement sur mesure, disponible en marque blanche",
    image: "https://placehold.co/600x450/3B82F6/FFFFFF?text=Coaching-FIT",
    tags: ["React Native", "Marque Blanche", "Fitness", "Suivi de progression"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/5",
    category: "mobile",
    tech: "Marque Blanche",
    featured: true
  },
  {
    id: 6,
    title: "Coaching-Dev Perso - Solution Marque Blanche",
    description: "Plateforme de développement personnel avec coaching, méditation et exercices de respiration guidés, personnalisable pour votre marque",
    image: "https://placehold.co/600x450/A855F7/FFFFFF?text=Coaching-Dev+Perso",
    tags: ["Flutter", "Marque Blanche", "Développement Personnel", "Méditation"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/6",
    category: "mobile",
    tech: "Marque Blanche",
    featured: true
  },
  {
    id: 7,
    title: "Traveling - Solution Marque Blanche",
    description: "Application de voyage avec carte interactive et blog pour partager ses expériences, adaptable à votre identité de marque",
    image: "https://placehold.co/600x450/10B981/FFFFFF?text=Traveling",
    tags: ["Swift UI", "Marque Blanche", "Voyage", "Blog"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/7",
    category: "mobile",
    tech: "Marque Blanche",
    featured: false
  },
  {
    id: 8,
    title: "ChatBot - Solution Marque Blanche",
    description: "Solution de chatbot IA similaire à ChatGPT pour l'assistance client et l'automatisation des services, personnalisable à votre image",
    image: "https://placehold.co/600x450/F97316/FFFFFF?text=ChatBot",
    tags: ["React Native", "Marque Blanche", "IA Conversationnelle", "Assistance Client"],
    githubUrl: "https://github.com",
    demoUrl: "/projets/8",
    category: "mobile",
    tech: "Marque Blanche + IA",
    featured: true
  },
  
  // Projets Java (remplacés par les nouveaux projets)
  {
    id: 9,
    title: "VapiBlocks Car Rental Demo",
    description: "A car rental website built with Next.js App Router, showcasing Vapi AI integration for voice interactions, with Vercel Postgres, Tailwind CSS, and Shadcn UI.",
    image: "/car-rental.jpg",
    tags: ["NextJS", "TypeScript", "Vapi AI", "Vercel Postgres", "Tailwind"],
    githubUrl: "https://github.com/cameronking4/vapiblocks-car-rental-demo",
    demoUrl: "https://cardemo.vapiblocks.com",
    category: "java",
    tech: "Voice AI + Next.js",
    featured: true
  },
  {
    id: 10,
    title: "Teacher AI",
    description: "A platform for learning languages with AI voices using Elevenlabs AI, featuring hearts system, points/XP, leaderboard, quests, and a shop system.",
    image: "/teacher-ai.jpg",
    tags: ["NextJS", "React", "Drizzle", "Stripe", "Elevenlabs AI"],
    githubUrl: "https://github.com/aleksanderpalamar/teacher-ai",
    demoUrl: "https://teacher-ai-rho.vercel.app",
    category: "java",
    tech: "Next.js + Elevenlabs AI",
    featured: true
  },
  {
    id: 11,
    title: "AI Chatbot Supabase",
    description: "An AI-powered chatbot built with Supabase for data storage and authentication, offering intelligent conversation capabilities.",
    image: "/ai-chatbot.jpg",
    tags: ["Supabase", "AI", "Chatbot", "Authentication"],
    githubUrl: "https://github.com/nolly-studio/ai-chatbot-supabase",
    demoUrl: "/projets/11",
    category: "java",
    tech: "Supabase + AI",
    featured: false
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