import './TerminalSim.css'
import Terminal from 'terminal-in-react'
import { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { useEffect } from 'react';



function TerminalSim({ log, client }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (!isVisible) {
                setIsVisible(true);
            }
        }, 3000);
    }, [isVisible]);

    const onRefreshClick = () => {
        client.publish('LOG', 'turnOn');
        setIsVisible(false);
    }

    const sendCommandToTerminal = () => {
        const command = prompt("Enter Linux terminal command (Yes, any command. You can even brick NET-TRAINER-ST here).", 'I understand.')
        client.publish("TERMINAL_COMMAND", command + " > log.txt");
        onRefreshClick();
    }

    return (
        <>
            <br />
            <div className='Refresh-div'>
                <button className={isVisible ? 'Refresh-button' : 'Refresh-button'} onClick={onRefreshClick} >
                    {isVisible ?
                        <FiRefreshCcw />
                        :
                        <>
                            <FiRefreshCcw className={isVisible ? '' : 'Refreshing'} />
                            <h1 style={{color: 'green'}}>REFRESHING...</h1>
                        </>
                    }
                </button>
            </div>
            {log && isVisible &&
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        popup: () => alert("Terminal in React!"),
                        commands: () => alert("List of available commands: commands, popup, ntst"),
                        ntst: () => { sendCommandToTerminal() }
                    }}
                    msg={log}
                >
                </Terminal>
            }
        </>
    );
}

export default TerminalSim;