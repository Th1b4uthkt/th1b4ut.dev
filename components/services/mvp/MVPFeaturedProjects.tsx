'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MVPProject } from '@/Data/mvp-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MVPFeaturedProjectsProps {
  projects: MVPProject[];
}

export default function MVPFeaturedProjects({ projects }: MVPFeaturedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container-centered">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Des MVPs qui scalent – Pas du bricolage
        </motion.h2>

        <div className="relative">
          {/* Carousel container */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2025 glass-card">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`absolute inset-0 flex flex-col md:flex-row transition-all duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-48 md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mb-4">
                    <p className="text-sm md:text-base font-medium">{project.stats}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground">
                      {project.category === 'web' ? 'Web App' : 'Mobile App'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 