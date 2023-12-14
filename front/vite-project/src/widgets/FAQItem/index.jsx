import React from 'react';

import arrowImg from '../../assets/arrow.png';
import './style.scss';
import BaseImg from "../../shared/ui/baseImg/index.jsx";

const FAQItem = ({item}) => {
    const prefixAnswerId = "answer_id_"
    const openClass = "open-answer"

    function openCloseAnswer(id) {
        const el = window.document.getElementById(`${prefixAnswerId}${id}`)
        if (el.classList.contains(openClass)) {
            el.classList.remove(openClass);

        }
        else {
            el.classList.add(openClass)
        }
    }



    return (
        <div className={"faq-section"}>
            <div className="faq-section__header">
                <div className="faq-header-title">
                    <BaseImg className="faq-header-title__img"
                         src={item.image}
                         alt={item.title}
                    />
                    <h1 className={"faq-header-title__text base-header"}>
                        {item.title}
                    </h1>
                </div>
                <img
                    className={"arrow-action"}
                    src={arrowImg}
                    alt={"open/close"}
                    onClick={() => openCloseAnswer(item.id)}
                />

            </div>
            <div id={`${prefixAnswerId}${item.id}`} className="faq-section__answer">
                <h2 className={"answer__describe base-text"}>
                    {item.answer}
                </h2>
            </div>
        </div>
    );
};

export default FAQItem;