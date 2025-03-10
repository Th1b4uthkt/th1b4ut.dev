import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 flex flex-col h-full">
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
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
      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
      <p className="text-muted-foreground mb-6 flex-grow">
        {service.description}
      </p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
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
              className="h-5 w-5 text-primary mr-2 mt-0.5"
            >
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Nouveaux éléments: Cas d'utilisation */}
      {service.useCases && (
        <div className="mb-6">
          <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
            Cas d&apos;utilisation
          </h3>
          <ul className="space-y-1">
            {service.useCases.map((useCase, index) => (
              <li key={index} className="text-sm">
                • {useCase}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Badge className="w-fit mb-4">{service.price}</Badge>
      <Button asChild className="w-full">
        <Link href={service.ctaLink}>En savoir plus</Link>
      </Button>
    </div>
  );
} 