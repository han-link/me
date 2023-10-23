import React from 'react';
import {useTranslation} from "react-i18next";
import {logo} from '../assets'
import {footerLinks} from "../constants.js";

export const Footer = () => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();
    return (
        <footer className="bg-primary">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col items-center sm:flex sm:flex-row sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-8 mr-3" alt="Hannes Link Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Hannes Link
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {footerLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link} className="mr-4 hover:underline md:mr-6" key={link.id}>
                                    {link.title[i18n.language]}
                                </a>
                            </li>
                        )) }
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a
                    href="https://www.hannes-link.de/" className="hover:underline">hannes-link.de</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}