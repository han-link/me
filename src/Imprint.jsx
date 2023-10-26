import React from 'react';

export const Imprint = () => {
    const goBack = () => {
        history.back();
    }

    return (
        <div className="p-8 min-h-screen w-screen">
            <button
                className="hover:text-white cursor-pointer rounded-md px-3 py-2 hover:bg-white hover:bg-opacity-10 text-3xl"
                onClick={goBack}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </button>
            <div className="w-fit mx-auto">
                <h1 className="mb-6 text-center text-5xl font-extrabold leading-none tracking-tight">Impressum</h1>
                <h2 className="mb-2 text-xl font-semibold">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p className="mb-4">
                    Hannes Link<br/>
                    c/o IP-Management #20387<br/>
                    Ludwig-Erhard-Str. 18<br/>
                    20459 Hamburg
                </p>
                <h2 className="mb-2 text-xl font-semibold">Kontakt</h2>
                <p className="mb-3">
                    E-Mail: <a className="text-blue-500 hover:underline"
                               href="mailto:contact@hannes-link.de">contact@hannes-link.de</a><br/>
                    <a className="text-blue-500 hover:underline" href="/#contact">Kontaktformular</a>
                </p>
                <p className="">
                    Quelle: <a className="text-blue-500 hover:underline"
                               href="https://www.e-recht24.de">e-recht24.de</a>
                </p>
            </div>
        </div>
    );
};