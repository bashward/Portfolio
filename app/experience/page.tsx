"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "NNM Pvt. Ltd.",
        role: "Full Stack Engineer",
        period: "2024 - 2025",
        description: "Built a web app to track multi-stage workflows for multiple categories of products reducing manual data entry; implemented role-based dashboards, process timelines, and audit trails using Next.js, Node.js, and PostgreSQL/Supabase. Developed and maintained a marketing site on Next.js/Vercel with image optimization, structured metadata/schema, and SSR best practices for performance and SEO boosting reach by over 40 percent.",
        skills: ["React", "Node.js", "AWS", "Docker", "Next.js", "PostgreSQL", "MongoDB", "Supabase", "Redis", "Zod"],
    },
];

export default function Experience() {
    return (
        <main className="min-h-screen p-6 pt-24 md:p-12 md:pt-32 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Work Experience
                </h1>
                <p className="text-lg text-foreground/70">
                    My professional journey and the value I've delivered along the way.
                </p>
            </motion.div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                        <div className="glass-panel p-6 md:p-8 hover:border-primary/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-foreground/80 font-medium">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/60 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-foreground/70 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
