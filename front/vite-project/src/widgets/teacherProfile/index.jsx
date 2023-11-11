import React from 'react';

import './style.scss'
import getAgeString from "../../utils/getAgeString.js";

const TeacherProfile = ({teacherData}) => {

    return (
        <div className={"teacher-profile-block"}>
            <div className={"teacher-profile-block__info"}>
                <img className={"teacher-profile__img"} src={teacherData.image} alt={teacherData.lastName}/>
                <div className="teacher-profile__title">
                    <h1 className="teacher-profile__name">
                        {`${teacherData.lastName} ${teacherData.firstName} ${teacherData.patronymic}`}
                    </h1>
                    <h2 className="teacher-profile__education">Образование: {teacherData.education}</h2>
                    <h2 className="teacher-profile__experience"> Стаж: {getAgeString(teacherData.experience)}</h2>
                </div>
            </div>
            {teacherData.aboutTeacher.map(block =>
                <div key={block.id} className="teacher-profile-block__about-me">
                    <h2 className={"teacher-profile-about-me__title"}>{block.title}</h2>
                    <p className={"teacher-profile-about-me__info"}>{block.info}</p>
                </div>
            )}
        </div>
    );
};

export default TeacherProfile;