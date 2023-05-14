import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfModal(props) {

  return (
    <>

      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton onClick={props.hide}>
          <Modal.Title>thanks for using our website❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalData}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
            Close
          </Button>v
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ConfModal;