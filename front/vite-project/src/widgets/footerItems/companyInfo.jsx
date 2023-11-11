import React from 'react';

import footerLogo from '../../assets/logo-footer.png'
import {useEffect, useState} from "react";
import {useFetching} from "../../hooks/useFetching.js";
import DocumentsService from "../../api/documents/index.jsx";
import ModalForm from "../modalForm/index.jsx";
import SourcesImg from "../../features/sources";


const CompanyInfo = () => {
    const [documents, setDocuments] = useState([])
    const [modalShow, setModalShow] = React.useState(false);

    const [fetchResponse, isPostsLoading, postError] = useFetching(async () => {
        const response = await DocumentsService.getAll();
        setDocuments(prevState => ([...response.data.results]))
        })
        useEffect(() => {
            fetchResponse()
        }, []
        )
    return (
        <div className={"company-info"}>
            <img className={"company-info__img"} src={footerLogo} alt={"logo"}/>
            <p className={"footer-text sources-img"} onClick={() => setModalShow(true)}> Изображения на сайте </p>
            {documents.map((document, index)  =>
                <a key={index} target="_blank" href={document.file} className={"footer-text"}>{document.title} </a>
                )}
            <ModalForm show={modalShow} onHide={() => setModalShow(false)}>
                <SourcesImg/>
            </ModalForm>
        </div>
    );
};

export default CompanyInfo;
