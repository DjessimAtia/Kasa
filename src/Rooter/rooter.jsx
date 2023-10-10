import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from '../Pages/Home/index';
import Error from '../Pages/Error/index';
import Propos from '../Pages/Propos/index';
import Header from '../Components/Header/index';
import Footer from '../Components/Footer/index'
import Logement from '../Pages/Logement/index';
function Router() {
    return (
        <BrowserRouter>

            <Header /> {/* enveloper le composant Route dans le parent composant Routes pour la new version react */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="/logement/:logementId" element={<Logement />} exact />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router