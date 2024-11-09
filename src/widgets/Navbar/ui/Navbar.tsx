import React, {FC} from 'react';
import * as styles from "./Navbar.module.scss"
import classNames from "classnames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.navbar, className)} >
            <div className={classNames(styles.links)} >
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={classNames(styles.mainLink)} >{t("О сайте")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t("На главную")}</AppLink>
            </div>
        </div>
    );
};
