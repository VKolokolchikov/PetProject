import React from 'react';
import BaseContentBlock from "../shared/ui/baseContentBlock/index.jsx";
import notFoundImg from "../assets/notfound.png"

const NotFoundPage = () => {
    return (
        <div>
            <BaseContentBlock img={notFoundImg} />
        </div>
    );
};

export default NotFoundPage;