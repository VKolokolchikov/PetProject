import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import ModaImage from "../../../widgets/modalImage/index.jsx";
import FeedbackSection from "../../../widgets/feedbackSection/index.jsx";
import FurniturePhotoSection from "../../../widgets/FurniturePhotoSection/index.jsx";

import './style.scss'


const BaseSlider = ({items, section, toFullScreen=false}) => {
    const [modalShow, setModalShow] = React.useState(false);

    function openInModalForm(e) {
        setModalShow(true)
    }

    const pickSection = {
        feedback: FeedbackSection,
        photo: FurniturePhotoSection,
    }

    return (
        <div className={"slider-block main-background"}>
            <ModaImage show={modalShow} onHide={() => setModalShow(false)}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {items?.map((item, index)  =>
                    <SwiperSlide
                        key={index}
                    >
                        {React.createElement(pickSection[section], {item:item})}
                    </SwiperSlide>
                )}
            </Swiper>
            </ModaImage>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {items?.map((item, index)  =>
                    <SwiperSlide
                        key={index}
                    >
                        {React.createElement(pickSection[section], {item:item, onClick: openInModalForm})}
                    </SwiperSlide>
                )}
            </Swiper>

        </div>
    );
};

export default BaseSlider;