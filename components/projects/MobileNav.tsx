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
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Catégories</h3>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedCategory === "all" ? "default" : "outline"}
                className="py-1.5 px-3 cursor-pointer"
                onClick={() => handleCategoryChange("all")}
              >
                Tous
              </Badge>
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="py-1.5 px-3 cursor-pointer"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === "web" ? "Web" : 
                   category === "mobile" ? "Mobile" : "Java"}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge 
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  className="py-1.5 px-3 cursor-pointer"
                  onClick={() => handleTechChange(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {selectedTech && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedTech(null)}
              className="mt-4"
            >
              Effacer les filtres
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
} 