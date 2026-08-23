"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePersonaStore } from "@/core/store/personaStore";
import { Award, Briefcase, Gauge, GraduationCap, Home, Mail, Menu, User, Wrench, X } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: "home", label: "Início", icon: Home, href: "/" },
  { id: "about", label: "Sobre", icon: User, href: "/#about" },
  { id: "projects", label: "Projetos", icon: Briefcase, href: "/#projects" },
  { id: "webkits", label: "Webkits", icon: Wrench, href: "/webkits" },
  { id: "study-dev", label: "Study Dev", icon: GraduationCap, href: "/study-dev" },
  { id: "badges", label: "Badges", icon: Award, href: "/badges" },
  { id: "contact", label: "Contato", icon: Mail, href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activePersona, isPerformanceMode, togglePerformanceMode } = usePersonaStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-bold text-xl tracking-tighter"
        >
          {activePersona === 'backend' ? (
            <span className="font-mono text-primary">&lt;Emanuel.dev /&gt;</span>
          ) : activePersona === 'ux-ui' ? (
            <span className="font-serif italic text-2xl">Emanuel Santos</span>
          ) : (
            <span>Universo<span className="text-primary">.Emanuel</span></span>
          )}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {activePersona === "backend" ? `/${item.id}` : item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}

          <button
            onClick={() => togglePerformanceMode()}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              isPerformanceMode ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
            }`}
          >
            <Gauge size={16} />
            {isPerformanceMode ? "Performance" : "Normal"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 hover:bg-accent rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-lg font-medium flex items-center gap-4 p-2 hover:bg-accent rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} className="text-primary" />
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  togglePerformanceMode();
                  setIsOpen(false);
                }}
                className={`text-lg font-medium flex items-center gap-4 p-2 rounded-lg border transition-colors ${
                  isPerformanceMode ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
                }`}
              >
                <Gauge size={20} className={isPerformanceMode ? "" : "text-primary"} />
                {isPerformanceMode ? "Modo Performance" : "Modo Normal"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
