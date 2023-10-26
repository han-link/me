import React from 'react';
import {navLinks} from '../constants';
import {LanguageSwitcher} from './index';
import {useTranslation} from "react-i18next";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid/index.js";

export const Navbar = ({active, setActive, setIsOpen, isOpen}) => {
    const {i18n} = useTranslation();
    return (
        <nav className="fixed top-0 sm:px-16 px-6 w-full flex items-center py-5 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <button className='flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white hover:bg-opacity-10'
                        onClick={() => {
                            setActive("");
                            setIsOpen(false);
                            window.scrollTo(0, 0);
                            history.replaceState(null, null, ' '); // This will remove the fragment identifier
                        }}>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Hannes&nbsp;
                        <span className="md:block hidden">| Student</span>
                    </p>
                </button>
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <a href={`#${link.id}`} key={link.id}>
                            <li
                                key={link.id}
                                className={`${
                                    active === link.title[i18n.language]
                                        ? "text-white"
                                        : "text-tertiary"
                                } hover:text-white text-[18px]
                            font-medium cursor-pointer rounded-md px-3 py-2 hover:bg-white hover:bg-opacity-10`}
                                onClick={() => setActive(link.title[i18n.language])}
                            >
                                {link.title[i18n.language]}
                            </li>
                        </a>
                    ))}
                </ul>
                <div className="hidden md:flex">
                    <LanguageSwitcher/>
                </div>
                <div className="md:hidden flex flex-1 justify-end items-center">
                    {
                        isOpen ?
                        <XMarkIcon className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                        :
                        <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                    }

                </div>
            </div>
        </nav>
    )
}