"use client";

import { ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: boolean;
  spotlight?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "rgba(34, 197, 94, 0.3)",
  hoverScale = true,
  spotlight = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Handle mouse move for spotlight
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlight) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}, transparent 40%)`
  );

  return (
    <motion.div
      ref={cardRef}
      className={`glass-card relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight overlay */}
      {spotlight && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBackground }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none">
        <div className="absolute inset-[-1px] rounded-[inherit] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
