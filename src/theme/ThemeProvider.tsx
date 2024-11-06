import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./themeContext";
import {ReactNode, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as "light" | "dark" || "light"

export const ThemeProvider = ({children}:{children: ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">(defaultTheme)



    const defaultProps = useMemo(() => ({
        theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}