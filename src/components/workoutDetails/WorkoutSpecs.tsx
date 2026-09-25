import React from "react";
import { Workout } from "@/types/workout.types";
import AddToPlanButton from "./AddToPlanButton";
import SaveButton from "./SaveButton";

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

            <div className="flex flex-wrap items-center gap-3">
                <AddToPlanButton workout={workout} />
                <SaveButton workout={workout} />
            </div>

        </div>
    );
};

export default WorkoutSpecs;