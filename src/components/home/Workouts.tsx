import React from "react";
import WorkoutGrid from "./WorkoutGrid";
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
            <WorkoutGrid workouts={workoutsData} />
        </section>
    );
};

export default Workouts;