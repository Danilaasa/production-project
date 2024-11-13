import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./themeContext";

interface UseThemeResult {
    theme: "light" | "dark";
    toggleTheme: () => void
}

export function useTheme():UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}