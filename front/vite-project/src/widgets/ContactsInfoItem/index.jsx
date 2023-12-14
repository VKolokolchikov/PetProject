import React from 'react';

import "./style.scss"

const ContactsInfoItem = ({title, img, data}) => {
    return (
        <div className={"contacts-info-item"}>
            <img className={"contacts-info-item__img"} src={img} alt={title}/>
            <h2 className={"contacts-info-item__title"}>{title}</h2>
            <p className={"contacts-info-item__data"}>{data}</p>
        </div>
    );
};

export default ContactsInfoItem;