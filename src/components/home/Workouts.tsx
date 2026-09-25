import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { Workout } from "@/types/workout.types";

const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    if (res.ok) {
        const data: Workout[] = await res.json();
        return data;
    }
    return [];
};

const Workouts = async () => {
    const workoutsData = await getWorkouts();

    return (
        <section id="library" className="container-fitlog py-12 sm:py-16">

            <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
                    THE LIBRARY
                </h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {workoutsData.map((workout: Workout) => {
                    return <WorkoutCard key={workout.id} workout={workout} />;
                })}

            </div>

        </section>
    );
};

export default Workouts;