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
import LogTransfer from './core/LogTransfer';
import { useEffect } from 'react';
const mqttData = require('./assets/MQTT_Topics');



function App(state) {
  const [showTerminal, setShowTerminal] = useState(false);
  const appClient = MainMQTT();

  // useEffect(setInterval(() => {
  //   appClient.publish('LOG', 'turnOn');
  // }, 100));

  const onShowTerminalButtonClick =  () => {
     setShowTerminal(true);
  }
  const log = LogTransfer();
  return (
    <>
      <header className='Header'>
        <HeaderBar />
      </header>
      <body className="App">
        <div className='Background-stack'>
          <div className='Animated-bg'></div>
          <div className='Static-bg'></div>
          <div className='App-body'>
            {/* Router part */}
            <Router>
              <Routes>
                <Route path='/menu' element={<Menu />} />                                {/* Menu Route (Main page) */}
                <Route path='/passive-sniffing-mod' element={<PassiveSniffingMode />} />  {/* PassiveSniffingMode Route */}
                <Route path='/arp-mod' element={<ARPMod />} />                            {/* ARP Mod Route */}
                <Route path='/dnsmod' element={<DNSMod />} />                             {/* DNSMod Route */}
                <Route path='/dnsmasqmod' element={<DNSMasqMod />} />                     {/* DNSMasqMod Route */}
                <Route path='/simplessh' element={<SimpleSSH />} />                     {/* SimpleSSH Route */}
                <Route path='/netcatbd' element={<NetcatBD />} />                     {/* NetcatBD Route */}
                <Route path='/tcpmetasploit' element={<TCPMetasploit />} />                     {/* TCPMetasploit Route */}
                <Route path='/usbpoweronly' element={<USBPowerOnly />} />                     {/* USBPowerOnly Route */}
                <Route path='*' element={<Navigate to='/menu' />} />                     {/* Switch to menu Route if wrong Route is somehow entered*/}
              </Routes>
            </Router>
            {/* OffCanvas Terminal part */}
            <button className='Terminal-button' onClick={onShowTerminalButtonClick}><BsTerminalFill className='Terminal-icon' /></button>
            {console.log(`APP: ${log}`)}
            {showTerminal && <OffCanvasConsole show={showTerminal} setShow={setShowTerminal} log={log}/>}
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
