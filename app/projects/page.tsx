"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "AskPip",
        description: "An AI-powered how-to guide platform with interactive chat support.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Clerk", "Supabase", "Zustand", "Zod"],
        link: "https://ask-pip.vercel.app/",
        github: "https://github.com/bashward/AskPip",
    },
    {
        title: "ChatVerse",
        description: "Threads-first real-time chat with ephemeral “Pop-Up Rooms” and optional AI recaps",
        tags: ["Next.js", "Tailwind CSS", "Supabase"],
        link: "#",
        github: "https://github.com/bashward/ChatVerse",
    },
    {
        title: "ClipNotes",
        description: "Convert youtube videos into Notes, Cheatsheets and more.",
        tags: ["Next.js", "Fastify", "Zod", "Firebase", "MongoDB", "Tailwind CSS"],
        link: "https://clip-notes-three.vercel.app/",
        github: "https://github.com/bashward/ClipNotes",
    },
    {
        title: "Unified Box",
        description: "A full-stack app for team-based customer engagement.",
        tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Better Auth", "Pusher", "Twilio", "Zod"],
        link: "#",
        github: "https://github.com/bashward/Unified-Box",
    },
    {
        title: "TubeControl",
        description: "A real-time remote control system for YouTube that frees you from your keyboard.",
        tags: ["Next.js", "Socket.io", "Node.js", "Express"],
        link: "https://tube-control-web.vercel.app/",
        github: "https://github.com/bashward/TubeControl",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <main className="min-h-screen p-6 pt-24 md:p-12 md:pt-32 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Featured Projects
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl">
                    A collection of projects that demonstrate my skills in full-stack development, UI/UX design, and creative coding.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-panel p-6 flex flex-col h-full group hover:border-primary/50 transition-colors"
                    >
                        <div className="mb-4 flex justify-between items-start">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-2">
                                <Link
                                    href={project.github}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-foreground/70 hover:text-foreground"
                                >
                                    <Github size={20} />
                                </Link>
                                <Link
                                    href={project.link}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-foreground/70 hover:text-foreground"
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                        </div>

                        <p className="text-foreground/70 mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
