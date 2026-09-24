"use client";

import React, { useContext } from "react";
import { Workout } from "@/types/workout.types";
import { FitLogContexts } from "@/context/FitLogContext";
import { ToastContexts } from "@/context/ToastContext";

const AddToPlanButton = ({ workout }: { workout: Workout }) => {
    const context = useContext(FitLogContexts);
    const toastContext = useContext(ToastContexts);

    if (!context || !toastContext) {
        throw new Error("AddToPlanButton must be used inside providers");
    }

    const { plan, setPlan } = context;
    const { showToast } = toastContext;

    const alreadyInPlan = plan.some((item) => item.id === workout.id);
    const isFull = plan.length >= 5;

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            showToast("Already in your plan");
            return;
        }

        if (isFull) {
            showToast("Plan is full (max 5 workouts)");
            return;
        }

        setPlan([...plan, workout]);
        showToast("Added to today's plan");
    };

    return (
        <button
            type="button"
            onClick={handleAddToPlan}
            disabled={alreadyInPlan || isFull}
            className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-opacity ${
                alreadyInPlan || isFull
                    ? "cursor-not-allowed bg-[var(--bg-card)] text-[var(--text-muted)]"
                    : "bg-accent text-black hover:opacity-90"
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="12" y1="14" x2="12" y2="18" />
                <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
            <span>
                {alreadyInPlan
                    ? "Already in plan"
                    : isFull
                        ? "Plan full"
                        : "Add to today's plan"}
            </span>
        </button>
    );
};

export default AddToPlanButton;