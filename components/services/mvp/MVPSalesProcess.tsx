'use client';

import { motion } from 'framer-motion';
import { MVPStep } from '@/Data/mvp-data';
import { Calendar, CheckCircle, Package } from 'lucide-react';
import Link from 'next/link';

interface MVPSalesProcessProps {
  steps: MVPStep[];
}

// Map des icônes par nom
const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="h-6 w-6" />,
  CheckCircle: <CheckCircle className="h-6 w-6" />,
  Package: <Package className="h-6 w-6" />,
};

export default function MVPSalesProcess({ steps }: MVPSalesProcessProps) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-0"></div>
      
      <div className="container-centered relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text">PROCESS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3 Étapes Simplissimes pour transformer votre idée en MVP fonctionnel
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
              )}
              
              <div className="glass-card p-6 rounded-2025 relative z-10 h-full flex flex-col hover-lift">
                {/* Step number */}
                <div className="absolute -top-5 -left-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-neon">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  {iconMap[step.icon] || <div className="h-6 w-6 text-primary" />}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center mb-4 flex-grow">{step.description}</p>
                
                {/* CTA for first step */}
                {step.id === 1 && (
                  <Link 
                    href="/contact" 
                    className="mt-auto text-center py-2 px-4 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-lg transition-colors"
                  >
                    Discuter de ton projet
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-6 glass-card rounded-2025"
        >
          <h3 className="text-xl font-bold mb-4">Timeline précise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <div className="font-mono text-primary mb-1">J1-3</div>
              <div className="font-semibold mb-2">Setup technique</div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Architecture</li>
                <li>• Configuration</li>
                <li>• Préparation des environnements</li>
              </ul>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <div className="font-mono text-primary mb-1">J4-10</div>
              <div className="font-semibold mb-2">Développement</div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Frontend</li>
                <li>• Backend</li>
                <li>• Intégration API</li>
                <li>• Tests unitaires</li>
              </ul>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <div className="font-mono text-primary mb-1">J11-15</div>
              <div className="font-semibold mb-2">Finalisation</div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tests utilisateurs</li>
                <li>• Corrections</li>
                <li>• Déploiement</li>
                <li>• Publication</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 