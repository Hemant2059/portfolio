"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";

const projects = [
  {
    title: "School Backend API",
    description:
      "RESTful API for school management with authentication, student/teacher management, attendance tracking, fees collection, timetable scheduling, and exam results. Includes Redis caching, JWT auth, and comprehensive logging.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Prisma", "JWT", "TypeScript"],
    github: "https://github.com/Hemant2059/school-management-system",
    live: null,
  },
  {
    title: "School Frontend Dashboard",
    description:
      "Admin dashboard for school management with drag-and-drop timetable, attendance management, fee collection, student profiles, and analytics. Supports Nepali date formatting and bilingual interface.",
    tags: ["Next.js", "TypeScript", "Recharts", "Dnd-Kit", "Tailwind CSS"],
    github: null,
    live: null,
  },
  {
    title: "JNTUH Results Portal",
    description:
      "Web application for checking university exam results with PDF export, Excel batch processing, and visual analytics dashboard with charts.",
    tags: ["Next.js", "TypeScript", "Recharts", "XLSX", "Radix UI"],
    github: null,
    live: "https://jntuhresultbp.vercel.app",
  },
  {
    title: "Movie Streaming App",
    description:
      "Modern movie discovery platform with curated collections, search, watchlist, and responsive design with smooth animations.",
    tags: ["Next.js", "Framer Motion", "Embla Carousel", "Radix UI"],
    github: "https://github.com/Hemant2059/movie",
    live: "https://movie-hemant.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          Projects I&apos;ve built
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
