import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout.types";
import WorkoutSpecs from "@/components/workoutDetails/WorkoutSpecs";

const getWorkout = async (id: string): Promise<Workout | null> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    if (res.ok) {
        const data: Workout = await res.json();
        return data;
    }
    return null;
};

const WorkoutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    if (!workout) {
        return (
            <div className="container-fitlog py-20 text-center">
                <h1 className="font-heading text-3xl font-bold uppercase text-white">
                    Workout not found
                </h1>
                <Link
                    href="/"
                    className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase text-black"
                >
                    Back to Library
                </Link>
            </div>
        );
    }

    return (
        <section className="container-fitlog py-8 sm:py-12">

            <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-accent"
            >
                <span>←</span>
                <span>Back to Library</span>
            </Link>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Workout Details
                    </p>

                    <h1 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl">
                        {workout.name}
                    </h1>

                    <p className="text-sm text-[var(--text-secondary)] sm:text-base">
                        {workout.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => {
                            return (
                                <span
                                    key={group}
                                    className="rounded-sm bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black"
                                >
                                    {group}
                                </span>
                            );
                        })}
                    </div>

                    <WorkoutSpecs workout={workout} />
                </div>

            </div>

        </section>
    );
};

export default WorkoutDetails;