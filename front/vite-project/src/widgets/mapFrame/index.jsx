import React from 'react';
import HTMLContent from "../../shared/ui/baseHTMLParserContent/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";

const MapFrame = ({ title, frame, describe=null}) => {
    return (
        <div>
            <BaseTitle text={title} />
            {describe && <p>{describe}</p>}
            <HTMLContent content={frame} />
        </div>
    );
};

export default MapFrame;