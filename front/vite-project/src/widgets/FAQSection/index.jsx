import React from 'react';

import FAQItem from "../FAQItem/index.jsx";
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching.js";
import FAQService from "../../api/faq/index.jsx";
import Loader from "../Loader/index.jsx";

const FAQSection = ({slug}) => {


    const [faqItems, setFaqItems] = useState([])
    const [fetchFaqItems, isLoading, postError] = useFetching(async () => {
            const response = await FAQService.getFaqDataBySlug(slug);
            setFaqItems(prevState => ([...response.data.results]))
        })
        useEffect(() => {
            fetchFaqItems()
        }, []
        )

    return (
        <div>
            {!isLoading ? faqItems?.map(itemObj =>
                <FAQItem key={itemObj.title} item={itemObj}/>
            ): <Loader/>
            }
        </div>

    );
};

export default FAQSection;