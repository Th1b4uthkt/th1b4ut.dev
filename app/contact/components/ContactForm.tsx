"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { serviceOptions } from "../data/contact-data";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    const serviceValue = value === "default" ? "" : value;
    
    setFormData((prev) => ({
      ...prev,
      service: serviceValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier si un service valide a été sélectionné
    if (!formData.service) {
      // Vous pouvez afficher un message d'erreur ou mettre en évidence le champ
      alert("Veuillez sélectionner un service");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
      {!isSubmitted ? (
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Entreprise (optionnel)</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Nom de votre entreprise"
              value={formData.company}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Service qui vous intéresse</Label>
            <Select 
              value={formData.service || "default"}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Votre message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet ou vos besoins..."
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none"
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Envoi en cours...
              </div>
            ) : (
              "Envoyer le message"
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-10 space-y-4"
        >
          <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Message envoyé!</h3>
          <p className="text-center text-muted-foreground">
            Merci pour votre message. Je vous répondrai dans les plus brefs délais, généralement sous 24 heures.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
          >
            Envoyer un autre message
          </Button>
        </motion.div>
      )}
    </div>
  );
} 