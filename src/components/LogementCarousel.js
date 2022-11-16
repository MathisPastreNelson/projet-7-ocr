import React from "react";
import dataList from '../assets/logements.json';
import { useState } from 'react'
import { useParams } from "react-router-dom";


const LogementCarousel = () => {
    const urlParams = useParams();
    const logementData = dataList.filter((data) => data.id === urlParams.id);
    console.log(logementData);

    return (
        <div className="test">test</div>
    )
}

export default LogementCarousel;