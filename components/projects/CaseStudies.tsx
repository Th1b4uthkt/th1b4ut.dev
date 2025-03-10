import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Sample case studies data - you could move this to a separate file
const caseStudies = [
  {
    id: 1,
    title: "Système RAG pour cabinet d'avocats",
    description: "Comment j'ai conçu un système de recherche augmentée par génération qui a transformé la recherche juridique et réduit de 70% le temps de préparation des dossiers.",
    link: "/etudes-de-cas/1"
  },
  {
    id: 2,
    title: "Solutions Marque Blanche pour une chaîne de fitness",
    description: "Déploiement d'une application Coaching-FIT en marque blanche pour 15 salles de sport, augmentant l'engagement client de 230% et la rétention de 45%.",
    link: "/etudes-de-cas/2"
  }
];

export function CaseStudies() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLargeScreen = useMediaQuery("(min-width: 1536px)");
  
  return (
    <motion.div 
      className="border-t border-primary/20 pt-8 sm:pt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-col items-center space-y-2 sm:space-y-4 text-center mb-6 sm:mb-8">
        <div className="inline-block industrial-border px-4 py-1 mb-2">
          <span className="underground-text text-sm">ÉTUDES DE CAS</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter underground-gradient-text">
          Analyses détaillées
        </h2>
        
        <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground font-mono">
          Découvrez comment j&apos;ai relevé des défis techniques complexes pour mes clients
        </p>
      </div>

      <div className={`grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 ${isLargeScreen ? 'max-w-4xl' : 'lg:max-w-6xl'} mx-auto`}>
        {caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <div className="underground-card h-full flex flex-col vhs-effect rounded-sm">
              <div className={`${isMobile ? 'p-4' : 'p-6'} flex-grow`}>
                <div className="industrial-border px-3 py-1 w-fit mb-3 sm:mb-4">
                  <span className="underground-text text-xs sm:text-sm">Étude de cas</span>
                </div>
                
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2 underground-text`}>
                  {study.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground font-mono">
                  {study.description}
                </p>
              </div>
              
              <div className={`${isMobile ? 'p-4 pt-0' : 'p-6 pt-0'} border-t border-primary/10`}>
                <Link 
                  href={study.link}
                  className="underground-button w-full py-2 rounded-sm flex items-center justify-center"
                >
                  <span className="uppercase tracking-wider text-sm">Lire l étude de cas</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 