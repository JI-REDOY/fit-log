"use client";

import React, { useState } from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { Workout } from "@/types/workout.types";

type WorkoutGridProps = {
    workouts: Workout[];
};

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
    const [search, setSearch] = useState("");

    const query = search.toLowerCase().trim();

    const filtered = workouts.filter((workout) => {
        if (!query) return true;

        const nameMatch = workout.name.toLowerCase().includes(query);
        const groupMatch = workout.muscleGroups.some((group) =>
            group.toLowerCase().includes(query)
        );

        return nameMatch || groupMatch;
    });

    return (
        <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                <div>
                    <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
                        THE LIBRARY
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="relative w-full sm:w-72">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search workouts..."
                        className="w-full rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                    />
                </div>

            </div>

            {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-[var(--border-color)] px-6 py-12 text-center">
                    <p className="text-sm text-[var(--text-secondary)]">
                        No workouts match your search.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((workout) => {
                        return <WorkoutCard key={workout.id} workout={workout} />;
                    })}
                </div>
            )}

        </div>
    );
};

export default WorkoutGrid;