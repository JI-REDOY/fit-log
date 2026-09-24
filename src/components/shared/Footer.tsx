import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">

            <div className="container-fitlog flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">

                {/* Left — Brand */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                    />
                    <span className="font-heading text-base font-bold tracking-wider text-white">
                        FIT<span className="text-accent">LOG</span>
                    </span>
                </div>

                {/* Right — Copyright */}
                <p className="text-center text-xs text-[var(--text-secondary)] sm:text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;