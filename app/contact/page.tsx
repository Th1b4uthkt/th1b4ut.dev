"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { Availability } from "@/components/contact/Availability";
import { CallToAction } from "@/components/contact/CallToAction";
import { FAQ } from "@/components/contact/FAQ";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden vinyl-texture studio-grid">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-[-1]"></div>
      
      {/* Séparateurs horizontaux style underground */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={item} className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
          <div className="inline-block industrial-border px-6 py-2 mb-4">
            <span className="underground-text text-lg">CONTACT</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl underground-gradient-text">
            Parlons de votre projet
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl font-mono">
            Discutons ensemble de vos besoins et voyons comment je peux vous aider à les concrétiser
          </p>
          
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-4" style={{ "--level": "60%" } as React.CSSProperties}></div>
        </motion.div>

        <motion.div variants={item} className="mb-8 sm:mb-12 md:mb-16 relative">
          <div className="absolute inset-0 waveform-bg z-[-1]"></div>
          
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8 md:w-auto md:mx-auto industrial-border bg-transparent">
              <TabsTrigger 
                value="form" 
                className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Formulaire de contact
              </TabsTrigger>
              <TabsTrigger 
                value="call" 
                className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 underground-text data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Planifier un appel
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5">
                <div className="xl:col-span-3 vhs-effect">
                  <ContactForm />
                </div>
                <div className="xl:col-span-2 space-y-6 sm:space-y-8 digital-noise">
                  <ContactInfo />
                  <SocialLinks />
                  <Availability />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="call">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5">
                <div className="xl:col-span-3 vhs-effect">
                  <CallToAction />
                </div>
                <div className="xl:col-span-2 space-y-6 sm:space-y-8 digital-noise">
                  <ContactInfo />
                  <SocialLinks />
                  <Availability />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={item}>
          <FAQ />
        </motion.div>
      </motion.div>
    </div>
  );
} 