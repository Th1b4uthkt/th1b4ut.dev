import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="underground-card rounded-sm p-6 flex flex-col h-full vhs-effect">
      <div className="industrial-border p-3 w-12 h-12 flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d={service.iconPath} />
        </svg>
      </div>
      
      <h2 className="underground-text text-2xl mb-2">{service.title}</h2>
      
      <p className="text-muted-foreground mb-6 flex-grow">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-0.5">›</span>
            <span className="text-sm font-mono">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Nouveaux éléments: Cas d'utilisation */}
      {service.useCases && (
        <div className="mb-6">
          <h3 className="terminal-underground text-sm mb-2">
            CAS D&apos;UTILISATION
          </h3>
          <ul className="space-y-1">
            {service.useCases.map((useCase, index) => (
              <li key={index} className="text-sm font-mono flex items-start">
                <span className="text-secondary mr-2">•</span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="industrial-border px-3 py-1 w-fit mb-4">
        <span className="underground-text text-xs">{service.price}</span>
      </div>
      
      <Link href={service.ctaLink} className="underground-button w-full py-2 rounded-sm flex items-center justify-center">
        <span className="uppercase tracking-wider text-sm">En savoir plus</span>
      </Link>
    </div>
  );
} 