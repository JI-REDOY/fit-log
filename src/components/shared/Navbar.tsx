"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { FitLogContexts } from "@/context/FitLogContext";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const context = useContext(FitLogContexts);
    const planCount = context?.plan.length ?? 0;
    const savedCount = context?.saved.length ?? 0;

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur">
            <div className="container-fitlog flex h-16 items-center justify-between">

                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="FitLog"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                        />
                        <span className="font-heading text-xl font-bold tracking-wider text-white sm:text-2xl">
                            FIT<span className="text-accent">LOG</span>
                        </span>
                    </Link>
                </div>

                <div className="hidden items-center gap-2 lg:flex">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive("/")
                                ? "bg-accent/15 text-accent"
                                : "text-[var(--text-secondary)] hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive("/my-plan")
                                ? "bg-accent/15 text-accent"
                                : "text-[var(--text-secondary)] hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>

                <div className="hidden items-center gap-6 lg:flex">
                    <Link href="/my-plan" className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">Plan</span>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-black transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                            {mounted ? planCount : 0}
                        </span>
                    </Link>

                    <Link href="/my-plan?tab=saved" className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">Saved</span>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full border border-[var(--text-secondary)] text-xs font-bold text-white transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                            {mounted ? savedCount : 0}
                        </span>
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border-color)] text-white"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] lg:hidden">
                    <ul className="container-fitlog flex flex-col gap-4 py-4">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive("/")
                                        ? "bg-accent/15 text-accent"
                                        : "text-[var(--text-secondary)]"
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive("/my-plan")
                                        ? "bg-accent/15 text-accent"
                                        : "text-[var(--text-secondary)]"
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>

                        <div className="my-2 border-t border-[var(--border-color)]"></div>

                        <li className="flex items-center gap-6">
                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm font-medium text-white">Plan</span>
                                <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-black transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                                    {mounted ? planCount : 0}
                                </span>
                            </Link>

                            <Link
                                href="/my-plan?tab=saved"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm font-medium text-white">Saved</span>
                                <span className={`flex h-6 w-6 items-center justify-center rounded-full border border-[var(--text-secondary)] text-xs font-bold text-white transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                                    {mounted ? savedCount : 0}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;