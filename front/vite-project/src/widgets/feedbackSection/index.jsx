import React from 'react';

import './style.scss'
import BaseImg from "../../shared/ui/baseImg/index.jsx";

const FeedbackSection = ({item}) => {
    return (
        <div className={"feedback-section"}>
            <div className="feedback-section__info-block">
                <BaseImg src={item.image} alt={"customer_photo"}/>
                <div className="feedback-section__customer-block">
                    <h2 className="customer-name">{item.fio}</h2>
                    <div className="feedback-section__comment-block">
                        {item.comment}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeedbackSection;