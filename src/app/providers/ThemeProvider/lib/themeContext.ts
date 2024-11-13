import { createContext } from "react";

export interface ThemeContextProps {
    theme?: "light" | "dark";
    setTheme?: (theme: "dark" | "light") => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
export const LOCAL_STORAGE_THEME_KEY = "theme"