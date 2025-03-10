"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBolt, FaAccessibleIcon, FaSearchPlus, FaChartLine, FaAward } from "react-icons/fa";
import { SiGooglesearchconsole, SiLighthouse, SiPagespeedinsights } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

export function SeoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const seoFeatures = [
    {
      title: "Performances",
      icon: <FaBolt className="h-7 w-7 text-primary" />,
      description: "Des sites ultra-rapides avec Core Web Vitals optimisés et score Lighthouse ≥ 90"
    },
    {
      title: "Accessibilité",
      icon: <FaAccessibleIcon className="h-7 w-7 text-primary" />,
      description: "Sites conformes WCAG pour une expérience inclusive et un meilleur référencement"
    },
    {
      title: "SEO Technique",
      icon: <FaSearchPlus className="h-7 w-7 text-primary" />,
      description: "Structure sémantique, meta-données dynamiques et optimisation pour les moteurs de recherche"
    }
  ];

  const clientLogos = [
    { icon: <SiLighthouse className="h-8 w-8 sm:h-10 sm:w-10" />, name: "Lighthouse" },
    { icon: <SiPagespeedinsights className="h-8 w-8 sm:h-10 sm:w-10" />, name: "PageSpeed" },
    { icon: <SiGooglesearchconsole className="h-8 w-8 sm:h-10 sm:w-10" />, name: "Search Console" },
    { icon: <TbSeo className="h-8 w-8 sm:h-10 sm:w-10" />, name: "SEO" },
    { icon: <FaChartLine className="h-8 w-8 sm:h-10 sm:w-10" />, name: "Analytics" }
  ];

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
    <section className="w-full py-10 md:py-16 lg:py-20 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] -z-10" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent -z-10" />
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-primary/3 rounded-full blur-3xl opacity-70 -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center rounded-full bg-muted p-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">SEO-Friendly Development</span>
          </motion.div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sites optimisés pour le référencement</h2>
            <p className="text-muted-foreground md:text-lg">
              Chaque projet est conçu en pensant à la performance et au référencement naturel dès le départ
            </p>
          </div>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {seoFeatures.map((feature, idx) => (
            <motion.div 
              key={feature.title} 
              className="flex flex-col h-full rounded-xl border border-primary/10 bg-background p-5 md:p-6 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="rounded-full p-2 bg-primary/10 flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {feature.description}
              </p>
              
              <motion.div 
                className="w-16 h-16 relative mt-auto mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                  <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1" />
                  <motion.path 
                    d="M32 2 A 30 30 0 1 1 32 62 A 30 30 0 1 1 32 2"
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: idx === 0 ? 0.9 : idx === 1 ? 0.85 : 0.95 }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 1.5, ease: "easeOut" }}
                    style={{ 
                      strokeDasharray: "1 1",
                      rotate: "-90deg",
                      transformOrigin: "center" 
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {idx === 0 ? "90%" : idx === 1 ? "85%" : "95%"}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 md:mt-12 bg-background rounded-xl border border-primary/10 p-4 md:p-6 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="text-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-primary text-sm font-medium">Les outils que j utilise pour garantir des performances optimales</span>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-2">
            {clientLogos.map((logo, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center space-y-1 sm:space-y-2 mx-2 sm:mx-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {logo.icon}
                <span className="text-xs">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-background border border-primary/20 px-4 sm:px-6 py-3 rounded-lg shadow-md text-center sm:text-left"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaAward className="h-5 w-5 text-primary" />
            <span className="text-base sm:text-lg">
              <span className="text-primary font-bold">+53%</span> d augmentation moyenne du trafic organique pour mes clients
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 