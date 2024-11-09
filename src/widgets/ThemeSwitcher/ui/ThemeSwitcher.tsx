import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import classNames from "classnames";
import * as cls from "./ThemeSwitcher.module.scss"
import {FC} from "react";
import LightIcon from "shared/assets/icons/themeLight.svg"
import DarkTheme from "shared/assets/icons/themeDark.svg"
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme()
        return (
            <Button theme={ThemeButton.CLEAR} className={classNames(cls.themeswitcher, className)} onClick={toggleTheme} >
                {theme === "light" ? <LightIcon /> : <DarkTheme />}
            </Button>
        );
}
