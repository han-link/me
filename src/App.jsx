import {BrowserRouter} from "react-router-dom";

/*import {Navbar, Landing, About, Tech} from "./components";*/
import { Sidenav } from "./components/index.js";
import { MainContent } from "./MainContent.jsx";
import {useState} from "react";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("'");

    return (
        <BrowserRouter>
            <Sidenav active={active} setActive={setActive} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <MainContent active={active} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </BrowserRouter>
        /*<div className="relative min-h-screen">
            {/!* Sidenav *!/}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-blue-500 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    className="absolute top-2 left-2 bg-red-500 p-2 rounded"
                    onClick={() => setIsOpen(false)}
                >
                    Close
                </button>
                <ul className="mt-10 space-y-4">
                    <li className="text-white pl-4">Item 1</li>
                    <li className="text-white pl-4">Item 2</li>
                    <li className="text-white pl-4">Item 3</li>
                </ul>
            </div>

            {/!* Main Content *!/}
            <div
                className={`relative transition-transform duration-300 ease-in-out ${
                    isOpen ? '-translate-x-64' : 'translate-x-0'
                }`}
            >
                <button
                    className="bg-blue-500 text-white p-2 rounded mt-4 ml-4"
                    onClick={() => setIsOpen(true)}
                >
                    Open Sidenav
                </button>
                <div className="p-4">
                    {/!* Your main content *!/}
                    <p>Your main content goes here...</p>
                </div>
            </div>
        </div>*/
    )
}
