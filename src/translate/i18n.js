import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './languages/en.json'
import pt from './languages/pt.json'

const resources = {
    en: {
        translation: en
    },
    pt: {
        translation: pt
    }
}
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        lng: (navigator.language==='pt-BR')?'pt':'en'
    })

export default i18n