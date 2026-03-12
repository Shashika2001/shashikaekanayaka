"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Building real-world applications and gaining hands-on engineering experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                  <div className="relative w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background" />
                </div>

                {/* Card */}
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <GlassCard className="p-6 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary-light rounded-full mb-3">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold group-hover:text-primary-light transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-foreground/60">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/50">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 mb-4 text-sm">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {exp.achievements.slice(0, 4).map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/60"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <TechBadge key={tech} name={tech} delay={i * 0.05} />
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Empty space for timeline alignment on larger screens */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
