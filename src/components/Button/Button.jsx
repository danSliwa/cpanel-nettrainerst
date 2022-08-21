import { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import HelpModal from '../HelpModal/HelpModal';
import './Button.css'
function Button(props) {
    const [clicked, setClicked] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setClicked(false)
        }, 50);
    }, [clicked]);


    // {clicked ? "ButtonClicked" : "Button"} style={clicked ? buttonColor : { background: "#fbcd16" }}
    return (
        <span style={{display: 'inline-block'}}>
            <button className='Button' onClick={() => {
                props.Clicked();
                setClicked(true)
            }}>
                {props.title}

            </button>
            <AiOutlineQuestionCircle className='HelpMark' size='40px' onClick={() => setShowHelp(true)} /> 
            {showHelp && <HelpModal setShow={setShowHelp} show={showHelp} heading={props.modalHeading} text={props.modalText}/>}
        </span>

    );
}

export default Button;