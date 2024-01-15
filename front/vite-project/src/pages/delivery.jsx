import React from 'react';
import SubHeader from "../features/subHeader/index.jsx";

import deliveryImg from "../assets/delivery.jpg"
import DeliveryBlock from "../features/delivery";
import Callback from "../features/callback/index.jsx";
import Specialist from "../features/specialist/index.jsx";
const DeliveryPage = () => {
    return (
        <div>
            <SubHeader img={deliveryImg} text={"Доставка"}/>
            <div className="content-block">
                <DeliveryBlock />
                <Callback />
                <Specialist />
            </div>
        </div>
    );
};

export default DeliveryPage;