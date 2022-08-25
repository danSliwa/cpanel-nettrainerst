import { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setModulePicked } from '../../store/actions';
import HelpModal from '../HelpModal/HelpModal';

import './Button.css'
const modules = require('../../store/ModuleOptions');

function Button(props) {
    // eslint-disable-next-line no-unused-vars
    const [clicked, setClicked] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const modulePicked = useSelector(state => state.modulePicked.modulePicked);
    const dispatch = useDispatch();
    const pickNewModule = (module) => dispatch(setModulePicked(module));

    useEffect(() => {
        if (modulePicked === modules.none) {
            setDisableButton(false);
        } else if (modulePicked === props.module) {
            setDisableButton(false);
        } else if (props.module === modules.none) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [modulePicked, props.module]);

    const onClick = () => {
        props.Clicked();
        setClicked(true);
        if (props.module === modules.none) {
            setDisableButton(false);
            pickNewModule(modules.none);
        }
    }

    return (
        <span style={{ display: 'inline-block' }}>
            <button className={disableButton ? 'Button-disabled' : 'Button'} disabled={disableButton} onClick={onClick}>
                <p className={disableButton ? 'Text-disabled' : 'Text'}>{props.title}</p>

            </button>
            <AiOutlineQuestionCircle className='HelpMark' size='40px' onClick={() => setShowHelp(true)} />
            {showHelp && <HelpModal setShow={setShowHelp} show={showHelp} heading={props.modalHeading} text={props.modalText} />}
        </span>

    );
}

export default Button;