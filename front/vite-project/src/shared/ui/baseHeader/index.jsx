import React from 'react';

import "./style.scss"

const BaseHeader = ({img, title}) => {
    return (
        <div className={"base-header-block"}>
            <img className={"base-header-block__img"} src={img} alt={title}/>
            <h2 className={"base-header-block__title"}>{title}</h2>
        </div>
    );
};

export default BaseHeader;