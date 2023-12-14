import React from 'react';
import DeliveryTimeItem from "../DeliveryTimeItem/index.jsx";

import "./style.scss"

const DeliveryTimeSection = ({describe ,times}) => {
    return (
        <div className={"delivery-time"}>
            <p>{describe}</p>
            <div className={"delivery-time-section"}>
            {times?.map(time =>
                <DeliveryTimeItem key={time} time={time}/>
            )}
        </div>
        </div>
    );
};

export default DeliveryTimeSection;