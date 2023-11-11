import React from 'react';
import MapFrame from "../mapFrame/index.jsx";

import "./style.scss"
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching.js";
import ContactService from "../../api/contacts/index.jsx";
import isEmpty from "../../utils/isEmtyChecher.js";


const ContactsInfo = () => {

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
        <div className={"contacts-block"}>
            {!isEmpty(contacts)
                && <div className="contacts-block__info">
                <h2>Адрес: <p>{contacts.address} </p></h2>
                <h2> Телефон: {contacts.connections?.map((connection, index) =>
                    { return connection.typeConnection === 1 && <p key={index}>
                        <a href={`tel:${connection.text}`}>
                                {connection.text}
                            </a>
                    </p>}
                )}</h2>
                <h2> Email: {contacts.connections?.map((connection, index) =>
                    {return connection.typeConnection === 2 && <p key={index}><a href={`mailto:${connection.text}`}>
                            {connection.text}
                        </a></p>}
                )}</h2>
                <h2> Время работа: <p>{contacts.workTime}</p></h2>
            </div>
            }
            <MapFrame />
        </div>
    );
};

export default ContactsInfo;