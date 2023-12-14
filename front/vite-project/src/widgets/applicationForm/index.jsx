import React from 'react';
import {useState, useEffect} from "react";

import BaseInput from "../../shared/ui/baseInput/index.jsx";
import BaseButton from "../../shared/ui/baseButton/index.jsx";

import "./style.scss"
import NotificationsService from "../../api/notifications/index.jsx";
import isEmpty from "../../utils/isEmtyChecker.js";
import getErrorText from "../../utils/getErrorText.js";
import NotificationRequestTypes from "../../constances/requestTypes.jsx";

const ApplicationForm = ({request_type, setModal}) => {
    const target_request_type = NotificationRequestTypes[request_type] || NotificationRequestTypes.callback
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({})
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function onSubmit(e){
        e.preventDefault()
        NotificationsService.sendData(
            {fio: name, phone:phone, request_type: target_request_type},
            setSuccess,
            setError,
        )
    }


    useEffect(()=> {
        if (success === true){
            alert("Заявка принята! Скоро перезвоним!");
            if (setModal) {
                setModal(false);
            }
        }

        setPhone('');
        setName('');
        setSuccess(false)
    },[success])

    return (
        <div className={"d-flex flex-column align-items-center"}>
            {!isEmpty(error)
                && alert(getErrorText(error, setError))
            }
            <h2 className="application-form-title base-header">
                    Закажи звонок и мы тебе перезвоним
            </h2>
            <form onSubmit={onSubmit} className={"application-form"}>

                <BaseInput classesInput={["base-input callback-input"]} value={name} required placeholder={"Имя"} onChange={(e) => {setName(e.target.value)}}/>
                <BaseInput value={phone} required placeholder={"Телефон"} onChange={(e) => {setPhone(e.target.value)}}/>
                <div>
                    <input type="checkbox" id="policy" name="policy" required/>
                    <label
                        style={{padding: "10px"}}
                        htmlFor="policy"
                    >
                        Я согласен с политикой обработки персональных данных
                    </label>
                </div>
                <BaseButton classesBtn={["additional-bg base-btn callback-btn base-header"]} text={"Перезвонить"} />
            </form>
        </div>
    );
};

export default ApplicationForm;