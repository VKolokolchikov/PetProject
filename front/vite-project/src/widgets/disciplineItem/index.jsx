import React from 'react';

import './style.scss'

const DisciplineItem = ({id, title, img}) => {
    return (
        <a href={`/disciplines/${id}`} className={"discipline-item-block prime-bg"}>
            <img className={"discipline-item-block__img"} src={img} alt={title}/>
            <h2 className={"discipline-item-block__title"}>{title}</h2>
        </a>
    );
};

export default DisciplineItem;