import React from 'react';
import Modal from "react-bootstrap/Modal";

import "./style.scss"

const ModaImage = ({children,...props}) => {
    return (
        <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
          {children}
      </Modal.Body>
    </Modal>
    );
};

export default ModaImage;