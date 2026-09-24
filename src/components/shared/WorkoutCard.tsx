import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Workout } from "@/types/workout.types";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="card-dark group block overflow-hidden"
        >

            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)]">

                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-4">

                {/* Category Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {workout.muscleGroups.map((group) => {
                        return (
                            <span
                                key={group}
                                className="rounded-sm bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black"
                            >
                                {group}
                            </span>
                        );
                    })}
                </div>

                {/* Workout Name */}
                <h3 className="font-heading text-lg font-bold uppercase text-white transition-colors duration-300 group-hover:text-accent">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="text-xs text-[var(--text-secondary)]">
                    {workout.equipment}
                </p>

                {/* Stats Row */}
                <div className="mt-1 flex items-center justify-between border-t border-[var(--border-color)] pt-3 text-xs text-[var(--text-secondary)]">

                    <div className="flex items-center gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
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
                            className="h-3.5 w-3.5"
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
                            className="h-3.5 w-3.5"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>{workout.rating}</span>
                    </div>

                </div>

            </div>

        </Link>
    );
};

export default WorkoutCard;