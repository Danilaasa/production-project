import {useTranslation} from "react-i18next";

function AboutPage(){
    const { t, i18n } = useTranslation()
    return (
        <div>
            {t("О нас")}
        </div>
    )
}
export default AboutPage