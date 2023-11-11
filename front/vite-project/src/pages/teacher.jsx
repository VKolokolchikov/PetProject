import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching.js";
import TeacherService from "../api/teachers/index.jsx";
import TeacherInfo from "../features/teacherInfo/index.jsx";
import Disciplines from "../features/disciplines/index.jsx";
import Feedback from "../features/feedback/index.jsx";
import isEmpty from "../utils/isEmtyChecher.js";
import Loader from "../widgets/Loader/index.jsx";

const TeacherPage = () => {

    const params = useParams();
    const [teacherData, setTeacherData] = useState({})
    const {id}  = params;

    const [fetchTeacher, isLoading] = useFetching(async () => {
        const response = await TeacherService.getById(id);
        setTeacherData(prevState => ({...response.data}))
        })
    useEffect(() => {
        fetchTeacher()
    }, []
    )

    return (
        <div>
            {!isEmpty(teacherData)
                ?
                    <div className={'main-content'}>
                        <TeacherInfo teacherData={teacherData}/>
                        <Disciplines items={teacherData.disciplines} />
                        <Feedback params={{teacher_id: id}} />
                    </div>
                : <Loader/>
            }
        </div>
    );
};

export default TeacherPage;