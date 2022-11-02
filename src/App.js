import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import Other from "./pages/404"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Definition des routes de l'applications */}
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Other />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
