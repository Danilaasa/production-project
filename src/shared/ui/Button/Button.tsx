import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import * as cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline"

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string | ReactNode;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}) => {
    return (
        <button
            { ...otherProps }
            className={classNames(cls.button, className, cls[`${theme}`])}
        >
            {children}
        </button>
    );
};
