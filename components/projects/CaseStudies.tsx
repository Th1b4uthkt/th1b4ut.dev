import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Sample case studies data - you could move this to a separate file
const caseStudies = [
  {
    id: 1,
    title: "Refonte d'une plateforme SaaS avec intégration IA",
    description: "Comment j'ai transformé une application legacy en une plateforme moderne et performante avec des fonctionnalités d'IA avancées.",
    link: "/etudes-de-cas/1"
  },
  {
    id: 2,
    title: "Optimisation SEO d'un site e-commerce",
    description: "Les stratégies techniques mises en place pour améliorer le référencement naturel et les performances d'une boutique en ligne.",
    link: "/etudes-de-cas/2"
  }
];

export function CaseStudies() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isLargeScreen = useMediaQuery("(min-width: 1536px)");
  
  return (
    <motion.div 
      className="border-t pt-8 sm:pt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-col items-center space-y-2 sm:space-y-4 text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Études de cas détaillées</h2>
        <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
          Découvrez comment j ai relevé des défis techniques complexes pour mes clients
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
            <Card className="h-full flex flex-col">
              <CardContent className={`${isMobile ? 'p-4' : 'p-6'} flex-grow`}>
                <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">Étude de cas</Badge>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2`}>{study.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{study.description}</p>
              </CardContent>
              <CardFooter className={`${isMobile ? 'p-4 pt-0' : 'p-6 pt-0'}`}>
                <Button 
                  variant="outline" 
                  className="w-full group" 
                  asChild
                  size={isMobile ? "sm" : "default"}
                >
                  <Link href={study.link}>
                    Lire l étude de cas
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 