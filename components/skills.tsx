"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "NestJS", "PostgreSQL", "Redis", "Tailwind CSS", "Prisma",
  "REST API", "JWT", "Framer Motion", "Radix UI", "Zod"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          Technologies I work with to build modern, scalable applications
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.03, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
