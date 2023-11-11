import React from 'react';
import TeacherProfile from "../../widgets/teacherProfile/index.jsx";

const TeacherInfo = ({teacherData}) => {
    return (
        <div>
            <TeacherProfile teacherData={teacherData}/>
        </div>
    );
};

export default TeacherInfo;