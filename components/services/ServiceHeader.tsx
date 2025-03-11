// import { Button } from "@/components/ui/button";
import { SkillsRadarDemo } from "@/components/ui/skills-radar-display";

export function ServiceHeader() {
  return (
    <div className="flex flex-col items-center space-y-8 text-center mb-12 md:mb-16">
      <div className="inline-block industrial-border px-6 py-2 mb-4">
        <span className="underground-text text-lg">SERVICES</span>
      </div>
      
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl underground-gradient-text">
        Ghost Production Digitale
      </h1>
      
      <p className="max-w-[700px] text-muted-foreground text-base md:text-xl">
        Des solutions sur mesure pour tous vos besoins de développement web et d&apos;intégration IA, 
        avec un focus sur les résultats concrets pour votre business
      </p>
      
      <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-4" style={{ "--level": "80%" } as React.CSSProperties}></div>
      
      <div className="w-full max-w-5xl my-12">
        <div className="underground-card rounded-sm overflow-hidden p-4">
          <SkillsRadarDemo />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="underground-button px-6 py-3 rounded-sm">
          Découvrir nos services
        </button>
        <div className="industrial-border px-6 py-3 rounded-sm">
          <span className="text-muted-foreground">Nous contacter</span>
        </div>
      </div>
    </div>
  );
} 