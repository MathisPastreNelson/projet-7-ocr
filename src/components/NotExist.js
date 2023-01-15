import React from 'react'
import { NavLink } from 'react-router-dom'

const NotExist = () => {
    return <div>
        <div className="bigFont">404</div>
        <div className="NotExistP">Oups! La page que vous demandez n'existe pas.</div>
        <NavLink className="returnHome" to="/kasa">Retourner sur la page d'accueil</NavLink>
    </div>
}

export default NotExist;