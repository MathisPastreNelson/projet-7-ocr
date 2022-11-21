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

    // Si le nombre d'image est supérieur à 1 on affiche le carousel
    if (backToFirst > 1) {
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
                    <div className="carouselSwitchArrows">

                        <img onClick={carouselDownScrolling} className="arrowLeft" src={arrowLeft} alt="Photo précédente" />
                        <img onClick={carouselUpScrolling} className="arrowRight" src={arrowRight} alt="Photo suivante" />
                    </div>
                    <p className="carouselCounter">{currentIndex + 1}/{logementPictures[0].length}</p>
                </div>
                {/* ))} */}
            </div>
        )
    } else {
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
                </div>
                {/* ))} */}
            </div>
        )
    }
}

export default LogementCarousel;