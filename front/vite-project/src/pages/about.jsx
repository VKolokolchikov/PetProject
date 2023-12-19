import React from 'react';
import AboutUs from "../features/aboutUs/index.jsx";
import SubHeader from "../features/subHeader/index.jsx";

import baseBannerImg from "../assets/base-banner.png"

const AboutUsPage = () => {

    return (
        <div>
            <SubHeader text={"Информация о нас"} img={baseBannerImg}/>
            <div className="content-block">
                <AboutUs/>
            </div>
        </div>
    );
};

export default AboutUsPage;
