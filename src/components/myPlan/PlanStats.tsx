"use client";

import React, { useContext } from "react";
import { FitLogContexts } from "@/context/FitLogContext";

const PlanStats = () => {
    const context = useContext(FitLogContexts);

    if (!context) {
        return null;
    }

    const { plan } = context;

    const totalExercises = plan.length;
    const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
    const totalCalories = plan.reduce((sum, item) => sum + item.caloriesBurned, 0);

    const stats = [
        { label: "Exercises", value: totalExercises },
        { label: "Minutes", value: totalMinutes },
        { label: "Calories", value: totalCalories },
    ];

    return (
        <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-4">

            {stats.map((stat) => {
                return (
                    <div
                        key={stat.label}
                        className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-5 text-center sm:px-6 sm:py-6"
                    >
                        <p className="font-heading text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] sm:text-sm">
                            {stat.label}
                        </p>
                    </div>
                );
            })}

        </div>
    );
};

export default PlanStats;