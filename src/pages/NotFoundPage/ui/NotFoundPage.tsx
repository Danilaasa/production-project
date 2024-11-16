import classNames from "classnames"
import { useTranslation } from "react-i18next"
import * as cls from "./NotFoundPage.module.scss"

export const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage)} >
            {t("Страница не найдена")}
        </div>  
    )
}