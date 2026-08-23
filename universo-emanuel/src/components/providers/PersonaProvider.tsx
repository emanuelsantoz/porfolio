"use client";

import { useEffect } from "react";
import { usePersonaStore } from "@/core/store/personaStore";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const BackendTerminal = dynamic(
  () => import("../personas/BackendTerminal").then((m) => m.BackendTerminal),
  { ssr: false },
);
const UxGrid = dynamic(() => import("../personas/UxGrid").then((m) => m.UxGrid), {
  ssr: false,
});
const MobileFrame = dynamic(
  () => import("../personas/MobileFrame").then((m) => m.MobileFrame),
  { ssr: false },
);
const QaBug = dynamic(() => import("../personas/QaBug").then((m) => m.QaBug), {
  ssr: false,
});
const AutomationPipeline = dynamic(
  () => import("../personas/AutomationPipeline").then((m) => m.AutomationPipeline),
  { ssr: false },
);
const DataStream = dynamic(() => import("../personas/DataStream").then((m) => m.DataStream), {
  ssr: false,
});
const AiNeural = dynamic(() => import("../personas/AiNeural").then((m) => m.AiNeural), {
  ssr: false,
});

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const activePersona = usePersonaStore((state) => state.activePersona);
  const isPerformanceMode = usePersonaStore((state) => state.isPerformanceMode);

  useEffect(() => {
    // Apply theme to body
    const theme = activePersona === 'fullstack' ? 'default' : activePersona;
    document.body.setAttribute('data-theme', theme);
  }, [activePersona]);

  // Handle Mobile Persona Transitions
  if (activePersona === 'mobile') {
    return (
      <>
        <motion.div 
          className="fixed inset-0 bg-gray-900 -z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key="mobile-layout"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <MobileFrame>{children}</MobileFrame>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Backgrounds */}
      <AnimatePresence mode="wait">
        {!isPerformanceMode && activePersona === 'backend' && (
          <motion.div
            key="backend-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-0"
          >
            <BackendTerminal />
          </motion.div>
        )}
        {!isPerformanceMode && activePersona === 'ux-ui' && (
          <motion.div
            key="ux-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-0"
          >
            <UxGrid />
          </motion.div>
        )}
        {!isPerformanceMode && activePersona === 'qa' && (
           <QaBug />
        )}
        {!isPerformanceMode && activePersona === "automation" && (
          <motion.div
            key="automation-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-0"
          >
            <AutomationPipeline />
          </motion.div>
        )}
        {!isPerformanceMode && activePersona === "data" && (
          <motion.div
            key="data-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-0"
          >
            <DataStream />
          </motion.div>
        )}
        {!isPerformanceMode && activePersona === "ai" && (
          <motion.div
            key="ai-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-0"
          >
            <AiNeural />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="min-h-screen flex flex-col relative z-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
