"use client";

import React, { createContext, useState, useEffect } from "react";

interface ToastContextType {
    message: string | null;
    showToast: (msg: string) => void;
}

export const ToastContexts = createContext<ToastContextType | null>(null);

const ToastContext = ({ children }: { children: React.ReactNode }) => {
    const [message, setMessage] = useState<string | null>(null);

    const showToast = (msg: string) => {
        setMessage(msg);
    };

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage(null);
        }, 2500);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <ToastContexts.Provider value={{ message, showToast }}>
            {children}
        </ToastContexts.Provider>
    );
};

export default ToastContext;