"use client";

import { motion } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const { activePersona } = usePersonaStore();

  return (
    <section className="py-24 bg-background/50 backdrop-blur-lg container mx-auto px-4 md:px-20 relative overflow-hidden" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        <span className="text-primary font-mono text-sm uppercase tracking-wider">
          {activePersona === 'backend' ? './contact --force' : 'Vamos Conversar?'}
        </span>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Tem um projeto em mente?
          <span className="block text-muted-foreground mt-2 text-2xl md:text-3xl font-normal">
            Vamos construir algo incrível juntos.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.a
            href="mailto:contato@emanuel.dev"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl shadow-lg hover:border-primary transition-all group"
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">contato@emanuel.dev</p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/emanu-ell"
            target="_blank"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl shadow-lg hover:border-primary transition-all group"
          >
            <div className="p-4 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Linkedin size={32} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground">Conectar profissionalmente</p>
          </motion.a>
        </div>

        <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-border/20">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
