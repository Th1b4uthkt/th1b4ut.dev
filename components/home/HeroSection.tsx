"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaJava, FaReact } from "react-icons/fa";
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

  // Animation variants optimisés pour plus de fluidité
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
    <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 bg-background relative overflow-hidden">
      {/* Background decoration futuriste avec effet glassmorphism 2025 */}
      <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
      
      {/* Gradient radial background with enhanced colors */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-primary/5 opacity-80 -z-10" />
      
      {/* Animated 3D-like elements in background - 2025 trend */}
      <motion.div 
        className="absolute top-32 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.1, 1.05, 1],
          opacity: [0.3, 0.5, 0.4, 0.3],
          rotateZ: [0, 15, 0, -15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotateZ: [0, -15, 0, 15, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Neuomorphic grid lines - 2025 trend */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        {/* Make the lamp container much smaller on mobile */}
        <LampContainer 
          className="relative min-h-0 h-auto w-full bg-transparent overflow-visible py-4 md:py-10 mb-4 md:mb-10"
        >
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl/none bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Thibaut | <span className="text-primary">Full-Stack</span> Developer
            </motion.h1>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-xl mx-auto mt-1 md:mt-4">
              Expert en <span className="text-primary font-semibold">Web</span>, 
              <span className="text-accent font-semibold"> Mobile</span> & 
              <span className="text-secondary font-semibold"> IA</span> – Solutions sur mesure
            </p>
            
            {/* Only show badge on larger screens */}
            <motion.div
              className="pt-1 md:pt-4 hidden sm:block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Badge variant="outline" className="border-primary/30 text-xs sm:text-sm shadow-glow backdrop-blur-sm">
                +5 ans d&apos;expérience en développement multi-plateforme
              </Badge>
            </motion.div>
          </div>
        </LampContainer>

        {/* Make sure the buttons section has proper z-index and positioning */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12 max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column for text - improved spacing for mobile */}
          <motion.div 
            className="flex flex-col justify-center space-y-3 lg:space-y-8 flex-shrink-0 lg:w-[55%] pb-6 lg:pb-0"
            variants={itemVariants}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              {/* Category tabs - centered on mobile */}
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
            
            {/* Dynamic typing animation - now visible on all screen sizes */}
            <motion.div 
              className="pt-4 block" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="font-mono text-xs sm:text-sm text-muted-foreground typing-text-container">
                <span className="mr-2 text-secondary">&gt;</span>
                <div className="typing-effect">
                  <TypeAnimation
                    key={activeTab} // Force re-render when tab changes
                    sequence={typingSequences[activeTab]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    cursor={false} // Disable built-in cursor since we're using CSS
                    className="typing-text"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column for interactive card - 2025 trend for dynamic content */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end w-full lg:w-[45%]"
            variants={itemVariants}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-full aspect-square lg:aspect-auto lg:h-[450px]">
              {/* Enhanced glassmorphism effect - 2025 trend */}
              <motion.div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 blur-2xl opacity-30"
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
                className="relative bg-background/70 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg p-6 h-full w-full flex items-center justify-center animate-glow-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="space-y-5 text-center">
                  {/* Dynamic tech stack based on selected category */}
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    key={activeTab} // Force re-render animation when tab changes
                  >
                    {techStacks[activeTab].map((tech: string, index: number) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        <Badge variant="outline" className="justify-center shadow-sm hover:shadow border-primary/20 hover:border-primary transition-all hover:bg-primary/5 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Featured projects based on selected category */}
                  <motion.div 
                    className="font-mono text-sm space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    key={`projects-${activeTab}`} // Force re-render animation when tab changes
                  >
                    {categoryProjects.slice(0, 3).map((project, index) => (
                      <motion.div 
                        key={project.id}
                        className="flex items-center text-primary hover:text-primary/90 transition-colors"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        {activeTab === "web" && <FaReact className="mr-2" />}
                        {activeTab === "mobile" && <FaMobileAlt className="mr-2" />}
                        {activeTab === "java" && <FaJava className="mr-2" />}
                        <p># {project.title} <span className="text-xs text-muted-foreground">({project.tech})</span></p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enhanced 3D-like animated element - 2025 trend */}
                  <motion.div 
                    className="absolute -bottom-3 -right-3 w-16 h-16 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
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