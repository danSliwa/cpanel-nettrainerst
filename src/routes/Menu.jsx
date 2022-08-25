import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import './Menu.css'
import HelpModalJSON from '../assets/HelpModal.json';
const modules = require('../store/ModuleOptions');

function Menu({client}) {
    const navigate = useNavigate();
    var title = [];
    var text = [];
    HelpModalJSON.forEach(modalData => { // Destructuring JSON used for titles and texts for help modals in Menu
        title[modalData.index] = modalData.title;
        text[modalData.index] = modalData.text;
    });

    // Functions called onClick for menu buttons START:
    const PSMClicked = () => {
        navigate("/passive-sniffing-mod");
    }
    const ARPModClicked = () => {
        navigate("/arp-mod")
    }

    const DNSModClicked = () => {
        navigate("/dnsmod");
    }

    const DNSmasqModClicked = () => {
        navigate("/dnsmasqmod");
    }

    const SimpleSSHClicked = () => {
        navigate("/simplessh");
    }

    const NetcatBDClicked = () => {
        navigate("/netcatbd");
    }

    const TCPMetasploit = () => {
        navigate("/tcpmetasploit");
    }

    const USBPOClicked = () => {
        navigate("/usbpoweronly");
    }

    const ResetClicked = () => {
        navigate("/reset");
    }
    // Functions called onClick for menu buttons END.

    return (
        <>
            <Button
                title="Passive Sniffing Mod"
                Clicked={PSMClicked}
                modalHeading={title[0]}
                modalText={text[0]}
                module={modules.SNIFFING_MODE}
            />
            <Button
                title="ARP Mod"
                Clicked={ARPModClicked}
                modalHeading={title[1]}
                modalText={text[1]}
                module={modules.ARP_MOD}
            />

            <Button
                title="DNS Mod"
                Clicked={DNSModClicked}
                modalHeading={title[2]}
                modalText={text[2]}
                module={modules.DNS_MOD}
            />

            <Button
                title="DNS masq Mod"
                Clicked={DNSmasqModClicked}
                modalHeading={title[3]}
                modalText={text[3]}
                module={modules.DNS_MASQ_MOD}
            />

            <Button
                title="Simple SSH"
                Clicked={SimpleSSHClicked}
                modalHeading={title[4]}
                modalText={text[4]}
                module={modules.SIMPLE_SSH}
            />

            <Button
                title="Netcat BD"
                Clicked={NetcatBDClicked}
                modalHeading={title[5]}
                modalText={text[5]}
                module={modules.NETCAD_BD}
            />

            <Button
                title="TCP Metasploit"
                Clicked={TCPMetasploit}
                modalHeading={title[6]}
                modalText={text[6]}
                module={modules.TCP_METASPLOIT}
            />

            <Button
                title="USB power only"
                Clicked={USBPOClicked}
                modalHeading={title[7]}
                modalText={text[7]}
                module={modules.USD_POWER_ONLY}
            />

            <Button
                title="Reset to default"
                Clicked={ResetClicked}
                modalHeading={title[8]}
                modalText={text[8]}
                module={modules.none}
            />
        </>
    );
}


export default Menu;