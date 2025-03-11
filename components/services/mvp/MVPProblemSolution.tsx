'use client';

import { motion } from 'framer-motion';
import { MVPFeature } from '@/Data/mvp-data';
import { Check, Code, Database, FileCode, Store } from 'lucide-react';

interface MVPProblemSolutionProps {
  features: MVPFeature[];
}

// Map des icônes par nom
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Store: <Store className="h-6 w-6" />,
  FileCode: <FileCode className="h-6 w-6" />,
};

export default function MVPProblemSolution({ features }: MVPProblemSolutionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
      
      <div className="container-centered relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problématique */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2025"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text">Vous avez une idée tech mais…</h2>
            
            <ul className="space-y-4">
              {['Pas le temps de coder ?', 'Un budget serré ?', 'Besoin de tester rapidement sur le marché ?'].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm">?</span>
                  </div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm md:text-base">
                <span className="font-semibold">Argument choc :</span> Pour le prix d&apos;un dev freelance junior, obtenez un système optimisé par un expert IA/automatisation (15 ans d&apos;expérience).
              </p>
            </div>
          </motion.div>
          
          {/* Solution */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text">Solution</h2>
            
            <ul className="space-y-6">
              {features.map((feature) => (
                <motion.li
                  key={feature.id}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    {iconMap[feature.icon] || <Check className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 