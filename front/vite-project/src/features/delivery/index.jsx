import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching.js";

import MapFrame from "../../widgets/mapFrame/index.jsx";
import DeliveryService from "../../api/delivery/index.jsx";
import DeliveryTimeSection from "../../widgets/DeliveryTimeSection/index.jsx";
import Loader from "../../widgets/Loader/index.jsx";

const DeliveryBlock = () => {
    const [delivery, setDelivery] = useState({})
    const [fetchResponse, isDeliveryLoading, Error] = useFetching(async () => {
        const response = await DeliveryService.getAll();
        setDelivery(prevState => ({...response.data}))
        })
        useEffect(() => {
            fetchResponse()
        }, []
        )
    return (
        <div>
            {!isDeliveryLoading
                ?
                <div>
                    <MapFrame
                    title={"быстро   ·  надежно  ·  качествено"}
                    frame={delivery.geoPosition}
                    describe={delivery.aboutGeo}
                    />
                    <DeliveryTimeSection describe={delivery.aboutWorkTime} times={delivery.workTime}/>
                </div>
                : <Loader/>
            }
        </div>
    );
};

export default DeliveryBlock;