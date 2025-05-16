import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import de from '../de/translations.json'
import en from '../en/translations.json'

export enum Language {
    'german' = 'de',
    'english' = 'en'
}

export const translations = {
    en: {translation: en},
    de: {translation: de}
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'de',
    fallbackLng: 'de',
    resources: translations
})

export default i18next
