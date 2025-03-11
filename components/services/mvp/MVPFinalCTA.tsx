'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MVPFinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent z-0"></div>
      
      <div className="container-centered relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-10 rounded-2025 border border-primary/20 shadow-neon">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 neon-text-strong">
              2 Slots Disponibles Ce Mois
            </h2>
            <p className="text-xl text-muted-foreground">
              Votre MVP Peut Attendre, Vos Concurrents Non.
            </p>
          </motion.div>
          
          {/* Countdown-like display */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <div className="bg-primary/10 px-6 py-3 rounded-lg border border-primary/20 inline-flex items-center">
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-xs text-muted-foreground">places restantes</div>
              </div>
              <div className="h-10 w-px bg-primary/20 mx-2"></div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-xs text-muted-foreground">jours max</div>
              </div>
              <div className="h-10 w-px bg-primary/20 mx-2"></div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold text-primary">2000€</div>
                <div className="text-xs text-muted-foreground">prix fixe</div>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className="cyber-button group text-lg px-6 py-3"
            >
              Démarrer mon MVP (2000€)
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services" 
              className="underground-button group text-lg px-6 py-3"
            >
              Voir les solutions IA prêtes-à-l&apos;emploi
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Paiement sécurisé • Satisfaction garantie • Code 100% propriétaire
            </p>
          </motion.div>
        </div>
        
        {/* Philosophy reminder */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg italic">
            &ldquo;L&apos;IA comme allié, pas comme dictateur. Un code sans chaînes, pensé pour votre liberté.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
} 