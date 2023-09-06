import {BrowserRouter} from "react-router-dom";

import { Navbar, Landing, About } from "./components";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-landing-page bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Landing />
            </div>
            <About />
        </BrowserRouter>
    )
}
