import React from 'react';
import {navLinks} from '../constants';
import {LanguageSwitcher} from './index';
import {useTranslation} from "react-i18next";

export const Sidenav = ({active, setActive, isOpen, setIsOpen}) => {
    const {i18n} = useTranslation();

    return (
        <div
            className={`fixed top-[68px] right-0 flex flex-col items-end h-full w-64 bg-primary transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <ul className="list-none flex flex-col w-4/5 mt-5">
                <li key="language-selector">
                    <div className="mx-auto">
                        <LanguageSwitcher/>
                    </div>
                </li>
                {navLinks.map((link) => (
                    <li key={link.id}
                        className={`${
                            active === link.title[i18n.language]
                                ? "text-signature"
                                : "text-white"
                        } font-poppins font-medium 
            cursor-pointer text-[16px]`}
                    >
                        <a
                            href={`#${link.id}`}
                            className="flex py-8"
                            onClick={() => {
                                setActive(link.title[i18n.language]);
                                setIsOpen(!isOpen);
                            }}
                        >

                            <img alt="decorative" src={link.icon} width="22" height="22" aria-hidden="true" className="mr-3"/>
                            {link.title[i18n.language]}
                        </a>

                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
