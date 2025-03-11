import { ServiceCard } from "./ServiceCard";
import { services } from "@/Data/services";

export function ServicesList() {
  return (
    <div id="services" className="mb-12 md:mb-16">
      <div className="flex flex-col items-center space-y-4 text-center mb-6 md:mb-8">
        <div className="inline-block industrial-border px-4 py-1 mb-2">
          <span className="underground-text text-sm">CATALOGUE</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter underground-gradient-text">
          Nos services
        </h2>
        
        <p className="max-w-[700px] text-muted-foreground text-base md:text-lg">
          Des solutions adaptées à vos besoins spécifiques
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
} 