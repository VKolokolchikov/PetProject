import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalForm = ({children,...props}) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
          {children}
      </Modal.Body>
    </Modal>
    );
};

export default ModalForm;