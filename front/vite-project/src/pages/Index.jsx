import React from 'react';

import Banner from "../features/banner/index.jsx";
import ProofSlider from "../features/proof/index.jsx";
import Catalog from "../features/catalog/index.jsx";
// import Feedback from "../features/feedback/index.jsx";
import Callback from "../features/callback/index.jsx";
import Questions from "../features/questions/index.jsx";
import Specialist from "../features/specialist/index.jsx";

const IndexPage = () => {
    return (
        <div>
            <Banner/>
            <div className="content-block">
                <ProofSlider />
                <Catalog/>
                <Callback/>
                <Questions/>
                <Specialist/>
            </div>
        </div>
    );
};

export default IndexPage;