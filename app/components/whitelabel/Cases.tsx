"use client";

import { WhitelabelCase } from "@/app/data/whitelabel";
import { motion } from "framer-motion";
import Image from "next/image";

interface CasesProps {
  cases: WhitelabelCase[];
}

export function Cases({ cases }: CasesProps) {
  return (
    <section id="cases" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-studio-grid opacity-5" />
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
            Ils Ont Osé – Vous Pouvez Copier
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos clients ont transformé leur vision en applications performantes en quelques jours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-primary/20 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={case_.image}
                  alt={case_.companyName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {case_.companyName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {case_.clientName}, {case_.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {case_.testimonial}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {case_.results.downloads}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Téléchargements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">
                      {case_.results.timeToMarket}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Time to Market
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">
                      {case_.results.impact}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Impact
                    </div>
                  </div>
                </div>
                {case_.videoUrl && (
                  <div className="mt-6">
                    <a
                      href={case_.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underground-button w-full py-2 rounded-lg text-center text-sm"
                    >
                      Voir le témoignage vidéo →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 