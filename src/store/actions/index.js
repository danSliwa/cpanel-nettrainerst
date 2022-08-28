export function getModulePicked() {
    return {
        type: 'GET_MODULE_PICKED',
        payload: 'modulePicked'
    }
}

export function setModulePicked(modulePicked = 'none') {
    return {
        type: 'SET_MODULE_PICKED',
        payload: { modulePicked }
    }
}

export function getConnectionStatus() {
    return {
        type: 'GET_CONNECTION_STATUS',
        payload: 'connectionStatus'
    }
}

export function setConnectionStatus(connectionStatus = 'OFFLINE') {
    return {
        type: 'SET_CONNECTION_STATUS',
        payload: { connectionStatus }
    }
}