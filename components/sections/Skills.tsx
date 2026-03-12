"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import SkillBar from "@/components/ui/SkillBar";

export default function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <SectionWrapper id="skills" className="relative">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-1">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Skills cloud for visual impact */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold mb-8 text-foreground/80">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Java", "JavaScript", "TypeScript", "Python", "React", "React Native",
              "Spring Boot", "Node.js", "Express", "Next.js", "PostgreSQL", "MongoDB",
              "Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "Nginx",
              "Git", "REST APIs", "GraphQL", "Microservices", "CI/CD", "Linux"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-xl glass text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
