import React from 'react';
import catalogImg from "../assets/catalog.png";
import SubHeader from "../features/subHeader/index.jsx";
import Callback from "../features/callback/index.jsx";
import Specialist from "../features/specialist/index.jsx";
import Catalog from "../features/catalog/index.jsx";
import Feedback from "../features/feedback/index.jsx";

const BaseCatalogPage = () => {
    return (
        <div>
            <SubHeader img={catalogImg} text={"Каталог"}/>
            <div className="content-block">
                <Catalog/>
                <Feedback/>
                <Callback/>
                <Specialist/>
            </div>
        </div>
    );
};

export default BaseCatalogPage;