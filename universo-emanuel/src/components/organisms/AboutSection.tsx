"use client";

import { motion } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import { Calendar, MapPin, GraduationCap, Briefcase, Heart, School } from "lucide-react";

const timeline = [
  {
    year: "2024 - Presente",
    title: "Desenvolvedor Fullstack",
    company: "Projetos Freelance & Pessoais",
    description: "Desenvolvendo soluções completas para clientes diversos. Foco em microsserviços, APIs RESTful e aplicações React/Next.js."
  },
  {
    year: "2022 - 2024",
    title: "Desenvolvedor Mobile",
    company: "Vários Projetos",
    description: "Desenvolvimento de aplicativos Flutter para iOS e Android. Experiência com Firebase, APIs e design responsivo."
  },
  {
    year: "2020 - 2022",
    title: "Início da Carreira",
    company: "Estudos & Projetos",
    description: "Início da jornada em desenvolvimento de software. Foco em HTML, CSS, JavaScript e conceitos básicos de programação."
  },
];

const facts = [
  { icon: MapPin, label: "Localização", value: "Brasil" },
  { icon: Calendar, label: "Experiência", value: "4+ Anos" },
  { icon: School, label: "Formação", value: "Ciência da Computação" },
  { icon: Heart, label: "Interesses", value: "AI, UX, Mobile" },
];

export function AboutSection() {
  const { activePersona } = usePersonaStore();

  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              {activePersona === 'backend' ? './about-me' : 'Quem Sou'}
            </span>
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-xl leading-relaxed">
                  {activePersona === 'backend' ? (
                    <span className="font-mono text-green-500">
                      &gt; loading bio...<br/>
                      &gt; System.out.println(&quot;Desenvolvedor apaixonado por arquitetura de software&quot;);<br/>
                      &gt; Construindo sistemas robustos e escaláveis.
                    </span>
                  ) : activePersona === 'ux-ui' ? (
                    <span className="italic">
                      &quot;A tecnologia é uma ferramenta poderosa para criar conexões humanas significativas. Cada linha de código é uma oportunidade de impactar positivamente a vida das pessoas.&quot;
                    </span>
                  ) : (
                    <>
                     Olá! Sou <strong>Emanuel Santos</strong>, um desenvolvedor Fullstack brasileiro
                      apaixonado por criar soluções digitais que fazem a diferença.
                      <br/><br/>
                      Com mais de 4 anos de experiência no mercado, minha jornada começou
                      com curiosidade por entender como as coisas funcionam online. Hoje,
                      transformo essa curiosidade em aplicações robustas, interfaces intuitivas
                      e experiências memoráveis para usuários ao redor do mundo.
                      <br/><br/>
                      MinhaStack técnica inclui React/Next.js, Flutter, Node.js e Python,
                      mas mais importante que as ferramentas é a mindset de sempre buscar
                      a melhor solução para cada problema único.
                    </>
                  )}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {facts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                    >
                      <Icon size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{fact.label}</p>
                        <p className="text-sm font-medium">{fact.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase size={20} />
                Minha Jornada
              </h3>

              <div className="relative space-y-8 pl-8 border-l-2 border-primary/20">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary" />

                    <div className="space-y-2">
                      <span className="text-sm font-mono text-primary">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy / Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center py-12 border-t border-border"
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground">
              &quot;Código bom não é apenas aquele que funciona,
              <span className="text-primary"> é aquele que outros conseguem entender e manter.</span>&quot;
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— Minha filosofia de desenvolvimento</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
