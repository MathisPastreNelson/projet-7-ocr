import React from 'react'
import logoFooter from '../assets/logoInvis.png'

const Footer = () => {
    return <div className="footerContainer">
        <img className="logoFooter" src={logoFooter} alt="" />
        <p className="pFooter">© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer;