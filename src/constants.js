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
    contact
} from './assets'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
        icon: person
    },
    {
        id: 'work',
        title: 'Projects',
        icon: project
    },
    {
        id: 'contact',
        title: 'Contact',
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

];
