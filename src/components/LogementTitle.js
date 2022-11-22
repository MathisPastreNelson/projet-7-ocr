import React from 'react'

const LogementTitle = ({ logementName, logementLocation, tags, logementOwner, logementRating }) => {
    const range = [1, 2, 3, 4, 5]

    console.log(logementRating)
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
            <p className="logementRating">{logementRating}</p>
        </div>
    </div>
}

export default LogementTitle;