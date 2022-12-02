import React from "react";
import { useState } from 'react'

// Importation des images flèches
import arrowUp from '../assets/arrowUp.png'
import arrowDown from '../assets/arrowDown.png'


const Collapsible = ({ children, label }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="collapsible__container">
            <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
                {label}
                {!isOpen ? <img className="toggle-arrow" src={arrowDown} alt="" /> : <img className="toggle-arrow" src={arrowUp} alt="" />}
            </button>
            <div className={isOpen ? 'content show' : 'content'}>{children}</div>
        </div>
    );
};

export default Collapsible;