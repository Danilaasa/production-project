import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18n
    .use(I18NextHttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        debug:  __IS_DEV__,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
    });


export default i18n;