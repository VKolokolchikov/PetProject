import React from "react";
import './style.scss'

const BaseTitle = ({text}) => {

    return (
        <div>
            <h1 className="main-title"> {text} </h1>
        </div>
    );
};

export default BaseTitle;