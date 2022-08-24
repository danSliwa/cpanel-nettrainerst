import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainMQTT from '../../core/MainMQTT';
import { setModulePicked } from '../../store/actions';
import mqttData from '../../assets/MQTT_Topics';
import './ModuleActivateButton.css'

var client = MainMQTT();

function ModuleActivateButton(props) {
    // Function takes props.onClick additional function from /routes/ component folders and props.module
    // Further it dispatches props.module to redux and checks if dispatch is valid and can be done  (i.e no other module is active)
    const module = props.module;
    const [moduleActive, setModuleActive] = useState(false);
    const modulePicked = useSelector(state => state.modulePicked.modulePicked);
    const dispatch = useDispatch();
    const pickNewModule = (module) => dispatch(setModulePicked(module));

    useEffect(() => {
        if (modulePicked === module) {
            setModuleActive(true);
        }
    }, [module, modulePicked]);

    const changeButtonActiveState = () => {
        setModuleActive(!moduleActive);
    }

    const onClick = () => {
        try {
            props.onClick();
        } catch (error) {
            console.warn(`No additional onClick function passed to ModuleActivateButton as props in ${module} Button.`);
        }

        if (moduleActive) {
            pickNewModule('none');
            client.publish(module, mqttData.RESET_TO_DEFAULT.turnOn);
            changeButtonActiveState();
        }

        if (modulePicked === 'none') {
            if (!(modulePicked === module)) {
                pickNewModule(module);
                client.publish(module, 'turnOn')
                changeButtonActiveState();
            }
        }


    }

    return (
        <>
            <button className={moduleActive ? "ModuleActivateButton-active" : "ModuleActivateButton"} onClick={onClick}>
                <p className={moduleActive ? "textButton-active" : "textButton"}>{moduleActive ? 'ACTIVATED' : 'ACTIVATE'}</p>
            </button>
        </>
    );
}

export default ModuleActivateButton;