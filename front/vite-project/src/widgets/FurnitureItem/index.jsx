import React from 'react';
import BaseImg from "../../shared/ui/baseImg/index.jsx";
import BaseButton from "../../shared/ui/baseButton/index.jsx";

import "./style.scss"
import {Link, useParams} from "react-router-dom";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";

const FurnitureItem = ({item}) => {
    const params = useParams();
    const {slug}  = params;

    return (
        <div className={"main-background furniture-item-block"}>
            <div className="furniture-item-block__img">
                <BaseImg src={item.image}/>
                <BaseTitle text={item.title}/>
            </div>
            <div className={"fade-block-link"}>
                <Link to={`/catalog/${slug}/${item.id}/`}>

                <BaseButton
                    classesBtn={["furniture-item-block__btn additional-bg base-btn callback-btn base-header"]}
                    text={"подробнее"}/>
            </Link>
            </div>
        </div>
    );
};

export default FurnitureItem;