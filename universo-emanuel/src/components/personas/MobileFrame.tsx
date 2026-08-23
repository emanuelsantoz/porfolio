"use client";

import { motion } from "framer-motion";

export function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gray-900 overflow-hidden">
      <motion.div
        layoutId="mobile-frame"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="relative w-full max-w-[375px] h-[80vh] max-h-[812px] bg-background rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-gray-800 flex flex-col"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-end pb-1.5 pointer-events-none">
          <div className="w-16 h-4 bg-gray-800 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="flex-1 w-full bg-background overflow-y-auto scrollbar-hide pt-10 pb-8 px-4">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-500 rounded-full z-50 pointer-events-none" />
      </motion.div>
    </div>
  );
}
