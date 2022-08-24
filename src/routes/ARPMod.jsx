import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ActivationAlert from "../components/ActivationAlert/ActivationAlert";
import ModuleActivateButton from "../components/ModuleActivateButton/ModuleActivateButton";
import './Modules.css'
const modules = require('../store/ModuleOptions');

function ARPMod() {
    const [thisModuleIsSelected, setThisModuleIsSelected] = useState(false);
    const selectedModule = useSelector(state => state.modulePicked.modulePicked);
    const module = modules.ARP_MOD;

    useEffect(() => {
        if (module === selectedModule) {
            setThisModuleIsSelected(true);
        } else {
            setThisModuleIsSelected(false)
        }
    }, [module, selectedModule])

    return (
        <>
            <div className="Module">
                <h1 className="HeaderText">ARP Mod</h1>
                <ModuleActivateButton module={module} />

            </div>
            <ActivationAlert module={module} show={thisModuleIsSelected}></ActivationAlert>
        </>
    )
}

export default ARPMod;