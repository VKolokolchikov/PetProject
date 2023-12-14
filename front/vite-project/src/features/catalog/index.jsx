import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import CatalogSection from "../../widgets/catalogSection/index.jsx";

const Catalog = () => {
    return (
        <div>
            <BaseTitle text={"Каталог"}/>
            <CatalogSection/>
        </div>
    );
};

export default Catalog;