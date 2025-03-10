"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBrain, FaRobot, FaChartLine, FaSearch, FaLightbulb } from "react-icons/fa";
import { SiOpenai, SiLangchain } from "react-icons/si";
import { Typewriter } from "../ui/typewriter";

export function AiDifferentiation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // AI capabilities for the typewriter effect
  const aiCapabilities = [
    "Chatbots personnalisés",
    "Analyse de données",
    "Recommandations intelligentes",
    "Automatisation des processus",
    "Optimisation SEO via NLP",
    "Génération de contenu",
  ];

  const features = [
    {
      icon: <SiLangchain className="h-5 w-5 text-primary" />,
      text: "Chatbots personnalisés avec LangChain et OpenAI",
    },
    {
      icon: <FaChartLine className="h-5 w-5 text-primary" />,
      text: "Systèmes de recommandation intelligents",
    },
    {
      icon: <FaRobot className="h-5 w-5 text-primary" />,
      text: "Analyse de données et insights automatisés",
    },
    {
      icon: <FaSearch className="h-5 w-5 text-primary" />,
      text: "Optimisation SEO via NLP (Natural Language Processing)",
    },
  ];

  const aiExamples = [
    {
      title: "E-commerce",
      text: "Augmentation du taux de conversion de 37% grâce aux recommandations IA personnalisées",
      icon: <FaLightbulb className="h-5 w-5" />,
    },
    {
      title: "Productivité",
      text: "Réduction de 42% du temps de traitement des demandes clients grâce aux assistants IA",
      icon: <FaChartLine className="h-5 w-5" />,
    },
  ];

  // Positions fixes pour les éléments du réseau neuronal
  const primaryNodePositions = [
    { top: "15%", left: "10%" },
    { top: "25%", left: "85%" },
    { top: "40%", left: "20%" },
    { top: "55%", left: "75%" },
    { top: "70%", left: "40%" },
    { top: "80%", left: "15%" },
    { top: "85%", left: "90%" },
    { top: "30%", left: "55%" },
  ];
  
  const accentNodePositions = [
    { top: "20%", left: "30%" },
    { top: "35%", left: "70%" },
    { top: "50%", left: "5%" },
    { top: "65%", left: "60%" },
    { top: "75%", left: "25%" },
    { top: "40%", left: "45%" },
    { top: "90%", left: "80%" },
    { top: "30%", left: "15%" },
  ];

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

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 bg-background/80 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
      
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-10 -z-10 bg-gradient-radial from-secondary/30 via-background to-background"
        animate={{ 
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Neural network-like circles and lines in the background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {primaryNodePositions.map((position, i) => (
          <motion.div 
            key={`primary-${i}`}
            className="absolute h-2 w-2 rounded-full bg-primary/30"
            style={{ top: position.top, left: position.left }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 2 + (i % 3) * 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.25
            }}
          />
        ))}
        
        {accentNodePositions.map((position, i) => (
          <motion.div 
            key={`accent-${i}`}
            className="absolute h-2 w-2 rounded-full bg-accent/30"
            style={{ top: position.top, left: position.left }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 2 + (i % 4) * 1.3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Edge highlight lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center rounded-full bg-muted p-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span 
              className="rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent_25%,rgba(var(--primary-rgb),0.1)_50%,transparent_75%)]"
            >
              Innovation IA
            </motion.span>
          </motion.div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl relative inline-block">
              <span className="relative z-10">Expertise en</span>
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/10 -z-10 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <div className="typing-text-container mt-3 mb-4">
              <Typewriter 
                baseText="Intelligence " 
                texts={aiCapabilities} 
                delay={0.5}
                className="typing-text"
              />
            </div>
            <p className="text-muted-foreground md:text-lg">
              J intègre des solutions d IA avancées pour rendre vos applications plus 
              <span className="relative inline-block mx-1 text-accent">
                intelligentes
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span> 
              et efficaces
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12 max-w-6xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Liste des features - bonne visibilité mobile */}
          <motion.div 
            className="flex flex-col justify-center space-y-5 lg:w-[55%] mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <motion.ul 
              className="grid gap-3 py-1"
              variants={containerVariants}
            >
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center gap-3 bg-background/80 backdrop-blur-sm p-3 rounded-lg border shadow-sm transition-all relative group overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5, 
                    transition: { type: "spring", stiffness: 300 } 
                  }}
                >
                  <motion.div
                    className="flex-shrink-0 rounded-full bg-primary/10 p-2 relative"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/5 animate-ping"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 1 + idx * 0.5
                      }}
                    />
                    {feature.icon}
                  </motion.div>
                  <span className="flex items-center text-sm sm:text-base relative z-10">
                    {feature.text}
                  </span>
                  
                  {/* Background gradient that appears on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Card illustration - adapté au mobile */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end lg:w-[45%]"
            variants={itemVariants}
          >
            {/* Card with gradients and animations */}
            <motion.div 
              className="rounded-xl border bg-background/80 backdrop-blur-md p-5 md:p-8 shadow-glow relative overflow-hidden w-full max-w-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient effect */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-primary/10 via-accent/10 to-transparent rounded-full blur-xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
                
              <div className="space-y-4 relative z-10">
                <motion.div 
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 relative"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <FaBrain className="h-7 w-7 text-primary" />
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 0.3, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold">IA concrète et applicable</h3>
                <div className="typing-text-container mt-2 mb-3">
                  <Typewriter 
                    baseText="Solutions " 
                    texts={[
                      "intelligentes",
                      "adaptatives",
                      "performantes",
                      "innovantes",
                      "sur mesure"
                    ]} 
                    delay={1}
                    className="typing-text text-sm"
                  />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Mon approche de l IA est orientée résultats. J&apos;intègre des technologies d&apos;intelligence artificielle qui résolvent des problèmes concrets pour votre entreprise ou vos utilisateurs.
                </p>
                
                <motion.div 
                  className="border-t pt-4 space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.h4 
                    className="text-sm font-semibold text-primary relative inline-block"
                    whileHover={{ x: 2 }}
                  >
                    Résultats concrets
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-transparent"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                        width: ["70%", "100%", "70%"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.h4>
                  
                  {aiExamples.map((example, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-muted/50 backdrop-blur-sm p-3 rounded-md flex items-start gap-2 relative overflow-hidden group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.2 }}
                      whileHover={{ x: 3 }}
                    >
                      <span className="text-primary mt-0.5 relative z-10">{example.icon}</span>
                      <div className="relative z-10">
                        <span className="text-sm font-medium">{example.title} : </span>
                        <span className="text-xs sm:text-sm text-muted-foreground">{example.text}</span>
                      </div>
                      
                      {/* Background gradient on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex space-x-3 mt-4 pt-2 border-t border-muted/30 justify-center sm:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center relative group" 
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full animate-glow-pulse opacity-0 group-hover:opacity-100"
                    />
                    <SiOpenai className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center relative group" 
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full animate-glow-pulse opacity-0 group-hover:opacity-100"
                    />
                    <SiLangchain className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center relative group" 
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full animate-glow-pulse opacity-0 group-hover:opacity-100"
                    />
                    <FaRobot className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </motion.div>
                
                {/* Animated corner decoration */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-28 h-28 -z-10 opacity-20"
                  animate={{ 
                    rotate: 360,
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" fill="none"/>
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" className="text-accent" fill="none"/>
                    <path d="M30,50 L70,50" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                    <path d="M50,30 L50,70" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 