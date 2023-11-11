import React from 'react';

const FooterNavBar = () => {
    return (
        <div className={"footer-nav-bar"}>
            <a href={"/#feedback_id"} className={"footer-text"}> Отзывы </a>
            <a href={"/teachers/"} className={"footer-text"}> Преподаватели </a>
            <a href={"/disciplines/"} className={"footer-text"}> Направления </a>
            <a href={"/online-education/"} className={"footer-text"}> Онлайн обучение </a>
            <a href={"/vacancies/"} className={"footer-text"}> Вакансии </a>
            <a href={"/contacts/"} className={"footer-text"}> Контакты </a>
        </div>
    );
};

export default FooterNavBar;
