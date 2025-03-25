"use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { FaMobileAlt } from "react-icons/fa";
import { projects } from "@/Data/projects";

// Import Swiper directly for types
// import type { SwiperProps, SwiperSlideProps } from 'swiper/react';
// import type { SwiperModule } from 'swiper/types';

// Lazy load Swiper components which are heavy and only needed when section is visible
const DynamicSwiper = dynamic(() => import('../utils/DynamicSwiper'), { ssr: false });

// Get only mobile white label projects
const getWhiteLabelProjects = () => {
  return projects.filter(project => 
    project.category === "mobile" && 
    project.tags.includes("Marque Blanche")
  );
};

// Mapping des couleurs en fonction du projet
const getProjectColor = (index: number): string => {
  const colors = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-green-500 to-emerald-400",
    "from-orange-500 to-amber-400"
  ];
  return colors[index % colors.length];
};

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
  const whiteLabelProjects = getWhiteLabelProjects();

  // Transform projects to match DynamicSwiper format
  const swiperItems = whiteLabelProjects.map((project, index) => ({
    id: project.id.toString(),
    title: project.title,
    description: project.description,
    features: project.tags,
    image: project.image,
    icon: <FaMobileAlt className="h-6 w-6" />,
    color: getProjectColor(index)
  }));

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
          <DynamicSwiper items={swiperItems} />
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