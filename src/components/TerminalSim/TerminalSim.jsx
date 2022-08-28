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
                <button className={isVisible ? 'Refresh-button' : 'NOCLASS'} onClick={onRefreshClick} >
                    {isVisible ?
                        <FiRefreshCcw />
                        :
                        <>
                            <br /><br /><br /><br /><br /><br /> {/*{Sorry I was lazy}*/}
                            <FiRefreshCcw className={isVisible ? 'NOCLASS' : 'Refreshing'} />
                            <h1 style={{ color: 'green' }}>REFRESHING...</h1>
                        </>
                    }
                </button>
            </div>
            {isVisible &&
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        popup: () => alert("Terminal in React!"),
                        ntst: () => { sendCommandToTerminal() },
                        REFRESH_BUTTON: () => { onRefreshClick() }
                    }}
                    descriptions={{
                        popup: 'Test alert.',
                        ntst: 'ADVANCED: Input any command to NET-TRAINER-ST',
                        show: 'Show the latest terminal log from NET-TRAINER-ST',
                        REFRESH_BUTTON: 'Sometimes the output command does not load, hit the refresh button above terminal to reload'
                    }}
                    msg={log}
                >
                </Terminal>
            }
        </>
    );
}

export default TerminalSim;