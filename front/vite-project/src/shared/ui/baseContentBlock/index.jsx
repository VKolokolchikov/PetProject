import React from 'react';

import './style.scss'
import BaseHTMLParserContent from "../baseHTMLParserContent/index.jsx";
import BaseImg from "../baseImg/index.jsx";
import BaseTitle from "../baseTitle/index.jsx";

const BaseContentBlock = ({img, text}) => {
    return (
        <div className={"base-content-block"}>
            <h1> 404 </h1>
            <p> Страница не найдена!</p>
        </div>
    );
};

export default BaseContentBlock;