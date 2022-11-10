import React from 'react'
import logo from '../assets/logoSalmon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div className="headerKasa">
        <img className="logoHeader" src={logo} alt="" />
        <div className="navLinkHeader">
            <NavLink className="navLinkHeader-nav" to="/">Accueil</NavLink>
            <NavLink className="navLinkHeader-nav" to="/about">A Propos</NavLink>
        </div>
    </div>
}

export default Header;