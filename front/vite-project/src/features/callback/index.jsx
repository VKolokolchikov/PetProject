import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import ApplicationForm from "../../widgets/applicationForm/index.jsx";

import imageForm from "../../assets/woman-in-form.png"
import "./style.scss"

const CallBackBlock = () => {
    return (
        <div>
            <BaseTitle text={"Обратная связь"}/>
            <div>
                <div className="callback-block">
                    <img src={imageForm} alt="imageForm" className="callback-block__img"/>
                    <div className="callback-block__forms">
                        <ApplicationForm/>
                    </div>
            </div>
            </div>


        </div>
    );
};

export default CallBackBlock;