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
                <i className="bi bi-arrow-left"></i>
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