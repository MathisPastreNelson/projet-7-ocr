import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import LogementCarousel from '../components/LogementCarousel';
import LogementTitle from '../components/LogementTitle';
import Footer from '../components/Footer';

import dataList from '../assets/logements.json';

const Logement = () => {
    /* Récupération de l'ID grâce à l'URL */
    const urlParams = useParams();
    /* Récupération du produit dans la liste complete grâce à son ID et à la méthode filter */
    const logementData = dataList.filter((data) => data.id === urlParams.id);
    console.log("Les infos globales du logement = ", logementData)
    /* Récupération des data Pictures */
    const logementPictures = logementData.map((logementData, pictures) => pictures = logementData.pictures)
    console.log("Pictures = ", logementPictures[0]);


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