import React from "react";
import dataList from '../assets/logements.json';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"


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
    console.log("Pictures", logementPictures[0]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const backToFirst = logementPictures[0].length;
    console.log("Total d'image", backToFirst);

    const carouselDownScrolling = () => {
        if (currentIndex < 1) {
            return setCurrentIndex(backToFirst - 1)
        }
        return setCurrentIndex(currentIndex - 1)
    }
    const carouselUpScrolling = () => {
        if (currentIndex === logementPictures[0].length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }



    return (
        <div className="carouselContainer">
            {/* {logementPictures[0].map((picture) => ( */}
            {/* key={picture}  A AJOUTER DANS LA DIV EN CAS DE MAP */}
            <div className="carouselImg" style={{
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${logementPictures[0][currentIndex]})`
            }}>
                <img onClick={carouselDownScrolling} className="arrowLeft" src={arrowLeft} alt="Photo précédente" />
                <img onClick={carouselUpScrolling} className="arrowRight" src={arrowRight} alt="Photo suivante" />
            </div>
            {/* ))} */}
        </div>
    )
}

export default LogementCarousel;