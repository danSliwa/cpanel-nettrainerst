import './OffCanvasConsole.css'
import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TerminalSim from '../TerminalSim/TerminalSim';


function OffCanvasConsole({ show, setShow, log, client }) {

  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='start' backdropClassName='Offcanvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NET-TRAINER-ST Terminal Mirror</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Offcanvas-body'>
          <div className='text'>
            <p>WARNING! This terminal is a mirror! It doesn't act as actual terminal. For help, type in: </p>
            <p className='command'>help</p>
          </div>

          <TerminalSim log={log} client={client} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasConsole;

