"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaArrowRight, FaMobileAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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

export function WhiteLabelProduction() {
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      {/* Background elements avec z-index ajusté */}
      <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-[1]" />
      
      <div className="container-centered">
        {/* En-tête avec z-index et position relative */}
        <div className="relative z-10 content-section text-center mb-10">
          <Badge 
            variant="outline" 
            className="border-primary/20 mb-4 px-6 py-2 text-lg"
          >
            Solutions Professionnelles
          </Badge>
          <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              White Label - Ghost Production
            </span>
          </h2>
        </div>

        {/* Section Swiper avec centrage amélioré */}
        <div className="w-full max-w-[1400px] mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3,
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!pb-12"
          >
            {whiteLabelApps.map((app) => (
              <SwiperSlide key={app.id} className="flex justify-center">
                <div className="w-full max-w-[380px] mx-auto">
                  <AppCard app={app} />
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation buttons avec style amélioré */}
            <div className="swiper-button-next !text-primary after:!text-2xl !right-2 md:!right-4 lg:!right-8 hover:!text-accent transition-colors"></div>
            <div className="swiper-button-prev !text-primary after:!text-2xl !left-2 md:!left-4 lg:!left-8 hover:!text-accent transition-colors"></div>
          </Swiper>
        </div>
      </div>

      {/* 6. Styles pour Swiper */}
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

function AppCard({ app }: { app: WhiteLabelApp }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card rounded-2025 hover-lift w-full h-full"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${app.color}`} />
      
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={app.image}
          alt={app.title}
          width={600}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <Badge className={`bg-gradient-to-r ${app.color} text-white border-none`}>
            {app.title}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {app.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {app.description}
        </p>
        
        <div className="space-y-2">
          <p className="text-sm font-medium">Fonctionnalités clés:</p>
          <ul className="space-y-1">
            {app.features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div className="flex items-center">
            <span className={`p-2 rounded-full bg-gradient-to-r ${app.color} text-white mr-2`}>
              {app.icon}
            </span>
            <span className="text-sm font-medium">React Native + Supabase</span>
          </div>
          <Button variant="ghost" size="sm" className="group/btn">
            En savoir plus
            <FaArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 