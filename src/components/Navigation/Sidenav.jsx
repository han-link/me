import React from 'react';
import {navLinks} from '../../constants.js';
import {LanguageSwitcher} from '../index.js';
import {useTranslation} from "react-i18next";
import { motion } from "framer-motion";

const variants_ul = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variants_li = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const Sidenav = ({active, setActive, isOpen, setIsOpen}) => {
    const {i18n} = useTranslation();

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={`fixed top-[68px] right-0 flex flex-col items-end h-full w-64 bg-primary transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <motion.ul
                variants={variants_ul}
                className="list-none flex flex-col w-4/5 mt-5">
                <motion.li
                    variants={variants_li}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key="language-selector">
                    <div className="mx-auto">
                        <LanguageSwitcher/>
                    </div>
                </motion.li>
                {navLinks.map((link) => (
                    <motion.li
                        variants={variants_li}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={link.id}
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
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};
