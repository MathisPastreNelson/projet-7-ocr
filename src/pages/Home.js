import React from 'react';

// Importation des composants
import Header from '../components/Header';
import BannerHome from '../components/BannerHome';
import LocationList from '../components/LocationList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerHome />
            <LocationList />
            <Footer />
        </div>
    );
};

export default Home;