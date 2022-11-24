import React from "react";
import { useState } from 'react'
import arrowUp from '../assets/arrowUp.png'
import arrowDown from '../assets/arrowDown.png'

const LogementCollapse = ({ logementDescription, logementEquipments }) => {
    // console.log("test", logementEquipments)

    const [isOpenDescribe, setIsOpenDescribe] = useState(false)
    const [isOpenEquipments, setIsOpenEquipments] = useState(false)
    return (
        <div className="logementCollapseContainer">
            <div className="logementDescriptionContainer">
                <button className='logementCollapseToggle' onClick={() => setIsOpenDescribe(!isOpenDescribe)}>
                    Description
                    {!isOpenDescribe ? <img className="logementToggle-arrow" src={arrowDown} alt="" /> : <img className="logementToggle-arrow" src={arrowUp} alt="" />}
                </button>
                <div className={isOpenDescribe ? 'logementContent logementShow' : 'logementContent'}><p>{logementDescription}</p></div>
            </div>
            <div className="logementEquipmentsContainer">

                <button className='logementCollapseToggle' onClick={() => setIsOpenEquipments(!isOpenEquipments)}>
                    Equipements
                    {!isOpenEquipments ? <img className="logementToggle-arrow" src={arrowDown} alt="" /> : <img className="logementToggle-arrow" src={arrowUp} alt="" />}
                </button>
                <ul className={isOpenEquipments ? 'logementContent logementShow' : 'logementContent'}>{logementEquipments.map((item) => <li key={item} className="logementsItems">{item}</li>)}</ul>
            </div>
        </div >
    );
}

export default LogementCollapse;