import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import ntstlogo from '../../assets/images/nettrainer_logo_64.png'
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
  const [connectionStatus, setConnectionStatus] = useState(statuses.OFFLINE);

  const client = props.client;
  useEffect(() => {
    client.on('connect', () => setConnectionStatus(statuses.CONNECTED));
    client.on('disconnect', () => setConnectionStatus(statuses.DISCONNECTED));
    client.on('error', (error) => setConnectionStatus(statuses.ERROR + " " + error.toString()));
    client.on('offline', () => setConnectionStatus(statuses.OFFLINE));
    client.on('reconnect', () => setConnectionStatus(statuses.RECONNECT));
    client.on('end', () => setConnectionStatus(statuses.END));
  }, [client]);

  console.log("HEADER CLIENT: ", client);
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
            <h1 className='HBar' onClick={() => { window.history.back(); console.log(currentModule); }}> NET-TRAINER-ST</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default HeaderBar;