import { Project } from "@/Data/projects";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLargeScreen = useMediaQuery("(min-width: 1536px)");
  
  if (projects.length === 0) return null;

  return (
    <motion.div 
      className="border-t border-primary/20 pt-8 sm:pt-12 mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col items-center space-y-2 sm:space-y-4 text-center mb-6 sm:mb-8">
        <div className="inline-block industrial-border px-4 py-1 mb-2">
          <span className="underground-text text-sm">SÉLECTION</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter underground-gradient-text">
          Projets à la une
        </h2>
        
        <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground font-mono">
          Découvrez mes projets les plus récents et les plus innovants
        </p>
      </div>

      <div className={`grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${isLargeScreen ? 'max-w-6xl mx-auto' : ''}`}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="h-full"
          >
            <div className="underground-card h-full flex flex-col rounded-sm overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground font-mono">Image du Projet</span>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <div className="industrial-border px-2 py-1">
                    <span className="text-xs sm:text-sm text-secondary font-mono">Featured</span>
                  </div>
                </div>
              </div>
              
              <div className={`${isMobile ? 'p-4' : 'p-6'} flex-grow flex flex-col`}>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2 underground-text`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm sm:text-base text-muted-foreground mb-4 flex-grow ${isMobile ? 'line-clamp-2' : 'line-clamp-3'} font-mono`}>
                  {project.description}
                </p>
                
                <Link 
                  href={`/projets/${project.id}`} 
                  className="underground-button w-full py-2 rounded-sm flex items-center justify-center mt-auto"
                >
                  <span className="uppercase tracking-wider text-sm">Voir le projet</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View All Projects Button */}
      <div className="flex justify-center mt-8">
        <Link 
          href="#" 
          className="industrial-border px-6 py-3 rounded-sm flex items-center justify-center group"
        >
          <span className="terminal-underground text-sm">
            Voir tous les projets
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
} 