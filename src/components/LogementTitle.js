import React from 'react'
import salmonStar from "../assets/starSalmon.png"
import whiteStar from "../assets/starWhite.png"

const LogementTitle = ({ logementName, logementLocation, tags, logementOwner, logementRating }) => {
    const range = 5
    let salmonStarBalise = <img src={salmonStar} />
    let whiteStarBalise = <img src={whiteStar} />

    const Notation = () => {
        while (logementRating < range) {
            return (salmonStarBalise)
        }
    }

    console.log("La note du logement est de ", logementRating, "/ ", range)
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
            <h4 className="logementOwner">{logementOwner.name}</h4>
            <div className="starContainer">
                <Notation />
            </div>
        </div>
    </div>
}

export default LogementTitle;