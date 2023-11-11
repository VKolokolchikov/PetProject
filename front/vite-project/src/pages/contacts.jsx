import React from 'react';
import SubHeader from "../features/subHeader/index.jsx";
import Contacts from "../features/contacts/index.jsx";
import Callback from "../features/callback/index.jsx";
import HeadersConst from "../constances/headers.jsx";

const ContactsPage = () => {
    return (
        <div>
            <SubHeader data={HeadersConst.contacts}/>
            <div className={'main-content'}>
                <Contacts />
                <Callback />
            </div>
        </div>
    );
};

export default ContactsPage;