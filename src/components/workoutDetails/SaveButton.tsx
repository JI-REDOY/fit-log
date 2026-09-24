"use client";

import React, { useContext } from "react";
import { Workout } from "@/types/workout.types";
import { FitLogContexts } from "@/context/FitLogContext";
import { ToastContexts } from "@/context/ToastContext";

const SaveButton = ({ workout }: { workout: Workout }) => {
    const context = useContext(FitLogContexts);
    const toastContext = useContext(ToastContexts);

    if (!context || !toastContext) {
        throw new Error("SaveButton must be used inside providers");
    }

    const { saved, setSaved } = context;
    const { showToast } = toastContext;

    const alreadySaved = saved.some((item) => item.id === workout.id);

    const handleSave = () => {
        if (alreadySaved) {
            showToast("Already saved for later");
            return;
        }

        setSaved([...saved, workout]);
        showToast("Saved for later");
    };

    return (
        <button
            type="button"
            onClick={handleSave}
            disabled={alreadySaved}
            className={`inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-bold transition-colors ${
                alreadySaved
                    ? "cursor-not-allowed border-[var(--border-color)] text-[var(--text-muted)]"
                    : "border-[var(--border-color)] text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
            >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            <span>{alreadySaved ? "Saved" : "Save for later"}</span>
        </button>
    );
};

export default SaveButton;