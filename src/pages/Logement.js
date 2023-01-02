import React from 'react';
import { useParams } from 'react-router-dom';

// Importation des composants
import Header from '../components/Header';
import LogementCarousel from '../components/LogementCarousel';
import LogementTitle from '../components/LogementTitle';
import Footer from '../components/Footer';

// Importation de la NotFoundPage utile en cas de logement non trouvé
import NotFoundPage from "../pages/NotFound"

// Importation des données qui vont devenir des props
import dataList from '../assets/logements.json';
import Collapsible from '../components/Collapsible';

const Logement = () => {
    /* Récupération de l'ID grâce à l'URL */
    let { id } = useParams()
    /* Récupération du produit dans la liste complete grâce à son ID et à la méthode filter */
    let arrayOfDataLogement = dataList.filter(logement => logement.id === id)
    // Suppression de l'array pour sortir des datas sans le [0]
    let logement = arrayOfDataLogement[0]
    const minHeight = {
        minHeight: '110px'
    };

    // Si les données n'éxistent pas on affiche la page 404
    if (logement == undefined) return <NotFoundPage />;

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

            <div className='logementGeneral__container'>
                <div className="logementCollapseContainer">
                    <Collapsible
                        label='Description'>
                        <p style={minHeight}>{logement.description}.</p>
                    </Collapsible>
                </div >
                <div className="logementCollapseContainer">
                    <Collapsible
                        label='Equipements'>
                        <ul style={minHeight} className='itemList__container'>
                            {logement.equipments.map((item) => <li key={item} className='itemList'>{item}</li>)}
                        </ul>
                    </Collapsible>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Logement;