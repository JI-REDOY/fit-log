import React from "react";
import Link from "next/link";

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-[var(--border-color)] bg-transparent px-6 py-16 text-center sm:py-20">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-[var(--border-color)] bg-transparent">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-[var(--text-muted)]"
                >
                    <path d="M6.5 6.5h11v11h-11z" />
                    <path d="M3 9h3M3 15h3M18 9h3M18 15h3" />
                </svg>

            </div>

            {/* Title */}
            <h3 className="font-heading text-xl font-bold uppercase text-white sm:text-2xl">
                NOTHING HERE YET
            </h3>

            {/* Subtitle */}
            <p className="max-w-md text-sm text-[var(--text-secondary)]">
                Browse the library and add a lift to get today moving.
            </p>

            {/* CTA Button */}
            <Link
                href="/"
                className="mt-2 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyState;