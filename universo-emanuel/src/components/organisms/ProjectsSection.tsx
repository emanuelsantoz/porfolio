"use client";

import { motion } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "GymApp",
    desc: "Aplicativo de desenvolvimento pessoal e fitness.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/emanuelsantoz/GymApp",
    type: "mobile"
  },
  {
    id: 2,
    title: "Voz Feminina",
    desc: "App social focado no empoderamento feminino.",
    tech: ["Figma", "UI/UX", "Mobile Design"],
    link: "https://portifolio-emanuelsantos.vercel.app/",
    type: "ux-ui"
  },
  {
    id: 3,
    title: "Barracred Sistema",
    desc: "Sistema interno de gestão financeira corporativa.",
    tech: [".NET", "C#", "SQL Server", "Angular"],
    link: "#",
    type: "fullstack"
  }
];

export function ProjectsSection() {
  const { activePersona } = usePersonaStore();

  return (
    <section className="py-24 container mx-auto px-4 md:px-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            {activePersona === 'backend' ? './projects' : 'Portfólio'}
          </span>
          <h2 className="text-4xl font-bold">Projetos Recentes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex gap-2 mb-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-mono border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">
                  {project.desc}
                </p>
                
                <div className="flex gap-4 pt-4 mt-auto border-t border-border/50">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
