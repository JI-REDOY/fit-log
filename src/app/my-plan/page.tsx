"use client";

import React, { useContext, useState } from "react";
import { FitLogContexts } from "@/context/FitLogContext";
import PlanStats from "@/components/myPlan/PlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import PlanCard from "@/components/myPlan/PlanCard";
import EmptyState from "@/components/myPlan/EmptyState";
import SortDropdown, { SortOption, SortOrder } from "@/components/myPlan/SortDropdown";

const MyPlan = () => {
    const context = useContext(FitLogContexts);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<SortOption>("duration");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    if (!context) {
        return null;
    }

    const { plan, saved } = context;

    const currentList = activeTab === "plan" ? plan : saved;

    const sortedList = [...currentList].sort((a, b) => {
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

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <PlanTabs activeTab={activeTab} onChangeTab={setActiveTab} />
                <SortDropdown
                    value={sortBy}
                    order={sortOrder}
                    onChange={setSortBy}
                    onOrderChange={setSortOrder}
                />
            </div>

            {/* Workouts list OR Empty state */}
            {sortedList.length === 0 ? (
                <EmptyState />
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

export default MyPlan;