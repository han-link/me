import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { languageResources } from './constants.js'

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: navigator.language.split('-')[0],
        interpolation: {
            escapeValue: false
        },
        resources: languageResources
    })
    .then(() => {
        console.log('i18next has been initialized!')
        // Any other operations you want to perform after initialization
    })
    .catch((error) => {
        console.error('Failed to initialize i18next:', error)
    })
