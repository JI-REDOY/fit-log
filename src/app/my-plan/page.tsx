"use client";

import React, { useContext, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FitLogContexts } from "@/context/FitLogContext";
import PlanStats from "@/components/myPlan/PlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import PlanCard from "@/components/myPlan/PlanCard";
import EmptyState from "@/components/myPlan/EmptyState";
import SortDropdown, { SortOption, SortOrder } from "@/components/myPlan/SortDropdown";

const MyPlanContent = () => {
    const context = useContext(FitLogContexts);
    const searchParams = useSearchParams();

    const tabFromUrl = searchParams.get("tab");
    const initialTab: "plan" | "saved" = tabFromUrl === "saved" ? "saved" : "plan";

    const [activeTab, setActiveTab] = useState<"plan" | "saved">(initialTab);
    const [sortBy, setSortBy] = useState<SortOption>("duration");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [search, setSearch] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const tab = searchParams.get("tab");
        setActiveTab(tab === "saved" ? "saved" : "plan");
    }, [searchParams]);

    if (!context) {
        return null;
    }

    const { plan, saved } = context;

    const currentList = activeTab === "plan" ? plan : saved;

    const query = search.toLowerCase().trim();

    const searchedList = currentList.filter((workout) => {
        if (!query) return true;

        const nameMatch = workout.name.toLowerCase().includes(query);
        const groupMatch = workout.muscleGroups.some((group) =>
            group.toLowerCase().includes(query)
        );

        return nameMatch || groupMatch;
    });

    const sortedList = [...searchedList].sort((a, b) => {
        let diff = 0;

        if (sortBy === "duration") {
            diff = a.duration - b.duration;
        } else if (sortBy === "calories") {
            diff = a.caloriesBurned - b.caloriesBurned;
        } else {
            diff = a.rating - b.rating;
        }

        return sortOrder === "asc" ? diff : -diff;
    });

    return (
        <section className="container-fitlog py-10 sm:py-14">

            {/* Header */}
            <div className="mb-8">
                <h1 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl">
                    MY PLAN
                </h1>
                <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <PlanStats />

            {/* Tabs + Search + Sort */}
            <div className="mb-6 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:items-center">

                <div className="lg:justify-self-start">
                    <PlanTabs activeTab={activeTab} onChangeTab={setActiveTab} />
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full sm:w-64">
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
                            placeholder="Search..."
                            className="w-full rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] py-2 pl-11 pr-4 text-xs text-white placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none sm:text-sm"
                        />
                    </div>
                </div>

                <div className="flex justify-center lg:justify-self-end">
                    <SortDropdown
                        value={sortBy}
                        order={sortOrder}
                        onChange={setSortBy}
                        onOrderChange={setSortOrder}
                    />
                </div>

            </div>

            {/* Workouts list OR Empty state — only after mount */}
            {!mounted ? (
                <div className="min-h-[200px]" />
            ) : sortedList.length === 0 ? (
                query ? (
                    <div className="rounded-xl border border-dashed border-[var(--border-color)] px-6 py-12 text-center">
                        <p className="text-sm text-[var(--text-secondary)]">
                            No workouts match your search.
                        </p>
                    </div>
                ) : (
                    <EmptyState />
                )
            ) : (
                <div className="flex flex-col gap-3">
                    {sortedList.map((workout) => {
                        return (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                                variant={activeTab}
                            />
                        );
                    })}
                </div>
            )}

        </section>
    );
};

const MyPlan = () => {
    return (
        <Suspense fallback={null}>
            <MyPlanContent />
        </Suspense>
    );
};

export default MyPlan;