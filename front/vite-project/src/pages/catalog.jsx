import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import FurnitureService from "../api/furniture/index.jsx";
import Loader from "../widgets/Loader/index.jsx";
import BaseHeader from "../shared/ui/baseHeader/index.jsx";
import {useFetching} from "../hooks/useFetching.js";
import Furniture from "../features/furniture/index.jsx";
import DetailBlock from "./itemDetail";

const CatalogPage = () => {
    const params = useParams();
    const [furnitureData, setFurnitureData] = useState({items: []})
    const {slug, id}  = params;



    const [fetchFurniture, isLoading] = useFetching(async () => {
        const response = await FurnitureService.getBySlug(slug);
        setFurnitureData(prevState => ({...response.data}))
        })

    useEffect(() => {
        fetchFurniture()
    }, [slug]
    )

    return (
        <div>
             {!isLoading
                ?
                 <div>
                     <BaseHeader img={furnitureData.banner} title={furnitureData.title}/>
                     {!id
                         ? <div className="content-block"><Furniture items={furnitureData.items}/></div>
                         : <div className="content-block"><DetailBlock slug={slug} id={id}/></div>
                     }
                 </div>
                : <Loader/>
            }

        </div>
    );
};

export default CatalogPage;
