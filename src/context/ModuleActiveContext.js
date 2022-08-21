import * as React from 'react'

const ModulePickedContext = React.createContext({ModulePicked: "none"});

function modulePickedReducer(state, action) {
    switch(action.type) {
        case 'PassiveSniffingMode': {
            return {ModulePicked: 'PassiveSniffingMode'}
        }
        case 'DNSMod': {
            return {ModulePicked: 'DNSMod'}
        }
        case 'DNSMasqMod': {
            return {ModulePicked: 'DNSMasqMod'}
        }
        case 'SimpleSSH': {
            return {ModulePicked: 'SimpleSSH'}
        }
        case 'NetcatBD': {
            return {ModulePicked: 'NetcatBD'}
        }
        case 'TCPMetasploit': {
            return {ModulePicked: 'TCPMetasploit'}
        }
        case 'USBPowerOnly': {
            return {ModulePicked: 'USBPowerOnly'}
        }
        case 'ResetToDefault': {
            return {ModulePicked: 'ResetToDefault'}
        }
        default: {
            throw new Error(`Unhandled action type: {$action.type}`)
        }
    }
}

function ModuleActiveProvider({children}) {
    const [state, dispatch] = React.useReducer(modulePickedReducer, {ModulePicked: 'none'});
    const value = {state, dispatch};
    return <ModulePickedContext.Provider value={value}> {children} </ModulePickedContext.Provider>
}

function GetModuleActive() {
    const context = React.useContext(ModulePickedContext);
    return context.ModulePicked;
}

function useSetModuleActive() {
    const context = React.useContext(ModulePickedContext);
    if (context === undefined) {
        throw new Error('useSetModuleActive must be used within a ModuleActiveProvider');
    }
    return context;
}

export {ModuleActiveProvider, useSetModuleActive, GetModuleActive};