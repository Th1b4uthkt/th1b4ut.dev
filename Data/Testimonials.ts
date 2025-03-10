export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "CEO",
    company: "TechStart SAS",
    text: "Thibaut a développé notre plateforme SaaS avec une expertise remarquable. L'intégration de l'IA conversationnelle a transformé notre service client. Notre taux de satisfaction a augmenté de 40% en 3 mois.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO",
    company: "AI Solutions Ltd",
    text: "The voice AI implementation for our customer service was outstanding. The multilingual capabilities and natural conversation flow exceeded our expectations. Response times improved by 75%.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana García",
    role: "Directora de Innovación",
    company: "TechMundo España",
    text: "La implementación del chatbot IA fue excepcional. La capacidad de manejar consultas en español e inglés ha revolucionado nuestro servicio al cliente. El ROI superó nuestras expectativas en un 200%.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    rating: 5,
  },
  {
    id: 4,
    name: "Hans Weber",
    role: "Technischer Direktor",
    company: "DataTech GmbH",
    text: "Die Integration der KI-gestützten Analyseplattform war genau das, was wir brauchten. Die Leistung und Skalierbarkeit der Lösung sind beeindruckend. Unsere Datenverarbeitung ist jetzt 5-mal schneller.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophie Chen",
    role: "Product Manager",
    company: "TechAsia Solutions",
    text: "The white-label fitness app development was exceptional. The AI-powered features and performance analytics have helped us scale to 100,000+ users in just 6 months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    id: 6,
    name: "Alessandro Romano",
    role: "Direttore Marketing",
    company: "InnovaTech Italia",
    text: "L'implementazione SEO e l'ottimizzazione delle prestazioni hanno trasformato la nostra presenza online. Il traffico organico è aumentato del 150% in soli 4 mesi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    id: 7,
    name: "Yuki Tanaka",
    role: "開発責任者",
    company: "テックイノベーション株式会社",
    text: "AIチャットボットの実装は完璧でした。自然な日本語対応と高度な分析機能により、カスタマーサービスの効率が80%向上しました。",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    id: 8,
    name: "Sarah O'Connor",
    role: "Head of Digital",
    company: "FitTech Solutions",
    text: "The Coaching-FIT app development exceeded all expectations. The AI-powered personalization and seamless UX have resulted in a 92% user retention rate.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    rating: 5,
  },
  {
    id: 9,
    name: "Pierre Dubois",
    role: "Directeur Technique",
    company: "VoiceAI France",
    text: "L'implémentation du standard téléphonique IA est remarquable. La qualité de la reconnaissance vocale et la gestion intelligente des appels ont réduit nos coûts de 45%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    id: 10,
    name: "Elena Petrova",
    role: "Руководитель разработки",
    company: "TechInnovate Russia",
    text: "Интеграция ИИ в нашу платформу была выполнена безупречно. Производительность и масштабируемость решения превзошли все ожидания.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    rating: 5,
  },
]; 