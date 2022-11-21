import React from 'react';
import Header from '../components/Header';
import LogementCarousel from '../components/LogementCarousel';
import LogementTitle from '../components/LogementTitle';
import Footer from '../components/Footer';
import dataList from '../assets/logements.json';

const Logement = () => {
    return (
        <div>
            <Header />
            <LogementCarousel />
            <LogementTitle />
            <Footer />
        </div>
    );
};

export default Logement;