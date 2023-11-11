import React from 'react';
import Callback from "../features/callback/index.jsx";
import BasePaginationSlider from "../shared/ui/basePaginationSlider/index.jsx";

import TeacherService from "../api/teachers/index.jsx";
import SubHeader from "../features/subHeader/index.jsx";
import HeadersConst from "../constances/headers.jsx";

const TeachersPage = () => {
    return (
        <div>
            <SubHeader data={HeadersConst.teachers} />
            <div className={'main-content'}>
                <BasePaginationSlider section={'teachers'} service={TeacherService} />
                <Callback/>
            </div>
        </div>
    );
};

export default TeachersPage;