"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from 'next/image';

// Import testimonials data
import { testimonials, Testimonial } from "../../Data/Testimonials";

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 bg-background/50 relative overflow-hidden cyber-grid">
      {/* Background design elements futuristes */}
      <div className="absolute inset-0 bg-grid-small-white/[0.03] -z-10 matrix-rain" />
      
      {/* Animated circle backgrounds */}
      <motion.div 
        className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-40 -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl opacity-40 -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
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
          
          <motion.div 
            className="flex items-center gap-1 mt-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FaStar className="text-yellow-400 h-4 w-4 md:h-5 md:w-5 shadow-glow" />
              </motion.div>
            ))}
            <span className="text-xs md:text-sm text-muted-foreground ml-2 matrix-text">5.0 / 5 en moyenne</span>
          </motion.div>
        </motion.div>

        <div ref={ref} className="mt-6 md:mt-8 w-full mx-auto overflow-hidden">
          {/* Horizontal Marquee for testimonials - fully responsive */}
          <Marquee
            speed={30}
            pauseOnHover={true}
            gradient={true}
            gradientColor={"#000000"}
            gradientWidth={60}
            className="overflow-hidden"
          >
            <div className="flex gap-4 py-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="mx-2 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        
        <motion.div 
          className="text-center mt-10 md:mt-12 relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-x-0 h-px -top-5 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <motion.p 
            className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto underground-text"
            whileHover={{ scale: 1.03 }}
          >
            Découvrez comment mes <span className="text-gradient">solutions personnalisées</span> ont aidé des entreprises à atteindre leurs objectifs et à développer leur activité.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      className="h-full rounded-xl border cyber-border glass-card p-4 md:p-5 shadow-cyber-card hover:shadow-neon-strong transition-all duration-300 digital-noise"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-2 flex justify-between items-start">
        <motion.div 
          className="h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-primary/10 text-primary shadow-glow"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <FaQuoteLeft className="h-3 w-3 md:h-4 md:w-4" />
        </motion.div>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaStar key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 shadow-glow" />
            </motion.div>
          ))}
        </div>
      </div>
      
      <p className="flex-grow text-muted-foreground mb-3 italic text-xs sm:text-sm md:text-base relative line-clamp-4 terminal-text">
        <span className="text-xl font-serif text-primary opacity-20 absolute -left-1 -top-3">&quot;</span>
        <span>&quot;{testimonial.text}&quot;</span>
        <span className="text-xl font-serif text-primary opacity-20 absolute -right-1 bottom-0">&quot;</span>
      </p>
      
      <div className="flex items-center pt-2 border-t border-muted/30">
        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-muted mr-3 overflow-hidden shadow-cyber relative group">
          <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-rotate-slow"></div>
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full object-cover vhs-effect"
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
    </motion.div>
  );
} 