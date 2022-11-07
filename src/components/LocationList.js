import React from 'react';
import dataList from '../assets/logements.json';
console.log(dataList);


const Location = () => {
    return <div className="locationContainer">
        {dataList.map((data) => (
            <div className="locationCard">
                <img className="locationImg" src={data.cover} alt="Couvertures des appartements" />
                <p className="locationlist" key={data.id}>
                    {data.title}
                </p>
            </div>
        ))}
    </div>
}

export default Location;
