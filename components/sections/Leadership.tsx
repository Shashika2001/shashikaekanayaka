"use client";

import { motion } from "framer-motion";
import { Crown, Award, Presentation, Cloud, Network, Shield } from "lucide-react";
import { leadership, certifications } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  crown: Crown,
  award: Award,
  presentation: Presentation,
  cloud: Cloud,
  network: Network,
  shield: Shield,
};

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Leadership & Certifications</span>
          </h2>
          <p className="section-subtitle">
            Leading initiatives and continuously expanding expertise through professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leadership Section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Crown className="w-6 h-6 text-primary-light" />
              Leadership Roles
            </motion.h3>

            <div className="space-y-4">
              {leadership.map((role, index) => {
                const IconComponent = iconMap[role.icon] || Award;
                return (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-5 group">
                      <div className="flex gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                          <IconComponent className="w-6 h-6 text-primary-light" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-base group-hover:text-primary-light transition-colors">
                              {role.title}
                            </h4>
                            <span className="text-xs text-foreground/50 bg-white/5 px-2 py-1 rounded-md">
                              {role.period}
                            </span>
                          </div>
                          <p className="text-sm text-primary-light/80 mb-2">
                            {role.organization}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-6 h-6 text-accent" />
              Professional Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon] || Award;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-5 group">
                      <div className="flex gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-accent/30 group-hover:to-secondary/30 transition-all">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-base group-hover:text-accent transition-colors">
                              {cert.title}
                            </h4>
                            <span className="text-xs text-foreground/50 bg-white/5 px-2 py-1 rounded-md">
                              {cert.year}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/60">
                            Issued by {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievement badges */}
            <motion.div
              className="mt-8 p-5 glass rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-sm font-medium text-foreground/80 mb-4">Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cloud Architecture",
                  "Network Security",
                  "DevOps",
                  "Community Leadership",
                  "Technical Workshops",
                  "Student Advocacy",
                ].map((badge, index) => (
                  <motion.span
                    key={badge}
                    className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground/80"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
