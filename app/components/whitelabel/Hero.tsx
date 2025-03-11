"use client";

import { motion } from "framer-motion";
import { WhitelabelTemplate } from "@/app/data/whitelabel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  templates: WhitelabelTemplate[];
}

export function Hero({ templates }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % templates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [templates.length]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-small-white opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent industrial-glitch" data-text="Votre App Mobile en Marque Blanche">
            Votre App Mobile en Marque Blanche,
            <br />
            <span className="text-primary">Prête en 15 Jours.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Flutter, React Native, IA Embarquée. Publiez sur l&apos;App Store et Google Play sans codage.
            <br />
            <span className="text-primary">Gardez 100% des droits.</span>
          </p>
        </motion.div>

        {/* Template Slider */}
        <div className="relative w-full max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  {templates[currentIndex].name}
                </h3>
                <p className="text-muted-foreground">
                  {templates[currentIndex].description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {templates[currentIndex].stats.deliveryTime}
                    </div>
                    <div className="text-sm text-muted-foreground">Livraison</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-secondary">
                      {templates[currentIndex].stats.activeUsers}
                    </div>
                    <div className="text-sm text-muted-foreground">Utilisateurs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent">
                      {templates[currentIndex].stats.impact}
                    </div>
                    <div className="text-sm text-muted-foreground">Impact</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={templates[currentIndex].image}
                  alt={templates[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#pricing"
            className="underground-button px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all"
          >
            Commencer pour 4500€
          </a>
          <a
            href="#templates"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Voir les templates →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 