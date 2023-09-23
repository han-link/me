import React from 'react';
import {menu, close} from '../assets';
import {navLinks} from '../constants';
import { LanguageSwitcher } from './index';

export const Navbar = ({ active, setActive, setIsOpen, isOpen }) => {
    return (
        <nav className="fixed top-0 sm:px-16 px-6 w-full flex items-center py-5 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <button className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                    }}>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Hannes&nbsp;
                        <span className="sm:block hidden">| Student</span>
                    </p>
                </button>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-tertiary"
                            } hover:text-white text-[18px]
                            font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden sm:flex">
                    <LanguageSwitcher />
                </div>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={isOpen ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
        </nav>
    )
}