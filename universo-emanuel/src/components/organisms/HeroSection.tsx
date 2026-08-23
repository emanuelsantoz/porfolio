"use client";

import { motion } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  const { activePersona } = usePersonaStore();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start container mx-auto px-4 md:px-20 relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <span className="text-primary font-mono text-lg">
          {activePersona === 'backend' ? '> Hello World' : 'Olá, eu sou'}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Emanuel Santos
          <span className="block text-primary mt-2">
            {activePersona === 'fullstack' && 'Fullstack Developer.'}
            {activePersona === 'backend' && 'Backend Architect.'}
            {activePersona === 'ux-ui' && 'Product Designer.'}
            {activePersona === 'mobile' && 'Mobile Engineer.'}
            {activePersona === 'qa' && 'QA Specialist.'}
            {activePersona === 'data' && 'Data Engineer.'}
            {activePersona === 'automation' && 'DevOps Engineer.'}
            {activePersona === 'ai' && 'AI Enthusiast.'}
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {activePersona === 'backend' 
            ? 'Arquitetura limpa, microsserviços e performance extrema. Transformo requisitos complexos em código escalável.'
            : activePersona === 'ux-ui'
            ? 'Crio interfaces que contam histórias. Foco em experiência do usuário, acessibilidade e design systems pixel-perfect.'
            : 'Desenvolvedor apaixonado por criar ecossistemas digitais completos. Do pixel ao banco de dados, construo soluções que resolvem problemas reais.'
          }
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary/25"
          >
            Ver Projetos <ArrowRight size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-border bg-background hover:bg-accent rounded-lg font-medium flex items-center gap-2"
          >
            Download CV <Download size={18} />
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements based on Persona */}
      {activePersona === 'fullstack' && (
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[500px] h-[500px] border-[40px] border-primary rounded-full border-dashed opacity-50" />
          <div className="absolute inset-0 border-[2px] border-black rounded-full scale-125 opacity-20" />
        </motion.div>
      )}

      {activePersona === 'ux-ui' && (
        <div className="absolute top-1/4 right-20 -z-10 pointer-events-none">
          <div className="w-32 h-32 bg-[#E85D3F] rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="w-48 h-48 bg-[#00C2FF] rounded-full blur-3xl opacity-20 -ml-10 -mt-10 animate-pulse delay-75" />
        </div>
      )}

      {activePersona === "automation" && (
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-[520px] h-[220px] rounded-3xl border border-primary/25 bg-primary/5 backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <div className="w-[440px] h-[140px] rounded-2xl border border-primary/20 border-dashed" />
          </div>
        </motion.div>
      )}

      {activePersona === "data" && (
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[520px] h-[260px] rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur" />
          <div className="absolute inset-0 flex items-end gap-3 px-10 pb-10 opacity-60">
            {[20, 38, 26, 52, 34, 58, 44].map((h, i) => (
              <motion.div
                key={i}
                className="w-8 rounded-lg bg-primary/30 border border-primary/20"
                style={{ height: `${h * 2}px` }}
                animate={{ height: [`${h * 1.6}px`, `${h * 2}px`, `${h * 1.6}px`] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {activePersona === "ai" && (
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[520px] h-[260px] rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-transparent backdrop-blur" />
          <motion.div
            className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-primary/20 blur-3xl"
            animate={{ opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
            animate={{ opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
