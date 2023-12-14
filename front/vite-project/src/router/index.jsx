import React from 'react';
import { Route, Routes} from "react-router-dom";

import IndexPage from "../pages/Index.jsx";

import NotFoundPage from "../pages/notFound.jsx";
import CatalogPage from "../pages/catalog.jsx";
import DeliveryPage from "../pages/delivery";
import ContactsPage from "../pages/contacts.jsx";
import AboutUsPage from "../pages/about";


const AppRouter = () => {

    return (
        <Routes>

            <Route exact path={"/catalog/:slug/"} element={<CatalogPage />} />
            <Route exact path={"/catalog/:slug/:id"} element={<CatalogPage />} />
            <Route path={"/delivery/"} element={<DeliveryPage/>} />
            <Route path={"/contacts/"} element={<ContactsPage/>} />
            <Route path={"/about/"} element={<AboutUsPage />} />
            <Route path={"/"} element={<IndexPage />} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    );
};

export default AppRouter;