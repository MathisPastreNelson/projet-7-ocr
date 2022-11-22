import React from 'react'
import dataList from '../assets/logements.json';

const LogementTitle = () => {
    return <div className="titleContainer">
        <div>
            <h2>Le titre du logement</h2>
            <p>Localisation du logement</p>
            <p>Mot clé du logement</p>
        </div>
        <div className="nameNote">
            <h4>Nom du propriétaire</h4>
            <p>Note du produit</p>
        </div>
    </div>
}

export default LogementTitle;