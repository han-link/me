import {BrowserRouter} from "react-router-dom";

/*import {Navbar, Landing, About, Tech} from "./components";*/
import {Sidenav, Navbar} from "./components/index.js";
import {MainContent} from "./MainContent.jsx";
import {useState} from "react";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("'");

    return (
        <BrowserRouter>
            <Sidenav active={active} setActive={setActive} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Navbar active={active} setActive={setActive} setIsOpen={setIsOpen} isOpen={isOpen}/>
            <MainContent active={active} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </BrowserRouter>
    )
}
