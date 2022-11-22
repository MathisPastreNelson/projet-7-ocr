import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import LogementCarousel from '../components/LogementCarousel';
import LogementTitle from '../components/LogementTitle';
import Footer from '../components/Footer';

import dataList from '../assets/logements.json';

const Logement = () => {
    /* Récupération de l'ID grâce à l'URL */
    let { id } = useParams()
    /* Récupération du produit dans la liste complete grâce à son ID et à la méthode filter */
    let arrayOfDataLogement = dataList.filter(logement => logement.id === id)
    // Suppression de l'array pour sortir des datas sans le [0]
    let logement = arrayOfDataLogement[0]
    console.log(logement)

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