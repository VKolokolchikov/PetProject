import React from 'react';
import {BASE_URL} from "../../../api/apiRoutes.js"

const BaseImg = ({src, ...props}) => {
    console.log(src)
    const url_img = src.startsWith('http')  ? src : BASE_URL + src
    return (
        <img
            src={url_img}
            {...props}
    />
    );
};

export default BaseImg;
