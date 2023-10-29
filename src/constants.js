import {
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
    us,
    de,
    projectsScheduler,
    user,
    rocket,
    envelope,
    code,
    server, github
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
        icon: user
    },
    {
        id: 'work',
        title: {
            en: 'Projects',
            de: 'Projekte'
        },
        icon: rocket
    },
    {
        id: 'contact',
        title: {
            en: 'Contact',
            de: 'Kontakt'
        },
        icon: envelope
    }
]

export const footerLinks = [
    {
        id: 'about',
        title: {
            en: 'About',
            de: 'Über mich'
        },
        link: '/#about'
    },
    {
        id: 'imprint',
        title: {
            en: 'Imprint',
            de: 'Impressum'
        },
        link: '/imprint'
    },
    {
        id: 'privacy-policy',
        title: {
            en: 'Privacy Policy',
            de: 'Datenschutzerklärung'
        },
        link: '/privacy-policy'
    },
    {
        id: 'contact',
        title: {
            en: 'Contact',
            de: 'Kontakt'
        },
        link: '/#contact'
    }
]

export const footerSocialIcons = [
    {
        id: 1,
        link: 'https://github.com/han-link',
        icon: github,
        description: 'link to my github account'
    }
]

export const services = [
    {
        title: 'Web Developer',
        icon: code,
        text: {
            en: 'Passionate about weaving the web with code and creativity. Dive into my projects and experience my journey.',
            de: 'Ich entwickle Websites mit Code und Kreativität. Schau dir meine Projekte an und sieh, was ich bisher geschaffen habe.'
        }
    },
    {
        title: 'Backend Developer',
        icon: server,
        text: {
            de: 'Im Hintergrund sorgt mein Code dafür, dass Webanwendungen reibungslos laufen und stabil sind. Schau dir meine Projekte an und entdecke, was ich gerne mache.',
            en: 'Behind the scenes, my code keeps web applications running smoothly and stable. Take a look at my projects to see what I like to do.'
        }
    }
]

export const technologies = [
    {
        name: 'HTML 5',
        icon: html,
        width: 112,
        height: 112
    },
    {
        name: 'CSS 3',
        icon: css,
        width: 112,
        height: 112
    },
    {
        name: 'JavaScript',
        icon: javascript,
        width: 112,
        height: 112
    },
    {
        name: 'TypeScript',
        icon: typescript,
        link: 'https://www.typescriptlang.org/',
        width: 112,
        height: 112
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
        link: 'https://tailwindcss.com/',
        width: 112,
        height: 112
    },
    {
        name: 'Node JS',
        icon: nodejs,
        link: 'https://nodejs.org/en',
        width: 112,
        height: 112
    },
    {
        name: 'MariaDb',
        icon: mariaDb,
        link: 'https://mariadb.org/',
        width: 130,
        height: 112
    },
    {
        name: 'git',
        icon: git,
        link: 'https://git-scm.com/',
        width: 112,
        height: 112
    },
    {
        name: 'docker',
        icon: docker,
        link: 'https://www.docker.com/',
        width: 112,
        height: 112
    },
    {
        name: 'Python',
        icon: python,
        link: 'https://www.python.org/',
        width: 112,
        height: 112
    },
    {
        name: 'Angular',
        icon: angular,
        link: 'https://angular.io/',
        width: 112,
        height: 112
    },
    {
        name: 'Bootstrap 5',
        icon: bootstrap,
        link: 'https://getbootstrap.com/',
        width: 130,
        height: 112
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
