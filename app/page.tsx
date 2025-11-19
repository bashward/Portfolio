"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 md:p-12 max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
          >
            Full-Stack Developer with primary experience in React/Next.js and Node.js/PostgreSQL, shipping production
            web apps with clean architecture, strict validation, and pragmatic CI/CD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 overflow-hidden transition-all hover:scale-105 hover:shadow-primary/40 w-full sm:w-auto flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Gradient Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/experience"
              className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-bold text-lg transition-all hover:scale-105 hover:bg-white/10 hover:border-white/20 w-full sm:w-auto flex justify-center items-center"
            >
              <span className="group-hover:text-primary transition-colors">Experience</span>
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 order-1 md:order-2"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-20 animate-pulse" />
          <Image
            src="/image.png"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full border-4 border-white/10 shadow-2xl shadow-primary/20"
            priority
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
