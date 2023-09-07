import React from 'react';
import {Link} from 'react-router-dom';
import {menu} from '../assets';
import {navLinks} from '../constants';

export const Navbar = ({ active, setIsOpen }) => {
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
                        <span className="sm:block hidden">| Student</span>
                    </p>
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
                        src={/*toggle ? close :*/ menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
        </nav>
    )
}