import React from 'react';

import './style.scss'
import FooterItems from "../../widgets/footerItems/index.jsx";

const Footer = () => {
    return (
        <footer className={"prime-bg"}>
            <div className={"main-container"}>
                <FooterItems />
            </div>
        </footer>
    );
};

export default Footer;