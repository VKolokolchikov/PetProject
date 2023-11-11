import React from 'react';

import './style.scss'
import BaseHTMLParserContent from "../baseHTMLParserContent/index.jsx";

const BaseContentBlock = ({img, text}) => {
    return (
        <div className={"base-content-block"}>
            <img className={"base-content-block__img"} src={img} alt={img} />
            <BaseHTMLParserContent content={text} />
        </div>
    );
};

export default BaseContentBlock;