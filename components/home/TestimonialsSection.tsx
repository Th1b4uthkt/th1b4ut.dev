"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import testimonials data
import { testimonials, Testimonial } from "../../Data/Testimonials";

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Utiliser useState pour contrôler le rendu des éléments lourds
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Retarder le chargement du Marquee pour améliorer les performances
  useEffect(() => {
    // Permettre au premier rendu de se terminer
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 bg-background/50 relative overflow-hidden">
      {/* Réduire le nombre d'effets de fond */}
      <div className="absolute inset-0 bg-grid-small-white/[0.02] -z-10" />
      
      {/* Supprimer ou simplifier les cercles animés */}
      <div className="absolute -top-40 right-0 w-72 h-72 rounded-full bg-primary/5 blur-2xl opacity-30 -z-10" />
      
      {/* Grid lines with scanline effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent scanline" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent scanline" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 text-center max-w-3xl mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center rounded-full bg-muted p-1 cyber-border"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent_25%,rgba(var(--primary-rgb),0.1)_50%,transparent_75%)] shadow-neon">Ce que disent mes clients</span>
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient glitch-effect">Témoignages</h2>
            <p className="text-muted-foreground md:text-lg terminal-text">
              Des clients satisfaits qui partagent leur expérience
            </p>
          </div>
          
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 h-4 w-4 md:h-5 md:w-5 shadow-glow" />
            ))}
            <span className="text-xs md:text-sm text-muted-foreground ml-2 matrix-text">5.0 / 5 en moyenne</span>
          </div>
        </motion.div>

        <div ref={ref} className="mt-6 md:mt-8 w-full mx-auto overflow-hidden">
          {/* Ne charger le Marquee que lorsque le composant est prêt */}
          {isLoaded && (
            <Marquee
              speed={30} // Augmenter légèrement la vitesse
              gradientWidth={100} // Augmenter la largeur du gradient
              className="overflow-hidden"
            >
              <div className="flex gap-4 py-2">
                {testimonials.slice(0, 5).map((testimonial) => ( // Limiter le nombre de témoignages affichés
                  <div key={testimonial.id} className="mx-2 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </Marquee>
          )}
        </div>
        
        <motion.div 
          className="text-center mt-10 md:mt-12 relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-x-0 h-px -top-5 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto underground-text">
            Découvrez comment mes <span className="text-gradient">solutions personnalisées</span> ont aidé des entreprises à atteindre leurs objectifs et à développer leur activité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Optimisé pour réduire les animations excessives
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full rounded-xl border cyber-border glass-card p-4 md:p-5 shadow-cyber-card hover:shadow-neon transition-all duration-300">
      {testimonial.image && (
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          loading="lazy"
          className="rounded-full"
        />
      )}
      <div className="mb-2 flex justify-between items-start">
        <div className="h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-primary/10 text-primary shadow-glow">
          <FaQuoteLeft className="h-3 w-3 md:h-4 md:w-4" />
        </div>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 shadow-glow" />
          ))}
        </div>
      </div>
      
      <p className="flex-grow text-muted-foreground mb-3 italic text-xs sm:text-sm md:text-base relative line-clamp-4 terminal-text">
        <span className="text-xl font-serif text-primary opacity-20 absolute -left-1 -top-3">&quot;</span>
        <span>&quot;{testimonial.text}&quot;</span>
        <span className="text-xl font-serif text-primary opacity-20 absolute -right-1 bottom-0">&quot;</span>
      </p>
      
      <div className="flex items-center pt-2 border-t border-muted/30">
        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-muted mr-3 overflow-hidden shadow-cyber relative">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary font-medium matrix-text">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-xs sm:text-sm md:text-base underground-gradient-text">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-muted-foreground">
            {testimonial.role}, <span className="text-gradient">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
} 