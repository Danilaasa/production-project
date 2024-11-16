import classNames from "classnames"
import * as cls from "./PageError.module.scss"
import { useTranslation } from "react-i18next"


export const PageError = () => {

    const ReloadPage = () => {
        location.reload()
    }

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.PageError)} >
            <h1>{t("Упс... Что-то пошло не так")}</h1> 
            <button onClick={ReloadPage} >{t("Обновить страницу")}</button>
        </div>
        
    )
    
}