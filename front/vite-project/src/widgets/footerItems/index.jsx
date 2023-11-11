import React from 'react';
import CompanyInfo from "./companyInfo.jsx";
import FooterNavBar from "./footerNavBar.jsx";
import FooterContacts from "./footerContacts.jsx";

import "./style.scss"

const FooterItems = () => {
    return (
        <div className={"footer-box"}>
            <CompanyInfo/>
            <FooterNavBar/>
            <FooterContacts/>
        </div>
    );
};

export default FooterItems;