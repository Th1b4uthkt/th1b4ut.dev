import { Badge } from "@/components/ui/badge";
import { ProjectCategory } from "@/Data/projects";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ProjectFiltersProps {
  selectedCategory: ProjectCategory | "all";
  selectedTech: string | null;
  setSelectedTech: (tech: string | null) => void;
  techStacks: Record<ProjectCategory, string[]>;
}

export function ProjectFilters({ 
  selectedCategory, 
  selectedTech, 
  setSelectedTech,
  techStacks
}: ProjectFiltersProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLargeScreen = useMediaQuery("(min-width: 1536px)");
  
  // Determine which technologies to show based on selected category
  const technologies = selectedCategory === "all" 
    ? Object.values(techStacks).flat()
    : techStacks[selectedCategory as ProjectCategory] || [];
  
  // Remove duplicates
  const uniqueTechnologies = [...new Set(technologies)];
  
  const filterContent = (
    <motion.div 
      className="flex flex-wrap gap-2 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
    >
      {uniqueTechnologies.map((tech) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className={`industrial-border py-1.5 px-3 cursor-pointer ${selectedTech === tech ? "bg-primary/20" : "bg-transparent"}`}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
          >
            <span className={`text-xs sm:text-sm font-mono ${selectedTech === tech ? "text-primary" : "text-muted-foreground"}`}>
              {tech}
            </span>
          </div>
        </motion.div>
      ))}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div 
            className="underground-button py-1.5 px-3 cursor-pointer"
            onClick={() => setSelectedTech(null)}
          >
            <span className="uppercase tracking-wider text-xs sm:text-sm">Effacer le filtre ×</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
  
  return (
    <div className="mb-6 sm:mb-8">
      <div className="inline-block industrial-border px-4 py-1 mb-3 sm:mb-4 mx-auto">
        <span className="underground-text text-sm">FILTRER PAR TECHNOLOGIE</span>
      </div>
      
      {isMobile ? (
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-2 p-1">
            {uniqueTechnologies.map((tech) => (
              <div 
                key={tech}
                className={`industrial-border py-1.5 px-3 cursor-pointer ${selectedTech === tech ? "bg-primary/20" : "bg-transparent"}`}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              >
                <span className={`text-xs font-mono ${selectedTech === tech ? "text-primary" : "text-muted-foreground"}`}>
                  {tech}
                </span>
              </div>
            ))}
            {selectedTech && (
              <div 
                className="underground-button py-1.5 px-3 cursor-pointer"
                onClick={() => setSelectedTech(null)}
              >
                <span className="uppercase tracking-wider text-xs">Effacer ×</span>
              </div>
            )}
          </div>
        </ScrollArea>
      ) : (
        <div className={`${isLargeScreen ? 'max-w-4xl mx-auto' : ''}`}>
          {filterContent}
        </div>
      )}
    </div>
  );
} 