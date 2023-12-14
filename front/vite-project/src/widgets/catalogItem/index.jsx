import React from 'react';

import './style.scss';
import BaseImg from "../../shared/ui/baseImg/index.jsx";
import {Link} from "react-router-dom";


const CatalogItem = ({item}) => {
    return (
        <Link to={`/catalog/${item.slug}/`} className={"detail"}>
            <div className={"catalog-item-block"}>
               <BaseImg
                   className={"catalog-item-block__img"}
                   src={item.logo}
                   alt={item.title}
               />
                <h2 className={"base-header"}> {item.title} </h2>
            </div>
        </Link>
    );
};

export default CatalogItem;
