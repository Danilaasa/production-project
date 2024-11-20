import React, { FC, useCallback, useState } from "react";
import * as styles from "./Navbar.module.scss"
import classNames from "classnames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { Counter } from "entities/Counter/ui/Counter";

interface NavbarProps {
    className?: string
}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const [opened, setOpened] = useState(false)
    const { t } = useTranslation()

    const toggleModal = useCallback(() => {
        setOpened(!opened)
    }, [opened])

    return (
        <div className={classNames(styles.navbar, className)} >
            <div className={classNames(styles.links)} >
                <Counter />
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={classNames(styles.mainLink)} >{t("О сайте")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t("На главную")}</AppLink>
                <Button onClick={toggleModal} theme={ThemeButton.CLEAR}>
                    {t("Войти")}
                </Button>
                <Modal isOpen={opened} onClose={toggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi aperiam dolorem earum in itaque iusto labore neque nesciunt nostrum obcaecati odio officia quaerat, quam quas, repellendus sunt vero voluptates!
                </Modal>
            </div>
        </div>
    );
};
