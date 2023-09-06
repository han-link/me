import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {menu, close} from '../assets';
import {navLinks} from '../constants';

export const Navbar = () => {
    const [active, setActive] = useState("'");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Hannes&nbsp;
                        <span
                            className="sm:block hidden">| Student</span></p>
                </Link>
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
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex fixed justify-center top-[68px] right-0 bottom-0 left-0'}`}>
                        <div className="flex p-6 bg-secondary mx-4 my-2 z-10 rounded-[5px] w-full justify-center">
                            <ul className="list-none flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${
                                            active === link.title
                                                ? "text-signature"
                                                : "text-white"
                                        } font-poppins font-medium 
                                    cursor-pointer text-[16px] z-40`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}