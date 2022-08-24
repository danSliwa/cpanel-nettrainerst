import './TerminalSim.css'
import Terminal from 'terminal-in-react'
import LogTransfer from '../../core/LogTransfer';

function TerminalSim(props) {
    console.log(`DUPA TERMINAL: ${props.log}`);
    return (
        <>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    popup: () => alert("Terminal in React!")
                }}
                msg={props.log}
            >

            </Terminal>
        </>
    );
}

export default TerminalSim;