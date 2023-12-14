import React from 'react';
import CompanyInfo from "./companyInfo.jsx";
import FooterNavBar from "./footerNavBar.jsx";
import FooterContacts from "./footerContacts.jsx";

import "./style.scss"

const FooterItems = () => {
    return (
        <div className={"footer-box"}>
            <CompanyInfo/>
            <div className={"footer-box footer-box-nav-bar"}>
                <FooterNavBar/>
                <FooterContacts/>
            </div>

        </div>
    );
};

export default FooterItems;