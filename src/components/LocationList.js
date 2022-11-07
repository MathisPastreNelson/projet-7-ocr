import React from 'react';
import dataList from '../assets/logements.json';
console.log(dataList);


const Location = () => {
    return <div className="locationContainer">
        {dataList.map((data) => (
            <li className="locationlist" key={data.id}>
                {data.title}
            </li>
        ))}
    </div>
}

export default Location;
