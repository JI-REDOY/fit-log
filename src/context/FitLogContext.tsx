"use client";

import React, { createContext, useState, useEffect } from "react";
import { Workout } from "@/types/workout.types";

interface FitLogContextType {
    plan: Workout[];
    setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    saved: Workout[];
    setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const FitLogContexts = createContext<FitLogContextType | null>(null);

const FitLogContext = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog_plan");
        const storedSaved = localStorage.getItem("fitlog_saved");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }
        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog_plan", JSON.stringify(plan));
    }, [plan]);

    useEffect(() => {
        localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    }, [saved]);

    return (
        <FitLogContexts.Provider
            value={{
                plan,
                setPlan,
                saved,
                setSaved,
            }}
        >
            {children}
        </FitLogContexts.Provider>
    );
};

export default FitLogContext;