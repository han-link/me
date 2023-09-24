import {
    web,
    backend,
    css,
    docker,
    git,
    html,
    javascript,
    nodejs,
    tailwind,
    typescript,
    mariaDb,
    python,
    angular,
    bootstrap,
    person,
    project,
    contact,
    us,
    de,
    projectsScheduler
} from './assets'

import translationEN from './locales/us/translation.json'
import translationDE from './locales/de/translation.json'

export const navLinks = [
    {
        id: 'about',
        title: {
            en: 'About',
            de: 'Über mich'
        },
        icon: person
    },
    {
        id: 'work',
        title: {
            en: 'Projects',
            de: 'Projekte'
        },
        icon: project
    },
    {
        id: 'contact',
        title: {
            en: 'Contact',
            de: 'Kontakt'
        },
        icon: contact
    }
]

export const services = [
    {
        title: 'Web Developer',
        icon: web
    },
    {
        title: 'Backend Developer',
        icon: backend
    }
]

export const technologies = [
    {
        name: 'HTML 5',
        icon: html,
        link: ''
    },
    {
        name: 'CSS 3',
        icon: css,
        link: ''
    },
    {
        name: 'JavaScript',
        icon: javascript,
        link: ''
    },
    {
        name: 'TypeScript',
        icon: typescript,
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'Node JS',
        icon: nodejs,
        link: 'https://nodejs.org/en'
    },
    {
        name: 'MariaDb',
        icon: mariaDb,
        link: 'https://mariadb.org/'
    },
    {
        name: 'git',
        icon: git,
        link: 'https://git-scm.com/'
    },
    {
        name: 'docker',
        icon: docker,
        link: 'https://www.docker.com/'
    },
    {
        name: 'Python',
        icon: python,
        link: 'https://www.python.org/'
    },
    {
        name: 'Angular',
        icon: angular,
        link: 'https://angular.io/'
    },
    {
        name: 'Bootstrap 5',
        icon: bootstrap,
        link: 'https://getbootstrap.com/'
    }
]

export const projects = [
    {
        name: {
            en: 'Appointment Scheduler',
            de: 'Terminplaner'
        },
        description: {
            en: "The C-program manages and stores appointment lists. Features include viewing daily and specific day appointments, adding, searching, and deleting individual or all appointments, and exiting. Appointments are saved to a file, and on program startup, past entries are removed, displaying only the current day's schedule.",
            de: 'Das C-Programm verwaltet und speichert Terminlisten. Zu den Funktionen gehören die Anzeige von täglichen und tagesbezogenen Terminen, das Hinzufügen, Suchen und Löschen einzelner oder aller Termine sowie das Beenden. Die Termine werden in einer Datei gespeichert, und beim Programmstart werden frühere Einträge entfernt, so dass nur der aktuelle Tagesplan angezeigt wird.'
        },
        tags: [
            {
                name: 'C',
                color: 'blue-text-gradient'
            },
            {
                name: 'linked-list',
                color: 'green-text-gradient'
            },
            {
                name: 'console-application',
                color: 'pink-text-gradient'
            }
        ],
        image: projectsScheduler,
        source_code_link: 'https://github.com/han-link/C_Terminplaner'
    }
]

export const languages = [
    {
        code: 'en',
        flag: us,
        label: 'Englisch (US)'
    },
    {
        code: 'de',
        flag: de,
        label: 'Deutsch (DE)'
    }
]

export const languageResources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
}
