import MainMQTT from '../core/MainMQTT';
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import './Menu.css'
import HelpModalJSON from '../assets/HelpModal.json';
import { useDispatch, useSelector } from 'react-redux';
import { setModulePicked } from '../store/actions';
var client = MainMQTT();


function Menu() {
    const navigate = useNavigate();
    var title = [];
    var text = [];
    const modulePicked = useSelector(state => state.modulePicked);

    // const dispatch = useDispatch();
    // const setNewOverlayColor = (newOverlayColor) => dispatch(setGlobalSettings(newOverlayColor, false));
    // console.log(modulePicked);
    const dispatch = useDispatch();
    const pickNewModule = () => dispatch(setModulePicked('DNS_MOD'));

    HelpModalJSON.forEach(modalData => { // Destructuring JSON used for titles and texts for help modals in Menu
        title[modalData.index] = modalData.title;
        text[modalData.index] = modalData.text;
    });

    // Functions called onClick for menu buttons START:
    const PSMClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/passive-sniffing-mod");
        console.log(modulePicked);
    }

    const DNSModClicked = () => {
        client.publish('testMQTT', 'turnOn');
        pickNewModule();
        navigate("/dnsmod");
    }

    const DNSmasqModClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/dnsmasqmod");
    }

    const SimpleSSHClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/simplessh");
    }

    const NetcatBDClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/netcatbd");
    }

    const TCPMetasploit = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/tcpmetasploit");
    }

    const USBPOClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/usbpoweronly");
    }

    const ResetClicked = () => {
        client.publish('testMQTT', 'turnOn');
        navigate("/reset");
    }
    // Functions called onClick for menu buttons END.

    return (
        <>
            <Button title="Passive Sniffing Mod" Clicked={PSMClicked} modalHeading={title[0]} modalText={text[0]}></Button>
            <Button title="DNS Mod" Clicked={DNSModClicked} modalHeading={title[1]} modalText={text[1]}></Button>
            <Button title="DNSmasq Mod" Clicked={DNSmasqModClicked} modalHeading={title[2]} modalText={text[2]}></Button>
            <Button title="Simple SSH" Clicked={SimpleSSHClicked} modalHeading={title[3]} modalText={text[3]}></Button>
            <Button title="Netcat BD" Clicked={NetcatBDClicked} modalHeading={title[4]} modalText={text[4]}></Button>
            <Button title="TCP Metasploit" Clicked={TCPMetasploit} modalHeading={title[5]} modalText={text[5]}></Button>
            <Button title="USB power only" Clicked={USBPOClicked} modalHeading={title[6]} modalText={text[6]}></Button>
            <Button title="Reset to default" Clicked={ResetClicked} modalHeading={title[7]} modalText={text[7]}></Button>
        </>
    );
}


export default Menu;