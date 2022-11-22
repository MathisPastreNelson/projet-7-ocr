import React from 'react'
import dataList from '../assets/logements.json';

const LogementTitle = ({ logementName, logementLocation, tags }) => {
    console.log(tags)
    return <div className="titleContainer">
        <div>
            <h2>{logementName}</h2>
            <p>{logementLocation}</p>
            {tags.map(tag => (
                <p key={tag}>{tag}</p>
            ))}

        </div>
        <div className="nameNote">
            <h4>Nom du propriétaire</h4>
            <p>Note du produit</p>
        </div>
    </div>
}

export default LogementTitle;