"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout.types";
import { FitLogContexts } from "@/context/FitLogContext";
import { ToastContexts } from "@/context/ToastContext";

type PlanCardProps = {
    workout: Workout;
    variant: "plan" | "saved";
};

const PlanCard = ({ workout, variant }: PlanCardProps) => {
    const context = useContext(FitLogContexts);
    const toastContext = useContext(ToastContexts);

    if (!context || !toastContext) {
        return null;
    }

    const { plan, setPlan, saved, setSaved } = context;
    const { showToast } = toastContext;

    const alreadyInPlan = plan.some((item) => item.id === workout.id);
    const isPlanFull = plan.length >= 5;

    const handleMarkAsDone = () => {
        setPlan(plan.filter((item) => item.id !== workout.id));
        showToast("Workout marked as done");
    };

    const handleAddToPlan = () => {
        if (alreadyInPlan) {
            showToast("Already in your plan");
            return;
        }

        if (isPlanFull) {
            showToast("Plan is full (max 5 workouts)");
            return;
        }

        setPlan([...plan, workout]);
        showToast("Added to today's plan");
    };

    const handleRemove = () => {
        if (variant === "plan") {
            setPlan(plan.filter((item) => item.id !== workout.id));
            showToast("Removed from plan");
        } else {
            setSaved(saved.filter((item) => item.id !== workout.id));
            showToast("Removed from saved");
        }
    };

    return (
        <div className="flex flex-col gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">

            {/* Left — Thumbnail */}
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-[var(--bg-secondary)] sm:h-24 sm:w-40">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover"
                />
            </div>

            {/* Middle — Info */}
            <div className="flex flex-1 flex-col gap-1.5">

                <h3 className="font-heading text-base font-bold uppercase text-white sm:text-lg">
                    {workout.name}
                </h3>

                <p className="text-xs text-[var(--text-secondary)]">
                    {workout.equipment}
                </p>

                <div className="mt-1 flex items-center gap-4 text-xs text-white">

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5 text-accent"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5 text-accent"
                        >
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </svg>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5 text-accent"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>{workout.rating}</span>
                    </div>

                </div>

            </div>

            {/* Right — Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:shrink-0">

                <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-[var(--border-color)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                    View Details
                </Link>

                {variant === "plan" && (
                    <button
                        type="button"
                        onClick={handleMarkAsDone}
                        className="inline-flex min-w-[140px] items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-black transition-opacity hover:opacity-90"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Mark as Done</span>
                    </button>
                )}

                {variant === "saved" && (
                    <button
                        type="button"
                        onClick={handleAddToPlan}
                        disabled={alreadyInPlan || isPlanFull}
                        className={`inline-flex min-w-[140px] items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-opacity ${
                            alreadyInPlan || isPlanFull
                                ? "cursor-not-allowed bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                                : "bg-accent text-black hover:opacity-90"
                        }`}
                    >
                        {alreadyInPlan ? (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3.5 w-3.5"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>In Plan</span>
                            </>
                        ) : isPlanFull ? (
                            <span>Plan full</span>
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3.5 w-3.5"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                <span>Add to Plan</span>
                            </>
                        )}
                    </button>
                )}

                <button
                    type="button"
                    onClick={handleRemove}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-white"
                    aria-label="Remove"
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
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

            </div>

        </div>
    );
};

export default PlanCard;