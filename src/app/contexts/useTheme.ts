import { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcherProvider";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        console.error('useTheme must be used within a ThemeSwitcherProvider');
        // Return a default context to prevent crashes
        return {
            theme: "dark" as const,
            toggleTheme: () => {
                console.warn('ThemeSwitcherProvider not found, toggleTheme called but ignored');
            }
        };
    }
    return context;
}