"use client";

import { motion } from "framer-motion";

interface FAQProps {
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQ({ faq }: FAQProps) {
  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-vinyl-texture opacity-5" />
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
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur notre service de marque blanche.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.question}
              </h3>
              <p className="text-muted-foreground">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="#contact"
            className="underground-button px-8 py-4 rounded-lg inline-block"
          >
            Parlons de votre projet →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 