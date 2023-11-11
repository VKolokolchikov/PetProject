import React from 'react';

import Banner from "../features/banner/index.jsx";
import ProofSlider from "../features/proof/index.jsx";
import Disciplines from "../features/disciplines/index.jsx";
import Feedback from "../features/feedback/index.jsx";
import Callback from "../features/callback/index.jsx";

const IndexPage = () => {
    return (
        <div>
            <Banner/>
            <ProofSlider />
            <div className={'main-content'}>
                <Disciplines />
                <Feedback />
                <Callback/>
            </div>
        </div>
    );
};

export default IndexPage;