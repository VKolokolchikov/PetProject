import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import FurnitureSection from "../../widgets/FurnitureSection/index.jsx";
import Callback from "../callback/index.jsx";
import Specialist from "../specialist/index.jsx";

const Furniture = ({items}) => {
    return (
        <div>
            <BaseTitle text={"наши работы"}/>
            <FurnitureSection items={items}/>
            <Callback />
            <Specialist />
        </div>
    );
};

export default Furniture;