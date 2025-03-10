"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaJava } from "react-icons/fa";
import { useState } from "react";
import { techStacks, getProjectsByCategory, ProjectCategory } from "@/Data/projects";
import { LampContainer } from "@/components/ui/lamp";
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");

  // Define typing sequences for each tab
  const typingSequences = {
    web: [
      'NPX expo start',
      1000,
      'NPX expo start --web',
      1000,
      'NPX expo start --android',
      1000,
      'NPX expo start --ios',
      1000,
    ],
    mobile: [
      'const app = createReactNativeApp("FitCoach");',
      1000,
      'npx react-native run-android',
      1000,
      'npx react-native run-ios',
      1000,
    ],
    java: [
      'SpringApplication.run(DashboardApplication.class, args);',
      1000,
      'mvn spring-boot:run',
      1000,
      'java -jar target/app.jar',
      1000,
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Récupérer les projets pour la catégorie active
  const categoryProjects = getProjectsByCategory(activeTab);

  return (
    <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Background decoration avec style underground */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      <div className="absolute inset-0 vinyl-texture -z-10" />
      <div className="absolute inset-0 digital-noise -z-10 opacity-20" />
      
      {/* Séparateurs horizontaux style underground */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero header avec LampContainer et style underground */}
        <LampContainer className="relative min-h-0 h-auto w-full bg-transparent overflow-visible py-4 md:py-10 mb-4 md:mb-10">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl/none underground-gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Thibaut | <span className="text-primary">Full Stack</span> Developer
            </motion.h1>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-xl mx-auto mt-1 md:mt-4">
              Expert en <span className="text-primary font-semibold">Web</span>, 
              <span className="text-accent font-semibold"> Mobile</span> & 
              <span className="text-secondary font-semibold"> IA</span> – Solutions sur mesure
            </p>
            
            {/* Badge avec style underground */}
            <motion.div
              className="pt-1 md:pt-4 hidden sm:block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="industrial-border inline-block px-4 py-1">
                <span className="underground-text text-xs sm:text-sm">+5 ans d&apos;expérience en développement multi-plateforme</span>
              </div>
            </motion.div>
          </div>
        </LampContainer>

        {/* VU-mètre animé */}
        <div className="vu-meter mx-auto w-1/2 max-w-[300px] mb-8" style={{ "--level": "85%" } as React.CSSProperties}></div>

        {/* Contenu principal avec style underground */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12 max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Colonne gauche pour le texte */}
          <motion.div 
            className="flex flex-col justify-center space-y-3 lg:space-y-8 flex-shrink-0 lg:w-[55%] pb-6 lg:pb-0"
            variants={itemVariants}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              {/* Onglets de catégorie avec style underground */}
              <motion.div 
                className="flex justify-center sm:justify-start gap-2 pt-0 sm:pt-2"
                variants={itemVariants}
              >
                <Button 
                  variant={activeTab === "web" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setActiveTab("web")}
                  className={`${activeTab === "web" ? "shadow-neon" : "border-primary/20"} transition-all duration-300`}
                >
                  <FaCode className="h-3 w-3 mr-1" /> Web
                </Button>
                <Button 
                  variant={activeTab === "mobile" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setActiveTab("mobile")}
                  className={`${activeTab === "mobile" ? "shadow-neon" : "border-primary/20"} transition-all duration-300`}
                >
                  <FaMobileAlt className="h-3 w-3 mr-1" /> Mobile
                </Button>
                <Button 
                  variant={activeTab === "java" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setActiveTab("java")}
                  className={`${activeTab === "java" ? "shadow-neon" : "border-primary/20"} transition-all duration-300`}
                >
                  <FaJava className="h-3 w-3 mr-1" /> Java
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Animation de frappe avec style terminal underground */}
            <motion.div 
              className="pt-4 block" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="terminal-underground text-xs sm:text-sm">
                <TypeAnimation
                  key={activeTab}
                  sequence={typingSequences[activeTab]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Colonne droite pour la carte interactive */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end w-full lg:w-[45%]"
            variants={itemVariants}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-full aspect-square lg:aspect-auto lg:h-[450px]">
              {/* Effet de lueur avec style underground */}
              <motion.div 
                className="absolute inset-0 rounded-sm bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 blur-2xl opacity-30"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="underground-card relative rounded-sm h-full w-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-5 text-center">
                  {/* Stack technologique dynamique basé sur la catégorie sélectionnée */}
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {techStacks[activeTab].map((tech: string, index: number) => (
                      <motion.div
                        key={tech}
                        className="industrial-border p-3 flex flex-col items-center justify-center gap-2"
                        whileHover={{ scale: 1.1, y: -3 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <Badge variant="outline" className="justify-center shadow-sm hover:shadow border-primary/20 hover:border-primary transition-all hover:bg-primary/5 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Projets avec style underground */}
                  <motion.div
                    className="space-y-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="underground-text text-sm">PROJETS RÉCENTS</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {categoryProjects.slice(0, 3).map((project, idx) => (
                        <motion.div
                          key={project.id}
                          className="industrial-border px-2 py-1"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-xs font-mono">
                            {project.title}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 