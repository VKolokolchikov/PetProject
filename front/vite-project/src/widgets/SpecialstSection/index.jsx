import React from 'react';
import specialist from "../../assets/specialist.png";
import BaseButton from "../../shared/ui/baseButton/index.jsx";
import ModalForm from "../../widgets/modalForm/index.jsx";
import ApplicationForm from "../applicationForm/index.jsx";

import "./style.scss"
import NotificationRequestTypes from "../../constances/requestTypes.jsx";


const SpecialistSection = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <div>
        <div className="d-flex align-items-center specialist-block main-background ">
                <img className={"specialist-block__img"} src={specialist} alt={"специалист"}/>
                <div className="specialist-content-block">
                    <h2 className={"base-header"}> Заказать дистанционный просчет специалиста </h2>
                    <BaseButton
                        onClick={() => setModalShow(true)}
                        classesBtn={["additional-bg base-btn callback-btn base-header"]}
                        text={"оставить заявку"}
                    />
                </div>
        </div>
        <ModalForm show={modalShow} onHide={() => setModalShow(false)}>
                <ApplicationForm
                    request_type={NotificationRequestTypes.call_master}
                    setModal={setModalShow}
                />
        </ModalForm>
    </div>
    )

};

export default SpecialistSection;