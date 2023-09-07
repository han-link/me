import React from 'react';
import {Navbar, Landing, About, Tech} from './components';

export const MainContent = ({active, isOpen, setIsOpen }) => {
    return (
        <div className={`relative transition-transform duration-300 ease-in-out ${isOpen ? '-translate-x-64' : 'translate-x-0'}`}>
            <div className="bg-landing-page bg-cover bg-no-repeat bg-center">
                <Navbar active={active} setIsOpen={setIsOpen}/>
                <Landing/>
            </div>
            <About/>
            <Tech/>
        </div>
    );
};