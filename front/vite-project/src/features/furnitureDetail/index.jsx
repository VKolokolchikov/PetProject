import React from 'react';
import BaseSlider from "../../shared/ui/baseSlider/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import HTMLContent from "../../shared/ui/baseHTMLParserContent/index.jsx";

const FurnitureDetail = ({item}) => {
    return (
        <div>
            <BaseTitle text={item.title} />
            <div> <HTMLContent content={item.describe} /> </div>
            <BaseSlider items={item.images} section={"photo"} />
        </div>
    );
};

export default FurnitureDetail;