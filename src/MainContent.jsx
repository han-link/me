import React from 'react';
import {Landing, About, Tech, Projects, Contact} from './components';

export const MainContent = ({isOpen}) => {
    return (
        <div
            className={`relative transition-transform duration-300 ease-in-out ${isOpen ? '-translate-x-64 blur-sm' : 'translate-x-0'}`}>
            <div className="bg-landing-page bg-cover bg-no-repeat bg-center">
                <Landing/>
            </div>
            <About/>
            <Tech/>
            <Projects/>
            <Contact />
        </div>
    );
};