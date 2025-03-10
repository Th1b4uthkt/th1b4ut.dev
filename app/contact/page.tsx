"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { SocialLinks } from "./components/SocialLinks";
import { Availability } from "./components/Availability";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

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
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="container max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={item} className="flex flex-col items-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Parlons de votre projet
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
          Discutons ensemble de vos besoins et voyons comment je peux vous aider à les concrétiser
        </p>
        <Separator className="w-16 sm:w-24 mt-4 sm:mt-6" />
      </motion.div>

      <motion.div variants={item} className="mb-8 sm:mb-12 md:mb-16">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8 md:w-auto md:mx-auto">
            <TabsTrigger value="form" className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8">Formulaire de contact</TabsTrigger>
            <TabsTrigger value="call" className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-8">Planifier un appel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5">
              <div className="xl:col-span-3">
                <ContactForm />
              </div>
              <div className="xl:col-span-2 space-y-6 sm:space-y-8">
                <ContactInfo />
                <SocialLinks />
                <Availability />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="call">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5">
              <div className="xl:col-span-3">
                <CallToAction />
              </div>
              <div className="xl:col-span-2 space-y-6 sm:space-y-8">
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
  );
} 