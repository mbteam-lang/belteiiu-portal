import React from "react";
import { motion } from "framer-motion";

export default function AnimatedGradientText({
  children,
  className = "",
  colors,
  duration = 6,
}) {
  return (
    <motion.span
      className={`block bg-gradient-to-r ${colors} bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}