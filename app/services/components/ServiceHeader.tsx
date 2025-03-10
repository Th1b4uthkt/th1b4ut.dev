import { Button } from "@/components/ui/button";
import { SkillsRadarDemo } from "@/components/ui/skills-radar-display";

export function ServiceHeader() {
  return (
    <div className="flex flex-col items-center space-y-8 text-center mb-12 md:mb-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Transformez votre vision en réalité digitale
      </h1>
      <p className="max-w-[700px] text-muted-foreground text-base md:text-xl">
        Des solutions sur mesure pour tous vos besoins de développement web et d&apos;intégration IA, 
        avec un focus sur les résultats concrets pour votre business
      </p>
      
      <div className="w-full max-w-5xl my-12">
        <div className="glass-card rounded-2xl overflow-hidden">
          <SkillsRadarDemo />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" className="hover-lift">
          Découvrir nos services
        </Button>
        <Button size="lg" variant="outline" className="hover-lift">
          Nous contacter
        </Button>
      </div>
    </div>
  );
} 