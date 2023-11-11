import React from 'react';

import './style.scss';

const SubHeader = ({data}) => {
    const {title, quote, author, img} = data
    return (
        <div className={"sub-header"}>
            <div className="sub-header__info-block">
                <h1 className="info-block__title">{title}</h1>
                <h3 className="info-block__quote">{quote}</h3>
                <h2 className="info-block__author">{author}</h2>
            </div>
            <img
                style={{width: !quote & !author ? '250px' : '350px'}}
                className={"sub-header__img"}
                src={img} alt={title}/>
        </div>
    );
};

export default SubHeader;
