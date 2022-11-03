import React from 'react'
import bannerHome from '../assets/banner2.png'

const BannerHome = () => {
    return <div>
        <img className="bannerImg" src={bannerHome} alt="" />
        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
    </div>
}

export default BannerHome;