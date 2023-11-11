import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import ApplicationForm from "../../widgets/applicationForm/index.jsx";

import imageForm from "../../assets/appForm.png"
import "./style.scss"

const CallBackBlock = () => {
    return (
        <div>
            <BaseTitle text={"Обратная связь"}/>
            <div className="callback-block">
                <img width={"446px"} src={imageForm} alt="imageForm" className="callback-block__img"/>
                <ApplicationForm/>
            </div>

        </div>
    );
};

export default CallBackBlock;