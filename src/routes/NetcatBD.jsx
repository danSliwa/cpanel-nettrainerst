import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ActivationAlert from "../components/ActivationAlert/ActivationAlert";
import ModuleActivateButton from "../components/ModuleActivateButton/ModuleActivateButton";
import './Modules.css'
const modules = require('../store/ModuleOptions');
function NetcatBD({ client }) {
    const [thisModuleIsSelected, setThisModuleIsSelected] = useState(false);
    const selectedModule = useSelector(state => state.modulePicked.modulePicked);
    const module = modules.NETCAD_BD;

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
                <h1 className="HeaderText">NETCAT BD</h1>
                <ModuleActivateButton module={module} client={client} />
            </div>
            <ActivationAlert module={module} show={thisModuleIsSelected}></ActivationAlert>
        </>
    )
}

export default NetcatBD;