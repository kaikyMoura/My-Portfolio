"use client"

import { useTheme } from "@/app/contexts/useTheme"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-150"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={20} className="text-secondary-foreground" />
      ) : (
        <Sun size={20} className="text-secondary-foreground" />
      )}
    </button>
  )
}

export default ThemeSwitcher