import React from 'react';
import { NavLink } from 'react-router-dom'
import dataList from '../assets/logements.json';
console.log(dataList);


const Location = () => {
    return <div className="locationContainer">
        {/* Mon .map() me permet d'aller chercher toutes les données */}
        {dataList.map((data) => (
            <NavLink className="locationCard" key={data.id} to={data.id}>
                <img className="locationImg" src={data.cover} alt="Couvertures des appartements" />
                <p className="locationTitle" >
                    {data.title}
                </p>
            </NavLink>
        ))}
    </div>
}

export default Location;
