"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code that scales",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex technical challenges",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with cross-functional teams",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a <span className="text-foreground font-medium">Full Stack Developer</span> with 0-2 years of experience 
            building modern web applications. I specialize in the JavaScript/TypeScript ecosystem, with strong expertise 
            in React, Next.js, and Node.js.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey started with a curiosity for how things work on the web, and it has evolved into a passion 
            for creating seamless digital experiences. I believe in continuous learning and staying updated with 
            the latest technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border/50 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
