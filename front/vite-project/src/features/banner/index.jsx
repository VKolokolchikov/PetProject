import React from 'react';
import label from '../../assets/logotype.png'
import flags from '../../assets/flags.png'
import './style.scss'
import BaseButton from "../../shared/ui/baseButton/index.jsx";
import Timer from "../../widgets/SaleTimer/index.jsx";
import ModalForm from "../../widgets/modalForm/index.jsx";
import ApplicationForm from "../../widgets/applicationForm/index.jsx";


const Banner = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
                <div className="banner-box">
            <div className="banner-box__items">
                <div className="banner-box__title-block prime-bg">
                    <img src={label} alt={'logotype'}/>
                </div>
                <div className="banner-box__info-block">
                    <div className="info-box__describe">
                        <p>Обучение для детей и взрослых в Сочи п. Сириус, ул. Фигурная 45 с. 3</p>
                        <img src={flags} alt="flags"/>
                    </div>
                    <div className="info-box__join">
                        <p>Стоимость первого урока</p>
                       <span className="join-price">
                           <p><s>800 рублей</s></p>
                           <p><b>Бесплатно</b></p>
                       </span>
                        <BaseButton
                            onClick={() => setModalShow(true)}
                            styleBtn={{margin:"15px auto"}}
                            classesBtn={["prime-bg base-btn join-to-class"]}
                            text={"Записаться на бесплатный урок"}/>
                        <p>До конца акции осталось</p>
                        <Timer hours={23} minutes={59} seconds={59}/>
                    </div>
                </div>
            </div>
        </div>
            <ModalForm show={modalShow} onHide={() => setModalShow(false)}>
                <ApplicationForm/>
            </ModalForm>
        </>
    );
};

export default Banner;
