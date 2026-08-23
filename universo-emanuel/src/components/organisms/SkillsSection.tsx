"use client";

import { motion } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Cloud,
  Terminal,
  TestTube,
  Workflow,
  Brain
} from "lucide-react";

const skillCategories = {
  fullstack: {
    title: "Tech Stack",
    icon: Code,
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "React/Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
    ]
  },
  frontend: {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Figma", level: 75 },
      { name: "Framer Motion", level: 80 },
    ]
  },
  backend: {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "Go", level: 70 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
      { name: "GraphQL", level: 80 },
    ]
  },
  mobile: {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "iOS/Swift", level: 65 },
      { name: "Android/Kotlin", level: 60 },
    ]
  },
  data: {
    title: "Data Engineering",
    icon: Database,
    skills: [
      { name: "SQL", level: 90 },
      { name: "Python", level: 85 },
      { name: "Apache Spark", level: 70 },
      { name: "AWS Glue", level: 75 },
      { name: "Snowflake", level: 80 },
      { name: "dbt", level: 72 },
    ]
  },
  devops: {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 85 },
      { name: "Terraform", level: 70 },
      { name: "CI/CD", level: 88 },
      { name: "Linux", level: 82 },
    ]
  },
  qa: {
    title: "QA & Testing",
    icon: TestTube,
    skills: [
      { name: "Cypress", level: 90 },
      { name: "Playwright", level: 85 },
      { name: "Jest", level: 88 },
      { name: "Selenium", level: 80 },
      { name: "JUnit", level: 75 },
      { name: "API Testing", level: 85 },
    ]
  },
  automation: {
    title: "Automation",
    icon: Workflow,
    skills: [
      { name: "Python", level: 92 },
      { name: "Selenium", level: 88 },
      { name: "Playwright", level: 85 },
      { name: "Robot Framework", level: 80 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 82 },
    ]
  },
  ai: {
    title: "AI & LLMs",
    icon: Brain,
    skills: [
      { name: "Python", level: 90 },
      { name: "LangChain", level: 80 },
      { name: "OpenAI API", level: 85 },
      { name: "Hugging Face", level: 75 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Vector DBs", level: 72 },
    ]
  },
};

const personaToCategory: Record<string, keyof typeof skillCategories> = {
  fullstack: "fullstack",
  backend: "backend",
  "ux-ui": "frontend",
  mobile: "mobile",
  qa: "qa",
  automation: "automation",
  data: "data",
  ai: "ai",
};

export function SkillsSection() {
  const { activePersona } = usePersonaStore();
  const categoryKey = personaToCategory[activePersona] || "fullstack";
  const category = skillCategories[categoryKey];
  const Icon = category.icon;

  return (
    <section className="py-24 container mx-auto px-4 md:px-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-primary font-mono text-sm uppercase tracking-wider flex items-center gap-2">
            <Icon size={16} />
            {activePersona === 'backend' ? 'SELECT * FROM skills' : 'Habilidades'}
          </span>
          <h2 className="text-4xl font-bold">{category.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="pt-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code size={18} />
            Ferramentas & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {activePersona === 'fullstack' && [
              "VS Code", "Git", "Docker Desktop", "Postman", "Figma",
              "pgAdmin", "Redis", "MongoDB Compass", "AWS Console", "Vercel"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'backend' && [
              "Linux", "Git", "Docker", "Kubernetes", "Postman",
              "pgAdmin", "Redis CLI", "AWS CLI", "Grafana", "Prometheus"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'ux-ui' && [
              "Figma", "Adobe XD", "Sketch", "Zeplin", "InVision",
              "Principle", "Lottie", "Adobe Illustrator", "Photoshop", " Miro"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'mobile' && [
              "Flutter", "Dart", "Android Studio", "Xcode", "Firebase Console",
              "CocoaPods", "Fastlane", "App Store Connect", "Play Console", "Codemagic"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'qa' && [
              "Cypress", "Playwright", "Jest", "Postman", "Jira",
              "TestRail", "Browser DevTools", "Docker", "Git", "VS Code"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'automation' && [
              "Python", "Selenium", "Playwright", "Robot Framework", "Jenkins",
              "GitHub Actions", "Docker", "Linux", "Bash", "AWS"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'data' && [
              "SQL Server", "PostgreSQL", "Python", "Jupyter", "dbt",
              "Snowflake", "AWS Glue", "Tableau", "Power BI", "Apache Airflow"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
            {activePersona === 'ai' && [
              "OpenAI", "LangChain", "Hugging Face", "Python", "Pinecone",
              "Chroma DB", "Streamlit", "FastAPI", "Jupyter", "Claude API"
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}