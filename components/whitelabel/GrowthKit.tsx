"use client";

import { motion } from "framer-motion";

interface GrowthKitProps {
  growthKit: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      url: string;
    }>;
  };
}

export function GrowthKit({ growthKit }: GrowthKitProps) {
  return (
    <section id="growth-kit" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {growthKit.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Accélérez votre croissance avec nos ressources gratuites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {growthKit.items.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:scale-105"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 text-primary group-hover:text-secondary transition-colors">
                  Télécharger →
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Viral CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-card border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">
              Jeu Concours
            </h3>
            <p className="text-muted-foreground mb-4">
              Postez votre MVP sur LinkedIn avec #Th1b4uutWhiteLabel → Gagnez 1 an de maintenance gratuite.
            </p>
            <a
              href="https://linkedin.com/share"
              target="_blank"
              rel="noopener noreferrer"
              className="underground-button px-6 py-3 rounded-lg inline-block"
            >
              Participer au concours →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 