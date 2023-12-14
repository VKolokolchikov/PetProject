import React from 'react';

import ContactService from "../../api/contacts/index.jsx";
import {useFetching} from "../../hooks/useFetching.js";
import {useEffect, useState} from "react";
import isEmpty from "../../utils/isEmtyChecker.js";
import BaseImg from "../../shared/ui/baseImg/index.jsx";


const FooterContacts = () => {
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
        <div className={"footer-contacts"}>
            {!isEmpty(contacts)
                ? <div>
                <div className={"footer-contacts__list"}>
                <p className={"footer-text"}> Адрес: {contacts.address} </p>
                {contacts.connections?.map((connection, index) => {
                    switch (connection.typeConnection) {
                      case 1:
                        return <p key={index} className={"footer-text"}>
                            <a href={`tel:${connection.text}`}>
                                {connection.text}
                            </a>{` (${contacts.workTime})`}
                        </p>
                      case 2:
                        return <p key={index} className={"footer-text"}>
                            Email: <a href={`mailto:${connection.text}`}>
                            {connection.text}
                        </a>
                        </p>
                    }
                })}
            </div>
                <div className={"footer-contacts__links"}>
                {contacts.socialLinks?.map((socialLink, index)  =>
                <a key={index} href={socialLink.link}><BaseImg src={socialLink.image} alt={socialLink.name}/></a>
                )}
            </div>
                </div>
                : ''
            }
        </div>

    );
};

export default FooterContacts;