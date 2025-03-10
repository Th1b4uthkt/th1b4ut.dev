"use client";

import { useState, useEffect } from "react";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { CaseStudies } from "@/components/projects/CaseStudies";
import { MobileNav } from "@/components/projects/MobileNav";
import { 
  projects, 
  techStacks, 
  ProjectCategory, 
  getFeaturedProjects 
} from "@/Data/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Badge } from "@/components/ui/badge";
import { BackToTop } from "@/components/ui/back-to-top";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [uniqueTechnologies, setUniqueTechnologies] = useState<string[]>([]);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(min-width: 1536px)");
  
  // Get all unique technologies for the current category
  useEffect(() => {
    let techs: string[] = [];
    
    if (selectedCategory === "all") {
      techs = Object.values(techStacks).flat();
    } else {
      techs = techStacks[selectedCategory as ProjectCategory] || [];
    }
    
    setUniqueTechnologies([...new Set(techs)]);
    
    // Reset selected tech if it's not in the current category
    if (selectedTech && !techs.includes(selectedTech)) {
      setSelectedTech(null);
    }
  }, [selectedCategory, selectedTech]);
  
  // Filter projects based on selected category and technology
  const filteredProjects = projects.filter(project => {
    if (selectedCategory !== "all" && project.category !== selectedCategory) {
      return false;
    }
    
    if (selectedTech && !project.tags.includes(selectedTech)) {
      return false;
    }
    
    return true;
  });
  
  const featuredProjects = getFeaturedProjects();
  const categories: ProjectCategory[] = ["web", "mobile", "java"];

  return (
    <div className="relative min-h-screen overflow-x-hidden vinyl-texture studio-grid">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-[-1]"></div>
      
      {/* Séparateurs horizontaux style underground */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className={`relative z-10 mx-auto ${isLargeScreen ? 'max-w-7xl' : 'container'} px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24`}>
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block industrial-border px-6 py-2 mb-4">
            <span className="underground-text text-lg">PROJETS UNDERGROUND</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter underground-gradient-text">
            Mes Réalisations
          </h1>
          
          <p className="max-w-[700px] text-sm sm:text-base md:text-xl text-muted-foreground">
            Découvrez mes projets dans le développement web, mobile et Java
          </p>
          
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-4" style={{ "--level": "65%" } as React.CSSProperties}></div>
        </motion.div>

        {/* Desktop/Tablet Tabs */}
        <div className={isMobile ? "hidden" : "block"}>
          <Tabs defaultValue="all" className="mb-8 sm:mb-12">
            <div className="flex justify-center">
              <TabsList className={`grid ${isTablet ? 'grid-cols-2 gap-2 w-full' : 'grid-cols-4 w-[600px]'} mb-6 sm:mb-8 industrial-border bg-transparent`}>
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedCategory("all")}
                  className="underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  Tous
                </TabsTrigger>
                <TabsTrigger 
                  value="web" 
                  onClick={() => setSelectedCategory("web")}
                  className="underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  Web
                </TabsTrigger>
                <TabsTrigger 
                  value="mobile" 
                  onClick={() => setSelectedCategory("mobile")}
                  className="underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger 
                  value="java" 
                  onClick={() => setSelectedCategory("java")}
                  className="underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  Java
                </TabsTrigger>
              </TabsList>
            </div>
            
            <ProjectFilters 
              selectedCategory={selectedCategory} 
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
              techStacks={techStacks}
            />
            
            <TabsContent value="all" className="mt-0">
              <div className="relative">
                <div className="absolute inset-0 waveform-bg z-[-1]"></div>
                <ProjectGrid projects={filteredProjects} />
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-0">
              <div className="relative">
                <div className="absolute inset-0 waveform-bg z-[-1]"></div>
                <ProjectGrid projects={filteredProjects} />
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-0">
              <div className="relative">
                <div className="absolute inset-0 waveform-bg z-[-1]"></div>
                <ProjectGrid projects={filteredProjects} />
              </div>
            </TabsContent>
            <TabsContent value="java" className="mt-0">
              <div className="relative">
                <div className="absolute inset-0 waveform-bg z-[-1]"></div>
                <ProjectGrid projects={filteredProjects} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Mobile View */}
        <div className={isMobile ? "block" : "hidden"}>
          <div className="mb-6 industrial-border p-4">
            <h2 className="underground-text text-lg mb-3">Catégorie: {selectedCategory === "all" ? "Tous" : selectedCategory}</h2>
            {selectedTech && (
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2 font-mono">Filtre:</span>
                <div className="industrial-border px-2 py-1">
                  <span className="text-xs text-secondary font-mono">{selectedTech}</span>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-0 waveform-bg z-[-1]"></div>
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>

        <div className="relative vhs-effect">
          <FeaturedProjects projects={featuredProjects.slice(0, isMobile ? 2 : 3)} />
        </div>
        
        <div className="relative digital-noise">
          <CaseStudies />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNav 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          technologies={uniqueTechnologies}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      )}
      
      <BackToTop />
    </div>
  );
} 