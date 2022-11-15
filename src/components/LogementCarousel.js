import React from "react";
import dataList from '../assets/logements.json';
import { useState } from 'react'
import { useParams } from "react-router-dom";


const LogementCarousel = () => {
    const completeId = useParams();
    console.log(completeId);
    console.log(dataList[2]);
    return (
        dataList.map((imgLocation) =>
            <div className="test" > {imgLocation.title}</div >
        )
    )
}

export default LogementCarousel;