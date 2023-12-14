import React, {useEffect, useState} from 'react';

import AboutMeService from "../../api/about/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import YoutubeEmbed from "../../shared/ui/baseVideoFrame/index.jsx";
import {useFetching} from "../../hooks/useFetching.js";
import Loader from "../../widgets/Loader/index.jsx";

import "./style.scss";
import DocumentsImageSection from "../../widgets/DocumentsImageSection/index.jsx";


const AboutUs = () => {
    const [about, setAbout] = useState({})

    const [fetchResponse, isLoading, postError] = useFetching(async () => {
        const response = await AboutMeService.getAll();
        setAbout(prevState => ({...response.data}))
        })
        useEffect(() => {
            fetchResponse()
        }, []
        )
    return (
        <div>
            {!isLoading
                ? <div>
                    <BaseTitle text={"О нас"} />
                    <p>{about.describe}</p>
                    <div className={"video-block main-background"}>
                        <YoutubeEmbed id={"video-about-us"} embedId={about.youtubeId}/>
                    </div>
                    {about?.image && <div>
                        <BaseTitle text={"Документы и лицензии"} />
                        <DocumentsImageSection images={about.image}/>
                    </div>}
                </div>
                : <Loader/>
            }
        </div>
    );
};

export default AboutUs;