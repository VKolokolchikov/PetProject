import React from 'react';
import SubHeader from "../features/subHeader/index.jsx";
import Contacts from "../features/contacts/index.jsx";
import Callback from "../features/callback/index.jsx";

import baseBannerImg from "../assets/base-banner.png"
import Specialist from "../features/specialist/index.jsx";

const ContactsPage = () => {
    return (
        <div>
            <SubHeader text={"Контакты"} img={baseBannerImg}/>
            <div className={'main-content'}>
                <Contacts />
                <Callback />
                <Specialist />
            </div>
        </div>
    );
};

export default ContactsPage;