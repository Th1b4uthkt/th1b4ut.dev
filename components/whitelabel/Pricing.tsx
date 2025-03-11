"use client";

import { WhitelabelPricing } from "@/app/data/whitelabel";
import { motion } from "framer-motion";

interface PricingProps {
  pricing: WhitelabelPricing[];
}

export function Pricing({ pricing }: PricingProps) {
  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-waveform opacity-5" />
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
            Tarification Simple et Transparente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez l&apos;offre qui correspond à vos besoins. Prix fixes, sans surprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card border rounded-xl p-6 ${
                plan.isPopular
                  ? "border-primary shadow-glow scale-105"
                  : "border-primary/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Recommandé
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold text-primary">
                  {plan.price}
                </div>
              </div>
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg text-center inline-block ${
                    plan.isPopular
                      ? "underground-button"
                      : "border border-primary/20 hover:bg-primary/10 transition-colors"
                  }`}
                >
                  Choisir {plan.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garantie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-card border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-2">
              Garantie Satisfait ou Remboursé
            </h3>
            <p className="text-muted-foreground">
              100% Satisfait ou je vous rembourse ET je vous offre un chatbot IA.
              Aucun risque pour vous.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 