"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { getFeaturedProjects, Project } from "@/Data/projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Utiliser les projets mis en avant depuis le fichier de données centralisé
  const projects = getFeaturedProjects();

  return (
    <section id="projets" className="w-full py-12 md:py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <Badge variant="outline" className="border-primary/20 mb-2">Portfolio</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projets Récents</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Découvrez une sélection de mes projets les plus récents et innovants
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="mt-8">
          {/* Responsive Swiper pour tous les écrans */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
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
            className="pb-16"
            a11y={{
              prevSlideMessage: 'Projet précédent',
              nextSlideMessage: 'Projet suivant',
              firstSlideMessage: 'Premier projet',
              lastSlideMessage: 'Dernier projet',
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard 
                  project={project} 
                  priority={index < 2} // Priorité pour les 2 premières images
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next !text-primary after:!text-lg"></div>
            <div className="swiper-button-prev !text-primary after:!text-lg"></div>
          </Swiper>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="group">
              <Link href="/projets">
                Voir tous les projets
                <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  priority = false 
}: { 
  project: Project, 
  priority?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-xl h-full"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={340}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-secondary/20 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-bold leading-tight tracking-tight mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Button asChild size="sm" variant="outline" className="gap-1">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Voir le code source de ${project.title} sur GitHub`}
            >
              <FaGithub className="h-4 w-4" />
              <span className="hidden sm:inline-block">GitHub</span>
            </Link>
          </Button>
          <Button asChild size="sm" className="gap-1">
            <Link 
              href={project.demoUrl}
              aria-label={`Voir la démo du projet ${project.title}`}
            >
              <FaExternalLinkAlt className="h-3 w-3" />
              <span className="hidden sm:inline-block">Voir le projet</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 