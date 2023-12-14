import React from 'react';

import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching.js";
import CatalogItem from "../catalogItem/index.jsx";
import FurnitureService from "../../api/furniture/index.jsx";

import "./style.scss"
import Loader from "../Loader/index.jsx";

const CatalogSection = () => {

    const [catalogItems, setCatalogItems] = useState([])
    const [fetchCatalogItems, isPostsLoading, postError] = useFetching(async () => {
            const response = await FurnitureService.getAllTypes();
            setCatalogItems(prevState => ([...response.data.results]))
        })
        useEffect(() => {
            fetchCatalogItems()
        }, []
        )

    return (
        <div className={"catalog-section"}>
            {!isPostsLoading
                ? catalogItems?.map(itemObj =>
                <CatalogItem key={itemObj.title} item={itemObj}/>)
                : <Loader />
            }
        </div>

    );
};

export default CatalogSection;