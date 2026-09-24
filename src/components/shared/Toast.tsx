"use client";

import React, { useContext } from "react";
import { ToastContexts } from "@/context/ToastContext";

const Toast = () => {
    const context = useContext(ToastContexts);

    if (!context || !context.message) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-2">

            <div className="flex items-center gap-3 rounded-lg border border-[var(--accent)]/40 bg-[var(--bg-card)] px-5 py-3.5 shadow-xl">

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5 text-black"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>

                </div>

                <span className="text-sm font-medium text-white">
                    {context.message}
                </span>

            </div>

        </div>
    );
};

export default Toast;