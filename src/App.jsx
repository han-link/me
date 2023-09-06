import {BrowserRouter} from "react-router-dom";

import { Landing } from "./components/Landing.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Landing />
        </BrowserRouter>
    )
}
