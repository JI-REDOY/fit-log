"use client";

import React from "react";

export type SortOption = "duration" | "calories" | "rating";
export type SortOrder = "asc" | "desc";

type SortDropdownProps = {
    value: SortOption;
    order: SortOrder;
    onChange: (value: SortOption) => void;
    onOrderChange: (order: SortOrder) => void;
};

const SortDropdown = ({
    value,
    order,
    onChange,
    onOrderChange,
}: SortDropdownProps) => {
    const toggleOrder = () => {
        onOrderChange(order === "asc" ? "desc" : "asc");
    };

    return (
        <div className="flex items-center gap-2">

            <span className="text-xs text-[var(--text-secondary)] sm:text-sm">
                Sort By
            </span>

            <div className="flex items-center overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]">

                <div className="relative">

                    <select
                        value={value}
                        onChange={(e) => onChange(e.target.value as SortOption)}
                        className="cursor-pointer appearance-none bg-transparent py-2 pl-4 pr-9 text-xs font-semibold text-white focus:outline-none sm:text-sm"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-secondary)]"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>

                </div>

                <button
                    type="button"
                    onClick={toggleOrder}
                    aria-label="Toggle sort order"
                    className="flex h-9 w-9 items-center justify-center border-l border-[var(--border-color)] text-[var(--text-secondary)] transition-colors hover:text-accent"
                >
                    {order === "asc" ? (
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
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                        </svg>
                    ) : (
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
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                        </svg>
                    )}
                </button>

            </div>

        </div>
    );
};

export default SortDropdown;