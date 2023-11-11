import React from 'react';
import { Route, Routes} from "react-router-dom";

import IndexPage from "../pages/Index.jsx";
import DisciplinePage from "../pages/discipline.jsx";
import TeachersPage from "../pages/teachers.jsx";
import TeacherPage from "../pages/teacher.jsx";
import DisciplinesPage from "../pages/disciplines.jsx";
import ContactsPage from "../pages/contacts.jsx";
import Online from "../pages/online.jsx";
import Vacancies from "../pages/vacancies.jsx";
import NotFoundPage from "../pages/notFound.jsx";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<IndexPage />} />
            <Route path={"/disciplines/"} element={<DisciplinesPage />} />
            <Route path={"/disciplines/:id/"} element={<DisciplinePage />} />
            <Route path={"/teachers/"} element={<TeachersPage />} />
            <Route path={"/teachers/:id/"} element={<TeacherPage />} />
            <Route path={"/contacts/"} element={<ContactsPage />} />
            <Route path={"/online-education/"} element={<Online />}/>
            <Route path={"/vacancies/"} element={<Vacancies />} />
            <Route path="/not-found/" element={<NotFoundPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    );
};

export default AppRouter;