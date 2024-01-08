import React from 'react';
import {Link} from "react-router-dom";

const FooterNavBar = () => {
    return (
        <div className={"footer-nav-bar"}>
            <Link to={"/about/"} className={"footer-text"}> О нас </Link>
            <Link to={"/delivery/"} className={"footer-text"}> Доставка </Link>
            <Link to={"/catalog/"} className={"footer-text"}> Каталог </Link>
            <Link to={"/contacts/"} className={"footer-text"}> Контакты </Link>
        </div>
    );
};

export default FooterNavBar;
