"use client";

import { WhitelabelTemplate } from "@/app/data/whitelabel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface TemplatesProps {
  templates: WhitelabelTemplate[];
}

export function Templates({ templates }: TemplatesProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<WhitelabelTemplate | null>(null);

  return (
    <section id="templates" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
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
            Templates Prêts à l&apos;Emploi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez votre base et personnalisez-la selon vos besoins. Chaque template est optimisé pour les performances et la scalabilité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="group relative bg-card hover:bg-card/60 border border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:scale-105"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                <div className="space-y-2">
                  {template.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Livré en {template.stats.deliveryTime}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {template.stats.activeUsers} utilisateurs
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedTemplate && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-card border border-primary/20 rounded-xl p-6">
              <button
                onClick={() => setSelectedTemplate(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={selectedTemplate.image}
                    alt={selectedTemplate.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {selectedTemplate.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedTemplate.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Livraison</div>
                      <div className="text-xl font-bold text-primary">
                        {selectedTemplate.stats.deliveryTime}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Impact</div>
                      <div className="text-xl font-bold text-secondary">
                        {selectedTemplate.stats.impact}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {selectedTemplate.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedTemplate.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underground-button px-6 py-3 rounded-lg"
                    >
                      Voir la démo
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      Personnaliser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 