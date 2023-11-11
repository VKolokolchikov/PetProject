import React from 'react';
import SubHeader from "../features/subHeader/index.jsx";
import HeadersConst from "../constances/headers.jsx";
import BaseContentBlock from "../shared/ui/baseContentBlock/index.jsx";
import StaticContentConst from "../constances/staticContent.jsx";
import Callback from "../features/callback/index.jsx";

const Online = () => {
    return (
        <div>
            <SubHeader data={HeadersConst.online} />
            <BaseContentBlock text={StaticContentConst.online.text} img={StaticContentConst.online.img} />
            <Callback />
        </div>
    );
};

export default Online;