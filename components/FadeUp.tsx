"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
};

export default function FadeUp({ children }: FadeUpProps) {
  return (
    <motion.div
      className="fade-up-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.05,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}