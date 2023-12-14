import React from 'react';

import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import FAQSection from "../../widgets/FAQSection/index.jsx";

const ProofSlider = () => {



    return (
        <div>
            <BaseTitle text={"Почему нас выбирают?"}/>
            <FAQSection slug={"reason"}/>
        </div>
    );
};

export default ProofSlider;