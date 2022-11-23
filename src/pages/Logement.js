import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import LogementCarousel from '../components/LogementCarousel';
import LogementTitle from '../components/LogementTitle';
import LogementCollapse from '../components/LogementCollapse';
import Footer from '../components/Footer';

import dataList from '../assets/logements.json';

const Logement = () => {
    /* Récupération de l'ID grâce à l'URL */
    let { id } = useParams()
    /* Récupération du produit dans la liste complete grâce à son ID et à la méthode filter */
    let arrayOfDataLogement = dataList.filter(logement => logement.id === id)
    // Suppression de l'array pour sortir des datas sans le [0]
    let logement = arrayOfDataLogement[0]
    console.log("Data global du logement = ", logement)
    console.log("La note du logement est de ", logement.rating, "/ 5")

    return (
        <div>
            <Header />
            <LogementCarousel
                logementPictures={logement.pictures} />
            <LogementTitle
                logementName={logement.title}
                logementLocation={logement.location}
                tags={logement.tags}
                logementOwner={logement.host}
                logementOwnerPhoto={logement.host.picture}
                logementRating={logement.rating} />
            <LogementCollapse />
            <Footer />
        </div>
    );
};

export default Logement;