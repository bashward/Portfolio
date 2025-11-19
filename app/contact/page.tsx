"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        value: "+91-9205877916",
        href: "tel:+919205877916",
        color: "text-emerald-400",
    },
    {
        icon: Mail,
        title: "Email",
        value: "nikhilt626@gmail.com",
        href: "mailto:nikhilt626@gmail.com",
        color: "text-blue-400",
    },
    {
        icon: Github,
        title: "GitHub",
        value: "github.com/bashward",
        href: "https://github.com/bashward",
        color: "text-purple-400",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "www.linkedin.com/in/nikhil-thakur-1462a223a",
        href: "https://linkedin.com/in/nikhil-thakur-1462a223a",
        color: "text-blue-600",
    },
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

export default function Contact() {
    return (
        <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl flex flex-col gap-12"
            >
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-foreground/60 max-w-xl mx-auto"
                    >
                        Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <motion.a
                                key={method.title}
                                variants={item}
                                href={method.href}
                                target={method.title === "Phone" || method.title === "Email" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="glass-panel p-6 flex items-center gap-6 group hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${method.color}`}>
                                    <Icon size={32} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-medium text-foreground/80 mb-1">{method.title}</h3>
                                    <p className="text-xl font-semibold text-foreground truncate">{method.value}</p>
                                </div>
                                <ExternalLink size={20} className="text-foreground/40 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </motion.div>
        </main>
    );
}
