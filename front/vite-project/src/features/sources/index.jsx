import React from 'react';

import woman from '../../assets/banner-img.png';
import girl from '../../assets/appForm.png'

import './style.scss'


const SourcesImg = () => {
    return (
        <div className={'sources-img-block'}>
            Фотографии:
            Изображение от Freepik
            <a target={"_blank"} href="https://ru.freepik.com/free-photo/female-student-sitting-at-desk_2579456.htm#query=%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0%20%D0%B2%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BC%20%D0%B7%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%BC&position=31&from_view=search&track=ais#position=31&query=%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0%20%D0%B2%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BC%20%D0%B7%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%BC">
                <img width={'150px'} src={woman} alt={'Изображение от Freepik '}/>
            </a>
            Изображение от diana.grytsku на Freepik
            <a target={"_blank"} href="https://ru.freepik.com/free-photo/portrait-of-cute-young-brunette-student-holding-exercise-books-isolated-on-white-wall_14529409.htm#query=%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%BA%D0%B0&position=25&from_view=search&track=sph">
                <img width={'150px'}  src={girl} alt={'Изображение от diana.grytsku на Freepik'}/>
            </a>
        </div>
    );
};

export default SourcesImg;