
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HelpModal(props) {

    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Got it!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HelpModal;