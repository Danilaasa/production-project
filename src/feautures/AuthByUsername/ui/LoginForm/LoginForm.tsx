import classNames from "classnames"
import { t } from "i18next"
import { FC } from "react"
import { Button } from "shared/ui/Button/Button"
import * as cls from "./LoginForm.module.scss"
import { Input } from "shared/ui/Input/Input"


interface LoginFormProps {
    className?: string
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
    return (
        <div className={classNames(className, cls.form)} >
            <Input />
            <Input />
            <Button>
                {t("Войти")}
            </Button>
        </div>
    )
}