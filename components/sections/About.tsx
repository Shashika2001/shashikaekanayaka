"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern frameworks like React, Spring Boot, and Node.js",
    },
    {
      icon: Server,
      title: "Microservices Architecture",
      description: "Designing scalable, distributed systems with Docker containerization and API-first approach",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines, cloud deployments on AWS/Azure, and infrastructure automation",
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description: "Leading student initiatives and mentoring peers in collaborative software development",
    },
  ];

  return (
    <SectionWrapper id="about" className="relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about crafting elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 relative overflow-visible">
              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50" />
                <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full" />
              </div>

              {/* Profile image placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-2xl -rotate-3" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center text-4xl font-bold text-white">
                  SE
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-primary-light mb-4">{personalInfo.title}</p>
                <p className="text-sm text-foreground/60 mb-6">{personalInfo.subtitle}</p>
                
                {/* Quick info */}
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="tech-badge">
                    📍 {personalInfo.location}
                  </span>
                  <span className="tech-badge">
                    🎓 UCSC
                  </span>
                  <span className="tech-badge">
                    💼 Open to Work
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bio and highlights */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Building the <span className="gradient-text-primary">Future</span> of Software
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                As the President of the Student Union at UCSC, I&apos;ve learned to blend 
                technical expertise with leadership and communication skills. I believe 
                in writing clean, maintainable code and building systems that scale 
                gracefully with business needs.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 h-full" hoverScale={false}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary-light" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                        <p className="text-xs text-foreground/50">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
