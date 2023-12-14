import React from 'react';

import "./style.scss"
import BaseImg from "../baseImg/index.jsx";

const BaseHeader = ({img, title}) => {
    return (
        <div className={"base-header-block"}>
            <div className="base-header-block__img">
                <BaseImg src={img} alt={title}/>
            </div>
            <div className="base-header-block__title">
                <h2 className={"base-header"}> {title} </h2>
            </div>
        </div>
    );
};

export default BaseHeader;