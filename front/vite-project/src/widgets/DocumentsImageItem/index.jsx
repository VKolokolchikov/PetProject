import React from 'react';
import BaseImg from "../../shared/ui/baseImg/index.jsx";

import "./style.scss"


const DocumentsImageItem = ({image, ...props}) => {
    return (
        <div className={"documents-item"} >
            <BaseImg src={image} alt={image} {...props}/>
        </div>
    );
};

export default DocumentsImageItem;