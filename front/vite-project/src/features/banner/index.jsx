import React from 'react';
import logo from "../../assets/logo-on-banner.png"
import './style.scss'


const Banner = () => {

    return (
        <>
            <div className="banner-box">
                <img className={"banner-box__img"} src={logo} alt={"logo"}/>
                <h1 className={"banner-box__title-describe"}> Мебель · для · жизни</h1>
            </div>
        </>
    );
};

export default Banner;
