'use client';
import React, { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "dark" | "light"

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

const ThemeSwitcherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    // Aplicar tema imediatamente no carregamento
    useEffect(() => {
        try {
            const preferedTheme = localStorage.getItem("theme") as Theme | undefined;
            if (preferedTheme && (preferedTheme === "dark" || preferedTheme === "light")) {
                setTheme(preferedTheme);
                if (preferedTheme === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                // Aplicar tema padrão imediatamente
                document.documentElement.classList.add("dark");
            }
        } catch (error) {
            console.log("Error reading theme from localStorage:", error);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        
        // Aplicar mudança imediatamente usando Tailwind
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
        // Salvar no localStorage de forma assíncrona
        try {
            localStorage.setItem("theme", newTheme);
        } catch (error) {
            console.log("Error saving theme to localStorage:", error);
        }
        
        console.log("Theme toggled to:", newTheme);
    };

    const contextValue: ThemeContextProps = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeSwitcherProvider };