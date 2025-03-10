"use client"
import { useThemeStore } from "@/store/theme-store";
import { useEffect } from "react";

export const ThemeProvider = ({ children } : { children : React.ReactNode }) => {

    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            {children}
        </>
    )
}
