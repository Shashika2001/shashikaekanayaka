"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  delay?: number;
}

export default function TechBadge({ name, delay = 0 }: TechBadgeProps) {
  return (
    <motion.span
      className="tech-badge cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}
