import React, {useEffect, useState}from 'react';

import {useFetching} from "../hooks/useFetching.js";
import FurnitureService from "../api/furniture/index.jsx";
import {useParams} from "react-router-dom";
import FurnitureDetail from "../features/furnitureDetail/index.jsx";
import Feedback from "../features/feedback/index.jsx";
import Loader from "../widgets/Loader/index.jsx";
import Callback from "../features/callback/index.jsx";
import Specialist from "../features/specialist/index.jsx";

const DetailBlock = ({slug=null, id=null}) => {
    if (slug === null || id === null) {
        const params = useParams();
        slug = params.slug;
        id = params.id;
    };

    const [itemData, setItemData] = useState({});

     const [fetchItem, isLoadingItem] = useFetching(async () => {
        const response = await FurnitureService.getElement(slug, id);
        setItemData(prevState => ({...response.data}));
        })

    useEffect(() => {
        fetchItem()
    }, []
    )

    return (
        <div>
            {!isLoadingItem  ?
                <div>
                    <div className="content-block">
                        <FurnitureDetail item={itemData}/>
                        <Feedback params={{furniture_id: id}}/>
                        <Callback />
                        <Specialist />
                    </div>
                </div>
                : <Loader />
            }
        </div>
    );
};

export default DetailBlock;