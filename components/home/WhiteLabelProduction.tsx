"use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { FaMobileAlt } from "react-icons/fa";

// Import Swiper directly for types
// import type { SwiperProps, SwiperSlideProps } from 'swiper/react';
// import type { SwiperModule } from 'swiper/types';

// Lazy load Swiper components which are heavy and only needed when section is visible
const DynamicSwiper = dynamic(() => import('../utils/DynamicSwiper'), { ssr: false });

// White Label App Types
interface WhiteLabelApp {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
}

const whiteLabelApps: WhiteLabelApp[] = [
  {
    id: "coaching-fit",
    title: "Coaching-FIT",
    description: "Application de coaching fitness personnalisé avec suivi de progression et plans d'entraînement sur mesure",
    features: [
      "Suivi de progression avancé",
      "Plans d'entraînement personnalisés",
      "Intégration avec les appareils connectés",
      "Communauté et défis entre utilisateurs"
    ],
    image: "https://placehold.co/600x450/3B82F6/FFFFFF?text=Coaching-FIT",
    icon: <FaMobileAlt className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "coaching-dev",
    title: "Coaching-Dev Perso",
    description: "Plateforme de développement personnel avec coaching, méditation et exercices de respiration guidés",
    features: [
      "Séances de méditation guidées",
      "Suivi d'objectifs personnels",
      "Journal de gratitude",
      "Analyses de progression mentale"
    ],
    image: "https://placehold.co/600x450/A855F7/FFFFFF?text=Coaching-Dev+Perso",
    icon: <FaMobileAlt className="h-6 w-6" />,
    color: "from-purple-500 to-pink-400"
  },
  {
    id: "traveling",
    title: "Traveling",
    description: "Application de voyage avec carte interactive et blog pour partager ses expériences et découvertes",
    features: [
      "Carte interactive personnalisable",
      "Blog de voyage intégré",
      "Recommandations locales",
      "Planification d'itinéraires"
    ],
    image: "https://placehold.co/600x450/10B981/FFFFFF?text=Traveling",
    icon: <FaMobileAlt className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400"
  },
  {
    id: "chatbot",
    title: "ChatBot",
    description: "Solution de chatbot IA similaire à ChatGPT pour l'assistance client et l'automatisation des services",
    features: [
      "IA conversationnelle avancée",
      "Intégration multi-plateforme",
      "Personnalisation complète",
      "Analyses de conversations"
    ],
    image: "https://placehold.co/600x450/F97316/FFFFFF?text=ChatBot",
    icon: <FaMobileAlt className="h-6 w-6" />,
    color: "from-orange-500 to-amber-400"
  }
];

// StaticContent component for static parts
function StaticContent() {
  return (
    <div className="relative z-10 content-section text-center mb-10">
      <div className="inline-block industrial-border px-6 py-2 mb-4">
        <span className="underground-text text-lg">GHOST PRODUCTION</span>
      </div>
      <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="underground-gradient-text">
          White Label Solutions
        </span>
      </h2>
      <div className="vu-meter mx-auto w-1/2 max-w-[300px] mb-8" style={{ "--level": "65%" } as React.CSSProperties}></div>
    </div>
  );
}

// Main component
export function WhiteLabelProduction() {
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 -z-[1]" />
      <div className="absolute inset-0 studio-grid -z-[1] opacity-30" />
      
      <div className="container-centered">
        {/* En-tête avec style underground */}
        <StaticContent />

        {/* Section Swiper avec style underground */}
        <div className="w-full max-w-[1400px] mx-auto">
          <DynamicSwiper items={whiteLabelApps} />
        </div>
      </div>

      {/* Styles pour Swiper avec thème underground */}
      <style jsx global>{`
        .swiper-container {
          width: 100%;
          padding: 0;
          overflow: visible;
        }
        
        .swiper-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-pagination-bullet {
          background: var(--primary);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
} 