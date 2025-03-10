import Link from "next/link";
import Image from "next/image";
import { Project } from "@/Data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
      <Card className="h-full overflow-hidden group flex flex-col">
        <div className="aspect-video overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
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
              <span>Image du Projet {project.id}</span>
            )}
          </div>
        </div>
        
        <CardHeader className={`${isMobile ? 'p-4 pb-2' : 'p-6 pb-2'}`}>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold line-clamp-1`}>{project.title}</h3>
            <Badge variant="outline" className="ml-auto shrink-0">{project.tech}</Badge>
          </div>
        </CardHeader>
        
        <CardContent className={`${isMobile ? 'p-4 pt-2 pb-3' : 'p-6 pt-2 pb-4'} flex-grow`}>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {project.tags.slice(0, isMobile ? 3 : 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > (isMobile ? 3 : 4) && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - (isMobile ? 3 : 4)}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className={`${isMobile ? 'p-4 pt-0' : 'p-6 pt-0'} flex justify-between items-center mt-auto`}>
          <Button variant="outline" size={isMobile ? "sm" : "default"} asChild>
            <Link href={`/projets/${project.id}`}>Voir détails</Link>
          </Button>
          <div className="flex space-x-2">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Link>
            <Link 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 