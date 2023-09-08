import React from 'react';
import {navLinks} from '../constants';
import {close} from '../assets';

export const Sidenav = ({active, setActive, isOpen, setIsOpen}) => {
    return (
        <div
            className={`fixed top-[68px] right-0 flex flex-col items-end h-full w-64 bg-primary transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <ul className="list-none flex flex-col w-4/5 mt-5">
                {navLinks.map((link) => (
                    <div key={link.id + 1}  className="box-border">
                        <a
                            href={`#${link.id}`}
                            key={link.id}
                            className="block"
                            onClick={() => {
                                setActive(link.title);
                                setIsOpen(!isOpen);
                            }}
                        >
                            <li
                                className={`${
                                    active === link.title
                                        ? "text-signature"
                                        : "text-white"
                                } font-poppins font-medium 
            cursor-pointer text-[16px] z-40 flex items-center my-8`}
                            >
                                <img src={link.icon} alt={link.title} className="w-[28px] h-[28px] mr-3"/>
                                {link.title}
                            </li>
                        </a>

                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" key={link.id + 2}/>
                    </div>
                ))}
            </ul>
        </div>
    );
};
