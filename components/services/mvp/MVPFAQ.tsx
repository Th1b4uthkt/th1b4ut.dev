'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MVPFAQ } from '@/Data/mvp-data';
import { ChevronDown } from 'lucide-react';

interface MVPFAQProps {
  faqs: MVPFAQ[];
}

export default function MVPFAQSection({ faqs }: MVPFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 matrix-rain opacity-5 z-0"></div>
      
      <div className="container-centered relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text">Questions Fréquentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de démarrer votre MVP
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index 
                    ? 'bg-primary/20 shadow-neon' 
                    : 'bg-primary/10 hover:bg-primary/15'
                }`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-primary/5 rounded-b-lg border-x border-b border-primary/10">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Comparaison MVP cheap vs MVP pro */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6 text-center">MVP cheap vs MVP pro</h3>
          
          <div className="overflow-hidden rounded-2025 border border-primary/20">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary/20 p-4">
              <div className="font-semibold">Catégorie</div>
              <div className="font-semibold text-center">MVP Cheap</div>
              <div className="font-semibold text-center">MVP Pro (2000€)</div>
            </div>
            
            {/* Rows */}
            {[
              { category: "Qualité du code", cheap: "Code spaghetti, difficile à maintenir", pro: "Architecture propre, modulaire et documentée" },
              { category: "Évolutivité", cheap: "Limité, nécessite souvent une réécriture", pro: "Conçu pour évoluer, facilement extensible" },
              { category: "Performance", cheap: "Lente, non optimisée", pro: "Rapide, optimisée pour l'utilisateur final" },
              { category: "Sécurité", cheap: "Vulnérabilités potentielles", pro: "Bonnes pratiques de sécurité intégrées" },
              { category: "Support", cheap: "Minimal ou inexistant", pro: "Documentation complète + vidéo explicative" }
            ].map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-primary/5' : ''}`}
              >
                <div className="font-medium">{row.category}</div>
                <div className="text-center text-muted-foreground">{row.cheap}</div>
                <div className="text-center text-primary">{row.pro}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 