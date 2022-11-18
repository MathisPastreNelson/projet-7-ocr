import React from "react";
import dataList from '../assets/logements.json';
import { useState } from 'react'
import { useParams } from "react-router-dom";


const LogementCarousel = () => {
    /* Récupération de l'ID grâce à l'URL */
    const urlParams = useParams();
    /* Récupération du produit dans la liste complete grâce à son ID et à la méthode filter */
    const logementData = dataList.filter((data) => data.id === urlParams.id);
    console.log("Données complètes = ", logementData)

    /* Récupération des data ID */
    const logementId = logementData.map((logementData, id) => id = logementData.id)
    console.log("ID", logementId);
    /* Récupération des data Titres */
    const logementTitle = logementData.map((logementData, title) => title = logementData.title)
    console.log("Title", logementTitle);
    /* Récupération des data Pictures */
    const logementPictures = logementData.map((logementData, pictures) => pictures = logementData.pictures)
    console.log("Pictures", logementPictures);

    return (
        <div className="carouselContainer">
            {logementPictures[0].map((picture) => (
                <img className="carouselImg" key={picture} src={picture} alt={logementTitle} />
            ))}
        </div>
    )
}

export default LogementCarousel;