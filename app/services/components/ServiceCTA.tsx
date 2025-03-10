import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceCTA() {
  return (
    <div className="rounded-lg border bg-muted/50 p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3 md:mb-4">Prêt à concrétiser votre projet?</h2>
      <p className="max-w-[700px] mx-auto text-muted-foreground text-sm md:text-lg mb-4 md:mb-6">
        Contactez-moi dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
      </p>
      
      {/* Ajout d'éléments de confiance */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="flex items-center">
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
            className="h-4 w-4 md:h-5 md:w-5 text-primary mr-1 md:mr-2"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-sm md:text-base">Devis gratuit</span>
        </div>
        <div className="flex items-center">
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
            className="h-4 w-4 md:h-5 md:w-5 text-primary mr-1 md:mr-2"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-sm md:text-base">Réponse sous 24h</span>
        </div>
        <div className="flex items-center">
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
            className="h-4 w-4 md:h-5 md:w-5 text-primary mr-1 md:mr-2"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-sm md:text-base">Sans engagement</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/contact">Demander un devis gratuit</Link>
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
          <Link href="mailto:contact@th1b4ut.com">contact@th1b4ut.com</Link>
        </Button>
      </div>
    </div>
  );
} 