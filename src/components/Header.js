import React from 'react'
import logo from '../assets/logoSalmon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div>
        <img src={logo} alt="" />
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
    </div>
}

export default Header;