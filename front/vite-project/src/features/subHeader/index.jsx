import React from 'react';

import './style.scss';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";

const SubHeader = ({text, img}) => {
    return (
        <div className={"sub-header"} style={{backgroundImage: `url(${img})`}}>
            <div className="sub-header__info-block">
                <h1>{text}</h1>
            </div>
            {/*<img*/}
            {/*    className={"sub-header__img"}*/}
            {/*    src={img} alt={text}/>*/}
        </div>
    );
};

export default SubHeader;
