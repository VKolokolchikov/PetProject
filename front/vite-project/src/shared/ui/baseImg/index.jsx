import React from 'react';
import {BASE_URL} from "../../../api/apiRoutes.js"

const BaseImg = ({src, ...props}) => {
    console.log(BASE_URL + "sadSAdads")
    return (
        <img
            src={BASE_URL + src}
            {...props}
    />
    );
};

export default BaseImg;
