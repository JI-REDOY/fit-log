import React from "react";
import { Workout } from "@/types/workout.types";

const WorkoutSpecs = ({ workout }: { workout: Workout }) => {
    const specs = [
        { label: "Equipment", value: workout.equipment },
        { label: "Difficulty", value: workout.difficulty },
        { label: "Sets", value: workout.sets },
        { label: "Reps", value: workout.reps },
        { label: "Duration", value: `${workout.duration} min` },
        { label: "Calories", value: `${workout.caloriesBurned} kcal` },
        { label: "Rating", value: workout.rating },
    ];

    return (
        <div className="flex flex-col gap-7">

            {/* Key Specs */}
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-2 sm:px-6">

                {specs.map((spec) => {
                    return (
                        <div
                            key={spec.label}
                            className="flex items-center justify-between border-b border-[var(--border-color)] py-3.5 last:border-b-0"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                                {spec.label}
                            </span>
                            <span className="text-sm font-semibold text-white">
                                {spec.value}
                            </span>
                        </div>
                    );
                })}

            </div>

            {/* Instructions */}
            <div className="flex flex-col gap-4">

                <h2 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                    INSTRUCTIONS
                </h2>

                <ol className="flex flex-col gap-3.5">

                    {workout.instructions.map((step, index) => {
                        return (
                            <li
                                key={index}
                                className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                            >
                                <span className="shrink-0 font-semibold text-white">
                                    {index + 1}.
                                </span>
                                <span>{step}</span>
                            </li>
                        );
                    })}

                </ol>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">

                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
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
                    <span>Add to today's plan</span>
                </button>

                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
                    <span>Save for later</span>
                </button>

            </div>

        </div>
    );
};

export default WorkoutSpecs;