import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";
import * as cls from "./AppLink.module.scss"
import classNames from "classnames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps {
    className?:string,
    children: ReactNode,
    to: string,
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY }) => {
    return (
        <Link to={to} className={classNames(cls.appLink, className, cls[`${theme}`])} >
            {children}
        </Link>
    );
}
