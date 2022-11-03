import React from 'react'
import logo from '../assets/logoSalmon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div className="headerKasa">
        <img className="logoHeader" src={logo} alt="" />
        <div className="navLink">
            <NavLink className="margin" to="/">Accueil</NavLink>
            <NavLink className="margin" to="/about">A propos</NavLink>
        </div>
    </div>
}

export default Header;