import Link from "next/link";

export function ServiceCTA() {
  return (
    <div className="underground-card p-8 text-center">
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">CONTACT</span>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3 md:mb-4 underground-gradient-text">
        Prêt à concrétiser votre projet?
      </h2>
      
      <p className="max-w-[700px] mx-auto text-muted-foreground text-sm md:text-lg mb-4 md:mb-6">
        Contactez-moi dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
      </p>
      
      <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-6" style={{ "--level": "75%" } as React.CSSProperties}></div>
      
      {/* Éléments de confiance avec style underground */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="flex items-center">
          <span className="text-primary mr-2">›</span>
          <span className="text-sm font-mono">Devis gratuit</span>
        </div>
        <div className="flex items-center">
          <span className="text-primary mr-2">›</span>
          <span className="text-sm font-mono">Réponse sous 24h</span>
        </div>
        <div className="flex items-center">
          <span className="text-primary mr-2">›</span>
          <span className="text-sm font-mono">Sans engagement</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <Link href="/contact" className="underground-button px-6 py-3 rounded-sm flex items-center justify-center">
          <span className="uppercase tracking-wider text-sm">Demander un devis gratuit</span>
        </Link>
        
        <Link href="mailto:contact@th1b4ut.com" className="industrial-border px-6 py-3 rounded-sm flex items-center justify-center">
          <span className="terminal-underground text-sm">contact@th1b4ut.com</span>
        </Link>
      </div>
    </div>
  );
} 