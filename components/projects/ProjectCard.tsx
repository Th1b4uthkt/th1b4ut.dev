import Link from "next/link";
import Image from "next/image";
import { Project } from "@/Data/projects";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="underground-card h-full overflow-hidden group flex flex-col rounded-sm vhs-effect">
        <div className="aspect-video overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
          <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105 duration-500"
                loading="lazy"
              />
            ) : (
              <span className="font-mono">Image du Projet {project.id}</span>
            )}
          </div>
        </div>
        
        <div className={`${isMobile ? 'p-4 pb-2' : 'p-6 pb-2'}`}>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold line-clamp-1 underground-text`}>
              {project.title}
            </h3>
            <div className="industrial-border px-2 py-1 ml-auto shrink-0">
              <span className="text-xs text-secondary font-mono">{project.tech}</span>
            </div>
          </div>
        </div>
        
        <div className={`${isMobile ? 'p-4 pt-2 pb-3' : 'p-6 pt-2 pb-4'} flex-grow`}>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-3 font-mono">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {project.tags.slice(0, isMobile ? 3 : 4).map((tag) => (
              <div key={tag} className="industrial-border px-2 py-0.5">
                <span className="text-xs text-muted-foreground font-mono">{tag}</span>
              </div>
            ))}
            {project.tags.length > (isMobile ? 3 : 4) && (
              <div className="industrial-border px-2 py-0.5">
                <span className="text-xs text-muted-foreground font-mono">
                  +{project.tags.length - (isMobile ? 3 : 4)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className={`${isMobile ? 'p-4 pt-0' : 'p-6 pt-0'} flex justify-between items-center mt-auto border-t border-primary/10`}>
          <Link 
            href={`/projets/${project.id}`}
            className="underground-button px-4 py-2 rounded-sm"
          >
            <span className="uppercase tracking-wider text-xs sm:text-sm">Voir détails</span>
          </Link>
          <div className="flex space-x-2">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Link>
            <Link 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 