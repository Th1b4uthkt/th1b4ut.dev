"use client";

import { WhitelabelFeature } from "@/app/data/whitelabel";
import { motion } from "framer-motion";

interface FeaturesProps {
  features: WhitelabelFeature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-matrix-rain opacity-5" />
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
            Notre Arme Secrète
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour lancer votre application mobile rapidement et efficacement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stack Technique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card border border-primary/20 rounded-xl px-8 py-4">
            <h3 className="text-xl font-bold text-primary mb-4">
              Stack Technique
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-background/50 rounded-lg text-muted-foreground">
                React Native
              </div>
              <div className="px-4 py-2 bg-background/50 rounded-lg text-muted-foreground">
                Flutter
              </div>
              <div className="px-4 py-2 bg-background/50 rounded-lg text-muted-foreground">
                IA Embarquée
              </div>
              <div className="px-4 py-2 bg-background/50 rounded-lg text-muted-foreground">
                Supabase/Firebase
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problématique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Vous voulez lancer une app mobile mais...
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-destructive mb-2">
                  20k€+
                </div>
                <p className="text-muted-foreground">
                  Budget dev classique
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-destructive mb-2">
                  6+ mois
                </div>
                <p className="text-muted-foreground">
                  Délais habituels
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-destructive mb-2">
                  No-code ?
                </div>
                <p className="text-muted-foreground">
                  Limites de branding
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 