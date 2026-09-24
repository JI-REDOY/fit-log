"use client";

import React from "react";

type PlanTabsProps = {
    activeTab: "plan" | "saved";
    onChangeTab: (tab: "plan" | "saved") => void;
};

const PlanTabs = ({ activeTab, onChangeTab }: PlanTabsProps) => {
    return (
        <div className="inline-flex items-center gap-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] p-1">

            <button
                type="button"
                onClick={() => onChangeTab("plan")}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    activeTab === "plan"
                        ? "bg-[var(--bg-secondary)] text-white"
                        : "text-[var(--text-secondary)] hover:text-white"
                }`}
            >
                Today's Plan
            </button>

            <button
                type="button"
                onClick={() => onChangeTab("saved")}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    activeTab === "saved"
                        ? "bg-[var(--bg-secondary)] text-white"
                        : "text-[var(--text-secondary)] hover:text-white"
                }`}
            >
                Saved
            </button>

        </div>
    );
};

export default PlanTabs;