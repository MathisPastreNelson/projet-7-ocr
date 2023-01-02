import React from 'react'

// Importation du logo
import logoFooter from '../assets/logoInvis.png'

const Footer = () => {
    return <footer className="footerContainer">
        <img className="logoFooter" src={logoFooter} alt="" />
        <p className="pFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer;