import React from 'react';

import "./style.scss"

const DeliveryTimeItem = ({time}) => {
    return (
        <div className={"delivery-time-item additional-bg"}>
            <p>{time}</p>
        </div>
    );
};

export default DeliveryTimeItem;