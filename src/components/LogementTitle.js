import React from 'react'

// Importation des images étoiles
import salmonStar from "../assets/starSalmon.png"
import whiteStar from "../assets/starWhite.png"

const LogementTitle = ({ logementName, logementLocation, tags, logementOwner, logementRating, logementOwnerPhoto }) => {
    const rangeStars = [1, 2, 3, 4, 5];

    return <div className="titleContainer">
        <div>
            <h2 className="titleLogement">{logementName}</h2>
            <p className="localisationLogement">{logementLocation}</p>
            <div className="logementTagsContainer">
                {tags.map(tag => (
                    <p className="logementTags" key={tag}>{tag}</p>
                ))}
            </div>
        </div>
        <div className="nameNote">
            <div className="identity">
                <h4 className="logementOwner">{logementOwner.name}</h4>
                <img className="ownerPhoto" src={logementOwnerPhoto} alt="Photo du propriétaire" />
            </div>
            <div className="starContainer">
                {rangeStars.map((star) =>
                    logementRating < star ?
                        <img key={star} className="whiteStar" src={whiteStar} /> :
                        <img key={star} className="salmonStar" src={salmonStar} />
                )}
            </div>
        </div>
    </div>
}

export default LogementTitle;