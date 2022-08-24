import './OffCanvasConsole.css'

import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TerminalSim from '../TerminalSim/TerminalSim';



function OffCanvasConsole(props) {
  
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Offcanvas show={props.show} onHide={handleClose} placement='start' backdropClassName='Offcanvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NET-TRAINER-ST Terminal Mirror</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Offcanvas-body'>
          WARNING! This terminal is a mirror! It doesn't act as actual terminal.
          <TerminalSim {...props}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasConsole;

