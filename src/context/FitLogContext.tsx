"use client";

import React, { createContext, useState, useEffect } from "react";
import { Workout } from "@/types/workout.types";

interface FitLogContextType {
    plan: Workout[];
    setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    saved: Workout[];
    setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
    isLoaded: boolean;
}

export const FitLogContexts = createContext<FitLogContextType | null>(null);

const getInitialPlan = (): Workout[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("fitlog_plan");
    return stored ? JSON.parse(stored) : [];
};

const getInitialSaved = (): Workout[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("fitlog_saved");
    return stored ? JSON.parse(stored) : [];
};

const FitLogContext = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<Workout[]>(getInitialPlan);
    const [saved, setSaved] = useState<Workout[]>(getInitialSaved);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("fitlog_plan", JSON.stringify(plan));
    }, [plan, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    }, [saved, isLoaded]);

    return (
        <FitLogContexts.Provider
            value={{
                plan,
                setPlan,
                saved,
                setSaved,
                isLoaded,
            }}
        >
            {children}
        </FitLogContexts.Provider>
    );
};

export default FitLogContext;