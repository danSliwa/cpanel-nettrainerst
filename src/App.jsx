import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Menu from './routes/Menu';
import PassiveSniffingMode from './routes/PassiveSniffingMode';
import DNSMod from './routes/DNSMod';
import DNSMasqMod from './routes/DNSMasqMod';
import SimpleSSH from './routes/SimpleSSH';
import NetcatBD from './routes/NetcatBD';
import TCPMetasploit from './routes/TCPMetasploit';
import USBPowerOnly from './routes/USBPowerOnly';
import HeaderBar from './components/HeaderBar/HeaderBar';
import ARPMod from './routes/ARPMod';
import { useState } from 'react';
import { BsTerminalFill } from 'react-icons/bs';
import OffCanvasConsole from './components/OffCanvasConsole/OffCanvasConsole';
import MainMQTT from './core/MainMQTT';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logo from './assets/images/nettrainer_logo_smaller.png'
const mqttData = require('./assets/MQTT_Topics');
const connectionStatuses = require('./store/ConnectionStatusOptions');



function App(state) {
  const [showTerminal, setShowTerminal] = useState(false);
  const [log, setLog] = useState('');
  const appClient = MainMQTT();
  appClient.subscribe(mqttData.LOG_TRANSFER.logTopic);
  appClient.on('message', (topic, payload, packet) => { setLog(payload.toString()); });

  const [grayOutButton, setGrayOutButton] = useState(false);
  const connStatus = useSelector(state => state.connectionStatus.connectionStatus);

  useEffect(() => {
    console.log("USEEFFECT: ", connStatus);
    if (connStatus === connectionStatuses.CONNECTED) {
      setGrayOutButton(true);
    } else {
      setGrayOutButton(false);
    }
  }, [connStatus])

  const onShowTerminalButtonClick = () => {
    appClient.publish('LOG', 'turnOn');
    setShowTerminal(true);
  }

  return (
    <>
      <header className='Header'>
        <HeaderBar client={appClient} />
      </header>
      <body className="App">
        <div className='Background-stack'>
          <div>
            <img src={Logo} alt="BigCo Inc. logo" className='Big-logo'/>
          </div>
          <div className='Animated-bg'></div>
          <div className='Static-bg'></div>
          <div className='App-body'>
            {/* Router part */}
            <Router>
              <Routes>
                <Route path='/menu' element={<Menu client={appClient} />} />                                {/* Menu Route (Main page) */}
                <Route path='/passive-sniffing-mod' element={<PassiveSniffingMode client={appClient} />} />  {/* PassiveSniffingMode Route */}
                <Route path='/arp-mod' element={<ARPMod client={appClient} />} />                            {/* ARP Mod Route */}
                <Route path='/dnsmod' element={<DNSMod client={appClient} />} />                             {/* DNSMod Route */}
                <Route path='/dnsmasqmod' element={<DNSMasqMod client={appClient} />} />                     {/* DNSMasqMod Route */}
                <Route path='/simplessh' element={<SimpleSSH client={appClient} />} />                     {/* SimpleSSH Route */}
                <Route path='/netcatbd' element={<NetcatBD client={appClient} />} />                     {/* NetcatBD Route */}
                <Route path='/tcpmetasploit' element={<TCPMetasploit client={appClient} />} />                     {/* TCPMetasploit Route */}
                <Route path='/usbpoweronly' element={<USBPowerOnly client={appClient} />} />                     {/* USBPowerOnly Route */}
                <Route path='*' element={<Navigate to='/menu' />} />                     {/* Switch to menu Route if wrong Route is somehow entered*/}
              </Routes>
            </Router>

            {/* OffCanvas Terminal part */}
            <button
              className={grayOutButton ? 'Terminal-button' : 'Terminal-button-disabled'}
              onClick={onShowTerminalButtonClick}
            >
              <BsTerminalFill className='Terminal-icon' />
            </button>
            {showTerminal && <OffCanvasConsole show={showTerminal} setShow={setShowTerminal} log={log} client={appClient} />}
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
