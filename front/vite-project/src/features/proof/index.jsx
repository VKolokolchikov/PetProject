import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import BaseSlider from "../../shared/ui/baseSlider/index.jsx";
import ProofItems from "../../constances/proofConst.jsx";

const ProofSlider = () => {

    const items = ProofItems;

    return (
        <div>
            <BaseTitle text={"Почему нас выбирают?"}/>
            <BaseSlider items={items}/>
        </div>
    );
};

export default ProofSlider;