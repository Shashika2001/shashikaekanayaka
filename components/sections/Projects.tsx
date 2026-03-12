"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight, Layers } from "lucide-react";
import { projects } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import Button from "@/components/ui/Button";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of applications built with passion and modern technologies
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "glass hover:bg-white/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <GlassCard className="p-6 h-full flex flex-col group">
                  {/* Project icon/image area */}
                  <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 h-44">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Layers className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-accent/90 text-white rounded-md">
                        Featured
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 text-xs font-medium glass rounded-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <TechBadge key={tech} name={tech} delay={i * 0.05} />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-badge">+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.github}
                        icon={Github}
                        iconPosition="left"
                        className="flex-1"
                      >
                        Code
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.live}
                        icon={ExternalLink}
                        iconPosition="left"
                        className="flex-1"
                      >
                        Demo
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/shashika"
            icon={ChevronRight}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
