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
import ResetToDefault from './routes/ResetToDefault';

function App(state) {

  return (
    <div className="App">
      <header>
        <HeaderBar />
      </header>
      <body className="App-body">
          <Router>
            <Routes>
              <Route path='/menu' element={<Menu />} />                                {/* Menu Route (Main page) */}
              <Route path='/passive-sniffing-mod' element={<PassiveSniffingMode />} />  {/* PassiveSniffingMode Route */}
              <Route path='/dnsmod' element={<DNSMod />} />                             {/* DNSMod Route */}
              <Route path='/dnsmasqmod' element={<DNSMasqMod />} />                     {/* DNSMasqMod Route */}
              <Route path='/simplessh' element={<SimpleSSH />} />                     {/* SimpleSSH Route */}
              <Route path='/netcatbd' element={<NetcatBD />} />                     {/* NetcatBD Route */}
              <Route path='/tcpmetasploit' element={<TCPMetasploit />} />                     {/* TCPMetasploit Route */}
              <Route path='/usbpoweronly' element={<USBPowerOnly />} />                     {/* USBPowerOnly Route */}
              <Route path='/reset' element={<ResetToDefault />} />                      {/* ResetToDefault Route */}
              <Route path='*' element={<Navigate to='/menu' />} />                     {/* Switch to menu Route if wrong Route is somehow entered*/}
            </Routes>
          </Router>
      </body>
    </div>
  );
}

export default App;
