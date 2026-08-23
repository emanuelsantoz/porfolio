"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Bug as BugIcon } from "lucide-react";

export function QaBug() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCaught, setIsCaught] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Initial random position only on client side to avoid hydration mismatch
    controls.set({
      x: Math.random() * (window.innerWidth - 50),
      y: Math.random() * (window.innerHeight - 50),
    });
  }, [controls]);

  const runAway = () => {
    if (isCaught) return;
    
    controls.start({
      x: Math.random() * (window.innerWidth - 50),
      y: Math.random() * (window.innerHeight - 50),
      rotate: Math.random() * 360,
    });
  };

  return (
    <motion.div
      animate={controls}
      className="fixed z-50 cursor-pointer"
      onMouseEnter={runAway}
      onClick={() => {
        setIsCaught(true);
        alert("🐛 BUG CAPTURADO! Você tem instinto de QA.");
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`p-2 rounded-full ${isCaught ? 'bg-green-500' : 'bg-red-500'} text-white shadow-lg`}>
        <BugIcon size={24} />
      </div>
    </motion.div>
  );
}
