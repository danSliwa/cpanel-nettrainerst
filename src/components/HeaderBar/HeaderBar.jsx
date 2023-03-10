import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import ntstlogo from '../../assets/images/nettrainer_logo_64.png'
import { setConnectionStatus } from '../../store/actions';
import './HeaderBar.css'

const statuses = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
  OFFLINE: 'OFFLINE',
  RECONNECT: 'TRYING TO CONNECT...',
  END: 'ENDING CONNECTION'
};

const CSSclasses = {
  ConnectedStyle: 'Connection-status-text-connected',
  OfflineStyle: 'Connection-status-text-offline',
  OtherStyle: 'Connection-status-text-other'
}

const connectionTextClassPicker = (CONNECTION_STATUS) => {
  if (CONNECTION_STATUS === statuses.CONNECTED) {
    return CSSclasses.ConnectedStyle;
  } else if (CONNECTION_STATUS === statuses.OFFLINE) {
    return CSSclasses.OfflineStyle;
  } else {
    return CSSclasses.OtherStyle;
  }
}

function HeaderBar(props) {
  const connectionStatus = useSelector(state => state.connectionStatus.connectionStatus);
  const dispatch = useDispatch();

  const client = props.client;
  useEffect(() => {
    const setConnStatus = (status) => dispatch(setConnectionStatus(status));
    client.on('connect', () => setConnStatus(statuses.CONNECTED));
    client.on('disconnect', () => setConnStatus(statuses.DISCONNECTED));
    client.on('error', (error) => setConnStatus(statuses.ERROR + " " + error.toString()));
    client.on('offline', () => setConnStatus(statuses.OFFLINE));
    client.on('reconnect', () => setConnStatus(statuses.RECONNECT));
    client.on('end', () => setConnStatus(statuses.END));
  }, [client, dispatch]);

  const currentModule = useSelector(state => state.modulePicked);
  return (
    <>
      <Navbar className='HBarBG'>
        <Container style={{ justifyContent: 'end' }}>
          <div className='Connection-status'>
            <p className='Connection-status-text-plain'>CONNECTION STATUS:</p>
            <p className={connectionTextClassPicker(connectionStatus)}>{connectionStatus}</p>
          </div>
          <Navbar.Brand className='HBar'>
            <img
              alt=""
              src={ntstlogo}
              width="30"
              height="30"
              margin-top="60"
              style={{ marginTop: "10px", marginRight: "10px" }}
              className="d-inline-block align-top"
            />
            <h1 className='HBar' onClick={() => { window.history.back(); }}> NET-TRAINER-ST</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default HeaderBar;