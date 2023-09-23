import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { language_resources } from './constants.js'
import translationDE from './locales/de/translation.json'

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: navigator.language.split('-')[0],
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    landing_greeting: 'Hi, I\u0027m',
                    landing_greeting_name: 'Hannes',
                    landing_greeting_text: 'I am currently studying and developing web applications.'
                }
            },
            de: {
                translation: {
                    landing_greeting: 'Hi, Ich bin',
                    landing_greeting_name: 'Hannes',
                    landing_greeting_text: 'Ich studiere gerade und entwickle nebenher web apps.'
                }
            }
        }
    })
