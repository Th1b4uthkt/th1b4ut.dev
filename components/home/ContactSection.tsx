"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export function ContactSection() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decoration avec style underground */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      <div className="absolute inset-0 vinyl-texture -z-10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block industrial-border px-4 py-1 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="underground-text text-sm">CONTACT</span>
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="underground-gradient-text text-3xl font-bold tracking-tighter sm:text-4xl">Prêt à collaborer?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px] mx-auto">
              Contactez-moi pour discuter de votre projet et voir comment je peux vous aider
            </p>
          </motion.div>
          
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] mt-4 mb-6" style={{ "--level": "60%" } as React.CSSProperties}></div>
          
          <motion.div 
            className="w-full max-w-sm space-y-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex-1"
              >
                <Link href="/contact" className="underground-button w-full py-3 rounded-sm flex items-center justify-center gap-2 group">
                  <FaEnvelope className="h-4 w-4" />
                  <span className="uppercase tracking-wider text-sm">Contact</span>
                  <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex-1"
              >
                <Link href="/services" className="industrial-border w-full py-3 rounded-sm flex items-center justify-center text-sm uppercase tracking-wider">
                  Services
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-xs text-muted-foreground text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Réponse garantie sous 24h ouvrées
            </motion.p>
          </motion.div>
          
          {/* Social icons avec style underground */}
          <motion.div 
            className="flex flex-col items-center space-y-2 mt-6 md:mt-8 pt-6 border-t border-primary/20 w-full max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="terminal-underground text-sm mb-2">Me retrouver sur</p>
            <div className="flex space-x-4 sm:space-x-6">
              <SocialIcon icon={<FaLinkedin />} href="https://linkedin.com" label="LinkedIn" />
              <SocialIcon icon={<FaGithub />} href="https://github.com/Th1b4uthkt" label="GitHub" />
              <SocialIcon icon={<FaTwitter />} href="https://x.com/thibaut_hook" label="Twitter" />
            </div>
          </motion.div>
          
          {/* Availability indicator avec style underground */}
          <motion.div 
            className="mt-6 md:mt-8 industrial-border px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -2 }}
          >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-pulse-subtle absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-secondary"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono">Disponible pour de nouveaux projets</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 

function SocialIcon({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center space-y-1 text-muted-foreground hover:text-primary transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="w-8 h-8 sm:w-10 sm:h-10 industrial-border flex items-center justify-center"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 10px rgba(var(--primary-rgb), 0.3)" 
        }}
      >
        {icon}
      </motion.div>
      <span className="text-xs font-mono">{label}</span>
    </motion.a>
  );
} 