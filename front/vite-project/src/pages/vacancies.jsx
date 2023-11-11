import React from 'react';
import SubHeader from "../features/subHeader/index.jsx";
import HeadersConst from "../constances/headers.jsx";
import BaseContentBlock from "../shared/ui/baseContentBlock/index.jsx";
import StaticContentConst from "../constances/staticContent.jsx";
import Callback from "../features/callback/index.jsx";

const Vacancies = () => {
    return (
        <div>
            <SubHeader data={HeadersConst.vacancies} />
            <BaseContentBlock text={StaticContentConst.vacancies.text} img={StaticContentConst.vacancies.img}/>
            <Callback />
        </div>
    );
};

export default Vacancies;