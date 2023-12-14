import React from 'react';
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching.js";
import ContactService from "../../api/contacts/index.jsx";
import ContactsInfoItem from "../ContactsInfoItem/index.jsx";
import MapFrame from "../mapFrame/index.jsx";

import addressImg from "../../assets/address.png";
import phoneImg from "../../assets/phone.png";
import mailImg from "../../assets/mail.png";

import "./style.scss"
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import Loader from "../Loader/index.jsx";


const ContactsInfo = () => {

    const connectionMAP = {
        1: {
            title: "Номер телефона",
            img: phoneImg,
            keyLink: "tel",
        },
        2: {
            title: "Почта",
            img: mailImg,
            keyLink: "mailto",
        }
    }

    const [contacts, setContacts] = useState({})

    const [fetchResponse, isPostsLoading, postError] = useFetching(async () => {
        const response = await ContactService.getAll();
        setContacts(prevState => ({...response.data}))
        })
        useEffect(() => {
            fetchResponse()
        }, []
        )


    return (
        <div >
            {!isPostsLoading
                ? <div>
                    <BaseTitle text={`Время работы: ${contacts.workTime}`} />
                        <div className="contacts-block">
                            <ContactsInfoItem title={"Адрес"} img={addressImg} data={contacts.address}/>
                            {contacts.connections?.map((connection, index) =>
                                    <ContactsInfoItem
                                        title={connectionMAP[connection.typeConnection].title}
                                        img={connectionMAP[connection.typeConnection].img}
                                        data={
                                        <a href={
                                            `${connectionMAP[connection.typeConnection].keyLink}:${connection.text}`
                                        }>{connection.text}
                                        </a>
                                    }
                                    />
                            )}
                        </div>
                    <MapFrame title={"Мы на карте"} frame={contacts.geoPosition}/>
                </div>
                : <Loader />
            }
        </div>
    );
};

export default ContactsInfo;