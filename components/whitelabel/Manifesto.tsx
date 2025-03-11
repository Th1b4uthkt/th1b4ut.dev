"use client";

import { motion } from "framer-motion";

interface ManifestoProps {
  manifesto: {
    title: string;
    content: string[];
  };
}

export function Manifesto({ manifesto }: ManifestoProps) {
  return (
    <section id="manifesto" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-binary-rain opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            {manifesto.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {manifesto.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-card border border-primary/20 rounded-lg p-6 h-full hover:border-primary/40 transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 bg-card border border-primary/20 rounded-xl"
          >
            <p className="text-lg text-muted-foreground">
              Notre vision ? Démocratiser le développement mobile sans compromis sur la qualité.
              <br />
              <span className="text-primary font-semibold">
                Code propre, performance native, liberté totale.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 