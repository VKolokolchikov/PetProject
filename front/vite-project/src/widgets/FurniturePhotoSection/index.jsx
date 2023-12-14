import React from 'react';
import BaseImg from "../../shared/ui/baseImg/index.jsx";

import "./style.scss"


const FurniturePhotoSection = ({item, onClick}) => {
    return (
        <div className={"furniture-photo"} >
            <BaseImg className={"furniture-photo__img"} src={item} alt={"photo"} onClick={onClick}></BaseImg>
        </div>
    );
};

export default FurniturePhotoSection;