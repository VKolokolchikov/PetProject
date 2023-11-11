import React from 'react';
import HeadersConst from "../constances/headers.jsx";
import SubHeader from "../features/subHeader/index.jsx";
import Callback from "../features/callback/index.jsx";
import Disciplines from "../features/disciplines/index.jsx";

const DisciplinesPage = () => {
    return (
        <div>
            <SubHeader data={HeadersConst.disciplines} />
            <div className={'main-content'}>
                <Disciplines />
                <Callback/>
            </div>
        </div>
    );
};

export default DisciplinesPage;