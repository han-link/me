import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidenav, Navbar, Footer } from "./components";
import { MainContent } from "./MainContent.jsx";
import { useState } from "react";
import { Imprint } from "./Imprint.jsx";
import {PrivacyPolicy} from "./PivacyPolicy.jsx";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("'");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Sidenav active={active} setActive={setActive} isOpen={isOpen} setIsOpen={setIsOpen}/>
                        <Navbar active={active} setActive={setActive} setIsOpen={setIsOpen} isOpen={isOpen}/>
                        <MainContent active={active} isOpen={isOpen} setIsOpen={setIsOpen}/>
                        <Footer />
                    </>
                }/>
                <Route path="imprint" element={<Imprint />} />
                <Route path="privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    )
}