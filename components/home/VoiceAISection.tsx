"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaMicrophone, 
  FaPhoneVolume, 
  FaRobot, 
  FaHeadset 
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { 
  BsFillChatDotsFill, 
  BsGraphUp, 
  BsShieldCheck 
} from "react-icons/bs";

export function VoiceAISection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const voiceFeatures = [
    {
      title: "Standard Téléphonique IA",
      icon: <FaPhoneVolume className="h-7 w-7 text-primary" />,
      description: "Accueil téléphonique 24/7 avec IA conversationnelle naturelle. Gestion intelligente des appels et routage contextuel.",
      metrics: "Réduction de 65% des temps d'attente",
    },
    {
      title: "Service Client Augmenté",
      icon: <FaHeadset className="h-7 w-7 text-primary" />,
      description: "Support client multilingue instantané. Résolution automatique des requêtes courantes et escalade intelligente.",
      metrics: "Satisfaction client améliorée de 45%",
    },
    {
      title: "Cold Calling Intelligent",
      icon: <BsFillChatDotsFill className="h-7 w-7 text-primary" />,
      description: "Prospection commerciale à grande échelle avec IA conversationnelle personnalisée. Qualification des leads en temps réel.",
      metrics: "Taux de conversion +85%",
    }
  ];

  const techBenefits = [
    { icon: <HiSparkles />, label: "IA Générative" },
    { icon: <BsGraphUp />, label: "Analytics Avancés" },
    { icon: <FaRobot />, label: "Personnalisation" },
    { icon: <BsShieldCheck />, label: "Sécurité Enterprise" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <section className="w-full py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      <div className="absolute inset-0 digital-noise -z-10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section avec style underground */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block industrial-border px-4 py-1 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="underground-text text-sm flex items-center gap-2">
              <FaMicrophone className="h-4 w-4" />
              VOICE AI SOLUTIONS
            </span>
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="underground-gradient-text text-3xl font-bold tracking-tighter sm:text-4xl">
              Transformez votre communication client avec l'IA vocale
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Des solutions vocales intelligentes qui révolutionnent l'engagement client
            </p>
          </div>
          
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] mt-4" style={{ "--level": "75%" } as React.CSSProperties}></div>
        </motion.div>

        {/* Main Features Grid avec style underground */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {voiceFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="industrial-container flex flex-col h-full p-5 md:p-6"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="rounded-sm p-2 bg-primary/10 flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="underground-text text-lg">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {feature.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-primary/10">
                <p className="terminal-underground text-sm">
                  {feature.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Benefits Section avec style underground */}
        <motion.div 
          className="mt-12 underground-card p-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-6">
            <span className="underground-text text-sm">TECHNOLOGIES DE POINTE</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techBenefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center p-4 industrial-border"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary text-xl mb-2">
                  {benefit.icon}
                </div>
                <span className="text-sm font-mono">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action avec style underground */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="underground-button px-6 py-3 rounded-sm flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMicrophone className="h-5 w-5" />
            <span className="uppercase tracking-wider">Découvrir nos solutions</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 