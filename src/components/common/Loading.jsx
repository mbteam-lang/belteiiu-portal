// src/components/common/Loading.jsx

import React from "react";
import { motion } from "framer-motion";

export const Loading = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-[#181818]/80 backdrop-blur-md"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="relative flex items-center justify-center w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping opacity-30" />
            <div className="w-10 h-10 border-3 border-[#0a96a4]/20 border-t-[#0a96a4] dark:border-cyan-500/20 dark:border-t-cyan-400 rounded-full animate-spin" />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Lightweight non-blocking route / section loading state
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full py-12 flex flex-col items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="w-8 h-8 border-3 border-[#0a96a4]/20 border-t-[#0a96a4] dark:border-cyan-500/20 dark:border-t-cyan-400 rounded-full animate-spin" />
      </div>
    </motion.div>
  );
};

export default Loading;