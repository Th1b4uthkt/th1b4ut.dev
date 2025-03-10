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
          <Badge 
            variant={selectedTech === tech ? "default" : "outline"} 
            className="py-1.5 px-3 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
          >
            {tech}
          </Badge>
        </motion.div>
      ))}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Badge 
            variant="secondary"
            className="py-1.5 px-3 cursor-pointer text-xs sm:text-sm"
            onClick={() => setSelectedTech(null)}
          >
            Effacer le filtre ×
          </Badge>
        </motion.div>
      )}
    </motion.div>
  );
  
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Filtrer par technologie</h2>
      
      {isMobile ? (
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-2 p-1">
            {uniqueTechnologies.map((tech) => (
              <Badge 
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"} 
                className="py-1.5 px-3 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              >
                {tech}
              </Badge>
            ))}
            {selectedTech && (
              <Badge 
                variant="secondary"
                className="py-1.5 px-3 cursor-pointer text-xs"
                onClick={() => setSelectedTech(null)}
              >
                Effacer ×
              </Badge>
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