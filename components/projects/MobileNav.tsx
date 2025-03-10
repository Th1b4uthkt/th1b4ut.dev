"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ProjectCategory } from "@/Data/projects";
import { Badge } from "@/components/ui/badge";

interface MobileNavProps {
  categories: ProjectCategory[];
  selectedCategory: ProjectCategory | "all";
  setSelectedCategory: (category: ProjectCategory | "all") => void;
  technologies: string[];
  selectedTech: string | null;
  setSelectedTech: (tech: string | null) => void;
}

export function MobileNav({
  categories,
  selectedCategory,
  setSelectedCategory,
  technologies,
  selectedTech,
  setSelectedTech,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (category: ProjectCategory | "all") => {
    setSelectedCategory(category);
    setOpen(false);
  };

  const handleTechChange = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-4 right-4 z-50 industrial-border bg-black/80 shadow-industrial"
        >
          <Menu className="h-5 w-5 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] rounded-t-xl vinyl-texture studio-grid bg-black/90 border-t border-primary/30">
        <div className="py-6 space-y-6">
          <div>
            <div className="inline-block industrial-border px-4 py-1 mb-3">
              <span className="underground-text text-sm">CATÉGORIES</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div 
                className={`industrial-border py-1.5 px-3 cursor-pointer ${selectedCategory === "all" ? "bg-primary/20" : "bg-transparent"}`}
                onClick={() => handleCategoryChange("all")}
              >
                <span className={`text-sm font-mono ${selectedCategory === "all" ? "text-primary" : "text-muted-foreground"}`}>
                  Tous
                </span>
              </div>
              
              {categories.map((category) => (
                <div 
                  key={category}
                  className={`industrial-border py-1.5 px-3 cursor-pointer ${selectedCategory === category ? "bg-primary/20" : "bg-transparent"}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  <span className={`text-sm font-mono ${selectedCategory === category ? "text-primary" : "text-muted-foreground"}`}>
                    {category === "web" ? "Web" : 
                     category === "mobile" ? "Mobile" : "Java"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="inline-block industrial-border px-4 py-1 mb-3">
              <span className="underground-text text-sm">TECHNOLOGIES</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <div 
                  key={tech}
                  className={`industrial-border py-1.5 px-3 cursor-pointer ${selectedTech === tech ? "bg-primary/20" : "bg-transparent"}`}
                  onClick={() => handleTechChange(tech)}
                >
                  <span className={`text-xs font-mono ${selectedTech === tech ? "text-primary" : "text-muted-foreground"}`}>
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {selectedTech && (
            <button 
              onClick={() => setSelectedTech(null)}
              className="underground-button px-4 py-2 rounded-sm mt-4"
            >
              <span className="uppercase tracking-wider text-xs">Effacer les filtres</span>
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
} 