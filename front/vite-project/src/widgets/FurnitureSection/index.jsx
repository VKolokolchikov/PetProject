import React from 'react';
import FurnitureItem from "../FurnitureItem/index.jsx";

import "./style.scss"


const FurnitureSection = ({items}) => {
    return (
        <div className={"furniture-section"}>
            {items?.map(itemObj =>
                <FurnitureItem key={itemObj.id} item={itemObj}/>
            )}
        </div>
    );
};

export default FurnitureSection;