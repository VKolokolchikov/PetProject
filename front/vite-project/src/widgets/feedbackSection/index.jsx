import React from 'react';

import './style.scss'

const FeedbackSection = ({item}) => {
    return (
        <div className={"feedback-section"}>
            <div className="feedback-section__info-block">
                <img src={item.image} alt={"customer_photo"}/>
                <div className="feedback-section__customer-block">
                    <h2 className="customer-name">{item.fio}</h2>
                    <p className="social-status">{item.socialStatus}</p>
                    <p className="city">{item.city}</p>
                </div>
            </div>
            <div className="feedback-section__comment-block">
                {item.comment}
            </div>
        </div>
    );
};

export default FeedbackSection;