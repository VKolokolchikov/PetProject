import React from 'react';

import DocumentsImageItem from "../DocumentsImageItem/index.jsx";
import BaseImg from "../../shared/ui/baseImg/index.jsx";
import ModalForm from "../modalForm/index.jsx";

import "./style.scss"

const DocumentsImageSection = ({images}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const  [targetImage, setTargetImage] = React.useState("")

    function openInModal(image){
        setTargetImage(image)
        setModalShow(true)
    }

    return (
        <div>
            <ModalForm style={{textAlign: "center"}} show={modalShow} onHide={() => setModalShow(false)}>
                <BaseImg width="100%" src={targetImage} alt={targetImage}/>
            </ModalForm>
            <div className="documents-box">
                {images.map((image, index) => (
                    <DocumentsImageItem
                        key={index}
                        image={image}
                        onClick={() => openInModal(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocumentsImageSection;
