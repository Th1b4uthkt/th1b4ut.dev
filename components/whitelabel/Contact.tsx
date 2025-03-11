"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "standard",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-circuit-board opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lançons Votre Projet
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et je vous recontacte sous 24h avec une proposition sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-colors"
                  >
                    <option value="mvp">MVP - 2000€</option>
                    <option value="standard">Standard - 4500€</option>
                    <option value="enterprise">Enterprise - Sur mesure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full underground-button px-6 py-3 rounded-lg text-lg font-semibold"
                >
                  Envoyer
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Réponse Garantie sous 24h
                </h3>
                <p className="text-muted-foreground">
                  Je vous recontacte personnellement pour discuter de votre projet et vous proposer la meilleure solution.
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Démarrage Rapide
                </h3>
                <p className="text-muted-foreground">
                  Une fois le projet validé, nous commençons le développement sous 48h maximum.
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Contact Direct
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: contact@th1b4ut.fr</p>
                  <p>Twitter: @th1b4ut</p>
                  <p>LinkedIn: /in/th1b4ut</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 