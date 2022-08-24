import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Fade } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './ActivationAlert.css'

function ActivationAlert(props) {
    const module = useSelector(state => state.modulePicked.modulePicked);
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if (module === props.module) {
            setShow(true);
        } else {
            setShow(false)
        }
    }, [module])

    return (
        <>
            {show ?
                <Alert
                    show={show}
                    key={props.module + 'Activated'}
                    variant='light'
                    className='Alert'
                    onClose={() => setShow(false)}
                    dismissible
                >
                    Module activated: {props.module}!
                    To deactivate, click the button again.
                </Alert>
                :
                ''
            }
        </>
    );
}

export default ActivationAlert;