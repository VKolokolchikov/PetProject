import React from 'react';


import SpecialistSection from "../../widgets/SpecialstSection/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";


const Specialist = () => {

    return (
        <div>
            <BaseTitle text={"просчет специалиста"}/>
            <SpecialistSection/>
        </div>
    );
};

export default Specialist;