"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Définition des styles partagés
const STYLES = {
  FLEX_CENTER: "flex items-center justify-center",
  FLEX_COL: "flex flex-col",
  FLEX_CENTER_JUSTIFIED: "flex items-center justify-center",
};

// Composant IconContainer
export function SkillIconContainer({ 
  text, 
  delay = 0,
  icon
}: { 
  text: string; 
  delay?: number;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center space-y-2"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        )}
      </div>
      <span className="text-center text-sm font-medium">{text}</span>
    </motion.div>
  );
}

// Composant Radar
export function Radar() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn(STYLES.FLEX_CENTER, "absolute inset-0 z-10")}>
      <div className="relative h-80 w-80">
        {/* Cercles concentriques */}
        <div className="absolute inset-0 rounded-full border border-primary/10 opacity-20" />
        <div className="absolute inset-[15%] rounded-full border border-primary/10 opacity-30" />
        <div className="absolute inset-[30%] rounded-full border border-primary/10 opacity-40" />
        <div className="absolute inset-[45%] rounded-full border border-primary/10 opacity-50" />
        
        {/* Lignes croisées */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-[1px] bg-primary/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[1px] w-full bg-primary/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-45">
          <div className="h-full w-[1px] bg-primary/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-45">
          <div className="h-[1px] w-full bg-primary/10" />
        </div>
        
        {/* Effet de balayage radar */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[40%] w-[1px] origin-bottom -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-primary via-primary to-transparent animate-radarSpin" />
        </div>
        
        {/* Points lumineux aléatoires */}
        <RadarDots />
      </div>
    </div>
  );
}

// Composant pour les points lumineux du radar
function RadarDots() {
  const dots = Array.from({ length: 12 }).map(() => {
    const angle = Math.random() * 360;
    const distance = 30 + Math.random() * 50;
    const size = 1 + Math.random() * 2;
    const delay = Math.random() * 5;
    const duration = 1 + Math.random() * 2;
    const opacity = 0.3 + Math.random() * 0.7;
    
    return { angle, distance, size, delay, duration, opacity };
  });
  
  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, dot.opacity, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `calc(50% + ${Math.cos(dot.angle * Math.PI / 180) * dot.distance}px)`,
            top: `calc(50% + ${Math.sin(dot.angle * Math.PI / 180) * dot.distance}px)`,
          }}
        />
      ))}
    </>
  );
}

// Composant RadarBottomLine
export function RadarBottomLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
  );
}

// Composant principal qui combine tout
export function SkillsRadarDemo() {
  return (
    <div className={cn(
      STYLES.FLEX_COL,
      STYLES.FLEX_CENTER_JUSTIFIED,
      "relative w-full space-y-4 overflow-hidden h-[600px] glass-card rounded-2xl p-8"
    )}>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <h2 className="text-xl font-semibold mb-4 relative z-20">Nos domaines d expertise</h2>
      
      <RenderSkillIcons />
      <Radar />
      <RadarBottomLine />
    </div>
  );
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        FUNCTIONS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

function RenderSkillIcons() {
  // Définir les compétences à afficher
  const skills = {
    row1: ["Développement Web", "Applications React/Next.js", "UI/UX Design"],
    row2: ["Intelligence Artificielle", "Architecture Backend"],
    row3: ["Développement Mobile", "Intégration API"]
  };

  return (
    <>
      {/* Première rangée */}
      <div className="mx-auto w-full max-w-3xl relative z-20">
        <div className={cn(
          STYLES.FLEX_CENTER_JUSTIFIED,
          "w-full space-x-10 md:justify-between md:space-x-0"
        )}>
          {skills.row1.map((skill, index) => (
            <SkillIconContainer 
              key={`skill-row1-${index}`} 
              delay={0.2 + (index * 0.1)} 
              text={skill} 
            />
          ))}
        </div>
      </div>

      {/* Deuxième rangée */}
      <div className="mx-auto w-full max-w-md relative z-20">
        <div className={cn(
          STYLES.FLEX_CENTER_JUSTIFIED,
          "w-full space-x-10 md:justify-between md:space-x-0"
        )}>
          {skills.row2.map((skill, index) => (
            <SkillIconContainer 
              key={`skill-row2-${index}`} 
              delay={0.5 + (index * 0.1)} 
              text={skill} 
            />
          ))}
        </div>
      </div>

      {/* Troisième rangée */}
      <div className="mx-auto w-full max-w-3xl relative z-20">
        <div className={cn(
          STYLES.FLEX_CENTER_JUSTIFIED,
          "w-full space-x-10 md:justify-between md:space-x-0"
        )}>
          {skills.row3.map((skill, index) => (
            <SkillIconContainer 
              key={`skill-row3-${index}`} 
              delay={0.6 + (index * 0.1)} 
              text={skill} 
            />
          ))}
        </div>
      </div>
    </>
  );
} 