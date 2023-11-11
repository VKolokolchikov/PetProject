import React from 'react';

import './style.scss';
import getAgeString from "../../utils/getAgeString.js";

const TeacherCard = ({teacher}) => {

    return (
        <div className={"teacher-card-block"}>
            <div className="teacher-card-block__info">
                <img src={teacher.image} alt={teacher.firstName} className="teacher-photo"/>
                <h2 className="teacher-name">{teacher.firstName}</h2>
                <h2 className="teacher-experience">Стаж: {getAgeString(teacher.experience)}</h2>
            </div>
            <a href={`/teachers/${teacher.id}`} className={"more-info"}>Подробнее</a>
        </div>
    );
};

export default TeacherCard;
