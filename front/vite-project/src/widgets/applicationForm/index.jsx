import React from 'react';
import {useState, useEffect} from "react";

import BaseInput from "../../shared/ui/baseInput/index.jsx";
import BaseButton from "../../shared/ui/baseButton/index.jsx";

import "./style.scss"
import NotificationsService from "../../api/notifications/index.jsx";
import isEmpty from "../../utils/isEmtyChecher.js";
import getErrorText from "../../utils/getErrorText.js";

const ApplicationForm = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({})
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function onSubmit(e){
        e.preventDefault()
        NotificationsService.sendData({fio: name, phone:phone}, setSuccess, setError
        )
    }

    useEffect(()=> {
        setPhone('');
        setName('');
    },[success])

    return (
        <div>
            {!isEmpty(error)
                && alert(getErrorText(error, setError))
            }
            <form onSubmit={onSubmit} className={"application-form"}>
                <h2 className="application-form__title">
                    Заявка на звонок
                </h2>
                <h3 className="application-form__describe">
                    Мы обязательно перезвоним
                </h3>
                <BaseInput value={name} required placeholder={"Имя"} onChange={(e) => {setName(e.target.value)}}/>
                <BaseInput value={phone} required placeholder={"Телефон"} onChange={(e) => {setPhone(e.target.value)}}/>
                <BaseButton classesBtn={["additional-bg base-btn callback-btn"]} text={"Перезвонить"} />
            </form>
        </div>
    );
};

export default ApplicationForm;