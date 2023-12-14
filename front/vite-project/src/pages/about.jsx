import React from 'react';
import AboutUs from "../features/aboutUs/index.jsx";
import SubHeader from "../features/subHeader/index.jsx";

import baseBannerImg from "../assets/base-banner.png"

const AboutUsPage = () => {

    return (
        <div>
            <SubHeader text={"Информация о нас"} img={baseBannerImg}/>
            <AboutUs/>
        </div>
    );
};

export default AboutUsPage;
