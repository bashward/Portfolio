"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun, Home, Briefcase, User, FolderGit2, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: User },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-[60] p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground md:hidden hover:bg-white/20 transition-colors"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav className={clsx(
                "fixed top-0 left-0 bottom-0 z-50 flex flex-col items-center backdrop-blur-md bg-white/5 dark:bg-black/5 border-r border-white/10 dark:border-white/5 transition-all duration-300 ease-in-out group overflow-hidden",
                "w-64 md:w-20 md:hover:w-64",
                "pt-20 pb-8 md:py-8", // Added top padding for mobile to clear the toggle button
                isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>
                {/* Header Section: Logo & Theme Toggle */}
                <div className="flex flex-col gap-6 w-full">
                    <Link href="/" className="flex items-center px-6 py-2 group/logo">
                        <div className="min-w-[24px] flex justify-center">
                            <span className="text-2xl font-bold tracking-tighter text-primary">N</span>
                        </div>
                        <span className={clsx(
                            "transition-opacity duration-300 -ml-0.5 text-2xl font-bold tracking-tighter text-foreground whitespace-nowrap",
                            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}>
                            ikhil Thakur
                        </span>
                    </Link>

                    <button
                        onClick={(e) => toggleTheme(e)}
                        className="flex items-center px-6 py-2 w-full hover:text-primary transition-colors group/theme hover:cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        <div className="min-w-[24px] flex justify-center">
                            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                        </div>
                        <span className={clsx(
                            "transition-opacity duration-300 ml-4 font-medium whitespace-nowrap",
                            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}>
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </span>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-4 w-full my-auto">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "relative flex items-center w-full px-6 py-3 transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-foreground/80"
                                )}
                            >
                                <div className="relative z-10 flex items-center gap-4">
                                    <Icon size={24} className="min-w-[24px]" />
                                    <span className={clsx(
                                        "transition-opacity duration-300 whitespace-nowrap font-medium",
                                        isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    )}>
                                        {link.name}
                                    </span>
                                </div>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary/10 border-r-2 border-primary"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
