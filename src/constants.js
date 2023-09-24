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
    de
} from './assets'

import translationEN from './locales/us/translation.json'
import translationDE from './locales/de/translation.json'

export const navLinks = [
    {
        id: 'about',
        title: {
            en: 'About',
            de: 'Über mich',
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

export const language_resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
}
