import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <section className="container-fitlog flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">

            <p className="font-heading text-6xl font-bold text-accent sm:text-7xl lg:text-8xl">
                404
            </p>

            <h1 className="font-heading mt-4 text-2xl font-bold uppercase text-white sm:text-3xl lg:text-4xl">
                PAGE NOT FOUND
            </h1>

            <p className="mt-3 max-w-md text-sm text-[var(--text-secondary)] sm:text-base">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Back to Home</span>
            </Link>

        </section>
    );
};

export default NotFound;