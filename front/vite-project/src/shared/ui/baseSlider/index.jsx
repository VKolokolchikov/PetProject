import React, {useState, useEffect} from 'react';

import BaseChanger from "../baseChanger/index.jsx";
import ProofSection from "../../../widgets/proofSection/index.jsx";
import FeedbackSection from "../../../widgets/feedbackSection/index.jsx";

import './style.scss'

const BaseSlider = ({items}) => {
    const itemsOnPage = items.items

    const pickSection = {
        proof: ProofSection,
        feedback: FeedbackSection,
    }


    const [page, setPage] = useState(0);
    const [item, setItem ] = useState(itemsOnPage[page])
    const [count, _] = useState(items.count)
    const [section, __] = useState(items.section)



    useEffect(() => {
        setItem(itemsOnPage[page])
    },[page]);


    return (
        <div>

            {React.createElement(pickSection[items.section], {item:item})}
            <div className="changer-block">
                {count > 1 && [...Array(count).keys()].map((x, i) =>
                <BaseChanger key={i} setPage={setPage} page={page} section={section} number={i}/>
            )}
            </div>
        </div>
    );
};

export default BaseSlider;