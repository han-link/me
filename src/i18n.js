import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { language_resources } from './constants.js'

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: navigator.language.split('-')[0],
        interpolation: {
            escapeValue: false
        },
        resources: language_resources,
    })
