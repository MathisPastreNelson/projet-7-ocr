import React from 'react';
import dataList from '../assets/logements.json';
console.log(dataList);


const Location = () => {
    return <div className="locationContainer">
        {dataList.map((data) => (
            <div className="locationCard">
                <li className="locationlist" key={data.id}>
                    {data.title}
                </li>
            </div>
        ))}
    </div>
}

export default Location;
