import React from 'react';
import {useTranslation} from "react-i18next";
import {footerLinks, footerSocialIcons} from "../constants.js";

export const Footer = () => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();
    return (
        <footer className="bg-primary">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex justify-between flex-col items-center sm:flex-row">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img src="./favicon.webp" width="32" height="32" className="h-8 mr-3" alt="Hannes Link Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Hannes Link
                        </span>
                    </div>
                    <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        {footerLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link} className="mx-2 hover:underline md:mx-3" key={link.id}>
                                    {link.title[i18n.language]}
                                </a>
                            </li>
                        )) }
                    </ul>
                </div>
                <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-3">
                    {footerSocialIcons.map((link) => (
                        <li key={link.id}>
                            <a href={link.link} key={link.id}>
                                <img src={link.icon} className="w-5" alt={link.description}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <hr className="mb-6 mt-4 border-gray-700"/>
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a
                    href="https://www.hannes-link.de/" className="hover:underline">hannes-link.de</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}