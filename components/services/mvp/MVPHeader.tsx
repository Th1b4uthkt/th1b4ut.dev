'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { MVPData } from '@/Data/mvp-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MVPHeaderProps {
  data: MVPData;
}

export default function MVPHeader({ data }: MVPHeaderProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-small-white opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-radial from-background via-background to-transparent z-0"></div>
      
      <div className="container-centered relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Emoji rocket with animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-4"
          >
            🚀
          </motion.div>
          
          {/* Main title with typing effect */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text-strong"
          >
            <span className="typing-effect">
              <Typewriter
                words={[data.title]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            {data.subtitle}
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 max-w-3xl"
          >
            {data.description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link href="/contact" className="cyber-button group">
              Discuter de ton projet
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 