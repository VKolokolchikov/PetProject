import React from 'react';

import './style.scss';
import TeacherCard from "../teacherCard/index.jsx";

const TeacherCardList = ({items}) => {

    return (
        <div className={"teacher-list-block"}>
            {items.map(teacherItem =>
                <TeacherCard key={teacherItem.id} teacher={teacherItem}/>
            )}
        </div>
    );
};

export default TeacherCardList;
