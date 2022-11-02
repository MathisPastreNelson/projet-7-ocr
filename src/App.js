import React from 'react';
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import NotFoundPage from "./pages/NotFound"

/* Definition des routes de l'applications */
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
