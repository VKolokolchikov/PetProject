import React from 'react';
import BaseSlider from "../../shared/ui/baseSlider/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";

const FurnitureDetail = ({item}) => {
    return (
        <div>
            <BaseTitle text={item.title} />
            <p> {item.describe}</p>
            <BaseSlider items={item.images} section={"photo"} />
        </div>
    );
};

export default FurnitureDetail;